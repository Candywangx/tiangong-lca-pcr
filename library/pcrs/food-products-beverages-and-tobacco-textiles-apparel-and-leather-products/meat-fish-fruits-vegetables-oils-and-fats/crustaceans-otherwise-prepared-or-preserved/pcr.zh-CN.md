---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.crustaceans-otherwise-prepared-or-preserved
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 以其他方式制备或保存的甲壳类

## 1. 范围与适用性

本 PCR 用于指导制备前景数据包，适用对象为通过简单冷冻、盐渍、干燥或盐水浸渍以外的工艺制备或保存的甲壳类产品。范围包括螃蟹、对虾、虾、龙虾、小龙虾、岩龙虾及其他食用甲壳类，经煮制、蒸制、油炸、烘烤或其他烹调，置于醋、油、腌汁或调味汁中，加工成糊或肉酱，烟熏，罐装或装入密闭容器，巴氏杀菌、灭菌、裹粉，或采用其他方式制备或保存的产品。

前景边界从加工设施接收已声明的生鲜、冷藏、冷冻、活体或先前已加工的甲壳类原料开始，至包装产品在制造工厂门口交付结束。仅纳入实际发生的路线特定操作。甲壳类上游生产、配料、包装、能源载体、供水及其他购入投入通过关联数据集表示。工厂门外的配送、零售、消费者制备、使用和生命终结不在本前景边界内；更宽范围研究可另行关联这些阶段的数据集。

完整预制菜肴或餐食、仅经冷冻/盐渍/干燥/盐水浸渍保存的甲壳类，以及甲壳类提取物或汁液不在范围内。本 PCR 不规定食品安全关键限值；适用法律、客户要求、HACCP 和产品规格仍为权威要求，其受监测的过程参数必须保留为前景证据。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.crustaceans-otherwise-prepared-or-preserved |
| classification_refs | CPC 3.0：21270，精确范围参考 |
| covered_products | 通过烹调、油炸、烘烤、烟熏、腌制、调味汁配制、糊或肉酱制作、裹粉、罐装、密闭包装、巴氏杀菌、灭菌或其他超过简单冷冻、盐渍、干燥或盐水浸渍的处理制备或保存的食用甲壳类 |
| excluded_products | 完整预制菜肴或餐食；仅冷冻、盐渍、干燥或置于盐水中的甲壳类；甲壳类提取物和汁液；未经本范围制备或保存处理的活体、鲜品或冷藏甲壳类 |
| representative_product | 制造工厂门口的已包装制备或保存甲壳类产品 |
| production_route | 接收与调理；制备与清洗；路线特定的配方或保存处理；路线特定的冷却、冷藏或冷冻；包装、标签与工厂门储存；清洗以及废水或残余物管理 |
| market_state | 已声明的冷藏、冷冻、常温稳定、罐装、密闭包装、烟熏、腌制、带调味汁、裹粉、糊、肉酱或其他制成品状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制造工厂门口交付的制备或保存甲壳类食品 |
| How much | 1 kg 净产品，不含未随产品销售的运输包装 |
| How well | 符合已声明的物种或产品组、配方、制备或保存路线、带壳状态、烹调或即食状态、包装系统、法律要求和放行规格 |
| How long or cycle | 工厂门口一个已放行生产批次；适用已声明的储存条件和预期保质期 |
| reference_flow_link | 1 kg 参考产品流代表功能单位 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 甲壳类动物，以其他方式制备或保存 `d844fbf5-2247-4c2d-8071-7dab57ad8c77` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 甲壳类物种或商品组；已知时的野生或养殖来源；来料状态；带壳、去壳和去肠线状态；制备或保存路线；烹调和即食状态；配方和添加剂；相关时的产品水分或沥干重基准；包装形式和净质量；冷藏、冷冻或常温储存条件；预期保质期；生产设施、地域和报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部前景结果归一化至工厂门口 1 kg 已放行净产品。声明采用标示净质量还是沥干质量，产品质量不得包含未随产品销售的二级或三级运输包装。 |
| `ingredient_mass_basis` | 甲壳类原料、配料、添加剂、包装、残余物和废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将秤量、发票、配方和库存变化记录转换为 kg，并保持与相应记录一致的湿基、干基、沥干基或购入状态；披露换算及水分或浓度假设。 |
| `utility_unit_preservation` | 电力、燃料、蒸汽、制冷和直接热量 | 路线特定的能量或燃料属性 | 按记录使用 kWh、MJ、kg 或 m3 | 保留计量或发票原始单位，记录每个换算因子，仅在扣除边界外用途并应用有记录的共享资源规则后归一化。 |
| `water_balance_basis` | 工艺水、冷却水、冰、清洗水和卫生用水 | 质量或体积 | kg 或 m3 | 区分供给水、产品保留水、蒸发水、分流清洁水和废水。仅在记录密度和温度基准时将体积换算为质量。 |
| `packaging_mass_basis` | 初级包装和销售单元包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按组分和每单位已放行净产品的实际质量记录各包装材料，并区分可重复使用与一次性包装。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工设施已接收的甲壳类原料，声明物种或商品组、已知时的野生或养殖来源、供应商、来料活体/冷藏/冷冻/先前已加工状态、带壳状态、保存历史、温度条件、添加剂、批次质量和拒收状态 |
| starting_condition_role | 前景制造的上游产品投入 |
| product_classification_scope | 与 CPC 3.0 子类 21270 一致，经过超过简单冷冻、盐渍、干燥或盐水浸渍处理而制备或保存的甲壳类 |
| recursive_input_rule | 已属于本 PCR 类别的购入投入作为独立上游产品数据集关联，不在消费过程中递归分解；必须披露其质量、路线、供应商和数据集引用 |
| upstream_dataset_requirement | 为野生捕捞或养殖及原料甲壳类初级处理、全部购入配料和添加剂、包装材料、电力、燃料、供水、制冷剂以及外部处理的废物或废水关联具有代表性的数据集 |
| disclosure | 声明纳入和省略的路线步骤、设施和地域、报告期、产品组合、分配、物料状态、配方、热处理或保存处理、冷却或储存方式、包装、上游数据集选择、截断和数据缺口 |

### 边界规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_gate_to_gate` | foreground_manufacturing | 纳入从已接收甲壳类原料至制造工厂门口已放行包装产品的全部现场操作，包括应归属于生产的公用工程、清洗、制冷以及现场排放或废物管理。 | `codex-cxc-52-2003`; `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `sb_route_conditionals` | route_specific_operations | 仅建模已声明产品实际采用的制备、烹调、油炸、烟熏、腌制、调味汁、裹粉、罐装、巴氏杀菌、灭菌、冷却、冷冻和储存操作；提供过程流程图并标识未采用的备选路线。 | `unsd-cpc-3-0-21270`; `codex-cxc-52-2003` |
| `sb_upstream_links` | purchased_inputs | 通过关联上游数据集表示甲壳类原料生产、配料、添加剂、包装、能源、供水、制冷剂和外部处理，不得省略其负荷。 | `eu-pef-2021-2279` |
| `sb_foreground_streams` | waste_and_emissions | 识别前景共产品、残余物、产品损失、废水流、废气、制冷剂损失以及向空气、水和土壤的直接排放；将分流清洁水与受污染废水分开。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `sb_cutoff_disclosure` | exclusions_and_cutoffs | 避免截断。任何排除的过程或流都必须明确标识，依据物料、能源及环境显著性说明理由，并作为局限性报告；已知危险、有毒或决定路线的流不得仅因质量低而排除。 | `eu-pef-2021-2279` |
| `sb_downstream_exclusion` | downstream_stages | 本前景数据集不含工厂门外配送、零售、消费者制备、消费和生命终结；更宽范围研究必须关联独立数据集并避免重复计数。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt_preparation` | 原料接收、调理、制备与清洗 | `required` | 始终纳入；具体保活、解冻、清洗、分级、去壳、剥壳、去肠线、修整或切割步骤取决于已声明来料状态 | 前景物料制备 | kg 已制备甲壳类中间产品 |
| `preservation_processing` | 配方与制备或保存处理 | `required` | 纳入实际路线：烹调、蒸制、油炸、烘烤、烟熏、腌制、加调味汁或油、糊或肉酱制作、裹粉、罐装、密闭包装、巴氏杀菌、灭菌或其他范围内处理 | 前景转化与保存 | kg 已保存散装产品 |
| `cooling_storage` | 冷却、冷藏、冷冻、挂冰衣与中间储存 | `conditional` | 已声明路线采用主动冷却、冷藏或冷冻储存、保存后冷冻、挂冰衣或冷藏暂存时纳入 | 前景温度控制 | kg 温度调理后产品 |
| `packaging_release` | 初级包装、标签、成品储存与放行 | `required` | 始终纳入；包装形式和储存条件取决于产品 | 前景完工和工厂门参考产出 | 1 kg 已放行净产品 |
| `cleaning_waste_management` | 清洗、卫生、残余物分流、废水与现场处理 | `required` | 纳入日常和换线清洗；现场处理直接建模，外部处理的流作为输出废物流建模 | 跨过程前景支持与排放控制 | 每 1 kg 已放行净产品分配的服务 |

### 过程：原料接收、调理、制备与清洗（`receipt_preparation`）

#### 输入

##### 产品流

###### 来料甲壳类原料（`rp_raw_crustacean`）

按物种或商品组、来源、来料状态、带壳状态、保存历史和质量记录每个接收批次。为已声明原料选择路线特定的 Tiangong 产品流及关联上游数据集。

- 选定流：路线特定的甲壳类产品流；前景数据包必须提供 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：生产参考产品批次所消耗的已接收原料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_materials`
- 来源：`unsd-cpc-3-0-21270`; `codex-cxc-52-2003`
- 数量范围：暂定原料筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：10
  - 单位：kg/kg 参考产品
  - 基准：每 kg 已放行净产品的已接收甲壳类原料质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备、解冻、清洗和用冰水（`rp_process_water`）

记录本过程中用于解冻、清洗产品或维持温度的计量或水量平衡水和冰。经核验卫生控制后回用的水应单独识别。

- 选定流：路线和地点特定的工艺水流；前景数据包必须提供 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测供水和冰，减去单独计量并回到同一过程的回收水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`codex-cxc-52-2003`; `eu-fdm-bat-2019-2031`
- 数量范围：暂定制备用水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 参考产品
  - 基准：每 kg 已放行净产品的制备用水和冰
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已制备甲壳类中间产品（`rp_prepared_intermediate`）

根据分选、清洗、去壳、剥壳、去肠线、修整或其他已声明制备步骤之后的批次记录，计算转入保存处理的质量。

- 选定流：产品特定的中间产品流；若表示为独立 Tiangong 交换则必须提供 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量，或已接收原料质量减去实测制备残余物和应归属损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移的已制备中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_lot_materials`
- 来源：`codex-cxc-52-2003`

###### 回收的壳或可食残余物共产品（`rp_recovered_coproduct`）

仅当存在有记录的市场、许可用途和可追溯去向时，才将壳、肉碎或其他分离物料记录为产品共产品；否则记录为废物。

- 选定流：去向特定的共产品流；分类为产品产出时必须提供 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：具有产品状态与去向记录并离开过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_waste_records`
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 未回收的壳、内脏、拒收物和制备残余物（`rp_solid_residue`）

按类型、质量、法律状态、处理路线和去向记录每种残余物。不得因流没有或仅有低销售价值而将其归为无负荷。

- 选定流：路线特定的废物流；前景数据包必须提供 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往各去向的实测残余物和拒收批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_waste_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`
- 数量范围：暂定制备残余物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 参考产品
  - 基准：每 kg 已放行净产品的制备残余物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备废水（`rp_preparation_wastewater`）

将废水体积或质量与分流清洁水分开记录，并标明其进入现场处理还是外部处理系统。

- 选定流：场址特定的废水流；前景数据包必须提供 UUID
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：离开制备操作的实测废水或水量平衡结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_monitoring`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定制备废水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 参考产品
  - 基准：每 kg 已放行净产品的制备废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：配方与制备或保存处理（`preservation_processing`）

#### 输入

##### 产品流

###### 已制备甲壳类中间产品投入（`pp_prepared_input`）

转移已制备中间产品，不重复计算其上游负荷。

- 选定流：与 `rp_prepared_intermediate` 相同的中间产品身份
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测或计算的已制备中间产品转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已保存散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_lot_materials`
- 来源：`codex-cxc-52-2003`

###### 配料、添加剂、裹料、油、调味汁或包装介质（`pp_ingredients`）

按物料身份、浓度或购入状态、质量、供应商和批次分别记录各配方组分。纳入产品保留水和烹调或煎炸油，不得将差异显著的配料合并为无法解释的平衡项。

- 选定流：配料特定的 Tiangong 产品流；前景数据包必须提供 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：生产批次领用量加库存减少量，减去有记录的退回或回收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_materials`
- 来源：`unsd-cpc-3-0-21270`; `codex-cxc-52-2003`
- 数量范围：暂定配方投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg 参考产品
  - 基准：每 kg 已放行净产品消耗和保留的配料总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保存处理的热能、蒸汽或燃料（`pp_thermal_energy`）

记录烹调、蒸制、油炸、烘烤、烟熏、巴氏杀菌、灭菌或杀菌釜操作所用的路线特定能源载体。区分直接燃料和购入蒸汽，并纳入启动、保温和应归属的清洗能耗。

- 选定流：场址特定的燃料、热量或蒸汽流；前景数据包必须提供 UUID
- 流属性/单位：路线特定的能量或燃料属性 / MJ、kWh、kg 或 m3
- 数量规则：直接计量，或按发票与库存平衡所得并分配至范围内生产路线的消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`codex-cxc-52-2003`; `eu-fdm-bat-2019-2031`
- 数量范围：暂定热能筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：MJ/kg 参考产品
  - 基准：每 kg 已放行净产品的交付热能
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 加工用电（`pp_electricity`）

记录输送、研磨、混合、切割、油炸、烟熏系统、泵、杀菌釜、控制和其他路线设备的电力，不含单独记录的制冷和包装电力。

- 选定流：地点和电压特定的电力流；前景数据包必须提供 UUID
- 流属性/单位：Energy / kWh
- 数量规则：分表计量用电，或按文件化共享电表规则分配至保存处理的用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`
- 数量范围：暂定加工用电筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kWh/kg 参考产品
  - 基准：每 kg 已放行净产品的加工用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已保存散装甲壳类产品（`pp_preserved_bulk`）

记录已声明保存步骤之后、路线特定最终冷却或包装之前的散装产品。

- 选定流：产品特定的中间产品流；若表示为独立 Tiangong 交换则必须提供 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：与原料、配料、残余物、保留介质、蒸发和其他损失核对后的实测转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已保存散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_lot_materials`
- 来源：`codex-cxc-52-2003`

##### 废物流

###### 保存处理残余物、废介质和产品损失（`pp_process_residue`）

按去向分别记录废煎炸油、腌汁或调味汁损失、裹料损失、杀菌釜拒收产品、不合格产品及其他路线特定残余物。

- 选定流：路线特定的废物流；前景数据包必须提供 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往回收、处理或处置的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_waste_records`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定保存处理残余物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 参考产品
  - 基准：每 kg 已放行净产品的保存处理残余物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保存处理废水（`pp_process_wastewater`）

当烹调、冷却、盐水、调味汁、杀菌釜、炸锅清洗和其他废水的处理方式或污染负荷差异显著时，按来源分别记录。

- 选定流：场址特定的废水流；前景数据包必须提供 UUID
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：保存处理的实测排放量或水量平衡结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_monitoring`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定保存处理废水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 参考产品
  - 基准：每 kg 已放行净产品的保存处理废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 路线特定的直接空气排放（`pp_direct_air_emissions`）

存在烟熏、燃烧、油炸或其他现场路线设备时，量化其直接排放。采用测量或有记录的活动数据计算分别记录各基本流，不得将本汇总角色用作最终交换身份。

- 选定流：污染物特定的基本流；前景数据包必须提供 UUID
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或活动数据乘以有记录的排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_monitoring`
- 来源：`eu-fdm-bat-2019-2031`

### 过程：冷却、冷藏、冷冻、挂冰衣与中间储存（`cooling_storage`）

#### 输入

##### 产品流

###### 待温度调理的已保存散装产品（`cs_bulk_input`）

将已保存散装产品转入实际的冷却、冷藏、冷冻、挂冰衣或冷藏暂存路线。

- 选定流：与 `pp_preserved_bulk` 相同的中间产品身份
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入温度调理的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 温度调理后产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_materials`
- 来源：`codex-cxc-52-2003`

###### 冷却、冷冻和储存用电（`cs_refrigeration_electricity`）

记录冷水机、冷冻机、冷库、泵、风机、挂冰衣系统和应归属冷藏暂存的用电。

- 选定流：地点和电压特定的电力流；前景数据包必须提供 UUID
- 流属性/单位：Energy / kWh
- 数量规则：分表计量用电，或基于设备负载和运行时间的工程分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`codex-cxc-52-2003`; `eu-fdm-bat-2019-2031`
- 数量范围：暂定制冷用电筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kWh/kg 参考产品
  - 基准：每 kg 已放行净产品的冷却、冷冻和储存用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 挂冰衣或冷却水（`cs_cooling_water`）

分别记录一次通过水、循环水和产品保留水，并标识水回用的卫生限制。

- 选定流：路线和地点特定的工艺水流；前景数据包必须提供 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测补充水加产品保留的冰衣水；循环水单独报告且不得重复计数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`codex-cxc-52-2003`; `eu-fdm-bat-2019-2031`
- 数量范围：暂定冷却用水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 参考产品
  - 基准：每 kg 已放行净产品的冷却和挂冰衣补充水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 温度调理后产品（`cs_conditioned_product`）

记录转入包装或放行储存的产品质量和已声明温度状态。

- 选定流：产品特定的中间产品流；若表示为独立 Tiangong 交换则必须提供 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量，包括作为已声明净产品销售的保留冰衣
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 温度调理后产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_materials`
- 来源：`codex-cxc-52-2003`

##### 废物流

###### 冷却和挂冰衣废水（`cs_cooling_wastewater`）

将排放的冷却水或挂冰衣水与未受污染闭路水分开记录，并标识其处理路线。

- 选定流：场址特定的废水流；前景数据包必须提供 UUID
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：实测排放量或冷却水量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_monitoring`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定冷却废水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 参考产品
  - 基准：每 kg 已放行净产品的冷却和挂冰衣废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 制冷剂损失（`cs_refrigerant_loss`）

按物质记录各制冷剂；无法直接测量时，根据经核验的充注、回收和补充记录计算应归属泄漏。

- 选定流：制冷剂特定的空气基本流；前景数据包必须提供 UUID
- 流属性/单位：Mass / kg
- 数量规则：年度或生产期制冷剂补充量加未回收充注变化量，按 `calc_shared_resources` 分配至范围内产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_monitoring`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定制冷剂损失筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 参考产品
  - 基准：每 kg 已放行净产品的制冷剂损失
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：初级包装、标签、成品储存与放行（`packaging_release`）

#### 输入

##### 产品流

###### 进入包装的产品（`pk_product_input`）

使用适合已声明路线的已保存散装产品或温度调理后产品，并只关联一次其上游负荷。

- 选定流：与 `pp_preserved_bulk` 或 `cs_conditioned_product` 相同的中间产品身份
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入包装线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位包装线产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_materials`
- 来源：`codex-cxc-52-2003`

###### 初级包装和销售单元包装材料（`pk_packaging_materials`）

按材料和质量分别记录罐、瓶、袋、薄膜、托盘、纸盒、标签、封口件、吸水垫和其他包装组分。仅当二级包装属于销售单元时才纳入；否则作为参考产品质量之外的运输包装建模。

- 选定流：材料特定的包装产品流；前景数据包必须提供 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：包装物料清单与领用、退回、破损和报废组分核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-cxc-52-2003`; `eu-pef-2021-2279`
- 数量范围：暂定包装筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg 参考产品
  - 基准：每 kg 已放行净产品的初级和销售单元包装
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装和成品储存用电（`pk_electricity`）

记录灌装、封口、贴标、检验、输送以及应归属的成品冷藏或常温储存用电。

- 选定流：地点和电压特定的电力流；前景数据包必须提供 UUID
- 流属性/单位：Energy / kWh
- 数量规则：分表计量用电，或依据设备负载、运行时间和储存占用量进行文件化分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`
- 数量范围：暂定包装用电筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kWh/kg 参考产品
  - 基准：每 kg 已放行净产品的包装和成品储存用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已放行参考产品（`pk_reference_product`）

该流为定量参考。已放行批次必须具备全部必需限定信息，并通过已声明的放行规格。

- 选定流：甲壳类动物，以其他方式制备或保存 `d844fbf5-2247-4c2d-8071-7dab57ad8c77`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 已放行净产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 包装废料和被拒收的已包装产品（`pk_packaging_waste`）

按材料分别记录包装废料，并将被拒收的已包装产品与洁净包装废料区分，使产品内容和包装去向均可追溯。

- 选定流：材料和处理特定的废物流；前景数据包必须提供 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按去向计量的包装废料和被拒收已包装产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_waste_records`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定包装废物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg 参考产品
  - 基准：每 kg 已放行净产品的包装废料和被拒收已包装产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：清洗、卫生、残余物分流、废水与现场处理（`cleaning_waste_management`）

#### 输入

##### 产品流

###### 清洗和卫生用水（`cw_cleaning_water`）

记录设备、地面、容器、原位清洗、卫生和换线所用水。处理后回用水应单独识别，并防止循环水量被重复计数。

- 选定流：路线和地点特定的工艺水流；前景数据包必须提供 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测清洗供水量，减去单独计量并在同一前景系统内回用的回收水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`codex-cxc-52-2003`; `eu-fdm-bat-2019-2031`
- 数量范围：暂定清洗用水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 参考产品
  - 基准：每 kg 已放行净产品的清洗和卫生用水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗化学品和处理耗材（`cw_cleaning_chemicals`）

按配方质量记录每种清洁剂、消毒剂、pH 调节剂、絮凝剂和其他处理耗材，相关时同时记录活性成分浓度。

- 选定流：化学品特定的产品流；前景数据包必须提供 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：范围内操作的领用质量加库存减少量，减去有记录的退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_materials`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定清洗化学品筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 参考产品
  - 基准：每 kg 已放行净产品的配制清洗和处理化学品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 收集的工艺废水（`cw_wastewater_input`）

现场处理时，将各废水流作为废物投入转入，且不重复计算上游过程产出。外部处理时，省略该现场转移，保留产生过程的输出废物交换。

- 选定流：与产生过程输出相同的废水身份
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：扣除分流未受污染水后，转入现场处理的实测废水总量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_monitoring`
- 来源：`eu-fdm-bat-2019-2031`

##### 基本流

#### 输出

##### 产品流

###### 回收水或可用残余物（`cw_recovered_output`）

仅当有实测数量、质量规格、许可用途和有记录去向时，才记录回收水、沼气、动物饲料物料或其他可用产出。内部循环仅报告一次；除非下游模型明确应用有依据的替代规则，不产生避免的上游负荷。

- 选定流：去向特定的回收产品流；表示为产品产出时必须提供 UUID
- 流属性/单位：路线特定的属性和单位
- 数量规则：交付内部回用或外部用户的实测回收产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_waste_records`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

###### 废水处理污泥和分离固体（`cw_treatment_residue`）

按湿基或干基质量、可得时的组成、处理路线和去向记录处理残余物。

- 选定流：处理特定的废物流；前景数据包必须提供 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开现场处理的实测污泥和分离固体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_waste_records`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定处理残余物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 参考产品
  - 基准：每 kg 已放行净产品的湿基处理残余物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 处理后向水体排放的出水（`cw_treated_effluent`）

直接排放时，根据同期间实测流量和代表性浓度，分别将出水和各相关污染物记录为基本流。排入外部处理系统时，使用废水废物流。

- 选定流：水和污染物特定的基本流；前景数据包必须提供 UUID
- 流属性/单位：Mass / kg
- 数量规则：对每种污染物，以实测出水流量乘以代表性实测浓度并进行单位换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_monitoring`
- 来源：`eu-fdm-bat-2019-2031`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared_processes_and_outputs | 首先通过细分生产线、批次、计量表和过程记录避免分配；当新增功能明确属于研究时也可通过系统扩展避免分配。 | `eu-pef-2021-2279` |
| `allocation_physical` | unavoidable_multifunctionality | 无法实施细分或系统扩展时，采用有记录的因果物理关系分配输入和输出，例如独立测量的质量、加工时间、设备负载或与共享操作相关的其他驱动因素。 | `eu-pef-2021-2279` |
| `allocation_other_relationship` | no_relevant_physical_relationship | 仅在记录为何不适用细分、系统扩展和相关物理分配后，方可使用其他关系，包括特定生产阶段的经济价值；披露价格时期、地域、来源和敏感性。 | `eu-pef-2021-2279` |
| `allocation_residue_status` | shells_offcuts_recovered_material_and_waste | 根据法律状态、实际去向、质量规格和交易证据，判定每种壳、边角料、废介质、回收配料或其他残余物是共产品还是废物；不得自动赋予避免负荷。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `allocation_factor_check` | allocated_inventory | 每个共享清单块的分配因子必须非负、互斥，并在舍入容差内合计为 1；审计表必须保留未分配总量。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_materials` | `receipt_preparation`; `preservation_processing`; `cooling_storage`; `packaging_release`; `cleaning_waste_management` | 原料、中间产品、配料、添加剂、化学品和最终产品 | 地磅、校准秤、配方、批次、发票和库存记录 | lot_id; product_id; supplier; species_or_group; origin; incoming_state; shell_state; material_id; concentration; opening_stock; received; issued; returned; closing_stock; measured_mass; timestamp | 将校准秤和批次记录与采购及库存变化核对；保留配方版本和拒收批次记录 | kg 和已声明浓度基准 | 每批次，按月汇总 | 完整代表性报告期；通常为连续 12 个月，或有理由说明的完整季节性生产期 | 已声明设施全部纳入的生产线和班次 | 按物料和路线汇总消耗质量，关联已放行产品批次，并按 `calc_reference_normalization` 归一化 | 校准记录；库存核对；批次追溯；签署的配方和放行记录 |
| `cp_route_conditions` | `receipt_preparation`; `preservation_processing`; `cooling_storage`; `packaging_release` | 加工路线和产品状态 | 过程记录、HACCP 或控制记录、设备历史数据和放行规格 | lot_id; process_step; equipment_id; start_time; end_time; temperature; pressure; humidity; storage_condition; preservation_medium; cooking_or_treatment_status; deviation; corrective_action | 导出经核验的过程记录，并保留路线特定关键或质量控制证据；不替代适用食品安全要求 | 过程原始单位 | 每批次和每个受监控控制间隔 | 完整报告期 | 全部纳入路线设备 | 将各批次与实际采用步骤关联，汇总持续时间和条件分布且不以平均值掩盖偏差 | 仪器校准；经复核控制记录；偏差和放行决定 |
| `cp_utility_meters` | `receipt_preparation`; `preservation_processing`; `cooling_storage`; `packaging_release`; `cleaning_waste_management` | 水、冰、电力、燃料、蒸汽、热量、制冷和压缩空气 | 分表、公用事业发票、储罐读数、生产历史数据和设备记录 | meter_id; utility_type; opening_reading; closing_reading; unit; timestamp; equipment_id; line_id; operating_hours; production_mass; excluded_use; reused_water | 优先使用过程或生产线分表；与场址总量核对，共享服务采用有记录的物理驱动因素 | 计量表或发票原始单位 | 按来源连续、班次、批次或月度 | 完整报告期，包含启动、停机、清洗和储存 | 全部纳入前景操作 | 扣除边界外用途，防止表间重复计数，按 `calc_shared_resources` 分配共享总量后归一化 | 计量表校准或核验；发票；场址核对；分配工作表 |
| `cp_packaging_records` | `packaging_release` | 初级包装和销售单元包装 | 包装规格、物料清单、领用和废料记录及组分称量 | product_id; packaging_component; material; supplier; component_mass; units_issued; units_returned; units_scrapped; released_units | 通过规格或代表性称量核验组分质量，并核对领用、退回和废料数量 | kg 和件数 | 每个包装规格和生产批次 | 完整报告期 | 服务该产品的全部包装线 | 包装消耗量等于领用减退回，废料单列，再除以已放行净产品质量 | 批准规格；秤校准；库存核对；包装变更历史 |
| `cp_residue_waste_records` | `receipt_preparation`; `preservation_processing`; `packaging_release`; `cleaning_waste_management` | 共产品、壳、边角料、拒收物、废介质、包装废料、污泥和其他废物 | 料箱或容器称量、废物联单、销售记录、转运单和处理证明 | stream_id; material_description; legal_status; wet_or_dry_basis; mass; destination; treatment; sale_value; batch_or_period; transporter; receipt | 可行时称量每种分流，并将内部转移与外部去向记录核对 | kg | 每次转移，按月汇总 | 完整报告期 | 全部纳入前景操作和去向 | 按流、状态和去向汇总；过程间内部转移抵销一次；外部产出保留为交换 | 校准秤；联单或转运收据；去向和状态证据 |
| `cp_emission_monitoring` | `receipt_preparation`; `preservation_processing`; `cooling_storage`; `cleaning_waste_management` | 废水、废气、直接排放和制冷剂损失 | 流量计、混合样或点样、实验室结果、烟道测试、燃料记录、制冷剂维护记录和处理报告 | stream_id; location; flow_or_activity; sampling_period; concentration; pollutant; analytical_method; detection_limit; fuel_use; emission_factor; refrigerant_charge; top_up; recovery; unit | 在代表性点位监测相关流；浓度与同期间流量配对；仅在没有直接测量时采用有记录因子 | 测量原始单位 | 频次适合流的变异性和适用许可，至少足以代表报告期 | 完整报告期和全部运行模式 | 全部应归属前景系统的直接排放点 | 按 `calc_emission_load` 计算负荷，明确低于检出限的处理，并按 `calc_shared_resources` 分配共享排放 | 实验室资质或方法记录；仪器校准；样品流转；许可报告；维护记录 |
| `cp_reference_release` | `packaging_release` | 参考产品产出和限定信息 | 放行记录、标签、产品规格、仓库交易和销售单元重量检查 | lot_id; reference_flow_uuid; species_or_group; origin; route; formulation; shell_state; cooking_status; package_type; net_mass; storage_condition; shelf_life; released_mass; release_status | 将已放行产品质量和全部必需限定信息关联至清单所用生产与包装记录 | kg | 每个已放行批次 | 完整报告期 | 已声明设施和产品变体 | 分母仅包括已放行合格质量；排除或拒收质量作为独立废物或返工记录保留 | 放行授权；标签和规格；校准的净重检查；追溯链接 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部前景交换 | 归一化交换量 = 应归属交换量 / 已放行净产品质量，再乘 1 kg 参考数量 | 应归属交换量；来自 `cp_reference_release` 的已放行净产品质量 | 每 1 kg 参考产品的交换量 | `eu-pef-2021-2279` |
| `calc_material_consumption` | 原料、配料、添加剂、化学品和包装 | 消耗量 = 期初库存 + 收货 - 期末库存 - 有记录的退回量；与直接领用和批次记录核对 | 来自 `cp_lot_materials` 或 `cp_packaging_records` 的库存、采购、退回、领用、配方和批次字段 | 按物料和产品路线的消耗质量 | `eu-pef-2021-2279` |
| `calc_mass_balance` | 各过程和完整前景系统 | 在一致的湿基、干基或浓度基准上，将质量投入与产品、共产品、废物、废水、蒸发、保留水和其他量化产出核对；调查并披露残差 | 物料记录；废水；残余物；产品转移；水分和浓度换算 | 按过程和报告期的质量平衡表及残差 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `calc_shared_resources` | 共享公用工程、清洗、储存、排放和处理 | 先分配直接计量量；剩余共享量采用运行时间、设备负载、水流量或产品质量等最具因果性的已核验驱动因素；保留总量和因子合计 | 场址和分表总量；驱动因素记录；边界外用途；按路线的已放行产品 | 应归属共享清单和分配审计表 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `calc_emission_load` | 废水和废气污染物 | 污染物负荷 = 匹配的流量或气体体积 × 代表性浓度；记录密度、干湿基、参考状态和单位换算 | 流量、浓度、采样期、分析结果和气体状态 | 每报告期和每参考产品的污染物质量 | `eu-fdm-bat-2019-2031` |
| `calc_refrigerant_loss` | 制冷系统 | 损失 = 经核验补充量 + 期初充注量 - 期末充注量 - 回收量 - 有记录转移量；调查负值或不合理结果 | 制冷剂充注、补充、回收、转移和维护记录 | 分配至参考产品的制冷剂特定空气损失 | `eu-fdm-bat-2019-2031` |
| `calc_allocation` | 多功能过程块 | 应用第 7 节层级和证据要求；对每个产出保存未分配总量、因子、驱动因素、分配量和敏感性 | 过程总量；产出数量；物理驱动因素或经济数据；分配决定 | 各产出的已分配清单，因子合计为 1 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_traceability` | 参考产品和原料 | 将每个纳入的已放行产品批次关联至物种或商品组、已知时的来源、来料状态、加工路线、配方、包装和原料批次。 | 批次谱系；供应商与接收记录；路线记录；放行规格；`codex-cxc-52-2003` |
| `dq_completeness` | 前景清单 | 覆盖已声明边界内全部已知物料和能源投入、产品、共产品、废物、废水及直接排放；报告核对残差、截断和数据缺口。 | 过程流程图；质量、水和能源核对；排放清单；`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `dq_temporal_coverage` | 活动数据 | 使用完整代表性期间，通常为连续 12 个月；年度运行不具代表性时可采用完整季节性生产期并记录局限。 | 有日期的计量、批次、库存、废物、排放和放行记录；生产日历；`eu-fdm-bat-2019-2031` 中 BAT 年平均基准 |
| `dq_representativeness` | 前景和关联数据集 | 披露前景及重要上游数据集的技术、地域和时间代表性、精度、方法一致性和完整性。 | 数据质量评估和数据集元数据；`eu-pef-2021-2279` |
| `dq_measurement_control` | 实测值和计算值 | 保留适合各记录的校准、分析方法、检出限、采样、样品流转、计量核对和计算版本证据。 | 校准证书；实验室和采样记录；计算工作簿或可复现脚本；`codex-cxc-52-2003`; `eu-fdm-bat-2019-2031` |
| `dq_route_conditions` | 路线特定过程控制 | 保留证明实际操作以及已放行批次符合已声明市场状态所需的处理、冷却、储存和偏差记录；不得从 LCA 数据推断食品安全合规。 | 过程历史数据；受监测控制记录；偏差和纠正措施记录；放行决定；`codex-cxc-52-2003` |
| `dq_allocation_audit` | 共享和多功能清单 | 保存直接测量、分配层级决定、驱动因素、因子计算、因子合计、采用时的价格基准和敏感性。 | 分配审计表和支持记录；`eu-pef-2021-2279` |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference_flow | 参考产品 UUID、Mass 流属性 UUID、Units of mass UUID、1 kg 数量和净产品基准必须与第 3 节一致。 |  |
| `val_required_qualifiers` | dataset_metadata | 每项必需限定信息必须存在，并在参考流、产品说明、过程记录、包装和放行数据之间保持一致。 | `unsd-cpc-3-0-21270`; `codex-cxc-52-2003` |
| `val_scope_exclusions` | product_scope | 本 PCR 拒绝完整预制餐食、仅冷冻/盐渍/干燥/盐水浸渍的甲壳类、提取物和汁液；除非有独立依据的更宽范围研究仅将本数据集用于合格的制备甲壳类组分。 | `unsd-cpc-3-0-21270` |
| `val_process_route` | process_map | 已声明路线实际采用的每项操作必须出现在过程流程图和清单中；未采用的备选操作不得贡献清单。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `val_mass_balance` | material_inventory | 原料和配料必须在一致基准上与产品、共产品、残余物、废水、保留水、蒸发和其他产出核对；残差必须说明并披露不确定性。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `val_water_energy_coverage` | utility_inventory | 水、冰、电力、燃料、蒸汽、制冷、清洗和储存必须实测或明确说明不适用；共享数量必须有分配审计。 | `eu-fdm-bat-2019-2031` |
| `val_waste_emission_coverage` | waste_and_emissions | 每种固体残余物、废水流、废气、制冷剂损失和直接排放必须有身份、数量方法、去向或环境介质以及重复计数检查。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `val_packaging` | packaging_inventory | 包装组分必须核对领用、退回、废料和已放行数量；参考产品质量不得包含未随产品销售的运输包装。 | `eu-pef-2021-2279` |
| `val_allocation_hierarchy` | allocation | 必须先考虑细分或系统扩展，再考虑物理分配；仅在说明驳回理由并进行敏感性分析后方可采用其他关系；因子必须合计为 1。 | `eu-pef-2021-2279` |
| `val_upstream_links` | background_datasets | 重要甲壳类原料、配料、添加剂、包装、能源、水、制冷剂和外部处理交换必须关联代表性数据集，或披露经核验的数据缺口。 | `eu-pef-2021-2279` |
| `val_temporal_representativeness` | reporting_period | 活动数据必须覆盖已声明代表性期间，并纳入启动、停机、清洗、储存、拒收生产和全部纳入班次，或记录每项排除。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `val_reasoned_estimates` | provisional_ranges | `reasoned_estimate` 范围仅为候选阶段筛选辅助，不得替代前景采集；在启用前必须由方法学评审替换或明确接受。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 制备或保存甲壳类的产品和设施特定前景制造数据集 |
| downstream_use | 经评审后可作为 `secondary_dataset` 或 `background_dataset` 发布和使用，并按研究范围关联上游和下游数据集 |
| allowed_use | 用于已声明物种或产品组、配方、路线、包装、技术、设施、地域、报告期和市场状态的工厂门制造清单；在边界无重叠连接时，可作为从摇篮到工厂门或更宽产品系统的组成部分 |
| excluded_use | 原始捕捞或养殖生产；简单冷冻、盐渍、干燥或盐水浸渍；完整预制餐食；甲壳类提取物或汁液；未声明的配方、路线、技术、地域或储存状态；食品安全认证 |
| required_metadata | PCR id 和版本；参考 UUID；全部必需限定信息；设施和地域；报告期；过程流程图；技术和产能；纳入和排除操作；产品和共产品状态；上游数据集引用；分配；截断；数据缺口；来源和计算版本 |
| required_quality_disclosure | 质量、水和能源核对；时间、技术、地域和精度评估；计量表和实验室证据；路线控制覆盖；分配审计；暂定范围；不确定性和局限；评审状态 |
| update_trigger | 物种或采购结构、配方、制备或保存路线、技术、产能、能源或供水系统、制冷剂、包装、产品市场状态、废物或废水处理、分配、适用法规、参考 UUID 发生重大变化，或新证据使规则或暂定范围失效 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21270` | `standard` | 联合国统计司，《产品总分类第 3.0 版》，子类 21270 解释性说明，2025 年 6 月 30 日。[官方 PDF](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf)。检索日期：2026-08-11。 | 产品范围、纳入的制备和保存路线以及排除项 |
| `codex-cxc-52-2003` | `standard` | 国际食品法典委员会，《鱼和渔业产品操作规范》，CXC 52-2003（FAO 提供的官方合并文本）。[官方 PDF](https://www.fao.org/input/download/standards/10273/CXP_052e.pdf)。检索日期：2026-08-11。 | 甲壳类过程分解；接收、清洗、烹调、冷却、剥壳、包装、储存、监测、追溯和路线特定控制记录 |
| `eu-pef-2021-2279` | `official_guidance` | 欧盟委员会建议 (EU) 2021/2279，关于环境足迹方法的使用，附件 I 产品环境足迹方法。[官方文本](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279)。检索日期：2026-08-11。 | 功能单位和参考流、系统边界、公司特定数据、截断、多功能性和分配层级、数据质量、完整性和披露 |
| `eu-fdm-bat-2019-2031` | `official_guidance` | 欧盟委员会实施决定 (EU) 2019/2031，食品、饮料和乳品行业最佳可行技术结论，包括鱼类和贝类加工。[官方文本](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019D2031)。检索日期：2026-08-11。 | 水、能源、原料、废水、废气和残余物清单；监测；资源效率；鱼类和贝类加工排放及用水管理 |
