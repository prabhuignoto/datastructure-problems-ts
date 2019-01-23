import Linkedlist, {LinkedListNode} from "../index";
import {expect} from "chai";
import GetLength from "../../GetLength/GetLength";
import { utils } from "mocha";

describe("Tests for Linkedlists", () => {
    it("Check if new elements are appended correctly", () => {
        const List = new Linkedlist<number>();
        List.append(10);
        List.append(20);
        expect(GetLength(List)).to.be.equal(2);
    });
    it("Check if prepend works correctly", () => {
        const List: Linkedlist<number> = new Linkedlist<number>();
        List.append(10);
        List.append(99);
        List.append(4);
        expect((<LinkedListNode<number>>List.head).value).to.be.equal(10);
        List.prepend(30);
        expect((<LinkedListNode<number>>List.head).value).to.be.equal(30);
    });
    it("Check if delete works correctly", () => {
        const List: Linkedlist<number> = new Linkedlist<number>();
        List.append(10);
        List.append(99);
        List.append(4);
        expect((<LinkedListNode<number>>List.head).value).to.be.equal(10);
        List.delete(10);
        expect((<LinkedListNode<number>>List.head).value).to.be.equal(99);
        List.delete(4);
        let node = List.find(4);
        expect(node).to.be.equal(-1);
    });
    it("Check if delete head works as expected", () => {
        const List: Linkedlist<number> = new Linkedlist<number>();
        List.append(23);
        List.append(9);
        List.append(45);
        List.deleteHead();
        expect((<LinkedListNode<number>>List.head).value).to.be.equal(9);
    });
    it("Check if delete tail works as expected", () => {
        const List: Linkedlist<number> = new Linkedlist<number>();
        List.append(23);
        List.append(9);
        List.append(45);
        List.deleteTail();
        expect((<LinkedListNode<number>>List.tail).value).to.be.equal(9);
    });
    it("Check if find works as expected", () => {
        const List: Linkedlist<number> = new Linkedlist<number>();
        List.append(23);
        List.append(9);
        List.append(45);
        const node = List.find(45);
        expect(node).not.to.be.null;
        expect((<LinkedListNode<number>>node).value).to.be.equal(45);
    })
})