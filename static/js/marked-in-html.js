import marked from 'marked'
import highlight from 'highlight.js'

export class MarkedInHtml {

  constructor() {
    marked.setOptions(this.options || {
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight: function (code, lang, callback) {
        return highlight.highlightAuto(code).value
      }
    })
  }

  init() {
    document.querySelectorAll('template[type="markdown"]').forEach(($template) => {
      let $container = document.createElement('div')
      $container.innerHTML = this.parse($template)
      $container.id = $template.id
      $container.classList.add(['markdown-body', ...Array.from($template.classList)])
      $container.dataset.markdown = this.intelligentProcessingIndent($template)
      $template.parentElement.replaceChild($container, $template)
    })
  }

  parse($template) {
    return marked(this.intelligentProcessingIndent($template))
  }

  intelligentProcessingIndent($template) {
    let lines = $template.innerHTML.split('\n')
    lines.length && /^\s*$/.test(lines[0]) && lines.shift()
    lines.length && /^\s*$/.test(lines[lines.length - 1]) && lines.pop()
    let minSpaceSize = Math.min(...lines.map(line => line.length ? line.match(/^\s*/)[0].length : Infinity))
    return lines.map(line => line.substring(minSpaceSize)).join('\n')
  }

}
