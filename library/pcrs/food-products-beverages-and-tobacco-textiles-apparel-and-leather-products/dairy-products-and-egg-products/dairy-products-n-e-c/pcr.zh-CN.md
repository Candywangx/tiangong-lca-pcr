---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.dairy-products-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他未另分类乳制品

## 1. 范围与适用性

本 PCR 仅覆盖 CPC 3.0 子类 22290 中未在其他类别得到更具体覆盖的、新鲜或经保藏的液态或膏状乳成分产品；产品可以加糖或不加糖，但不得含有其他物质。覆盖路线可包括液态或膏状乳蛋白浓缩物、天然乳盐、乳糖质量分数低于 95% 且不属于乳清干酪的合格乳清来源产品、其他合格的未另列明液态或膏状天然乳成分产品，以及定量或定性组成不同于天然产品的复原乳。

Tiangong `Buttermilk` 流仅在具体酪乳能够证明归入 CPC 22290 时作为代表流，不代表整个 n.e.c. 子类。发酵、酸化或培养酪乳，以及在其他乳制品类别中得到更具体覆盖的任何酪乳，均不属于本 PCR，除非权威分类判定将该确切产品归入 CPC 22290。被覆盖的非酪乳产品必须使用产品特定的 Tiangong 产品流；如果没有匹配流或没有可辩护的分类依据，数据包保持 `manual_review`，不得用 `Buttermilk` UUID 代替。

本 PCR 排除 CPC 2221 至 2227 中得到更具体覆盖的所有产品，包括固态乳及稀奶油；2222 所涵盖的浓缩或加糖乳及稀奶油；2223 所涵盖的凝固、发酵或酸化乳及稀奶油；黄油及其他乳脂和乳油；干酪；酪蛋白；冰淇淋及其他食用冰。本 PCR 还排除乳糖和乳糖浆、着色或加味乳糖浆、乳清干酪、所列纳入产品的固态类似物，以及组成对应 UNSD CPC 3.0 所列具名天然产品类别的复原乳。

本 PCR 生成从合格乳品原料接收，经液态或膏状产品制造、后处理、卫生清洁，到制造设施大门交付的门到门前景数据包。研究范围要求的上游原乳和其他外购产品生产，以及下游配送、使用和生命末期，应通过链接数据集表示，不得在前景清单中重复。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.dairy-products-n-e-c |
| classification_refs | CPC 3.0: 22290, Dairy products n.e.c. |
| covered_products | 未在其他类别得到更具体覆盖、不含其他物质、组成不同于天然产品的新鲜或经保藏液态或膏状乳成分产品；UNSD CPC 3.0 对 22290 列出的类别 |
| excluded_products | CPC 2221-2227 中更具体覆盖的产品；2223 中发酵或酸化乳制品；固态类似物；乳糖和乳糖浆；着色或加味乳糖浆；乳清干酪；归入具名乳或稀奶油类别的组成等同复原乳；含非乳特征性物质的产品 |
| representative_product | 仅限产品特定分类证据将该酪乳归入 CPC 22290 时的酪乳；否则必须使用产品特定的 CPC 22290 流 |
| production_route | 乳或乳来源原料接收和认定；路线特定的分离、浓缩、重组、复原或混合；条件适用的热处理和冷却；散装或包装后处理；卫生清洁和废水去向 |
| market_state | 制造设施大门处声明的液态或膏状乳制品，散装或包装，明确温度、保藏状态、组成和批次身份 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 能够证明属于 CPC 3.0 子类 22290 的已声明液态或膏状乳制品 |
| How much | 制造设施大门处 1 kg 产品净质量 |
| How well | 符合声明的产品规格和市场状态；数据包说明该确切产品为何未在其他类别得到更具体覆盖 |
| How long or cycle | 一个声明的生产批次或生产期；不规定服务持续时间 |
| reference_flow_link | 设施大门处放行的合格终产品质量；下表 `Buttermilk` 流仅用于合格的 CPC 22290 酪乳，其他被覆盖产品必须使用产品特定流或进入 `manual_review` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净质量 |
| 参考产品流 | Buttermilk `a0a5374c-955b-4db5-9520-001165f8ddc0` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 确切产品名称和 CPC 22290 纳入理由；乳动物来源；液态或膏状状态；组成和主要乳成分；加糖或不加糖状态；保藏和热处理状态；适用时的酪乳生产路线；散装或包装形式；发运时产品温度；设施地理范围；生产批次和参考期 |

构建前景数据包时，`必需限定信息` 中的每项信息均须在数据集元数据、过程说明、参考流备注、产品描述或等效数据包字段中声明。缺少限定信息将使参考流定义不完整。上述已核验 UUID 按不含数据集版本的形式保存，不得以分类标签、未经核验的近似匹配或虚构 UUID 替换。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和归一化清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以 kg 记录合格产品净质量，并将前景数量归一化至 1 kg。没有批次特定换算时，不得使用包装件数、体积或运输毛质量。 |
| `volume_to_mass_conversion` | 以体积报告的液体数量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅可使用同一产品、温度和批次的实测或有记录密度将体积换算为质量；保留原始体积、密度、温度和计算。 |
| `dry_matter_and_constituent_basis` | 固形物、蛋白质、乳糖、脂肪或其他成分记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 明确湿质量、干物质或成分基准。不得把组成限值或质量规格当作清单数量。 |
| `mass_balance_period` | 批次或生产期物料平衡 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 投入、合格产品、共产品、损失和废物使用共同的批次或生产期边界；物料持有量重要时核对期初和期末持有量。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景制造系统 | 纳入接收和认定、路线特定的液态或膏状产品制造、条件适用的热处理和冷却、后处理、卫生清洁、产品损失、废水去向和设施大门放行。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `boundary_route_specificity` | 产品和过程选择 | 仅纳入声明产品实际采用的操作。分离、膜浓缩、重组、复原、发酵、干燥和包装不能作为可互换的通用阶段；未采用的操作须记录为不适用。 | `unsd-cpc-3-22290`; `codex-cxs-206-1999`; `codex-cxs-243-2003` |
| `boundary_upstream_links` | 外购乳、乳来源成分、水、能源、包装和化学品 | 将外购产品记录为技术系统投入并链接适当的上游数据集；不得在前景过程中重复上游生产。 | `eu-pef-2021-2279` |
| `boundary_outputs_complete` | 前景输出 | 识别跨越边界的合格产品、共产品、回收物料、不合格产品、废水、其他废物和已知直接基本流。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `boundary_no_generic_performance_values` | 清单编制 | 不得将 Codex 组成或质量准则以及 BAT 相关性能或排放水平复制为通用 LCI 数值。清单数量以实际场址和批次记录为准。 | `codex-cxs-206-1999`; `codex-cxs-243-2003`; `eu-fdm-bat-2019-2031` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造接收点接受的合格乳或乳来源原料，并声明供应商、产品身份、质量、温度、组成基准和批次或交付编号 |
| starting_condition_role | 门到门前景起始条件；上游乳生产和外购乳来源成分制造使用链接的背景或二手数据集 |
| product_classification_scope | 仅限能够证明属于 CPC 3.0 子类 22290 的确切声明产品；n.e.c. 标签不允许吸收 CPC 2221-2227 的具名产品 |
| recursive_input_rule | 本身属于 CPC 22290 的外购投入记录为带上游数据集的技术系统投入，不在当前前景边界内概念性重复制造 |
| upstream_dataset_requirement | 对乳、乳来源成分、公用工程、包装和处理服务使用时间、地理和技术代表性适当的数据集；披露替代数据和数据缺口 |
| disclosure | 声明产品分类理由、确切路线、纳入和排除操作、供应商边界、共产品处理、场内或场外处理、分配选择、数据期和全部暂定估计 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `feedstock_receipt_and_routing` | 原料接收和分类路线 | required | 始终纳入 | 核实产品和原料身份，接收并转送批次 | 每 1 kg 合格终产品所接收的 kg 合格原料 |
| `liquid_or_paste_product_manufacture` | 液态或膏状产品制造 | required | 始终纳入；单元操作取决于路线 | 仅执行已声明的分离、浓缩、重组、复原、混合、热处理和冷却操作 | 转入后处理的 1 kg 散装合格产品 |
| `finishing_and_dispatch` | 后处理和设施大门发运 | required | 始终纳入；包装取决于声明市场状态 | 放行散装或包装合格产品，并在使用时记录包装 | 设施大门处 1 kg 净合格产品 |
| `sanitation_and_wastewater_routing` | 卫生清洁和废水去向 | required | 始终纳入；处理步骤取决于场址配置 | 记录归属于产品系统的清洗投入以及所有废水和卫生残留物去向 | 每 1 kg 合格产品所分配的批次卫生记录 |

### 过程：原料接收和分类路线 （`feedstock_receipt_and_routing`）

#### 输入

##### 产品流

###### 接收生牛全乳 （`raw_cow_milk_received_input`）

该产品流投入仅记录 Raw whole cow milk 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Raw whole cow milk
- 流属性/单位：Mass / kg
- 数量规则：采用交付、储罐、容器、袋装或配方记录的实测接收质量；产品路线未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`unsd-cpc-3-22290`；`codex-cxs-206-1999`

###### 接收生水牛全乳 （`raw_buffalo_milk_received_input`）

该产品流投入仅记录 Raw whole buffalo milk 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Raw whole buffalo milk
- 流属性/单位：Mass / kg
- 数量规则：采用交付、储罐、容器、袋装或配方记录的实测接收质量；产品路线未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`unsd-cpc-3-22290`；`codex-cxs-206-1999`

###### 接收生山羊全乳 （`raw_goat_milk_received_input`）

该产品流投入仅记录 Raw whole goat milk 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Raw whole goat milk
- 流属性/单位：Mass / kg
- 数量规则：采用交付、储罐、容器、袋装或配方记录的实测接收质量；产品路线未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`unsd-cpc-3-22290`；`codex-cxs-206-1999`

###### 接收生绵羊全乳 （`raw_sheep_milk_received_input`）

该产品流投入仅记录 Raw whole sheep milk 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Raw whole sheep milk
- 流属性/单位：Mass / kg
- 数量规则：采用交付、储罐、容器、袋装或配方记录的实测接收质量；产品路线未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`unsd-cpc-3-22290`；`codex-cxs-206-1999`

###### 接收脱脂乳 （`skimmed_milk_received_input`）

该产品流投入仅记录 Skimmed milk 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Skimmed milk
- 流属性/单位：Mass / kg
- 数量规则：采用交付、储罐、容器、袋装或配方记录的实测接收质量；产品路线未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`unsd-cpc-3-22290`；`codex-cxs-206-1999`

###### 接收稀奶油 （`cream_received_input`）

该产品流投入仅记录 Cream 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Cream
- 流属性/单位：Mass / kg
- 数量规则：采用交付、储罐、容器、袋装或配方记录的实测接收质量；产品路线未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`unsd-cpc-3-22290`；`codex-cxs-206-1999`

###### 接收未发酵甜性酪乳 （`sweet_cream_buttermilk_received_input`）

该产品流投入仅记录 Sweet-cream buttermilk, non-fermented 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Sweet-cream buttermilk, non-fermented
- 流属性/单位：Mass / kg
- 数量规则：采用交付、储罐、容器、袋装或配方记录的实测接收质量；产品路线未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`unsd-cpc-3-22290`；`codex-cxs-206-1999`

###### 接收液态甜乳清 （`liquid_sweet_whey_received_input`）

该产品流投入仅记录 Liquid sweet whey 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Liquid sweet whey
- 流属性/单位：Mass / kg
- 数量规则：采用交付、储罐、容器、袋装或配方记录的实测接收质量；产品路线未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`unsd-cpc-3-22290`；`codex-cxs-206-1999`

###### 接收乳蛋白浓缩物 （`milk_protein_concentrate_received_input`）

该产品流投入仅记录 Milk protein concentrate 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Milk protein concentrate
- 流属性/单位：Mass / kg
- 数量规则：采用交付、储罐、容器、袋装或配方记录的实测接收质量；产品路线未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`unsd-cpc-3-22290`；`codex-cxs-206-1999`

###### 接收乳清蛋白浓缩物 （`whey_protein_concentrate_received_input`）

该产品流投入仅记录 Whey protein concentrate 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Whey protein concentrate
- 流属性/单位：Mass / kg
- 数量规则：采用交付、储罐、容器、袋装或配方记录的实测接收质量；产品路线未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`unsd-cpc-3-22290`；`codex-cxs-206-1999`

###### 接收乳渗透液 （`milk_permeate_received_input`）

该产品流投入仅记录 Milk permeate 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Milk permeate
- 流属性/单位：Mass / kg
- 数量规则：采用交付、储罐、容器、袋装或配方记录的实测接收质量；产品路线未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`unsd-cpc-3-22290`；`codex-cxs-206-1999`

###### 接收乳清渗透液 （`whey_permeate_received_input`）

该产品流投入仅记录 Whey permeate 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Whey permeate
- 流属性/单位：Mass / kg
- 数量规则：采用交付、储罐、容器、袋装或配方记录的实测接收质量；产品路线未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`unsd-cpc-3-22290`；`codex-cxs-206-1999`

###### 接收乳糖 （`lactose_received_input`）

该产品流投入仅记录 Lactose 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Lactose
- 流属性/单位：Mass / kg
- 数量规则：采用交付、储罐、容器、袋装或配方记录的实测接收质量；产品路线未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`unsd-cpc-3-22290`；`codex-cxs-206-1999`

###### 接收乳矿物质浓缩物 （`milk_mineral_concentrate_received_input`）

该产品流投入仅记录 Milk mineral concentrate 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Milk mineral concentrate
- 流属性/单位：Mass / kg
- 数量规则：采用交付、储罐、容器、袋装或配方记录的实测接收质量；产品路线未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`unsd-cpc-3-22290`；`codex-cxs-206-1999`

###### 接收蔗糖 （`sucrose_received_input`）

该产品流投入仅记录 Sucrose 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Sucrose
- 流属性/单位：Mass / kg
- 数量规则：采用交付、储罐、容器、袋装或配方记录的实测接收质量；产品路线未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`unsd-cpc-3-22290`；`codex-cxs-206-1999`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格生牛全乳 （`accepted_raw_cow_milk_output`）

该产品流产出仅记录 Accepted Raw whole cow milk for dairy manufacture 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Raw whole cow milk for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用接收检查后验收并转移的实测质量，与对应接收量和拒收量核对
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`

###### 验收合格生水牛全乳 （`accepted_raw_buffalo_milk_output`）

该产品流产出仅记录 Accepted Raw whole buffalo milk for dairy manufacture 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Raw whole buffalo milk for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用接收检查后验收并转移的实测质量，与对应接收量和拒收量核对
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`

###### 验收合格生山羊全乳 （`accepted_raw_goat_milk_output`）

该产品流产出仅记录 Accepted Raw whole goat milk for dairy manufacture 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Raw whole goat milk for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用接收检查后验收并转移的实测质量，与对应接收量和拒收量核对
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`

###### 验收合格生绵羊全乳 （`accepted_raw_sheep_milk_output`）

该产品流产出仅记录 Accepted Raw whole sheep milk for dairy manufacture 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Raw whole sheep milk for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用接收检查后验收并转移的实测质量，与对应接收量和拒收量核对
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`

###### 验收合格脱脂乳 （`accepted_skimmed_milk_output`）

该产品流产出仅记录 Accepted Skimmed milk for dairy manufacture 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Skimmed milk for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用接收检查后验收并转移的实测质量，与对应接收量和拒收量核对
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`

###### 验收合格稀奶油 （`accepted_cream_output`）

该产品流产出仅记录 Accepted Cream for dairy manufacture 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Cream for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用接收检查后验收并转移的实测质量，与对应接收量和拒收量核对
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`

###### 验收合格未发酵甜性酪乳 （`accepted_sweet_cream_buttermilk_output`）

该产品流产出仅记录 Accepted Sweet-cream buttermilk, non-fermented for dairy manufacture 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Sweet-cream buttermilk, non-fermented for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用接收检查后验收并转移的实测质量，与对应接收量和拒收量核对
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`

###### 验收合格液态甜乳清 （`accepted_liquid_sweet_whey_output`）

该产品流产出仅记录 Accepted Liquid sweet whey for dairy manufacture 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Liquid sweet whey for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用接收检查后验收并转移的实测质量，与对应接收量和拒收量核对
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`

###### 验收合格乳蛋白浓缩物 （`accepted_milk_protein_concentrate_output`）

该产品流产出仅记录 Accepted Milk protein concentrate for dairy manufacture 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Milk protein concentrate for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用接收检查后验收并转移的实测质量，与对应接收量和拒收量核对
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`

###### 验收合格乳清蛋白浓缩物 （`accepted_whey_protein_concentrate_output`）

该产品流产出仅记录 Accepted Whey protein concentrate for dairy manufacture 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Whey protein concentrate for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用接收检查后验收并转移的实测质量，与对应接收量和拒收量核对
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`

###### 验收合格乳渗透液 （`accepted_milk_permeate_output`）

该产品流产出仅记录 Accepted Milk permeate for dairy manufacture 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Milk permeate for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用接收检查后验收并转移的实测质量，与对应接收量和拒收量核对
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`

###### 验收合格乳清渗透液 （`accepted_whey_permeate_output`）

该产品流产出仅记录 Accepted Whey permeate for dairy manufacture 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Whey permeate for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用接收检查后验收并转移的实测质量，与对应接收量和拒收量核对
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`

###### 验收合格乳糖 （`accepted_lactose_output`）

该产品流产出仅记录 Accepted Lactose for dairy manufacture 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Lactose for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用接收检查后验收并转移的实测质量，与对应接收量和拒收量核对
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`

###### 验收合格乳矿物质浓缩物 （`accepted_milk_mineral_concentrate_output`）

该产品流产出仅记录 Accepted Milk mineral concentrate for dairy manufacture 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Milk mineral concentrate for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用接收检查后验收并转移的实测质量，与对应接收量和拒收量核对
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`

###### 验收合格蔗糖 （`accepted_sucrose_output`）

该产品流产出仅记录 Accepted Sucrose for dairy manufacture 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Sucrose for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用接收检查后验收并转移的实测质量，与对应接收量和拒收量核对
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 拒收生牛全乳 （`rejected_raw_cow_milk_waste_output`）

该废物流产出仅记录 Rejected Raw whole cow milk from dairy feedstock receipt 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Rejected Raw whole cow milk from dairy feedstock receipt
- 流属性/单位：Mass / kg
- 数量规则：采用按批次和去向记录的拒收、溢洒、取样或退回实测质量，并与接收记录核对
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 拒收生水牛全乳 （`rejected_raw_buffalo_milk_waste_output`）

该废物流产出仅记录 Rejected Raw whole buffalo milk from dairy feedstock receipt 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Rejected Raw whole buffalo milk from dairy feedstock receipt
- 流属性/单位：Mass / kg
- 数量规则：采用按批次和去向记录的拒收、溢洒、取样或退回实测质量，并与接收记录核对
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 拒收生山羊全乳 （`rejected_raw_goat_milk_waste_output`）

该废物流产出仅记录 Rejected Raw whole goat milk from dairy feedstock receipt 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Rejected Raw whole goat milk from dairy feedstock receipt
- 流属性/单位：Mass / kg
- 数量规则：采用按批次和去向记录的拒收、溢洒、取样或退回实测质量，并与接收记录核对
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 拒收生绵羊全乳 （`rejected_raw_sheep_milk_waste_output`）

该废物流产出仅记录 Rejected Raw whole sheep milk from dairy feedstock receipt 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Rejected Raw whole sheep milk from dairy feedstock receipt
- 流属性/单位：Mass / kg
- 数量规则：采用按批次和去向记录的拒收、溢洒、取样或退回实测质量，并与接收记录核对
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 拒收脱脂乳 （`rejected_skimmed_milk_waste_output`）

该废物流产出仅记录 Rejected Skimmed milk from dairy feedstock receipt 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Rejected Skimmed milk from dairy feedstock receipt
- 流属性/单位：Mass / kg
- 数量规则：采用按批次和去向记录的拒收、溢洒、取样或退回实测质量，并与接收记录核对
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 拒收稀奶油 （`rejected_cream_waste_output`）

该废物流产出仅记录 Rejected Cream from dairy feedstock receipt 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Rejected Cream from dairy feedstock receipt
- 流属性/单位：Mass / kg
- 数量规则：采用按批次和去向记录的拒收、溢洒、取样或退回实测质量，并与接收记录核对
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 拒收未发酵甜性酪乳 （`rejected_sweet_cream_buttermilk_waste_output`）

该废物流产出仅记录 Rejected Sweet-cream buttermilk, non-fermented from dairy feedstock receipt 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Rejected Sweet-cream buttermilk, non-fermented from dairy feedstock receipt
- 流属性/单位：Mass / kg
- 数量规则：采用按批次和去向记录的拒收、溢洒、取样或退回实测质量，并与接收记录核对
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 拒收液态甜乳清 （`rejected_liquid_sweet_whey_waste_output`）

该废物流产出仅记录 Rejected Liquid sweet whey from dairy feedstock receipt 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Rejected Liquid sweet whey from dairy feedstock receipt
- 流属性/单位：Mass / kg
- 数量规则：采用按批次和去向记录的拒收、溢洒、取样或退回实测质量，并与接收记录核对
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 拒收乳蛋白浓缩物 （`rejected_milk_protein_concentrate_waste_output`）

该废物流产出仅记录 Rejected Milk protein concentrate from dairy feedstock receipt 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Rejected Milk protein concentrate from dairy feedstock receipt
- 流属性/单位：Mass / kg
- 数量规则：采用按批次和去向记录的拒收、溢洒、取样或退回实测质量，并与接收记录核对
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 拒收乳清蛋白浓缩物 （`rejected_whey_protein_concentrate_waste_output`）

该废物流产出仅记录 Rejected Whey protein concentrate from dairy feedstock receipt 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Rejected Whey protein concentrate from dairy feedstock receipt
- 流属性/单位：Mass / kg
- 数量规则：采用按批次和去向记录的拒收、溢洒、取样或退回实测质量，并与接收记录核对
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 拒收乳渗透液 （`rejected_milk_permeate_waste_output`）

该废物流产出仅记录 Rejected Milk permeate from dairy feedstock receipt 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Rejected Milk permeate from dairy feedstock receipt
- 流属性/单位：Mass / kg
- 数量规则：采用按批次和去向记录的拒收、溢洒、取样或退回实测质量，并与接收记录核对
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 拒收乳清渗透液 （`rejected_whey_permeate_waste_output`）

该废物流产出仅记录 Rejected Whey permeate from dairy feedstock receipt 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Rejected Whey permeate from dairy feedstock receipt
- 流属性/单位：Mass / kg
- 数量规则：采用按批次和去向记录的拒收、溢洒、取样或退回实测质量，并与接收记录核对
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 拒收乳糖 （`rejected_lactose_waste_output`）

该废物流产出仅记录 Rejected Lactose from dairy feedstock receipt 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Rejected Lactose from dairy feedstock receipt
- 流属性/单位：Mass / kg
- 数量规则：采用按批次和去向记录的拒收、溢洒、取样或退回实测质量，并与接收记录核对
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 拒收乳矿物质浓缩物 （`rejected_milk_mineral_concentrate_waste_output`）

该废物流产出仅记录 Rejected Milk mineral concentrate from dairy feedstock receipt 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Rejected Milk mineral concentrate from dairy feedstock receipt
- 流属性/单位：Mass / kg
- 数量规则：采用按批次和去向记录的拒收、溢洒、取样或退回实测质量，并与接收记录核对
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 拒收蔗糖 （`rejected_sucrose_waste_output`）

该废物流产出仅记录 Rejected Sucrose from dairy feedstock receipt 在原料接收和分类路线边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Rejected Sucrose from dairy feedstock receipt
- 流属性/单位：Mass / kg
- 数量规则：采用按批次和去向记录的拒收、溢洒、取样或退回实测质量，并与接收记录核对
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_feedstock_receipt`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

##### 基本流

### 过程：液态或膏状产品制造 （`liquid_or_paste_product_manufacture`）

#### 输入

##### 产品流

###### 验收合格生牛全乳投入 （`accepted_raw_cow_milk_input`）

该产品流投入仅记录 Accepted Raw whole cow milk for dairy manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Raw whole cow milk for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用从原料接收转入所表示制造批次的实测质量；配方未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-pef-2021-2279`

###### 验收合格生水牛全乳投入 （`accepted_raw_buffalo_milk_input`）

该产品流投入仅记录 Accepted Raw whole buffalo milk for dairy manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Raw whole buffalo milk for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用从原料接收转入所表示制造批次的实测质量；配方未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-pef-2021-2279`

###### 验收合格生山羊全乳投入 （`accepted_raw_goat_milk_input`）

该产品流投入仅记录 Accepted Raw whole goat milk for dairy manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Raw whole goat milk for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用从原料接收转入所表示制造批次的实测质量；配方未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-pef-2021-2279`

###### 验收合格生绵羊全乳投入 （`accepted_raw_sheep_milk_input`）

该产品流投入仅记录 Accepted Raw whole sheep milk for dairy manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Raw whole sheep milk for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用从原料接收转入所表示制造批次的实测质量；配方未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-pef-2021-2279`

###### 验收合格脱脂乳投入 （`accepted_skimmed_milk_input`）

该产品流投入仅记录 Accepted Skimmed milk for dairy manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Skimmed milk for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用从原料接收转入所表示制造批次的实测质量；配方未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-pef-2021-2279`

###### 验收合格稀奶油投入 （`accepted_cream_input`）

该产品流投入仅记录 Accepted Cream for dairy manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Cream for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用从原料接收转入所表示制造批次的实测质量；配方未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-pef-2021-2279`

###### 验收合格未发酵甜性酪乳投入 （`accepted_sweet_cream_buttermilk_input`）

该产品流投入仅记录 Accepted Sweet-cream buttermilk, non-fermented for dairy manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Sweet-cream buttermilk, non-fermented for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用从原料接收转入所表示制造批次的实测质量；配方未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-pef-2021-2279`

###### 验收合格液态甜乳清投入 （`accepted_liquid_sweet_whey_input`）

该产品流投入仅记录 Accepted Liquid sweet whey for dairy manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Liquid sweet whey for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用从原料接收转入所表示制造批次的实测质量；配方未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-pef-2021-2279`

###### 验收合格乳蛋白浓缩物投入 （`accepted_milk_protein_concentrate_input`）

该产品流投入仅记录 Accepted Milk protein concentrate for dairy manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Milk protein concentrate for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用从原料接收转入所表示制造批次的实测质量；配方未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-pef-2021-2279`

###### 验收合格乳清蛋白浓缩物投入 （`accepted_whey_protein_concentrate_input`）

该产品流投入仅记录 Accepted Whey protein concentrate for dairy manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Whey protein concentrate for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用从原料接收转入所表示制造批次的实测质量；配方未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-pef-2021-2279`

###### 验收合格乳渗透液投入 （`accepted_milk_permeate_input`）

该产品流投入仅记录 Accepted Milk permeate for dairy manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Milk permeate for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用从原料接收转入所表示制造批次的实测质量；配方未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-pef-2021-2279`

###### 验收合格乳清渗透液投入 （`accepted_whey_permeate_input`）

该产品流投入仅记录 Accepted Whey permeate for dairy manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Whey permeate for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用从原料接收转入所表示制造批次的实测质量；配方未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-pef-2021-2279`

###### 验收合格乳糖投入 （`accepted_lactose_input`）

该产品流投入仅记录 Accepted Lactose for dairy manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Lactose for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用从原料接收转入所表示制造批次的实测质量；配方未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-pef-2021-2279`

###### 验收合格乳矿物质浓缩物投入 （`accepted_milk_mineral_concentrate_input`）

该产品流投入仅记录 Accepted Milk mineral concentrate for dairy manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Milk mineral concentrate for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用从原料接收转入所表示制造批次的实测质量；配方未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-pef-2021-2279`

###### 验收合格蔗糖投入 （`accepted_sucrose_input`）

该产品流投入仅记录 Accepted Sucrose for dairy manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Accepted Sucrose for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用从原料接收转入所表示制造批次的实测质量；配方未使用时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-pef-2021-2279`

###### 制造工艺水 （`manufacturing_process_water_input`）

该产品流投入仅记录 Process water for liquid or paste dairy product manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Process water for liquid or paste dairy product manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用进入产品或直接用于制造操作的批次实测用水量，不含卫生清洁用水
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`codex-cxs-206-1999`；`eu-fdm-bat-2019-2031`

###### 制造电力 （`manufacturing_electricity_input`）

该产品流投入仅记录 Electricity supplied to liquid or paste dairy product manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Electricity supplied to liquid or paste dairy product manufacture
- 流属性/单位：Energy / kWh
- 数量规则：采用分表电量，或依据采集的设备功率、运行时间和有记录因果分配驱动因子计算
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：技术特定 （`technology_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_batch_utility_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 制造外购蒸汽 （`manufacturing_purchased_steam_input`）

该产品流投入仅记录 Purchased steam supplied to liquid or paste dairy product manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Purchased steam supplied to liquid or paste dairy product manufacture
- 流属性/单位：Energy / MJ
- 数量规则：采用同一批次或生产期的蒸汽计量能量，并记录压力、焓、凝结水回收和余热回收；未使用该载体时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：技术特定 （`technology_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_batch_utility_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 制造外购热水 （`manufacturing_purchased_hot_water_input`）

该产品流投入仅记录 Purchased hot water supplied to liquid or paste dairy product manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Purchased hot water supplied to liquid or paste dairy product manufacture
- 流属性/单位：Energy / MJ
- 数量规则：采用供应制造过程的热水计量能量，并记录进水与回水温度及内部余热回收；未使用该载体时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：技术特定 （`technology_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_batch_utility_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 制造天然气 （`manufacturing_natural_gas_input`）

该产品流投入仅记录 Natural gas combusted for liquid or paste dairy product manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Natural gas combusted for liquid or paste dairy product manufacture
- 流属性/单位：Energy / MJ
- 数量规则：采用天然气计量数量及有记录热值换算，并仅分配至所表示制造操作；未使用该载体时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：技术特定 （`technology_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_batch_utility_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 制造柴油 （`manufacturing_diesel_input`）

该产品流投入仅记录 Diesel combusted for liquid or paste dairy product manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Diesel combusted for liquid or paste dairy product manufacture
- 流属性/单位：Energy / MJ
- 数量规则：采用燃料领用或计量记录及有记录柴油热值换算，并仅分配至所表示制造操作；未使用该载体时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：技术特定 （`technology_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_batch_utility_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 制造液化石油气 （`manufacturing_lpg_input`）

该产品流投入仅记录 Liquefied petroleum gas combusted for liquid or paste dairy product manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Liquefied petroleum gas combusted for liquid or paste dairy product manufacture
- 流属性/单位：Energy / MJ
- 数量规则：采用燃料领用或计量记录及有记录液化石油气热值换算，并仅分配至所表示制造操作；未使用该载体时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：技术特定 （`technology_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_batch_utility_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 乳品过程冷却 R-717 氨制冷剂补充量 （`manufacturing_r717_makeup_input`）

该产品流投入仅记录 Ammonia (R-717) refrigerant make-up for dairy process cooling 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Ammonia (R-717) refrigerant make-up for dairy process cooling
- 流属性/单位：Mass / kg
- 数量规则：采用服务所表示生产设备的制冷剂维护记录中的实测补充质量；未使用该制冷剂时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：技术特定 （`technology_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_utility_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 乳品过程冷却 R-134a 制冷剂补充量 （`manufacturing_r134a_makeup_input`）

该产品流投入仅记录 1,1,1,2-Tetrafluoroethane (R-134a) refrigerant make-up for dairy process cooling 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：1,1,1,2-Tetrafluoroethane (R-134a) refrigerant make-up for dairy process cooling
- 流属性/单位：Mass / kg
- 数量规则：采用服务所表示生产设备的制冷剂维护记录中的实测补充质量；未使用该制冷剂时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：技术特定 （`technology_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_utility_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 散装合格乳制品 （`bulk_dairy_product_output`）

该产品流产出仅记录 Bulk liquid or paste dairy product n.e.c. before finishing 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Bulk liquid or paste dairy product n.e.c. before finishing
- 流属性/单位：Mass / kg
- 数量规则：采用转至后处理的合格散装产品实测质量，并将产品身份、组成和物理状态链接至批次
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`unsd-cpc-3-22290`；`codex-cxs-206-1999`

###### 乳品分离稀奶油共产品 （`manufacturing_cream_coproduct_output`）

该产品流产出仅记录 Cream co-product from dairy separation 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Cream co-product from dairy separation
- 流属性/单位：Mass / kg
- 数量规则：采用作为可销售或内部使用共产品转移的实测质量，并保留组成、状态和去向；不存在时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 乳品分离脱脂乳共产品 （`manufacturing_skimmed_milk_coproduct_output`）

该产品流产出仅记录 Skimmed milk co-product from dairy separation 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Skimmed milk co-product from dairy separation
- 流属性/单位：Mass / kg
- 数量规则：采用作为可销售或内部使用共产品转移的实测质量，并保留组成、状态和去向；不存在时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 膜分离乳渗透液共产品 （`manufacturing_milk_permeate_coproduct_output`）

该产品流产出仅记录 Milk permeate co-product from membrane separation 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Milk permeate co-product from membrane separation
- 流属性/单位：Mass / kg
- 数量规则：采用作为可销售或内部使用共产品转移的实测质量，并保留组成、状态和去向；不存在时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 膜分离乳清渗透液共产品 （`manufacturing_whey_permeate_coproduct_output`）

该产品流产出仅记录 Whey permeate co-product from membrane separation 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Whey permeate co-product from membrane separation
- 流属性/单位：Mass / kg
- 数量规则：采用作为可销售或内部使用共产品转移的实测质量，并保留组成、状态和去向；不存在时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 乳脂肪共产品 （`manufacturing_milk_fat_coproduct_output`）

该产品流产出仅记录 Milk fat co-product from dairy separation 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Milk fat co-product from dairy separation
- 流属性/单位：Mass / kg
- 数量规则：采用作为可销售或内部使用共产品转移的实测质量，并保留组成、状态和去向；不存在时记录不适用证据
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

##### 废物流

###### 不合格散装乳制品废物 （`manufacturing_off_spec_bulk_dairy_product_output`）

该废物流产出仅记录 Off-spec bulk dairy product sent to waste treatment 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Off-spec bulk dairy product sent to waste treatment
- 流属性/单位：Mass / kg
- 数量规则：采用按批次和有记录处理去向的实测或质量平衡计算数量；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 乳制品清扫排放废物 （`manufacturing_dairy_product_purge_output`）

该废物流产出仅记录 Dairy product purge sent to waste treatment 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Dairy product purge sent to waste treatment
- 流属性/单位：Mass / kg
- 数量规则：采用按批次和有记录处理去向的实测或质量平衡计算数量；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 乳品过滤残渣废物 （`manufacturing_dairy_filtration_residue_output`）

该废物流产出仅记录 Dairy filtration residue sent to waste treatment 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Dairy filtration residue sent to waste treatment
- 流属性/单位：Mass / kg
- 数量规则：采用按批次和有记录处理去向的实测或质量平衡计算数量；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 含乳制造过程废水 （`manufacturing_milk_containing_process_wastewater_output`）

该废物流产出仅记录 Milk-containing process wastewater from dairy manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Milk-containing process wastewater from dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用按批次和有记录处理去向的实测或质量平衡计算数量；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_batch_material_balance`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

##### 基本流

###### 天然气化石二氧化碳 （`manufacturing_natural_gas_fossil_co2_output`）

该基本流产出仅记录 Carbon dioxide, fossil, to air from natural gas combustion for dairy manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Carbon dioxide, fossil, to air from natural gas combustion for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：天然气能量记录乘以有记录的场址、供应商或法规化石碳因子
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_batch_utility_records`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 柴油化石二氧化碳 （`manufacturing_diesel_fossil_co2_output`）

该基本流产出仅记录 Carbon dioxide, fossil, to air from diesel combustion for dairy manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Carbon dioxide, fossil, to air from diesel combustion for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：柴油能量记录乘以有记录的场址、供应商或法规化石碳因子
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_batch_utility_records`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 液化石油气化石二氧化碳 （`manufacturing_lpg_fossil_co2_output`）

该基本流产出仅记录 Carbon dioxide, fossil, to air from liquefied petroleum gas combustion for dairy manufacture 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Carbon dioxide, fossil, to air from liquefied petroleum gas combustion for dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：液化石油气能量记录乘以有记录的场址、供应商或法规化石碳因子
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_batch_utility_records`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 排放至空气的R-717 氨 （`manufacturing_r717_to_air_output`）

该基本流产出仅记录 Ammonia (R-717), to air from dairy process cooling 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Ammonia (R-717), to air from dairy process cooling
- 流属性/单位：Mass / kg
- 数量规则：仅对该种制冷剂按期初充注量、补充量、回收量、期末充注量和有记录转移量进行充注平衡
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：技术特定 （`technology_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_batch_utility_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 排放至空气的R-134a  （`manufacturing_r134a_to_air_output`）

该基本流产出仅记录 1,1,1,2-Tetrafluoroethane (R-134a), to air from dairy process cooling 在液态或膏状产品制造边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：1,1,1,2-Tetrafluoroethane (R-134a), to air from dairy process cooling
- 流属性/单位：Mass / kg
- 数量规则：仅对该种制冷剂按期初充注量、补充量、回收量、期末充注量和有记录转移量进行充注平衡
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：技术特定 （`technology_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_batch_utility_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

### 过程：后处理和设施大门发运 （`finishing_and_dispatch`）

#### 输入

##### 产品流

###### 供应至后处理的散装产品 （`bulk_dairy_product_for_finishing_input`）

该产品流投入仅记录 Bulk liquid or paste dairy product n.e.c. before finishing 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Bulk liquid or paste dairy product n.e.c. before finishing
- 流属性/单位：Mass / kg
- 数量规则：采用从制造转入的实测质量，并与放行产品、产品废物、留存产品和生产线持有量核对
- 数值来源模式：前景记录 （`foreground_record`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：采集记录 （`collected_record`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 后处理电力 （`finishing_electricity_input`）

该产品流投入仅记录 Electricity supplied to dairy product finishing and dispatch 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Electricity supplied to dairy product finishing and dispatch
- 流属性/单位：Energy / kWh
- 数量规则：采用分表电量，或依据采集的灌装、包装、冷藏暂存和发运设备记录计算
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：技术特定 （`technology_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 乳制品包装高密度聚乙烯瓶 （`dispatch_hdpe_bottle_input`）

该产品流投入仅记录 High-density polyethylene bottle for dairy product packaging 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：High-density polyethylene bottle for dairy product packaging
- 流属性/单位：Mass / kg
- 数量规则：将该包装组件的包装 BOM 与领用、退回和未使用数量核对；未使用时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 乳制品包装聚对苯二甲酸乙二醇酯瓶 （`dispatch_pet_bottle_input`）

该产品流投入仅记录 Polyethylene terephthalate bottle for dairy product packaging 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Polyethylene terephthalate bottle for dairy product packaging
- 流属性/单位：Mass / kg
- 数量规则：将该包装组件的包装 BOM 与领用、退回和未使用数量核对；未使用时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 乳制品包装玻璃瓶 （`dispatch_glass_bottle_input`）

该产品流投入仅记录 Glass bottle for dairy product packaging 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Glass bottle for dairy product packaging
- 流属性/单位：Mass / kg
- 数量规则：将该包装组件的包装 BOM 与领用、退回和未使用数量核对；未使用时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 乳制品包装聚丙烯杯 （`dispatch_pp_cup_input`）

该产品流投入仅记录 Polypropylene cup for dairy product packaging 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Polypropylene cup for dairy product packaging
- 流属性/单位：Mass / kg
- 数量规则：将该包装组件的包装 BOM 与领用、退回和未使用数量核对；未使用时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 乳制品包装铝箔盖 （`dispatch_aluminium_foil_lid_input`）

该产品流投入仅记录 Aluminium foil lid for dairy product packaging 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Aluminium foil lid for dairy product packaging
- 流属性/单位：Mass / kg
- 数量规则：将该包装组件的包装 BOM 与领用、退回和未使用数量核对；未使用时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 乳制品包装高密度聚乙烯盖 （`dispatch_hdpe_closure_input`）

该产品流投入仅记录 High-density polyethylene closure for dairy product packaging 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：High-density polyethylene closure for dairy product packaging
- 流属性/单位：Mass / kg
- 数量规则：将该包装组件的包装 BOM 与领用、退回和未使用数量核对；未使用时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 乳制品包装聚乙烯涂布纸板盒 （`dispatch_pe_coated_paperboard_carton_input`）

该产品流投入仅记录 Polyethylene-coated paperboard carton for dairy product packaging 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Polyethylene-coated paperboard carton for dairy product packaging
- 流属性/单位：Mass / kg
- 数量规则：将该包装组件的包装 BOM 与领用、退回和未使用数量核对；未使用时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 乳制品包装无菌复合纸盒 （`dispatch_aseptic_multilayer_carton_input`）

该产品流投入仅记录 Aseptic multilayer carton for dairy product packaging 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Aseptic multilayer carton for dairy product packaging
- 流属性/单位：Mass / kg
- 数量规则：将该包装组件的包装 BOM 与领用、退回和未使用数量核对；未使用时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 乳制品包装低密度聚乙烯薄膜 （`dispatch_ldpe_film_input`）

该产品流投入仅记录 Low-density polyethylene film for dairy product packaging 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Low-density polyethylene film for dairy product packaging
- 流属性/单位：Mass / kg
- 数量规则：将该包装组件的包装 BOM 与领用、退回和未使用数量核对；未使用时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 乳制品包装纸标签 （`dispatch_paper_label_input`）

该产品流投入仅记录 Paper label for dairy product packaging 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Paper label for dairy product packaging
- 流属性/单位：Mass / kg
- 数量规则：将该包装组件的包装 BOM 与领用、退回和未使用数量核对；未使用时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 乳制品包装瓦楞纸板运输箱 （`dispatch_corrugated_case_input`）

该产品流投入仅记录 Corrugated paperboard transport case for dairy product packaging 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Corrugated paperboard transport case for dairy product packaging
- 流属性/单位：Mass / kg
- 数量规则：将该包装组件的包装 BOM 与领用、退回和未使用数量核对；未使用时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 乳制品运输木托盘 （`dispatch_wooden_pallet_input`）

该产品流投入仅记录 Wooden pallet for dairy product transport 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Wooden pallet for dairy product transport
- 流属性/单位：Mass / kg
- 数量规则：将该包装组件的包装 BOM 与领用、退回和未使用数量核对；未使用时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 设施大门处合格 CPC 22290 乳制品 （`reference_product_output`）

该产品流产出仅记录 Buttermilk 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Buttermilk `a0a5374c-955b-4db5-9520-001165f8ddc0`
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：1 kg 合格终产品净质量
- 数值来源模式：固定值 （`fixed_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：设施大门处 1 kg 参考产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：来源规则 （`source_rule`）
- 来源：`unsd-cpc-3-22290`；`codex-cxs-206-1999`；`eu-pef-2021-2279`

- 数量范围：精确参考流符合性区间
  - 范围角色：允许区间 （`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：精确 PCR 参考数量
  - 基准类型：参考流 （`reference_flow`）
  - 证据类型：外部来源 （`external_source`）
  - 来源：`eu-pef-2021-2279`

##### 废物流

###### 不合格包装乳制品废物 （`finishing_off_spec_packaged_dairy_product_output`）

该废物流产出仅记录 Off-spec packaged dairy product sent to waste treatment 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Off-spec packaged dairy product sent to waste treatment
- 流属性/单位：Mass / kg
- 数量规则：采用按批次和有记录处理去向的实测或生产线平衡计算质量；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 乳制品灌装机清扫排放废物 （`finishing_dairy_product_filler_purge_output`）

该废物流产出仅记录 Dairy product filler purge sent to waste treatment 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Dairy product filler purge sent to waste treatment
- 流属性/单位：Mass / kg
- 数量规则：采用按批次和有记录处理去向的实测或生产线平衡计算质量；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`；`eu-fdm-bat-2019-2031`

###### 废乳制品包装高密度聚乙烯瓶 （`waste_hdpe_bottle_output`）

该废物流产出仅记录 Waste high-density polyethylene bottle for dairy product packaging 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Waste high-density polyethylene bottle for dairy product packaging
- 流属性/单位：Mass / kg
- 数量规则：采用该包装组件的实测或包装平衡计算废弃质量及有记录处理去向；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 废乳制品包装聚对苯二甲酸乙二醇酯瓶 （`waste_pet_bottle_output`）

该废物流产出仅记录 Waste polyethylene terephthalate bottle for dairy product packaging 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Waste polyethylene terephthalate bottle for dairy product packaging
- 流属性/单位：Mass / kg
- 数量规则：采用该包装组件的实测或包装平衡计算废弃质量及有记录处理去向；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 废乳制品包装玻璃瓶 （`waste_glass_bottle_output`）

该废物流产出仅记录 Waste glass bottle for dairy product packaging 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Waste glass bottle for dairy product packaging
- 流属性/单位：Mass / kg
- 数量规则：采用该包装组件的实测或包装平衡计算废弃质量及有记录处理去向；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 废乳制品包装聚丙烯杯 （`waste_pp_cup_output`）

该废物流产出仅记录 Waste polypropylene cup for dairy product packaging 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Waste polypropylene cup for dairy product packaging
- 流属性/单位：Mass / kg
- 数量规则：采用该包装组件的实测或包装平衡计算废弃质量及有记录处理去向；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 废乳制品包装铝箔盖 （`waste_aluminium_foil_lid_output`）

该废物流产出仅记录 Waste aluminium foil lid for dairy product packaging 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Waste aluminium foil lid for dairy product packaging
- 流属性/单位：Mass / kg
- 数量规则：采用该包装组件的实测或包装平衡计算废弃质量及有记录处理去向；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 废乳制品包装高密度聚乙烯盖 （`waste_hdpe_closure_output`）

该废物流产出仅记录 Waste high-density polyethylene closure for dairy product packaging 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Waste high-density polyethylene closure for dairy product packaging
- 流属性/单位：Mass / kg
- 数量规则：采用该包装组件的实测或包装平衡计算废弃质量及有记录处理去向；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 废乳制品包装聚乙烯涂布纸板盒 （`waste_pe_coated_paperboard_carton_output`）

该废物流产出仅记录 Waste polyethylene-coated paperboard carton for dairy product packaging 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Waste polyethylene-coated paperboard carton for dairy product packaging
- 流属性/单位：Mass / kg
- 数量规则：采用该包装组件的实测或包装平衡计算废弃质量及有记录处理去向；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 废乳制品包装无菌复合纸盒 （`waste_aseptic_multilayer_carton_output`）

该废物流产出仅记录 Waste aseptic multilayer carton for dairy product packaging 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Waste aseptic multilayer carton for dairy product packaging
- 流属性/单位：Mass / kg
- 数量规则：采用该包装组件的实测或包装平衡计算废弃质量及有记录处理去向；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 废乳制品包装低密度聚乙烯薄膜 （`waste_ldpe_film_output`）

该废物流产出仅记录 Waste low-density polyethylene film for dairy product packaging 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Waste low-density polyethylene film for dairy product packaging
- 流属性/单位：Mass / kg
- 数量规则：采用该包装组件的实测或包装平衡计算废弃质量及有记录处理去向；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 废乳制品包装纸标签 （`waste_paper_label_output`）

该废物流产出仅记录 Waste paper label for dairy product packaging 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Waste paper label for dairy product packaging
- 流属性/单位：Mass / kg
- 数量规则：采用该包装组件的实测或包装平衡计算废弃质量及有记录处理去向；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 废乳制品包装瓦楞纸板运输箱 （`waste_corrugated_case_output`）

该废物流产出仅记录 Waste corrugated paperboard transport case for dairy product packaging 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Waste corrugated paperboard transport case for dairy product packaging
- 流属性/单位：Mass / kg
- 数量规则：采用该包装组件的实测或包装平衡计算废弃质量及有记录处理去向；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

###### 废乳制品运输木托盘 （`waste_wooden_pallet_output`）

该废物流产出仅记录 Waste wooden pallet for dairy product transport 在后处理和设施大门发运边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Waste wooden pallet for dairy product transport
- 流属性/单位：Mass / kg
- 数量规则：采用该包装组件的实测或包装平衡计算废弃质量及有记录处理去向；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：产品特定 （`product_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_finishing_and_dispatch`
- 来源：`eu-pef-2021-2279`

##### 基本流

### 过程：卫生清洁和废水去向 （`sanitation_and_wastewater_routing`）

#### 输入

##### 产品流

###### 卫生清洁工艺水 （`sanitation_process_water_input`）

该产品流投入仅记录 Process water supplied to dairy cleaning and sanitation 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Process water supplied to dairy cleaning and sanitation
- 流属性/单位：Mass / kg
- 数量规则：采用归属于所表示生产的计量用水，或经验证 CIP 循环体积与循环次数计算
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 卫生清洁电力 （`sanitation_electricity_input`）

该产品流投入仅记录 Electricity supplied to dairy cleaning and wastewater routing 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Electricity supplied to dairy cleaning and wastewater routing
- 流属性/单位：Energy / kWh
- 数量规则：采用分表电量，或依据采集的 CIP 泵、处理设备、运行时间和分配记录计算
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：技术特定 （`technology_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 卫生清洁外购蒸汽 （`sanitation_purchased_steam_input`）

该产品流投入仅记录 Purchased steam supplied to dairy cleaning and sanitation 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Purchased steam supplied to dairy cleaning and sanitation
- 流属性/单位：Energy / MJ
- 数量规则：采用分配至归属清洗消毒循环的蒸汽计量能量；未使用时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：技术特定 （`technology_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 卫生清洁外购热水 （`sanitation_purchased_hot_water_input`）

该产品流投入仅记录 Purchased hot water supplied to dairy cleaning and sanitation 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Purchased hot water supplied to dairy cleaning and sanitation
- 流属性/单位：Energy / MJ
- 数量规则：采用分配至归属清洗消毒循环的热水计量能量；未使用时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：技术特定 （`technology_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 乳品设备氢氧化钠清洗液 （`sanitation_sodium_hydroxide_input`）

该产品流投入仅记录 Sodium hydroxide cleaning solution for dairy equipment 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Sodium hydroxide cleaning solution for dairy equipment
- 流属性/单位：Mass / kg
- 数量规则：采用实测领用或投加溶液质量，并保留有效浓度和回用记录；未使用该化学品时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`

###### 乳品设备硝酸清洗液 （`sanitation_nitric_acid_input`）

该产品流投入仅记录 Nitric acid cleaning solution for dairy equipment 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Nitric acid cleaning solution for dairy equipment
- 流属性/单位：Mass / kg
- 数量规则：采用实测领用或投加溶液质量，并保留有效浓度和回用记录；未使用该化学品时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`

###### 乳品设备磷酸清洗液 （`sanitation_phosphoric_acid_input`）

该产品流投入仅记录 Phosphoric acid cleaning solution for dairy equipment 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Phosphoric acid cleaning solution for dairy equipment
- 流属性/单位：Mass / kg
- 数量规则：采用实测领用或投加溶液质量，并保留有效浓度和回用记录；未使用该化学品时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`

###### 乳品设备过氧乙酸消毒液 （`sanitation_peracetic_acid_input`）

该产品流投入仅记录 Peracetic acid disinfectant solution for dairy equipment 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Peracetic acid disinfectant solution for dairy equipment
- 流属性/单位：Mass / kg
- 数量规则：采用实测领用或投加溶液质量，并保留有效浓度和回用记录；未使用该化学品时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`

###### 乳品设备次氯酸钠消毒液 （`sanitation_sodium_hypochlorite_input`）

该产品流投入仅记录 Sodium hypochlorite disinfectant solution for dairy equipment 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Sodium hypochlorite disinfectant solution for dairy equipment
- 流属性/单位：Mass / kg
- 数量规则：采用实测领用或投加溶液质量，并保留有效浓度和回用记录；未使用该化学品时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

###### 含乳过程废水投入 （`milk_process_wastewater_input`）

该废物流投入仅记录 Milk-containing process wastewater from dairy manufacture 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Milk-containing process wastewater from dairy manufacture
- 流属性/单位：Mass / kg
- 数量规则：采用从制造过程进入卫生清洁和废水路线的实测转移量或经验证水量平衡数量
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 乳品设备碱性 CIP 废水 （`sanitation_alkaline_cip_wastewater_output`）

该废物流产出仅记录 Alkaline cleaning-in-place wastewater from dairy equipment 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Alkaline cleaning-in-place wastewater from dairy equipment
- 流属性/单位：Mass / kg
- 数量规则：采用该股废水的计量排放量或经验证循环水量平衡及有记录场内或场外处理去向；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 乳品设备酸性 CIP 废水 （`sanitation_acid_cip_wastewater_output`）

该废物流产出仅记录 Acid cleaning-in-place wastewater from dairy equipment 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Acid cleaning-in-place wastewater from dairy equipment
- 流属性/单位：Mass / kg
- 数量规则：采用该股废水的计量排放量或经验证循环水量平衡及有记录场内或场外处理去向；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 乳品设备过氧乙酸消毒废水 （`sanitation_peracetic_acid_rinse_wastewater_output`）

该废物流产出仅记录 Peracetic-acid sanitation wastewater from dairy equipment 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Peracetic-acid sanitation wastewater from dairy equipment
- 流属性/单位：Mass / kg
- 数量规则：采用该股废水的计量排放量或经验证循环水量平衡及有记录场内或场外处理去向；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 乳品设备次氯酸钠消毒废水 （`sanitation_sodium_hypochlorite_rinse_wastewater_output`）

该废物流产出仅记录 Sodium-hypochlorite sanitation wastewater from dairy equipment 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Sodium-hypochlorite sanitation wastewater from dairy equipment
- 流属性/单位：Mass / kg
- 数量规则：采用该股废水的计量排放量或经验证循环水量平衡及有记录场内或场外处理去向；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 乳品设备最终漂洗废水 （`sanitation_final_rinse_wastewater_output`）

该废物流产出仅记录 Final-rinse wastewater from dairy equipment 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Final-rinse wastewater from dairy equipment
- 流属性/单位：Mass / kg
- 数量规则：采用该股废水的计量排放量或经验证循环水量平衡及有记录场内或场外处理去向；不存在时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 乳品废水处理栅渣 （`sanitation_wastewater_screenings_output`）

该废物流产出仅记录 Screenings from dairy wastewater treatment 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Screenings from dairy wastewater treatment
- 流属性/单位：Mass / kg
- 数量规则：采用处理记录中的实测脱水质量及有记录去向；未设置该处理步骤时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：技术特定 （`technology_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`

###### 乳品废水处理溶气气浮污泥 （`sanitation_daf_sludge_output`）

该废物流产出仅记录 Dissolved-air-flotation sludge from dairy wastewater treatment 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Dissolved-air-flotation sludge from dairy wastewater treatment
- 流属性/单位：Mass / kg
- 数量规则：采用处理记录中的实测脱水质量及有记录去向；未设置该处理步骤时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：技术特定 （`technology_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`

###### 乳品废水处理生化污泥 （`sanitation_biological_sludge_output`）

该废物流产出仅记录 Biological sludge from dairy wastewater treatment 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Biological sludge from dairy wastewater treatment
- 流属性/单位：Mass / kg
- 数量规则：采用处理记录中的实测脱水质量及有记录去向；未设置该处理步骤时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：技术特定 （`technology_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`

##### 基本流

###### 处理后出水 （`treated_effluent_water_output`）

该基本流产出仅记录 Water, to surface water from dairy wastewater treatment 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Water, to surface water from dairy wastewater treatment
- 流属性/单位：Mass / kg
- 数量规则：采用处理后出水计量排放量及有记录密度换算为质量；场外处理或进入其他接收环境时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 排放至地表水的五日生化需氧量 （`treated_effluent_bod5_output`）

该基本流产出仅记录 Biochemical oxygen demand (BOD5), to surface water 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Biochemical oxygen demand (BOD5), to surface water
- 流属性/单位：Mass / kg
- 数量规则：将匹配的处理后出水体积乘以该污染物实验室浓度并明确换算为质量；未在场内排放时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 排放至地表水的化学需氧量 （`treated_effluent_cod_output`）

该基本流产出仅记录 Chemical oxygen demand (COD), to surface water 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Chemical oxygen demand (COD), to surface water
- 流属性/单位：Mass / kg
- 数量规则：将匹配的处理后出水体积乘以该污染物实验室浓度并明确换算为质量；未在场内排放时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 排放至地表水的总悬浮固体 （`treated_effluent_tss_output`）

该基本流产出仅记录 Total suspended solids, to surface water 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Total suspended solids, to surface water
- 流属性/单位：Mass / kg
- 数量规则：将匹配的处理后出水体积乘以该污染物实验室浓度并明确换算为质量；未在场内排放时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 排放至地表水的总氮 （`treated_effluent_total_nitrogen_output`）

该基本流产出仅记录 Nitrogen, total, to surface water 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Nitrogen, total, to surface water
- 流属性/单位：Mass / kg
- 数量规则：将匹配的处理后出水体积乘以该污染物实验室浓度并明确换算为质量；未在场内排放时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

###### 排放至地表水的总磷 （`treated_effluent_total_phosphorus_output`）

该基本流产出仅记录 Phosphorus, total, to surface water 在卫生清洁和废水去向边界上的单一交换。数量由所列前景规则取得；未使用或未产生该交换时须保留不适用证据。

- 选定流：Phosphorus, total, to surface water
- 流属性/单位：Mass / kg
- 数量规则：将匹配的处理后出水体积乘以该污染物实验室浓度并明确换算为质量；未在场内排放时记录不适用证据
- 数值来源模式：计算值 （`calculated_value`）
- 适用范围：场址特定 （`site_specific`）
- 归一化基准：每 1 kg 设施大门处合格终产品
- 基准类型：参考流 （`reference_flow`）
- 证据类型：由采集记录计算 （`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 可单独计量的单元操作和输出 | 记录支持细分时，通过细分过程并把直接计量的物料和公用工程记录分配至导致其发生的操作或产品来避免分配。 | `eu-pef-2021-2279` |
| `allocation_joint_process` | 无法避免的联合生产 | 如果无法细分，使用反映投入和输出如何随产品变化的有记录物理关系。若不存在可辩护物理关系，任何其他关系都须给出明确理由、敏感性分析并进入 `manual_review`；本 PCR 不提供固定分配因子。 | `eu-pef-2021-2279` |
| `allocation_recovered_streams` | 回收产品、乳清来源流、返回产品和废物 | 分配负担前记录质量、组成、去向和状态。不得把可销售或内部使用的输出改称废物以规避分配；处理负担和抵扣遵循声明的下游模型。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `allocation_shared_services` | 共享公用工程、冷藏、卫生清洁和废水处理 | 使用同时期计量或运行时间、吞吐量、CIP 循环次数、污染物负荷等有记录因果驱动因子分配共享服务。只有证明生产质量具有充分因果性时才可仅按生产质量分配。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_identity` | `feedstock_receipt_and_routing` | 产品分类和批次身份 | 产品规格和批次记录 | 确切产品名称；供应商；动物来源；物理状态；组成基准；CPC 理由；路线；批次编号；接收和发运时间戳 | 将批准规格、标签、证书和生产记录链接到每个被表示批次 | 描述记录 | 每批次和每次规格变化 | 与所表示生产相同的批次谱系和参考期间 | 每个生产设施和产品 | 不得跨 CPC 分类或生产路线不同的产品平均 | 批准规格、分类理由、批次谱系和评审签字 |
| `cp_feedstock_receipt` | `feedstock_receipt_and_routing` | 每种接收、验收和拒收乳品原料或配料 | 交付、储罐、容器、袋装、秤、取样、溢洒、退回和转移记录 | 原子物料身份；供应商；适用时动物来源；接收质量；验收质量；拒收质量；取样质量；溢洒；退回；转移；批次编号；去向 | 在同一接收边界分别计量或核对每种具名原料 | kg | 每次交付和接收批次 | 完整代表生产期间 | 服务该产品的每个接收点和储存容器 | 仅汇总同一物料身份和相容批次；保持每种原子物料分开并在核对后归一化 | 校准、交付票据、证书、接收检验、转移记录、拒收记录、去向和签署核对 |
| `cp_batch_material_balance` | `liquid_or_paste_product_manufacture` | 每种验收原料、工艺水、散装产品、具名共产品和具名废物 | 经校准仪表、秤、储罐、配方、转移、废物和持有量记录 | 期初库存；每种验收物料；加水；散装产品；稀奶油；脱脂乳；乳渗透液；乳清渗透液；乳脂肪；不合格产品；清扫排放；过滤残渣；过程废水；期末库存；校准编号 | 在共同批次或生产期边界采集每项具名交换，并在持有量校正后核对质量 | kg | 每批次或生产期 | 完整代表生产期间，包括正常开机和停机 | 每个生产设施和制造路线 | 仅跨相容批次汇总匹配的原子流身份；将核对总量归一化至设施大门合格产品质量 | 校准记录、签署批次表、转移记录、废物去向、核对结果和重要不平衡说明 |
| `cp_batch_utility_records` | `liquid_or_paste_product_manufacture` | 制造电力、外购蒸汽、外购热水、天然气、柴油、液化石油气和每种制冷剂 | 仪表、燃料、发票、制冷剂维护和设备运行记录 | 载体身份；仪表起止；数量；热值；压力；温度；焓；运行时间；余热回收；分配驱动因子；制冷剂身份；期初充注量；补充量；回收量；期末充注量；转移量；排放因子身份 | 优先采用分表；否则由采集活动记录按有记录换算和分配分别计算每种载体 | kWh；MJ；kg | 每批次或生产期，并按月核对 | 与代表生产相同期间 | 每个设施和相关公用工程或制冷系统 | 分别核对和分配每种载体与制冷剂；避免重复计算回收热；归一化至合格产品 | 仪表校准、发票、燃料和维护日志、设备记录、换算或因子来源和分配工作表 |
| `cp_finishing_and_dispatch` | `finishing_and_dispatch` | 散装投入、后处理电力、参考产品、每种包装组件、每种包装废物和产品废物 | 灌装、散装装载、包装 BOM、领用、退回、秤、仪表、废物和发运记录 | 散装投入；电力；净放行产品；每种包装组件身份；包装件数；组件质量；领用；退回；未使用；不合格产品；灌装清扫排放；每种包装废物；去向；批次编号 | 对同一批次核对生产线投入、电力、净产品、留存产品、每种包装件和每种废物 | kg；kWh；带批次换算的件数 | 每批次或生产期 | 完整代表生产期间 | 每个设施和包装或散装发运线 | 用实测组件质量换算件数，保持每种材料特定总量分开，并归一化至合格产品净质量 | 秤和仪表校准、批准包装 BOM、领用与退回记录、废物票据、发运记录和生产线核对 |
| `cp_sanitation_records` | `sanitation_and_wastewater_routing` | 工艺水、电力、蒸汽、热水、每种清洗化学品、每股废水、每种残余物和每项出水排放 | CIP 控制器、水和能源仪表、投加、实验室、排放、污泥和处理记录 | 循环编号；设备回路；用水；电力；蒸汽；热水；化学品身份；浓度；投加；回用；废水身份；排放；pH；温度；栅渣；气浮污泥；生化污泥；出水体积；BOD5；COD；TSS；总氮；总磷；去向 | 采集循环和处理批次记录，并将每项原子投入或输出匹配至所表示设备和期间 | kg；kWh；MJ；换算前保留的 m3；mg/L | 每次卫生循环、排放事件、采样事件或处理批次 | 与代表生产相同期间，包括换产和停机清洗 | 每个设施、CIP 回路、排放点和处理路线 | 保持每种化学品、废水、残余物和污染物分开；明确换算单位；汇总归属循环并归一化至合格产品 | 仪表和传感器校准、控制器导出、投加记录、实验室结果、排放日志、处理票据和分配工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景清单行 | 归一化数量 = 核对后的批次或生产期数量 / 设施大门处放行合格终产品净 kg 数 | 核对后的原子流数量；合格产品净质量 | 每 1 kg 参考产品的数量 | `eu-pef-2021-2279` |
| `calc_volume_to_mass` | 体积基准液体记录 | 质量 = 同一物料、温度和批次的实测体积 × 密度；保留未舍入输入和换算元数据 | 实测体积；密度；温度；批次编号 | 一种已识别物料的 kg 数 | `eu-pef-2021-2279` |
| `calc_batch_mass_balance` | 接收、制造和后处理 | 不平衡量 = 期初库存 + 各原子接收投入 - 期末库存 - 合格产品 - 各具名共产品 - 各具名废物；调查差异而非将残差归入虚构交换 | 库存；各投入；产品；各共产品；各废物 | 核对后的物料平衡和披露的残差 | `eu-pef-2021-2279`；`eu-fdm-bat-2019-2031` |
| `calc_utility_allocation` | 共享电力、蒸汽、热水、天然气、柴油和液化石油气 | 分配载体量 = 该载体实测总量 × 有记录因果驱动因子份额；分配前不得合并载体数量 | 一种载体的仪表或领用总量；运行时间；吞吐量；设备功率；因果驱动因子 | 一种载体的分配 kWh 或 MJ | `eu-pef-2021-2279`；`eu-fdm-bat-2019-2031` |
| `calc_fuel_co2` | 直接燃料燃烧 | 化石 CO2 = 一种燃料记录能量 × 同一燃料和期间的有记录场址、供应商或法规化石碳因子 | 燃料身份；能量；因子；因子来源；有效期 | 一种燃料的化石 CO2 kg 数 | `eu-pef-2021-2279`；`eu-fdm-bat-2019-2031` |
| `calc_refrigerant_balance` | 每个制冷回路 | 排放至空气损失量 = 期初充注量 + 补充量 - 回收量 - 期末充注量 - 有记录转移量；按每种制冷剂身份分别计算 | 制冷剂身份；期初充注量；补充量；回收量；期末充注量；转移量 | 一种制冷剂排放至空气的 kg 数 | `eu-pef-2021-2279`；`eu-fdm-bat-2019-2031` |
| `calc_sanitation_allocation` | 共享 CIP 和卫生循环 | 依据回路、循环次数、运行时间或实测负荷，仅分配归属用水、电力、蒸汽、热水、每种化学品和每股废水 | 循环记录；回路映射；每项原子投入和输出；生产计划 | 分配的卫生清洁交换数量 | `eu-fdm-bat-2019-2031`；`eu-pef-2021-2279` |
| `calc_effluent_load` | 每项场内出水污染物 | 污染物质量 = 匹配的处理后出水体积 × 同一采样期间实验室浓度，并明确单位换算 | 出水体积；一种污染物浓度；采样期间；换算因子 | 进入接收环境的一种污染物 kg 数 | `eu-fdm-bat-2019-2031`；`eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和原料 | 证明确切产品纳入 CPC 22290 且排除 CPC 2221-2227 具名类别；仅有通用 n.e.c. 标签或 `Buttermilk` 流名称不足以证明。 | 产品规格、标签、组成、路线说明、官方 CPC 注释和分类评审 |
| `dq_temporal_alignment` | 前景记录 | 使用一个有代表性且披露的生产期间；对齐物料、公用工程、后处理、卫生清洁和出水记录，并说明异常或排除期间。 | 批次谱系、生产日历、仪表和实验室期间及排除日志 |
| `dq_measurement` | 实测和计算数量 | 识别仪器、校准状态、单位、换算、因子和计算谱系；保留原始值并避免过早舍入。 | 校准证书、控制器或仪表导出、批次表、因子引用、实验室报告和计算工作簿 |
| `dq_atomic_flow_identity` | 每张清单卡 | 每张卡仅识别一种物料、能源载体、燃料、制冷剂、化学品、包装组件、产品、共产品、废物、废水、残余物或基本流排放；适用性写入数量规则，绝不写成集合标签 Selected flow。 | 原子清单审查、批准 BOM 或配方、公用工程图、化学品登记、废物登记和排放登记 |
| `dq_completeness` | 前景边界 | 覆盖每项已知原子投入和输出或保留卡片不适用证据；实际交换未被表示时新增具体原子卡，不得使用聚合或选择器。 | 过程流程图、BOM、配方、公用工程和制冷剂登记、物料与水量平衡、废物票据、排放监测和完整性评审 |
| `dq_representativeness` | 链接的上游和处理数据集 | 在可行时匹配地理、技术、时间期间、物料身份和产品状态；识别替代数据及其预期影响。 | 数据集元数据、选择理由、数据质量评估和敏感性结果 |
| `dq_uuid_resolution` | 天工身份引用 | 仅存储经双重核验的精确公开 state100 UUID；否则 UUID 留空，并在 manifest 审查元数据保留逐行候选和拒绝原因。 | hybrid-search 结果、state100 直读和 manifest 未解析流审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_scope_identity` | 产品分类 | 当无法证明确切产品属于 CPC 22290、产品在 CPC 2221-2227 或其他类别得到更具体覆盖、或不同产品使用 `Buttermilk` UUID 时，判定不符合。存在不确定性时返回 `manual_review`。 | `unsd-cpc-3-22290`；`codex-cxs-206-1999`；`codex-cxs-243-2003` |
| `validate_reference_uuid` | 合格酪乳参考流 | 仅在声明产品为合格酪乳时要求产品流 `a0a5374c-955b-4db5-9520-001165f8ddc0`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg；其他产品要求产品特定流或 `manual_review`。 | `unsd-cpc-3-22290` |
| `validate_required_qualifiers` | 参考流元数据 | 缺少任何必需限定信息、生产路线或市场状态时判定完整性失败。 | `codex-cxs-206-1999`；`eu-pef-2021-2279` |
| `validate_process_boundary` | 前景过程图 | 要求全部实际使用操作、卫生清洁和已知输出；说明每个标为不适用的操作和原子卡。 | `eu-pef-2021-2279`；`eu-fdm-bat-2019-2031` |
| `validate_atomic_inventory` | 每张清单卡 | 拒绝集合、选择器、备选项或占位式 Selected flow。电力、蒸汽、热水、每种燃料、每种制冷剂、每种物料和配料、每种化学品、每个包装组件、每个产品和共产品、每项废物和废水及每项基本流排放必须分别成卡。 | `eu-pef-2021-2279`；`eu-fdm-bat-2019-2031` |
| `validate_uuid_review_closure` | 非参考清单行 | 每个空清单 UUID 必须在 manifest 中恰有一条未解析流审查，已核验参考行不得有未解析审查。拒绝没有精确 hybrid search 和公开 state100 直读支持的 UUID。 | `eu-pef-2021-2279` |
| `validate_mass_balance` | 批次或生产期清单 | 要求共同期间的核对物料平衡并调查物料残差；不得把残差强制归入未经核验的废物或产品流。 | `eu-pef-2021-2279`；`eu-fdm-bat-2019-2031` |
| `validate_site_records` | 物料、能源、水、包装、化学品、废物和排放数量 | 实际 LCI 数值要求场址和批次或生产期前景记录。Codex 限值、质量准则和 BAT 性能水平不能替代。 | `codex-cxs-206-1999`；`codex-cxs-243-2003`；`eu-fdm-bat-2019-2031` |
| `validate_allocation` | 多输出和共享过程 | 可行时要求直接归属或有记录细分；否则要求可辩护的因果分配方法、投入、输出和敏感性记录。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个声明 CPC 22290 液态或膏状乳制品及路线的门到门前景生产数据集 |
| downstream_use | 当范围、地理、技术、时间期间和产品身份相容时，作为过程或 lifecyclemodel 中的 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 使用声明设施大门边界的产品特定建模；仅跨相容产品和路线聚合；已核验 Buttermilk UUID 仅用于合格 CPC 22290 酪乳 |
| excluded_use | 用 Buttermilk 流代表全部其他未另分类乳制品；用于 CPC 2221-2227 具名产品；以 Codex 组成准则或 BAT 性能水平替代前景 LCI；将集合或选择器作为一个清单交换；无支持的比较声明 |
| required_metadata | canonical PCR id；CPC 坐标和纳入理由；产品特定流 UUID；全部必需限定信息；设施地理范围；路线和过程图；批次或生产期；产品净质量；原子 BOM、公用工程、制冷剂、化学品、包装、废物和排放记录；分配方法；上游数据集引用；处理去向；数据质量评估 |
| required_quality_disclosure | 数据覆盖和缺口；仪表和校准证据；物料、能源、制冷剂和水量平衡结果；代表性；替代数据；分配敏感性；排除操作；不适用证据；未解析 UUID 审查；处于 `manual_review` 的分类或流决定 |
| update_trigger | 产品配方、状态、分类、路线、设备、能源系统、制冷剂、供应商组合、包装、卫生化学品、处理路线或分配发生重要变化；数据年龄超过研究要求；未解析流获得精确公开 state100 身份；官方 CPC、Codex、PEF 或适用 BAT 来源变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-22290` | 官方指南（`official_guidance`） | 联合国统计司，Central Product Classification Version 3.0，Explanatory Notes，子类 22290，2025-06-30 更新，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf，检索于 2026-08-12 | 产品身份、纳入的液态或膏状乳成分产品、排除项和 `manual_review` 触发器 |
| `codex-cxs-206-1999` | 标准（`standard`） | Codex Alimentarius，CXS 206-1999，General Standard for the Use of Dairy Terms，2022 年修订，https://workspace.fao.org/sites/codex/Standards/CXS%20206-1999/CXS_206e.pdf，检索于 2026-08-12 | 乳制品身份、组成调整和复原披露，以及防止误导性产品命名 |
| `codex-cxs-243-2003` | 标准（`standard`） | Codex Alimentarius，CXS 243-2003，Standard for Fermented Milks，2024 年修订，https://workspace.fao.org/sites/codex/Standards/CXS%20243-2003/CXS_243e.pdf，检索于 2026-08-12 | 条件适用的发酵产品身份和路线排除；不把组成或质量数值用作通用 LCI 数量 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods，Annex I，ELI http://data.europa.eu/eli/reco/2021/2279/oj，检索于 2026-08-12 | 功能单位和参考流、系统边界透明度、公司特定数据、完整性、数据质量、多输出处理和报告 |
| `eu-fdm-bat-2019-2031` | 官方指南（`official_guidance`） | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries，ELI http://data.europa.eu/eli/dec_impl/2019/2031/oj，检索于 2026-08-12 | 过程和监测分解、物料-能源-水-废物清单、CIP 记录、热回收和回收流处理；BAT 性能值不作为通用 LCI |
