import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { SectionIcon } from '@/components/ui/section-icon'
import { PageHeroBackground } from '@/components/ui/page-hero-background'
import { blogPostsEs, getBlogPost } from '@/lib/content/blog-posts'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPostsEs.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug, 'es')
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/es/blog/${post.slug}/`,
      languages: {
        es: `/es/blog/${post.slug}/`,
        en: `/blog/${post.slug === 'cuellos-de-botella-operativos' ? 'eliminate-operational-bottlenecks' : post.slug === 'no-code-vs-low-code-vs-desarrollo-asistido-ia' ? 'no-code-vs-low-code-vs-ai-assisted-development' : post.slug === 'guia-costos-desarrollo-aplicaciones-web' ? 'web-app-development-cost-guide' : post.slug === 'reemplazar-saas-con-software-personalizado' ? 'replace-saas-tools-custom-software' : post.slug}/`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://zerocode.la/es/blog/${post.slug}/`,
      type: 'article',
    },
  }
}

const articleStyles = `
  .zc-article { max-width: 860px; margin: 0 auto; padding: 72px 40px 96px; }
  .zc-article h2 { font-family: var(--font-ibm-plex-sans), sans-serif; font-size: 32px; font-weight: 700; color: #FFFFFF; margin: 72px 0 20px; line-height: 1.18; letter-spacing: -0.5px; text-transform: none; }
  .zc-article h2:first-child { margin-top: 0; }
  .zc-article h3 { font-family: var(--font-ibm-plex-sans), sans-serif; font-size: 20px; font-weight: 600; color: rgba(255,255,255,0.92); margin: 48px 0 16px; text-transform: none; }
  .zc-article p { font-family: var(--font-ibm-plex-sans), sans-serif; margin-bottom: 24px; color: rgba(255,255,255,0.78); font-size: 18px; line-height: 1.85; }
  .zc-article ul, .zc-article ol { margin: 0 0 28px 28px; }
  .zc-article li { font-family: var(--font-ibm-plex-sans), sans-serif; margin-bottom: 12px; color: rgba(255,255,255,0.78); font-size: 18px; line-height: 1.75; }
  .zc-article strong { color: #00DCFC; font-weight: 600; }
  .zc-article a { color: #00DCFC; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
  .zc-bluf { background: rgba(0,220,252,0.05); border: 1px solid rgba(0,220,252,0.2); padding: 32px 36px; margin: 0 0 56px; border-radius: 20px; }
  .zc-bluf .bluf-label { font-family: var(--font-ibm-plex-sans), sans-serif; font-size: 11px; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; color: #00DCFC; margin-bottom: 12px; }
  .zc-bluf p { margin: 0; font-family: var(--font-ibm-plex-sans), sans-serif; font-size: 18px; font-weight: 400; color: rgba(255,255,255,0.85); line-height: 1.75; }
  .zc-stat { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.2); border-radius: 20px; padding: 32px 36px; margin: 44px 0; display: flex; gap: 32px; align-items: center; }
  .zc-stat .num { font-family: var(--font-ibm-plex-sans), sans-serif; font-size: 56px; font-weight: 800; color: #00DCFC; line-height: 1; white-space: nowrap; min-width: 120px; text-align: center; }
  .zc-stat .desc { font-family: var(--font-ibm-plex-sans), sans-serif; font-size: 15px; line-height: 1.65; color: rgba(255,255,255,0.8); }
  .zc-stat .source { font-family: var(--font-ibm-plex-sans), sans-serif; font-size: 12px; color: rgba(255,255,255,0.38); margin-top: 8px; }
  .zc-table-wrap { overflow-x: auto; margin: 44px 0; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); }
  .zc-table { width: 100%; border-collapse: collapse; font-size: 15px; }
  .zc-table th { background: #0F172A; color: #00DCFC; padding: 16px 20px; text-align: left; font-family: var(--font-ibm-plex-sans), sans-serif; font-weight: 600; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; }
  .zc-table td { padding: 14px 20px; border-bottom: 1px solid rgba(255,255,255,0.1); vertical-align: top; color: rgba(255,255,255,0.78); font-family: var(--font-ibm-plex-sans), sans-serif; line-height: 1.6; }
  .zc-table tr:last-child td { border-bottom: none; }
  .zc-table tr:nth-child(even) td { background: rgba(255,255,255,0.02); }
  .zc-yes { color: #34d399; font-weight: 700; }
  .zc-no  { color: #f87171; font-weight: 700; }
  .zc-partial { color: #fbbf24; font-weight: 700; }
  .zc-box { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.2); border-radius: 20px; padding: 32px 36px; margin: 44px 0; }
  .zc-box h3 { font-family: var(--font-ibm-plex-sans), sans-serif; margin-top: 0; margin-bottom: 20px; color: #FFFFFF; font-size: 20px; text-transform: none; }
  .zc-box li { font-family: var(--font-ibm-plex-sans), sans-serif; margin-bottom: 12px; color: rgba(255,255,255,0.78); font-size: 18px; }
  .zc-faq { margin: 72px 0 0; }
  .zc-faq > h2 { margin-top: 0; }
  .zc-faq-item { border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; margin-bottom: 12px; overflow: hidden; transition: border-color .2s; }
  .zc-faq-item:hover { border-color: rgba(0,220,252,0.3); }
  .zc-faq-q { padding: 20px 24px; font-family: var(--font-ibm-plex-sans), sans-serif; font-weight: 600; font-size: 16px; background: rgba(255,255,255,0.04); color: #FFFFFF; line-height: 1.4; }
  .zc-faq-a { padding: 18px 24px; font-family: var(--font-ibm-plex-sans), sans-serif; font-size: 16px; background: rgba(0,0,0,0.25); border-top: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.72); line-height: 1.75; }
  .zc-back-nav { padding: 36px 48px 0; max-width: 1100px; margin: 0 auto; }
  .zc-back-btn { display: inline-flex; align-items: center; gap: 10px; color: rgba(255,255,255,0.55); text-decoration: none; font-family: var(--font-ibm-plex-sans), sans-serif; font-size: 13px; font-weight: 500; transition: color .2s, gap .2s; padding: 8px 14px 8px 10px; border: 1px solid rgba(255,255,255,0.1); border-radius: 50px; background: rgba(255,255,255,0.04); }
  .zc-back-btn::before { content: '←'; font-size: 15px; font-weight: 300; color: #00DCFC; }
  .zc-back-btn:hover { color: #fff; border-color: rgba(0,220,252,0.3); background: rgba(0,220,252,0.06); gap: 14px; }
  @media(max-width: 768px) {
    .zc-back-nav { padding: 24px 20px 0; }
    .zc-article { padding: 48px 20px 64px; }
    .zc-article h2 { font-size: 26px; margin: 52px 0 16px; }
    .zc-stat { flex-direction: column; text-align: center; gap: 16px; }
    .zc-stat .num { min-width: unset; }
  }
`

export default async function BlogPostPageEs({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug, 'es')
  if (!post) notFound()

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: articleStyles }} />
      <Header locale="es" />
      <main className="relative overflow-hidden">
        <div className="zc-back-nav">
          <Link href="/es/blog/" className="zc-back-btn">Todos los artículos</Link>
        </div>
        <section className="py-12 sm:py-16 lg:py-20 relative text-center overflow-hidden">
          <PageHeroBackground />
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative">
            <p className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#00dcfc] border border-[rgba(0,220,252,0.35)] rounded-full">
              <SectionIcon />
              {post.tag}
            </p>
            <h1 className="mt-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-[42px] leading-tight normal-case">
              {post.h1}
            </h1>
            <p className="mt-4 text-lg text-[rgba(255,255,255,0.68)] max-w-2xl mx-auto leading-relaxed">
              {post.subtitle}
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 sm:gap-6 text-sm text-white/40 flex-wrap">
              <span>Por {post.author}</span>
              <span>{post.date}</span>
              <span>{post.read}</span>
            </div>
          </div>
        </section>

        <article className="zc-article" dangerouslySetInnerHTML={{ __html: post.articleHtml }} />
      </main>
      <Footer locale="es" />
    </>
  )
}
