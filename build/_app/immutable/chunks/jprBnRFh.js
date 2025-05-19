import"./CWj6FrbW.js";import"./69_IOA4Y.js";import{V as o,W as r,X as d,Y as i}from"./BAzIqXFM.js";import{t as p,a as m}from"./BeUZmjb8.js";import{h as n}from"./Csxd1eRn.js";const l={title:"sudoグループに所属するユーザーを作る",date:"2025-04-27",image:"/images/posts/no_image.png"},{title:w,date:_,image:x}=l;var g=p('<p>CentOS Stream9で、新規ユーザーを作成してsudo権限を付与する。</p> <pre class="language-undefined"><!></pre>',1);function S(e){var a=g(),t=o(r(a),2),s=d(t);n(s,()=>`<code class="language-undefined">adduser &lt;ユーザー名&gt;

passwd &lt;ユーザー名&gt;

sudo gpasswd -a &lt;ユーザー名&gt; wheel</code>`),i(t),m(e,a)}export{S as default,l as metadata};
