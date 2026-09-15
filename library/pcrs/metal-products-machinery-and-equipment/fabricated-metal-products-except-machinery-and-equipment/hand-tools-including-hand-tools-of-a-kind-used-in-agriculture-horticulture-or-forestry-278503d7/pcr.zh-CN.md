---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.hand-tools-including-hand-tools-of-a-kind-used-in-agriculture-horticulture-or-forestry-278503d7
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 手工工具（包括农业、园艺或林业用的手工工具、手锯、锉刀、钳子及金属切削剪、手用扳手、喷灯及夹钳）

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 42921 语义边界内的手工操作工具，包括农业、园艺和林业用手工工具、手锯、锉刀、钳子、夹钳、金属切削剪、手用扳手、喷灯、台钳、夹具以及类似的非动力手工工具。本 PCR 支持建立从接收材料和外购部件开始，经成形或机加工、路线特定的热处理和表面精整、最终装配、检验，直至工厂大门处包装完成的前景生产数据集。

本 PCR 不包括动力手持工具、可互换刀具和模具、机器用刀具、刀夹和机床附件、CPC 42921 以外的餐具、剪刀和刀具、制造或贸易服务，也不包括分销、使用、维护、刃磨及生命末期阶段。研究可增加这些默认边界以外的生命周期阶段，但必须与默认工厂大门边界分开报告。

由于该子类包含功能和生产路线不同的产品，数据包必须识别一个产品型号，或声明一个按实际产量加权的产品组。只有在所声明产品或产品组实际采用时，才纳入相应的条件过程和条件流。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.hand-tools-including-hand-tools-of-a-kind-used-in-agriculture-horticulture-or-forestry-278503d7 |
| classification_refs | CPC 3.0: 42921 (exact) |
| covered_products | 手工操作的农业、园艺和林业工具；手锯；锉刀和粗锉；钳子、夹钳和金属切削剪；手用扳手；喷灯；台钳、夹具及类似非动力手工工具 |
| excluded_products | 动力手持工具；可互换刀具和模具；机器用刀具；刀夹和机床附件；CPC 42921 以外的餐具、剪刀和刀具；制造服务及贸易服务 |
| representative_product | 具有已声明金属主体、手柄或握把、表面处理及产品特定包装的合格、可销售手工操作工具 |
| production_route | 接收合金钢棒材或外购手工具毛坯及零件 → 切割、成形和机加工 → 路线特定热处理 → 路线特定水系清洗或酸洗及表面精整 → 手柄或握把装配 → 检验和包装 |
| market_state | 在工厂大门处已检验并完成出货包装的非动力手工工具；工具净质量与包装质量分别报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一个能够完成所声明机械功能的手工操作工具 |
| How much | 工厂大门处 1 kg 成品手工工具净质量 |
| How well | 符合已声明的工具类型、尺寸、材料牌号、硬度或强度、表面处理以及适用时额定能力的产品规范 |
| How long or cycle | 参考数量不按使用寿命归一化；在与比较相关时声明保修或预期使用寿命、使用循环次数或刃磨制度 |
| reference_flow_link | 参考流严格等于 1 kg 成品手工工具净输出；包装不计入参考净质量，作为单独投入记录 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 成品手工工具净质量 |
| 参考产品流 | 手工工具（包括农业、园艺或林业用的手工工具、手锯、锉刀、钳子及金属切割剪、手用扳手、喷灯及夹钳） `14c9d93f-f86e-4be7-8173-0b5c67c6d704` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品类型及型号或产品组定义；产品组产量加权方法；工具功能；工具净质量；材料组成和合金牌号；接收坯料或外购零件状态；成形和机加工技术；热处理路线；表面准备和精整；手柄或握把材料；产品特定质量或额定能力规范；包装系统；制造场址和地域；数据期；预期寿命或使用循环说明 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | 参考产品及所有按质量归一化的行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将清单归一化至 1 kg 合格手工工具净输出。包装不计入参考净质量，并单独记录。 |
| `measurement_material_mass` | 金属、化学品、手柄、树脂、包装、废物及中间零件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录接收状态或供应状态下的质量。当合金、配方、溶液浓度、含水率或再生含量会改变上游建模时，必须加以声明。不得将溶质质量当作供应溶液质量报告。 |
| `measurement_electricity` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表原始记录单位，按 1 kWh = 3.6 MJ 将 kWh 转换为 MJ。声明电网地域、电压以及是否包括至交付点的损耗。 |
| `measurement_natural_gas` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录交付气体的计量体积及其参考温度和压力。没有供应商或实测组分数据时，不得使用通用质量或能量换算。 |
| `measurement_water` | 工艺用水和水系废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先实测质量。若测量体积，使用实测或已声明密度换算，并保留体积、密度、温度和换算记录。 |
| `measurement_internal_parts` | 半成品金属手工具毛坯及零件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在每个过程边界记录转移质量，用于过程级质量平衡。内部转移在汇总的工厂大门清单中相互抵消，不得作为额外外部产品投入重复计数。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 合金钢棒材、外购半成品金属手工具毛坯及零件、手柄或握把部件、化学品、能源载体和包装按数据包声明的状态进入制造场址 |
| starting_condition_role | 手工工具制造和装配的前景起点；每项外购投入的上游生产由相应上游数据集表示 |
| product_classification_scope | CPC 3.0 子类 42921 内的手工操作工具；产品身份独立于分类映射 |
| recursive_input_rule | 同一手工工具类别内外购的成品或半成品投入，仅以具有自身数据集和已声明状态的上游产品投入记录一次；不得在当前前景系统内递归重建其上游制造 |
| upstream_dataset_requirement | 为合金钢坯料、外购零件、电力、天然气、水、化学品、手柄或握把材料和包装链接具有代表性的上游数据集，并尽可能匹配地域、技术和供应产品状态 |
| disclosure | 声明产品型号或加权产品组、所有纳入和省略的路线阶段、外购与场内作业、材料和能源状态、分配选择、处理去向、数据期、场址覆盖范围及任何新增下游阶段 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_process_chain` | 手工工具前景生产 | 纳入所声明产品实际发生的全部场内切割、成形、机加工、热处理、表面准备、精整、装配、检验和包装作业。对省略的路线阶段，必须以证据说明不适用。 | `us-epa-fabricated-metal-products-1995`; `us-epa-metal-products-machinery-2003` |
| `boundary_purchased_operations` | 外包作业或外购部件 | 若所列作业外包或部件外购，应记录外购产品投入，并使用包含该外包作业的上游数据集；不得再将同一作业作为场内过程重复建模。 | `us-epa-metal-products-machinery-2003` |
| `boundary_direct_emissions` | 场内燃烧和处理 | 纳入场内燃料燃烧直接基本流排放，以及实测的路线特定表面处理排放。外购电力、燃料和材料所含的上游排放保留在相应上游数据集中。 | `us-epa-fabricated-metal-products-1995` |
| `boundary_downstream_exclusion` | 默认工厂大门数据集 | 默认不包括分销、使用、维护、刃磨和生命末期。若研究增加这些阶段，必须单独报告新增阶段及其假设。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `forming_machining` | 金属切割、成形和机加工 | `required` | 始终纳入；若所有毛坯或零件均为外购，仅记录场内修整、钻孔、磨削或其他成形作业，并披露外购状态 | 主体、钳口或刀片的前景生产 | 转移的半成品金属手工具毛坯及零件 kg |
| `heat_treatment` | 热处理 | `conditional` | 场内进行淬硬、回火、退火、表面硬化或其他热处理时纳入 | 前景机械性能形成 | 转移的热处理后手工具毛坯及零件 kg |
| `surface_finishing` | 水系表面准备和精整 | `conditional` | 场内进行碱洗、酸洗、漂洗、涂层前处理或其他水系精整步骤时纳入 | 前景表面准备和精整 | 转移的表面精整后手工具零件 kg |
| `assembly_packaging` | 手柄或握把装配、检验和包装 | `required` | 始终纳入最终检验和包装；仅在所声明产品实际含有时纳入各手柄或握把材料 | 前景最终产品完工 | 1 kg 成品手工工具净质量 |

### 过程：金属切割、成形和机加工（`forming_machining`）

#### 输入

##### 产品流

###### 合金钢棒材投入（`alloy_steel_bar_stock`）

当经进一步加工的合金钢棒材进入场内切割、锻造、成形或机加工时，记录本流。实际使用的其他金属坯料形态应作为单独的具体产品流增加。

- 选定流：除热加工或冷加工外经进一步加工的合金钢棒材和杆材 `f72c06a2-f974-4d85-9308-b31cbb1d1b9a`
- 流属性/单位：Mass / kg
- 数量规则：实测领用合金钢坯料质量，减去有记录并退回受控库存的未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 成形和机加工用电（`forming_electricity`）

通过专用电表或有记录的机器工时分配，记录跨越本过程边界的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：生产期内切割、成形和机加工的实测耗电量，并分配至合格产品输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-commission-environmental-footprint-2021`

###### 切削液（`cutting_fluid`）

机加工补充切削液时记录本流。仅记录跨越边界的补充净量，不记录循环槽液的总存量。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：实测发放至本过程的切削液补充质量，扣除未开封退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`us-epa-fabricated-metal-products-1995`

##### 废物流

不规定废物投入。

##### 基本流

不规定基本流投入。

#### 输出

##### 产品流

###### 成形或机加工后的半成品手工具毛坯及零件（`formed_hand_tool_blank`）

该内部产品流记录转移至下一适用阶段的合格零件和在制零件实测质量。

- 选定流：半成品金属手工具毛坯及零件 `4427986b-3cc0-4879-99a1-7d5c2e7075a0`
- 流属性/单位：Mass / kg
- 数量规则：成形和机加工后转出质量，扣除单独计量的废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_mass`
- 来源：

##### 废物流

###### 工业后钢废料（`steel_scrap`）

记录离开本过程并送往回收或处理的钢制切边、切屑和不合格钢制零件；与生产内部返回材料分开记录。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：实测外送工业后钢废料质量，扣除内部再循环金属
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`us-epa-fabricated-metal-products-1995`

##### 基本流

不规定基本流。每项实测直接基本流排放均应作为单独的物种特定流增加。

### 过程：热处理（`heat_treatment`）

#### 输入

##### 产品流

###### 进入热处理的成形手工具毛坯（`heat_treatment_blank_input`）

记录进入场内热处理的内部质量。

- 选定流：半成品金属手工具毛坯及零件 `4427986b-3cc0-4879-99a1-7d5c2e7075a0`
- 流属性/单位：Mass / kg
- 数量规则：热处理作业接收的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_mass`
- 来源：

###### 热处理用电（`heat_treatment_electricity`）

场内进行热处理时，纳入电炉、风机、泵和直接相关控制设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：实测热处理用电量，并分配至处理后的合格输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 热处理用天然气（`heat_treatment_natural_gas`）

仅当燃气炉或燃烧器位于前景边界内时纳入气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：热处理消耗的交付天然气实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

##### 废物流

不规定废物投入。

##### 基本流

不规定基本流投入。

#### 输出

##### 产品流

###### 热处理后的手工具毛坯及零件（`heat_treated_hand_tool_blank`）

记录从热处理转移至表面精整或最终装配的内部质量。

- 选定流：半成品金属手工具毛坯及零件 `4427986b-3cc0-4879-99a1-7d5c2e7075a0`
- 流属性/单位：Mass / kg
- 数量规则：热处理后转移的合格实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_mass`
- 来源：

##### 废物流

不规定废物流。每种实际废淬火介质、炉渣或不合格零件均应作为单独的具体废物流增加。

##### 基本流

###### 天然气燃烧产生的直接化石二氧化碳（`heat_treatment_fossil_co2`）

本行仅包括场内天然气燃烧直接排放的化石二氧化碳，不包括燃料供应和外购电力的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：直接实测的烟气排放，或根据所采集天然气数量、供应商碳含量和有记录的氧化率计算的碳平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_combustion_emissions`
- 来源：

### 过程：水系表面准备和精整（`surface_finishing`）

#### 输入

##### 产品流

###### 进入表面精整的热处理后或成形零件（`finishing_part_input`）

记录进入场内水系表面精整路线的内部质量。

- 选定流：半成品金属手工具毛坯及零件 `4427986b-3cc0-4879-99a1-7d5c2e7075a0`
- 流属性/单位：Mass / kg
- 数量规则：表面精整作业接收的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_mass`
- 来源：

###### 水系清洗、酸洗和漂洗用工艺水（`finishing_process_water`）

工艺用水跨越表面精整边界时纳入本行。单独闭路循环的冷却水不由本行表示。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：水系清洗、酸洗和漂洗的实测供水量，扣除单独计量的循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 碱洗用氢氧化钠（`finishing_sodium_hydroxide`）

仅当氢氧化钠加入碱性清洗槽时纳入本行。声明记录质量是纯品质量还是供应溶液质量，并注明浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：加入清洗槽的供应状态氢氧化钠产品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 酸洗用 32% 盐酸溶液（`finishing_hydrochloric_acid_32`）

仅当供应产品为用于酸洗的 32% 盐酸溶液时纳入本行。不同浓度或不同酸必须以各自具体流表示，不得使用本行 UUID。

- 选定流：盐酸（32%） `9818ab8d-cd3a-4f22-ad22-f70cc3d72f37`
- 流属性/单位：Mass / kg
- 数量规则：加入酸洗槽的供应状态 32% 盐酸溶液实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 表面精整用电（`finishing_electricity`）

纳入槽液加热、泵、通风和直接相关表面精整设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：实测表面精整用电量，并分配至精整后合格零件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

##### 废物流

不规定废物投入。

##### 基本流

不规定基本流投入。

#### 输出

##### 产品流

###### 表面精整后的手工具零件（`surface_finished_hand_tool_part`）

记录从表面精整转移至装配的内部质量。

- 选定流：半成品金属手工具毛坯及零件 `4427986b-3cc0-4879-99a1-7d5c2e7075a0`
- 流属性/单位：Mass / kg
- 数量规则：表面精整后转移的合格实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_mass`
- 来源：

##### 废物流

###### 水系金属表面精整废水（`metal_finishing_wastewater`）

仅在定义了一致的采集点后，记录清洗、酸洗和漂洗合并产生的水系排放。不得将单独管理的处理污泥或废浓缩槽液并入本废水行。

- 选定流：水系金属表面精整废水
- 流属性/单位：Mass / kg
- 数量规则：送往场内或场外处理的实测排放质量，或使用保留的密度数据将实测体积换算为质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`us-epa-fabricated-metal-products-1995`

##### 基本流

不规定基本流。每项实测直接排放均应作为单独的物种特定基本流增加，不得使用笼统排放行。

### 过程：手柄或握把装配、检验和包装（`assembly_packaging`）

#### 输入

##### 产品流

###### 表面精整后或以其他方式完工的金属手工具零件（`assembly_part_input`）

记录进入最终装配和检验的内部零件质量。

- 选定流：半成品金属手工具毛坯及零件 `4427986b-3cc0-4879-99a1-7d5c2e7075a0`
- 流属性/单位：Mass / kg
- 数量规则：装配过程接收的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_mass`
- 来源：

###### 定尺干燥硬木工具手柄（`hardwood_tool_handle`）

仅对装配有定尺干燥硬木手柄的产品纳入本行。声明木材树种、含水率基准、供应商及上游手柄精整情况。

- 选定流：定尺干燥硬木工具手柄
- 流属性/单位：Mass / kg
- 数量规则：发放至装配的合格硬木手柄实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

###### 注塑手柄或握把用聚丙烯粒料（`polypropylene_granulate`）

仅当聚丙烯粒料在场内加工成手柄或握把时纳入本行。外购注塑手柄应作为自身的外购部件流记录。

- 选定流：聚丙烯粒料（PP） `4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：发放至手柄或握把注塑的聚丙烯粒料实测质量，扣除退回受控库存的材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

###### 装配和包装用电（`assembly_electricity`）

纳入场内手柄或握把加工、装配、检验和包装设备用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：实测装配和包装用电量，并分配至合格净产品输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 瓦楞纸箱（`corrugated_board_box`）

纳入用作产品特定包装的瓦楞纸箱。托盘和实际使用的其他包装组件应作为单独的具体流增加。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：为已包装参考产品发放的瓦楞纸箱实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

##### 废物流

不规定废物投入。

##### 基本流

不规定基本流投入。

#### 输出

##### 产品流

###### 成品手工工具（`finished_hand_tool`）

参考产品输出为检验合格后且加入包装质量前的成品手工工具净质量。

- 选定流：手工工具（包括农业、园艺或林业用的手工工具、手锯、锉刀、钳子及金属切割剪、手用扳手、喷灯及夹钳） `14c9d93f-f86e-4be7-8173-0b5c67c6d704`
- 流属性/单位：Mass / kg
- 数量规则：归一化后严格等于 1 kg 合格成品手工工具净输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每 1 kg 成品手工工具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：
- 来源：`eu-commission-environmental-footprint-2021`

##### 废物流

不规定废物流。每种实际不合格产品、塑料边角料、木材边角料或包装废物均应作为单独的具体废物流增加。

##### 基本流

不规定基本流。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用设备和多功能过程 | 在可行时通过分表计量、生产订单记录、机器工时、槽液处理量或其他能够将投入和产出直接归属于所声明手工工具产品的细分方法避免分配。 | `eu-commission-environmental-footprint-2021` |
| `allocation_physical_relation` | 细分后剩余的共用负荷 | 若无法细分，采用有记录的因果物理关系，如机器工时、处理质量、槽液处理量或炉膛占用能力。证明该关系为何能够代表资源使用或排放。 | `eu-commission-environmental-footprint-2021` |
| `allocation_other_relation` | 不存在可辩护物理关系的多功能过程 | 仅在最后一步采用其他关系（包括经济分配），并记录为何排除细分、系统扩展和物理分配、所用价格与时期，以及结果敏感性。 | `eu-commission-environmental-footprint-2021` |
| `allocation_scrap_and_rework` | 内部返工和外送钢废料 | 内部返工保留在前景质量平衡内，不作为共产品。单独记录外送废料数量和去向；任何再循环信用或负荷均属于已声明研究方法，不得隐含在前景数量中。 | `eu-commission-environmental-footprint-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `forming_machining`; `surface_finishing`; `assembly_packaging` | 外购和领用的材料、化学品、手柄、树脂及包装 | 地磅单、采购或领料记录、配方表、物料清单 | 材料身份；可用时的 UUID；供应商；牌号或配方；浓度；毛重和皮重；领用质量；退回质量；批号；日期；过程和生产订单 | 用经校准秤或供应商质量证据核对采购、领用和退回记录 | kg | 每次接收和领用；按月汇总 | 至少一个具有代表性的连续 12 个月生产期，或完整的较短生产活动期 | 生产所声明产品的全部场址和生产线 | 汇总跨越各过程边界的材料净量，按生产订单分配，再除以合格产品净质量 | 秤校准；供应商规范；批次可追溯性；采购与库存核对 |
| `cp_energy_records` | `forming_machining`; `heat_treatment`; `surface_finishing`; `assembly_packaging` | 外购电力和天然气 | 公用工程总表、分表、账单和机器工时记录 | 表计起止读数；单位；时期；生产线；生产订单；停机时间；分配因子；天然气参考条件；电网和供应商 | 优先使用专用表计；否则将账单与分表核对，并按有记录的方法分配剩余用量 | kWh, MJ, m3 | 连续或每批；按月汇总 | 与产品输出相同的生产期 | 全部纳入生产线及直接相关设备 | 扣除非生产和排除用途，使用已批准物理因子分配共用能耗，转换单位，再除以合格产品净质量 | 表计校准；账单核对；分配工作表；保留的换算记录 |
| `cp_intermediate_mass` | `forming_machining`; `heat_treatment`; `surface_finishing`; `assembly_packaging` | 内部半成品金属手工具毛坯及零件 | 批次流转卡、生产订单和经校准秤记录 | 投入质量；产出质量；不合格品；退回材料；过程阶段；生产订单；时间戳 | 在每次过程转移时称量，或按经核验的单件质量换算数量 | kg | 每批或每个生产订单 | 与产品输出相同的生产期 | 各前景过程之间的全部纳入转移 | 按生产订单汇总各阶段转移；过程质量平衡保留内部转移，汇总外部清单时将其抵消 | 秤校准；批次核对；适用时有记录的件数转质量因子 |
| `cp_waste_mass` | `forming_machining` | 工业后钢废料 | 废物称量单和转移记录 | 废物身份；质量；污染情况；内部返回；去向；日期；生产订单 | 称量每个容器或每批外运废物，并与生产订单期间累积量核对 | kg | 每个容器或每批外运；按月汇总 | 与产品输出相同的生产期 | 全部纳入的切割、成形和机加工区域 | 汇总外送废料并排除内部返回；按有记录的成分或生产记录分配共用容器，再除以合格产品净质量 | 经校准秤；接收方称量单；去向证据；质量平衡核对 |
| `cp_wastewater_records` | `surface_finishing` | 水系金属表面精整废水 | 流量计、槽罐转移和实验室记录 | 排放体积或质量；密度；采样点；日期；批次；处理去向；pH；相关金属和污染物 | 在所定义采集点计量排放；若未实测质量，使用保留的密度将体积换算为质量 | kg | 连续或每次排放；以有代表性的频率分析成分 | 与产品输出相同的生产期 | 全部纳入的水系清洗、酸洗和漂洗线 | 在一致边界汇总排放质量，排除单独管理的浓缩槽液和污泥，再除以成品质量 | 流量计校准；采样计划；实验室结果；处理转移记录 |
| `cp_direct_combustion_emissions` | `heat_treatment` | 直接化石二氧化碳 | 燃料表计、供应商组分、碳分析、氧化记录或烟气测量 | 燃料数量；参考条件；碳含量；化石碳比例；氧化率；实测 CO2；时期；炉号；生产订单 | 使用经校准直接测量，或仅依据所采集燃料特定数据进行透明碳平衡 | kg CO2 | 每个生产活动期或连续；按月汇总 | 与产品输出相同的生产期 | 全部场内天然气热处理排放源 | 汇总直接化石 CO2，并按实测炉膛处理量或其他因果物理因子分配；排除上游供应排放 | 表计校准；供应商证书或实验室分析；计算工作表；可用时的烟气测试 |
| `cp_product_output` | `assembly_packaging` | 合格成品手工工具净质量 | 产量、产品重量、质量放行和包装记录 | 产品型号；合格数量；单件净质量；总净质量；不合格品；质量状态；包装质量；日期；场址 | 包装前称量净产品，或用合格数量乘以经核验的型号特定单件净质量 | kg | 每批或每个生产订单；按月汇总 | 与全部投入和产出相同的时期 | 已声明数据集内全部场址和生产线 | 汇总合格产品净质量；以其为分母并归一化至严格 1 kg | 经校准秤；质量放行；型号特定质量核验；与销售或入库记录核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_normalization` | 全部清单行 | 归一化数量 = 同期归属于所声明产品的行数量 ÷ 合格成品净质量 | 可归属的行数量；合格成品手工工具净质量 | 每 1 kg 成品手工工具净质量的行数量 |  |
| `calculation_electricity_conversion` | 以 kWh 记录的电力 | 电力（MJ）= 实测电力（kWh）× 3.6 MJ/kWh | 实测 kWh | 电力 MJ |  |
| `calculation_volume_to_mass` | 按体积计量的工艺用水或废水 | 质量 = 实测体积 × 实测或已声明条件下的密度 | 体积；密度；适用时的温度 | 水或废水 kg |  |
| `calculation_direct_fossil_co2` | 无法直接测量的场内天然气燃烧 | 根据所采集燃料量、燃料特定碳含量、化石碳比例和氧化率计算化石 CO2；保留全部输入记录和单位 | 实测天然气；参考条件；碳含量；化石碳比例；氧化率 | 直接化石 CO2 kg |  |
| `calculation_product_group_weighting` | 覆盖多个手工工具型号的数据集 | 使用数据期内各型号实际净产量汇总其可归属清单；不得使用非加权平均 | 型号级清单；型号级净产量 | 按生产质量加权的产品组清单 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品及全部产品投入 | 核验产品型号、CPC 边界、材料或化学品身份、供应状态和 UUID 语义；不得为不同浓度、坯料形态、聚合物、废物或产品状态复用 UUID。 | 产品规范、供应商文件、直接读取身份审核和物料清单 |
| `dq_temporal` | 全部前景记录 | 使用共同的代表性时期，通常为连续 12 个月；说明较短生产活动期、异常停机以及季节或产品组合影响。 | 带日期的表计、生产订单、账单和代表性说明 |
| `dq_completeness` | 每个纳入过程 | 核对材料投入、内部转移、净产品、废料、废水和其他废物。将每项未列出的实际材料、能源、废物或直接排放作为一个具体原子交换增加。 | 过程质量平衡、路线检查表、废物联单和核对记录 |
| `dq_measurement` | 实测和换算数量 | 使用经校准仪器或有记录的供应商资料，并保留原始单位、换算、分配因子及不确定性或数据缺口说明。 | 校准证书、账单、表计日志和计算工作簿 |
| `dq_geography_technology` | 前景和上游数据集 | 尽可能匹配制造地域、电网、燃料供应、材料技术和处理路线；披露实质性不匹配。 | 数据集元数据和代表性评估 |
| `dq_route_condition` | 条件过程和条件流 | 根据已声明物料清单、工艺路线和场址记录证明适用或不适用。 | 路线表、工艺流程图、作业指导书和产品规范 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | 参考产品 | 确认输出严格等于 1 kg 合格成品手工工具净质量，参考 UUID 未改变，包装不计入净质量，且全部必需限定信息均已提供。 | `un-cpc-3-0-structure-2025` |
| `validation_process_route` | 过程图和清单 | 所声明产品实际发生的每个过程都必须有对应清单章节和记录；省略的每个条件过程都必须有不适用证明。 | `us-epa-metal-products-machinery-2003` |
| `validation_atomic_flows` | 清单交换 | 确认每一行仅表示一个物理、化学、废物、能源或基本流交换。拒绝集合标签、合并公用工程、未指定包装、合并废物和笼统排放。 |  |
| `validation_mass_balance` | 每个前景过程及汇总系统 | 核对投入质量、内部转移、合格输出、不合格品、废料、废水和库存变化；调查并披露无法解释的不平衡，不得强制闭合。 | `us-epa-fabricated-metal-products-1995` |
| `validation_energy_boundary` | 电力、天然气和直接二氧化碳 | 确认单位和参考条件，防止共用表计重复计数，并在基本流行中仅纳入场内直接化石 CO2。 |  |
| `validation_chemical_state` | 氢氧化钠和盐酸 | 确认供应状态质量和浓度。本 PCR 中盐酸 UUID 仅适用于明确的 32% 溶液行。 |  |
| `validation_unresolved_identity` | UUID 为空的行 | 将金属表面精整废水和硬木手柄 UUID 视为未解决；不得以蒸发冷凝水、原木、托盘或其他代理替代。 |  |
| `validation_source_and_allocation` | 证据和共用负荷 | 确认来源引用、采集记录、分配层级、分配因子和敏感性披露。 | `eu-commission-environmental-footprint-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 产品特定或按实际生产质量加权的前景制造数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 当地域、技术、产品状态、功能和数据期具有代表性时，用于所声明手工工具产品或产品组的从摇篮到工厂大门或更广范围 LCA 模型 |
| excluded_use | 未增加功能等效基准时直接比较功能、质量等级、额定能力或使用寿命不同的工具；动力工具；可互换机床或手工工具刀具；无条件限定的全球平均数据 |
| required_metadata | 规范 PCR id；产品型号或加权产品组；参考净质量；全部必需限定信息；制造场址和地域；数据期；工艺路线适用性；外购和外包作业；上游数据集选择；分配方法；处理去向；未解决 UUID；新增下游阶段 |
| required_quality_disclosure | 前景覆盖范围和代表性；表计和秤质量；材料与能源核对；质量平衡缺口；分配因子和敏感性；供应商数据质量；UUID 审核状态；范围证据缺口；偏离和排除 |
| update_trigger | 产品设计、合金或手柄组成、制造路线、热处理、表面精整、能源供应、场址地域、包装、分配方法、处理路线、供应商技术发生实质变化，或数据超出项目接受的代表性时期 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，CPC 3.0 版结构，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-05） | 官方英文产品类别身份及与相邻 CPC 子类的排除边界 |
| `un-cpc-1-1-chinese` | `official_guidance` | 联合国统计司，《产品总分类》1.1 版中文本，M 系列第 77 号，1.1 版，https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf（检索日期：2026-09-05） | 未变更子类 42921 的专业中文术语 |
| `us-epa-fabricated-metal-products-1995` | `official_guidance` | 美国环境保护署，《金属制品制造业概况》，合规办公室行业资料项目，1995 年 9 月，https://archive.epa.gov/compliance/resources/publications/assistance/sectors/web/pdf/fabmetsn.pdf（检索日期：2026-09-05） | 制造、表面准备和精整过程分解；材料、水、化学品、废料、废水和直接排放清单候选 |
| `us-epa-metal-products-machinery-2003` | `official_guidance` | 美国环境保护署，《金属产品与机械点源类别最终排放限制指南和标准制定文件》，2003 年，https://19january2017snapshot.epa.gov/sites/production/files/2015-11/documents/mp-m_dd_2003.pdf（检索日期：2026-09-05） | 单元操作顺序、五金产品路线差异、清洗、精整和装配边界决策 |
| `eu-commission-environmental-footprint-2021` | `official_guidance` | 欧盟委员会 2021 年 12 月 15 日关于使用环境足迹方法的建议（EU）2021/2279，https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng（检索日期：2026-09-05） | 多功能过程和分配层级、数据采集与质量原则 |
