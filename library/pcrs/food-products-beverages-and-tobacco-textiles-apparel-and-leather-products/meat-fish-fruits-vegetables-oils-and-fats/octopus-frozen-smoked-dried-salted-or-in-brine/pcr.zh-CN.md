---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.octopus-frozen-smoked-dried-salted-or-in-brine
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冷冻、熏制、干制、盐渍或盐水浸制章鱼

## 1. 范围与适用性

本 PCR 覆盖采用一种已声明主要路线保藏并可销售的章鱼：冷冻、熏制、干制、盐渍或盐水浸制。熏制前盐处理等路线内在子步骤不使其他主要路线同时适用。前景数据包应识别物种或商品名称、来料状态、产品形态、路线、配方、包装、储存条件和所代表保质期。

前景边界不包括活、鲜或仅冷藏章鱼，罐藏或灭菌产品，预制餐食，混合海产品，捕捞或养殖，配送、零售、使用和生命末期。每项外购章鱼、材料、能源载体、水、化学品、制冷剂、烟材和包装组件仍须链接上游数据集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.octopus-frozen-smoked-dried-salted-or-in-brine |
| classification_refs | CPC 3.0: 21267 |
| covered_products | 以整只、清理、切分、熟制或生制可销售形态出售的冷冻、熏制、干制、盐渍或盐水浸制章鱼。 |
| excluded_products | 活、鲜或冷藏章鱼；罐藏或灭菌章鱼；预制餐食；混合海产品；非章鱼头足类。 |
| representative_product | 加工设施门口的已包装合格可销售章鱼。 |
| production_route | 恰好一种：`frozen`、`smoked`、`dried`、`salted` 或 `in_brine`；声明所有内在子步骤。 |
| market_state | 设施门口路线特定的可销售状态，并声明储存条件和保质期。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应已声明产品形态和保藏路线的合格可销售章鱼。 |
| How much | 1 kg 章鱼产品净重，不含包装；适用时也不含保护性冰衣或游离包装盐水。 |
| How well | 符合已声明商业和食品安全规范，并披露产品形态、生熟状态、含水或含盐状态及储存条件。 |
| How long or cycle | 在加工设施门口供应一次；声明所代表储存时长、温度和标签保质期。 |
| reference_flow_link | 按适用路线特定计量规则，由恰好 1 kg 参考产品流实现。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 章鱼，冷冻、烟熏、干制、盐腌或盐水浸泡 `5c8cdbc1-2f53-47ac-aa4a-e44125c18761` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 保藏路线；物种或商品名称；产品形态和可销售部分；生熟状态；干制或烟熏干制产品含水率；依赖盐路线的含盐量或盐水浓度；冰衣冷冻产品冰衣比例；盐水产品沥干程序；包装形式；储存温度和时长；保质期 |

每项必需限定信息都应在数据集元数据或等效前景数据包字段中声明。Tiangong 参考产品流已按 `state_code=100` 直读核实；路线差异作为限定信息，不使用近似替代流。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 归一化为 1 kg 合格可销售章鱼净重并排除全部包装。 |
| `frozen_deglazed_mass` | 带冰衣冷冻产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用去冰衣产品质量；分别记录冰衣用水和实测冰衣损失。 |
| `brined_drained_mass` | 盐水中销售的产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用沥干章鱼质量；分别记录包装盐水和沥干程序。 |
| `preservation_condition` | 熏制、干制、盐渍和盐水浸制产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按销售状态计量，并按适用性披露水分及盐或盐水条件。 |
| `saleable_portion` | 所有路线 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 声明纳入的可食/可销售部分，仅归一化合格可销售部分。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工设施接收的章鱼，并记录供应商、产地、物种或商品名称、鲜/冷藏/冷冻状态、温度、形态和接收质量。 |
| starting_condition_role | 门到门制备、保藏、包装、储存、卫生和现场废水处理的外购章鱼投入。 |
| product_classification_scope | 成品参考产品为 CPC 3.0 21267；来料鲜/冷藏章鱼是上游投入。 |
| recursive_input_rule | 外购 CPC 21267 中间品应附自有上游数据集，不在本前景数据包内递归重建其先前保藏负荷。 |
| upstream_dataset_requirement | 每项外购产品投入、公用工程、燃料、化学品、制冷剂、烟材和包装组件均须上游数据集。 |
| disclosure | 披露设施、期间、路线、物种、来料状态、产品形态、产率、路线设备、实际燃料和制冷剂、包装、储存、废水去向及排除项。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | 前景生产 | 纳入共通制备、恰好一条主要保藏路线、包装、门口储存、卫生以及实际执行的现场废水处理。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `sb_route_exclusivity` | 保藏 | 只纳入已声明路线及实际内在子步骤、燃料、制冷剂、材料、废物和直接排放。 | `codex-cxc-52-2003`; `codex-cxc-68-2009` |
| `sb_complete_inventory` | 所有纳入过程 | 将每种材料、能源载体、包装组件、废物、废水流和基本排放保留为独立交换。 | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `sb_upstream_inputs` | 外购投入 | 捕捞/养殖置于前景边界外，但每项外购投入须链接上游数据集。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `common_preparation` | 接收、解冻、清洗、清理与分级 | `required` | 始终纳入；只记录实际执行的操作。 | 生产制备章鱼并确定接收质量。 | kg 制备章鱼 |
| `frozen_route` | 冷冻与冻藏 | `conditional` | 仅主要路线 `frozen`。 | 生产冷冻章鱼。 | kg 冷冻章鱼 |
| `smoked_route` | 盐处理、熏制与路线冷却 | `conditional` | 仅主要路线 `smoked`。 | 生产熏制章鱼。 | kg 熏制章鱼 |
| `dried_route` | 干制 | `conditional` | 仅主要路线 `dried`。 | 生产干制章鱼。 | kg 干制章鱼 |
| `salted_brined_route` | 盐渍或盐水浸制 | `conditional` | 仅主要路线 `salted` 或 `in_brine`；区分两种产出。 | 生产盐渍或盐水浸制章鱼。 | kg 路线产出 |
| `packaging_storage` | 包装与路线所需储存 | `required` | 始终纳入；只记录实际组件和储存设备。 | 在设施门口生产可销售产品。 | 1 kg 参考产品 |
| `sanitation_wastewater` | 卫生清洁与现场废水处理 | `required` | 卫生始终纳入；处理行仅在现场处理时适用。 | 记录卫生投入和废水去向。 | 1 kg 参考产品 |

### 过程：接收、解冻、清洗、清理与分级（`common_preparation`）

#### 输入

##### 产品流

###### 接收章鱼（`received_octopus`）

接收章鱼作为一项单独记录的产品流进入接收、解冻、清洗、清理与分级过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：接收章鱼
- 流属性/单位：质量 / kg
- 数量规则：按批次或期间计量接收章鱼的实际数量，并保留该原子流的适用条件和追溯记录
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 制备章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_balance`
- 来源：`codex-cxc-52-2003`

###### 食品级水冰（`receiving_ice`）

食品级水冰作为一项单独记录的产品流进入接收、解冻、清洗、清理与分级过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：食品级水冰
- 流属性/单位：质量 / kg
- 数量规则：计量进入本过程的食品级水冰实际数量；不得与其他水态或回用量合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 制备章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_common_inputs`
- 来源：`codex-cxc-52-2003`

###### 工艺用水（`preparation_water`）

工艺用水作为一项单独记录的产品流进入接收、解冻、清洗、清理与分级过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量进入本过程的工艺用水实际数量；不得与其他水态或回用量合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 制备章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_common_inputs`
- 来源：`codex-cxc-52-2003`

###### 交流电（`preparation_electricity`）

交流电作为一项单独记录的产品流进入接收、解冻、清洗、清理与分级过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：单独计量交流电，不得与蒸汽、燃料或其他过程用电合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 制备章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_common_inputs`

###### 共通制备清洁用氢氧化钠（`preparation_sodium_hydroxide`）

氢氧化钠作为一项单独记录的产品流进入接收、解冻、清洗、清理与分级过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：氢氧化钠
- 流属性/单位：质量 / kg
- 数量规则：记录实际分配给制备线清洁的氢氧化钠有效成分质量；仅在实际使用时适用，且不得与全厂卫生清洁行重复计算
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 制备章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_common_inputs`
- 来源：`codex-cxc-52-2003`

###### 共通制备消毒用次氯酸钠（`preparation_sodium_hypochlorite`）

次氯酸钠作为一项单独记录的产品流进入接收、解冻、清洗、清理与分级过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：次氯酸钠
- 流属性/单位：质量 / kg
- 数量规则：记录实际分配给制备线消毒的次氯酸钠有效成分质量；仅在实际使用时适用，且不得与全厂卫生清洁行重复计算
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 制备章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_common_inputs`
- 来源：`codex-cxc-52-2003`

#### 输出

##### 产品流

###### 制备章鱼中间品（`prepared_octopus`）

制备章鱼中间品作为一项单独记录的产品流离开接收、解冻、清洗、清理与分级过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：制备章鱼中间品
- 流属性/单位：质量 / kg
- 数量规则：按批次或期间计量制备章鱼中间品的实际数量，并保留该原子流的适用条件和追溯记录
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每生产批次
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_balance`

##### 废物流

###### 章鱼制备残余物（`preparation_rejects`）

章鱼制备残余物作为一项单独记录的废物流离开接收、解冻、清洗、清理与分级过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：章鱼制备残余物
- 流属性/单位：质量 / kg
- 数量规则：计量离开本过程的章鱼制备残余物实际数量，并记录含水基准和去向（如适用）
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 接收章鱼
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_balance`

###### 未处理海产品加工废水（`preparation_wastewater`）

未处理海产品加工废水作为一项单独记录的废物流离开接收、解冻、清洗、清理与分级过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：未处理海产品加工废水
- 流属性/单位：体积 / m3
- 数量规则：计量未处理海产品加工废水的实际质量或体积、盐度及去向；不得与其他废水流合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 制备章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_wastewater`

##### 基本流

### 过程：冷冻与冻藏（`frozen_route`）

#### 输入

##### 产品流

###### 制备章鱼中间品（`frozen_prepared_input`）

制备章鱼中间品作为一项单独记录的产品流进入冷冻与冻藏过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：制备章鱼中间品
- 流属性/单位：质量 / kg
- 数量规则：按批次或期间计量制备章鱼中间品的实际数量，并保留该原子流的适用条件和追溯记录
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：路线特定 (`route_specific`)
- 归一化基准：每 kg 冷冻章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_balance`

###### 工艺用水（`freezing_glaze_water`）

工艺用水作为一项单独记录的产品流进入冷冻与冻藏过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量进入本过程的工艺用水实际数量；不得与其他水态或回用量合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 冷冻章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_frozen_route`
- 来源：`codex-cxc-52-2003`

###### 交流电（`freezing_electricity`）

交流电作为一项单独记录的产品流进入冷冻与冻藏过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：单独计量交流电，不得与蒸汽、燃料或其他过程用电合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 冷冻章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_frozen_route`

###### 交流电（`frozen_holding_electricity`）

交流电作为一项单独记录的产品流进入冷冻与冻藏过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：计量用电，并按相容温区的占用质量-时间分配交流电
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：情景特定 (`scenario_specific`)
- 归一化基准：每 kg 冷冻章鱼（对应所代表暂存时长）
- 基准类型：储存时长 (`storage_duration`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_frozen_route`

###### 氨，无水，液体（`freezing_r717_makeup`）

氨，无水，液体作为一项单独记录的产品流进入冷冻与冻藏过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：氨，无水，液体 `6928be4f-282b-4448-8f2a-f8c746621303`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据设备制冷剂台账记录氨，无水，液体补充量；仅在该制冷剂经核实时适用
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 冷冻章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_refrigerant_balance`

###### 制冷剂R404A（`freezing_r404a_makeup`）

制冷剂R404A作为一项单独记录的产品流进入冷冻与冻藏过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：制冷剂R404A `76513c71-a148-484e-865f-2ab54afb4331`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据设备制冷剂台账记录制冷剂R404A补充量；仅在该制冷剂经核实时适用
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 冷冻章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_refrigerant_balance`

#### 输出

##### 产品流

###### 冷冻章鱼中间品（`frozen_octopus`）

冷冻章鱼中间品作为一项单独记录的产品流离开冷冻与冻藏过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：冷冻章鱼中间品
- 流属性/单位：质量 / kg
- 数量规则：按批次或期间计量冷冻章鱼中间品的实际数量，并保留该原子流的适用条件和追溯记录
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：路线特定 (`route_specific`)
- 归一化基准：每生产批次
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_balance`

##### 废物流

###### 章鱼冷冻损失（`freezing_loss`）

章鱼冷冻损失作为一项单独记录的废物流离开冷冻与冻藏过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：章鱼冷冻损失
- 流属性/单位：质量 / kg
- 数量规则：计量离开本过程的章鱼冷冻损失实际数量，并记录含水基准和去向（如适用）
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 进入冷冻的制备章鱼
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_balance`

##### 基本流

###### 氨（R717），排放至已声明空气舱室（`freezing_r717_emission`）

氨（R717），排放至已声明空气舱室作为一项单独记录的基本流离开冷冻与冻藏过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：氨（R717），排放至已声明空气舱室
- 流属性/单位：质量 / kg
- 数量规则：采用制冷剂质量衡算或实测泄漏量计算氨（R717），排放至已声明空气舱室；仅在对应制冷剂系统适用时记录
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 冷冻章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_refrigerant_balance`

###### 制冷剂R404A，排放至已声明空气舱室（`freezing_r404a_emission`）

制冷剂R404A，排放至已声明空气舱室作为一项单独记录的基本流离开冷冻与冻藏过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：制冷剂R404A，排放至已声明空气舱室
- 流属性/单位：质量 / kg
- 数量规则：采用制冷剂质量衡算或实测泄漏量计算制冷剂R404A，排放至已声明空气舱室；仅在对应制冷剂系统适用时记录
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 冷冻章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_refrigerant_balance`

### 过程：盐处理、熏制与路线冷却（`smoked_route`）

#### 输入

##### 产品流

###### 制备章鱼中间品（`smoked_prepared_input`）

制备章鱼中间品作为一项单独记录的产品流进入盐处理、熏制与路线冷却过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：制备章鱼中间品
- 流属性/单位：质量 / kg
- 数量规则：按批次或期间计量制备章鱼中间品的实际数量，并保留该原子流的适用条件和追溯记录
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：路线特定 (`route_specific`)
- 归一化基准：每 kg 熏制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_balance`

###### 食盐（`smoking_salt`）

食盐作为一项单独记录的产品流进入盐处理、熏制与路线冷却过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：食盐 `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批准配方或化学品领用记录计量食盐；仅在实际使用时适用
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 熏制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_smoked_route`
- 来源：`codex-cxc-52-2003`

###### 食品级氯化钠盐水（`smoking_brine`）

食品级氯化钠盐水作为一项单独记录的产品流进入盐处理、熏制与路线冷却过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：食品级氯化钠盐水
- 流属性/单位：质量 / kg
- 数量规则：计量食品级氯化钠盐水的实际质量或体积、盐度及去向；不得与其他废水流合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 熏制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_smoked_route`
- 来源：`codex-cxc-52-2003`

###### 工艺用水（`smoking_water`）

工艺用水作为一项单独记录的产品流进入盐处理、熏制与路线冷却过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量进入本过程的工艺用水实际数量；不得与其他水态或回用量合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 熏制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_smoked_route`
- 来源：`codex-cxc-52-2003`

###### 未经处理的食品熏制木片（`smoking_wood_chips`）

未经处理的食品熏制木片作为一项单独记录的产品流进入盐处理、熏制与路线冷却过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：未经处理的食品熏制木片
- 流属性/单位：质量 / kg
- 数量规则：计量未经处理的食品熏制木片，并声明木种和含水基准；仅在木片发烟时适用
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 熏制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_smoked_route`
- 来源：`codex-cxc-52-2003`; `codex-cxc-68-2009`

###### 交流电（`smoking_electricity`）

交流电作为一项单独记录的产品流进入盐处理、熏制与路线冷却过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：单独计量交流电，不得与蒸汽、燃料或其他过程用电合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 熏制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_smoked_route`

###### 蒸汽（`smoking_steam`）

蒸汽作为一项单独记录的产品流进入盐处理、熏制与路线冷却过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：蒸汽 `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量跨越过程边界的 11.0 MPaG 蒸汽；仅在实际供应该已核实等级时适用
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 熏制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_smoked_route`

###### 气态天然气（`smoking_natural_gas`）

气态天然气作为一项单独记录的产品流进入盐处理、熏制与路线冷却过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量该路线实际燃烧的气态天然气；未使用时不适用，且不得与其他燃料合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 熏制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_combustion_fuels`

###### 柴油（`smoking_diesel`）

柴油作为一项单独记录的产品流进入盐处理、熏制与路线冷却过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量该路线实际燃烧的柴油；未使用时不适用，且不得与其他燃料合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 熏制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_combustion_fuels`

###### 液化石油气（`smoking_lpg`）

液化石油气作为一项单独记录的产品流进入盐处理、熏制与路线冷却过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：液化石油气 `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量该路线实际燃烧的液化石油气；未使用时不适用，且不得与其他燃料合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 熏制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_combustion_fuels`

#### 输出

##### 产品流

###### 熏制章鱼中间品（`smoked_octopus`）

熏制章鱼中间品作为一项单独记录的产品流离开盐处理、熏制与路线冷却过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：熏制章鱼中间品
- 流属性/单位：质量 / kg
- 数量规则：按批次或期间计量熏制章鱼中间品的实际数量，并保留该原子流的适用条件和追溯记录
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：路线特定 (`route_specific`)
- 归一化基准：每生产批次
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_balance`

##### 废物流

###### 浓水（`smoking_spent_brine`）

浓水作为一项单独记录的废物流离开盐处理、熏制与路线冷却过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：浓水 `76ab69b6-6fa7-461c-be07-bc54e581a699`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量浓水的实际质量或体积、盐度及去向；不得与其他废水流合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：路线特定 (`route_specific`)
- 归一化基准：每 kg 熏制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_wastewater`

###### 不合格熏制章鱼（`smoking_rejects`）

不合格熏制章鱼作为一项单独记录的废物流离开盐处理、熏制与路线冷却过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：不合格熏制章鱼
- 流属性/单位：质量 / kg
- 数量规则：计量离开本过程的不合格熏制章鱼实际数量，并记录含水基准和去向（如适用）
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 进入熏制的制备章鱼
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_balance`

###### 食品熏制发烟木灰（`smoking_wood_ash`）

食品熏制发烟木灰作为一项单独记录的废物流离开盐处理、熏制与路线冷却过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：食品熏制发烟木灰
- 流属性/单位：质量 / kg
- 数量规则：计量离开本过程的食品熏制发烟木灰实际数量，并记录含水基准和去向（如适用）
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 熏制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_smoked_route`

##### 基本流

###### 二氧化碳（化石源），排放至已声明空气舱室（`smoking_co2`）

二氧化碳（化石源），排放至已声明空气舱室作为一项单独记录的基本流离开盐处理、熏制与路线冷却过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：二氧化碳（化石源），排放至已声明空气舱室
- 流属性/单位：质量 / kg
- 数量规则：按每种实际消耗的化石燃料分别计算；不计入生物源碳
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 熏制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_combustion_emissions`
- 来源：`ipcc-2006-stationary-combustion`

###### 甲烷，排放至已声明空气舱室（`smoking_ch4`）

甲烷，排放至已声明空气舱室作为一项单独记录的基本流离开盐处理、熏制与路线冷却过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：甲烷，排放至已声明空气舱室
- 流属性/单位：质量 / kg
- 数量规则：采用烟气实测值，或按燃料和设备特定方法分别计算甲烷，排放至已声明空气舱室，并反映末端控制
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 熏制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_combustion_emissions`
- 来源：`ipcc-2006-stationary-combustion`

###### 一氧化二氮，排放至已声明空气舱室（`smoking_n2o`）

一氧化二氮，排放至已声明空气舱室作为一项单独记录的基本流离开盐处理、熏制与路线冷却过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：一氧化二氮，排放至已声明空气舱室
- 流属性/单位：质量 / kg
- 数量规则：采用烟气实测值，或按燃料和设备特定方法分别计算一氧化二氮，排放至已声明空气舱室，并反映末端控制
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 熏制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_combustion_emissions`
- 来源：`ipcc-2006-stationary-combustion`

###### 氮氧化物，排放至已声明空气舱室（`smoking_nox`）

氮氧化物，排放至已声明空气舱室作为一项单独记录的基本流离开盐处理、熏制与路线冷却过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：氮氧化物，排放至已声明空气舱室
- 流属性/单位：质量 / kg
- 数量规则：采用烟气实测值，或按燃料和设备特定方法分别计算氮氧化物，排放至已声明空气舱室，并反映末端控制
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 熏制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_combustion_emissions`
- 来源：`codex-cxc-68-2009`; `eu-fdm-bat-2019-2031`

###### 二氧化硫，排放至已声明空气舱室（`smoking_so2`）

二氧化硫，排放至已声明空气舱室作为一项单独记录的基本流离开盐处理、熏制与路线冷却过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：二氧化硫，排放至已声明空气舱室
- 流属性/单位：质量 / kg
- 数量规则：采用烟气实测值，或按燃料和设备特定方法分别计算二氧化硫，排放至已声明空气舱室，并反映末端控制
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 熏制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_combustion_emissions`
- 来源：`codex-cxc-68-2009`; `eu-fdm-bat-2019-2031`

###### 一氧化碳，排放至已声明空气舱室（`smoking_co`）

一氧化碳，排放至已声明空气舱室作为一项单独记录的基本流离开盐处理、熏制与路线冷却过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：一氧化碳，排放至已声明空气舱室
- 流属性/单位：质量 / kg
- 数量规则：采用烟气实测值，或按燃料和设备特定方法分别计算一氧化碳，排放至已声明空气舱室，并反映末端控制
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 熏制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_combustion_emissions`
- 来源：`codex-cxc-68-2009`; `eu-fdm-bat-2019-2031`

###### 颗粒物（PM2.5），排放至已声明空气舱室（`smoking_pm25`）

颗粒物（PM2.5），排放至已声明空气舱室作为一项单独记录的基本流离开盐处理、熏制与路线冷却过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：颗粒物（PM2.5），排放至已声明空气舱室
- 流属性/单位：质量 / kg
- 数量规则：采用烟气实测值，或按燃料和设备特定方法分别计算颗粒物（PM2.5），排放至已声明空气舱室，并反映末端控制
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 熏制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_combustion_emissions`
- 来源：`codex-cxc-68-2009`; `eu-fdm-bat-2019-2031`

### 过程：干制（`dried_route`）

#### 输入

##### 产品流

###### 制备章鱼中间品（`dried_prepared_input`）

制备章鱼中间品作为一项单独记录的产品流进入干制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：制备章鱼中间品
- 流属性/单位：质量 / kg
- 数量规则：按批次或期间计量制备章鱼中间品的实际数量，并保留该原子流的适用条件和追溯记录
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：路线特定 (`route_specific`)
- 归一化基准：每 kg 干制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_balance`

###### 交流电（`drying_electricity`）

交流电作为一项单独记录的产品流进入干制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：单独计量交流电，不得与蒸汽、燃料或其他过程用电合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 干制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_dried_route`

###### 蒸汽（`drying_steam`）

蒸汽作为一项单独记录的产品流进入干制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：蒸汽 `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量跨越过程边界的 11.0 MPaG 蒸汽；仅在实际供应该已核实等级时适用
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 干制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_dried_route`

###### 气态天然气（`drying_natural_gas`）

气态天然气作为一项单独记录的产品流进入干制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量该路线实际燃烧的气态天然气；未使用时不适用，且不得与其他燃料合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 干制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_combustion_fuels`

###### 柴油（`drying_diesel`）

柴油作为一项单独记录的产品流进入干制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量该路线实际燃烧的柴油；未使用时不适用，且不得与其他燃料合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 干制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_combustion_fuels`

###### 液化石油气（`drying_lpg`）

液化石油气作为一项单独记录的产品流进入干制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：液化石油气 `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量该路线实际燃烧的液化石油气；未使用时不适用，且不得与其他燃料合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 干制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_combustion_fuels`

#### 输出

##### 产品流

###### 干制章鱼中间品（`dried_octopus`）

干制章鱼中间品作为一项单独记录的产品流离开干制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：干制章鱼中间品
- 流属性/单位：质量 / kg
- 数量规则：按批次或期间计量干制章鱼中间品的实际数量，并保留该原子流的适用条件和追溯记录
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：路线特定 (`route_specific`)
- 归一化基准：每生产批次
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_balance`

##### 废物流

###### 不合格干制章鱼（`drying_rejects`）

不合格干制章鱼作为一项单独记录的废物流离开干制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：不合格干制章鱼
- 流属性/单位：质量 / kg
- 数量规则：计量离开本过程的不合格干制章鱼实际数量，并记录含水基准和去向（如适用）
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 进入干制的制备章鱼
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_balance`

##### 基本流

###### 水蒸气，排放至已声明空气舱室（`drying_removed_water`）

水蒸气，排放至已声明空气舱室作为一项单独记录的基本流离开干制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：水蒸气，排放至已声明空气舱室
- 流属性/单位：质量 / kg
- 数量规则：根据进料与干制产品的相容含水率质量衡算计算，并扣除单独记录的液态损失
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 干制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_mass_balance`
- 来源：`codex-cxc-52-2003`; `codex-cxc-68-2009`

###### 二氧化碳（化石源），排放至已声明空气舱室（`drying_co2`）

二氧化碳（化石源），排放至已声明空气舱室作为一项单独记录的基本流离开干制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：二氧化碳（化石源），排放至已声明空气舱室
- 流属性/单位：质量 / kg
- 数量规则：按每种实际消耗的化石燃料分别计算；不计入生物源碳
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 干制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_combustion_emissions`
- 来源：`ipcc-2006-stationary-combustion`

###### 甲烷，排放至已声明空气舱室（`drying_ch4`）

甲烷，排放至已声明空气舱室作为一项单独记录的基本流离开干制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：甲烷，排放至已声明空气舱室
- 流属性/单位：质量 / kg
- 数量规则：采用烟气实测值，或按燃料和设备特定方法分别计算甲烷，排放至已声明空气舱室，并反映末端控制
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 干制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_combustion_emissions`
- 来源：`ipcc-2006-stationary-combustion`

###### 一氧化二氮，排放至已声明空气舱室（`drying_n2o`）

一氧化二氮，排放至已声明空气舱室作为一项单独记录的基本流离开干制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：一氧化二氮，排放至已声明空气舱室
- 流属性/单位：质量 / kg
- 数量规则：采用烟气实测值，或按燃料和设备特定方法分别计算一氧化二氮，排放至已声明空气舱室，并反映末端控制
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 干制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_combustion_emissions`
- 来源：`ipcc-2006-stationary-combustion`

###### 氮氧化物，排放至已声明空气舱室（`drying_nox`）

氮氧化物，排放至已声明空气舱室作为一项单独记录的基本流离开干制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：氮氧化物，排放至已声明空气舱室
- 流属性/单位：质量 / kg
- 数量规则：采用烟气实测值，或按燃料和设备特定方法分别计算氮氧化物，排放至已声明空气舱室，并反映末端控制
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 干制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_combustion_emissions`
- 来源：`codex-cxc-68-2009`; `eu-fdm-bat-2019-2031`

###### 二氧化硫，排放至已声明空气舱室（`drying_so2`）

二氧化硫，排放至已声明空气舱室作为一项单独记录的基本流离开干制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：二氧化硫，排放至已声明空气舱室
- 流属性/单位：质量 / kg
- 数量规则：采用烟气实测值，或按燃料和设备特定方法分别计算二氧化硫，排放至已声明空气舱室，并反映末端控制
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 干制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_combustion_emissions`
- 来源：`codex-cxc-68-2009`; `eu-fdm-bat-2019-2031`

###### 一氧化碳，排放至已声明空气舱室（`drying_co`）

一氧化碳，排放至已声明空气舱室作为一项单独记录的基本流离开干制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：一氧化碳，排放至已声明空气舱室
- 流属性/单位：质量 / kg
- 数量规则：采用烟气实测值，或按燃料和设备特定方法分别计算一氧化碳，排放至已声明空气舱室，并反映末端控制
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 干制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_combustion_emissions`
- 来源：`codex-cxc-68-2009`; `eu-fdm-bat-2019-2031`

###### 颗粒物（PM2.5），排放至已声明空气舱室（`drying_pm25`）

颗粒物（PM2.5），排放至已声明空气舱室作为一项单独记录的基本流离开干制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：颗粒物（PM2.5），排放至已声明空气舱室
- 流属性/单位：质量 / kg
- 数量规则：采用烟气实测值，或按燃料和设备特定方法分别计算颗粒物（PM2.5），排放至已声明空气舱室，并反映末端控制
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 干制章鱼产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_combustion_emissions`
- 来源：`codex-cxc-68-2009`; `eu-fdm-bat-2019-2031`

### 过程：盐渍或盐水浸制（`salted_brined_route`）

#### 输入

##### 产品流

###### 制备章鱼中间品（`salted_brined_prepared_input`）

制备章鱼中间品作为一项单独记录的产品流进入盐渍或盐水浸制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：制备章鱼中间品
- 流属性/单位：质量 / kg
- 数量规则：计量制备章鱼中间品的实际质量或体积、盐度及去向；不得与其他废水流合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：路线特定 (`route_specific`)
- 归一化基准：每 kg 适用路线产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_balance`

###### 食盐（`food_grade_salt`）

食盐作为一项单独记录的产品流进入盐渍或盐水浸制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：食盐 `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批准配方或化学品领用记录计量食盐；仅在实际使用时适用
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 适用路线产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_salted_brined_route`
- 来源：`codex-cxc-52-2003`

###### 工艺用水（`brine_makeup_water`）

工艺用水作为一项单独记录的产品流进入盐渍或盐水浸制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据设备制冷剂台账记录工艺用水补充量；仅在该制冷剂经核实时适用
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 适用路线产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_salted_brined_route`

###### 食品级氯化钠盐水（`prepared_brine`）

食品级氯化钠盐水作为一项单独记录的产品流进入盐渍或盐水浸制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：食品级氯化钠盐水
- 流属性/单位：质量 / kg
- 数量规则：计量食品级氯化钠盐水的实际质量或体积、盐度及去向；不得与其他废水流合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 适用路线产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_salted_brined_route`
- 来源：`codex-cxc-52-2003`

###### 食品级乙酸（`brine_acetic_acid`）

食品级乙酸作为一项单独记录的产品流进入盐渍或盐水浸制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：食品级乙酸
- 流属性/单位：质量 / kg
- 数量规则：计量食品级乙酸的实际质量或体积、盐度及去向；不得与其他废水流合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 适用路线产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_salted_brined_route`

#### 输出

##### 产品流

###### 盐渍章鱼中间品（`salted_octopus`）

盐渍章鱼中间品作为一项单独记录的产品流离开盐渍或盐水浸制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：盐渍章鱼中间品
- 流属性/单位：质量 / kg
- 数量规则：按批准配方或化学品领用记录计量盐渍章鱼中间品；仅在实际使用时适用
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：路线特定 (`route_specific`)
- 归一化基准：每生产批次
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_balance`

###### 盐水浸制章鱼中间品（`brined_octopus`）

盐水浸制章鱼中间品作为一项单独记录的产品流离开盐渍或盐水浸制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：盐水浸制章鱼中间品
- 流属性/单位：质量 / kg
- 数量规则：计量盐水浸制章鱼中间品的实际质量或体积、盐度及去向；不得与其他废水流合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：路线特定 (`route_specific`)
- 归一化基准：每生产批次
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_balance`

##### 废物流

###### 浓水（`spent_brine`）

浓水作为一项单独记录的废物流离开盐渍或盐水浸制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：浓水 `76ab69b6-6fa7-461c-be07-bc54e581a699`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量浓水的实际质量或体积、盐度及去向；不得与其他废水流合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：路线特定 (`route_specific`)
- 归一化基准：每 kg 适用路线产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_wastewater`

###### 不合格盐渍或盐水浸制章鱼（`salted_brined_product_loss`）

不合格盐渍或盐水浸制章鱼作为一项单独记录的废物流离开盐渍或盐水浸制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：不合格盐渍或盐水浸制章鱼
- 流属性/单位：质量 / kg
- 数量规则：计量不合格盐渍或盐水浸制章鱼的实际质量或体积、盐度及去向；不得与其他废水流合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 进入适用路线的制备章鱼
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_balance`

###### 未处理海产品加工废水（`salted_brined_wastewater`）

未处理海产品加工废水作为一项单独记录的废物流离开盐渍或盐水浸制过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：未处理海产品加工废水
- 流属性/单位：体积 / m3
- 数量规则：计量未处理海产品加工废水的实际质量或体积、盐度及去向；不得与其他废水流合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：路线特定 (`route_specific`)
- 归一化基准：每 kg 适用路线产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_wastewater`

##### 基本流

### 过程：包装与路线所需储存（`packaging_storage`）

#### 输入

##### 产品流

###### 冷冻章鱼中间品（`packaging_frozen_input`）

冷冻章鱼中间品作为一项单独记录的产品流进入包装与路线所需储存过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：冷冻章鱼中间品
- 流属性/单位：质量 / kg
- 数量规则：按包装 BOM、领用量、成品数和库存变化核算冷冻章鱼中间品；仅在该组件适用时记录
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：路线特定 (`route_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_balance`

###### 熏制章鱼中间品（`packaging_smoked_input`）

熏制章鱼中间品作为一项单独记录的产品流进入包装与路线所需储存过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：熏制章鱼中间品
- 流属性/单位：质量 / kg
- 数量规则：按包装 BOM、领用量、成品数和库存变化核算熏制章鱼中间品；仅在该组件适用时记录
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：路线特定 (`route_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_balance`

###### 干制章鱼中间品（`packaging_dried_input`）

干制章鱼中间品作为一项单独记录的产品流进入包装与路线所需储存过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：干制章鱼中间品
- 流属性/单位：质量 / kg
- 数量规则：按包装 BOM、领用量、成品数和库存变化核算干制章鱼中间品；仅在该组件适用时记录
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：路线特定 (`route_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_balance`

###### 盐渍章鱼中间品（`packaging_salted_input`）

盐渍章鱼中间品作为一项单独记录的产品流进入包装与路线所需储存过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：盐渍章鱼中间品
- 流属性/单位：质量 / kg
- 数量规则：按包装 BOM、领用量、成品数和库存变化核算盐渍章鱼中间品；仅在该组件适用时记录
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：路线特定 (`route_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_balance`

###### 盐水浸制章鱼中间品（`packaging_brined_input`）

盐水浸制章鱼中间品作为一项单独记录的产品流进入包装与路线所需储存过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：盐水浸制章鱼中间品
- 流属性/单位：质量 / kg
- 数量规则：计量盐水浸制章鱼中间品的实际质量或体积、盐度及去向；不得与其他废水流合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：路线特定 (`route_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_balance`

###### 塑料薄膜（`plastic_film_packaging`）

塑料薄膜作为一项单独记录的产品流进入包装与路线所需储存过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：塑料薄膜 `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按包装 BOM、领用量、成品数和库存变化核算塑料薄膜；仅在该组件适用时记录
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_storage`

###### 瓦楞纸板（`corrugated_cardboard_packaging`）

瓦楞纸板作为一项单独记录的产品流进入包装与路线所需储存过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按包装 BOM、领用量、成品数和库存变化核算瓦楞纸板；仅在该组件适用时记录
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_storage`

###### 食品接触用玻璃罐（`glass_jar_packaging`）

食品接触用玻璃罐作为一项单独记录的产品流进入包装与路线所需储存过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：食品接触用玻璃罐
- 流属性/单位：质量 / kg
- 数量规则：按包装 BOM、领用量、成品数和库存变化核算食品接触用玻璃罐；仅在该组件适用时记录
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_storage`

###### 食品接触用钢制罐盖（`metal_closure_packaging`）

食品接触用钢制罐盖作为一项单独记录的产品流进入包装与路线所需储存过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：食品接触用钢制罐盖
- 流属性/单位：质量 / kg
- 数量规则：按包装 BOM、领用量、成品数和库存变化核算食品接触用钢制罐盖；仅在该组件适用时记录
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_storage`

###### 交流电（`storage_electricity`）

交流电作为一项单独记录的产品流进入包装与路线所需储存过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：计量用电，并按相容温区的占用质量-时间分配交流电
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：情景特定 (`scenario_specific`)
- 归一化基准：每 kg 参考产品（对应所代表储存时长）
- 基准类型：储存时长 (`storage_duration`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_storage`

###### 氨，无水，液体（`storage_r717_makeup`）

氨，无水，液体作为一项单独记录的产品流进入包装与路线所需储存过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：氨，无水，液体 `6928be4f-282b-4448-8f2a-f8c746621303`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据设备制冷剂台账记录氨，无水，液体补充量；仅在该制冷剂经核实时适用
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：情景特定 (`scenario_specific`)
- 归一化基准：每 kg 参考产品（对应所代表储存时长）
- 基准类型：储存时长 (`storage_duration`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_refrigerant_balance`

###### 制冷剂R404A（`storage_r404a_makeup`）

制冷剂R404A作为一项单独记录的产品流进入包装与路线所需储存过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：制冷剂R404A `76513c71-a148-484e-865f-2ab54afb4331`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据设备制冷剂台账记录制冷剂R404A补充量；仅在该制冷剂经核实时适用
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：情景特定 (`scenario_specific`)
- 归一化基准：每 kg 参考产品（对应所代表储存时长）
- 基准类型：储存时长 (`storage_duration`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_refrigerant_balance`

#### 输出

##### 产品流

###### 章鱼，冷冻、烟熏、干制、盐腌或盐水浸泡（`reference_product`）

章鱼，冷冻、烟熏、干制、盐腌或盐水浸泡作为一项单独记录的产品流离开包装与路线所需储存过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：章鱼，冷冻、烟熏、干制、盐腌或盐水浸泡 `5c8cdbc1-2f53-47ac-aa4a-e44125c18761`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按适用的净重、去冰衣重或沥干重口径归一化后恰为 1 kg；这是建模恒等式，不是经验范围
- 数值来源模式：固定值 (`fixed_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：身份引用 (`identity_reference`)
- 来源：`unstats-cpc-v3-2025`

##### 废物流

###### 塑料薄膜包装废料（`plastic_film_scrap`）

塑料薄膜包装废料作为一项单独记录的废物流离开包装与路线所需储存过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：塑料薄膜包装废料
- 流属性/单位：质量 / kg
- 数量规则：按包装 BOM、领用量、成品数和库存变化核算塑料薄膜包装废料；仅在该组件适用时记录
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_storage`

###### 瓦楞纸板包装废料（`corrugated_cardboard_scrap`）

瓦楞纸板包装废料作为一项单独记录的废物流离开包装与路线所需储存过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：瓦楞纸板包装废料
- 流属性/单位：质量 / kg
- 数量规则：按包装 BOM、领用量、成品数和库存变化核算瓦楞纸板包装废料；仅在该组件适用时记录
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_storage`

###### 食品接触用玻璃包装废料（`glass_packaging_scrap`）

食品接触用玻璃包装废料作为一项单独记录的废物流离开包装与路线所需储存过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：食品接触用玻璃包装废料
- 流属性/单位：质量 / kg
- 数量规则：按包装 BOM、领用量、成品数和库存变化核算食品接触用玻璃包装废料；仅在该组件适用时记录
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_storage`

###### 钢制包装盖废料（`steel_closure_scrap`）

钢制包装盖废料作为一项单独记录的废物流离开包装与路线所需储存过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：钢制包装盖废料
- 流属性/单位：质量 / kg
- 数量规则：按包装 BOM、领用量、成品数和库存变化核算钢制包装盖废料；仅在该组件适用时记录
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_storage`

##### 基本流

###### 氨（R717），排放至已声明空气舱室（`storage_r717_emission`）

氨（R717），排放至已声明空气舱室作为一项单独记录的基本流离开包装与路线所需储存过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：氨（R717），排放至已声明空气舱室
- 流属性/单位：质量 / kg
- 数量规则：采用制冷剂质量衡算或实测泄漏量计算氨（R717），排放至已声明空气舱室；仅在对应制冷剂系统适用时记录
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：情景特定 (`scenario_specific`)
- 归一化基准：每 kg 参考产品（对应所代表储存时长）
- 基准类型：储存时长 (`storage_duration`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_refrigerant_balance`

###### 制冷剂R404A，排放至已声明空气舱室（`storage_r404a_emission`）

制冷剂R404A，排放至已声明空气舱室作为一项单独记录的基本流离开包装与路线所需储存过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：制冷剂R404A，排放至已声明空气舱室
- 流属性/单位：质量 / kg
- 数量规则：采用制冷剂质量衡算或实测泄漏量计算制冷剂R404A，排放至已声明空气舱室；仅在对应制冷剂系统适用时记录
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：情景特定 (`scenario_specific`)
- 归一化基准：每 kg 参考产品（对应所代表储存时长）
- 基准类型：储存时长 (`storage_duration`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_refrigerant_balance`

### 过程：卫生清洁与现场废水处理（`sanitation_wastewater`）

#### 输入

##### 产品流

###### 工艺用水（`sanitation_water`）

工艺用水作为一项单独记录的产品流进入卫生清洁与现场废水处理过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量进入本过程的工艺用水实际数量；不得与其他水态或回用量合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_sanitation_treatment`
- 来源：`codex-cxc-52-2003`

###### 氢氧化钠（`sanitation_sodium_hydroxide`）

氢氧化钠作为一项单独记录的产品流进入卫生清洁与现场废水处理过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：氢氧化钠
- 流属性/单位：质量 / kg
- 数量规则：按批准配方或化学品领用记录计量氢氧化钠；仅在实际使用时适用
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_sanitation_treatment`

###### 硝酸（`sanitation_nitric_acid`）

硝酸作为一项单独记录的产品流进入卫生清洁与现场废水处理过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：硝酸
- 流属性/单位：质量 / kg
- 数量规则：按批准配方或化学品领用记录计量硝酸；仅在实际使用时适用
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_sanitation_treatment`

###### 次氯酸钠（`sanitation_sodium_hypochlorite`）

次氯酸钠作为一项单独记录的产品流进入卫生清洁与现场废水处理过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：次氯酸钠
- 流属性/单位：质量 / kg
- 数量规则：按批准配方或化学品领用记录计量次氯酸钠；仅在实际使用时适用
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_sanitation_treatment`

###### 交流电（`sanitation_electricity`）

交流电作为一项单独记录的产品流进入卫生清洁与现场废水处理过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：单独计量交流电，不得与蒸汽、燃料或其他过程用电合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_sanitation_treatment`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

###### 未处理海产品加工废水（`non_saline_wastewater_influent`）

未处理海产品加工废水作为一项单独记录的废物流进入卫生清洁与现场废水处理过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：未处理海产品加工废水
- 流属性/单位：体积 / m3
- 数量规则：计量未处理海产品加工废水的实际质量或体积、盐度及去向；不得与其他废水流合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_wastewater`

###### 浓水（`saline_wastewater_influent`）

浓水作为一项单独记录的废物流进入卫生清洁与现场废水处理过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：浓水 `76ab69b6-6fa7-461c-be07-bc54e581a699`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量浓水的实际质量或体积、盐度及去向；不得与其他废水流合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_wastewater`

#### 输出

##### 产品流

##### 废物流

###### 处理后海产品加工废水出水（`treated_wastewater`）

处理后海产品加工废水出水作为一项单独记录的废物流离开卫生清洁与现场废水处理过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：处理后海产品加工废水出水
- 流属性/单位：体积 / m3
- 数量规则：计量处理后海产品加工废水出水的实际质量或体积、盐度及去向；不得与其他废水流合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_sanitation_treatment`

###### 海产品加工废水处理污泥（`wastewater_sludge`）

海产品加工废水处理污泥作为一项单独记录的废物流离开卫生清洁与现场废水处理过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：海产品加工废水处理污泥
- 流属性/单位：质量 / kg
- 数量规则：计量海产品加工废水处理污泥的实际质量或体积、盐度及去向；不得与其他废水流合并
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_sanitation_treatment`

##### 基本流

###### 化学需氧量，排放至已声明水体舱室（`effluent_cod`）

化学需氧量，排放至已声明水体舱室作为一项单独记录的基本流离开卫生清洁与现场废水处理过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：化学需氧量，排放至已声明水体舱室
- 流属性/单位：质量 / kg
- 数量规则：以同一期间的出水体积乘以化学需氧量，排放至已声明水体舱室实测浓度并完成单位换算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_effluent_quality`
- 来源：`eu-fdm-bat-2019-2031`

###### 生化需氧量，排放至已声明水体舱室（`effluent_bod`）

生化需氧量，排放至已声明水体舱室作为一项单独记录的基本流离开卫生清洁与现场废水处理过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：生化需氧量，排放至已声明水体舱室
- 流属性/单位：质量 / kg
- 数量规则：以同一期间的出水体积乘以生化需氧量，排放至已声明水体舱室实测浓度并完成单位换算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_effluent_quality`
- 来源：`eu-fdm-bat-2019-2031`

###### 总氮，排放至已声明水体舱室（`effluent_total_nitrogen`）

总氮，排放至已声明水体舱室作为一项单独记录的基本流离开卫生清洁与现场废水处理过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：总氮，排放至已声明水体舱室
- 流属性/单位：质量 / kg
- 数量规则：以同一期间的出水体积乘以总氮，排放至已声明水体舱室实测浓度并完成单位换算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_effluent_quality`
- 来源：`eu-fdm-bat-2019-2031`

###### 总磷，排放至已声明水体舱室（`effluent_total_phosphorus`）

总磷，排放至已声明水体舱室作为一项单独记录的基本流离开卫生清洁与现场废水处理过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：总磷，排放至已声明水体舱室
- 流属性/单位：质量 / kg
- 数量规则：以同一期间的出水体积乘以总磷，排放至已声明水体舱室实测浓度并完成单位换算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_effluent_quality`
- 来源：`eu-fdm-bat-2019-2031`

###### 总悬浮固体，排放至已声明水体舱室（`effluent_tss`）

总悬浮固体，排放至已声明水体舱室作为一项单独记录的基本流离开卫生清洁与现场废水处理过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：总悬浮固体，排放至已声明水体舱室
- 流属性/单位：质量 / kg
- 数量规则：以同一期间的出水体积乘以总悬浮固体，排放至已声明水体舱室实测浓度并完成单位换算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_effluent_quality`
- 来源：`eu-fdm-bat-2019-2031`

###### 氯化物，排放至已声明水体舱室（`effluent_chloride`）

氯化物，排放至已声明水体舱室作为一项单独记录的基本流离开卫生清洁与现场废水处理过程。其数量按下列该行专用数量规则和采集协议确定。

- 选定流：氯化物，排放至已声明水体舱室
- 流属性/单位：质量 / kg
- 数量规则：以同一期间的出水体积乘以氯化物，排放至已声明水体舱室实测浓度并完成单位换算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 参考产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：根据采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_effluent_quality`
- 来源：`eu-fdm-bat-2019-2031`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid` | 共享或多产出过程 | 优先通过路线细分及对每项具名投入、废物和排放直接计量来避免分配。 | `eu-pef-2021-2279` |
| `alloc_physical` | 无法避免的共享操作 | 无法细分时采用有文件依据的物理因果关系，例如相同温区的占用质量-时间。 | `eu-pef-2021-2279` |
| `alloc_economic_last_resort` | 缺乏合理物理关系的共产品 | 仅将经济分配作为最后手段，并披露市场、价格期间和敏感性。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass_balance` | 所有生产过程 | 每项章鱼投入、中间品、可销售产出、损失、不合格品和返工行 | 秤、批次表、含水率和处置记录 | lot_id; route; species; incoming_state; gross_mass; tare_mass; intermediate_mass; final_mass; glaze_mass; drained_mass; moisture; reject_mass; rework_mass | 经校准称量并按路线逐批核对。 | kg; percent | 每批 | 完整代表性期间。 | 每条代表性产线和场址。 | 分路线闭合并按合格可销售质量归一化。 | 校准、批次追溯和签字核对。 |
| `cp_common_inputs` | `common_preparation` | 冰、液态水、电力、每种清洁剂和每种消毒剂 | 仪表、发票、生产和领用记录 | lot_id; flow_id; quantity; active_fraction; unit; meter_start; meter_end; stock_start; stock_end; assigned_process | 分别计量或核对每项原子投入，并防止与全厂卫生清洁重复计算。 | kg; kWh | 每批或可追溯分配的每月数据 | 与质量衡算相同。 | 所有制备线。 | 冰、水、电和各种化学品不得合并。 | 仪表校准、有效成分记录和库存/发票核对。 |
| `cp_frozen_route` | `frozen_route` | 冰衣水、冷冻电力、冻藏电力和冷冻损失 | 仪表、冰衣、冷冻机和冷库记录 | lot_id; freezer_id; water; electricity; temperature; start_time; end_time; product_mass; loss_mass | 直接计量或按设备时间和质量-时间进行工程分配。 | kg; kWh; degree Celsius; hour | 每批并每月核对 | 与质量衡算相同。 | 所有冷冻机和包装前冷库。 | 冷冻与冻藏电力分开。 | 仪表校准和温度日志完整性。 |
| `cp_smoked_route` | `smoked_route` | 盐、盐水、水、木片、电力、蒸汽、灰和熏制残余物 | 配方、仪表、领用和烟气记录 | lot_id; salt; brine; water; wood_species; wood_moisture; electricity; steam; ash; process_time; temperature | 每批分别核对每种材料和公用工程。 | kg; kWh; hour; degree Celsius | 每批 | 与质量衡算相同。 | 每条熏制线。 | 烟材、电力、蒸汽和燃料不得合并。 | 批准配方、仪表校准和材料台账。 |
| `cp_dried_route` | `dried_route` | 干燥电力、蒸汽、水分和不合格品 | 仪表、含水率检测、干燥机和批次日志 | lot_id; inlet_mass; outlet_mass; inlet_moisture; outlet_moisture; electricity; steam; time; temperature; reject_mass | 计量公用工程并逐批闭合水分衡算。 | kg; kWh; percent | 每批 | 与质量衡算相同。 | 每台干燥机。 | 以相容含水率测量计算去除水。 | 仪表和水分方法 QA。 |
| `cp_salted_brined_route` | `salted_brined_route` | 盐、水、盐水和每种添加剂 | 配方、秤、仪表和领用记录 | lot_id; route; ingredient_id; quantity; concentration; returned_quantity; reused_brine | 分别核对每种配料和盐水循环。 | kg; percent | 每批 | 与质量衡算相同。 | 每条盐渍/盐水线。 | 添加剂不得合并，排放盐水不得从投入中净扣。 | 配方批准和秤/仪表校准。 |
| `cp_combustion_fuels` | `smoked_route`; `dried_route` | 天然气、柴油和 LPG | 燃料表、发票、储罐和钢瓶台账 | equipment_id; fuel_id; quantity; unit; stock_start; stock_end; net_calorific_value; operating_time | 每种实际燃料分别核对至设备和路线。 | kg; MJ | 每月并分配到批次 | 与路线生产相同。 | 每个现场燃烧源。 | 不得使用通用热能或合并燃料行。 | 仪表、发票和库存核对。 |
| `cp_combustion_emissions` | `smoked_route`; `dried_route` | CO2、CH4、N2O、NOx、SO2、CO 和 PM2.5 | 烟气监测和燃料特定计算 | source_id; pollutant; measured_concentration; gas_flow; fuel_quantity; factor; factor_source; control_efficiency | 优先源特定监测，否则使用有文件依据的燃料和设备特定因子。 | kg | 监测活动或每月计算 | 与燃料记录相同。 | 每个烟囱或直接烟源。 | 每种污染物分别计算并反映控制。 | 监测 QA、燃料规格和因子来源。 |
| `cp_refrigerant_balance` | `frozen_route`; `packaging_storage` | 每种制冷剂补充与释放 | 制冷剂台账和维修记录 | equipment_id; refrigerant_id; charge_start; purchases; additions; recovery; charge_end; measured_release | 每种制冷剂身份和设备组分别闭合质量衡算。 | kg | 每次维修并年度闭合 | 与产品数据相同。 | 每个制冷系统。 | 制冷剂不得合并，也不得假定 R717 与 R404A 同时适用。 | 技师记录和台账核对。 |
| `cp_packaging_storage` | `packaging_storage` | 每个包装组件、废料、储存用电和储存条件 | BOM、领用、包装数量、库房仪表和日志 | component_id; flow_uuid; mass; units; scrap; destination; stored_mass; temperature; start; end; electricity | 分别核对每个组件，并按相容温区质量-时间分配储存用电。 | kg; kWh; day | 每包装活动和每月 | 与产品数据相同。 | 所有包装线和储存室。 | 不得使用合并包装材料或包装废料行。 | BOM 版本、库存核对和温度日志。 |
| `cp_wastewater` | 所有废水产生过程 | 每项非盐废水和废盐水流 | 流量表、批次和排放记录 | source_process; stream_id; volume; mass; salinity; chloride; destination; start; end | 混合前分别计量盐性和非盐性流。 | m3; kg | 每日或每批 | 与生产相同。 | 每个排放点。 | 盐水与普通废水分开。 | 仪表校准和去向文件。 |
| `cp_sanitation_treatment` | `sanitation_wastewater` | 卫生水、每种化学品、电力、出水和污泥 | 卫生日志、化学品台账、仪表和处理记录 | chemical_id; active_fraction; quantity; water; electricity; influent; effluent; sludge; dry_solids; destination | 分别记录每种化学品和处理产出。 | kg; m3; kWh | 每日或每次卫生操作 | 与生产相同。 | 整个代表性设施。 | 核对库存和废水流后归一化。 | 批准卫生计划、仪表和实验室 QA。 |
| `cp_effluent_quality` | `sanitation_wastewater` | COD、BOD、TN、TP、TSS 和氯化物 | 经认可的采样和实验室记录 | sample_id; point; date; flow; parameter; concentration; method; detection_limit | 代表性浓度与同期间出水流量配对。 | mg/L; m3 | 与许可/BAT 相容的频率 | 与出水流量相同。 | 最终排口和关键处理点。 | 污染物负荷 = 浓度 × 相容出水体积。 | 样品链、方法、空白、校准和认可。 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有行 | 归一化数量 = 批次或期间数量 / 合格可销售参考质量。 | 原子流数量；适用净重/去冰衣重/沥干重 | 每 kg 参考产品数量 | `eu-pef-2021-2279` |
| `calc_route_mass_balance` | 每条路线 | 接收或制备投入 = 路线产出 + 实测产品损失 + 留存/返工材料 + 实测水分或盐水变化，并披露不平衡。 | 质量和水分记录 | 路线产率和未解释不平衡 | `codex-cxc-52-2003` |
| `calc_combustion_emissions` | 每种现场燃料和污染物 | 使用源监测，或燃料量 × 有文件依据的燃料/设备因子；每种污染物分别计算。 | 燃料记录；监测或因子 | 每 kg 路线产出的 kg 污染物 | `ipcc-2006-stationary-combustion`; `eu-fdm-bat-2019-2031` |
| `calc_refrigerant_release` | 每个制冷系统 | 释放量 = 期初充注 + 补充 - 回收 - 期末充注，仅按有文件依据的转移调整。 | 制冷剂台账 | kg 制冷剂释放量 |  |
| `calc_effluent_load` | 每项出水污染物 | 负荷 = 相容出水体积 × 实测浓度，并披露单位换算和未检出值处理。 | 流量和实验室结果 | 每 kg 参考产品的 kg 污染物 | `eu-fdm-bat-2019-2031` |
| `calc_storage_energy` | 共享储存 | 分配电力 = 温区电力 × 所代表产品质量-时间 / 相容总占用质量-时间。 | 仪表、温区、质量和时长 | 声明时长下每 kg 的 kWh | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity_route` | 产品和过程 | 保留批次级物种、来料状态、形态、恰好一条主要路线及所有适用限定信息。 | 产品规格、标签和批次路线日志。 |
| `dq_atomic_inventory` | 每项交换 | 每行保留一个流身份、方向、流类型、单位、数量规则和适用条件；不得汇总载体、材料、废物或污染物。 | 原子流核对及有 UUID 行的 Tiangong 直读。 |
| `dq_measurement` | 仪表、秤和实验室结果 | 保留原始读数、校准、换算、采样点和方法。 | 校准、样品链和实验室 QA。 |
| `dq_representativeness` | 期间和场址 | 覆盖所代表设施和经论证的代表性期间；披露时间、技术和地域限制。 | 覆盖表和数据质量评价。 |
| `dq_unresolved_ranges` | 无范围的重要行 | 不得从单篇研究或单点虚构范围；至少两项独立、原文核验、边界相容来源支持后方可推断范围。 | 链接 manifest 未解决项的证据审查记录。 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 要求产品 UUID `5c8cdbc1-2f53-47ac-aa4a-e44125c18761`、质量 UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、质量单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg 和参考数量 1。 | `unstats-cpc-v3-2025` |
| `val_route_one_of` | 路线 | 恰好要求 `frozen`、`smoked`、`dried`、`salted` 或 `in_brine` 之一；拒绝同时应用全部路线行。 | `codex-cxc-52-2003` |
| `val_route_completeness` | 适用路线 | 要求每项适用具名材料、电力、蒸汽、实际燃料、制冷剂、废物、产品损失和直接污染物；只有过程证据支持时才接受不适用。 | `codex-cxc-52-2003`; `codex-cxc-68-2009`; `eu-pef-2021-2279` |
| `val_no_collection_flows` | 清单 | 拒绝将复数集合、载体清单、材料清单、公用工程清单、输入/输出占位或选择指令作为选定流。 | `eu-pef-2021-2279` |
| `val_refrigerant_pairing` | 冷冻和储存 | 每种实际制冷剂须分别有补充和释放行；不得暗示 R717 与 R404A 同时使用。 | `eu-pef-2021-2279` |
| `val_wastewater_pollutants` | 现场处理和排放 | 要求废水、盐水、污泥、COD、BOD、TN、TP、TSS 和适用氯化物分别记录，并带采样点和去向。 | `eu-fdm-bat-2019-2031` |
| `val_mass_balance` | 每批或期间 | 核对投入、路线产出、损失、不合格品、水分、冰衣和盐水变化并披露未解释不平衡。 | `codex-cxc-52-2003` |
| `val_range_evidence` | 任何编写范围 | 拒绝经验范围上下限相等，也拒绝缺少至少两项独立、原文核验、边界相容来源的外部推断范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 门到门保藏章鱼生产前景数据集。 |
| downstream_use | `secondary_dataset`; `background_dataset`; process 和 lifecyclemodel 投影。 |
| allowed_use | 产品形态、质量口径、技术、储存、地域和期间相容的路线匹配建模。 |
| excluded_use | 未协调水分、盐/盐水、冰衣、沥干质量、包装、储存和保质期条件的跨路线比较；鲜/冷藏或罐藏产品建模。 |
| required_metadata | PCR id/版本；参考 UUID；CPC 引用；物种；产品形态；生熟状态；一条主要路线；内在子步骤；净重/去冰衣重/沥干重口径；水分/盐/盐水/冰衣；设施；技术；实际燃料和制冷剂；期间；包装；储存；分配；废水去向；上游数据集。 |
| required_quality_disclosure | 覆盖、校准、路线质量衡算、原子流完整性、分配、缺失数据、未解决 UUID 和范围、来源版本及代表性。 |
| update_trigger | 路线、物种、形态、技术、配方、水分/盐/冰衣、燃料、制冷剂、包装、储存、废水处理、分配、覆盖、UUID、官方指南或证据发生实质变化。 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unstats-cpc-v3-2025` | `dataset` | 联合国统计司，Central Product Classification Version 3.0，2025-06-30 结构，代码 21267，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-08-24）。 | 官方类别身份和范围锚点。 |
| `codex-cxc-52-2003` | `official_guidance` | Codex Alimentarius，CXC 52-2003，Code of Practice for Fish and Fishery Products，https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ 和 https://www.fao.org/4/i2382e/i2382e.pdf（检索于 2026-08-24）。 | 头足类接收和解冻；冰、水、卫生、冷冻、冰衣、盐渍、盐水、干制、熏制、包装、储存和批次控制。 |
| `codex-cxc-68-2009` | `official_guidance` | Codex Alimentarius，CXC 68-2009，Code of Practice for the Reduction of Contamination of Food with Polycyclic Aromatic Hydrocarbons (PAH) from Smoking and Direct Drying Processes，官方原文：https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B68-2009%252FCXC_068e.pdf（检索于 2026-08-24）。 | 烟材和燃料身份、直接/间接熏制与干制、燃烧污染物、颗粒物、CO 和过程控制披露。 |
| `eu-fdm-bat-2019-2031` | `official_guidance` | 欧盟委员会，Commission Implementing Decision (EU) 2019/2031，https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj/eng（检索于 2026-08-24）。 | 分别盘查水、能源、原料、废水和废气；监测 COD、BOD、TN、TP、TSS、氯化物及相关空气污染物。 |
| `eu-pef-2021-2279` | `official_guidance` | 欧盟委员会，Recommendation (EU) 2021/2279 on Environmental Footprint methods，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索于 2026-08-24）。 | 功能单位、参考流、完整原子 LCI、包装、分配、前景采集、完整性和数据质量。 |
| `ipcc-2006-stationary-combustion` | `method_factor` | IPCC，2006 Guidelines for National Greenhouse Gas Inventories，Volume 2 Energy，Chapter 2 Stationary Combustion，https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol2.html（检索于 2026-08-24）。 | 无源实测时燃料特定 CO2、CH4、N2O 计算方法；本 PCR 未复制默认因子。 |
