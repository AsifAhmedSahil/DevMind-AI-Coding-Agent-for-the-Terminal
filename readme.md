<div align="center">

# 🧠 DevMind

### AI Coding Agent for the Terminal

Build, plan, edit, and chat with your codebase directly from the command line.

---

<img src="https://img.shields.io/badge/Bun-Runtime-black?style=for-the-badge&logo=bun" />
<img src="https://img.shields.io/badge/OpenTUI-Terminal_UI-blue?style=for-the-badge" />
<img src="https://img.shields.io/badge/Hono-API-orange?style=for-the-badge" />
<img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma" />
<img src="https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge" />
<img src="https://img.shields.io/badge/OpenAI-AI-black?style=for-the-badge&logo=openai" />
<img src="https://img.shields.io/badge/Anthropic-Claude-D97757?style=for-the-badge" />
<img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />

<br/>
<br/>

> 🚀 Cursor-style AI coding assistant — built for the terminal.

</div>

---

# ✨ Features

## 💬 AI Terminal Chat
Talk to an AI coding assistant directly inside your terminal.

- Streaming responses
- Persistent conversations
- Multi-model support
- Context-aware coding help

---

## 🧠 Agentic Coding Tools

DevMind can:

- 📂 Read files
- ✏️ Edit files
- 📝 Write code
- 🔍 Search project directories
- ⚡ Execute terminal commands
- 📦 Understand project structure
- 🧠 Maintain coding context

---

## 🚀 Plan & Build Modes

### 🔍 Plan Mode
Safe read-only mode.

The AI can:
- inspect files
- analyze architecture
- generate implementation plans

### 🛠️ Build Mode
Full autonomous coding mode.

The AI can:
- modify files
- execute shell commands
- scaffold features
- refactor code

---

## ⚡ Streaming AI Responses

Built using the AI SDK streaming architecture.

- realtime token streaming
- smooth terminal rendering
- low latency output
- persistent session memory

---

## 🧩 Local Project Awareness

DevMind operates directly inside your current working directory.

Supports:
- recursive directory scanning
- grep/search
- glob patterns
- intelligent context retrieval

---

## 🔐 Authentication

Secure OAuth authentication using Clerk.

- browser login flow
- session persistence
- protected APIs
- user management

---

## 💳 Usage Billing

Integrated Polar billing support.

- credit metering
- usage tracking
- AI request accounting
- SaaS-ready infrastructure

---

# 🏗️ Tech Stack

``` id="jlb0mz"
Frontend/UI       → React + OpenTUI
CLI Runtime       → Bun
Backend API       → Hono
Database          → PostgreSQL (Neon)
ORM               → Prisma
Authentication    → Clerk
AI Streaming      → AI SDK
LLMs              → OpenAI + Anthropic
Billing           → Polar
Error Tracking    → Sentry
Deployment        → Railway
Code Review       → CodeRabbit