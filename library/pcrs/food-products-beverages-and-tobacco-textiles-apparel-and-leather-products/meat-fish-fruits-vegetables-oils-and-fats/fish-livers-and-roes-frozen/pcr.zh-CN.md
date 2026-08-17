---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-livers-and-roes-frozen
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冷冻鱼肝和鱼卵

## 1. 范围与适用性

本 PCR 适用于食用鱼肝、鱼卵或明确声明的两者混合物的前景数据包；产品经过适用的分离、清洗或分级、冷冻、可选挂冰衣、包装，并交付至生产方冷冻库门。只要声明纳入的操作和起始条件，本 PCR 同时适用于岸上和船上加工。

本 PCR 不适用于鲜或冷藏鱼肝鱼卵；干制、烟熏、盐渍或盐水渍产品；熟制、罐藏、发酵、调味或其他预制产品；非鱼类水生动物内脏；非食用等级；以及仅以鱼肝或鱼卵作为配料的制品。除非研究明确扩展边界，捕捞或养殖、上岸以及来料鱼或单独采购内脏的上游生产应由关联上游数据集表示，不在前景过程中重复创建。

前景数据包应声明鱼种或鱼种组、鱼肝/鱼卵/混合状态、整鱼或已分离内脏的起始条件、已知时的野生捕捞或养殖来源、产品形态、冷冻技术、冰衣比例、包装形式、贮藏时长和温度、场址或船舶、地理范围以及报告期。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-livers-and-roes-frozen |
| classification_refs | CPC 3.0：21226，Fish livers and roes, frozen（exact） |
| covered_products | 以冷冻方式保存的食用鱼肝、鱼卵或明确声明的鱼肝鱼卵混合物，包括块冻、盘冻或单体速冻，以及有冰衣或无冰衣产品 |
| excluded_products | 鲜或冷藏；干制、烟熏、盐渍或盐水渍；熟制、罐藏、发酵、调味或其他预制形态；非鱼类产品；非食用等级；含其他配料的制品 |
| representative_product | 生产设施冷冻库门处的已包装食用冷冻鱼肝或鱼卵 |
| production_route | 接收整鱼或已分离食用内脏；适用时分离内脏；修整、清洗和分级；冷冻和可选挂冰衣；包装；冷冻贮藏和出库 |
| market_state | 生产设施门处的冷冻产品，以不含包装且扣除单独声明冰衣的净产品质量计 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 经冷冻保存的食用鱼肝、鱼卵或明确声明的混合物 |
| How much | 1 kg 食用冷冻产品净质量 |
| How well | 符合声明的鱼种、内脏类型、产品形态、冷冻路线、冰衣比例、包装形式和食品安全控制 |
| How long or cycle | 一个生产批次完成后，在生产设施冷冻库门处；声明贮藏时长 |
| reference_flow_link | 以净产品质量计的 1 kg 所选参考产品流实现功能单位 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 冷冻产品净质量 |
| 参考产品流 | Fish livers and roes, frozen `4b21f535-008c-42a3-a6b7-04565095a86a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 鱼种或鱼种组；鱼肝、鱼卵或混合物；整鱼或已分离内脏的起始条件；已知时的野生捕捞或养殖来源；产品形态；冷冻技术；冰衣比例；净质量约定；包装形式；贮藏时长和温度；设施或船舶；地理范围；报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告恰好 1 kg 食用冷冻产品净质量；排除一级、二级和运输包装，并从称量毛质量中扣除单独声明的冰衣。 |
| `mass_input_output` | 鱼类物料、食用共产品、残余物、废水、冰衣和包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 归一化前按生产批次记录实测质量；湿基、沥干、毛质量和净质量约定存在差异时均须声明。 |
| `water_mass_conversion` | 计量用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先使用实测质量；记录体积时保留实测体积、密度假设、具有实质影响时的温度以及换算过程。 |
| `energy_reporting` | 电力和热能 | Energy | kWh 和 MJ | 保留计量的能源载体和单位，使用声明的因子换算，不得把电力、燃料和回收能源合并为一个未区分总量。 |
| `temperature_reporting` | 冷冻和冷冻贮藏 | Temperature | °C | 在可获得时记录热稳定后产品热中心温度及冷库温度记录；不得仅从设备设定值推断产品温度。 |
| `glaze_accounting` | 挂冰衣产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 单独测量或计算冰衣并披露方法；冰衣不属于 1 kg 食用净参考量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在前景设施或船舶接收的整鱼、去内脏物流或已分离食用鱼肝/鱼卵，并声明供应方、来源、保藏条件、来料质量和经济状态 |
| starting_condition_role | 用于确定纳入的分离工作、上游数据集关联和共产品分配点的前景入口条件 |
| product_classification_scope | CPC 3.0 代码 21226 范围内的食用冷冻鱼肝和鱼卵；分类仅为范围参考，不能替代语义产品声明 |
| recursive_input_rule | 已属于本类别的来料冷冻鱼肝或鱼卵作为具有自身数据集的上游产品投入记录，不递归展开为相同前景操作 |
| upstream_dataset_requirement | 关联在鱼种、来源、生产系统、保藏、地理和时期方面具有代表性的整鱼或已分离内脏上游数据集；披露代理使用及已应用的上游分配 |
| disclosure | 声明起始条件、排除的上游阶段、船上或岸上加工、内脏回收路线、冷冻和挂冰衣路线、贮藏时长、截断、共产品、废物处理、分配方法和所有代理数据集 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_start_and_end` | 前景边界 | 从声明鱼类物料的实物接收开始，到包装冷冻产品离开生产方冷冻库结束；鱼类上游生产和下游配送使用独立关联数据集。 | `unsd-cpc-3-0-21226`; `eu-pef-2021-2279` |
| `sb_required_operations` | 纳入的操作 | 纳入接收和暂存、接收整鱼或去内脏物流时的分离、修整、实际进行的清洗或分级、冷冻、可选挂冰衣、包装、冷冻贮藏、内部搬运、清洁卫生、废水处理、直接排放以及生产残余物处理。 | `codex-cxc-52-2003` |
| `sb_cold_chain` | 冷冻和贮藏 | 对实际冷冻操作和冷冻贮藏建模；验证热稳定后产品热中心达到 -18 °C 或更低，并且冷冻贮藏保持 -18 °C，除非适用更严格的声明规范。 | `codex-cxc-52-2003` |
| `sb_recursive_product` | 同类别投入 | 将采购的冷冻鱼肝或鱼卵表示为关联上游产品投入，防止递归重建其生产阶段。 |  |
| `sb_exclusions` | 产品转化 | 除非研究明确扩展并标注边界，否则排除盐渍、烟熏、干制、盐水渍、熟制、罐藏、发酵、调味以及下游零售或消费者解冻。 | `unsd-cpc-3-0-21226` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p01_receipt_separation_cleaning` | 接收、内脏分离、修整、清洗和分级 | required | 已接收分离食用内脏时分离量为零；所有实际处理和清洁卫生仍纳入 | 将各单一来料转化为清洁鱼肝或鱼卵及计量共产品或废物 | kg 清洁鱼肝或鱼卵输出 |
| `p02_freezing_glazing` | 冷冻和可选挂冰衣 | required | 仅在声明无冰衣产品时挂冰衣投入和输出质量为零 | 生产满足声明热学和冰衣规范的冷冻鱼肝或鱼卵 | kg 包装前冷冻产品净质量 |
| `p03_packaging_storage_dispatch` | 包装、冷冻贮藏和出库 | required | 包装组件和贮藏时长遵循所代表产品批次 | 在冷冻库门处交付已包装参考产品 | 1 kg 冷冻产品净质量参考流 |

### 过程：接收、内脏分离、修整、清洗和分级（`p01_receipt_separation_cleaning`）

#### 输入

##### 产品流

###### 冷藏整鱼投入（`incoming_whole_fish_chilled`）

仅当冷藏整鱼投入跨越前景接收边界时记录，并与其他起始物料分别计量。

- 选定流： Whole fish, chilled
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按物料状态和供应方计量接收合格质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1 kg 冷冻参考产品净质量
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mass_lot_records`
- 来源： `eu-pef-2021-2279`
- 数量范围：暂定来料物料 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 冷冻参考产品净质量；仅适用于适用且非零的起始物料行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷藏鱼肝投入（`incoming_fish_liver_chilled`）

仅当冷藏鱼肝投入跨越前景接收边界时记录，并与其他起始物料分别计量。

- 选定流： Fish liver, chilled
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按物料状态和供应方计量接收合格质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1 kg 冷冻参考产品净质量
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mass_lot_records`
- 来源： `eu-pef-2021-2279`
- 数量范围：暂定来料物料 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 冷冻参考产品净质量；仅适用于适用且非零的起始物料行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷藏鱼卵投入（`incoming_fish_roe_chilled`）

仅当冷藏鱼卵投入跨越前景接收边界时记录，并与其他起始物料分别计量。

- 选定流： Fish roe, chilled
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按物料状态和供应方计量接收合格质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1 kg 冷冻参考产品净质量
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mass_lot_records`
- 来源： `eu-pef-2021-2279`
- 数量范围：暂定来料物料 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 冷冻参考产品净质量；仅适用于适用且非零的起始物料行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 工艺用水（`process_water`）

记录用于清洗、漂洗、可归属清洁卫生及相关制备的适用工艺用水。

- 选定流： Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 计量或由罐体体积得出的归属于生产批次的用水
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 清洁鱼肝或鱼卵输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_utility_records`
- 来源： `codex-cxc-52-2003`
- 数量范围：可替换用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 清洁鱼肝或鱼卵输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 处理用冰（`handling_ice`）

记录接收和清洗期间用于维持来料状态的外购或现场制冰。

- 选定流： Ice `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 发放冰量扣除有记录的回收量；现场制冰能耗另行记录
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 清洁鱼肝或鱼卵输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_utility_records`
- 来源： `codex-cxc-52-2003`
- 数量范围：可替换处理用冰 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 清洁鱼肝或鱼卵输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分离用低压电（`separation_electricity_low_voltage`）

仅当 Alternating current, low-voltage grid supply 跨越本过程边界时适用；同一计量电量不得在不同电压行重复记录。

- 选定流： Alternating current, low-voltage grid supply
- 流属性/单位： Energy / kWh
- 数量规则： 分表实测或有记录的设备负荷计算
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 清洁鱼肝或鱼卵输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_energy_records`
- 来源：
- 数量范围：可替换分离能耗 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kWh
  - 基准：每 1 kg 清洁鱼肝或鱼卵输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分离用中压电（`separation_electricity_medium_voltage`）

仅当 Alternating current, medium-voltage grid supply 跨越本过程边界时适用；同一计量电量不得在不同电压行重复记录。

- 选定流： Alternating current, medium-voltage grid supply
- 流属性/单位： Energy / kWh
- 数量规则： 分表实测或有记录的设备负荷计算
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 清洁鱼肝或鱼卵输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_energy_records`
- 来源：
- 数量范围：可替换分离能耗 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kWh
  - 基准：每 1 kg 清洁鱼肝或鱼卵输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 清洁鱼肝中间产品（`cleaned_fish_liver_intermediate`）

将清洁鱼肝中间产品作为单一器官特定转移流记录，并与相邻过程记录核对。

- 选定流： Cleaned edible fish liver
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 计量转入冷冻的食用鱼肝净质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每生产批次
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mass_lot_records`
- 来源：

###### 清洁鱼卵中间产品（`cleaned_fish_roe_intermediate`）

将清洁鱼卵中间产品作为单一器官特定转移流记录，并与相邻过程记录核对。

- 选定流： Cleaned edible fish roe
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 计量转入冷冻的食用鱼卵净质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每生产批次
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mass_lot_records`
- 来源：

###### 食用鱼肉共产品（`fish_meat_coproduct`）

记录同一分离操作中作为有市场用途共产品回收的食用鱼肉。

- 选定流： Edible fish meat
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按去向计量共产品质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每生产批次
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mass_lot_records`
- 来源： `eu-pef-2021-2279`

##### 废物流

###### 鱼组织修整废物（`fish_tissue_trimming_waste`）

将鱼组织修整废物与其他废物流分别记录，并保留处置记录。

- 选定流： Fish-tissue trimming waste
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按去向计量修整废物质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 清洁鱼肝或鱼卵输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mass_lot_records`
- 来源：
- 数量范围：可替换残余物 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 清洁鱼肝或鱼卵输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 不合格鱼肝废物（`rejected_fish_liver_waste`）

将不合格鱼肝废物与其他废物流分别记录，并保留处置记录。

- 选定流： Rejected fish liver
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按去向计量不合格鱼肝质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 清洁鱼肝输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mass_lot_records`
- 来源：
- 数量范围：可替换残余物 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 清洁鱼肝或鱼卵输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 不合格鱼卵废物（`rejected_fish_roe_waste`）

将不合格鱼卵废物与其他废物流分别记录，并保留处置记录。

- 选定流： Rejected fish roe
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按去向计量不合格鱼卵质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 清洁鱼卵输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mass_lot_records`
- 来源：
- 数量范围：可替换残余物 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 清洁鱼肝或鱼卵输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 送处理废水（`process_wastewater`）

记录送处理的鱼类加工废水，不与固体残余物合并。

- 选定流： Fish-processing wastewater
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按处理路线计量排放或通过水平衡计算
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 清洁鱼肝或鱼卵输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_water_wastewater_records`
- 来源： `codex-cxc-52-2003`
- 数量范围：可替换废水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 清洁鱼肝或鱼卵输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流


### 过程：冷冻和可选挂冰衣（`p02_freezing_glazing`）

#### 输入

##### 产品流

###### 进入冷冻的清洁鱼肝（`cleaned_fish_liver_to_freezing`）

将进入冷冻的清洁鱼肝作为单一器官特定转移流记录，并与相邻过程记录核对。

- 选定流： Cleaned edible fish liver
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 计量进入冷冻的鱼肝转移质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1 kg 包装前冷冻产品净质量
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mass_lot_records`
- 来源：

###### 进入冷冻的清洁鱼卵（`cleaned_fish_roe_to_freezing`）

将进入冷冻的清洁鱼卵作为单一器官特定转移流记录，并与相邻过程记录核对。

- 选定流： Cleaned edible fish roe
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 计量进入冷冻的鱼卵转移质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1 kg 包装前冷冻产品净质量
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mass_lot_records`
- 来源：

###### 冷冻用低压电（`freezing_electricity_low_voltage`）

仅当 Alternating current, low-voltage grid supply 跨越本过程边界时适用；同一计量电量不得在不同电压行重复记录。

- 选定流： Alternating current, low-voltage grid supply
- 流属性/单位： Energy / kWh
- 数量规则： 分表实测或有记录的设备负荷和运行时间计算
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1 kg 包装前冷冻产品净质量
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_energy_records`
- 来源： `codex-cxc-52-2003`
- 数量范围：可替换冷冻能耗 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：5
  - 单位：kWh
  - 基准：每 1 kg 包装前冷冻产品净质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷冻用中压电（`freezing_electricity_medium_voltage`）

仅当 Alternating current, medium-voltage grid supply 跨越本过程边界时适用；同一计量电量不得在不同电压行重复记录。

- 选定流： Alternating current, medium-voltage grid supply
- 流属性/单位： Energy / kWh
- 数量规则： 分表实测或有记录的设备负荷和运行时间计算
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1 kg 包装前冷冻产品净质量
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_energy_records`
- 来源： `codex-cxc-52-2003`
- 数量范围：可替换冷冻能耗 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：5
  - 单位：kWh
  - 基准：每 1 kg 包装前冷冻产品净质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 挂冰衣用水（`glazing_water`）

记录用于挂冰衣的清洁水，并将保留冰衣与喷淋或浸渍损失分别核算。

- 选定流： Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 计量用水以及实测或计算的保留冰衣质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1 kg 不含冰衣的冷冻产品净质量
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_glaze_temperature_records`
- 来源： `codex-cxc-52-2003`
- 数量范围：可替换保留冰衣 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg
  - 基准：每 1 kg 不含冰衣的冷冻产品净质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷冻设备 R134a 制冷剂补充（`freezer_r134a_makeup`）

仅适用于维修记录识别为 Refrigerant, R134a 的设备；不得与其他制冷剂补充量合并。

- 选定流： Refrigerant, R134a `047bf9fb-8b5a-4070-8927-8df04e7241b3`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 依据维护和库存记录分配的补充量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1 kg 包装前冷冻产品净质量
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_refrigerant_records`
- 来源：
- 数量范围：可替换冷冻设备制冷剂 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg
  - 基准：每 1 kg 包装前冷冻产品净质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷冻设备 R404A 制冷剂补充（`freezer_r404a_makeup`）

仅适用于维修记录识别为 Refrigerant R404A 的设备；不得与其他制冷剂补充量合并。

- 选定流： Refrigerant R404A `76513c71-a148-484e-865f-2ab54afb4331`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 依据维护和库存记录分配的补充量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1 kg 包装前冷冻产品净质量
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_refrigerant_records`
- 来源：
- 数量范围：可替换冷冻设备制冷剂 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg
  - 基准：每 1 kg 包装前冷冻产品净质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装前冷冻鱼肝（`frozen_fish_liver_intermediate`）

将包装前冷冻鱼肝作为单一器官特定转移流记录，并与相邻过程记录核对。

- 选定流： Frozen fish liver intermediate
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 冷冻鱼肝毛质量减去保留冰衣
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每冷冻批次
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_glaze_temperature_records`
- 来源： `codex-cxc-52-2003`

###### 包装前冷冻鱼卵（`frozen_fish_roe_intermediate`）

将包装前冷冻鱼卵作为单一器官特定转移流记录，并与相邻过程记录核对。

- 选定流： Frozen fish roe intermediate
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 冷冻鱼卵毛质量减去保留冰衣
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每冷冻批次
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_glaze_temperature_records`
- 来源： `codex-cxc-52-2003`

##### 废物流

###### 不合格冷冻鱼肝（`freezing_rejected_fish_liver`）

将不合格冷冻鱼肝与其他废物流分别记录，并保留处置记录。

- 选定流： Rejected frozen fish liver
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按去向计量不合格或散失冷冻鱼肝质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 包装前冷冻产品净质量
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mass_lot_records`
- 来源：

###### 不合格冷冻鱼卵（`freezing_rejected_fish_roe`）

将不合格冷冻鱼卵与其他废物流分别记录，并保留处置记录。

- 选定流： Rejected frozen fish roe
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按去向计量不合格或散失冷冻鱼卵质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 包装前冷冻产品净质量
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mass_lot_records`
- 来源：

###### 挂冰衣废水（`glazing_wastewater`）

将挂冰衣废水与其他废物流分别记录，并保留处置记录。

- 选定流： Glazing wastewater
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按去向计量挂冰衣系统废水质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 包装前冷冻产品净质量
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mass_lot_records`
- 来源：

##### 基本流

###### 冷冻设备 R134a 排放（`freezer_r134a_emission`）

依据物质特定制冷剂平衡计算 HFC-134a to air，且仅对匹配的系统记录。

- 选定流： HFC-134a to air
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 分配至所代表操作的制冷剂质量平衡损失
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1 kg 包装前冷冻产品净质量
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_refrigerant_records`
- 来源：

###### 冷冻设备 R404A 排放（`freezer_r404a_emission`）

依据物质特定制冷剂平衡计算 Refrigerant R404A to air，且仅对匹配的系统记录。

- 选定流： Refrigerant R404A to air
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 分配至所代表操作的制冷剂质量平衡损失
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1 kg 包装前冷冻产品净质量
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_refrigerant_records`
- 来源：


### 过程：包装、冷冻贮藏和出库（`p03_packaging_storage_dispatch`）

#### 输入

##### 产品流

###### 进入包装的冷冻鱼肝（`frozen_fish_liver_to_packaging`）

将进入包装的冷冻鱼肝作为单一器官特定转移流记录，并与相邻过程记录核对。

- 选定流： Frozen fish liver intermediate
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 计量进入包装的鱼肝转移质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1 kg 参考产品净质量
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mass_lot_records`
- 来源：

###### 进入包装的冷冻鱼卵（`frozen_fish_roe_to_packaging`）

将进入包装的冷冻鱼卵作为单一器官特定转移流记录，并与相邻过程记录核对。

- 选定流： Frozen fish roe intermediate
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 计量进入包装的鱼卵转移质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1 kg 参考产品净质量
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mass_lot_records`
- 来源：

###### 聚乙烯袋包装（`packaging_polyethylene_bag`）

将 Polyethylene bag 作为单一包装组件记录，并核对发放量、退回量和不合格量。

- 选定流： Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 组件发放质量扣除有记录退回量，再除以合格产品净产出
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1 kg 参考产品净质量
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_packaging_records`
- 来源： `eu-pef-2021-2279`
- 数量范围：可替换包装质量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.5
  - 单位：kg
  - 基准：每 1 kg 参考产品净质量；适用于对应组件且不得重复计算同一发放量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 瓦楞纸板包装（`packaging_corrugated_cardboard`）

将 Corrugated cardboard 作为单一包装组件记录，并核对发放量、退回量和不合格量。

- 选定流： Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 组件发放质量扣除有记录退回量，再除以合格产品净产出
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1 kg 参考产品净质量
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_packaging_records`
- 来源： `eu-pef-2021-2279`
- 数量范围：可替换包装质量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.5
  - 单位：kg
  - 基准：每 1 kg 参考产品净质量；适用于对应组件且不得重复计算同一发放量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装和冷冻贮藏用低压电（`storage_electricity_low_voltage`）

仅当 Alternating current, low-voltage grid supply 跨越本过程边界时适用；同一计量电量不得在不同电压行重复记录。

- 选定流： Alternating current, low-voltage grid supply
- 流属性/单位： Energy / kWh
- 数量规则： 实测用电或有记录的包装线和冷库分配计算
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 冷冻产品净质量·日的声明贮藏服务
- 基准类型： 贮藏时长（`storage_duration`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_energy_records`
- 来源： `codex-cxc-52-2003`
- 数量范围：可替换冷冻贮藏能耗 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：2
  - 单位：kWh/(kg day)
  - 基准：每 kg 冷冻产品净质量·日
  - 基准类型：贮藏时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装和冷冻贮藏用中压电（`storage_electricity_medium_voltage`）

仅当 Alternating current, medium-voltage grid supply 跨越本过程边界时适用；同一计量电量不得在不同电压行重复记录。

- 选定流： Alternating current, medium-voltage grid supply
- 流属性/单位： Energy / kWh
- 数量规则： 实测用电或有记录的包装线和冷库分配计算
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 冷冻产品净质量·日的声明贮藏服务
- 基准类型： 贮藏时长（`storage_duration`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_energy_records`
- 来源： `codex-cxc-52-2003`
- 数量范围：可替换冷冻贮藏能耗 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：2
  - 单位：kWh/(kg day)
  - 基准：每 kg 冷冻产品净质量·日
  - 基准类型：贮藏时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷库 R134a 制冷剂补充（`cold_store_r134a_makeup`）

仅适用于维修记录识别为 Refrigerant, R134a 的设备；不得与其他制冷剂补充量合并。

- 选定流： Refrigerant, R134a `047bf9fb-8b5a-4070-8927-8df04e7241b3`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 依据维护和库存记录分配的补充量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 冷冻产品净质量·日的声明贮藏服务
- 基准类型： 贮藏时长（`storage_duration`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_refrigerant_records`
- 来源：
- 数量范围：可替换冷库制冷剂 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg
  - 基准：每 1 kg 参考产品净质量在声明贮藏时长内
  - 基准类型：贮藏时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷库 R404A 制冷剂补充（`cold_store_r404a_makeup`）

仅适用于维修记录识别为 Refrigerant, R404A 的设备；不得与其他制冷剂补充量合并。

- 选定流： Refrigerant, R404A `33db0143-ba65-4036-a57b-e32dcdecb779`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 依据维护和库存记录分配的补充量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 冷冻产品净质量·日的声明贮藏服务
- 基准类型： 贮藏时长（`storage_duration`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_refrigerant_records`
- 来源：
- 数量范围：可替换冷库制冷剂 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg
  - 基准：每 1 kg 参考产品净质量在声明贮藏时长内
  - 基准类型：贮藏时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已包装冷冻鱼肝和鱼卵参考产品（`reference_frozen_product`）

本行为冷冻库门处的声明参考流；食用产品净质量不含包装和冰衣。

- 选定流： Fish livers and roes, frozen `4b21f535-008c-42a3-a6b7-04565095a86a`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 恰好 1 kg 食用冷冻产品净质量
- 数值来源模式： 固定值（`fixed_value`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： PCR 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 身份引用（`identity_reference`）
- 来源： `unsd-cpc-3-0-21226`

##### 废物流

###### 聚乙烯袋包装废料（`polyethylene_packaging_scrap`）

将聚乙烯袋包装废料与其他废物流分别记录，并保留处置记录。

- 选定流： Polyethylene-bag packaging scrap
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按去向计量不合格聚乙烯袋质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考产品净质量
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_records`
- 来源：

###### 瓦楞纸板包装废料（`corrugated_cardboard_scrap`）

将瓦楞纸板包装废料与其他废物流分别记录，并保留处置记录。

- 选定流： Corrugated-cardboard packaging scrap
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按去向计量不合格瓦楞纸板质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考产品净质量
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_records`
- 来源：

###### 不可销售冷冻鱼肝（`unsaleable_frozen_fish_liver`）

将不可销售冷冻鱼肝与其他废物流分别记录，并保留处置记录。

- 选定流： Unsaleable frozen fish liver
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按去向计量损失冷冻鱼肝质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考产品净质量
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_records`
- 来源：

###### 不可销售冷冻鱼卵（`unsaleable_frozen_fish_roe`）

将不可销售冷冻鱼卵与其他废物流分别记录，并保留处置记录。

- 选定流： Unsaleable frozen fish roe
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 按去向计量损失冷冻鱼卵质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考产品净质量
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_records`
- 来源：

##### 基本流

###### 冷冻贮藏 R134a 排放（`cold_store_r134a_emission`）

依据物质特定制冷剂平衡计算 HFC-134a to air，且仅对匹配的系统记录。

- 选定流： HFC-134a to air
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 分配至所代表操作的制冷剂质量平衡损失
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 冷冻产品净质量·日的声明贮藏服务
- 基准类型： 贮藏时长（`storage_duration`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_refrigerant_records`
- 来源：

###### 冷冻贮藏 R404A 排放（`cold_store_r404a_emission`）

依据物质特定制冷剂平衡计算 Refrigerant R404A to air，且仅对匹配的系统记录。

- 选定流： Refrigerant R404A to air
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 分配至所代表操作的制冷剂质量平衡损失
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 冷冻产品净质量·日的声明贮藏服务
- 基准类型： 贮藏时长（`storage_duration`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_refrigerant_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid` | 多输出前景操作 | 首先通过过程细分、直接计量、独立批次记录或展开独立运行的生产线来避免分配。 | `eu-pef-2021-2279` |
| `alloc_status` | 整鱼、内脏物流、共产品和残余物 | 记录鱼肝、鱼卵、其他鱼类输出或残余物获得经济功能而成为产品而非废物的物理点和证据；不得仅为转移负荷而改变其状态。 | `eu-pef-2021-2279` |
| `alloc_physical` | 联合分离和共享公用工程 | 无法细分且物理关系能代表因果性时，按有记录的该物理关系分配；仅在提供论证和完整输出质量记录时使用质量分配。 | `eu-pef-2021-2279` |
| `alloc_economic` | 缺少可辩护因果物理关系的联合输出 | 使用分配点的同期经济价值，披露价格、币种、时期、数量、零价值输出处理和不确定性，并测试质量分配敏感性情景。 | `eu-pef-2021-2279` |
| `alloc_upstream` | 关联鱼类生产数据集 | 保留已接受上游数据集中嵌入的分配并予披露；不得在前景模型中再次分配同一上游负荷。 | `eu-pef-2021-2279` |
| `alloc_recycling_treatment` | 包装回收、残余物回收和废物处理 | 一致应用声明的下游处理或回收方法，披露抵扣或替代，并防止产品、废物和避免产品声明之间重复计算。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass_lot_records` | `p01_receipt_separation_cleaning`; `p02_freezing_glazing`; `p03_packaging_storage_dispatch` | 来料、中间产品、产品、共产品、残余物和损失 | 经校准秤单、批次表、库存移动、处置记录 | timestamp; lot_id; species; organ_state; gross_mass; tare_mass; glaze_mass; net_mass; destination; scale_id | 逐批采集、核对转移，且仅汇总兼容产品状态 | kg | 每批次 | 完整代表性生产季，或连续运行声明下至少连续 12 个代表性月 | 每个纳入设施或船舶 | 按批次汇总合格净质量；分开保留不合格品和共产品质量；质量平衡审查后归一化 | 校准记录；签署批次记录；库存核对；去向证据 |
| `cp_utility_records` | `p01_receipt_separation_cleaning`; `p02_freezing_glazing` | 水和冰 | 计量表、罐体日志、采购发票、制冰日志 | meter_start; meter_end; tank_volume; purchased_mass; recovered_mass; allocation_driver; lot_id | 优先分表计量；否则以有记录的运行时间或质量驱动因素分配共享用量 | kg; m3 | 每批次或每日计量区间 | 与产品质量数据相同时期 | 每个纳入公用工程系统和设施 | 必要时以声明密度换算体积；扣除无关用量；归一化至兼容过程输出 | 仪表编号；校准或发票；分配工作表 |
| `cp_energy_records` | all processes | 电力、燃料、热量和外购冷量 | 公用工程分表、发票、设备运行时间、燃料发放记录 | carrier; meter_start; meter_end; quantity; unit; equipment_id; runtime; load; allocation_driver | 各载体分开并优先分表计量；记录共享服务分配 | kWh; MJ; carrier unit | 连续、逐批、每日或发票区间 | 与产品质量数据相同时期，并包含季节性冷库运行 | 每个纳入过程和共享公用工程 | 按载体求和；扣除输出；按披露的驱动因素分配共享服务；归一化至产出或贮藏服务 | 仪表校准；发票；设备日志；计算工作表 |
| `cp_water_wastewater_records` | `p01_receipt_separation_cleaning` | 废水数量和负荷 | 排水计量、采样结果、水平衡、处理发票 | discharge_volume; sampling_time; COD; BOD; total_nitrogen; total_phosphorus; suspended_solids; treatment_route | 按场址受控程序计量排放和采样；仅在无法直接计量时使用已核对水平衡 | kg; m3; mg/L | 计量区间和代表性采样期 | 与用水和产品数据相同时期 | 每个排放点和处理路线 | 按时期配对浓度与体积；归一化前计算负荷 | 实验室报告；计量记录；水平衡闭合；处理凭证 |
| `cp_glaze_temperature_records` | `p02_freezing_glazing`; `p03_packaging_storage_dispatch` | 冰衣、冷冻验收和冷链条件 | 毛/净质量试验、热中心测量、连续温度记录仪 | lot_id; gross_frozen_mass; deglazed_net_mass; product_core_temperature; stabilization_time; store_temperature; timestamp; device_id | 按批次测试代表性单元，并保留连续或定间隔冷库记录 | kg; °C; h | 每批次及连续或规定间隔监测 | 整个代表性生产和贮藏期 | 每个冷冻设备和冷库 | 由配对毛质量与去冰衣净质量计算冰衣比例；汇总温度但不得掩盖偏差 | 经校准秤和温度计/记录仪；纠正措施记录 |
| `cp_packaging_records` | `p03_packaging_storage_dispatch` | 包装投入和不合格品 | 物料清单、发放记录、采购规范、不合格品日志 | material; component_mass; units_used; recycled_content; supplier; rejects; returnable_cycles | 记录各包装组件，并将发放数量与合格产品数量核对 | kg; count | 每次包装运行 | 与产品输出相同时期 | 每条包装线和产品形式 | 由核实组件质量将数量换算为质量；扣除有记录退回量；不合格品单列 | 供应方规范；称量记录；库存核对 |
| `cp_refrigerant_records` | `p02_freezing_glazing`; `p03_packaging_storage_dispatch` | 制冷剂补充、回收和损失 | 制冷剂库存、维修日志、采购和回收凭证 | substance; opening_charge; added_mass; recovered_mass; closing_charge; equipment_id; service_date; cause | 对每个制冷系统进行物质特定质量平衡，共享系统按有记录的服务驱动因素分配 | kg | 每次维修及年度结算 | 与生产和贮藏数据相同时期 | 每个纳入制冷回路 | 损失 = 期初充注 + 补充 - 回收 - 期末充注，并按有记录转移调整；分配时不混合物质 | 技师日志；采购/回收凭证；库存签字确认 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 参考产品和冰衣 | 食用冷冻产品净质量 = 已包装冷冻产品毛质量 - 包装质量 - 单独确定的保留冰衣质量 | gross mass; packaging mass; glaze mass | kg net reference product | `codex-cxc-52-2003` |
| `calc_yield` | 分离和冷冻 | 收率 = 食用冷冻产品净质量 / 合格来料鱼类物料质量；随结果报告起始条件 | net product mass; incoming material mass | kg/kg and percent |  |
| `calc_mass_balance` | 各过程及完整前景系统 | 核对实测质量投入与产品、共产品、废物、废水、保留水或冰、库存变化和有记录蒸发；归一化前调查重大残差 | all mass rows; inventory change | kg residual and percent closure | `eu-pef-2021-2279` |
| `calc_energy_normalization` | 电力、燃料、热量和冷量服务 | 用声明因子换算各载体，并以兼容过程产出或 kg-day 贮藏服务除可归属用量；影响建模前不得合并载体 | carrier quantity; conversion factor; allocation driver; output; storage days | kWh/kg, MJ/kg, or kWh/(kg day) | `eu-pef-2021-2279` |
| `calc_wastewater_load` | 废水 | 污染物负荷 = 配对排放体积 × 实测浓度并进行单位换算；仅在时期对齐后归一化 | discharge volume; concentration; unit factor; output | kg pollutant/kg output |  |
| `calc_refrigerant_loss` | 冷冻和冷藏 | 物质特定损失 = 期初充注 + 补充 - 回收 - 期末充注，并按有记录转移调整；共享系统损失按声明制冷或贮藏服务分配 | charge inventory; additions; recovery; closing charge; allocation driver | kg refrigerant/kg output or kg-day |  |
| `calc_allocation_factor` | 联合产品 | 物理因子 = 某输出所选因果物理量 / 所选物理量总和；经济因子 = 输出收入 / 分配点联合输出总收入 | output quantities; causal property or prices; currency; period | dimensionless allocation factor | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_identity` | 产品和上游鱼类物料 | 声明鱼种或鱼种组、内脏状态、来源系统、起始条件、产品形态、冰衣、包装和设施或船舶；未经分层不得汇总具有实质差异的路线 | 产品规范、供应方记录、批次记录、参考流限定信息 |
| `dqr_temporal` | 前景活动数据 | 采用完整代表性生产季；声明连续运行时至少使用连续 12 个代表性月；披露停产、季节性、跨期库存和替代 | 带日期计量、批次、库存和发票覆盖表 |
| `dqr_technology_geography` | 冷冻、冷库、公用工程和上游数据集 | 匹配实际冷冻设备、制冷系统、电力地理、水处理、废物路线、鱼类来源和生产系统；论证每个代理 | 设备清单、公用工程合同、供应方来源、数据集元数据、代理理由 |
| `dqr_completeness` | 清单 | 纳入所有过程图清单行，或记录实测零值/不适用决定；量化共产品、废物、废水、包装、冷库和制冷剂直接损失 | 过程-清单行完整性矩阵及质量/能量核对 |
| `dqr_measurement` | 质量、公用工程、温度和制冷剂记录 | 保留设备身份、校准或核验状态、采样方法、分配工作表和单位换算；区分实测与估计 | 校准证书、记录仪文件、实验室报告、维修日志、计算 |
| `dqr_food_safety` | 用水、处理、冷冻和贮藏 | 保留水适合预定食品接触用途、采用卫生处理控制、满足热中心冷冻要求和冷冻贮藏温度受控的证据 | `codex-cxc-52-2003`；清洁卫生和 HACCP 记录；温度日志 |
| `dqr_method_disclosure` | 数据集发布 | 披露系统边界、排除项、分配层级、上游数据集分配、数据源、代理、暂定推理估算、不确定性以及对本 PCR 的偏离 | `eu-pef-2021-2279`；模型报告和数据质量评价 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 要求产品流 UUID `4b21f535-008c-42a3-a6b7-04565095a86a`、Mass 属性 UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、质量单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg，以及净食用产品基准下数量 1。 |  |
| `val_scope` | 产品身份 | 拒绝或标记鲜/冷藏、干制、烟熏、盐渍、盐水渍、熟制、罐藏、发酵、调味、非鱼类、非食用或仅以鱼肝/鱼卵作为配料的制品。 | `unsd-cpc-3-0-21226` |
| `val_qualifiers` | 数据集元数据 | 任一必需限定信息缺失，或毛质量、净质量、包装和冰衣约定含糊时，完整性校验失败。 |  |
| `val_freezing` | 冷冻批次 | 要求证据表明热稳定后产品热中心达到 -18 °C 或更低；保留不符合项和纠正措施记录。 | `codex-cxc-52-2003` |
| `val_frozen_storage` | 冷库 | 要求冷冻贮藏温度记录证明维持 -18 °C 或更严格声明规范；标记温度偏差及其处置。 | `codex-cxc-52-2003` |
| `val_process_coverage` | 前景清单 | 要求全部三个过程图行和所有适用清单行；缺失流必须有记录的零值、不适用或有理由排除决定。 |  |
| `val_mass_balance` | 过程和系统质量流 | 要求批次和时期兼容的质量核对；报告闭合残差，并在发布数据集前调查未解决差异。 | `eu-pef-2021-2279` |
| `val_allocation` | 多输出操作 | 要求提供尽可能避免分配的证据；否则要求因果物理或经济基准、完整输出集合、因子总和、分配点和敏感性披露。 | `eu-pef-2021-2279` |
| `val_refrigerant` | 制冷系统 | 制冷剂发生补充或损失时，要求物质身份和质量平衡记录；拒绝身份不明的通用制冷剂排放。 |  |
| `val_reasoned_ranges` | 暂定 QA 范围 | 将超出推理估算范围的数值作为审查发现而非自动替换值；不得用中点替代缺失前景数据，并披露每项保留估计。 |  |
| `val_data_quality` | 发布数据包 | 要求第 8 节定义的时间、技术、地理、完整性、计量、食品安全、代理和不确定性证据；所需记录不可获得时将校验标为不确定。 | `eu-pef-2021-2279`; `codex-cxc-52-2003` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 冷冻食用鱼肝和/或鱼卵在生产设施冷冻库门处的前景生产数据集 |
| downstream_use | `secondary_dataset`；方法学审查和发布后可作为 `background_dataset` |
| allowed_use | 鱼种、内脏状态、来源、起始条件、生产路线、地理、时期、冷冻技术、冰衣、包装、贮藏和分配具有代表性或经透明调整的 LCA 研究 |
| excluded_use | 鲜/冷藏、盐渍、烟熏、干制、盐水渍、熟制、罐藏、发酵、调味、非鱼类、非食用或含其他配料的制品；鱼类供应身份不明；未披露分配；净质量未经核实 |
| required_metadata | PCR id 和版本；参考流 UUID；所有必需限定信息；设施或船舶；地理；报告期；上游数据集关联；过程覆盖；技术；冰衣和包装；贮藏时长和温度；分配；数据源；校验状态 |
| required_quality_disclosure | 前景覆盖、计量和校准证据、质量和能量核对、共产品状态、分配因子和敏感性、上游分配、代理数据集、推理估算、不确定性、排除项、冷链偏差、废水处理和制冷剂身份 |
| update_trigger | 鱼种或来源变化；整鱼或内脏起始条件变化；新的分配或价格基准；过程、冷冻设备、冰衣、包装、冷库、能源组合、制冷剂、处理、供应方、地理或时期发生实质变化；获得新的经审查定量证据；或校验失败 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21226` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 structure, code 21226, “Fish livers and roes, frozen”, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-08-11） | 产品类别边界、纳入的冷冻状态以及相邻保藏状态的排除 |
| `codex-cxc-52-2003` | standard | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, https://www.fao.org/input/download/standards/10273/CXP_052e.pdf（检索于 2026-08-11） | 卫生处理和用水控制、冷冻定义和热中心要求、挂冰衣、冷冻贮藏、温度记录以及食品安全质量证据 |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（参考文献于 2026-08-11 确认；详细方法应用待审） | 系统边界披露、分配层级、清单完整性、数据质量和数据集报告方法 |
