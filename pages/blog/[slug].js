import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'

// ─── SVG DIAGRAMS ─────────────────────────────────────────────────────────────

function AttentionMechanismDiagram() {
  return (
    <div className="my-8 overflow-x-auto">
      <svg viewBox="0 0 760 460" className="w-full max-w-2xl mx-auto block" style={{ minWidth: 340 }}>
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#475569" />
          </marker>
          <marker id="arrow-accent" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#00d9ff" />
          </marker>
        </defs>

        {/* Title */}
        <text x="380" y="26" textAnchor="middle" fill="#f1f5f9" fontSize="14" fontWeight="bold" fontFamily="Inter, sans-serif">
          Scaled Dot-Product Attention
        </text>

        {/* Input tokens row */}
        {['the', 'cat', 'sat', 'on'].map((tok, i) => (
          <g key={tok}>
            <rect x={60 + i * 160} y="52" width="90" height="32" rx="6" fill="#1e293b" stroke="#334155" />
            <text x={105 + i * 160} y="72" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="Fira Code, monospace">
              &quot;{tok}&quot;
            </text>
          </g>
        ))}

        {/* Embedding arrows down */}
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1={105 + i * 160} y1="84" x2={105 + i * 160} y2="108" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrow)" />
        ))}

        {/* Embedding layer */}
        <rect x="50" y="108" width="650" height="30" rx="6" fill="#0f172a" stroke="#334155" strokeDasharray="4 3" />
        <text x="375" y="128" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="Inter, sans-serif">Input Embeddings  x ∈ ℝ^(seq × d_model)</text>

        {/* Three projection arrows */}
        <line x1="175" y1="138" x2="135" y2="170" stroke="#60a5fa" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="375" y1="138" x2="375" y2="170" stroke="#34d399" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="575" y1="138" x2="615" y2="170" stroke="#a78bfa" strokeWidth="1.5" markerEnd="url(#arrow)" />

        {/* W_Q label */}
        <text x="140" y="164" fill="#60a5fa" fontSize="11" fontWeight="bold" fontFamily="Fira Code, monospace">W_Q</text>
        {/* W_K label */}
        <text x="352" y="164" fill="#34d399" fontSize="11" fontWeight="bold" fontFamily="Fira Code, monospace">W_K</text>
        {/* W_V label */}
        <text x="600" y="164" fill="#a78bfa" fontSize="11" fontWeight="bold" fontFamily="Fira Code, monospace">W_V</text>

        {/* Q box */}
        <rect x="60" y="170" width="150" height="40" rx="8" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="1.5" />
        <text x="135" y="195" textAnchor="middle" fill="#60a5fa" fontSize="14" fontWeight="bold" fontFamily="Fira Code, monospace">Q  (queries)</text>

        {/* K box */}
        <rect x="300" y="170" width="150" height="40" rx="8" fill="#0f2e1e" stroke="#34d399" strokeWidth="1.5" />
        <text x="375" y="195" textAnchor="middle" fill="#34d399" fontSize="14" fontWeight="bold" fontFamily="Fira Code, monospace">K  (keys)</text>

        {/* V box */}
        <rect x="540" y="170" width="150" height="40" rx="8" fill="#2d1b4e" stroke="#a78bfa" strokeWidth="1.5" />
        <text x="615" y="195" textAnchor="middle" fill="#a78bfa" fontSize="14" fontWeight="bold" fontFamily="Fira Code, monospace">V  (values)</text>

        {/* Q and K arrows into MatMul */}
        <line x1="135" y1="210" x2="215" y2="262" stroke="#60a5fa" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="375" y1="210" x2="295" y2="262" stroke="#34d399" strokeWidth="1.5" markerEnd="url(#arrow)" />

        {/* MatMul(Q, K^T) */}
        <rect x="180" y="262" width="230" height="36" rx="8" fill="#0f172a" stroke="#00d9ff" strokeWidth="1.5" />
        <text x="295" y="285" textAnchor="middle" fill="#00d9ff" fontSize="12" fontFamily="Fira Code, monospace">MatMul( Q, Kᵀ )</text>

        {/* Arrow down */}
        <line x1="295" y1="298" x2="295" y2="322" stroke="#00d9ff" strokeWidth="1.5" markerEnd="url(#arrow-accent)" />

        {/* Scale */}
        <rect x="195" y="322" width="200" height="36" rx="8" fill="#0f172a" stroke="#00d9ff" strokeWidth="1.5" />
        <text x="295" y="345" textAnchor="middle" fill="#f1f5f9" fontSize="12" fontFamily="Fira Code, monospace">÷ √d_k   (scale)</text>

        {/* Arrow down */}
        <line x1="295" y1="358" x2="295" y2="382" stroke="#00d9ff" strokeWidth="1.5" markerEnd="url(#arrow-accent)" />

        {/* Softmax */}
        <rect x="210" y="382" width="170" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="295" y="405" textAnchor="middle" fill="#f59e0b" fontSize="12" fontFamily="Fira Code, monospace">Softmax  →  α</text>

        {/* V arrow to final matmul */}
        <line x1="615" y1="210" x2="490" y2="418" stroke="#a78bfa" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="295" y1="418" x2="393" y2="418" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow)" />

        {/* Final MatMul */}
        <rect x="392" y="398" width="200" height="40" rx="8" fill="#0f172a" stroke="#00d9ff" strokeWidth="2" />
        <text x="492" y="423" textAnchor="middle" fill="#00d9ff" fontSize="12" fontFamily="Fira Code, monospace">MatMul( α, V )</text>

        {/* Output arrow */}
        <line x1="492" y1="438" x2="492" y2="455" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrow-accent)" />
        <text x="492" y="455" textAnchor="middle" fill="#f1f5f9" fontSize="12" fontFamily="Fira Code, monospace">Output  ∈ ℝ^(seq × d_v)</text>
      </svg>
      <p className="text-center text-xs font-mono text-text-secondary mt-2">
        Fig 1. Scaled dot-product attention — the fundamental operation inside every Transformer layer
      </p>
    </div>
  )
}

function MultiHeadDiagram() {
  const heads = [0, 1, 2, 3]
  return (
    <div className="my-8 overflow-x-auto">
      <svg viewBox="0 0 720 340" className="w-full max-w-2xl mx-auto block" style={{ minWidth: 340 }}>
        <text x="360" y="22" textAnchor="middle" fill="#f1f5f9" fontSize="14" fontWeight="bold" fontFamily="Inter, sans-serif">
          Multi-Head Attention (h = 4 heads shown)
        </text>

        {/* Input */}
        <rect x="285" y="38" width="150" height="34" rx="6" fill="#1e293b" stroke="#334155" />
        <text x="360" y="60" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="Fira Code, monospace">
          x  (input)
        </text>

        {/* Fan out arrows */}
        {heads.map((i) => (
          <line key={i} x1="360" y1="72" x2={90 + i * 170} y2="110" stroke="#334155" strokeWidth="1.5" markerEnd="url(#arrow)" />
        ))}

        {/* Head boxes */}
        {heads.map((i) => {
          const colors = ['#60a5fa', '#34d399', '#f59e0b', '#a78bfa']
          const fills = ['#1e3a5f', '#0f2e1e', '#2e2000', '#2d1b4e']
          return (
            <g key={i}>
              <rect x={20 + i * 170} y="110" width="140" height="60" rx="8" fill={fills[i]} stroke={colors[i]} strokeWidth="1.5" />
              <text x={90 + i * 170} y="137" textAnchor="middle" fill={colors[i]} fontSize="11" fontWeight="bold" fontFamily="Fira Code, monospace">
                Head {i + 1}
              </text>
              <text x={90 + i * 170} y="155" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="Fira Code, monospace">
                Attn(QWᵢ,KWᵢ,VWᵢ)
              </text>
            </g>
          )
        })}

        {/* Concat arrow */}
        {heads.map((i) => (
          <line key={i} x1={90 + i * 170} y1="170" x2={90 + i * 170} y2="210" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrow)" />
        ))}

        {/* Concat box */}
        <rect x="60" y="210" width="600" height="36" rx="8" fill="#0f172a" stroke="#00d9ff" strokeWidth="1.5" />
        <text x="360" y="233" textAnchor="middle" fill="#00d9ff" fontSize="12" fontFamily="Fira Code, monospace">
          Concat( head₁, head₂, head₃, head₄ )
        </text>

        {/* Linear projection */}
        <line x1="360" y1="246" x2="360" y2="272" stroke="#00d9ff" strokeWidth="1.5" markerEnd="url(#arrow-accent)" />
        <rect x="235" y="272" width="250" height="36" rx="8" fill="#1e293b" stroke="#00d9ff" strokeWidth="2" />
        <text x="360" y="295" textAnchor="middle" fill="#f1f5f9" fontSize="12" fontFamily="Fira Code, monospace">
          Linear projection  W^O
        </text>

        <line x1="360" y1="308" x2="360" y2="330" stroke="#00d9ff" strokeWidth="1.5" markerEnd="url(#arrow-accent)" />
        <text x="360" y="330" textAnchor="middle" fill="#f1f5f9" fontSize="12" fontFamily="Fira Code, monospace">
          Output  ∈ ℝ^(seq × d_model)
        </text>
      </svg>
      <p className="text-center text-xs font-mono text-text-secondary mt-2">
        Fig 2. Each head learns different relationship patterns; outputs are concatenated then projected
      </p>
    </div>
  )
}

function EncoderBlockDiagram() {
  return (
    <div className="my-8 overflow-x-auto">
      <svg viewBox="0 0 400 500" className="w-full max-w-sm mx-auto block" style={{ minWidth: 280 }}>
        <text x="200" y="22" textAnchor="middle" fill="#f1f5f9" fontSize="14" fontWeight="bold" fontFamily="Inter, sans-serif">
          Transformer Encoder Block
        </text>

        {/* Input */}
        <rect x="130" y="36" width="140" height="34" rx="6" fill="#1e293b" stroke="#334155" />
        <text x="200" y="58" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="Fira Code, monospace">Input  xᵢ</text>

        <line x1="200" y1="70" x2="200" y2="90" stroke="#334155" strokeWidth="1.5" markerEnd="url(#arrow)" />

        {/* MHA box */}
        <rect x="80" y="90" width="240" height="46" rx="8" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="1.5" />
        <text x="200" y="110" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="bold" fontFamily="Fira Code, monospace">Multi-Head Attention</text>
        <text x="200" y="128" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="Fira Code, monospace">h = 8 heads</text>

        {/* Residual connection for MHA */}
        <line x1="200" y1="136" x2="200" y2="152" stroke="#334155" strokeWidth="1.5" />
        <line x1="60" y1="58" x2="60" y2="158" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="60" y1="158" x2="148" y2="158" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <text x="48" y="115" fill="#f59e0b" fontSize="9" fontFamily="Fira Code, monospace" transform="rotate(-90,48,115)">residual</text>

        {/* Add & Norm 1 */}
        <rect x="120" y="152" width="160" height="34" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="200" y="174" textAnchor="middle" fill="#f59e0b" fontSize="11" fontFamily="Fira Code, monospace">Add &amp; LayerNorm</text>

        <line x1="200" y1="186" x2="200" y2="206" stroke="#334155" strokeWidth="1.5" markerEnd="url(#arrow)" />

        {/* FFN */}
        <rect x="80" y="206" width="240" height="46" rx="8" fill="#0f2e1e" stroke="#34d399" strokeWidth="1.5" />
        <text x="200" y="224" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="bold" fontFamily="Fira Code, monospace">Feed-Forward Network</text>
        <text x="200" y="242" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="Fira Code, monospace">Linear → ReLU → Linear</text>

        {/* Residual connection for FFN */}
        <line x1="200" y1="252" x2="200" y2="272" stroke="#334155" strokeWidth="1.5" />
        <line x1="340" y1="175" x2="340" y2="278" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="340" y1="278" x2="252" y2="278" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow)" />

        {/* Add & Norm 2 */}
        <rect x="120" y="272" width="160" height="34" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="200" y="294" textAnchor="middle" fill="#f59e0b" fontSize="11" fontFamily="Fira Code, monospace">Add &amp; LayerNorm</text>

        <line x1="200" y1="306" x2="200" y2="326" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrow-accent)" />

        {/* Output */}
        <rect x="120" y="326" width="160" height="34" rx="6" fill="#0f172a" stroke="#00d9ff" strokeWidth="2" />
        <text x="200" y="348" textAnchor="middle" fill="#00d9ff" fontSize="12" fontFamily="Fira Code, monospace">Output  xᵢ₊₁</text>

        <text x="200" y="395" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="Inter, sans-serif">
          This block × N (typically 6 or 12)
        </text>
        <line x1="200" y1="400" x2="200" y2="440" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
        <rect x="120" y="440" width="160" height="34" rx="6" fill="#1e293b" stroke="#334155" strokeDasharray="4 3" />
        <text x="200" y="462" textAnchor="middle" fill="#475569" fontSize="11" fontFamily="Fira Code, monospace">…  ×  N  …</text>
      </svg>
      <p className="text-center text-xs font-mono text-text-secondary mt-2">
        Fig 3. One Transformer encoder block — stacked N times (N=6 in the original paper)
      </p>
    </div>
  )
}

function RLHFPipelineDiagram() {
  return (
    <div className="my-8 overflow-x-auto">
      <svg viewBox="0 0 760 320" className="w-full max-w-3xl mx-auto block" style={{ minWidth: 380 }}>
        <text x="380" y="22" textAnchor="middle" fill="#f1f5f9" fontSize="14" fontWeight="bold" fontFamily="Inter, sans-serif">
          The Three-Stage RLHF Pipeline
        </text>

        {/* Stage 1 */}
        <rect x="20" y="50" width="200" height="200" rx="12" fill="#0f2e1e" stroke="#34d399" strokeWidth="1.5" />
        <text x="120" y="78" textAnchor="middle" fill="#34d399" fontSize="13" fontWeight="bold" fontFamily="Inter, sans-serif">Stage 1: SFT</text>
        <text x="120" y="96" textAnchor="middle" fill="#34d399" fontSize="10" fontFamily="Fira Code, monospace">Supervised Fine-Tuning</text>
        <rect x="40" y="110" width="160" height="30" rx="6" fill="#1e293b" stroke="#334155" />
        <text x="120" y="130" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="Inter, sans-serif">Human demonstrations</text>
        <line x1="120" y1="140" x2="120" y2="158" stroke="#334155" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <rect x="40" y="158" width="160" height="30" rx="6" fill="#1e293b" stroke="#34d399" />
        <text x="120" y="178" textAnchor="middle" fill="#34d399" fontSize="11" fontFamily="Fira Code, monospace">π_SFT</text>
        <text x="120" y="222" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Inter, sans-serif">Fine-tune pretrained LLM</text>
        <text x="120" y="236" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Inter, sans-serif">on high-quality Q&amp;A pairs</text>

        {/* Arrow 1→2 */}
        <line x1="220" y1="150" x2="270" y2="150" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrow-accent)" />

        {/* Stage 2 */}
        <rect x="270" y="50" width="220" height="200" rx="12" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="1.5" />
        <text x="380" y="78" textAnchor="middle" fill="#a78bfa" fontSize="13" fontWeight="bold" fontFamily="Inter, sans-serif">Stage 2: Reward Model</text>
        <text x="380" y="96" textAnchor="middle" fill="#a78bfa" fontSize="10" fontFamily="Fira Code, monospace">RM Training</text>
        <rect x="290" y="110" width="180" height="30" rx="6" fill="#1e293b" stroke="#334155" />
        <text x="380" y="130" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="Inter, sans-serif">Human preference pairs</text>
        <line x1="380" y1="140" x2="380" y2="158" stroke="#334155" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <rect x="290" y="158" width="180" height="30" rx="6" fill="#1e293b" stroke="#a78bfa" />
        <text x="380" y="178" textAnchor="middle" fill="#a78bfa" fontSize="11" fontFamily="Fira Code, monospace">r_θ(x, y) → score</text>
        <text x="380" y="222" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Inter, sans-serif">Learn scalar reward from</text>
        <text x="380" y="236" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Inter, sans-serif">pairwise rankings (y₁ &gt; y₂)</text>

        {/* Arrow 2→3 */}
        <line x1="490" y1="150" x2="540" y2="150" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrow-accent)" />

        {/* Stage 3 */}
        <rect x="540" y="50" width="200" height="200" rx="12" fill="#3b1a1a" stroke="#f87171" strokeWidth="1.5" />
        <text x="640" y="78" textAnchor="middle" fill="#f87171" fontSize="13" fontWeight="bold" fontFamily="Inter, sans-serif">Stage 3: PPO</text>
        <text x="640" y="96" textAnchor="middle" fill="#f87171" fontSize="10" fontFamily="Fira Code, monospace">RL Fine-Tuning</text>
        <rect x="560" y="110" width="160" height="30" rx="6" fill="#1e293b" stroke="#334155" />
        <text x="640" y="130" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="Fira Code, monospace">π_SFT  →  π_RL</text>
        <line x1="640" y1="140" x2="640" y2="158" stroke="#334155" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <rect x="560" y="158" width="160" height="30" rx="6" fill="#1e293b" stroke="#f87171" />
        <text x="640" y="178" textAnchor="middle" fill="#f87171" fontSize="11" fontFamily="Fira Code, monospace">r_θ − β·KL(π‖π_SFT)</text>
        <text x="640" y="222" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Inter, sans-serif">Maximise reward while</text>
        <text x="640" y="236" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Inter, sans-serif">staying close to π_SFT</text>

        {/* Bottom label */}
        <text x="380" y="290" textAnchor="middle" fill="#475569" fontSize="10" fontFamily="Inter, sans-serif">
          β controls the KL penalty — the key hyperparameter preventing reward hacking
        </text>
      </svg>
      <p className="text-center text-xs font-mono text-text-secondary mt-2">
        Fig 4. The RLHF pipeline: SFT seeds the policy, the reward model encodes preferences, PPO optimises it
      </p>
    </div>
  )
}

function GradientBoostingDiagram() {
  return (
    <div className="my-8 overflow-x-auto">
      <svg viewBox="0 0 760 300" className="w-full max-w-3xl mx-auto block" style={{ minWidth: 380 }}>
        <text x="380" y="22" textAnchor="middle" fill="#f1f5f9" fontSize="14" fontWeight="bold" fontFamily="Inter, sans-serif">
          Gradient Boosting: Sequential Residual Fitting
        </text>

        {/* F_0 */}
        <rect x="20" y="50" width="120" height="180" rx="10" fill="#1e293b" stroke="#60a5fa" strokeWidth="1.5" />
        <text x="80" y="78" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="bold" fontFamily="Fira Code, monospace">F₀</text>
        <text x="80" y="98" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="Inter, sans-serif">mean(y)</text>
        <rect x="35" y="110" width="90" height="60" rx="6" fill="#0f172a" stroke="#334155" />
        <text x="80" y="135" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Fira Code, monospace">ŷ = 5.2</text>
        <text x="80" y="150" textAnchor="middle" fill="#f87171" fontSize="9" fontFamily="Fira Code, monospace">r: [1.8, -0.2,</text>
        <text x="80" y="163" textAnchor="middle" fill="#f87171" fontSize="9" fontFamily="Fira Code, monospace">   3.1, …]</text>
        <text x="80" y="208" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Inter, sans-serif">Initial guess</text>
        <text x="80" y="220" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Inter, sans-serif">+ residuals</text>

        {/* Plus arrow */}
        <line x1="140" y1="140" x2="165" y2="140" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrow-accent)" />
        <text x="152" y="132" fill="#00d9ff" fontSize="14" textAnchor="middle" fontWeight="bold">+</text>

        {/* h_1 */}
        <rect x="165" y="50" width="120" height="180" rx="10" fill="#0f2e1e" stroke="#34d399" strokeWidth="1.5" />
        <text x="225" y="78" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="bold" fontFamily="Fira Code, monospace">h₁</text>
        <text x="225" y="98" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="Inter, sans-serif">Tree on r(F₀)</text>
        <rect x="180" y="110" width="90" height="70" rx="6" fill="#0f172a" stroke="#334155" />
        <line x1="225" y1="115" x2="225" y2="130" stroke="#334155" strokeWidth="1" />
        <line x1="200" y1="130" x2="250" y2="130" stroke="#334155" strokeWidth="1" />
        <line x1="200" y1="130" x2="200" y2="145" stroke="#334155" strokeWidth="1" />
        <line x1="250" y1="130" x2="250" y2="145" stroke="#334155" strokeWidth="1" />
        <text x="200" y="155" textAnchor="middle" fill="#34d399" fontSize="9" fontFamily="Fira Code, monospace">1.7</text>
        <text x="250" y="155" textAnchor="middle" fill="#f87171" fontSize="9" fontFamily="Fira Code, monospace">-0.1</text>
        <text x="225" y="208" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Inter, sans-serif">Learn residuals</text>
        <text x="225" y="220" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Inter, sans-serif">with a tree</text>

        <line x1="285" y1="140" x2="310" y2="140" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrow-accent)" />
        <text x="297" y="132" fill="#00d9ff" fontSize="14" textAnchor="middle" fontWeight="bold">+</text>

        {/* h_2 */}
        <rect x="310" y="50" width="120" height="180" rx="10" fill="#2e2000" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="370" y="78" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold" fontFamily="Fira Code, monospace">h₂</text>
        <text x="370" y="98" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="Inter, sans-serif">Tree on r(F₁)</text>
        <rect x="325" y="110" width="90" height="70" rx="6" fill="#0f172a" stroke="#334155" />
        <line x1="370" y1="115" x2="370" y2="130" stroke="#334155" strokeWidth="1" />
        <line x1="345" y1="130" x2="395" y2="130" stroke="#334155" strokeWidth="1" />
        <line x1="345" y1="130" x2="345" y2="145" stroke="#334155" strokeWidth="1" />
        <line x1="395" y1="130" x2="395" y2="145" stroke="#334155" strokeWidth="1" />
        <text x="345" y="155" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="Fira Code, monospace">0.2</text>
        <text x="395" y="155" textAnchor="middle" fill="#34d399" fontSize="9" fontFamily="Fira Code, monospace">-0.3</text>
        <text x="370" y="208" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Inter, sans-serif">Smaller residuals</text>
        <text x="370" y="220" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Inter, sans-serif">each step</text>

        {/* Dots */}
        <text x="465" y="148" fill="#475569" fontSize="22" fontWeight="bold">…</text>

        <line x1="500" y1="140" x2="525" y2="140" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrow-accent)" />
        <text x="512" y="132" fill="#00d9ff" fontSize="14" textAnchor="middle" fontWeight="bold">+</text>

        {/* h_M */}
        <rect x="525" y="50" width="120" height="180" rx="10" fill="#2d1b4e" stroke="#a78bfa" strokeWidth="1.5" />
        <text x="585" y="78" textAnchor="middle" fill="#a78bfa" fontSize="12" fontWeight="bold" fontFamily="Fira Code, monospace">h_M</text>
        <text x="585" y="98" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="Inter, sans-serif">Tree on r(F_{M-1})</text>
        <rect x="540" y="110" width="90" height="70" rx="6" fill="#0f172a" stroke="#334155" />
        <line x1="585" y1="115" x2="585" y2="130" stroke="#334155" strokeWidth="1" />
        <line x1="560" y1="130" x2="610" y2="130" stroke="#334155" strokeWidth="1" />
        <line x1="560" y1="130" x2="560" y2="145" stroke="#334155" strokeWidth="1" />
        <line x1="610" y1="130" x2="610" y2="145" stroke="#334155" strokeWidth="1" />
        <text x="560" y="155" textAnchor="middle" fill="#a78bfa" fontSize="9" fontFamily="Fira Code, monospace">0.01</text>
        <text x="610" y="155" textAnchor="middle" fill="#a78bfa" fontSize="9" fontFamily="Fira Code, monospace">0.02</text>
        <text x="585" y="208" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Inter, sans-serif">Near-zero</text>
        <text x="585" y="220" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Inter, sans-serif">residuals</text>

        {/* Final = */}
        <text x="660" y="148" fill="#00d9ff" fontSize="18" fontWeight="bold">=</text>

        {/* F_M */}
        <rect x="690" y="90" width="55" height="100" rx="8" fill="#0f172a" stroke="#00d9ff" strokeWidth="2" />
        <text x="717" y="138" textAnchor="middle" fill="#00d9ff" fontSize="12" fontWeight="bold" fontFamily="Fira Code, monospace">F_M</text>
        <text x="717" y="155" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Inter, sans-serif">Final</text>
        <text x="717" y="168" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Inter, sans-serif">model</text>
      </svg>
      <p className="text-center text-xs font-mono text-text-secondary mt-2">
        Fig 5. Gradient boosting adds trees sequentially, each correcting the previous model&apos;s residuals
      </p>
    </div>
  )
}

// ─── ARTICLE CONTENT ─────────────────────────────────────────────────────────

const articles = {
  'transformers-self-attention': {
    title: 'Self-Attention Demystified: Understanding Transformers from First Principles',
    subtitle:
      'A complete technical breakdown of the architecture that changed everything — with math, code, and diagrams',
    date: 'November 12, 2024',
    readTime: '20 min read',
    category: 'Deep Learning',
    tags: ['Transformers', 'NLP', 'Self-Attention', 'PyTorch', 'Architecture'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1400&q=85',
    toc: [
      'Why RNNs Hit a Wall',
      'The Core Insight: Attention as Soft Retrieval',
      'Scaled Dot-Product Attention: The Full Math',
      'Multi-Head Attention',
      'Positional Encoding',
      'The Full Encoder Block',
      "Beyond NLP: Vision Transformers",
      'Practical Lessons from Implementation',
    ],
    content: [
      {
        type: 'text',
        text: `When "Attention is All You Need" appeared on arXiv in June 2017, I was partway through a machine learning course and had just spent two weeks trying to debug a vanishing-gradient problem in a stacked LSTM. I read the paper three times before I really understood what was being proposed. The idea seemed almost too simple: throw out recurrence entirely, replace it with attention, and scale it up. No hidden state threading through time. No sequential dependency. Just matrix multiplications and a clever normalization trick.`,
      },
      {
        type: 'text',
        text: `Seven years later, the Transformer architecture underpins essentially every state-of-the-art system in NLP (BERT, GPT-4, T5, LLaMA), vision (ViT, DINO), protein folding (AlphaFold 2), speech (Whisper), and multi-modal systems (GPT-4V, Gemini). If you're serious about working with modern AI, this architecture is not optional background knowledge — it's the foundation everything else is built on. This article is the thorough explanation I wish had existed when I was learning.`,
      },
      {
        type: 'h2',
        text: 'Why RNNs Hit a Wall',
      },
      {
        type: 'text',
        text: `The dominant paradigm before Transformers was the recurrent neural network, specifically LSTMs (Hochreiter & Schmidhuber, 1997) and GRUs (Cho et al., 2014). These work by processing one token at a time, updating a hidden state vector at each step. The hidden state is supposed to summarize everything seen so far — but in practice, compressing a 512-token document into a fixed-size vector is lossy by definition.`,
      },
      {
        type: 'text',
        text: `Two fundamental problems compound each other. First, the vanishing gradient problem: when backpropagating through hundreds of timesteps, gradients either explode or shrink to zero. LSTMs mitigate this with gating mechanisms, but they don't solve it. Second, sequential computation: each step depends on the previous one, which means you cannot parallelize training over the sequence dimension. On a GPU with thousands of cores, that's a massive bottleneck.`,
      },
      {
        type: 'callout',
        kind: 'insight',
        title: 'The seq2seq attention addendum',
        text: `Bahdanau et al. (2014) partly fixed the long-range dependency problem by adding an attention mechanism on top of encoder-decoder RNNs, letting the decoder look directly at all encoder states when generating each token. This was a major step. But the base computation was still sequential. "Attention is All You Need" took the logical conclusion: if attention is what actually does the work, why keep the RNN at all?`,
      },
      {
        type: 'h2',
        text: 'The Core Insight: Attention as Soft Retrieval',
      },
      {
        type: 'text',
        text: `Here's the intuition that made everything click for me. Think of self-attention as a soft database lookup. A standard database lookup takes a query, matches it against a set of keys, and returns the value associated with the matching key. Self-attention does the same thing — but instead of a hard match, it returns a weighted average of all values, where the weights come from the similarity between the query and every key.`,
      },
      {
        type: 'text',
        text: `In the Transformer, for each token in the sequence, you compute three vectors: a Query (Q) representing "what am I looking for?"), a Key (K) representing "what do I contain?"), and a Value (V) representing "what information do I carry?"). These are all linear projections of the same input embedding, learned during training. The attention operation then computes how much each position should attend to every other position — including itself.`,
      },
      {
        type: 'h2',
        text: 'Scaled Dot-Product Attention: The Full Math',
      },
      {
        type: 'text',
        text: `Given an input matrix X ∈ ℝ^(n × d_model) where n is the sequence length, we project it into Q, K, V using learned weight matrices:`,
      },
      {
        type: 'formula',
        text: `Q = X · W_Q     (W_Q ∈ ℝ^(d_model × d_k))
K = X · W_K     (W_K ∈ ℝ^(d_model × d_k))
V = X · W_V     (W_V ∈ ℝ^(d_model × d_v))`,
      },
      {
        type: 'text',
        text: `The attention output is then:`,
      },
      {
        type: 'formula',
        text: `Attention(Q, K, V) = softmax( Q·Kᵀ / √d_k ) · V`,
      },
      {
        type: 'text',
        text: `The division by √d_k is not cosmetic — it's critical. The dot products Q·Kᵀ grow in magnitude as d_k increases (the variance of the dot product is d_k for random unit vectors). Without scaling, the softmax receives very large inputs, pushes into regions where its gradient nearly vanishes, and training stalls. Dividing by √d_k keeps the inputs to softmax in a reasonable variance range.`,
      },
      { type: 'diagram', id: 'attention' },
      {
        type: 'text',
        text: `Here's the full PyTorch implementation. I deliberately keep it explicit — no clever tricks — so every line maps directly to the math:`,
      },
      {
        type: 'code',
        language: 'python',
        code: `import torch
import torch.nn as nn
import torch.nn.functional as F
import math

class ScaledDotProductAttention(nn.Module):
    """
    Attention(Q, K, V) = softmax(Q·Kᵀ / √d_k) · V
    """
    def forward(self, Q, K, V, mask=None):
        d_k = Q.size(-1)

        # Compute similarity scores: (batch, heads, seq, seq)
        scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(d_k)

        # Apply causal mask if provided (for decoder self-attention)
        if mask is not None:
            scores = scores.masked_fill(mask == 0, float('-inf'))

        # Softmax over the key dimension
        attn_weights = F.softmax(scores, dim=-1)

        # Weighted sum of values
        output = torch.matmul(attn_weights, V)
        return output, attn_weights


class MultiHeadAttention(nn.Module):
    def __init__(self, d_model=512, num_heads=8):
        super().__init__()
        assert d_model % num_heads == 0
        self.d_model = d_model
        self.num_heads = num_heads
        self.d_k = d_model // num_heads  # dimension per head

        # Projection matrices (all in one for efficiency)
        self.W_Q = nn.Linear(d_model, d_model)
        self.W_K = nn.Linear(d_model, d_model)
        self.W_V = nn.Linear(d_model, d_model)
        self.W_O = nn.Linear(d_model, d_model)

        self.attention = ScaledDotProductAttention()

    def split_heads(self, x, batch_size):
        # (batch, seq, d_model) → (batch, heads, seq, d_k)
        x = x.view(batch_size, -1, self.num_heads, self.d_k)
        return x.transpose(1, 2)

    def forward(self, x, mask=None):
        batch_size, seq_len, _ = x.shape

        # Project inputs to Q, K, V
        Q = self.split_heads(self.W_Q(x), batch_size)
        K = self.split_heads(self.W_K(x), batch_size)
        V = self.split_heads(self.W_V(x), batch_size)

        # Run attention on all heads in parallel
        attn_output, _ = self.attention(Q, K, V, mask)

        # Concat heads: (batch, heads, seq, d_k) → (batch, seq, d_model)
        attn_output = attn_output.transpose(1, 2).contiguous()
        attn_output = attn_output.view(batch_size, seq_len, self.d_model)

        # Final linear projection
        return self.W_O(attn_output)`,
      },
      {
        type: 'h2',
        text: 'Multi-Head Attention',
      },
      {
        type: 'text',
        text: `A single attention head can only capture one "type" of relationship at a time. Multi-head attention runs h independent attention operations in parallel, each in a lower-dimensional subspace of size d_k = d_model / h. The outputs are concatenated and projected back to d_model.`,
      },
      {
        type: 'text',
        text: `In practice, different heads specialize. Some heads in BERT reliably attend to syntactic relationships (verb-subject agreement), others to semantic associations, others to positional patterns. This emergent specialization — not explicitly trained for — is one of the more fascinating properties of the architecture. You can visualize it using the BertViz tool, which I found essential for building intuition while implementing these systems.`,
      },
      { type: 'diagram', id: 'multihead' },
      {
        type: 'h2',
        text: 'Positional Encoding',
      },
      {
        type: 'text',
        text: `There's a subtle problem: attention is permutation-equivariant by design. Shuffle the input tokens and the output shuffles in exactly the same way — the attention mechanism has no inherent sense of position or order. For language, order is everything. The original paper uses sinusoidal positional encodings added to the input embeddings before the first layer:`,
      },
      {
        type: 'formula',
        text: `PE(pos, 2i)   = sin( pos / 10000^(2i/d_model) )
PE(pos, 2i+1) = cos( pos / 10000^(2i/d_model) )`,
      },
      {
        type: 'text',
        text: `The genius of this choice: the relative position between two tokens can always be represented as a linear function of their positional encodings, regardless of their absolute positions. This helps the model generalise to sequence lengths it hasn't seen during training. Modern models (like RoPE and ALiBi) have since developed better positional encodings, but the original sinusoidal scheme is elegant and still worth understanding.`,
      },
      {
        type: 'code',
        language: 'python',
        code: `class SinusoidalPositionalEncoding(nn.Module):
    def __init__(self, d_model, max_seq_len=5000):
        super().__init__()

        pe = torch.zeros(max_seq_len, d_model)
        position = torch.arange(0, max_seq_len, dtype=torch.float).unsqueeze(1)

        # Frequencies: 1/10000^(2i/d_model)
        div_term = torch.exp(
            torch.arange(0, d_model, 2).float() * (-math.log(10000.0) / d_model)
        )

        pe[:, 0::2] = torch.sin(position * div_term)  # even indices
        pe[:, 1::2] = torch.cos(position * div_term)  # odd indices

        self.register_buffer('pe', pe.unsqueeze(0))  # (1, max_seq, d_model)

    def forward(self, x):
        # x: (batch, seq_len, d_model)
        return x + self.pe[:, :x.size(1)]`,
      },
      {
        type: 'h2',
        text: 'The Full Encoder Block',
      },
      {
        type: 'text',
        text: `Each encoder block consists of two sub-layers: multi-head self-attention and a position-wise feed-forward network (two linear transformations with a ReLU in between). Around each sub-layer there is a residual connection followed by layer normalization. This is the "Pre-LN" vs "Post-LN" distinction: the original paper uses Post-LN (Add & Norm after the sub-layer), but most modern implementations use Pre-LN (normalize before passing into the sub-layer) because it trains more stably with large learning rates.`,
      },
      { type: 'diagram', id: 'encoder' },
      {
        type: 'callout',
        kind: 'warning',
        title: 'Pre-LN vs Post-LN matters',
        text: `The original paper (and BERT) use Post-LN: output = LayerNorm(x + sublayer(x)). GPT-2 and most recent architectures switch to Pre-LN: output = x + sublayer(LayerNorm(x)). Pre-LN allows much larger learning rates and removes the need for warmup in many cases. When you're reproducing results, always check which variant was used.`,
      },
      {
        type: 'h2',
        text: "Beyond NLP: Vision Transformers",
      },
      {
        type: 'text',
        text: `For three years after the original paper, Transformers remained largely a sequence-to-sequence tool. Then in 2020, Dosovitskiy et al. showed that if you cut an image into fixed-size patches (16×16 pixels), flatten each patch into a vector, and treat the sequence of patch vectors exactly like a token sequence, a pure Transformer achieves competitive performance with CNNs on ImageNet — and with enough data, surpasses them.`,
      },
      {
        type: 'text',
        text: `This was conceptually important. It confirmed that the Transformer architecture is not intrinsically tied to sequential language modeling. The inductive biases CNNs exploit (translation equivariance, locality) turn out to not be strictly necessary when you have enough data. ViT models now underpin DALL-E, CLIP, and most state-of-the-art vision-language systems.`,
      },
      {
        type: 'h2',
        text: 'Practical Lessons from Implementation',
      },
      {
        type: 'text',
        text: `Having implemented Transformers from scratch and then worked with them in production, here are the things I wish someone had told me:`,
      },
      {
        type: 'list',
        items: [
          `Attention is O(n²) in both memory and compute with respect to sequence length. For a 2048-token context, the attention matrix has 4M entries per head. Efficient attention variants (FlashAttention, Longformer, BigBird) exist precisely to address this.`,
          `Layer normalization placement matters more than it looks. If training is unstable, switching from Post-LN to Pre-LN often fixes it immediately.`,
          `The feed-forward layers contain the majority of the model parameters. In GPT-style models with d_model=768 and 12 layers, the FFN accounts for roughly two-thirds of the parameter count. Don't underestimate them.`,
          `Attention head pruning experiments (Michel et al., 2019) show that in many tasks, you can prune 90% of the attention heads with minimal performance loss. Most heads in trained models are redundant — which raises real questions about what we think we understand about these architectures.`,
          `The attention weights themselves are not reliable explanations of model behavior. High attention weight does not mean "important for this prediction." This is a point Jain & Wallace (2019) made clearly and it's still underappreciated.`,
        ],
      },
      {
        type: 'callout',
        kind: 'resource',
        title: 'Andrej Karpathy\'s nanoGPT',
        text: `If you want to deeply understand the GPT-style decoder-only Transformer, there is no better resource than Karpathy's nanoGPT — a complete GPT-2 implementation in ~300 lines of PyTorch, trained live in a YouTube video. I rebuilt it three times and learned something new each time.`,
      },
    ],
    references: [
      {
        authors: 'Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I.',
        year: 2017,
        title: 'Attention Is All You Need',
        venue: 'Advances in Neural Information Processing Systems (NeurIPS), 30',
        url: 'https://arxiv.org/abs/1706.03762',
      },
      {
        authors: 'Bahdanau, D., Cho, K., & Bengio, Y.',
        year: 2014,
        title: 'Neural Machine Translation by Jointly Learning to Align and Translate',
        venue: 'ICLR 2015',
        url: 'https://arxiv.org/abs/1409.0473',
      },
      {
        authors: 'Devlin, J., Chang, M. W., Lee, K., & Toutanova, K.',
        year: 2018,
        title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding',
        venue: 'NAACL 2019',
        url: 'https://arxiv.org/abs/1810.04805',
      },
      {
        authors: 'Dosovitskiy, A., Beyer, L., Kolesnikov, A., et al.',
        year: 2020,
        title: 'An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale',
        venue: 'ICLR 2021',
        url: 'https://arxiv.org/abs/2010.11929',
      },
      {
        authors: 'Alammar, J.',
        year: 2018,
        title: 'The Illustrated Transformer',
        venue: 'jalammar.github.io (blog)',
        url: 'https://jalammar.github.io/illustrated-transformer/',
      },
      {
        authors: 'Karpathy, A.',
        year: 2022,
        title: 'nanoGPT: The simplest, fastest repository for training/finetuning medium-sized GPTs',
        venue: 'GitHub',
        url: 'https://github.com/karpathy/nanoGPT',
      },
      {
        authors: 'Michel, P., Levy, O., & Neubig, G.',
        year: 2019,
        title: 'Are Sixteen Heads Really Better than One?',
        venue: 'NeurIPS 2019',
        url: 'https://arxiv.org/abs/1905.10650',
      },
    ],
  },

  'rlhf-demystified': {
    title: 'RLHF Demystified: How We Teach LLMs to Actually Behave',
    subtitle:
      'A rigorous walkthrough of supervised fine-tuning, reward modelling, and PPO — plus why DPO is taking over',
    date: 'January 8, 2025',
    readTime: '22 min read',
    category: 'AI & LLMs',
    tags: ['RLHF', 'LLMs', 'Alignment', 'PPO', 'Fine-tuning', 'DPO'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1400&q=85',
    toc: [
      'The Alignment Problem',
      'Stage 1: Supervised Fine-Tuning (SFT)',
      'Stage 2: Training the Reward Model',
      'Stage 3: PPO Reinforcement Learning',
      'The KL Penalty: Preventing Reward Hacking',
      "Constitutional AI: Anthropic's RLAIF",
      'DPO: A Simpler Alternative',
      'What Can Go Wrong',
    ],
    content: [
      {
        type: 'text',
        text: `A pretrained language model is, fundamentally, a next-token predictor. It has been trained on an enormous corpus of internet text and has learned to model the distribution of human language remarkably well. Ask it a question and it will continue the sequence in a plausible-sounding way — but "plausible continuation" and "useful, accurate, safe answer" are very different things. The raw pretrained model might answer a question about medication dosages by continuing a forum post in the style of a random commenter. It has no concept of helpfulness.`,
      },
      {
        type: 'text',
        text: `RLHF — Reinforcement Learning from Human Feedback — is the technique that bridges this gap. It's what turned GPT-3 into InstructGPT and eventually ChatGPT. Understanding it properly is important not just academically: if you're deploying fine-tuned models, the RLHF pipeline determines much of what you're actually working with.`,
      },
      {
        type: 'h2',
        text: 'The Alignment Problem',
      },
      {
        type: 'text',
        text: `The core challenge is this: we want models that follow instructions, are honest about uncertainty, refuse genuinely harmful requests, and generate responses that humans actually find useful. These properties are hard to specify mathematically. You can't write a loss function that directly captures "be helpful." What you can do is collect human judgments about which responses are better and use those to train a proxy for helpfulness.`,
      },
      {
        type: 'text',
        text: `This is exactly what RLHF does. Rather than hand-crafting a reward function, you learn it from human comparisons. The approach was first demonstrated at scale by Ziegler et al. (2019) for text summarization, extended to dialogue by Stiennon et al. (2020), and then deployed at production scale in InstructGPT (Ouyang et al., 2022) — which was the foundation for ChatGPT.`,
      },
      {
        type: 'h2',
        text: 'Stage 1: Supervised Fine-Tuning (SFT)',
      },
      {
        type: 'text',
        text: `Before any reinforcement learning, you first fine-tune the pretrained model on high-quality demonstration data. Human labellers are given prompts and write ideal responses — responses that are genuinely helpful, accurate, and appropriately formatted. This creates a training set of (prompt, good_response) pairs.`,
      },
      {
        type: 'text',
        text: `Standard supervised fine-tuning on this data with a language modeling objective (cross-entropy loss on the response tokens) gives you a model that is dramatically better at following instructions than the raw pretrained model. The SFT model (π_SFT) is the starting point for all subsequent stages.`,
      },
      {
        type: 'callout',
        kind: 'insight',
        title: 'SFT alone goes surprisingly far',
        text: `In the InstructGPT paper, the SFT model (1.3B parameters) was rated as better than the 175B GPT-3 model by human evaluators on most tasks. This is the "RLHF is inefficient" argument: a small amount of high-quality supervised data is often more impactful than complex RL fine-tuning. However, SFT alone still leaves systematic issues — refusals, sycophancy, factuality — that RL helps correct.`,
      },
      {
        type: 'h2',
        text: 'Stage 2: Training the Reward Model',
      },
      {
        type: 'text',
        text: `The reward model (RM) is a classifier trained to predict which of two responses a human would prefer. Given a prompt x and a pair of responses (y₁, y₂), human labellers mark which is better. The reward model learns a scalar score r_θ(x, y) such that preferred responses get higher scores.`,
      },
      {
        type: 'text',
        text: `The training objective is a pairwise ranking loss. If y_w is the preferred response (winner) and y_l the rejected one (loser):`,
      },
      {
        type: 'formula',
        text: `L_RM = -E[(y_w, y_l) ~ D] [ log σ( r_θ(x, y_w) − r_θ(x, y_l) ) ]`,
      },
      {
        type: 'text',
        text: `This is the Bradley-Terry model applied to response preferences. You train the reward model to assign a higher score to y_w than y_l, using the difference of their scores as input to a sigmoid. In practice, the reward model is typically initialized from the SFT model with the final layer head replaced by a scalar output.`,
      },
      {
        type: 'text',
        text: `Getting good comparison data is expensive. In the InstructGPT study, labellers provided 33,000 pairwise comparisons. Data quality and labeller consistency are major factors — disagreements between labellers introduce noise that the reward model has to average over.`,
      },
      { type: 'diagram', id: 'rlhf' },
      {
        type: 'h2',
        text: 'Stage 3: PPO Reinforcement Learning',
      },
      {
        type: 'text',
        text: `With a trained reward model in hand, you now optimise the language model policy using reinforcement learning. The setup: the LM is the policy π_θ, the prompt x is the state, and the generated response y is the action. The reward signal is r_θ(x, y) from the reward model.`,
      },
      {
        type: 'text',
        text: `The algorithm used is PPO (Proximal Policy Optimization, Schulman et al., 2017) — specifically the PPO-clip variant. PPO is popular here because it's relatively stable and doesn't require second-order gradient computation. The objective being maximised is:`,
      },
      {
        type: 'formula',
        text: `J(π_θ) = E_x~D, y~π_θ [ r_θ(x,y) − β · KL( π_θ(·|x) ‖ π_SFT(·|x) ) ]`,
      },
      {
        type: 'text',
        text: `The first term maximises reward. The second term is the critical KL divergence penalty — I'll explain why it's there in the next section. β is the coefficient that trades off between reward maximisation and staying close to the SFT policy.`,
      },
      {
        type: 'h2',
        text: 'The KL Penalty: Preventing Reward Hacking',
      },
      {
        type: 'text',
        text: `The reward model is an imperfect proxy for human preferences. It was trained on a finite set of comparisons and will have blind spots, inconsistencies, and regions where it gives confidently wrong scores. If you optimise the LM purely to maximise r_θ, it will find and exploit these weaknesses. This is reward hacking: the model learns outputs that get high reward scores without actually being good responses.`,
      },
      {
        type: 'text',
        text: `The KL penalty penalises the policy for deviating too far from the SFT model. Think of it as keeping the LM grounded in the language distribution it was fine-tuned on. Without it, a few thousand PPO steps can push the policy into degenerate outputs — repetitive, incoherent, or nonsensical text that somehow fools the reward model. The β coefficient controls how tight this constraint is.`,
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'Goodhart\'s Law in action',
        text: `"When a measure becomes a target, it ceases to be a good measure." The reward model is not human preference — it's a proxy. Optimising it too hard reliably degrades actual quality. This is not a theoretical concern: OpenAI reported this phenomenon explicitly. Typical training runs are stopped early, before KL divergence becomes too large.`,
      },
      {
        type: 'h2',
        text: "Constitutional AI: Anthropic's RLAIF",
      },
      {
        type: 'text',
        text: `A significant bottleneck in RLHF is the cost of human labelling. Anthropic's Constitutional AI (Bai et al., 2022) addresses this by replacing human comparisons with AI-generated comparisons. Instead of asking humans "which response is better?", you define a set of principles (a "constitution") and ask a stronger AI model to evaluate responses against those principles.`,
      },
      {
        type: 'text',
        text: `This enables much cheaper scaling of the feedback signal. The model being trained can evaluate millions of its own responses against the constitution, generating preference pairs without human input. The resulting pipeline is called RLAIF (Reinforcement Learning from AI Feedback) and is the foundation of Claude's training.`,
      },
      {
        type: 'h2',
        text: 'DPO: A Simpler Alternative',
      },
      {
        type: 'text',
        text: `PPO-based RLHF requires training four models simultaneously (the LM being fine-tuned, a reference LM, the reward model, and a value function) and managing a complex RL training loop. This is computationally expensive and notoriously unstable. In 2023, Rafailov et al. proposed Direct Preference Optimization (DPO) as a cleaner alternative.`,
      },
      {
        type: 'text',
        text: `DPO's insight is that the optimal RLHF policy has a closed-form solution relating it to the reference policy and the reward function. Rather than learning a reward model and then optimising against it, DPO directly optimises the policy using the preference data:`,
      },
      {
        type: 'formula',
        text: `L_DPO = -E[(y_w, y_l)] [ log σ( β · log π_θ(y_w|x)/π_ref(y_w|x) − β · log π_θ(y_l|x)/π_ref(y_l|x) ) ]`,
      },
      {
        type: 'text',
        text: `This is a simple cross-entropy loss that can be computed in a single forward pass through the model. No RL training loop, no reward model, no value function. DPO has become the dominant approach for preference fine-tuning in 2024–2025 because of its simplicity, with variants like IPO, KTO, and ORPO extending it further.`,
      },
      {
        type: 'h2',
        text: 'What Can Go Wrong',
      },
      {
        type: 'list',
        items: [
          `Sycophancy: Models trained with RLHF often learn to tell users what they want to hear rather than what is accurate. Human raters prefer confident, flattering responses — and the reward model picks this up. This is an active research problem.`,
          `Over-refusal: Conversely, models can learn to refuse a wide range of benign requests to avoid any possibility of harmful output. The reward signal from safety refusals is high, and without careful calibration the model becomes uselessly cautious.`,
          `Reward model errors compound: The RM is trained on a biased sample (typically English, typically Western raters). Its judgments reflect the biases of its training data, and those biases get amplified during PPO.`,
          `Length bias: Longer responses tend to receive higher reward scores, even when length adds no value. Models often become verbose as a result — a subtle quality degradation that's hard to filter for in the feedback collection process.`,
        ],
      },
    ],
    references: [
      {
        authors: 'Ouyang, L., Wu, J., Jiang, X., et al.',
        year: 2022,
        title: 'Training language models to follow instructions with human feedback (InstructGPT)',
        venue: 'Advances in Neural Information Processing Systems (NeurIPS), 35',
        url: 'https://arxiv.org/abs/2203.02155',
      },
      {
        authors: 'Christiano, P., Leike, J., Brown, T. B., et al.',
        year: 2017,
        title: 'Deep Reinforcement Learning from Human Preferences',
        venue: 'NeurIPS 2017',
        url: 'https://arxiv.org/abs/1706.03741',
      },
      {
        authors: 'Ziegler, D. M., Stiennon, N., Wu, J., et al.',
        year: 2019,
        title: 'Fine-Tuning Language Models from Human Feedback',
        venue: 'arXiv:1909.08593',
        url: 'https://arxiv.org/abs/1909.08593',
      },
      {
        authors: 'Bai, Y., Jones, A., Ndousse, K., et al.',
        year: 2022,
        title: 'Constitutional AI: Harmlessness from AI Feedback',
        venue: 'Anthropic Technical Report',
        url: 'https://arxiv.org/abs/2212.08073',
      },
      {
        authors: 'Rafailov, R., Sharma, A., Mitchell, E., et al.',
        year: 2023,
        title: 'Direct Preference Optimization: Your Language Model is Secretly a Reward Model',
        venue: 'NeurIPS 2023',
        url: 'https://arxiv.org/abs/2305.18290',
      },
      {
        authors: 'Schulman, J., Wolski, F., Dhariwal, P., Radford, A., & Klimov, O.',
        year: 2017,
        title: 'Proximal Policy Optimization Algorithms',
        venue: 'arXiv:1707.06347',
        url: 'https://arxiv.org/abs/1707.06347',
      },
      {
        authors: 'Stiennon, N., Ouyang, L., Wu, J., et al.',
        year: 2020,
        title: 'Learning to summarize from human feedback',
        venue: 'NeurIPS 2020',
        url: 'https://arxiv.org/abs/2009.01325',
      },
    ],
  },

  'gradient-boosting-xgboost': {
    title: 'Gradient Boosting Under the Hood: From AdaBoost to XGBoost',
    subtitle:
      'Deriving the algorithm from first principles — gradient descent in function space — then understanding what XGBoost actually does differently',
    date: 'August 20, 2024',
    readTime: '17 min read',
    category: 'Machine Learning',
    tags: ['Gradient Boosting', 'XGBoost', 'Ensemble Methods', 'Decision Trees', 'Tabular Data'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85',
    toc: [
      'Why Boosting Works',
      'AdaBoost: The Original Idea',
      'Gradient Boosting: Generalizing to Any Loss',
      'The Algorithm Step by Step',
      'From Scratch: Python Implementation',
      "XGBoost's Key Innovations",
      'LightGBM vs XGBoost vs CatBoost',
      'Practical Tips',
    ],
    content: [
      {
        type: 'text',
        text: `If you've participated in any Kaggle competition involving tabular data in the last decade, you've almost certainly used gradient boosting. XGBoost, LightGBM, and CatBoost dominate these competitions and real-world deployments for structured data, and for good reason: they reliably outperform deep learning on most tabular tasks with a fraction of the compute. But most practitioners treat them as black boxes and tune hyperparameters by grid search. Understanding the underlying algorithm makes you dramatically more effective at using them.`,
      },
      {
        type: 'text',
        text: `This article derives gradient boosting from first principles — not as a recipe to memorise but as a logical consequence of a simple idea. Once you see it clearly, XGBoost's innovations make immediate sense. We'll implement a basic version from scratch in Python, then work through what the production libraries actually do differently.`,
      },
      {
        type: 'h2',
        text: 'Why Boosting Works',
      },
      {
        type: 'text',
        text: `Ensemble methods work by combining many weak learners into a strong one. Bagging (Random Forests) does this by training learners in parallel on bootstrap samples and averaging. Boosting takes a different approach: train learners sequentially, with each new learner focusing on correcting the mistakes of the current ensemble.`,
      },
      {
        type: 'text',
        text: `The theoretical foundation is Schapire's (1990) theorem that a weak learner (better than random by any margin) can be boosted to arbitrary accuracy. This is a strong result — it says that even if you only have a very weak signal, you can amplify it. In practice, shallow decision trees (stumps or depth-3 trees) are the typical weak learner.`,
      },
      {
        type: 'h2',
        text: 'AdaBoost: The Original Idea',
      },
      {
        type: 'text',
        text: `AdaBoost (Freund & Schapire, 1997) was the first practical boosting algorithm. The idea: maintain a weight distribution over training examples. Initially, all examples are weighted equally. After each tree is trained, increase the weight of misclassified examples so the next tree pays more attention to the hard cases. The final prediction is a weighted vote of all trees.`,
      },
      {
        type: 'text',
        text: `AdaBoost worked well for classification but was tied to exponential loss and didn't generalize easily to regression or other objectives. Friedman (2001) saw that AdaBoost was implicitly doing something more general: performing gradient descent in function space. This insight led directly to gradient boosting.`,
      },
      {
        type: 'h2',
        text: 'Gradient Boosting: Generalizing to Any Loss',
      },
      {
        type: 'text',
        text: `Here is the key reframing. Suppose we want to minimize a loss function L(y, F(x)) by finding the best function F. In standard gradient descent, we take steps in parameter space. But what if we take steps in function space directly?`,
      },
      {
        type: 'text',
        text: `At each iteration m, we compute the negative gradient of the loss with respect to the current model predictions F_{m-1}(x). These negative gradients — called pseudo-residuals — tell us the direction in which we should move the prediction for each training example. We then fit a decision tree to these pseudo-residuals (treating them as regression targets), and add a scaled version of that tree to the ensemble.`,
      },
      {
        type: 'formula',
        text: `Pseudo-residuals:  r_i^(m) = -[ ∂L(y_i, F(x_i)) / ∂F(x_i) ]_{F=F_{m-1}}

Update:  F_m(x) = F_{m-1}(x) + η · h_m(x)`,
      },
      {
        type: 'text',
        text: `For squared error loss L(y, F) = (y - F)²/2, the gradient is simply -(y - F), so the pseudo-residuals are exactly the residuals y - F_{m-1}(x). This is why gradient boosting for regression is often described as "fitting trees to residuals" — it's literally true for L2 loss, and approximately true in an appropriate sense for other losses.`,
      },
      { type: 'diagram', id: 'gbdt' },
      {
        type: 'h2',
        text: 'The Algorithm Step by Step',
      },
      {
        type: 'list',
        items: [
          `Initialize F₀(x) = argmin_γ Σ L(y_i, γ) — for MSE this is simply mean(y).`,
          `For m = 1 to M: compute pseudo-residuals r_i^(m) = -∂L/∂F evaluated at F_{m-1}(x_i).`,
          `Fit a decision tree h_m to {(x_i, r_i^(m))}, finding terminal region predictions γ_{jm} for each leaf j.`,
          `Update: F_m(x) = F_{m-1}(x) + η · h_m(x), where η is the learning rate (shrinkage).`,
          `Output F_M(x) as the final model.`,
        ],
      },
      {
        type: 'h2',
        text: 'From Scratch: Python Implementation',
      },
      {
        type: 'code',
        language: 'python',
        code: `import numpy as np
from sklearn.tree import DecisionTreeRegressor

class GradientBoostingRegressor:
    """
    Gradient Boosting with squared error loss.
    Pseudo-residuals = y - F_{m-1}(x)  (gradient of L2 loss)
    """
    def __init__(self, n_estimators=100, learning_rate=0.1, max_depth=3):
        self.n_estimators = n_estimators
        self.learning_rate = learning_rate
        self.max_depth = max_depth
        self.trees = []
        self.F0 = None

    def fit(self, X, y):
        # F_0: constant prediction (mean of y)
        self.F0 = np.mean(y)
        F = np.full(len(y), self.F0, dtype=float)

        for m in range(self.n_estimators):
            # Negative gradient of L2 loss == residuals
            residuals = y - F

            # Fit a regression tree to the pseudo-residuals
            tree = DecisionTreeRegressor(max_depth=self.max_depth)
            tree.fit(X, residuals)

            # Shrinkage: scale by learning rate
            F += self.learning_rate * tree.predict(X)
            self.trees.append(tree)

        return self

    def predict(self, X):
        F = np.full(X.shape[0], self.F0, dtype=float)
        for tree in self.trees:
            F += self.learning_rate * tree.predict(X)
        return F


# Quick validation against sklearn
from sklearn.datasets import make_regression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error

X, y = make_regression(n_samples=1000, n_features=10, noise=0.1, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = GradientBoostingRegressor(n_estimators=200, learning_rate=0.05, max_depth=4)
model.fit(X_train, y_train)

mse = mean_squared_error(y_test, model.predict(X_test))
print(f"Test RMSE: {np.sqrt(mse):.4f}")`,
      },
      {
        type: 'h2',
        text: "XGBoost's Key Innovations",
      },
      {
        type: 'text',
        text: `The vanilla gradient boosting above trains correctly but is too slow and overfit-prone for production use. XGBoost (Chen & Guestrin, 2016) introduced several critical innovations that made it 10-100x faster and better regularised.`,
      },
      {
        type: 'text',
        text: `**Second-order approximation**: Instead of using only the gradient (first derivative) to guide tree fitting, XGBoost uses a second-order Taylor expansion of the loss. For each leaf, the optimal leaf value is computed analytically:`,
      },
      {
        type: 'formula',
        text: `Optimal leaf value:  w*_j = -G_j / (H_j + λ)

where G_j = Σᵢ∈leaf_j gᵢ   (sum of first-order gradients)
      H_j = Σᵢ∈leaf_j hᵢ   (sum of second-order gradients)
      λ = L2 regularisation on leaf weights`,
      },
      {
        type: 'text',
        text: `This closed-form solution means XGBoost doesn't need to do gradient descent inside each tree — it directly computes the optimal split and leaf values. This is both faster and more numerically stable.`,
      },
      {
        type: 'text',
        text: `**Regularization**: XGBoost adds explicit L1 (α) and L2 (λ) regularization on leaf weights, and a penalty on the number of leaves (γ). This significantly reduces overfitting compared to vanilla GBDT.`,
      },
      {
        type: 'text',
        text: `**Column subsampling**: Borrowing from Random Forests, XGBoost randomly selects a subset of features for each tree (and optionally per split). This reduces variance and speeds up training.`,
      },
      {
        type: 'text',
        text: `**Sparsity-aware split finding**: Real datasets have missing values and sparse features. XGBoost learns a default direction for each split (left or right branch) when a feature is missing, enabling efficient handling of sparse data without imputation.`,
      },
      {
        type: 'text',
        text: `**Cache-aware computation**: The tree-building algorithm involves accessing data in non-sequential memory order, which is cache-unfriendly. XGBoost carefully designs its block structure to minimize cache misses — this is one of the primary reasons for its speed advantage.`,
      },
      {
        type: 'h2',
        text: 'LightGBM vs XGBoost vs CatBoost',
      },
      {
        type: 'text',
        text: `Three libraries dominate production gradient boosting. Choosing between them matters, and the differences are not just marketing:`,
      },
      {
        type: 'table',
        headers: ['', 'XGBoost', 'LightGBM', 'CatBoost'],
        rows: [
          ['Tree growth', 'Level-wise', 'Leaf-wise', 'Symmetric (oblivious)'],
          ['Speed', 'Fast', 'Very fast', 'Moderate'],
          ['Memory', 'Moderate', 'Low', 'Moderate'],
          ['Categoricals', 'Needs encoding', 'Basic', 'Native (very strong)'],
          ['GPU support', 'Yes', 'Yes', 'Yes'],
          ['Small data', 'Good', 'Can overfit', 'Very good'],
          ['Large data', 'Good', 'Best', 'Good'],
        ],
      },
      {
        type: 'text',
        text: `LightGBM's leaf-wise growth strategy (grow the leaf with the largest loss reduction, regardless of tree depth) means it finds better splits faster, but requires more careful regularization to avoid overfitting. For large datasets (millions of rows), LightGBM is almost always my first choice. For datasets with many categorical features, CatBoost's native encoding is genuinely better than anything you can do manually.`,
      },
      {
        type: 'h2',
        text: 'Practical Tips',
      },
      {
        type: 'list',
        items: [
          `Lower learning rate + more trees consistently beats higher learning rate + fewer trees, given the same compute budget. Start with lr=0.05 and n_estimators=1000.`,
          `Use early stopping (evaluate on validation set every 10 rounds, stop if no improvement for 50 rounds). This is the single most important hyperparameter decision.`,
          `max_depth=4-6 is usually optimal for XGBoost. LightGBM uses num_leaves instead — 31-127 is a good range. These two parameters are the main drivers of model complexity.`,
          `subsample=0.8 and colsample_bytree=0.8 (training on 80% of rows/columns) almost always helps generalization and provides minor speedup.`,
          `For binary classification, scale_pos_weight = (neg_count / pos_count) handles class imbalance cleanly within XGBoost without resampling.`,
          `Feature importance from gradient boosting is useful but misleading for correlated features. Use SHAP values (the shap library is excellent) for actual feature attribution — they have the correct theoretical properties.`,
        ],
      },
      {
        type: 'callout',
        kind: 'resource',
        title: 'SHAP for interpretability',
        text: `Lundberg & Lee (2017) derived SHAP values — a theoretically grounded attribution method based on Shapley values from game theory. For gradient boosting, SHAP values can be computed exactly in O(TLD) time (T trees, L leaves, D depth), making them practical for production use. The shap library's TreeExplainer is the standard tool.`,
      },
    ],
    references: [
      {
        authors: 'Friedman, J. H.',
        year: 2001,
        title: 'Greedy Function Approximation: A Gradient Boosting Machine',
        venue: 'Annals of Statistics, 29(5), 1189–1232',
        url: 'https://projecteuclid.org/journals/annals-of-statistics/volume-29/issue-5/Greedy-function-approximation-A-gradient-boostingmachine/10.1214/aos/1013203451.full',
      },
      {
        authors: 'Chen, T., & Guestrin, C.',
        year: 2016,
        title: 'XGBoost: A Scalable Tree Boosting System',
        venue: 'KDD 2016',
        url: 'https://arxiv.org/abs/1603.02754',
      },
      {
        authors: 'Ke, G., Meng, Q., Finley, T., Wang, T., Chen, W., Ma, W., Ye, Q., & Liu, T. Y.',
        year: 2017,
        title: 'LightGBM: A Highly Efficient Gradient Boosting Decision Tree',
        venue: 'Advances in Neural Information Processing Systems (NeurIPS), 30',
        url: 'https://proceedings.neurips.cc/paper_files/paper/2017/file/6449f44a102fde848669bdd9eb6b76fa-Paper.pdf',
      },
      {
        authors: 'Prokhorenkova, L., Gusev, G., Vorobev, A., Dorogush, A. V., & Gulin, A.',
        year: 2018,
        title: 'CatBoost: unbiased boosting with categorical features',
        venue: 'NeurIPS 2018',
        url: 'https://arxiv.org/abs/1706.09516',
      },
      {
        authors: 'Freund, Y., & Schapire, R. E.',
        year: 1997,
        title: 'A Decision-Theoretic Generalization of On-Line Learning and an Application to Boosting',
        venue: 'Journal of Computer and System Sciences, 55(1), 119–139',
        url: 'https://www.sciencedirect.com/science/article/pii/S002200009791504X',
      },
      {
        authors: 'Lundberg, S. M., & Lee, S. I.',
        year: 2017,
        title: 'A Unified Approach to Interpreting Model Predictions (SHAP)',
        venue: 'NeurIPS 2017',
        url: 'https://arxiv.org/abs/1705.07874',
      },
      {
        authors: 'Breiman, L.',
        year: 2001,
        title: 'Random Forests',
        venue: 'Machine Learning, 45(1), 5–32',
        url: 'https://link.springer.com/article/10.1023/A:1010933404324',
      },
    ],
  },
}

// ─── BLOCK RENDERER ──────────────────────────────────────────────────────────

function renderBlock(block, idx) {
  const diagramMap = {
    attention: <AttentionMechanismDiagram key={idx} />,
    multihead: <MultiHeadDiagram key={idx} />,
    encoder: <EncoderBlockDiagram key={idx} />,
    rlhf: <RLHFPipelineDiagram key={idx} />,
    gbdt: <GradientBoostingDiagram key={idx} />,
  }

  switch (block.type) {
    case 'text':
      return (
        <p key={idx} className="text-text-secondary leading-relaxed text-[1.05rem] mb-5">
          {block.text}
        </p>
      )
    case 'h2':
      return (
        <h2 key={idx} className="text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-5 pb-2 border-b border-slate-700/60">
          {block.text}
        </h2>
      )
    case 'h3':
      return (
        <h3 key={idx} className="text-xl font-bold text-text-primary mt-8 mb-3">
          {block.text}
        </h3>
      )
    case 'formula':
      return (
        <div key={idx} className="my-6">
          <div className="code-block font-mono text-sm text-accent whitespace-pre leading-relaxed border-l-4 border-accent border-opacity-60">
            {block.text}
          </div>
        </div>
      )
    case 'code':
      return (
        <div key={idx} className="my-6">
          <div className="flex items-center justify-between px-4 py-2 bg-black bg-opacity-70 rounded-t-lg border-t border-l border-r border-slate-700">
            <span className="text-xs font-mono text-text-secondary">{block.language}</span>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
          </div>
          <pre className="code-block rounded-t-none text-[0.82rem] leading-relaxed overflow-x-auto text-slate-300 whitespace-pre">
            <code>{block.code}</code>
          </pre>
        </div>
      )
    case 'callout': {
      const calloutStyles = {
        insight: 'border-blue-400 bg-blue-950/30',
        warning: 'border-yellow-400 bg-yellow-950/20',
        resource: 'border-green-400 bg-green-950/20',
      }
      const iconMap = { insight: '💡', warning: '⚠️', resource: '📚' }
      const titleColors = { insight: 'text-blue-300', warning: 'text-yellow-300', resource: 'text-green-300' }
      return (
        <div key={idx} className={`my-8 p-5 rounded-xl border-l-4 ${calloutStyles[block.kind] || calloutStyles.insight}`}>
          <div className="flex items-start gap-3">
            <span className="text-xl mt-0.5 flex-shrink-0">{iconMap[block.kind]}</span>
            <div>
              <p className={`font-bold mb-2 ${titleColors[block.kind] || 'text-blue-300'}`}>{block.title}</p>
              <p className="text-text-secondary text-sm leading-relaxed">{block.text}</p>
            </div>
          </div>
        </div>
      )
    }
    case 'list':
      return (
        <ul key={idx} className="my-5 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text-secondary text-[1.02rem] leading-relaxed">
              <span className="text-accent mt-1.5 flex-shrink-0 text-xs">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'table':
      return (
        <div key={idx} className="my-8 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-secondary">
                {block.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left font-bold text-accent border border-slate-700 font-mono">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-primary' : 'bg-secondary/50'}>
                  {row.map((cell, ci) => (
                    <td key={ci} className={`px-4 py-3 border border-slate-700 ${ci === 0 ? 'font-semibold text-text-primary' : 'text-text-secondary'}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'diagram':
      return diagramMap[block.id] || null
    default:
      return null
  }
}

// ─── READING PROGRESS BAR ────────────────────────────────────────────────────

function ReadingProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return (
    <div className="fixed top-0 left-0 w-full h-0.5 bg-transparent z-50 pointer-events-none">
      <div
        className="h-full bg-accent transition-all duration-75 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────

export default function BlogPost({ slug }) {
  const article = articles[slug] || null

  if (!article) {
    return (
      <>
        <Head>
          <title>Article Not Found | Ahmed AYOUBI</title>
        </Head>
        <Navigation />
        <div className="pt-32 pb-20 section-container text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-text-secondary mb-8">This article doesn&apos;t exist yet.</p>
          <Link href="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{article.title} | Ahmed AYOUBI</title>
        <meta name="description" content={article.subtitle} />
      </Head>

      <ReadingProgress />
      <Navigation />

      {/* Hero Image */}
      <div className="pt-16 relative h-72 sm:h-96 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/60 to-primary" />
      </div>

      {/* Article Header */}
      <section className="section-container pt-0 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-6 text-sm">
            <Link href="/blog" className="text-accent hover:underline flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Blog
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-text-secondary truncate">{article.category}</span>
          </div>

          {/* Meta badges */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-accent bg-opacity-15 text-accent border border-accent border-opacity-30">
              {article.category}
            </span>
            <span className="text-text-secondary text-sm font-mono">{article.date}</span>
            <span className="text-slate-600 text-sm">·</span>
            <span className="text-text-secondary text-sm font-mono">{article.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl leading-relaxed mb-6">
            {article.subtitle}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pb-8 border-b border-slate-700/60">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-secondary rounded-lg text-xs font-mono text-accent border border-accent border-opacity-20"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Content + Sidebar */}
      <section className="section-container pt-8 pb-12">
        <div className="flex gap-12 max-w-6xl">
          {/* Table of Contents — sticky sidebar */}
          {article.toc && article.toc.length > 0 && (
            <aside className="hidden xl:block w-56 flex-shrink-0">
              <div className="sticky top-24 space-y-1">
                <p className="text-xs font-bold font-mono text-text-secondary uppercase tracking-widest mb-3">
                  Contents
                </p>
                {article.toc.map((item, i) => (
                  <p
                    key={i}
                    className="text-xs text-text-secondary hover:text-accent cursor-default leading-relaxed py-1 border-l-2 border-slate-700 hover:border-accent pl-3 transition-colors"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </aside>
          )}

          {/* Main article */}
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="min-w-0 flex-1 max-w-3xl"
          >
            {article.content.map((block, idx) => renderBlock(block, idx))}

            {/* References */}
            {article.references && (
              <div className="mt-16 pt-8 border-t border-slate-700">
                <h2 className="text-xl font-bold text-text-primary mb-6 font-mono">
                  References
                </h2>
                <ol className="space-y-4">
                  {article.references.map((ref, i) => (
                    <li key={i} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                      <span className="text-accent font-mono font-bold flex-shrink-0 mt-0.5">
                        [{i + 1}]
                      </span>
                      <span>
                        {ref.authors} ({ref.year}).{' '}
                        <em className="text-text-primary">{ref.title}</em>
                        {'. '}
                        {ref.venue}.{' '}
                        {ref.url && ref.url !== '#' && (
                          <a
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline font-mono text-xs"
                          >
                            {ref.url}
                          </a>
                        )}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Footer nav */}
            <div className="mt-12 pt-8 border-t border-slate-700/60 flex items-center justify-between">
              <Link
                href="/blog"
                className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors font-semibold"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                All articles
              </Link>
              <Link
                href="/contact"
                className="text-text-secondary hover:text-accent transition-colors text-sm"
              >
                Questions? Get in touch →
              </Link>
            </div>
          </motion.article>
        </div>
      </section>

      <Footer />
    </>
  )
}

export async function getStaticProps({ params }) {
  return {
    props: { slug: params.slug },
  }
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(articles).map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}
