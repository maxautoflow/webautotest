import { $ } from '@wdio/globals'

class SecurePage {

    get flashAlert () {
        return $('#flash');
    }
}

export default new SecurePage();
