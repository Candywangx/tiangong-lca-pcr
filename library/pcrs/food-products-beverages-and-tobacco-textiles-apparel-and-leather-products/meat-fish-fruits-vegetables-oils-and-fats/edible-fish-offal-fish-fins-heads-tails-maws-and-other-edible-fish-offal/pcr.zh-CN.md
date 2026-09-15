---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-fish-offal-fish-fins-heads-tails-maws-and-other-edible-fish-offal
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 食用鱼副产部位；鱼鳍、鱼头、鱼尾、鱼鳔及其他食用鱼副产部位

## 1. 范围与适用性

本 PCR 适用于供人类食用的鱼副产部位和食用解剖部位（例如鱼鳍、鱼头、鱼尾、鱼鳔以及其他声明的鱼副产部位）的前景生产。范围包括食用部位的分离或接收、分选、实施时的清洗或修整、保藏或稳定化、包装以及在加工厂门口放行。

数据包应识别鱼种或商业鱼种组、解剖部位、食用属性、保藏路线、产品温度状态和包装形式。非食用内脏、鱼粉、提取鱼油、明胶或胶原、宠物食品、饲料、药品、整鱼、鱼片以及熟制复合菜肴不属于本 PCR，除非它们作为明确命名的投入、共产品或废物流跨越前景边界。

食品安全控制是强制性的运行约束，但不能替代特定司法辖区的法规合规。数值型安全限值应取自适用的产品、过程和市场规则，不得从本候选 PCR 的暂定 LCA QA 范围推断。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-fish-offal-fish-fins-heads-tails-maws-and-other-edible-fish-offal |
| classification_refs | CPC 3.0: 21234, exact |
| covered_products | 供人类食用而销售的鱼鳍、鱼头、鱼尾、鱼鳔或其他声明的食用鱼副产部位 |
| excluded_products | 非食用内脏；鱼粉；鱼油；明胶或胶原；饲料、宠物食品、药品或肥料产品；整鱼和鱼片；复合预制餐食 |
| representative_product | 在加工厂门口、具有声明解剖形态和保藏形态的包装食用鱼副产部位 |
| production_route | 分离或接收 -> 分选和制备 -> 路线特定的保藏或稳定化 -> 包装 -> 加工厂门口放行 |
| market_state | 声明的冷藏、冷冻、盐渍、盐水浸渍、干制、烟熏或组合保藏状态，适合人类食用 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 具有声明的解剖部位、鱼种、保藏和包装形式的食用鱼副产部位 |
| How much | 1 kg 产品净质量 |
| How well | 适合人类食用并符合声明的产品规格和适用食品安全要求 |
| How long or cycle | 一次加工厂门口产品产出；无服务期限 |
| reference_flow_link | `rf_edible_fish_offal` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 产品净质量 |
| 参考产品流 | 食用鱼内脏，鱼鳍、鱼头、鱼尾、鱼肚和其他食用鱼内脏 `be045cb1-719b-41b1-9bec-bf27cf50c401` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 鱼种或声明的商业鱼种组；解剖部位；食用属性；保藏路线；适用时的冷藏或冷冻状态和目标温度；适用时的盐渍、盐水浸渍、干制或烟熏处理；净质量基准；包装形式；加工厂门口地理范围和参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流应报告恰好 1 kg 食用产品净质量，不含包装。 |
| `wet_dry_salt_basis` | 产品和材料质量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 声明每项质量是接收态、沥干态、湿基、干基还是含盐基；没有记录转换时不得合并不同基准。 |
| `water_volume_conversion` | 计量用水 | 质量或体积 | kg 或 m3 | 有实测体积时保留体积；将水体积转换为质量时记录密度假设和测量温度。 |
| `energy_carrier_separation` | 电力和燃料 | 能量或适合载能体的质量/体积 | kWh、MJ、kg 或 m3 | 分开记录电力、外购热力和每种燃料；使用能量换算时记录换算因子以及低位或高位热值基准。 |
| `net_packaging_exclusion` | 参考产品和包装 | 质量 | kg | 包装作为清单投入记录，不得计入 1 kg 产品净质量参考量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在上游鱼加工操作中分离或从供应商接收的食用鱼解剖部位，并声明鱼种或商业组、部位、质量基准、温度或保藏状态、来源以及食用处置 |
| starting_condition_role | 食用副产部位制备与保藏的前景投入条件；上游捕捞、养殖、上岸和初级鱼加工负荷由关联上游数据集表示 |
| product_classification_scope | 为人类食用而制备的食用鱼副产部位和所列食用鱼解剖部位；CPC 3.0 代码 21234 是精确分类参考 |
| recursive_input_rule | 已属于本 PCR 类别的外购食用鱼副产部位只作为产品投入记录一次，并关联其上游数据集；不得在接收过程中重新构建其上游制备清单 |
| upstream_dataset_requirement | 需要有代表性的外购鱼或已分离鱼副产部位上游数据集，包括在食用副产部位与主鱼产品分离点采用的分配 |
| disclosure | 声明鱼种或鱼种组、解剖部位、来源、来料条件、保藏路线、食品安全处置、截断、分配、包装、储存时长、地理范围和参考期 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_include_foreground_operations` | 所有前景路线 | 在实际发生时，纳入接收、分选、清洗或修整、路线特定的冷藏/冷冻、盐渍/盐水浸渍、干制、烟熏或其他声明的稳定化、包装、场内储存、公用工程使用、不合格品、废水以及制冷剂或燃烧直接排放。 | `codex-cxc-52-2003` |
| `sb_link_upstream_supply` | 外购鱼或已分离食用副产部位 | 通过有代表性的上游数据集关联上游捕捞或养殖、上岸、运输和初级鱼加工负荷，不得省略。 | `eu-pef-2021` |
| `sb_exclude_downstream_by_default` | 加工厂门口研究 | 除非声明的研究目标扩展边界，否则排除配送、零售、消费者储存、烹饪、食用和报废；披露每项扩展。 | `eu-pef-2021` |
| `sb_food_safety_records` | 产品接触和保藏操作 | 保留证明副产部位持续用于且适合人类食用所需的过程控制和食品安全记录；应用产品和市场特定的法规控制。 | `codex-cxc-52-2003` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receiving_preparation` | 接收、分选、清洗和制备 | required | 始终；实施时记录单项清洗、修整和加冰操作 | 建立食用产品身份和制备中间体质量 | kg 制备后食用鱼副产部位 |
| `preservation_packing` | 保藏、稳定化、储存和包装 | required | 至少一种声明的保藏或稳定化路线；路线特定投入仅在使用时适用 | 生产包装后的加工厂门口参考产品 | 1 kg 食用鱼副产部位净产出 |

### 过程：接收、分选、清洗和制备（`receiving_preparation`）

#### 输入

##### 产品流

###### 外购食用鱼部位（`incoming_edible_parts`）

记录进入前景制备的已分离食用鱼副产部位或鱼部位，包括供应商、鱼种或鱼种组、解剖部位、来料状态和上游数据集关联。

- 选定流：Incoming edible fish offal or fish parts；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：计量进入该批次的接收态质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_balance`
- 数量范围：暂定来料质量 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：5.0
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 最终产品净质量对应的湿基或接收态来料质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 过程用水和产品接触用水（`preparation_water`）

记录用于清洗、漂洗、脱盐或产品接触制备且跨越过程边界的计量用水；可行时将卫生清洁用水分开记录。

- 选定流：Process water；Tiangong UUID 待审
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：计量并分配至生产批次的用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy`
- 数量范围：暂定用水 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 最终产品净质量的供水量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 处理期间使用的冰（`handling_ice`）

记录用于产品温度控制的外购或场内制冰，并避免重复计算其所含水和制冰用电。

- 选定流：Ice；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：计量发放至批次的冰量；有依据时扣除回收并单独计量的未用冰
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_inputs`
- 数量范围：暂定用冰 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.5
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 最终产品净质量的用冰量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 制备后食用鱼副产部位中间体（`prepared_offal_intermediate`）

记录转移至保藏过程的称量食用中间体，使其状态和质量基准与接收质量平衡保持一致。

- 选定流：Prepared edible fish offal intermediate；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：计量转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_balance`

##### 废物流

###### 剔除或非食用鱼残余物（`preparation_residues`）

按去向和法定分类记录修整物、剔除部位、腐败物料和其他残余物；不得将有经济价值出售的共产品重新标为废物。

- 选定流：Fish-processing residues；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：按去向计量或通过质量平衡计算残余物质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mass_balance`
- 数量范围：暂定残余物 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：4.0
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 最终产品净质量的制备残余物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备废水（`preparation_wastewater`）

记录离开制备过程的废水，包括适用时的产品固形物和盐，并关联实际处理路线。

- 选定流：Fish-processing wastewater；Tiangong UUID 待审
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：计量排放量或采用有记录的水量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_wastewater`
- 数量范围：暂定废水 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：25
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 最终产品净质量的废水排放量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：保藏、稳定化、储存和包装（`preservation_packing`）

#### 输入

##### 产品流

###### 制备后食用鱼副产部位投入（`prepared_offal_input`）

转移制备后中间体而不增加另一项上游负荷；本行闭合前景过程连接。

- 选定流：Prepared edible fish offal intermediate；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：等于从 `receiving_preparation` 转移的实测产出，仅可按有记录的过程间储存损失调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mass_balance`

###### 盐或盐水配料（`salt_brine_input`）

发生盐渍、盐水浸渍、脱盐或盐辅助保藏时，分别记录盐和配制盐水。

- 选定流：Salt and brine ingredients；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：计量批次净领用量，并声明盐水浓度和回收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_inputs`
- 数量范围：暂定盐当量 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 最终产品净质量的盐当量投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 烟熏材料（`smoking_material`）

仅对声明的路线记录木材、木屑、烟熏液、烟熏香料或其他烟熏材料，并在适用时单独列示直接排放。

- 选定流：Smoking material；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：计量生产批次消耗的材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_inputs`
- 数量范围：暂定烟熏材料 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 最终产品净质量消耗的烟熏材料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 电力（`electricity_input`）

记录制备支持、制冷、冷冻、干制、烟熏、通风、储存和包装的计量或分配电力，不得与场内发电燃料重复计算。

- 选定流：Electricity, market-specific；Tiangong UUID 待审
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或根据设施总表进行有记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy`
- 数量范围：暂定用电 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：10
  - 单位：kWh/kg 参考产品
  - 基准：每 1 kg 最终产品净质量的用电量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购热力或燃料（`thermal_energy_input`）

分别记录用于干制、烟熏、热水制备或其他热操作的外购热力和每种燃料。

- 选定流：Purchased heat or process fuel；Tiangong UUID 待审
- 流属性/单位：Energy, mass, or volume / MJ, kg, or m3
- 数量规则：计量热量，或用有记录的因子换算实测燃料领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy`
- 数量范围：暂定热能 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：MJ/kg 参考产品
  - 基准：每 1 kg 最终产品净质量的外购热能
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_input`）

按材料记录一级、二级和三级包装的净供应质量；可重复使用包装应包括周转次数和损失假设。

- 选定流：Packaging material by type；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：物料清单或实测包装用量，扣除单独记录的内部边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 数量范围：暂定包装 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.5
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 最终产品净质量的包装供应量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制冷剂补充（`refrigerant_makeup`）

记录服务于产品路线的设备所采购或补充的制冷剂，并使用维修记录、设备充注量、运行时间或其他披露的驱动因素进行分配。

- 选定流：Refrigerant by substance；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：计算有记录的制冷剂补充量中归属于产品的份额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant`
- 数量范围：暂定制冷剂损失 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 最终产品净质量归属的制冷剂补充量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装食用鱼副产部位参考产品（`rf_edible_fish_offal`）

本项是实现功能单位的加工厂门口净产出；其数量不含包装质量。

- 选定流：食用鱼内脏，鱼鳍、鱼头、鱼尾、鱼肚和其他食用鱼内脏 `be045cb1-719b-41b1-9bec-bf27cf50c401`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰好 1 kg 食用产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 保藏和包装废物（`preservation_wastes`）

按处理或回收去向分别记录产品损失、废盐水或盐、灰分、烟熏残余物和包装边角料。

- 选定流：Preservation and packaging wastes by material；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：计量废物质量或采用有记录的质量平衡结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_wastewater`

###### 保藏废水（`preservation_wastewater`）

记录排放的盐水、清洗水、解冻水和其他路线特定废水；可得时附带盐度或相关处理属性。

- 选定流：Preservation-process wastewater；Tiangong UUID 待审
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：计量排放量或采用有记录的水量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_wastewater`
- 数量范围：暂定保藏废水 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 最终产品净质量的废水排放量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 制冷剂直接排放（`refrigerant_emissions`）

按物质报告服务于声明路线的设备向空气排放的制冷剂；除非系统模型要求相互关联的两种表示，否则不得将补充量同时作为产品投入和基本流排放重复报告。

- 选定流：Refrigerant emission to air by substance；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：依据维修记录和 `calc_refrigerant_loss` 库存平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `al_avoid_by_subdivision` | 共享鱼加工和保藏操作 | 优先采用过程细分、分表计量和批次特定质量记录，以便在分配前直接归属负荷。 | `eu-pef-2021` |
| `al_upstream_separation` | 与主鱼产品共同分离的外购食用副产部位 | 要求上游数据集披露分离点和分配。当可测量的物理因果关系支持联合生产时一致采用该关系；否则采用基于代表性价格的经济关系并报告敏感性情景。 | `eu-pef-2021` |
| `al_foreground_coproducts` | 离开前景路线的可销售产品 | 仅当产出具有可证明的市场或预期有益用途时才作为共产品。使用选定的物理或经济驱动因素分配共享负荷，并报告数量、价格或物理参数、参考期和敏感性。 | `eu-pef-2021` |
| `al_waste_and_credits` | 废物、回收材料和能源 | 将废物处理负荷保留在前景系统内。除非声明的研究方法明确要求，否则不得应用避免负荷或回收信用；披露公式并防止重复计算。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass_balance` | `receiving_preparation`; `preservation_packing` | 来料、中间体、产品、残余物和损失质量 | 地磅、秤、批次和库存记录 | lot_id; species_or_group; anatomical_part; state; gross_mass; tare; net_mass; moisture_or_drained_basis; disposition | 校准秤具和经核对的批次记录 | kg | 每批；每月核对 | 有代表性的连续 12 个月或声明的生产活动期 | 范围内所有前景生产线和储存步骤 | 按同质产品路线汇总净质量；按验收的参考产品净产出归一化 | 校准记录；库存核对；剔除批次日志；质量平衡闭合 |
| `cp_water_energy` | 两个过程 | 水、电力、热力和燃料 | 仪表、发票和设备日志 | meter_id; opening; closing; unit; fuel_type; heating_value_basis; allocation_driver; production_mass | 优先分表；否则采用有记录的设施总表分配 | 原始单位及归一化的 kg、m3、kWh 或 MJ | 仪表间隔和每月 | 与生产相同且覆盖季节性运行的期间 | 服务于声明路线的所有设备 | 扣除有记录的非生产用量；按运行时间、吞吐量或其他因果驱动因素分配共享用量 | 仪表检查；发票；换算因子；分配工作表 |
| `cp_preservation_inputs` | `preservation_packing` | 冰、盐、盐水、烟熏材料和路线特定添加剂 | 领料、配方、罐体和批次记录 | lot_id; material; mass; concentration; recovered_mass; route; batch_output | 称量领用和配方或罐体平衡 | kg | 每批 | 与生产相同的期间 | 所有声明的保藏路线 | 净消耗量除以参考产品净产出 | 秤具校准；配方批准；盐水浓度或回收记录 |
| `cp_packaging` | `preservation_packing` | 一级、二级和三级包装 | 物料清单、采购和边角料记录 | material; unit_mass; units_used; scrap; reuse_cycles; loss_rate | 件数乘以核实单件质量，并与领用量和边角料核对 | kg | 每次规格变更；每月汇总 | 与生产相同的期间 | 参考产品使用的所有包装 | 包装净供应量除以产品净质量；可重复使用包装按核实周转次数分配 | 规格表；单件质量核查；边角料日志；重复使用证据 |
| `cp_waste_wastewater` | 两个过程 | 固体废物、残余物、废水和去向 | 秤具、转移联单、仪表、实验室和处理记录 | waste_type; mass_or_volume; destination; date; salinity_or_relevant_parameter; treatment | 优先直接测量；否则采用有记录的材料或水量平衡 | kg 或 m3 | 每次收集或排放；每月汇总 | 与生产相同的期间 | 所有前景废物和排放点 | 按组成和去向汇总；不得与共产品净额抵消 | 转移联单；仪表记录；处理发票；平衡核对 |
| `cp_refrigerant` | `preservation_packing` | 制冷剂补充和直接损失 | 维修和制冷剂库存记录 | substance; equipment_id; charge; opening_stock; purchases; additions; recovery; closing_stock; service_date; allocation_driver | 与维修记录核对的年度库存平衡 | 按物质计的 kg | 每次维修事件；年度平衡 | 至少覆盖生产参考期 | 服务于路线的所有冷却和冷冻设备 | 按物质计算损失，并使用有因果关系的设备维修或运行数据分配 | 技师记录；采购发票；库存核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_output` | 参考产品 | 产品净质量 = 包装后毛质量 - 包装皮重；所有流按合格产品总净质量归一化 | 包装后毛质量；皮重；剔除产出 | kg 参考产品净质量 |  |
| `calc_normalized_flow` | 每项定量清单行 | 归一化数量 = 归属于同质路线的数量 / 参考产品净产出 kg | 采集数量；分配驱动因素；净产出 | 每 kg 参考产品的数量 | `eu-pef-2021` |
| `calc_mass_balance` | 两个过程 | 来料 + 添加材料 = 产品 + 共产品 + 废物 + 实测库存变化 + 量化损失，并使用一致的湿基、干基、沥干基和含盐基 | 所有质量行；库存变化；基准换算 | 质量平衡闭合和未解释差额 |  |
| `calc_refrigerant_loss` | 制冷设备 | 按物质计的损失 = 期初库存 + 采购 - 期末库存 - 回收库存，并与设备补充量核对；仅分配路线归属份额 | 制冷剂库存和维修记录；分配驱动因素 | 每 kg 参考产品的制冷剂排放 kg |  |
| `calc_allocation_share` | 联合操作 | 分配份额 = 声明的产品驱动量 / 所有共产品相同驱动量之和；对共享负荷使用一个一致驱动因素 | 产品质量或其他物理驱动因素；采用经济分配时的代表性净收入 | 无量纲分配份额 | `eu-pef-2021` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 产品和参考流 | 记录鱼种或鱼种组、解剖部位、食用属性、路线、产品状态、净质量基准、包装、地理范围和期间。 | 产品规格；批次记录；标签；流 UUID 确认 |
| `dq_temporal` | 前景活动数据 | 连续生产时使用有代表性的 12 个月期间，否则披露完整生产活动期及其季节限制。 | 注明日期的仪表、批次、发票、库存和生产记录 |
| `dq_completeness` | 过程清单 | 覆盖所有范围内过程步骤，声明可归属前景质量和能量的实际覆盖率，并披露每项遗漏或估算的余量，不得静默截断。 | 覆盖表；仪表图；质量和能量核对 |
| `dq_mass_balance` | 材料流 | 核对来料、添加物、产品、共产品、废物、库存变化、水分变化和损失；声明并论证场址特定的核对容差，并调查容差以外的差额。 | 签署的平衡工作表和基准换算 |
| `dq_route_representativeness` | 保藏路线 | 没有按产量加权的数据和明确路线份额时，不得合并冷藏/冷冻、盐渍/盐水浸渍、干制和烟熏路线。 | 路线层级生产和公用工程记录 |
| `dq_source_hierarchy` | 估算值或次级值 | 优先使用场址和供应商记录；识别每项代理、推理估算和次级数据集，并说明替换计划或不确定性。 | 数据源登记和质量评估 `eu-pef-2021` |
| `dq_food_safety_traceability` | 食用处置和保藏 | 保留声明产品和市场所需的追溯、温度或保藏控制、卫生、不合格和纠正措施记录。 | HACCP 或等效控制记录；批次放行记录 `codex-cxc-52-2003` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `vr_reference_flow` | 参考产品 | 核验恰好一个 1 kg 食用鱼副产部位净质量参考产出，具有指定的产品流、Mass 流属性和单位组 UUID 以及所有必需限定信息。 |  |
| `vr_scope_route` | 产品身份和边界 | 核验数据集表示供人类食用的鱼副产部位，声明一种或多种保藏路线，并纳入每项实际执行的前景步骤和关联上游供应。 | `unsd-cpc-3-2025`; `codex-cxc-52-2003` |
| `vr_mass_balance` | 所有质量流 | 核验质量基准一致、有记录的质量平衡以及有依据的场址特定核对容差；容差以外的差额应产生 finding。 |  |
| `vr_energy_water_waste` | 前景清单 | 核验适用时存在水、冰、能量、盐或盐水、烟熏材料、包装、废物、废水和制冷剂行，并具有采集值或明确且有依据的零值或不适用说明。 | `codex-cxc-52-2003`; `eu-pef-2021` |
| `vr_allocation` | 共享和联合操作 | 核验已披露分配选择、驱动因素、共产品集合、上游分离处理和敏感性，且没有重复计算负荷或信用。 | `eu-pef-2021` |
| `vr_estimate_disclosure` | 暂定数据 | 核验每次使用暂定范围时均标为 `reasoned_estimate`；这些范围是筛选标志，不是符合性证据，并需要替换或披露不确定性。 |  |
| `vr_food_safety_disclosure` | 路线控制 | 核验已识别适用食品安全控制记录和市场特定数值限值；不得使用本 PCR 的 LCA QA 范围校验法规合规。 | `codex-cxc-52-2003` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 加工厂门口包装食用鱼副产部位的前景生产数据集 |
| downstream_use | `secondary_dataset`；方法学评审和质量披露后可作 `background_dataset` |
| allowed_use | 对声明的鱼种或鱼种组、解剖部位、保藏路线、地理、技术和期间进行产品足迹和 LCA 建模 |
| excluded_use | 整鱼、鱼片、鱼粉、鱼油、明胶、饲料、宠物食品、药品、复合餐食或未表示的保藏路线；法规食品安全符合性评估 |
| required_metadata | PCR id；产品流 UUID；鱼种或鱼种组；解剖部位；食用属性；保藏路线；产品温度/状态；包装；净质量基准；地理；技术；参考期；上游数据集；分配；截断；路线份额 |
| required_quality_disclosure | 记录覆盖率；质量平衡闭合；仪表和秤具质量；路线代表性；估算和代理；推理估算替换；分配敏感性；食品安全记录范围；未解决 UUID |
| update_trigger | 鱼种组合、解剖部位、保藏技术、能源系统、包装、产率、分配、工厂地理或法规控制发生实质变化，或数据早于声明的代表性期间 |

## 11. 数据源

| 来源 ID | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 structure, code 21234, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 官方分类标题和产品类别边界语境 |
| `codex-cxc-52-2003` | standard | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, current official Codex text indexed by FAO; https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ | 鱼产品卫生过程分解、处理和保藏控制、追溯及食品安全记录边界 |
| `eu-pef-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279; https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 | 生命周期边界、数据质量、分配层级、文件记录和敏感性原则 |
