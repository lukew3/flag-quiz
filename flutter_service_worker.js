'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "a18d63919e7caae9040fe293d4a55f64",
"/": "a18d63919e7caae9040fe293d4a55f64",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"main.dart.js": "1234a8eb3ae48c248d69f1bfc1f9df1f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "10ec3ae64dddd13013b649afd33993a5",
"assets/AssetManifest.json": "9ca20d63ff866abfdba03408c98dffe6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/globe.gif": "ca59d9ac5fb8af91edecda2bfb98c7ea",
"assets/assets/correct.png": "589adfd4e1909269048489597593ebac",
"assets/assets/flag_data.json": "729acf26587db4e88197861b9d30fdba",
"assets/assets/incorrect.png": "dff2e23d5295822f58973176989c8fe2",
"assets/assets/flags/ps.png": "a36ee41fa0ccb236cc6a3f2871e16c82",
"assets/assets/flags/eg.png": "21ce3a48e7d6dff0c3cd960a31c3c1d3",
"assets/assets/flags/gs.png": "c4b7603dbcb0ff5eecae7908e3d43157",
"assets/assets/flags/bd.png": "850627babe90e61f44d30a9b401d1967",
"assets/assets/flags/nz.png": "217d637f1b1c10a81589ab0a16e14e12",
"assets/assets/flags/qa.png": "708adc8c1b4cbe9878d106bd56952635",
"assets/assets/flags/gm.png": "38f56ee322e0bcf7600ca97d52dac35a",
"assets/assets/flags/kn.png": "1484cba1fbf9047a5c4e1dc9f21121fe",
"assets/assets/flags/gr.png": "267db093006d2aebc3f4ae4184580aeb",
"assets/assets/flags/ie.png": "793c453cdc53d2ec3ccc3cf9eebc4e92",
"assets/assets/flags/cv.png": "624ebe51a9ea3f69616292959f8ee872",
"assets/assets/flags/im.png": "c38e94122a8dbcf91bc00b518c3d4efd",
"assets/assets/flags/vg.png": "157fe83aeac52441f5dcc7686d0ca4e6",
"assets/assets/flags/as.png": "ce5b7db4114fe78fe7ac839057e4e250",
"assets/assets/flags/sm.png": "1cca7be51ab8307f9d2bacc3c4206a19",
"assets/assets/flags/za.png": "f91617a6236667ee67558cdb71d89a79",
"assets/assets/flags/fr.png": "e6e50b68ddb1f3af9999f39b24a37158",
"assets/assets/flags/sb.png": "c74789d00eb73b5716f5fcb9718f91ba",
"assets/assets/flags/nl.png": "fe1d046a2638d8e2b19bbc68c296b9e2",
"assets/assets/flags/re.png": "d04d7df66b5f4b6124a8ea455095caeb",
"assets/assets/flags/dm.png": "729e70cd6a7c65fa8a14e0ccd7fdfcb6",
"assets/assets/flags/sv.png": "8c58e214c87b49cda3856064a885e167",
"assets/assets/flags/mq.png": "a49150d171f92c3d7fe30cd2d818f8ea",
"assets/assets/flags/jm.png": "654fa5961e1e8cd489194ad9612fc779",
"assets/assets/flags/ua.png": "8804771482c64305726258e02bb88ebc",
"assets/assets/flags/ba.png": "5891cbb3ef33226e1eb24b01b9129fc7",
"assets/assets/flags/pt.png": "bcaa812ca39ccf1becee4c92af91a333",
"assets/assets/flags/gi.png": "a7d981a967fdf78c11b659a1e653f6b5",
"assets/assets/flags/bi.png": "9e71161571ae8de31a9dcc3109423168",
"assets/assets/flags/sx.png": "b238e9cc679e4a697490b4846584958b",
"assets/assets/flags/fo.png": "a4b5b9585321caa576dcb4e9bddddc2c",
"assets/assets/flags/vn.png": "4fa19337d942428dfe897ae3cd8c6beb",
"assets/assets/flags/fi.png": "9e8e5652f853bcce80c5d0faf17dedd4",
"assets/assets/flags/cx.png": "3b9a9b84a658842c2e9a3c1aa9228116",
"assets/assets/flags/jp.png": "147970e61b245bcc91ad4cc89443f9d3",
"assets/assets/flags/lt.png": "1966dcd55e1712afc46faf9efc35146b",
"assets/assets/flags/hr.png": "b73fc761b9e100944fb477ebf99f4677",
"assets/assets/flags/cc.png": "14048f7f9beb3d9c53220f52a56c4233",
"assets/assets/flags/gh.png": "2f2043ba75c9e240fa463e06d9041252",
"assets/assets/flags/bo.png": "e1f5d88dfafdbf4ae7c6235d34081391",
"assets/assets/flags/pn.png": "a412363a166b5f7243703aee8ffb948b",
"assets/assets/flags/sz.png": "81d16f3a7cee947c087f3f1fb63a5b81",
"assets/assets/flags/et.png": "db3c69eb588727b4d58e41f2aa2f9989",
"assets/assets/flags/ne.png": "b311691f500ca07de6b3a67ee6d8024c",
"assets/assets/flags/cr.png": "12f0de9226185ad1949c17321b5b011a",
"assets/assets/flags/mc.png": "960eca5ed10a22cab7ebf17289027964",
"assets/assets/flags/gd.png": "7a3d0e320fc689c98068ff311cf2b3cc",
"assets/assets/flags/mm.png": "0d85c3e21d25e54759a6dee5b51b043b",
"assets/assets/flags/kg.png": "d585dcfa5498f709c59b50845474e72c",
"assets/assets/flags/br.png": "06ee67b3214540aa53c876b85be6d060",
"assets/assets/flags/dj.png": "0dfb424c712a97a7c9b3d2d5a18bdc0e",
"assets/assets/flags/mz.png": "072bd9ce61df3e861bd93ddbd23ae11a",
"assets/assets/flags/sy.png": "d238135fdf63bde1de5a96b79ed0a05e",
"assets/assets/flags/bh.png": "0875a8571c57553d1ca093c5a593b008",
"assets/assets/flags/uy.png": "802c92759eb5b0f312ab362313053160",
"assets/assets/flags/so.png": "fc6c4a1b3f0ef5eca533bc44585f45af",
"assets/assets/flags/ee.png": "cdc02614e07c717076bf0f5cc746107e",
"assets/assets/flags/tm.png": "2a56856a0372ec253296cac1ff3dbd8f",
"assets/assets/flags/ao.png": "f3ded1d19efae8b545e8220069172520",
"assets/assets/flags/md.png": "53255220aef3e1bfe7db8d09a04a32de",
"assets/assets/flags/in.png": "695b7b47209d23bcdc7cfeac031fe709",
"assets/assets/flags/yt.png": "9984f37746d589646e701c79c870ad45",
"assets/assets/flags/mo.png": "fedf9469344bb12df4658d6544f15b9b",
"assets/assets/flags/au.png": "19b7a29c62bda7b35d2660bb749cafdf",
"assets/assets/flags/sh.png": "c10042c541cd70558112aef3c009fbc3",
"assets/assets/flags/vu.png": "6598f160a9199835838cdb070f07bbdf",
"assets/assets/flags/bv.png": "8e42a465d9672e0768a71fdfb9937d04",
"assets/assets/flags/zm.png": "a1b8087537650bcf52709598a4b2cc40",
"assets/assets/flags/ph.png": "ec77d506e8524e8344bf0db9da5ebc99",
"assets/assets/flags/cd.png": "e1fb43bef5be57d3355254ad4d2ff5a3",
"assets/assets/flags/cn.png": "b015225484e9a75e317753d7c2e091e1",
"assets/assets/flags/bz.png": "ece2e192b0a98108480da8d96a1595bc",
"assets/assets/flags/tl.png": "4d2b2c37e42810e735a4daa08fe17571",
"assets/assets/flags/co.png": "2e46ecf33bbbf440449d31f7e34649a2",
"assets/assets/flags/st.png": "761dc36f37b1660d5305d6a316a20327",
"assets/assets/flags/gy.png": "d1213d455d620df24c0bd70d7c56027e",
"assets/assets/flags/ws.png": "1b14860b8334ae8c2d8f711180424ebe",
"assets/assets/flags/pm.png": "dd7475975b650e77b3a9a462ff7757d1",
"assets/assets/flags/gt.png": "225661d114760e51a377abb39bc7fb89",
"assets/assets/flags/mw.png": "5994258e852f012cac9b24125b0695f1",
"assets/assets/flags/km.png": "ac63932628996233b8882b9ae0f2d953",
"assets/assets/flags/is.png": "7c3093742bac97ae3c03db2ce94e279a",
"assets/assets/flags/gp.png": "293b11bfdba959614f1454ca9248015c",
"assets/assets/flags/bm.png": "61ecd3807a07999956b0a1fc0869b247",
"assets/assets/flags/mp.png": "f38baabfb0a3ba73f966b0aa968c294d",
"assets/assets/flags/bg.png": "5fc824516b4bf243f610d783f314448e",
"assets/assets/flags/gn.png": "a99e2ac3567eb819b3dd8f97c59019a7",
"assets/assets/flags/tv.png": "f8a4de047a3e8135e7f17b0bf1bcbc05",
"assets/assets/flags/sd.png": "02371fa0af5e44c231c673aee79ef43a",
"assets/assets/flags/mv.png": "5b9f86b1a04fd25632137cebd79393bf",
"assets/assets/flags/tf.png": "f8003b7d84641457f422f447348e8abf",
"assets/assets/flags/bt.png": "8a347074513a5f20bfbf1a7c6c907c2b",
"assets/assets/flags/ve.png": "9b750dbde30ed6acce8bdb85d290af7a",
"assets/assets/flags/ga.png": "7dfd2aaf705232e3a17328bf3134ac97",
"assets/assets/flags/vc.png": "f4dcc2860b8603528f5c87af86036d79",
"assets/assets/flags/hm.png": "fbbb0af0f54113a33924806f85cb96ae",
"assets/assets/flags/rs.png": "b5b3c71fa98d6fe21537c941ff997455",
"assets/assets/flags/ro.png": "1991ebb065e7d879274136a56c35f3c4",
"assets/assets/flags/it.png": "f21493d4e912db54f6c5ff7453e13d0f",
"assets/assets/flags/at.png": "e90f72ac6a7a02ad6f03685eedfcb112",
"assets/assets/flags/ly.png": "27b17951842d2b8cdb2b54cbb6f2aabf",
"assets/assets/flags/aw.png": "04bf757830be1acb845b8e57d50214fe",
"assets/assets/flags/ca.png": "bbab46304db217176eb96a0d6d524411",
"assets/assets/flags/jo.png": "3b7ff1ee8ba4a8f26f4ab64b25c2ba61",
"assets/assets/flags/om.png": "d2f8a0b2d9cf0a750197abae1d421d00",
"assets/assets/flags/tz.png": "517495e912a75961d74535c25301c651",
"assets/assets/flags/my.png": "3eb8c759c557b824479322623382abc4",
"assets/assets/flags/ec.png": "906df2af8cb63ab8e2516aac65f68fb1",
"assets/assets/flags/bb.png": "4e0135854fe7cd7f4b480f6887c5eb1f",
"assets/assets/flags/gu.png": "deb33335b1865f6af5854757196b7b5c",
"assets/assets/flags/kh.png": "f77cbf83a42a00b29f24e6c46b4a8c17",
"assets/assets/flags/tn.png": "96a22746eb62d3b1eac4371fd07fdebd",
"assets/assets/flags/sk.png": "28cc816fcfed714d80085d80e2b24f4b",
"assets/assets/flags/pl.png": "748a50828d239803392e9198fb0bacb3",
"assets/assets/flags/ug.png": "bbe2964c29c28f1f90dbf3d00bdbdc28",
"assets/assets/flags/dk.png": "518ec82fbd68b6341b6940332f920cb4",
"assets/assets/flags/mn.png": "9bbfac889bf56b247adaf4bcb1d72957",
"assets/assets/flags/gb-nir.png": "10369ef258fff88adb116f941566c111",
"assets/assets/flags/si.png": "7b587e6aa2fc33368d9c93f9f43fbc7a",
"assets/assets/flags/kp.png": "19ce9e4f30a5b42cbeb5336f4db6727e",
"assets/assets/flags/rw.png": "ffdfb4df17762fcbf6b5e71b8ed853a9",
"assets/assets/flags/mk.png": "ac44d569cb655940da5df48592aa213b",
"assets/assets/flags/hn.png": "834071b9de4724f42e09d21060df2668",
"assets/assets/flags/io.png": "f8ed76347c8881883f3b734857239ab2",
"assets/assets/flags/mg.png": "3288465509e3f78e90eb91ef9d1b5101",
"assets/assets/flags/de.png": "0520119bf2f308ee9c930635df0d841c",
"assets/assets/flags/sg.png": "7669d620f4bc39fefc2316e850cb7f5f",
"assets/assets/flags/ax.png": "864793c8cdcd2b6034e0f0ec6788cc97",
"assets/assets/flags/af.png": "40e44618337bce3f6c50ee3a2a63bee3",
"assets/assets/flags/cf.png": "e97b6f28b06930defbef0963a4b1c0f7",
"assets/assets/flags/np.png": "d13d101529e35036c68fb66ac8ad9132",
"assets/assets/flags/us.png": "475fb15a34544a3d3e52afde0f29eb3d",
"assets/assets/flags/es.png": "1da639d77ca00d8834f9e61d74dc21d0",
"assets/assets/flags/cm.png": "a330642b967c3ccd5e94c91ce9632d68",
"assets/assets/flags/sn.png": "db984872e529137a695897dc560ca11b",
"assets/assets/flags/nf.png": "9cc5bc6bad54e31f6146a525e54515b7",
"assets/assets/flags/hk.png": "794d88174aef1cb2aa6c7eb00bca9875",
"assets/assets/flags/gb.png": "ea86469bb1e47cb3aad48b3bcb951803",
"assets/assets/flags/no.png": "8e42a465d9672e0768a71fdfb9937d04",
"assets/assets/flags/td.png": "ff8f6d6088978fc34d8f94aac71848ba",
"assets/assets/flags/ss.png": "143e1c434496089cb26fbd8f9556100b",
"assets/assets/flags/ag.png": "0555088cee78550cf929abd1159ec0e3",
"assets/assets/flags/pr.png": "15636836f95b7e5e5bd3ef27fba98811",
"assets/assets/flags/cg.png": "2be3ca3f8de97d5a44b7e5a3fa7b3460",
"assets/assets/flags/tc.png": "afd70a667cf28a9e81abd41be4108fde",
"assets/assets/flags/tj.png": "2077ed85b2a662f140fb39cd3aeadfa1",
"assets/assets/flags/py.png": "ae34c09e51bb47d06a68e0f11bb14727",
"assets/assets/flags/kr.png": "c3976e074b9c2bd6c4e0bb650748c025",
"assets/assets/flags/nu.png": "0ec2b281563be3f0515725fbfbc80bd2",
"assets/assets/flags/er.png": "7e33a397592420574abb8a13e11b6650",
"assets/assets/flags/xk.png": "5750da0db4511d31e3f0526f821da288",
"assets/assets/flags/kw.png": "32934db45f966265489891f079068a7f",
"assets/assets/flags/cz.png": "e15df23d58c62f82ac929b4a8ef6d723",
"assets/assets/flags/eh.png": "6067f5087cb85c8c04eb47a4e2d9b69c",
"assets/assets/flags/sa.png": "8350ee747509d6e606eb7012b17479c4",
"assets/assets/flags/fk.png": "f59782401e45931c75db84a2842890e7",
"assets/assets/flags/to.png": "acbbd85ab76dc826a6da467bb60574ec",
"assets/assets/flags/pe.png": "465459f475324d0bfeb894af61689147",
"assets/assets/flags/la.png": "8262e78752ff7d33e9e226553de93173",
"assets/assets/flags/va.png": "020ff7558796b3a632b04cbf8063e2cb",
"assets/assets/flags/sl.png": "e5bb01eb2ef68180fe642bae89d97ed4",
"assets/assets/flags/nc.png": "28bf6cec14f525080d3ec1848f3ea752",
"assets/assets/flags/gb-wls.png": "3c6d25df90a4097bb22c7b96f05f0447",
"assets/assets/flags/bj.png": "612728197019998fc854f5a2bd2b1d26",
"assets/assets/flags/ge.png": "846199ebaf68ba0ee7e6159a2b21d40e",
"assets/assets/flags/ad.png": "6a0c997edea035620ce96f541222c88f",
"assets/assets/flags/mx.png": "ec792a0e2740298a154ca502fcf2d037",
"assets/assets/flags/mt.png": "5c9410b4b89ac10dac51f4409ae49c19",
"assets/assets/flags/bf.png": "61eab227268d218cfb88384d3d17ab0b",
"assets/assets/flags/iq.png": "e1bacb74939a3e44cd5eca94317e37b9",
"assets/assets/flags/ms.png": "1dafc43b1757b6704e559e278192e03a",
"assets/assets/flags/ky.png": "78f0bf88f6265f7b7b0d336108c80689",
"assets/assets/flags/pk.png": "92a4cef11809b6b7e602576a8c8b4216",
"assets/assets/flags/kz.png": "487b55efeddde80893eea5e137f67d4f",
"assets/assets/flags/tk.png": "1c3ffc5fabd9e529fa9a97088a0b3f21",
"assets/assets/flags/gb-eng.png": "01057f4a4fa81b51bf97ba0bba617de4",
"assets/assets/flags/dz.png": "4d811e314e27699272a0c3515d088ede",
"assets/assets/flags/pf.png": "260d63231075b7246005af3c88d9606e",
"assets/assets/flags/ar.png": "cf2d5683b80123ef7d7964a745a53d96",
"assets/assets/flags/aq.png": "302f05fb82f027689c70c65d3b515657",
"assets/assets/flags/me.png": "ce12d081aabdffe0d2e4b9c6ecb9eb8f",
"assets/assets/flags/gg.png": "d51cbe29cead6b671d729e4b1489a1f0",
"assets/assets/flags/cl.png": "df049a1ba4fd5eb4717452bbfb34ace8",
"assets/assets/flags/ch.png": "8bfc72fbc54ced2e424e5c5cecf520ff",
"assets/assets/flags/pw.png": "1a240bfe4ee4f9d5b0713a50afcee997",
"assets/assets/flags/mu.png": "4454054c98ad1c17e2ee59a2dc51c8f3",
"assets/assets/flags/ng.png": "8be4f7b250541d3e1afcf82948161647",
"assets/assets/flags/fj.png": "c6fbda831fe4bdd2b749ee88c301059e",
"assets/assets/flags/uz.png": "5df216e54eb948dc90d2b87e3f2493a9",
"assets/assets/flags/ae.png": "65eb91d77007d24b2442d3f71c47a1cd",
"assets/assets/flags/gb-sct.png": "e90d9c34e19187bb82c7941ba4ffb53d",
"assets/assets/flags/ir.png": "eabfc7bad3482ba44b5f6890224b3780",
"assets/assets/flags/lv.png": "aeaddab2182215fad72621844bef3718",
"assets/assets/flags/na.png": "2289708ca1307b0d5d80e6e81527e7cf",
"assets/assets/flags/vi.png": "4a3f332ea370ecf6a3d6ff12d9a5e0c8",
"assets/assets/flags/lu.png": "68e7c72eb6025cd3a340cae58c7fdcae",
"assets/assets/flags/gl.png": "fb15951fcad8c5c721b6707d7ce3122d",
"assets/assets/flags/tr.png": "cb279d8f376f0d579ceeff7bb498fef2",
"assets/assets/flags/sr.png": "858ac9e369b93dac54ef117fadb90e8b",
"assets/assets/flags/cy.png": "35818c7e301aabdefdd88d88594569f1",
"assets/assets/flags/mh.png": "4d749b683e70df17fbb8d0c42737a151",
"assets/assets/flags/cu.png": "9ae19fc93995778fbdafea0ae2a65bdb",
"assets/assets/flags/am.png": "2e4c98d5ec9646975df7c91b97ccf1e2",
"assets/assets/flags/il.png": "5cf8e9809cce55e0a53527b1c304642f",
"assets/assets/flags/li.png": "cb910a55f32555ced3c335ab3e6f83fc",
"assets/assets/flags/um.png": "475fb15a34544a3d3e52afde0f29eb3d",
"assets/assets/flags/hu.png": "4013f5d274a2d7af4c5b2e1ea5084457",
"assets/assets/flags/lc.png": "11704fb82d021768ae6926e12e10f00a",
"assets/assets/flags/lr.png": "198c3ef94e435bf7790358f4fe8c30c9",
"assets/assets/flags/ki.png": "68b686991c554da0a9b1405900017123",
"assets/assets/flags/ru.png": "da8e4c05683e554f4132ad01314b4ccf",
"assets/assets/flags/tt.png": "29d9d5713322b5d5f0f3466104bdbf44",
"assets/assets/flags/tg.png": "8c6edf3fd2f7c7f43007f630b4b20858",
"assets/assets/flags/ma.png": "d75b3ef2e492bd804bcb1463fc280475",
"assets/assets/flags/ht.png": "497f96894415d90d0874d8eb994deca7",
"assets/assets/flags/sc.png": "b67437213f8f69892c98064e8dad8543",
"assets/assets/flags/ye.png": "22df19c8bf33ac418e28f53c6b3f1ae7",
"assets/assets/flags/ke.png": "b13ce93d296d6516586d7a45fde379ae",
"assets/assets/flags/az.png": "e3ab5f014bcd96769a669e65a2ee4d5b",
"assets/assets/flags/al.png": "8f57a485b5fb8c14c0e09d73d096f05e",
"assets/assets/flags/sj.png": "8e42a465d9672e0768a71fdfb9937d04",
"assets/assets/flags/gq.png": "a8e2088bc62679321033d97548267f0e",
"assets/assets/flags/se.png": "33873b031096500cdd4f1ea8b212b687",
"assets/assets/flags/th.png": "bf71ca9b1627d3a1b7844c23b6ef3d8f",
"assets/assets/flags/ai.png": "af6c405462ecd5a5f11b9969a5720d74",
"assets/assets/flags/ml.png": "e77f8125a24791cb92c8cc2fe7e0bb92",
"assets/assets/flags/bn.png": "9e9be25ade9fe0abed3481a854f66a13",
"assets/assets/flags/gw.png": "9ff1e1f7ea9e4c6a2aaa98ded87ac974",
"assets/assets/flags/ni.png": "805761088f185d2010e3b7584e9b7c48",
"assets/assets/flags/je.png": "a27f24fd3c58a378718a0ab9545dea27",
"assets/assets/flags/bs.png": "2402c693b43bec72bbdee73cd827a8c5",
"assets/assets/flags/tw.png": "8e34ba4322ce8829cb3f3094c75963de",
"assets/assets/flags/mr.png": "bfbd3ddee2024e957b340c93fc963b37",
"assets/assets/flags/ck.png": "b5702a7eba8e00867e98ec0c6fad3040",
"assets/assets/flags/lb.png": "c9a52f47ad7a587b317917892bb7f9c5",
"assets/assets/flags/nr.png": "108079069b8ef2279572fea5057c992e",
"assets/assets/flags/ls.png": "843347882bb932b741ea6b8d6b40b6b1",
"assets/assets/flags/do.png": "10cde1fe25521b0ac01831a82116e7b5",
"assets/assets/flags/wf.png": "4d99fc020f1d74a145262b4c1ed6306e",
"assets/assets/flags/lk.png": "9e773955d6f8be80501ab8c39d267717",
"assets/assets/flags/bw.png": "9cd963974ae1b32a9ed7c35f5e2af50d",
"assets/assets/flags/pg.png": "32aba6c80082b7ff9d6114ad94b3f5fc",
"assets/assets/flags/be.png": "edfadb8a45e46aec79c933634ecab6f0",
"assets/assets/flags/by.png": "468a25adcc7f39ed9cbcb5c7c5335696",
"assets/assets/flags/gf.png": "f8a8acd77e0cdad6c08d4eaae76ab7ad",
"assets/assets/flags/zw.png": "0ffcb861141c1e5ff99c567c6cbf99ac",
"assets/assets/flags/id.png": "38c20f648803427f64a0290ba82c4a74",
"assets/assets/flags/pa.png": "e3a9fc08de5165329f0a2c0b5fadcb55",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "74a5bed8b0d964bf30fe1606ecdcdefe",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"version.json": "9887e4250e6d8aa56fb471b22b50ee8f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
