script {
    use DiemFramework::AccountCreationScripts;
    use DiemFramework::XUS;

    fun main(tc: signer, new_addr: address) {
//        let new_addr: address = 0x2d09772cd55fb0b394fd2a4b41016b4b;
        let dummy_prefix = x"be870f844e0710ba19c21687ecdded71";
        let human_name = b"Pog boi";
        let all_currencies = true;

        AccountCreationScripts::create_parent_vasp_account<XUS::XUS>(tc, 70, new_addr, dummy_prefix, human_name, all_currencies)
    }
}