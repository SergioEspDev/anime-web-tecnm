(this["webpackJsonpanime-app"]=this["webpackJsonpanime-app"]||[]).push([[0],{82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(22),s=a.n(r),i=a(12),o=a(41),l=a(13),d=a(43),m=a(3),u="[animeStreaming] show all top animes",j="[animeStreaming] show list with genre animes",h="[animeStreaming] show list with staff",b="[animeStreaming] show list promotional cover",p="[animeStreaming] show promotional trailer",f="[animeStreaming] show list with episodes",x="[animeStreaming] show list with news",O="[animeStreaming] show more information of this anime",v="[animeStreaming] get name of the anime and date by card",g="[animeStreaming] show list with anime by names",N="[animeStreaming] show mame list",w="[animeStreaming] clear all boxes containing the anime details",y="[animeStreaming] add anime at favorite list",k="[animeStreaming] remove anime at favorite list",S={nameList:[],animeList:[],nameAndDate:[],charactersAndStaff:[],picture:[],videos:[],episodes:[],news:[],moreInfo:[],searchAnime:[]},_=a(46),L={favoriteList:[]},A=Object(l.b)({animeStreaming:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:case j:return Object(m.a)(Object(m.a)({},e),{},{animeList:t.payload});case v:return Object(m.a)(Object(m.a)({},e),{},{nameAndDate:t.payload});case h:return Object(m.a)(Object(m.a)({},e),{},{charactersAndStaff:t.payload});case b:return Object(m.a)(Object(m.a)({},e),{},{picture:t.payload});case p:return Object(m.a)(Object(m.a)({},e),{},{videos:t.payload});case f:return Object(m.a)(Object(m.a)({},e),{},{episodes:t.payload});case x:return Object(m.a)(Object(m.a)({},e),{},{news:t.payload});case O:return Object(m.a)(Object(m.a)({},e),{},{moreInfo:t.payload});case g:return Object(m.a)(Object(m.a)({},e),{},{searchAnime:t.payload});case N:return Object(m.a)(Object(m.a)({},e),{},{nameList:t.payload});case w:return Object(m.a)(Object(m.a)({},e),{},{nameAndDate:S.nameAndDate,charactersAndStaff:S.charactersAndStaff,picture:S.picture,videos:S.videos,episodes:S.episodes,news:S.news,moreInfo:S.moreInfo});default:return e}},favoriteList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(m.a)(Object(m.a)({},e),{},{favoriteList:[].concat(Object(_.a)(e.favoriteList),[t.payload])});case k:return Object(m.a)(Object(m.a)({},e),{},{favoriteList:e.favoriteList.filter((function(e){return e.id!==t.payload}))});default:return e}}}),G=a(30),C=a(42),E={key:"persist-key",storage:a.n(C).a},M=Object(G.a)(E,A),D="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,T=Object(l.d)(M,D(Object(l.a)(d.a))),R=Object(G.b)(T),F=a(8),I=a(6),B=a(5),P=a(4),H=a(7),V=a.n(H),U=a(14),W=a(44),q=a.n(W).a.create({baseURL:"https://api.jikan.moe/v3"}),J={getTop:function(e){return q({method:"GET",url:"/top/anime/1/".concat(e)})},getGenre:function(e){return q({method:"GET",url:"search/anime?genre=".concat(e,"&genre_exclude=12")})},getCharactersStaff:function(e){return q({method:"GET",url:"/anime/".concat(e,"/characters_staff")})},getPictures:function(e){return q({method:"GET",url:"/anime/".concat(e,"/pictures")})},getVideos:function(e){return q({method:"GET",url:"/anime/".concat(e,"/videos")})},getEpisodes:function(e){return q({method:"GET",url:"/anime/".concat(e,"/episodes")})},getNews:function(e){return q({method:"GET",url:"/anime/".concat(e,"/news")})},getMoreInfo:function(e){return q({method:"GET",url:"/anime/".concat(e,"/moreinfo")})},getSearchAnimeByName:function(e){return q({method:"GET",url:"search/anime?q=".concat(e,"&limit=5&genre_exclude=12,49")})}},X=J.getTop,Y=J.getGenre,z=J.getCharactersStaff,K=J.getPictures,Q=J.getVideos,Z=J.getEpisodes,$=J.getNews,ee=J.getMoreInfo,te=J.getSearchAnimeByName,ae=function(e){return function(){var t=Object(U.a)(V.a.mark((function t(a){var n,c;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,X(e);case 3:n=t.sent,c=n.data.top,a({type:u,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},ne=function(e){return function(){var t=Object(U.a)(V.a.mark((function t(a){var n,c;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y(e);case 3:n=t.sent,c=n.data.results,a({type:j,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},ce=function(e){return function(){var t=Object(U.a)(V.a.mark((function t(a){var n,c,r,s,i,o;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,z(e);case 3:n=t.sent,c=n.data,r=c.characters,s=c.staff,i=r.slice(0,40),o=s.slice(0,40),a({type:h,payload:{charactersLimit:i,staffLimit:o}}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},re=function(e){return function(){var t=Object(U.a)(V.a.mark((function t(a){var n,c;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,K(e);case 3:n=t.sent,c=n.data.pictures,a({type:b,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},se=function(e){return function(){var t=Object(U.a)(V.a.mark((function t(a){var n,c;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Q(e);case 3:n=t.sent,c=n.data.promo,a({type:p,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},ie=function(e){return function(){var t=Object(U.a)(V.a.mark((function t(a){var n,c;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Z(e);case 3:n=t.sent,c=n.data.episodes,a({type:f,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},oe=function(e){return function(){var t=Object(U.a)(V.a.mark((function t(a){var n,c;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,$(e);case 3:n=t.sent,c=n.data.articles,a({type:x,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},le=function(e){return function(){var t=Object(U.a)(V.a.mark((function t(a){var n,c;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ee(e);case 3:n=t.sent,c=n.data.moreinfo,a({type:O,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},de=function(e){return function(){var t=Object(U.a)(V.a.mark((function t(a){var n,c;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,te(e);case 3:n=t.sent,c=n.data.results,a({type:g,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},me=function(e,t,a){return function(n){n({type:v,payload:{name:e,date:t,id:a}})}},ue=function(e){return function(t){t({type:N,payload:e})}},je=function(){return function(e){e({type:w})}},he=function(e,t,a,n){return function(c){c({type:y,payload:{id:e,img:t,name:a,date:n}})}},be=function(e){return function(t){t({type:k,payload:e})}},pe=function(){return{actGetTop:ae,actGetGenre:ne,actGetCharactersStaff:ce,actGetPictures:re,actGetVideos:se,actGetEpisodes:ie,actGetNews:oe,actGetMoreInfo:le,actGetSearchAnimeByName:de,actGetNameAndDate:me,actGetNameList:ue,actgetClearAllDetail:je,actGetAddAnimeFavorite:he,actGetRemoveAnimeFavorite:be}},fe=function(){var e=Object(I.g)(),t=Object(i.b)(),a=Object(i.c)((function(e){return e.animeStreaming})),n=a.nameAndDate,c=a.charactersAndStaff,r=a.picture,s=a.videos,o=a.episodes,l=a.news,d=a.moreInfo,m=Object(i.c)((function(e){return e.favoriteList})).favoriteList,u=pe(),j=u.actGetNameAndDate,h=u.actGetCharactersStaff,b=u.actGetPictures,p=u.actGetVideos,f=u.actGetEpisodes,x=u.actGetNews,O=u.actGetMoreInfo,v=u.actgetClearAllDetail,g=u.actGetAddAnimeFavorite,N=u.actGetRemoveAnimeFavorite,w=m.find((function(e){return e.id===n.id}));return{nameAndDate:n,charactersAndStaff:c,picture:r,videos:s,episodes:o,news:l,moreInfo:d,favoriteList:m,handleNameAndDate:function(a,n,c){t(v()),t(j(a,n,c)),t(h(c)),t(b(c)),t(p(c)),t(f(c)),setTimeout((function(){t(x(c)),t(O(c)),e.push("/".concat(c))}),600)},handleFavoriteList:function(e,a,n,c,r){e.preventDefault();var s=m.find((function(e){return e.id===a}));console.log(s),t(s?N(a):g(a,n,c,r))},searchOnList:w}},xe=a(0),Oe=function(e){var t=fe().handleNameAndDate;return Object(xe.jsx)("div",{onClick:function(){return t(e.title,e.start_date,e.mal_id)},className:"card",children:Object(xe.jsxs)("div",{children:[Object(xe.jsx)("div",{className:"img1",style:{backgroundImage:"url(".concat(e.image_url,")")}}),Object(xe.jsx)("div",{className:"img2",style:{backgroundImage:"url(".concat(e.image_url,")")}}),Object(xe.jsx)("div",{className:"title",children:e.title}),Object(xe.jsxs)("div",{className:"text-card",children:["Start date: ",e.start_date,Object(xe.jsx)("br",{}),"End date: ",e.end_date?e.end_date:"Unknown date"]}),Object(xe.jsxs)("div",{className:"score",children:[e.score,Object(xe.jsx)(P.a,{style:{marginLeft:"6px"},icon:B.k})]}),Object(xe.jsxs)("div",{className:"rank",children:[e.rank,Object(xe.jsx)(P.a,{style:{marginLeft:"6px"},icon:B.m})]}),Object(xe.jsxs)("div",{className:"catagory",children:[e.type,Object(xe.jsx)(P.a,{style:{marginLeft:"6px"},icon:B.d})]}),Object(xe.jsxs)("div",{className:"views",children:[e.members,Object(xe.jsx)(P.a,{style:{marginLeft:"6px"},icon:B.c})]})]})})},ve=a(15),ge=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.animeStreaming})),a=t.animeList,c=t.nameList,r=pe(),s=r.actGetTop,o=r.actGetGenre,l=r.actGetNameList,d=Object(n.useState)(!1),m=Object(ve.a)(d,2),u=m[0],j=m[1],h=Object(n.useState)(!1),b=Object(ve.a)(h,2),p=b[0],f=b[1];Object(n.useEffect)((function(){0===a.length&&(e(l("TV")),e(s("tv")))}),[]);return{click:u,handleClick:function(){return j(!u)},closeMobileMenu:function(){return j(!1)},dropdown:p,onMouseEnter:function(){window.innerWidth<300?f(!1):f(!0)},onMouseLeave:function(){window.innerWidth,f(!1)},animeList:a,nameList:c,handleAnimeList:function(t,a){e(s(t)),e(l(a))},handleAnimeByGenre:function(t,a){e(o(t)),e(l(a))}}},Ne=function(){var e=ge(),t=e.animeList,a=e.nameList;return Object(xe.jsxs)("div",{className:"anime_wrapper",children:[Object(xe.jsx)("h3",{children:a}),Object(xe.jsx)("div",{className:"container_card",children:t.map((function(e,t){return Object(xe.jsx)(Oe,Object(m.a)({},e),t)}))})]})},we=a(25),ye=function(){var e=fe(),t=e.nameAndDate,a=e.charactersAndStaff,n=e.picture,c=e.videos,r=e.episodes,s=e.news,i=e.moreInfo,o=e.handleFavoriteList,l=e.searchOnList;return Object(xe.jsxs)("div",{className:"detail_wrapper",children:[Object(xe.jsxs)("div",{className:"detail_main",children:[Object(xe.jsx)("div",{className:"picture",children:Object(xe.jsx)("img",{src:n[0]?n[0].large:"https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg",alt:"anime cover"})}),Object(xe.jsxs)("div",{className:"text",children:[Object(xe.jsxs)("div",{className:"text_title1",children:[Object(xe.jsx)("h2",{children:t.name}),Object(xe.jsx)("h3",{children:t.date})]}),Object(xe.jsxs)("div",{className:"text_title2",children:[Object(xe.jsx)("h2",{children:"More information"}),Object(xe.jsx)(P.a,{style:l&&{color:"#e63946"},onClick:function(e){return o(e,t.id,n[0].large,t.name,t.date)},icon:l?B.f:we.b})]}),Object(xe.jsx)("div",{className:"text_content",children:Object(xe.jsx)("h3",{children:i&&i.length>0?i:"We are sorry but at the moment we do not have information about this anime"})}),Object(xe.jsxs)("div",{className:"text_character",children:[Object(xe.jsxs)("div",{className:"text_characters",children:[Object(xe.jsx)("h3",{children:"Characters"}),Object(xe.jsx)("div",{className:"avatar-group",children:a.charactersLimit?a.charactersLimit.map((function(e,t){return Object(xe.jsxs)("div",{className:"avatar ",children:[Object(xe.jsx)("span",{className:"tooltiptext",children:e.name}),Object(xe.jsx)("img",{src:e.image_url,alt:"avatar"})]},t)})):Object(xe.jsx)("div",{className:"warning_text",children:"Right now we don't have character to show"})})]}),Object(xe.jsxs)("div",{className:"text_staff",children:[Object(xe.jsx)("h3",{children:"Staff"}),Object(xe.jsx)("div",{className:"avatar-group",children:a.staffLimit?a.staffLimit.map((function(e,t){return Object(xe.jsxs)("div",{className:"avatar",children:[Object(xe.jsx)("span",{className:"tooltiptext",children:e.name}),Object(xe.jsx)("img",{src:e.image_url,alt:"avatar"})]},t)})):Object(xe.jsx)("div",{className:"warning_text",children:"Right now we don't have staff to show"})})]})]}),c[0]&&Object(xe.jsx)("a",{style:{textDecoration:"none"},href:c[0].video_url,className:"btn btn-trailer",children:"Trailer"})]})]}),Object(xe.jsxs)("div",{className:"detail_episodes",children:[Object(xe.jsxs)("h3",{className:"detail_episodes_title",children:[t.name,Object(xe.jsx)("span",{style:{marginLeft:"8px"},children:"Episodes"})]}),Object(xe.jsx)("div",{className:"cards_episodes",children:r?r.map((function(e,t){return Object(xe.jsxs)("div",{className:"card_episode",children:[Object(xe.jsx)("a",{style:{textDecoration:"none"},href:e.video_url,children:Object(xe.jsx)("img",{src:n[0].large,alt:"caps"})}),"Ep-",e.episode_id]},t)})):Object(xe.jsx)("div",{className:"warning_text",children:"Right now we don't have episodes to show"})})]}),Object(xe.jsxs)("div",{className:"detail_new",children:[Object(xe.jsx)("h3",{children:" News of this anime "}),Object(xe.jsx)("div",{className:"detail_new_deck",children:s?s.map((function(e,t){return Object(xe.jsx)("div",{className:"deck",children:Object(xe.jsx)("a",{style:{textDecoration:"none"},href:e.url,children:Object(xe.jsxs)("div",{className:"card-new",children:[Object(xe.jsxs)("header",{className:"cardHeader",children:[Object(xe.jsx)(P.a,{style:{color:"#FFD433",margin:"10px"},icon:we.c}),Object(xe.jsxs)("span",{className:"cardHeader_account",children:["@",e.title]}),Object(xe.jsx)("span",{className:"cardHeader_date",children:e.date})]}),Object(xe.jsxs)("div",{className:"cardBody",children:[Object(xe.jsx)("p",{className:"cardText",children:e.intro}),Object(xe.jsx)("section",{className:"cardStats",children:Object(xe.jsxs)("span",{className:"cardStats_stat cardStats_stat-comments",children:[e.comments,Object(xe.jsx)(P.a,{style:{marginLeft:"4px"},icon:we.a})]})})]})]})})},t)})):Object(xe.jsx)("div",{className:"warning_text",children:"Right now we don't have news to show"})})]})]})},ke=function(){return Object(xe.jsx)(F.b,{to:"/",children:Object(xe.jsx)("button",{className:"btn",children:"Sign Up"})})},Se=[{name:"Acci\xf3n",number:1},{name:"Aventura",number:2},{name:"Carreras",number:3},{name:"Comedia",number:4},{name:"Misterio",number:7},{name:"Drama",number:8},{name:"Ecchi",number:9},{name:"Fantasia",number:10},{name:"Game",number:11},{name:"Historico",number:13},{name:"Horror",number:14},{name:"Ni\xf1os",number:15},{name:"Artes Marciales",number:17},{name:"Mecha",number:18},{name:"Musica",number:19},{name:"Parodias",number:20},{name:"Samurai",number:21},{name:"Romance",number:22},{name:"Escolares",number:23},{name:"Ciencia ficci\xf3n",number:24},{name:"Shoujo",number:25},{name:"Shounen",number:27},{name:"Deportes",number:30},{name:"Harem",number:35},{name:"Recuentos de la vida",number:36},{name:"Supernatural",number:37},{name:"Psychological",number:40},{name:"Suspense",number:41},{name:"Seinen",number:42}],_e=function(){var e=ge(),t=e.click,a=e.handleClick,n=e.closeMobileMenu,c=e.handleAnimeByGenre;return Object(xe.jsx)(xe.Fragment,{children:Object(xe.jsx)("ul",{onClick:a,className:t?"dropdown-menu clicked":"dropdown-menu",children:Se.map((function(e,t){return Object(xe.jsx)("li",{onClick:function(){return c(e.number,e.name)},children:Object(xe.jsxs)(F.b,{to:"/",className:"dropdown-link",onClick:n,children:[Object(xe.jsx)(P.a,{style:{marginRight:"10px"},icon:B.g}),e.name]})},t)}))})})},Le=function(){var e=ge(),t=e.click,a=e.handleClick,n=e.closeMobileMenu,c=e.dropdown,r=e.onMouseEnter,s=e.onMouseLeave,i=e.handleAnimeList;return Object(xe.jsx)(xe.Fragment,{children:Object(xe.jsxs)("nav",{className:"navbar",children:[Object(xe.jsxs)(F.b,{onClick:function(){return i("tv","Main")},to:"/",className:"navbar-logo",children:[Object(xe.jsx)(P.a,{style:{marginRight:"10px"},icon:B.n}),Object(xe.jsxs)("p",{children:[Object(xe.jsx)("span",{children:"Anime"})," Web"]})]}),Object(xe.jsx)("div",{className:"menu-icon",onClick:a,children:Object(xe.jsx)(P.a,{icon:t?B.l:B.a})}),Object(xe.jsxs)("ul",{className:t?"nav-menu active":"nav-menu",children:[Object(xe.jsx)("li",{onClick:function(){return i("upcoming","Coming soon")},className:"nav-item",children:Object(xe.jsxs)(F.b,{to:"/",className:"nav-links",onClick:n,children:[Object(xe.jsx)(P.a,{style:{marginRight:"10px"},icon:B.h}),"Coming soon"]})}),Object(xe.jsx)("li",{onClick:function(){return i("airing","Most popular")},className:"nav-item",children:Object(xe.jsxs)(F.b,{to:"/",className:"nav-links",onClick:n,children:[Object(xe.jsx)(P.a,{style:{marginRight:"10px",color:"#e9c46a"},icon:B.b}),"Most popular"]})}),Object(xe.jsxs)("li",{className:"nav-item",onMouseEnter:r,onMouseLeave:s,children:[Object(xe.jsxs)("div",{className:"nav-links",onClick:n,children:["Genre",Object(xe.jsx)(P.a,{style:{marginLeft:"10px"},icon:B.j})]}),c&&Object(xe.jsx)(_e,{})]}),Object(xe.jsx)("li",{className:"nav-item",children:Object(xe.jsxs)(F.b,{to:"/favoritesList",className:"nav-links",onClick:n,children:[Object(xe.jsx)(P.a,{style:{marginRight:"10px",color:"#e63946"},icon:B.e}),"Favorites"]})}),Object(xe.jsx)("li",{className:"nav-item",children:Object(xe.jsxs)(F.b,{to:"/",className:"nav-links-mobile",onClick:n,children:[Object(xe.jsx)(P.a,{style:{marginRight:"10px"},icon:B.o}),"Sign Up"]})})]}),Object(xe.jsx)(ke,{})]})})},Ae=function(){return Object(xe.jsxs)("div",{className:"img-notFound",children:[Object(xe.jsx)("img",{src:"https://raw.githubusercontent.com/riimuru/AnimeLazer/a98a2f1b1127a68011c600f1bc43b967a5735d1f/public/404light.svg",alt:"notFoundPage404"}),Object(xe.jsxs)("div",{className:"text-notFound",children:["You don't have any favorite anime yet. You can add some ",Object(xe.jsx)(F.b,{to:"/",children:"here."})]})]})},Ge=function(e){var t=fe().handleNameAndDate;return Object(xe.jsxs)("div",{onClick:function(){return t(e.name,e.start_date,e.id)},className:"favorite_card",style:{marginTop:"20px"},children:[Object(xe.jsx)("div",{className:"favorite_img",children:Object(xe.jsx)("img",{src:e.img,alt:"img_favorite"})}),Object(xe.jsx)("div",{className:"favorite_text",children:Object(xe.jsx)("h2",{children:e.name})})]})},Ce=function(){var e=fe().favoriteList;return Object(xe.jsxs)("div",{className:"favorite_wrapper",children:[Object(xe.jsx)("h3",{children:" Favorites "}),Object(xe.jsx)("div",{className:"container_card",style:{marginTop:"20px"},children:e.length>0?e.map((function(e,t){return Object(xe.jsx)(Ge,Object(m.a)({},e),t)})):Object(xe.jsx)(Ae,{})})]})},Ee=a(23),Me=function(){var e=Object(i.b)(),t=pe().actGetSearchAnimeByName,a=Object(i.c)((function(e){return e.animeStreaming})).searchAnime,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(ve.a)(t,2),c=a[0],r=a[1];return[c,function(e){var t=e.target;r(Object(m.a)(Object(m.a)({},c),{},Object(Ee.a)({},t.name,t.value)))},function(){r(e)}]}({animeName:""}),r=Object(ve.a)(c,2),s=r[0],o=r[1],l=s.animeName;Object(n.useEffect)((function(){e(t(l))}),[t,l,e]);var d=Object(n.useState)(!1),u=Object(ve.a)(d,2),j=u[0],h=u[1],b=Object(n.useRef)(null);return{animeName:l,handleInputChange:o,searchAnime:a,searchContainer:b,showSearchDiv:j,onMouseEnterSearch:function(){h(!0)},onMouseLeaveSearch:function(){h(!1)}}},De=function(){var e=Me().searchAnime;return Object(xe.jsx)("div",{className:"searchWindow_wrapper",children:e.map((function(e,t){return Object(xe.jsxs)("div",{className:"search-card",children:[Object(xe.jsx)("img",{src:e.image_url,alt:"art"}),Object(xe.jsxs)("div",{className:"search-content",children:[Object(xe.jsxs)("div",{className:"search-header",children:[Object(xe.jsx)("h1",{className:"search-title",children:e.title}),Object(xe.jsxs)("h4",{className:"search-info",children:[Object(xe.jsx)(P.a,{style:{marginRight:"10px",color:"#e9c46a"},icon:B.k}),"score: ",e.score]})]}),Object(xe.jsx)("p",{className:"search-desc",children:e.synopsis}),Object(xe.jsx)("div",{style:{marginTop:"15px"},children:Object(xe.jsx)("a",{href:e.url,style:{textDecoration:"none",textAlign:"end"},className:"btn btn-more-infor",children:"Mas info."})})]})]},t)}))})},Te=function(){var e=Me(),t=e.animeName,a=e.handleInputChange,n=e.showSearchDiv,c=e.onMouseEnterSearch,r=e.onMouseLeaveSearch;return Object(xe.jsxs)("div",{className:"search-toggle",children:[Object(xe.jsx)("input",{onFocus:c,onBlur:r,type:"text",placeholder:"Busqueda",name:"animeName",onChange:a,value:t,autoComplete:"on"}),Object(xe.jsx)("i",{children:Object(xe.jsx)(P.a,{icon:B.i})}),n&&t.length>3&&Object(xe.jsx)(De,{})]})},Re=function(){return Object(xe.jsx)("div",{children:Object(xe.jsx)(F.a,{children:Object(xe.jsxs)("div",{className:"main_wrapper",children:[Object(xe.jsx)(Le,{}),Object(xe.jsxs)("div",{className:"streaming_wrapper",children:[Object(xe.jsx)(Te,{}),Object(xe.jsxs)(I.d,{children:[Object(xe.jsx)(I.b,{exact:!0,path:"/",children:Object(xe.jsx)(Ne,{})}),Object(xe.jsx)(I.b,{exact:!0,path:"/favoritesList",children:Object(xe.jsx)(Ce,{})}),Object(xe.jsx)(I.b,{exact:!0,path:"/:id",children:Object(xe.jsx)(ye,{})}),Object(xe.jsx)(I.a,{to:"/"})]})]})]})})})};var Fe=function(){return Object(xe.jsx)(i.a,{store:T,children:Object(xe.jsx)(o.a,{persistor:R,children:Object(xe.jsx)(Re,{})})})};a(82);s.a.render(Object(xe.jsx)(c.a.StrictMode,{children:Object(xe.jsx)(Fe,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.0043f712.chunk.js.map