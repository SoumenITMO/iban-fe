import axios from "axios";
import Home from "@/components/Home.vue";
import { shallowMount } from "@vue/test-utils";

const MockAdapter = require("axios-mock-adapter");
const mock = new MockAdapter(axios);

describe("Home Component Test", () => {
    afterAll(() => mock.restore());
    beforeEach(() => mock.reset());

    let wrapper = null;
    const mockData = [
        {
            id: 0,
            iban: "BE71 0961 2345 6769",
            status: "VALID"
        },
        {
            id: 1,
            iban: "BR15 0000 0000 0000 1093 2840 814P 2",
            status: "VALID"
        },
        {
            id: 2,
            iban: "CR99 0000 0000 0000 8888 88",
            status: "INVALID"
        }
    ];

    it("test to check if data actually rendering in table", async () => {
        mock.onGet('iban/list').reply(200, mockData);
        wrapper = shallowMount(Home);
        await wrapper.vm.getIbanList();
        const itemnumber = wrapper.findAll("#iban");
        expect(itemnumber).toHaveLength(3);
    });
});
