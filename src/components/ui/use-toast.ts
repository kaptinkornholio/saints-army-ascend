import * as React from "react"
import { toast as sonnerToast } from "sonner"
import ComingSoonModal from "../ComingSoonModal";

const TOAST_LIMIT = 5
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  variant?: "default" | "destructive" | "success"
  duration?: number
}

const toastActionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

type ActionType = typeof toastActionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast> & { id: string }
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: string
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: string
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case toastActionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case toastActionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case toastActionTypes.DISMISS_TOAST: {
      const { toastId } = action

      if (toastId === undefined) {
        return {
          ...state,
          toasts: state.toasts.map((t) => ({
            ...t,
          })),
        }
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId
            ? {
                ...t,
              }
            : t
        ),
      }
    }

    case toastActionTypes.REMOVE_TOAST:
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: toastActionTypes.UPDATE_TOAST,
      toast: { ...props, id },
    })

  const dismiss = () =>
    dispatch({ type: toastActionTypes.DISMISS_TOAST, toastId: id })

  dispatch({
    type: toastActionTypes.ADD_TOAST,
    toast: {
      ...props,
      id,
      title: props.title,
      description: props.description,
      action: props.action,
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) =>
      dispatch({ type: toastActionTypes.DISMISS_TOAST, toastId }),
  }
}

// Enhanced toast functions with cyberpunk styling
const successToast = (message: string) => {
  sonnerToast.success(message, {
    style: {
      backgroundColor: 'rgba(26, 26, 26, 0.9)',
      color: '#FFD700',
      border: '1px solid #B200FF',
      fontFamily: 'Orbitron, sans-serif',
    },
    icon: '✨',
    position: 'bottom-center',
  });
};

const errorToast = (message: string) => {
  sonnerToast.error(message, {
    style: {
      backgroundColor: 'rgba(26, 26, 26, 0.9)',
      color: '#FF4040',
      border: '1px solid #B200FF',
      fontFamily: 'Orbitron, sans-serif',
    },
    icon: '⚠️',
    position: 'bottom-center',
  });
};

const infoToast = (message: string) => {
  sonnerToast.info(message, {
    style: {
      backgroundColor: 'rgba(26, 26, 26, 0.9)',
      color: '#00C4FF',
      border: '1px solid #B200FF',
      fontFamily: 'Orbitron, sans-serif',
    },
    icon: 'ℹ️',
    position: 'bottom-center',
  });
};

// Export enhanced toast functions
toast.success = successToast;
toast.error = errorToast;
toast.info = infoToast;

export { useToast, toast, ComingSoonModal };
