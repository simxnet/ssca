import { describe, expect, test } from "bun:test";
import { SSCAdapter } from "../src/lib/adapter";

const cache = new SSCAdapter();

type TestUser = {
	name: string;
	avatar: string;
};

describe("Add user and then get it", () => {
	test("add", async () => {
		await cache.set("1076700780175831100", {
			name: "simxnet",
			avatar: "x",
		} satisfies TestUser);

		const cachedUser = await cache.get<TestUser>("1076700780175831100");
		expect(cachedUser).toStrictEqual({ name: "simxnet", avatar: "x" });
	});
});

// Big note: This test is only for coverage purposes, the real adapter should not be used this way as it is made for Seyfert internal managements.
