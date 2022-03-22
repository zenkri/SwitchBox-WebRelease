'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "225b1bed1f9a7c6dd3e24e1246e762d3",
".git/logs/HEAD": "b4ba16542b41347826b7f0062a8ffc80",
".git/logs/refs/remotes/origin/main": "cdb893114beab3cedbbe9f015acde010",
".git/logs/refs/heads/main": "6b9d5426cfd2de7ff081e12d19f91576",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/ORIG_HEAD": "9a57752343add87c61624165e09ad960",
".git/objects/ea/9f5a5825557f0b537083e9abd82b0bc2a7ce90": "bf186a49516fe34bdd643d05af6c638c",
".git/objects/4b/69c9e81172952fe065104b6919757391dc1bdb": "a92d513d3b8ab91d6e7e89c32ad4336a",
".git/objects/a4/bfa5a92c181c695b3dd5afaa192b42848b12ea": "85c93c68e13e18c2a261716d0d2fff08",
".git/objects/84/fed4a29fe5a2518e087d4ae2087a917a5270a7": "1672801c36423ee61b54cc66b17ff3fa",
".git/objects/75/1f895b8174dbc9b62a7f0612dd8d7367c0c2a1": "137badef9e06fc17bd6f2831da54037b",
".git/objects/f9/08a5b7d67e4b14c7b9230a4c0895be7d16e255": "3e2f45d3f0f89950951fe27316173b65",
".git/objects/f0/3d84c65ebdae9fc458103a7c50d78aef75125e": "a358cffb6a1c3693ade890e1431ecbb8",
".git/objects/f0/99b4235215314538bdda47744251a85a7b0a68": "854a43e2d520a6a9dedf86bd3a6df3b6",
".git/objects/dd/1dab40bb93fc9c75a8e9f484214ad2d136ffd1": "635c4c756819f86663c29816dfa38d76",
".git/objects/dd/bae4a53aa77148fce98f765902c54726efb45b": "6314181c7a29989f39774f70d23b2cf1",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/02/4c2ad87501bf40a4de8d1341842a8ee018be93": "f0b02d7011a6cdd14a32728c6fcc2f11",
".git/objects/06/f71fc63f13fa5f492405122f18b9b4edacf3e9": "183f5e353d19b0f68a5637c85637223d",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/44/a813ac67ab6c7064bc2bd6f5f9a0ee3701aafa": "d0c07331d348a0bfe42dbdff36d185b3",
".git/objects/44/b73fd71146390899141bb22976940ae08b159c": "b762e84591922f588554c57214c1ac0e",
".git/objects/0d/5e94c768e2d2aa8f007b961188b77fdda09b97": "312b5b7f3ff4cd89e164a4dd314e6549",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/e7/ff9de51174c19a6f120bf97866d0ee60d9b486": "51a01560fbc161f51cf57e1d8db66245",
".git/objects/a9/8ebf1b010c2ec08150f89052db0b29fc1726ac": "b7b8f9390f2480140fe8e7eb02973f41",
".git/objects/a9/510d160003f180864520fd9e4c269c40d2b70b": "6f67428b476c740eded98bbeade045f1",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/c8/8b2a15165058d5921a3ffd7cdffe9fd5c73f48": "30620df6a655176b6c5e1b1a232d6489",
".git/objects/e8/2a61158c79a569906f3b6583cd61e64fe48427": "151d6e240830340e69ea6d20632121af",
".git/objects/e5/288f8e3084a430d48d03edd381f882f2482973": "9d9cc435cc02652b2344a4e03e7e6e94",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/5d/1034a5d2af60bc1e2eca1df2d0d1c039b55f7a": "b20bcf954d2201f6c5803d684015bb20",
".git/objects/89/22ec3268d72f36ade70cb8ba1b48d628300c83": "5615f688e5b678b0ac2416d5800bedea",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/df/2ce44c1659952fa13d15a9af9967c34e08b497": "de38a70ba9e954cdc830509c6f66e148",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/48/f915d4389bb6a5424b7f9ed34a74bafb6ac608": "15f1a076ea524bd6a8230fc23a34c841",
".git/objects/00/e7366290f5435bd60dee28032824a46bd17b91": "55d38f499119d6ea7217099b69319007",
".git/objects/37/238c9bef4b15b777fc31cbcf29a0dec74cc513": "ec74c9cade654974e373e5dc22aecd91",
".git/objects/ad/b3ece1509e523173d6e76ee956fd222a699282": "71fe961359715af5cc9067fba0513f61",
".git/objects/2c/f799135532b561f52557bac07e8de42ec4b2de": "5f4a2bf4f563c5382ebe4ab75f86e995",
".git/objects/88/431da5133de739a47a957eb2c03d6b2aad174e": "24e606a9b49d67be8c34258b01bbb09a",
".git/objects/10/fa14c5ab0134436e2ae435138bf921eb477c60": "b66fa166f383cab25b410a5e0ff8c63c",
".git/objects/6c/51ad8a533b008b2a8693f98b6678735d2d6678": "afc65d3307bb3bcde1962dc2d5d10b18",
".git/objects/6c/bef5c370d8c3486ca85423dd70440c5e0a2aa2": "49717c57f49cdbfbbd598f2b63f32f8f",
".git/objects/c4/bac788a283345332d059efcf82e06e631271c6": "c99e0fc724fc4f8d583ca6083c86f972",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/d0/d62fff94655e53e3dc0d429f5ac9fe5bd16ba8": "11902cfaa399ce760265a37fbfe1d57d",
".git/objects/b4/5c48cd64558ef34f476d23043eccc859f0e96e": "c0cf2229b4c1ba8fbcdd9652f9006b12",
".git/objects/51/bb03cfa338753aaf7e94558f12194dda46854e": "c62e63f7a0e22b34c9544cec42110d97",
".git/objects/ce/d04dd36577aee59063f91c19fd2d6a5f3de9de": "fa8c47887abe60d6eb9f31fa72a3176c",
".git/objects/63/b40eaffa276bf409f5ee190bec3d78554859c2": "374db430be7b44bd4054e77c88d14df9",
".git/objects/35/70a3f0a4a9686085bb30c3ea294b0e0083d5b5": "8659186214d81bf8f6640dd51ce679d8",
".git/objects/b5/8d1184a9d43a39c0d95f32453efc78581877d6": "a4619d0453ea53d85d3e54a1aef42c2b",
".git/objects/9a/2715f60e820dc2ff5bb4b5ab0f8b0cc38e62b5": "56cd0b22cafd7081230d1f134a8d5204",
".git/objects/ef/94fa293800b31e3982204f43b13785afebd9bd": "3d2cd2666b0c2f949a7c5170807aa452",
".git/objects/32/dd95f1d211750b9f24603cfe10e978be0969af": "6fa473f013246760fee3d2f9b8b2e733",
".git/objects/32/a0e821d75d9c1cefe850474ce6636a669c8ae0": "40a6de5e4e0c0e5978741e57b20e131b",
".git/objects/bc/4e060d955550257db9fd2bb919ad341b4192d6": "1e90bfed4a6af1e25146446d6d25d4ec",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/80/ba94135cc378364af9d3cb2450df48e51faf2c": "af9be20b88d91f0eafe05b8bcd998379",
".git/objects/1c/94c2ed595aed56905d991a4d256e31551fcb98": "1d093e8ea1beffaf6ad40eb02edd4676",
".git/objects/1c/ee2af475fce73bdb334c530493b1d9a461993e": "cfc85104dbe2ae75d7510209a6aee490",
".git/objects/1b/045d68b5cb475d6b677a8616793538cf721ff1": "4a3bfc79f70654020b93c2f062c61d0c",
".git/objects/42/7aa685997f54b383cd4a161f1cf21245817af6": "c970182607e87246ab6e7d2b798a5738",
".git/objects/3a/7f54ed7efc8009a2bc909f9277765b46e7416a": "51f72d02f4bcedcae38453e16d565bfd",
".git/objects/3a/35278a47ad60f519fde8f1f2e58440dd62136d": "444e8fcd3dc0e0c127b03827f459ee23",
".git/objects/f1/8ffd1d91e233a2aa59a6425615bf862e0f0bf4": "32080f66ba7cbe5de2461d2160ee245f",
".git/objects/49/8b267a8c7812490d6479839c5577eaaec79d62": "dc5a81f09c45d0c2a9f1fcd46546d422",
".git/objects/53/2f91573f3a3967d0b406af0892c322a7c3352d": "ed2e4c11a317983b0f67744eaa776562",
".git/objects/14/c2f36e8f48d8bd9d8570ca01b54608827d2bf1": "88d8e0d871de7d9b095b58ec8bec0754",
".git/objects/18/b7e396d5b2d40648ab24bd1f98717f038eb1bc": "4f88c257ed2c99040d0a238040bb5743",
".git/objects/34/5f0367514f5c210ef33e8cd038fe599f34b480": "03cfae020edf56cef7f6d866b8c517cc",
".git/objects/86/0667f6f85ee6d9d5d9fc4b4ff24e5704a7972b": "2e39e704a438febb70afb138246d62b2",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/52/1218cc4f61062fa6a241d1efa4bc08fc88bd12": "959dabf30c4e618a8ead8874a13d8b56",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/511cd8eee3e0c6b37b0cdac9a51b85baf38402": "e3b3dbb4c5eca465035094a336e17f4d",
".git/objects/4d/d06ae1ff56dac194665cd6501e5db41d8acc6b": "cd7f247dbf38239c112c169ddfdff9e8",
".git/objects/aa/c6b5472f073d80172993ba3d7e4d0daec42d2a": "c405b2b8de8987fd60b35eac0ad13ff8",
".git/objects/7f/4ae52ad23416e9c684bcfb9294d8b98afe3f91": "56d822d8dbf9fdd14fa6b82ce9f73079",
".git/objects/64/69e134b09b3e05c16bf2205003788e9c2dc4c3": "595974724ea2a48b2ec22b6ee7bff146",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/4ed61878c916ad0b2a38b474280706ff7460a1": "f5f0ecd33af288bbf97ad2068317622b",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/77/131bd506e483ef2a548ebedde261122a329619": "93c0a99c37b1573b4945054433c33630",
".git/objects/4f/e82038d5fd20a5d5ed8974efc4e2b1ed12069d": "4854b77d9e48a0943e48927b8290b92a",
".git/objects/4f/8a4f17970b5262b928f0c11e394947f09c5987": "efc5f77d83f141e6308d05f8dab0c8bf",
".git/objects/de/326945444ad9c95de1c5fee68c02bac2a31ec4": "8118517d6a725a83c17dd9355b6e6e9e",
".git/objects/6a/756416384c210ada2631f17862f5c01fffa478": "d7631af76c31b17421d4343c0706f497",
".git/objects/46/cc3c075b190f5515ab39857e14de25b18f6b8e": "7b7a7dd5f2c3906d5919ab2ff3cf4cae",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/37546df3e96f8e28df1e38d791d338c1c9f7cb": "be9f59eb7233ee805b74fe51c00ee8cc",
".git/objects/a1/005f68818abfbf58dcff67e2f1bb59199138be": "45faa7dbd21e93310ae94c9132ec6ca9",
".git/objects/a1/fd29ec14823d8bc4a8d1a2cfe35451580f5118": "5421ec3d945409d2a8f19ad9389cfc68",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/f4bee969944353b71113f39957f809187f097b": "83bf4327fe08c8bc1450524b4291c139",
".git/objects/60/d1b2dfdde66a44ced595113c19bf265aa972de": "b419fa271c8b0810a8993a20247dacc9",
".git/objects/60/483ab8f2cd18e99157c3d9c8ef883f7bc6f42b": "5fe28476be4376244780a53bf26342d6",
".git/objects/be/bed332ebca672fccf27246b8ae616e1bc9f882": "b6e5406a70f2b0155607edb29a082f50",
".git/objects/39/9eab1924e39da570b389b0bef1ca713b3b05c3": "10b4b7d33299f6cc3934898f6662cc0d",
".git/objects/61/b192b6e1c6a1a8cee82351477b8b7f26bfa010": "d40e268a60bf098dbfe9eb9f300fc475",
".git/objects/61/2e8e9ceb15b838bcbe2e0bf6d0701d83ebf638": "d79c5eeb6faad972e0c52ac39e07b57e",
".git/objects/61/87dbf4390fc6e28445dd3d988aefb9d1111988": "efc94a2c91a917fc03d760fdca762cba",
".git/objects/41/30cbb2f5452c7ce37596275bf569d5191333fe": "61f52c0d8e1cfb018969fc053d2243ed",
".git/objects/41/42082bcb939bbc17985a69ba748491ac6b62a5": "7d58c721d71ff79020bf3e0fa89aa2c0",
".git/objects/ae/657c44496476c4f02bb7de63472cb33b6367a2": "3d3d93634b1392c9f9f1ea9448b66ed2",
".git/objects/ae/aed76dd4aea1b521f84b752a83b1e243399eef": "d1cb61c5b793e82481929384b3a7a18c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/07/d359d07cf1ed0c0074fdad71ffff5942f0adfa": "22155efed4397dada220e5e28997899e",
".git/objects/cf/4746b122ad1b099f9194062474e33dfef60b66": "beefa83bf22b4c9bce93d8ac94e0407f",
".git/objects/cf/770af7571a3126c87f1ea80abcb39e3d321f86": "d62fe3c097422b8ff9001e2ba0176e88",
".git/objects/8d/8b08076349be450c3129f32f89f6134e6d77fe": "99e2fe6bccf78202cf37b53d3086dbe3",
".git/objects/8d/dcb981bdcdde82c5673a6b181a499b5a156a21": "0b5c35e9b9ba9cb17dfc740937d55c71",
".git/objects/1d/80eb0fa9e9d6a9c3906d1240f3d0d7f932810e": "348cdfb55bec180b602b2c20579b734f",
".git/objects/55/b2325f5c53f5868c50a11603009b522bd1633b": "06dcc87a8059360702226b4e8be0324a",
".git/objects/fc/ff2ed4a718f60fe22ada7379363d1b35b19dc5": "ff1982520c610fb098727c00a461914c",
".git/objects/d5/28f216af223daa0ea0616cc6cde7632ffc6138": "8a130a01982b4322a8823624c0c11eb8",
".git/objects/28/b98b1677822395d7342ad669c99dd54ed55c72": "af57e59c38271aaa4c95801d178f88e4",
".git/objects/ec/17ec1939b7c3e86b7cb6c0c4de6b0818a7e75e": "f653c0ab06e6663638aeffbe233c68a8",
".git/objects/43/c2971dc881b1fecce6f329a92f255db6768b80": "c82ca537f55e756f1028e9f2bd9daa1b",
".git/objects/76/29139526fa0c99538d63d2112786c732a9e14c": "f2999c9bdc966f6109d5af7432841229",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/7e/6125523d7f62ed54cbbcd710a369bf79a8d9c7": "bca28a0208f40f368910364190bbcbf0",
".git/objects/7e/40b24c54b76060ccb6eee638a07aeb035bcce7": "965f495c811a5bac5177d32621a1dc13",
".git/objects/7e/8a855e0462e7d1822361917712f7acf556d624": "856fb27e602b652358dae0703fb4f34b",
".git/objects/e4/db273fd359c16fdb57eba0c361802c99a97e82": "b02c85879dbd5962605ba60b50e3a1dc",
".git/objects/a5/196d1be8fb59edf8062bef36d3a602e0812139": "8374dff94cc2712df9e03766e1bdab62",
".git/objects/a5/d7b84a673458d14d9aab082183a1968c2c7492": "1147c855c784299ac507e5ff917b239d",
".git/objects/21/a18f1edc076ffa9210961d876dedbc9c7336b8": "d27db34ca48b5a19237a1667dd90635c",
".git/objects/c1/66a495c47ff4d7c25ca1b89565b106a4b4ec0e": "6b1eacfe0730fcce57d4ee6821ba9c97",
".git/objects/56/341817935b366c327a2e4e6a2ce2602cdb6ceb": "067f595b3cafe93198a366d52b5fd6c2",
".git/objects/cb/089cd89a7d7686d284d8761201649346b5aa1c": "6d2d6d9c5be91cc65040a602060a8293",
".git/objects/7c/ef5a0dd047bd6ca6908f61e52379260f546ebd": "0bc48179ec2abea90ec52cd35bc560b5",
".git/objects/69/1cf00a1ff5f894506a945dad941fa7cb4eb010": "f22c00d03affec1ac5631cbdd8219510",
".git/objects/a8/119c9c233921675adb8eded0218579dbec0c70": "fdd87fd5ebaebd8a6cf53d8ed954b776",
".git/objects/a8/45515f7723ad9f5426002f4790aed3dcf50451": "53d88062459e961c7a1c0df2985d4a2e",
".git/config": "5bcdefe748d8c821f84b55153d072c9d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/FETCH_HEAD": "e15d32b43674945e0b08c08ca49a81c9",
".git/refs/remotes/origin/main": "bbe282fc414c166f04ad4de5806da029",
".git/refs/heads/main": "bbe282fc414c166f04ad4de5806da029",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "9cfbc5ec6a1f14c54e8770adb8efd816",
"assets/NOTICES": "dd19a1bccb5376b208f1e90fee133adf",
"assets/assets/bg.png": "ca9cfbd22990cf2c92d44894dc8e3cc2",
"assets/assets/switch_H.png": "ef40918c4c00a0bda07930d451a84272",
"assets/assets/icon512.png": "10ae593c9a1321cfb86b87d41535ed3f",
"assets/assets/LED_H.png": "d7f2a0d644a1ffc837d1ef13f39124be",
"assets/assets/logo.png": "831f012296a170025f8844969e4131d5",
"assets/assets/LED_L.png": "a7b01eab7810ca21c288ba473116d679",
"assets/assets/user.json": "336e6d064aa1b6e1fa746f34dd250222",
"assets/assets/switch_L.png": "e0c87f88c9246dd9bb6c2de88bef3c6e",
"assets/assets/loading.gif": "ca98025733ce5784e7e7389d758d5347",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "3cca12ab48767b9f538d5c1ca67e24a1",
"icons/favicon-32x32.png": "af6b77047cb9cca6b322c30f6279a623",
"icons/android-chrome-512x512.png": "10ae593c9a1321cfb86b87d41535ed3f",
"icons/favicon-16x16.png": "0c47c7f996fcc789e1639919db019250",
"icons/apple-touch-icon.png": "e193234c1bb5e8480499e14e9e4511a1",
"icons/android-chrome-192x192.png": "db4a185a8731bc474cd6348bbd127d9f",
"splash/img/dark-2x.png": "1a13fa856e6b8603f739d34f56f73e47",
"splash/img/light-2x.png": "1a13fa856e6b8603f739d34f56f73e47",
"splash/img/light-4x.png": "633889eedb14352833dbab6eff7bb033",
"splash/img/dark-4x.png": "633889eedb14352833dbab6eff7bb033",
"splash/img/light-1x.png": "0859d16a28bac42f62e618749a7e8951",
"splash/img/dark-1x.png": "0859d16a28bac42f62e618749a7e8951",
"splash/img/dark-3x.png": "eb43f15cbbffb7d35ecbd3676f537fca",
"splash/img/light-3x.png": "eb43f15cbbffb7d35ecbd3676f537fca",
"splash/style.css": "5525ffe0da1209fcf5d4971d4b324cf9",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"manifest.json": "57cdd9cb4211fe0cf528d14c13e9f401",
"version.json": "2c17202850a28f91e63ae059da3509a3",
"favicon.ico": "c541aab171e94782601a1edb18a50862",
"index.html": "2eb7e2ea860bf683b93f3aaaf0db68c2",
"/": "2eb7e2ea860bf683b93f3aaaf0db68c2",
"main/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"main/config": "41adefcd1f91e91d473275a100d31a2c",
"main/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"main/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"main/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"main/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"main/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"main/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"main/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"main/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"main/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"main/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"main/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
"main/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"main/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"main/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"main.dart.js": "87b5608a5627d6f4240b195777b0d031",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
