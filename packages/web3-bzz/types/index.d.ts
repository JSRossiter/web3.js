/*
    This file is part of web3.js.
    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.d.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>
 * @date 2018
 */

// once dependency tree is sorted we can reuse web3-providers types here
// for now we keep them loosely typed.
// should really have a dependency on `web3-providers` as its using all
// the providers objects within the class
export class Bzz {
    constructor(provider: string | {});
    setProvider(provider: string | {}): boolean;
    givenProvider: {} | string | null;
    currentProvider: string | null;
    upload(data: string | Buffer | Uint8Array | {}): Promise<string>;
    download(bzzHash: string, localPath?: string): Promise<Buffer | {} | string>;
    pick: Pick;
    BatchRequest: new () => any;
}

export interface Pick {
    file: () => Promise<any>;
    directory: () => Promise<any>;
    data: () => Promise<any>;
}