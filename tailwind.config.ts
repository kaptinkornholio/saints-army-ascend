import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Saints Army NFT custom colors
				saints: {
					dark: "#1A1A1A",
					gold: "#FFD700",
					purple: "#B200FF",
					blue: "#00C4FF"
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				// Updated clean fonts without italics
				sans: ['Inter', 'Source Sans Pro', 'sans-serif'],
				heading: ['Poppins', 'Inter', 'sans-serif'],
				body: ['Inter', 'Source Sans Pro', 'sans-serif'],
				// Remove old italic fonts and replace with clean ones
				inter: ['Inter', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
				nunito: ['Nunito Sans', 'sans-serif'],
				source: ['Source Sans Pro', 'sans-serif']
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 10px 2px rgba(178, 0, 255, 0.3), 0 0 20px 4px rgba(0, 196, 255, 0.2)'
					},
					'50%': { 
						boxShadow: '0 0 15px 3px rgba(178, 0, 255, 0.5), 0 0 30px 6px rgba(0, 196, 255, 0.3)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'glow': {
					'0%, 100%': { 
						textShadow: '0 0 5px rgba(178, 0, 255, 0.5), 0 0 10px rgba(0, 196, 255, 0.3)'
					},
					'50%': { 
						textShadow: '0 0 10px rgba(178, 0, 255, 0.8), 0 0 20px rgba(0, 196, 255, 0.6)'
					}
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'aurora': {
					'0%, 100%': { 
						backgroundPosition: '0% 50%'
					},
					'50%': { 
						backgroundPosition: '100% 50%'
					}
				},
				'bounce-subtle': {
					'0%, 100%': { 
						transform: 'translateY(0)'
					},
					'50%': { 
						transform: 'translateY(-8px)'
					}
				},
				'ping-slow': {
					'75%, 100%': {
						transform: 'scale(1.5)',
						opacity: '0'
					}
				},
				'3d-rotate': {
					'0%': { 
						transform: 'rotateY(0deg)' 
					},
					'25%': { 
						transform: 'rotateY(5deg)' 
					},
					'50%': { 
						transform: 'rotateY(0deg)' 
					},
					'75%': { 
						transform: 'rotateY(-5deg)' 
					},
					'100%': { 
						transform: 'rotateY(0deg)' 
					}
				},
				'holographic': {
					'0%': { 
						backgroundPosition: '0% 50%',
						opacity: '0.5'
					},
					'50%': { 
						backgroundPosition: '100% 50%',
						opacity: '0.8'
					},
					'100%': { 
						backgroundPosition: '0% 50%',
						opacity: '0.5'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s infinite',
				'float': 'float 6s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 12s linear infinite',
				'fade-in': 'fade-in 1s ease-out',
				'glow': 'glow 3s infinite',
				'shimmer': 'shimmer 3s infinite linear',
				'aurora': 'aurora 5s ease infinite',
				'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
				'ping-slow': 'ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite',
				'3d-rotate': '3d-rotate 6s ease-in-out infinite',
				'holographic': 'holographic 4s ease infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
