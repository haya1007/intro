import"./CWj6FrbW.js";import"./69_IOA4Y.js";import{V as e,W as k,X as a,Y as o,Z as P}from"./BAzIqXFM.js";import{t as T,a as B}from"./BeUZmjb8.js";import{h as r}from"./Csxd1eRn.js";const C={title:"BINDを使ったDNSサーバーの作成",date:"2025-04-27",image:"/images/posts/post2.png"},{title:G,date:U,image:V}=C;var W=T('<p>CentOS Stream 9 でローカル内の名前解決をできるようにするDNSサーバーを建てる。<br></p> <h2>アドレス</h2> <table><thead><tr><th>サーバー種</th><th>IPアドレス</th><th>FQDN</th></tr></thead><tbody><tr><td>DGW</td><td>192.168.1.0</td><td></td></tr><tr><td>DNS</td><td>192.168.1.10</td><td>dns.haya1007.com</td></tr><tr><td>WEB</td><td>192.168.1.20</td><td>web.haya1007.com</td></tr></tbody></table> <br> <h2>BINDのインストール</h2> <pre class="language-undefined"><!></pre> <p>bind-chrootは/etc/named/chrootをルート「/」にすることで、BINDを侵害されてもアクセスを制限できる。</p> <br> BINDの設定は「/etc/named.conf」で行い、ゾーンファイルを「/var/named/」に作る。 <br> <h3>/etc/named.confの設定</h3> <pre class="language-undefined"><!></pre> <br> <h3>/var/named/forward.example.com</h3> <pre class="language-undefined"><!></pre> <br> <h3>/var/named/reverse.192.168.1</h3> <pre class="language-undefined"><!></pre> <br> <h2>設定の確認とBINDの起動</h2> <h3>設定の確認</h3> <pre class="language-undefined"><!></pre> <p>※エラーが出たら修正する。<br></p> <pre class="language-undefined"><!></pre> <br> <h3>BINDの起動</h3> <pre class="language-undefined"><!></pre> <pre class="language-undefined"><!></pre> <p>もしrunningじゃなかったら、エラーを見て確認する。</p> <br> <h3>firewalldの設定</h3> <pre class="language-undefined"><!></pre> <pre class="language-undefined"><!></pre> <br> <h2>Windowsの設定（ホストPC）</h2> <p>WindowsでDNSサーバーを設定する方法</p> <br> <p>・コントロールパネル→ネットワークとインターネット→ネットワークと共有センター</p> <p>で、自身のNWのプロパティを開く</p> <br> <p>・インターネットプロトコルバージョン4 (TCP/IPv4)のプロパティを開き、優先DNSに192.168.1.10を設定する。</p> <p>コマンドプロンプトで</p> <pre class="language-undefined"><!></pre> <p>で192.168.1.20が返ってくることを確認。</p> <br> <p>もし返ってこない場合、IPv6が有効になっていたり、Windows Defenderのファイヤーウォールで53番ポートとのやり取りが禁止されている可能性がある。</p>',1);function F(h){var g=W(),d=e(k(g),10),v=a(d);r(v,()=>'<code class="language-undefined">sudo dnf install bind bind-chroot</code>'),o(d);var n=e(d,10),b=a(n);r(b,()=>`<code class="language-undefined">//
// named.conf
//
// Provided by Red Hat bind package to configure the ISC BIND named(8) DNS
// server as a caching only nameserver (as a localhost DNS resolver only).
//
// See /usr/share/doc/bind*/sample/ for example named configuration files.
//

options &#123;
        listen-on port 53 &#123; 127.0.0.1; 192.168.1.10; 192.168.1.0; &#125;;
        listen-on-v6 port 53 &#123; ::1; &#125;;
        directory       &quot;/var/named&quot;;
        dump-file       &quot;/var/named/data/cache_dump.db&quot;;
        statistics-file &quot;/var/named/data/named_stats.txt&quot;;
        memstatistics-file &quot;/var/named/data/named_mem_stats.txt&quot;;
        secroots-file   &quot;/var/named/data/named.secroots&quot;;
        recursing-file  &quot;/var/named/data/named.recursing&quot;;
        allow-query     &#123; 192.168.1.0/24; &#125;;

        /*
         - If you are building an AUTHORITATIVE DNS server, do NOT enable recursion.
         - If you are building a RECURSIVE (caching) DNS server, you need to enable
           recursion.
         - If your recursive DNS server has a public IP address, you MUST enable access
           control to limit queries to your legitimate users. Failing to do so will
           cause your server to become part of large scale DNS amplification
           attacks. Implementing BCP38 within your network would greatly
           reduce such attack surface
        */
        recursion yes;&lt;/code&gt;

        dnssec-validation yes;

        managed-keys-directory &quot;/var/named/dynamic&quot;;
        geoip-directory &quot;/usr/share/GeoIP&quot;;

        pid-file &quot;/run/named/named.pid&quot;;
        session-keyfile &quot;/run/named/session.key&quot;;

        /* https://fedoraproject.org/wiki/Changes/CryptoPolicy */
        include &quot;/etc/crypto-policies/back-ends/bind.config&quot;;
&#125;;

logging &#123;
        channel default_debug &#123;
                file &quot;data/named.run&quot;;
                severity dynamic;
        &#125;;
&#125;;
                                                                                                                             
zone &quot;.&quot; IN &#123;                                                                                                                
        type hint;                                                                                                           
        file &quot;named.ca&quot;;                                                                                                     
&#125;;                                                                                                                           
                                                                                                                             
zone &quot;haya1007.com&quot; IN &#123;                                                                                                     
        type master;                                                                                                         
        file &quot;forward.example.com&quot;;                                                                                         
        allow-update &#123; none; &#125;;                                                                                              
&#125;;                                                                                                                           
                                                                                                                             
zone &quot;1.168.192.in-addr.arpa&quot; IN &#123;                                                                                           
        type master;                                                                                                         
        file &quot;reverse.192.168.1&quot;;                                                                                            
        allow-update &#123; none; &#125;;                                                                                              
&#125;;                                                                                                                           
                                                                                                                             
                                                                                                                             
                                                                                                                             
include &quot;/etc/named.rfc1912.zones&quot;;                                                                                          
include &quot;/etc/named.root.key&quot;; &lt;/code&gt;&lt;/pre&gt;</code>`),o(n);var t=e(n,6),q=a(t);r(q,()=>`<code class="language-undefined">$TTL    86400
@       IN      SOA     dns.example.com. root.example.com. (
                                        2025042701 ; serial
                                        3600       ; refresh
                                        900        ; retry
                                        604800     ; expire
                                        86400 )    ; minimum
        IN      NS      dns.example.com.
dns     IN      A       192.168.1.10
web     IN      A       192.168.1.20</code>`),o(t);var s=e(t,6),y=a(s);r(y,()=>`<code class="language-undefined">$TTL    86400
@       IN      SOA     dns.example.com. root.example.com. (
                                        2025042701 ; serial
                                        3600       ; refresh
                                        900        ; retry
                                        604800     ; expire
                                        86400 )    ; minimum
        IN      NS      dns.example.com.
10      IN      PTR     dns.example.com.
20      IN      PTR     web.example.com.</code>`),o(s);var c=e(s,8),N=a(c);r(N,()=>`<code class="language-undefined"># named.confの確認
sudo named-checkconf /etc/named.conf

# forward.haya1007.comとreverse.192.168.1の確認
sudo named-checkzone example.com /var/named/forward.example.com
sudo named-checkzone 1.168.192.in-addr.arpa /var/named/reverse.192.168.1</code>`),o(c);var u=e(c,4),I=a(u);r(I,()=>`<code class="language-undefined">sudo chown named:named /var/named/forward.example.com
sudo chown named:named /var/named/reverse.192.168.1
sudo chmod 640 /var/named/forward.example.com
sudo chmod 640 /var/named/reverse.192.168.1</code>`),o(u);var l=e(u,6),_=a(l);r(_,()=>'<code class="language-undefined">sudo systemctl enable --now named-chroot</code>'),o(l);var i=e(l,2),w=a(i);r(w,()=>'<code class="language-undefined">sudo systemctl status named-chroot</code>'),o(i);var m=e(i,8),x=a(m);r(x,()=>'<code class="language-undefined">vim /etc/resolv.conf</code>'),o(m);var p=e(m,2),D=a(p);r(D,()=>`<code class="language-undefined"># Generated by NetworkManager
nameserver 192.168.3.10
domain example.com</code>`),o(p);var f=e(p,20),S=a(f);r(S,()=>'<code class="language-undefined">nslookup web.example.com</code>'),o(f),P(6),B(h,g)}export{F as default,C as metadata};
