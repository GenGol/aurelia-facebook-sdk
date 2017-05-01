import { Configure } from '../../src/configure';

describe('configure', () => {
    let sut: any;

    beforeEach(() => {
        sut = new Configure();
    });

    it('test passes', () => {
        expect(true);
    });

    it('default configuration options are set', () => {
        expect(sut._config).toEqual({
            appId: '',
            lang: 'en_US'
        });
    });

    it('set a new option using options', () => {
        expect(sut.get('test-option')).toBeUndefined();
        
        sut.options({'test-option': 'test value123'});

        expect(sut.get('test-option')).toEqual('test value123');
    });


    it('override default option using options', () => {
        expect(sut.get('appId')).toEqual('');
        
        sut.options({'appId': '123456789'});

        expect(sut.get('appId')).toEqual('123456789');
    });

    it('get an existing option', () => {
        expect(sut.get('appId')).toEqual('');
    });

    it('get an existing option that does not exist', () => {
        expect(sut.get('fsdfsdfsdf')).toBeUndefined();
    });

    it('set a new single option and return value', () => {
        expect(sut.set('fsdfsdfsdf', 'fdkj98340982')).toEqual('fdkj98340982');
    });

})
