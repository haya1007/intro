import"./CWj6FrbW.js";import"./69_IOA4Y.js";import{S as o,T as r,U as d,V as i}from"./B69HwTr8.js";import{t as p,a as m}from"./B2hBvueB.js";import{h as n}from"./DHnHFFIe.js";const l={title:"sudoグループに所属するユーザーを作る",date:"2025-04-27",image:"/images/posts/no_image.png"},{title:w,date:S,image:_}=l;var g=p('<p>CentOS Stream9で、新規ユーザーを作成してsudo権限を付与する。</p> <pre class="language-undefined"><!></pre>',1);function x(e){var a=g(),t=o(r(a),2),s=d(t);n(s,()=>`<code class="language-undefined">adduser &lt;ユーザー名&gt;

passwd &lt;ユーザー名&gt;

sudo gpasswd -a &lt;ユーザー名&gt; wheel</code>`),i(t),m(e,a)}export{x as default,l as metadata};
