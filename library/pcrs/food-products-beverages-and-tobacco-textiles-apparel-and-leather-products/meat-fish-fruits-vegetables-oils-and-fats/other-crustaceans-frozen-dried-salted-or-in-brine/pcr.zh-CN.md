---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-crustaceans-frozen-dried-salted-or-in-brine
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他甲壳类动物，冷冻、干制、腌制或盐渍

## 1. 范围与适用性

本 PCR 适用于在申报工厂出厂时为冷冻、干制、干盐腌或盐水渍状态的可食用非虾类甲壳动物。只要申报产品仍属于上述保藏范围，可覆盖整只、分段、尾、螯和剔取肉，以及申报为生制或熟制的产品。

前景边界从加工厂门口验收甲壳动物原料开始，到 1 kg 净质量的包装保藏产品可供发运结束。捕捞或养殖、进厂运输、出厂后配送、零售、用户制备、食用和包装生命末期不在本前景边界内；研究纳入这些阶段时须连接独立数据集。

前景数据包须明确声明其代表的保藏路线或经计量的产品组合。冷冻、干制、干盐腌和盐水渍生产不得无条件平均。罐藏、仅烟熏、发酵、仅鲜品/冷藏品、活体以及虾和对虾产品不在范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-crustaceans-frozen-dried-salted-or-in-brine` |
| classification_refs | CPC 3.0: 21259，精确分类参考 |
| covered_products | 采用冷冻、干制、干盐腌或盐水渍保藏的可食用非虾类甲壳动物；整只、分段或肉形态；生制或熟制状态按实际声明 |
| excluded_products | 虾和对虾；活体或仅鲜品/冷藏甲壳动物；罐藏、仅烟熏或发酵产品；软体动物和其他水生无脊椎动物；无法分离甲壳动物清单的混合水产品 |
| representative_product | 加工厂门口待发运的包装保藏其他甲壳动物产品 |
| production_route | 接收和初加工、一个明确声明的保藏路线、包装和与路线相适应的储存 |
| market_state | 冷冻、干制、干盐腌或盐水渍；须声明生/熟状态及整只/分段/肉形态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 采用声明路线保藏并可供发运的可食用其他甲壳动物产品 |
| How much | 1 kg 产品净质量，不含包装和可自由沥出的液体；若该液体作为声明产品的一部分出售则除外 |
| How well | 声明物种或商业类群、解剖形态、生/熟状态、保藏路线、食品安全验收依据和路线特定状态 |
| How long or cycle | 从一个生产批次到工厂发运；声明前景边界内储存时长 |
| reference_flow_link | 参考产品输出 `final_reference_product`，来自 `packing_and_storage` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 其他甲壳类动物，冷冻、干制、腌制或盐渍 `ecae55b8-a320-44e8-9ea2-98d7ff34e4e3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或商业类群；已知时注明野生捕捞或养殖来源；整只/分段/肉形态；生制或熟制状态；确切保藏路线；冷冻品包冰比例；干制品最终水分基准；盐添加量及干盐腌或盐水渍状态；盐水是否计入销售质量；包装形式；发运温度；前景储存时长 |

构建前景数据包时，`必需限定信息` 中的项目须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少必需限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 全部清单归一化到发运时 1 kg 可食用产品净质量。排除包装和单独沥出的盐水；披露并扣除不作为产品质量出售的包冰。 |
| `route_condition_basis` | 冷冻、干制、干盐腌或盐水渍产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明的发运状态记录质量，并报告批次比较所需的包冰、水分及盐/盐水基准。没有实测质量和状态数据时不得在保藏状态之间换算。 |
| `energy_unit_consistency` | 电力和热能 | Energy | 电力用 kWh；热能用 MJ | 保留仪表原始单位并记录换算因子。共享公用工程仪表只能按有记录的计算规则分配。 |
| `mass_balance_basis` | 原料、产品、残余物、留存水和留存盐 | Mass | kg | 按批次核对输入和输出质量；蒸发水、排放液、废水和未计量损失须单独披露，不得强制并入产品得率。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 工厂门口验收的食品级甲壳动物原料，披露物种/类群、来源、进厂形态、生/熟状态、温度和既有保藏状态 |
| starting_condition_role | 进入前景初加工过程的上游产品投入 |
| product_classification_scope | 采用冷冻、干制、干盐腌或盐水渍保藏的其他甲壳动物；虾和对虾产品不在范围内 |
| recursive_input_rule | 若某项投入已属于本 PCR 范围，作为带上游数据集的技术圈投入记录一次，不得在前景边界内递归重建其既有保藏过程 |
| upstream_dataset_requirement | 为接收甲壳动物采用地域和技术有代表性的捕捞/养殖及进厂供应数据集；采用代理时披露代理及其局限 |
| disclosure | 声明实际路线、进出产品状态、蒸煮或去壳、工厂地域、储存时长、包装、共产品、废物处理及任何排除的场内操作 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_facility_gate` | foreground_processes | 纳入接收、初加工、声明的保藏操作、包装、与路线相适应的场内储存、场内水和能源、制冷剂直接损失，以及废物或废水离厂之前的处理。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `boundary_route_condition` | preservation_route | 只纳入申报批次实际使用的操作：冷冻及冷冻储存、干制及相关供热、干盐腌或盐水渍。多路线结果须先有实测路线份额和分路线清单，再进行汇总。 | `codex-cxc-52-2003`; `fao-seafood-safety-quality-2003` |
| `boundary_food_safety_controls` | reception_and_processing | 当前景系统实际发生时，纳入适用水/洁净冰、温度控制、卫生、产品拒收和有记录的危害控制所造成的资源消耗与损失。 | `codex-cxc-52-2003`; `fao-seafood-safety-quality-2003` |
| `boundary_exclusions` | life_cycle_model | 捕捞/养殖、进厂运输、出厂后配送、零售、使用和生命末期须通过独立关联数据集建模；从摇篮到坟墓研究不得静默遗漏这些阶段。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `reception_and_preparation` | 接收和初加工 | required | 所有范围内产品 | 前景接收、按实际清洗和分级、按实际蒸煮、去壳或切分，以及拒收物/残余物分离 | kg 验收甲壳动物投入及 kg 初加工甲壳动物输出 |
| `declared_preservation` | 声明的保藏路线 | required | 恰好一个路线或实测产品组合：冷冻、干制、干盐腌或盐水渍 | 路线特定的前景保藏 | kg 保藏散装产品 |
| `packing_and_storage` | 包装及与路线相适应的储存 | required | 所有范围内产品；冷藏仅适用于冷冻路线 | 前景包装、储存和发运准备 | 1 kg 净参考产品 |

### 过程：接收和初加工（`reception_and_preparation`）

#### 输入

##### 产品流

###### 验收甲壳动物原料（`accepted_crustacean_input`）

记录进入初加工的实测进料质量。

- 选定流：其他甲壳动物原料；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：验收批次实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_balance`
- 来源：
- 数量范围：暂定原料投入 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：10
  - 单位：kg/kg 净参考产品
  - 基准：跨肉产品、整只产品和干制路线的宽泛候选期范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 加工用水（`preparation_water`）

记录用于清洗、蒸煮、解冻或分配至该批次卫生作业且跨越前景边界的适用水。

- 选定流：加工用水；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：实测用水量或分配后的水表记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_ice_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定初加工用水 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 净参考产品
  - 基准：可替换的宽泛候选期筛查范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 处理用冰（`handling_ice`）

记录该批次实际使用的外购或场内生产食用冰，避免重复计算制冰用水。

- 选定流：冰；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：该批次实测加冰质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_ice_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定用冰 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg 净参考产品
  - 基准：可替换的宽泛候选期筛查范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 初加工甲壳动物中间产品（`prepared_crustacean_output`）

依据批次记录计算转入声明保藏路线的初加工质量。

- 选定流：初加工甲壳动物中间产品；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_lot_mass_balance`
- 来源：
- 数量范围：暂定初加工得率 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：1
  - 单位：kg/kg 验收甲壳动物投入
  - 基准：初加工输出占验收投入的质量分数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 壳、拒收物及其他初加工残余物（`preparation_residues`）

按去向分别计量可食拒收物、壳、内脏和其他残余物；已售出输出须重分类为共产品。

- 选定流：甲壳动物初加工残余物；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：按处理或销售去向实测残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收甲壳动物投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_balance`
- 来源：
- 数量范围：暂定残余物比例 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.9
  - 单位：kg/kg 验收甲壳动物投入
  - 基准：覆盖整只、分段和肉产品的可替换宽泛范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初加工废水（`preparation_wastewater`）

记录离开初加工的废水，包括分配的卫生用水；需单独记录的污染物不得从废水量中扣除。

- 选定流：废水；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：实测排放或水量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_effluent_records`
- 来源：
- 数量范围：暂定初加工废水 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 净参考产品
  - 基准：可替换的宽泛候选期筛查范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：声明的保藏路线（`declared_preservation`）

#### 输入

##### 产品流

###### 初加工甲壳动物投入（`prepared_crustacean_input`）

转移初加工中间产品，不重复计算上游负荷。

- 选定流：初加工甲壳动物中间产品；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：等于转入本路线的 `prepared_crustacean_output`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_lot_mass_balance`
- 来源：

###### 保藏用电（`preservation_electricity`）

记录冷冻、干燥风机、盐水循环、泵送及实际使用的路线特定设备的实测或分配电量。

- 选定流：电力；Tiangong UUID 待审
- 流属性/单位：Energy / kWh
- 数量规则：路线用电的计量值或有记录的分配值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保藏散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_input_records`
- 来源：
- 数量范围：暂定保藏用电 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kWh/kg 保藏散装产品
  - 基准：跨声明路线和技术的可替换宽泛范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 蒸煮或干燥热能（`preservation_thermal_energy`）

仅在声明路线蒸煮产品或采用供热干燥时纳入。

- 选定流：热能；Tiangong UUID 待审
- 流属性/单位：Energy / MJ
- 数量规则：实测燃料/蒸汽/热量换算为交付热能
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保藏散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_input_records`
- 来源：
- 数量范围：暂定热能 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：MJ/kg 保藏散装产品
  - 基准：宽泛可替换范围；仅在没有蒸煮或热干燥时可为零
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 盐投入（`preservation_salt`）

仅对干盐腌或盐水渍纳入食用盐，并通过批次平衡记录留存盐和排放盐。

- 选定流：氯化钠；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：该批次实测加盐量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_input_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定盐投入 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 净参考产品
  - 基准：宽泛可替换范围；无加盐路线须为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 配制盐水用水（`brining_water`）

仅在盐水渍路线纳入，并区分新鲜补水与循环盐水。

- 选定流：加工用水；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：配制盐水的实测新鲜加水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_input_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定盐水配制用水 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 净参考产品
  - 基准：宽泛可替换范围；非盐水渍路线须为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 保藏散装甲壳动物产品（`preserved_bulk_output`）

记录声明保藏路线完成后、最终包装前的产品质量。

- 选定流：保藏其他甲壳动物散装产品；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：保藏散装产品实测转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_lot_mass_balance`
- 来源：
- 数量范围：暂定保藏散装转移 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.5
  - 单位：kg/kg 净参考产品
  - 基准：考虑包装损失和排除自由液体的宽泛可替换余量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 废盐水和保藏废水（`spent_brine_wastewater`）

当处理方式不同时，分别记录废盐水、解冻/蒸煮液、清洗排水和其他路线废水。

- 选定流：含盐废水或加工废水；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：实测排放或水盐平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_effluent_records`
- 来源：
- 数量范围：暂定路线废水 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 净参考产品
  - 基准：宽泛可替换范围，区分含盐与非含盐流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 冷冻过程制冷剂直接损失（`freezing_refrigerant_loss`）

仅对前景边界内的冷冻设备纳入；识别制冷剂，设备维护充注量不得直接作为排放量。

- 选定流：制冷剂对空气排放；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：按声明冷冻产品产量分配年度或事件制冷剂损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷冻散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_refrigeration_records`
- 来源：
- 数量范围：暂定制冷剂损失 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 冷冻散装产品
  - 基准：宽泛可替换候选期筛查范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：包装及与路线相适应的储存（`packing_and_storage`）

#### 输入

##### 产品流

###### 保藏散装产品投入（`preserved_bulk_input`）

将路线特定的保藏散装产品转入包装，不得混合未声明的保藏状态。

- 选定流：保藏其他甲壳动物散装产品；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：等于转入包装的 `preserved_bulk_output`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_lot_mass_balance`
- 来源：

###### 初级和次级包装（`packaging_materials`）

按材料质量记录每种包装，包括内衬、纸箱、标签和路线特定阻隔包装。

- 选定流：按材料类型区分的包装材料；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：物料清单质量减实测未使用退回量，再按包装产品净质量归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：
- 数量范围：暂定包装质量 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.5
  - 单位：kg/kg 净参考产品
  - 基准：宽泛可替换候选期筛查范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 储存用电（`storage_electricity`）

记录声明时长内与路线相适应的场内储存用电；冷藏仅适用于冷冻路线。

- 选定流：电力；Tiangong UUID 待审
- 流属性/单位：Energy / kWh
- 数量规则：按声明产量和时长计量或分配的储存用电
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品在声明前景储存期内
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_refrigeration_records`
- 来源：
- 数量范围：暂定储存用电 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kWh/kg 净参考产品
  - 基准：声明前景储存时长内的宽泛可替换范围
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装参考产品（`final_reference_product`）

这是扣除包装及任何不计入销售质量的自由液体或包冰后的定量参考输出。

- 选定流：其他甲壳类动物，冷冻、干制、腌制或盐渍 `ecae55b8-a320-44e8-9ea2-98d7ff34e4e3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰好 1 kg 净参考产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 来源：

##### 废物流

###### 包装边角料（`packaging_scrap`）

按材料和去向记录实测前景包装边角料。

- 选定流：按材料类型区分的包装废物；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：包装领用量减包装并入量和退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：
- 数量范围：暂定包装边角料 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 净参考产品
  - 基准：宽泛可替换候选期筛查范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 冷冻储存制冷剂直接损失（`storage_refrigerant_loss`）

仅对前景边界内的冷冻路线储存纳入。

- 选定流：制冷剂对空气排放；Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：按冷冻储存产量和时长分配年度或事件制冷剂损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷冻参考产品在声明储存期内
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_refrigeration_records`
- 来源：
- 数量范围：暂定储存制冷剂 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 冷冻参考产品
  - 基准：宽泛可替换候选期筛查范围
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared_processes | 技术可行时，通过分别计量路线、产品形态、蒸煮、初加工、包装和储存操作避免分配。 | `eu-pef-2021-2279` |
| `allocation_joint_outputs` | marketable_co_products | 无法细分时，采用反映底层过程的有记录物理关系。若不存在可辩护的物理关系并采用经济分配，须记录价格基准、参考期、币种、路线和敏感性结果。 | `eu-pef-2021-2279` |
| `allocation_residue_status` | shells_rejects_and_liquids | 送处理的输出仍为废物并承担处理负荷，除非后果型研究明确要求，否则不得计入替代产品信用。已出售或内部使用的材料属于共产品，须纳入分配决策。 | `eu-pef-2021-2279` |
| `allocation_route_separation` | multi_route_facilities | 汇总分路线计算结果前，共享公用工程须按设备仪表、运行时间、产量、储存体积-时间或其他有记录的因果驱动量分配。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_balance` | `reception_and_preparation; declared_preservation; packing_and_storage` | 原料、中间产品、最终产品、残余物和自由液体质量 | 称量单和批次记录 | lot_id; route; product_form; incoming_mass; prepared_mass; preserved_mass; packed_net_mass; glaze_mass; free_liquid_mass; residue_mass | 校准秤和经核对的批次记录 | kg | 每批 | 有代表性的生产期，通常至少 12 个月；较短生产季须披露 | 每个申报工厂和路线 | 按批次和路线求和，再除以合格净参考产品质量 | 秤校准、批次追溯及签署的质量平衡复核 |
| `cp_water_ice_records` | `reception_and_preparation` | 水和冰 | 仪表、发票和批次投加记录 | meter_start; meter_end; ice_mass; allocation_driver; sanitation_share | 优先直接测量；否则采用有记录的因果分配 | kg | 每批或每计量期 | 与产品数据相同期间 | 每个工厂 | 扣除非生产用量，并按有记录驱动量分配至路线/产品 | 仪表检查、发票和分配工作表 |
| `cp_route_input_records` | `declared_preservation` | 电力、热能、盐和盐水配制用水 | 仪表、燃料/蒸汽记录和配方单 | route; equipment; electricity; fuel_or_heat; conversion_factor; salt_charge; fresh_water; recirculated_brine | 路线仪表或批次配方记录 | kWh; MJ; kg | 每批或每计量期 | 与产品数据相同期间 | 每个工厂和保藏路线 | 只在声明路线内汇总并按保藏输出归一化 | 仪表校准、发票、配方批准和单位换算记录 |
| `cp_waste_effluent_records` | `reception_and_preparation; declared_preservation` | 残余物、废水、废盐水和处理去向 | 秤、排放仪表、联单和平衡计算 | stream_id; saline_status; mass_or_volume; density; treatment; sale_status; destination | 优先直接测量；无法测量时采用有记录平衡 | kg | 每批或每报告期 | 与产品数据相同期间 | 每个工厂和物流 | 分离处理去向及含盐/非含盐流 | 联单、仪表记录、采样方案和平衡核对 |
| `cp_packaging_records` | `packing_and_storage` | 并入包装和边角料 | 物料清单、采购记录和边角料称量 | material; units_issued; unit_mass; returned_units; scrap_mass; packed_net_mass | 通过抽样称量核实规格质量 | kg | 每次包装运行 | 与产品数据相同期间 | 每种产品形式和工厂 | 按材料计算每净产品质量的并入包装质量 | 现行规格、抽样质量和库存核对 |
| `cp_storage_refrigeration_records` | `declared_preservation; packing_and_storage` | 储存用电、时长和制冷剂损失 | 仪表、库房日志和制冷剂维修记录 | route; storage_temperature; entry_time; dispatch_time; electricity; refrigerant_type; charge_added; recovered_mass; throughput | 仪表和维修日志计算 | kWh; h or day; kg | 每月及每次维修事件 | 与产品数据相同期间 | 每个工厂 | 按分区仪表或有记录的质量-体积-时间驱动量分配 | 仪表记录、温度日志、维修发票和泄漏计算 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 合格批次或期间数量 / 合格参考产品净 kg；分母排除包装、单独沥出的盐水和已披露包冰 | 采集流数量；包装净质量；包冰/自由液体状态 | 每 1 kg 净参考产品数量 | `eu-pef-2021-2279` |
| `calc_mass_balance` | 每个生产批次 | 核对接收原料、加入并留存的水/冰/盐、中间产品、产品、残余物、排放液、蒸发水和有记录的未计量差 | `cp_lot_mass_balance`; `cp_water_ice_records`; `cp_waste_effluent_records` | 批次质量平衡说明和得率 | `codex-cxc-52-2003` |
| `calc_route_separation` | 多路线工厂 | 每条保藏路线独立计算；只按声明报告期内实测净产品路线份额汇总 | 路线清单；路线净输出 | 明确加权的产品组合 | `eu-pef-2021-2279` |
| `calc_shared_utilities` | 共享仪表和储存 | 分配公用工程 = 共享总量 × 有记录的因果驱动量份额；披露驱动量和未分配余量 | 仪表总量；路线运行时间、产量或储存质量-体积-时间 | 路线特定公用工程量 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和原料 | 保留物种/商业类群、来源、形态、生/熟状态、保藏路线、批次和发运状态；未经披露的代理审查不得用虾/对虾或软体动物数据替代。 | 分类记录、供应商规格、批次追溯及 `unsd-cpc-3-0-2025` |
| `dq_route_and_food_safety` | 初加工和保藏 | 保留适用于产品的路线特定时间-温度、盐腌/盐水渍或干燥控制记录及食品安全放行证据；失败或拒收批次不得作为合格参考输出。 | HACCP 或等效控制记录及 `codex-cxc-52-2003`；`fao-seafood-safety-quality-2003` |
| `dq_temporal_coverage` | 前景活动数据 | 使用覆盖季节和运行变化的代表性期间，通常为连续 12 个月；较短季节性生产须披露并论证代表性。 | 带日期仪表、发票、生产日志及 `eu-pef-2021-2279` |
| `dq_completeness` | 前景清单 | 覆盖至少 95% 的实测前景输入输出质量，以及所有已知具有环境相关性的能源、制冷剂、含盐废水和废物流；列出排除项并评估重要性。 | 质量平衡、排除清单及 `eu-pef-2021-2279` |
| `dq_measurement` | 前景记录 | 优先采用校准测量；记录估算、仪表分配、密度换算、缺失数据处理和不确定性。 | 校准记录、工作表及仪表/发票核对 |
| `dq_provisional_ranges` | 推理估算范围 | 每个暂定范围仅作为筛查标记，不是发布默认值；激活前须以实际前景数据或经审查来源证据替换，除非方法学审查明确接受。 | 审查记录和来源替换日志 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference_product | 确认恰好 1 kg 净产品使用产品流 `ecae55b8-a320-44e8-9ea2-98d7ff34e4e3`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg。 |  |
| `validate_route_declaration` | product_and_process_map | 确认已声明保藏路线、生/熟状态、形态、包冰/水分/盐/盐水基准、发运温度和储存时长；拒绝路线无条件混合。 | `unsd-cpc-3-0-2025`; `codex-cxc-52-2003` |
| `validate_conditional_inputs` | declared_preservation | 确认冷冻及冷冻储存记录仅用于冷冻产品，仅在使用时记录热干燥，仅在加盐时记录盐，且盐水配制用水/废盐水仅用于盐水渍路线。 | `codex-cxc-52-2003` |
| `validate_mass_balance` | each lot | 确认原料、中间产品、产品、残余物、留存水/盐、废水/自由液体、蒸发和未计量损失已核对，且包装未计入产品质量。 | `codex-cxc-52-2003` |
| `validate_allocation` | co_products_and_shared_operations | 确认优先尝试细分，且剩余每项分配均有因果驱动量、共产品/废物决策；采用经济分配时有敏感性分析。 | `eu-pef-2021-2279` |
| `validate_food_safety_release` | conforming_output | 确认批次具有适用于声明市场状态的路线特定验收和食品安全控制证据；拒收产品记录为废物或返工，不得作为参考输出。 | `codex-cxc-52-2003`; `fao-seafood-safety-quality-2003` |
| `validate_provisional_estimates` | inventory_ranges | 将每个 `reasoned_estimate` 标记为待方法学审查，并确认其未被表示为实测值、来源支持值或强制值。 |  |
| `validate_uuid_gaps` | non_reference_flows | 确认未解决的非参考 Tiangong UUID 保持为明确审查项，且未被未经核实的近似流替换。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明保藏其他甲壳动物产品的工厂门口前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 仅当路线、物种/类群、产品形态、发运状态、地域、技术、分配和储存基准足够可比时用于产品和工厂比较；可与独立上下游数据集关联 |
| excluded_use | 未限定的冷冻、干制、干盐腌和盐水渍路线平均；不得代理虾/对虾、软体动物、罐藏、仅烟熏、发酵、鲜品/冷藏、捕捞/养殖、配送、零售、烹饪或食用 |
| required_metadata | PCR id；工厂和地域；报告期；物种/商业类群和来源；产品形态；生/熟状态；声明路线；包冰、水分、盐/盐水和净质量基准；技术；储存时长/温度；包装；分配；上游数据集；废物处理；数据所有者和审查状态 |
| required_quality_disclosure | 一手数据占比和期间；仪表覆盖和分配驱动量；质量平衡差；路线份额；缺失数据和代理；推理估算；非参考 UUID 缺口；食品安全放行依据；不确定性和排除项 |
| update_trigger | 物种组合、原料来源、产品形态、保藏技术或路线份额、能源/制冷系统、配方、得率、包装、储存、分配、法规/食品安全控制发生重大变化，或数据超过组织审查周期 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, structure and explanatory materials, https://unstats.un.org/unsd/classifications/Econ/cpc（检索日期 2026-08-11） | 分类范围及 CPC 21259 的区分 |
| `codex-cxc-52-2003` | standard | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, official Codex text listing and current English text, https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/（检索日期 2026-08-11） | 工厂过程分解、水/冰及卫生控制、保藏路线控制、温度处理、拒收和食品安全校验 |
| `fao-seafood-safety-quality-2003` | official_guidance | FAO Fisheries Technical Paper 444, Assessment and Management of Seafood Safety and Quality, ISBN 92-5-104954-8, https://www.fao.org/4/y4743e/y4743e00.htm（检索日期 2026-08-11） | 鲜/冷冻甲壳动物及干制、盐腌或轻度保藏产品的水产品危害控制证据；追溯和食品安全质量记录 |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng（检索日期 2026-08-11） | 系统边界完整性、前景数据质量、细分和分配层级、时间代表性及透明汇总 |
