import * as Handlebars from 'handlebars';

let coreentries_tpl = `
{{#each this}}
<div data-entry="{{this.id}}">
  <pre class="language-markup"><button type="button" class="close cb-vc-remove">×</button><code class="language-markup">{{this.xml}}</code></pre>
</div>
{{/each}}
`
export default Handlebars.compile(coreentries_tpl);