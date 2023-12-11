exports.id=742,exports.ids=[742],exports.modules={13312:(e,t,r)=>{Promise.resolve().then(r.bind(r,43924)),Promise.resolve().then(r.t.bind(r,67490,23))},86747:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,53579,23)),Promise.resolve().then(r.t.bind(r,30619,23)),Promise.resolve().then(r.t.bind(r,81459,23)),Promise.resolve().then(r.t.bind(r,13456,23)),Promise.resolve().then(r.t.bind(r,50847,23)),Promise.resolve().then(r.t.bind(r,57303,23))},99089:()=>{},43924:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var s=r(53854),a=r(27121),o=r(3774),n=r(2769),i=r(75548),c=r.n(i),l=r(51018),d=r(29395);let u=[{name:"Home",href:"/dashboard",icon:a.Z},{name:"Invoices",href:"/dashboard/invoices",icon:o.Z},{name:"Customers",href:"/dashboard/customers",icon:n.Z}];function m(){let e=(0,l.usePathname)();return s.jsx(s.Fragment,{children:u.map(t=>{let r=t.icon;return(0,s.jsxs)(c(),{href:t.href,className:(0,d.Z)("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",{"bg-sky-100 text-blue-600":e===t.href}),children:[s.jsx(r,{className:"w-6"}),s.jsx("p",{className:"hidden md:block",children:t.name})]},t.name)})})}},15581:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(4656),a=r(22569);function o({children:e}){return(0,s.jsxs)("div",{className:"flex h-screen flex-col md:flex-row md:overflow-hidden",children:[s.jsx("div",{className:"w-full flex-none md:w-64",children:s.jsx(a.default,{})}),s.jsx("div",{className:"flex-grow p-6 md:overflow-y-auto md:p-12",children:e})]})}},35345:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(4656);r(85832);var a=r(94788),o=r.n(a);function n({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:`${o().className} antialiased`,children:e})})}},95478:(e,t,r)=>{"use strict";r.d(t,{BX:()=>m,D1:()=>u,NI:()=>i,V_:()=>d,qu:()=>c,t2:()=>n,x4:()=>l});var s=r(7590),a=r(98760),o=r(61726);async function n(){(0,o.unstable_noStore)();try{let e=await s.i6`SELECT * FROM revenue`;return e.rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch revenue data.")}}async function i(){(0,o.unstable_noStore)();try{let e=await s.i6`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`,t=e.rows.map(e=>({...e,amount:(0,a.xG)(e.amount)}));return t}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch the latest invoices.")}}async function c(){(0,o.unstable_noStore)();try{let e=s.i6`SELECT COUNT(*) FROM invoices`,t=s.i6`SELECT COUNT(*) FROM customers`,r=s.i6`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`,o=await Promise.all([e,t,r]),n=Number(o[0].rows[0].count??"0"),i=Number(o[1].rows[0].count??"0"),c=(0,a.xG)(o[2].rows[0].paid??"0"),l=(0,a.xG)(o[2].rows[0].pending??"0");return{numberOfCustomers:i,numberOfInvoices:n,totalPaidInvoices:c,totalPendingInvoices:l}}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch card data.")}}async function l(e,t){(0,o.unstable_noStore)();try{let r=await s.i6`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${e}%`} OR
        customers.email ILIKE ${`%${e}%`} OR
        invoices.amount::text ILIKE ${`%${e}%`} OR
        invoices.date::text ILIKE ${`%${e}%`} OR
        invoices.status ILIKE ${`%${e}%`}
      ORDER BY invoices.date DESC
      LIMIT ${6} OFFSET ${(t-1)*6}
    `;return r.rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoices.")}}async function d(e){(0,o.unstable_noStore)();try{let t=await s.i6`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${e}%`} OR
      customers.email ILIKE ${`%${e}%`} OR
      invoices.amount::text ILIKE ${`%${e}%`} OR
      invoices.date::text ILIKE ${`%${e}%`} OR
      invoices.status ILIKE ${`%${e}%`}
  `,r=Math.ceil(Number(t.rows[0].count)/6);return r}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch total number of invoices.")}}async function u(e){(0,o.unstable_noStore)();try{let t=await s.i6`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${e};
    `,r=t.rows.map(e=>({...e,amount:e.amount/100}));return r[0]}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoice.")}}async function m(){try{let e=await s.i6`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `,t=e.rows;return t}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch all customers.")}}},98760:(e,t,r)=>{"use strict";r.d(t,{p9:()=>a,tk:()=>o,xG:()=>s});let s=e=>(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"}),a=(e,t="en-US")=>{let r=new Date(e),s=new Intl.DateTimeFormat(t,{day:"numeric",month:"short",year:"numeric"});return s.format(r)},o=e=>{let t=[],r=Math.max(...e.map(e=>e.revenue)),s=1e3*Math.ceil(r/1e3);for(let e=s;e>=0;e-=1e3)t.push(`$${e/1e3}K`);return{yAxisLabels:t,topLabel:s}}},38132:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(4656),a=r(66070),o=r(47586),n=r.n(o);function i(){return(0,s.jsxs)("div",{className:`${n().className} flex flex-row items-center leading-none text-white`,children:[s.jsx(a.Z,{className:"h-12 w-12 rotate-[15deg]"}),s.jsx("p",{className:"text-[44px]",children:"Acme"})]})}},22569:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$ACTION_1:()=>E,default:()=>x});var s,a=r(4656),o=r(34600);r(99195);var n=r(24353),i=r.n(n),c=r(95153);let l=(0,c.createProxy)(String.raw`/home/christian/NextJs-tuts/nextjsdashboard/app/ui/dashboard/nav-links.tsx`),{__esModule:d,$$typeof:u}=l,m=l.default;var h=r(38132),f=r(42727),v=r(10736);function x(){return(0,a.jsxs)("div",{className:"flex h-full flex-col px-3 py-4 md:px-2",children:[a.jsx(i(),{className:"mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40",href:"/",children:a.jsx("div",{className:"w-32 text-white md:w-40",children:a.jsx(h.Z,{})})}),(0,a.jsxs)("div",{className:"flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2",children:[a.jsx(m,{}),a.jsx("div",{className:"hidden h-auto w-full grow rounded-md bg-gray-50 md:block"}),a.jsx("form",{action:(s=async(...e)=>E.apply(null,(s.$$bound||[]).concat(e)),(0,o.U)("2aa3555946b501f541b33828e9d8924162e2f51d",null,s,E),s),children:(0,a.jsxs)("button",{className:"flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",children:[a.jsx(f.Z,{className:"w-6"}),a.jsx("div",{className:"hidden md:block",children:"Sign Out"})]})})]})]})}var E=async()=>{await (0,v.w7)()}},10736:(e,t,r)=>{"use strict";r.d(t,{zB:()=>u,w7:()=>m});var s=r(22765),a=r(70851),o=r(11287),n=r(7590),i=r(58802),c=r.n(i);async function l(e){try{let t=await n.i6`SELECT * FROM users WHERE email=${e}`;return t.rows[0]}catch(e){throw console.error("Failed to fetch user:",e),Error("Failed to fetch user.")}}let{auth:d,signIn:u,signOut:m}=(0,s.Z)({pages:{signIn:"/login"},callbacks:{authorized({auth:e,request:{nextUrl:t}}){let r=!!e?.user,s=t.pathname.startsWith("/dashboard");return s?!!r:!r||Response.redirect(new URL("/dashboard",t))}},providers:[],providers:[(0,a.Z)({async authorize(e){let t=o.z.object({email:o.z.string().email(),password:o.z.string().min(6)}).safeParse(e);if(t.success){let{email:e,password:r}=t.data,s=await l(e);if(!s)return null;let a=await c().compare(r,s.password);if(a)return s}return console.log("Invalid credentials"),null}})]})},85832:()=>{}};