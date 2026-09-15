---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-fish-meal
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 食用鱼粉

## 1. 范围与适用性

本 PCR 适用于将可食鱼类原料经稳定化、干燥和粉碎制成供人类食品使用的食品级食用鱼粉或粉末。范围包括散装以及面向消费者或食品生产的包装产品，并要求声明保藏路线和产品状态。

范围不包括仅供饲料、肥料或工业用途的非食用鱼粉；未粉碎成粉的整条或分割干制/熏制鱼；仅以鱼粉为配料的预制食品；分离鱼油或蛋白分离物；以及非鱼类粉。鱼种、野生捕捞或养殖来源、原料形态、添加剂、盐渍或烟熏处理、目标水分、包装和食品安全状态是必需限定信息，因为这些信息会实质影响清单和产品功能。

默认报告边界为从摇篮到工厂门。前景采集始于食用鱼原料及其他采购投入在鱼粉设施的接收。捕捞或养殖、卸货，以及采购能源、水、冰、配料和包装的生产通过上游数据集连接，不在同一前景系统内重复建立。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-fish-meal |
| classification_refs | CPC 3.0: 21233, Edible fish meal（精确映射语境） |
| covered_products | 以食用鱼类原料经稳定化、干燥和粉碎制成的食品级食用鱼粉或鱼粉末 |
| excluded_products | 饲料级或工业鱼粉；肥料；整条或分割干制/熏制鱼；鱼类预制食品；分离鱼油或蛋白分离物；非鱼类粉 |
| representative_product | 生产设施门口的已包装食用鱼粉 |
| production_route | 接收与准备；热处理或等效稳定化；适用时脱水；干燥；研磨/筛分；可选盐渍或烟熏处理；冷却；包装；适用冷藏；废水和残余物管理 |
| market_state | 食品级干燥鱼粉或粉末，散装或包装，并声明水分状态、保藏路线和储存条件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 适用于所声明人类食品用途的食用鱼粉 |
| How much | 生产设施门口 1 kg 净质量食用鱼粉 |
| How well | 符合所声明的鱼种/原料组成、颗粒形态、水分状态、盐/烟熏/添加剂状态、包装、储存条件和适用食品安全规范 |
| How long or cycle | 一个生产批次直至设施门口放行；声明保质期，但不建模消费持续时间 |
| reference_flow_link | 参考流是 `packaging_release` 输出的已包装或声明为散装的食用鱼粉 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净产品质量 |
| 参考产品流 | 食用鱼粉 `fa402946-6236-41bb-8a2d-f7890b2e75cf` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 鱼种或鱼种组；野生捕捞/养殖及地理来源；原料形态；食用级规范；保藏和干燥路线；盐/烟熏/添加剂状态；水分基准；颗粒形态；散装/包装形式；储存温度；生产地理和期间 |

构建前景数据包时，每项必需限定信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考食用鱼粉 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告恰好 1 kg 食用鱼粉净质量，不含托盘和运输包装；声明清单是否包含直接包装。 |
| `moisture_basis` | 原料、中间体和产品质量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按实测记录湿质量，并分别记录原料、干燥中间体和放行鱼粉的水分分数；未保留公式和检测结果时不得在湿基与干基间换算。 |
| `utility_conversion` | 电力和热能 | Energy | 电力用 kWh；燃料、蒸汽或热量用 MJ | 保留实测公用工程单位和换算因子；不得将电力与热能按可互换量直接相加。 |
| `packaging_net_mass` | 包装和参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按产品净质量归一化，包装材料按材料种类和实测质量分别报告。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 食用鱼原料接收状态，并声明鱼种/来源、物理形态、保藏条件、水分、温度和供应商/批次身份 |
| starting_condition_role | 作为前景食用鱼粉设施的采购或转入产品输入 |
| product_classification_scope | 食用鱼粉语义产品类别；CPC 3.0 代码 21233 是映射语境而非规范身份 |
| recursive_input_rule | 若输入已是本类别食用鱼粉，则以采购产品输入记录其上游数据集和数量；不得在同一前景包中递归重建其生产。 |
| upstream_dataset_requirement | 为鱼原料、进厂运输、能源载体、水/冰、配料、包装、处理服务和其他采购投入连接有代表性的上游数据集。 |
| disclosure | 声明排除阶段、外包作业、保藏路线、冷链使用、分配事件、共产品、废物去向，以及表示散装还是直接包装。 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_gate_rule` | 从摇篮到工厂门模型 | 纳入从接收到食用鱼粉放行的全部前景作业，包括准备、稳定化、适用时脱水、干燥、研磨/筛分、冷却、包装、适用冷藏、清洗、废水、残余物管理和直接排放。应连接上游及处理数据集，不得截断这些负荷。 | `eu-pef-2021-2279` |
| `boundary_food_safety_rule` | 食品级加工 | 纳入针对所声明鱼类原料和保藏路线控制生物、化学和物理危害所需的过程步骤和监测；剔除原料与卫生流跨越前景边界。 | `codex-cxc-52-2003` |
| `boundary_cutoff_rule` | 清单完整性 | 仅当证明并披露某流对质量、能源、环境显著性和合规均不重要时才可省略；危险排放、制冷剂、食品安全剔除物和与分配有关的共产品不得仅因质量小而省略。 | `eu-pef-2021-2279`; `codex-cxc-52-2003` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt_preparation` | 原料接收与准备 | required | 始终 | 建立起始状态；记录鱼原料、冰/冷保藏、分选、清洗、修整和准备后原料 | kg 准备后鱼类原料 |
| `stabilization_drying` | 稳定化、脱水与干燥 | required | 始终；单元操作反映所声明技术 | 稳定食用原料并将水分降至声明的鱼粉状态 | kg 干燥稳定化原料 |
| `milling_finishing` | 研磨、筛分与整理 | required | 始终 | 形成声明颗粒形态并记录回流或剔除物 | kg 散装食用鱼粉 |
| `packaging_release` | 冷却、包装、储存与放行 | required | 始终；仅在使用时纳入冷藏 | 在设施门口产生参考流 | 1 kg 净食用鱼粉 |
| `wastewater_residuals` | 废水与残余物处理 | conditional | 报告组织内开展处理或记录直接排放时 | 记录处理投入、回收材料、废物和基本流排放 | kg 已处理废水或残余物 |

### 过程：原料接收与预处理（`receipt_preparation`）

#### 输入

##### 产品流

###### 冷藏原料鱼（`raw_fish_chilled_input`）

按适用条件记录“冷藏原料鱼”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：冷藏原料鱼 `dd9e0589-ca55-4dad-8940-79a60c3bd7af`
- 适用条件：仅适用于冷藏原料鱼；冷冻鱼、鲜/冷藏鱼片或鱼肉、食用鱼下脚料使用各自原子行
- 流属性/单位： Mass / kg
- 数量规则：分配至生产批次的实测合格原料湿质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`
- 数量范围：可替换的原料鱼至鱼粉得率 QA 筛查范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 1.1
  - 上限： 10
  - 单位： kg
  - 基准：每 1 kg 放行食用鱼粉
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 冷冻鱼（`raw_frozen_fish_input`）

按适用条件记录“冷冻鱼”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：冻鱼 `bbae8c72-d732-4f53-bdd5-aff8a0f39d48`
- 适用条件：仅适用于冷冻整鱼或等效冷冻鱼投入
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至生产批次的实测合格原料湿质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

###### 鲜或冷藏鱼片与鱼肉（`raw_fish_meat_input`）

按适用条件记录“鲜或冷藏鱼片与鱼肉”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：鱼片和鱼肉（无论是否剁碎），新鲜或冷藏 `a1c31d45-a225-426f-908a-f79eae6c071f`
- 适用条件：仅适用于鲜或冷藏鱼片/鱼肉投入
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至生产批次的实测合格原料湿质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

###### 食用鱼下脚料（`raw_edible_fish_offal_input`）

按适用条件记录“食用鱼下脚料”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：食用鱼内脏，鱼鳍、鱼头、鱼尾、鱼肚和其他食用鱼内脏 `be045cb1-719b-41b1-9bec-bf27cf50c401`
- 适用条件：仅适用于食品级食用鱼下脚料；不可食用拒收物仍作为废物
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至生产批次的实测合格原料湿质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

###### 卸港环节供应的冰（`ice_cold_input`）

按适用条件记录“卸港环节供应的冰”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：冰 `b30afcbe-38ce-47a9-9da5-a1278329b9ba`
- 适用条件：仅适用于经核验流所表示的卸港状态外购水冰
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测采购或添加质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_cold_chain_records`
- 数量范围：可替换的冰用量 QA 筛查范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 2
  - 单位： kg
  - 基准：每 1 kg 放行食用鱼粉
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预处理食用鱼（`prepared_fish_output`）

按适用条件记录“预处理食用鱼”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Prepared edible fish
- 流属性/单位： Mass / kg
- 数量规则：合格原料鱼减去实测分离的预处理残余物，并对保留的冰/水进行核对
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 kg 预处理鱼输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_material_mass_balance`

##### 废物流

###### 拒收或不可食用预处理残余物（`preparation_residuals`）

按适用条件记录“拒收或不可食用预处理残余物”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Inedible fish offal
- 流属性/单位： Mass / kg
- 数量规则：按去向实测湿质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

##### 基本流

### 过程：稳定化、脱水与干燥（`stabilization_drying`）

#### 输入

##### 产品流

###### 预处理食用鱼（`prepared_fish_input`）

按适用条件记录“预处理食用鱼”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Prepared edible fish
- 流属性/单位： Mass / kg
- 数量规则：转移的实测/计算预处理质量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 kg 干燥稳定化鱼输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_material_mass_balance`

###### 工艺与卫生用水（`process_water_input`）

按适用条件记录“工艺与卫生用水”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量用水量或依据工厂水表记录形成的有据分配量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_utility_records`
- 数量范围：可替换的用水量 QA 筛查范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 20
  - 单位： kg
  - 基准：每 1 kg 放行食用鱼粉
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 加工用中国低压电网电力（`processing_grid_electricity_low_voltage`）

按适用条件记录“加工用中国低压电网电力”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 适用条件：仅适用于中国低于 1 kV 的电网消费组合；不得用于中压或非中国供电
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：计量电量或依据工厂电表记录形成的有据分配量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_utility_records`
- 数量范围：可替换的加工用电 QA 筛查范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0.05
  - 上限： 5
  - 单位： kWh
  - 基准：每 1 kg 放行食用鱼粉
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 加工用中国中压电网电力（`processing_grid_electricity_medium_voltage`）

按适用条件记录“加工用中国中压电网电力”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 适用条件：仅适用于中国 1-35 kV 电网消费组合；不得用于低压或非中国供电
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：计量电量或依据工厂电表记录形成的有据分配量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_utility_records`

###### 稳定化与干燥用外购蒸汽（`processing_steam_input`）

按适用条件记录“稳定化与干燥用外购蒸汽”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：蒸汽 `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 适用条件：仅适用于 11.0 MPaG 蒸汽；其他压力或产汽路线须另建原子交换
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：蒸汽计量值或经凝结水修正的工程衡算值，并换算为交付能量用于公用工程核对
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_utility_records`
- 数量范围：可替换的热能 QA 筛查范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0.1
  - 上限： 50
  - 单位： MJ
  - 基准：每 1 kg 放行食用鱼粉
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 外购工业热水（`processing_hot_water_input`）

按适用条件记录“外购工业热水”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Industrial hot water
- 适用条件：仅适用于外购或转移的热水供给；不得与蒸汽合并
- 流属性/单位： Energy / MJ
- 数量规则：由热水计量质量及温差换算交付能量，且不得重复计算回水
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_utility_records`

###### 现场供热用天然气（`processing_natural_gas_input`）

按适用条件记录“现场供热用天然气”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量质量，或使用实测密度和声明低位热值换算的计量体积
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_utility_records`

###### 现场供热用液化石油气（`processing_lpg_input`）

按适用条件记录“现场供热用液化石油气”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：液化石油气 `3786072f-d3ce-4941-9249-ed5d346b21a6`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测钢瓶或储罐领用量，经库存变动核对并用声明热值换算
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_utility_records`

###### 现场供热用柴油（`processing_diesel_input`）

按适用条件记录“现场供热用柴油”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测储罐领用量，经库存变动核对并用声明低位热值换算
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_utility_records`

###### 现场供热用重质燃料油（`processing_heavy_fuel_oil_input`）

按适用条件记录“现场供热用重质燃料油”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：重质燃料油
- 流属性/单位： Mass / kg
- 数量规则：实测储罐领用量，经库存变动核对并用声明低位热值换算
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_utility_records`

###### 现场供热用未处理木片（`processing_biomass_wood_chips_input`）

按适用条件记录“现场供热用未处理木片”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Untreated wood chips
- 流属性/单位： Mass / kg
- 数量规则：实测接收态质量，并保留水分及低位热值换算
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_utility_records`

###### 食品级食盐（`food_grade_salt_input`）

按适用条件记录“食品级食盐”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：食盐 `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测投加至生产批次的质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_ingredient_records`
- 数量范围：可替换的盐/烟熏投入 QA 筛查范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 0.3
  - 单位： kg
  - 基准：每 1 kg 放行食用鱼粉
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 液体烟熏香料（`liquid_smoke_input`）

按适用条件记录“液体烟熏香料”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Liquid smoke flavouring
- 流属性/单位： Mass / kg
- 数量规则：实测投加至生产批次的质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_ingredient_records`

###### 食品烟熏用未处理硬木片（`smoking_wood_chips_input`）

按适用条件记录“食品烟熏用未处理硬木片”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Untreated hardwood chips for food smoking
- 流属性/单位： Mass / kg
- 数量规则：实测投加至发烟器的接收态质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_ingredient_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 干燥稳定化食用鱼（`dried_material_output`）

按适用条件记录“干燥稳定化食用鱼”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Dried stabilized edible fish
- 流属性/单位： Mass / kg
- 数量规则：实测输出质量及水分检测结果
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 kg 干燥稳定化鱼输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

##### 废物流

###### 加工与卫生废水（`process_wastewater_output`）

按适用条件记录“加工与卫生废水”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Fish-processing wastewater
- 流属性/单位： Mass / kg
- 数量规则：计量排放量或按计算规则记录的水平衡估算量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_waste_records`
- 数量范围：可替换的废水量 QA 筛查范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 20
  - 单位： kg
  - 基准：每 1 kg 放行食用鱼粉
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 分离鱼固形物（`separated_fish_solids_output`）

按适用条件记录“分离鱼固形物”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Separated fish solids
- 流属性/单位： Mass / kg
- 数量规则：按去向实测湿质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`
- 数量范围：可替换的残余物输出 QA 筛查范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 9
  - 单位： kg
  - 基准：每 1 kg 放行食用鱼粉
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 鱼干燥细粉（`dryer_fines_output`）

按适用条件记录“鱼干燥细粉”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Fish dryer fines
- 流属性/单位： Mass / kg
- 数量规则：按去向实测干质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

##### 基本流

###### 排入空气的化石源二氧化碳（`direct_fossil_co2_air`）

按适用条件记录“排入空气的化石源二氧化碳”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位： Mass / kg
- 数量规则：实测排放量或使用留存碳含量及氧化数据的燃料特定计算量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_emission_records`

###### 排入空气的氮氧化物（`direct_nox_air`）

按适用条件记录“排入空气的氮氧化物”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：氮氧化物，排入空气
- 流属性/单位： Mass / kg
- 数量规则：实测烟气排放量或有据排放因子计算量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_emission_records`

###### 排入空气的二氧化硫（`direct_so2_air`）

按适用条件记录“排入空气的二氧化硫”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Sulfur dioxide, to air
- 流属性/单位： Mass / kg
- 数量规则：实测烟气排放量或有据燃料硫计算量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_emission_records`

###### 排入空气的细颗粒物（`direct_pm25_air`）

按适用条件记录“排入空气的细颗粒物”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Particulate matter, 0.2-2.5 micrometres, to air
- 流属性/单位： Mass / kg
- 数量规则：实测烟气排放量或有据设备特定计算量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_emission_records`

###### 排入水体的化学需氧量（`direct_cod_water`）

按适用条件记录“排入水体的化学需氧量”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：化学需氧量，排入水体
- 流属性/单位： Mass / kg
- 数量规则：实测浓度乘以监测排放体积
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_emission_records`

###### 排入水体的总氮（`direct_total_n_water`）

按适用条件记录“排入水体的总氮”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Total nitrogen, to water
- 流属性/单位： Mass / kg
- 数量规则：实测浓度乘以监测排放体积
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_emission_records`

### 过程：粉碎、筛分与整理（`milling_finishing`）

#### 输入

##### 产品流

###### 干燥稳定化食用鱼（`dried_material_input`）

按适用条件记录“干燥稳定化食用鱼”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Dried stabilized edible fish
- 流属性/单位： Mass / kg
- 数量规则：转移的实测质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 kg 散装食用鱼粉输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

###### 粉碎用中国低压电网电力（`milling_grid_electricity_low_voltage`）

按适用条件记录“粉碎用中国低压电网电力”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 适用条件：仅适用于中国低于 1 kV 的电网消费组合
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：计量电量或有据分配量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_utility_records`

###### 粉碎用中国中压电网电力（`milling_grid_electricity_medium_voltage`）

按适用条件记录“粉碎用中国中压电网电力”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 适用条件：仅适用于中国 1-35 kV 电网消费组合
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：计量电量或有据分配量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_utility_records`

###### 粉碎与输送用压缩空气（`milling_compressed_air_input`）

按适用条件记录“粉碎与输送用压缩空气”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位： Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：压缩空气计量体积或依据压缩机记录形成的有据分配量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_utility_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 散装食用鱼粉（`bulk_meal_output`）

按适用条件记录“散装食用鱼粉”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：食用鱼粉 `fa402946-6236-41bb-8a2d-f7890b2e75cf`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：紧邻包装前的实测散装输出质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 kg 散装食用鱼粉输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

##### 废物流

###### 收集的鱼粉粉尘（`milling_dust_output`）

按适用条件记录“收集的鱼粉粉尘”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Collected fish-meal dust
- 流属性/单位： Mass / kg
- 数量规则：按去向实测质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 不合格食用鱼粉（`milling_offspec_meal_output`）

按适用条件记录“不合格食用鱼粉”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Off-spec edible fish meal
- 流属性/单位： Mass / kg
- 数量规则：按去向实测质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 鱼粉筛上物（`milling_sieve_oversize_output`）

按适用条件记录“鱼粉筛上物”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Fish-meal sieve oversize
- 流属性/单位： Mass / kg
- 数量规则：按去向实测质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

##### 基本流

### 过程：冷却、包装、储存与放行（`packaging_release`）

#### 输入

##### 产品流

###### 散装食用鱼粉投入（`bulk_meal_input`）

按适用条件记录“散装食用鱼粉投入”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：食用鱼粉 `fa402946-6236-41bb-8a2d-f7890b2e75cf`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

###### 纸袋包装（`packaging_paper_bag_input`）

按适用条件记录“纸袋包装”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：纸袋纸、牛皮纸 `0a8faf13-9861-4805-bcee-a212c6dceb04`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至放行产品并经采购、领用和库存平衡核对的纸袋质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_records`
- 数量范围：可替换的包装质量 QA 筛查范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0.005
  - 上限： 0.2
  - 单位： kg
  - 基准：每 1 kg 放行食用鱼粉
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 塑料薄膜或内衬（`packaging_plastic_film_input`）

按适用条件记录“塑料薄膜或内衬”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：塑料薄膜 `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至放行产品并经采购、领用和库存平衡核对的薄膜质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_records`

###### 瓦楞纸箱（`packaging_corrugated_box_input`）

按适用条件记录“瓦楞纸箱”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至放行产品并经采购、领用和库存平衡核对的瓦楞箱质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_records`

###### 聚丙烯编织袋（`packaging_pp_woven_sack_input`）

按适用条件记录“聚丙烯编织袋”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Polypropylene woven sack
- 流属性/单位： Mass / kg
- 数量规则：分配至放行产品并经采购、领用和库存平衡核对的编织袋质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_records`

###### 食品级钢桶（`packaging_steel_drum_input`）

按适用条件记录“食品级钢桶”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Food-grade steel drum
- 流属性/单位： Mass / kg
- 数量规则：分配至放行产品并经采购、领用和库存平衡核对的钢桶质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_records`

###### 冷库用中国低压电网电力（`storage_grid_electricity_low_voltage`）

按适用条件记录“冷库用中国低压电网电力”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 适用条件：仅适用于中国低于 1 kV 的电网消费组合
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：在记录储存时长内计量或分配的电量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_cold_chain_records`
- 数量范围：可替换的储存/制冷用电 QA 筛查范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 2
  - 单位： kWh
  - 基准：每 1 kg 放行食用鱼粉
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 冷库用中国中压电网电力（`storage_grid_electricity_medium_voltage`）

按适用条件记录“冷库用中国中压电网电力”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 适用条件：仅适用于中国 1-35 kV 电网消费组合
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：在记录储存时长内计量或分配的电量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_cold_chain_records`

###### R134a 制冷剂补充量（`storage_r134a_makeup_input`）

按适用条件记录“R134a 制冷剂补充量”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：制冷剂 R134a `a4facd51-1e5c-422e-8461-e9562c045164`
- 适用条件：仅适用于充注 R134a 的设备
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据设备制冷剂台账分配的采购或领用补充质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_refrigerant_records`

###### R404A 制冷剂补充量（`storage_r404a_makeup_input`）

按适用条件记录“R404A 制冷剂补充量”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：制冷剂R404A `76513c71-a148-484e-865f-2ab54afb4331`
- 适用条件：仅适用于充注 R404A 的设备
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据设备制冷剂台账分配的采购或领用补充质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_refrigerant_records`

###### R717 氨制冷剂补充量（`storage_r717_makeup_input`）

按适用条件记录“R717 氨制冷剂补充量”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Refrigeration-grade ammonia R717
- 适用条件：仅适用于充注 R717 的设备
- 流属性/单位： Mass / kg
- 数量规则：依据设备制冷剂台账分配的采购或领用补充质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_refrigerant_records`

###### R744 二氧化碳制冷剂补充量（`storage_r744_makeup_input`）

按适用条件记录“R744 二氧化碳制冷剂补充量”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Refrigeration-grade carbon dioxide R744
- 适用条件：仅适用于充注 R744 的设备
- 流属性/单位： Mass / kg
- 数量规则：依据设备制冷剂台账分配的采购或领用补充质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_refrigerant_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行食用鱼粉（`reference_product_output`）

按适用条件记录“放行食用鱼粉”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：食用鱼粉 `fa402946-6236-41bb-8a2d-f7890b2e75cf`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰好 1 kg 放行产品净质量
- 数值来源模式： 固定值（`fixed_value`）
- 适用范围： 不适用（`not_applicable`）
- 归一化基准：1 kg 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 身份引用（`identity_reference`）

##### 废物流

##### 基本流

###### 排入空气的 R134a 制冷剂损失（`storage_r134a_emission_air`）

按适用条件记录“排入空气的 R134a 制冷剂损失”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： HFC-134a, to air
- 适用条件：仅适用于充注 R134a 的设备
- 流属性/单位： Mass / kg
- 数量规则：依据充注和维护记录计算的 R134a 损失
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_refrigerant_records`
- 数量范围：可替换的制冷剂损失 QA 筛查范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 0.05
  - 单位： kg
  - 基准：每 1 kg 放行食用鱼粉
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 排入空气的 R404A 制冷剂损失（`storage_r404a_emission_air`）

按适用条件记录“排入空气的 R404A 制冷剂损失”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Refrigerant R404A, to air
- 适用条件：仅适用于充注 R404A 的设备
- 流属性/单位： Mass / kg
- 数量规则：依据充注和维护记录计算的 R404A 损失
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_refrigerant_records`

###### 排入空气的 R717 氨制冷剂损失（`storage_r717_emission_air`）

按适用条件记录“排入空气的 R717 氨制冷剂损失”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Ammonia from R717, to air
- 适用条件：仅适用于充注 R717 的设备
- 流属性/单位： Mass / kg
- 数量规则：依据充注和维护记录计算的 R717 氨损失
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_refrigerant_records`

###### 排入空气的 R744 二氧化碳制冷剂损失（`storage_r744_emission_air`）

按适用条件记录“排入空气的 R744 二氧化碳制冷剂损失”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Carbon dioxide from R744, to air
- 适用条件：仅适用于充注 R744 的设备
- 流属性/单位： Mass / kg
- 数量规则：依据充注和维护记录计算的 R744 二氧化碳损失
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行食用鱼粉
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_refrigerant_records`

### 过程：废水与残余物处理（`wastewater_residuals`）

#### 输入

##### 产品流

###### 处理用中国低压电网电力（`treatment_grid_electricity_low_voltage`）

按适用条件记录“处理用中国低压电网电力”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 适用条件：仅适用于中国低于 1 kV 的电网消费组合
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：计量电量或有据分配量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 处理用中国中压电网电力（`treatment_grid_electricity_medium_voltage`）

按适用条件记录“处理用中国中压电网电力”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 适用条件：仅适用于中国 1-35 kV 电网消费组合
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：计量电量或有据分配量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 处理用工艺水（`treatment_process_water_input`）

按适用条件记录“处理用工艺水”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：可归属于处理过程的计量或采购质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 处理用外购蒸汽（`treatment_steam_input`）

按适用条件记录“处理用外购蒸汽”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：蒸汽 `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 适用条件：仅适用于 11.0 MPaG 蒸汽
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：可归属于处理过程的计量或经凝结水修正的蒸汽质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 处理用外购工业热水（`treatment_hot_water_input`）

按适用条件记录“处理用外购工业热水”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Industrial hot water
- 流属性/单位： Energy / MJ
- 数量规则：由计量供水质量及温差换算的交付能量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 处理用天然气（`treatment_natural_gas_input`）

按适用条件记录“处理用天然气”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量质量，或使用实测密度和声明低位热值换算的计量体积
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 处理用液化石油气（`treatment_lpg_input`）

按适用条件记录“处理用液化石油气”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：液化石油气 `3786072f-d3ce-4941-9249-ed5d346b21a6`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经库存变动核对的钢瓶或储罐计量领用量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 处理用柴油（`treatment_diesel_input`）

按适用条件记录“处理用柴油”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经库存变动核对的储罐计量领用量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 处理用重质燃料油（`treatment_heavy_fuel_oil_input`）

按适用条件记录“处理用重质燃料油”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：重质燃料油
- 流属性/单位： Mass / kg
- 数量规则：经库存变动核对的储罐计量领用量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 处理供热用未处理木片（`treatment_biomass_wood_chips_input`）

按适用条件记录“处理供热用未处理木片”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Untreated wood chips
- 流属性/单位： Mass / kg
- 数量规则：实测接收态质量并保留水分信息
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 处理用氢氧化钠溶液（`treatment_sodium_hydroxide_input`）

按适用条件记录“处理用氢氧化钠溶液”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Sodium hydroxide solution
- 流属性/单位： Mass / kg
- 数量规则：记录浓度的采购或库存平衡溶液质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 处理用氯化铁溶液（`treatment_ferric_chloride_input`）

按适用条件记录“处理用氯化铁溶液”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Ferric chloride solution
- 流属性/单位： Mass / kg
- 数量规则：记录浓度的采购或库存平衡溶液质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 处理用聚丙烯酰胺絮凝剂（`treatment_polyacrylamide_input`）

按适用条件记录“处理用聚丙烯酰胺絮凝剂”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：聚丙烯酰胺絮凝剂
- 流属性/单位： Mass / kg
- 数量规则：采购或库存平衡的有效产品质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

##### 废物流

###### 进入现场处理的鱼加工废水（`treatment_fish_wastewater_input`）

按适用条件记录“进入现场处理的鱼加工废水”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Fish-processing wastewater
- 流属性/单位： Mass / kg
- 数量规则：实测或核对后的转移质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 进入现场处理的分离鱼固形物（`treatment_fish_solids_input`）

按适用条件记录“进入现场处理的分离鱼固形物”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Separated fish solids
- 流属性/单位： Mass / kg
- 数量规则：实测或核对后的转移质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

##### 基本流

#### 输出

##### 产品流

###### 回收鱼油（`recovered_fish_oil_output`）

按适用条件记录“回收鱼油”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Recovered fish oil
- 流属性/单位： Mass / kg
- 数量规则：实测可售输出质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 浓缩鱼溶浆（`recovered_fish_solubles_output`）

按适用条件记录“浓缩鱼溶浆”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Concentrated fish solubles
- 流属性/单位： Mass / kg
- 数量规则：实测可售输出质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

##### 废物流

###### 鱼加工废水处理污泥（`treatment_sludge_output`）

按适用条件记录“鱼加工废水处理污泥”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Fish-processing wastewater-treatment sludge
- 流属性/单位： Mass / kg
- 数量规则：实测外运质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

##### 基本流

###### 处理过程排入空气的甲烷（`treatment_methane_air`）

按适用条件记录“处理过程排入空气的甲烷”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Methane, to air
- 流属性/单位： Mass / kg
- 数量规则：实测或计算的甲烷排放量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_emission_records`

###### 处理过程排入空气的一氧化二氮（`treatment_n2o_air`）

按适用条件记录“处理过程排入空气的一氧化二氮”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Nitrous oxide, to air
- 流属性/单位： Mass / kg
- 数量规则：实测或计算的一氧化二氮排放量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_emission_records`

###### 处理过程排入水体的化学需氧量（`treatment_cod_water`）

按适用条件记录“处理过程排入水体的化学需氧量”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流：化学需氧量，排入水体
- 流属性/单位： Mass / kg
- 数量规则：实测浓度乘以监测排放体积
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_emission_records`

###### 处理过程排入水体的总氮（`treatment_total_n_water`）

按适用条件记录“处理过程排入水体的总氮”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Total nitrogen, to water
- 流属性/单位： Mass / kg
- 数量规则：实测浓度乘以监测排放体积
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_emission_records`

###### 处理过程排入水体的总磷（`treatment_total_p_water`）

按适用条件记录“处理过程排入水体的总磷”这一原子交换，并保留对应的计量、归一化和证明记录。

- 选定流： Total phosphorus, to water
- 流属性/单位： Mass / kg
- 数量规则：实测浓度乘以监测排放体积
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 kg 处理的废水或残余物
- 基准类型： 过程输出（`process_output`）
- 证据类型： 基于采集计算（`calculated_from_collection`）
- 采集协议： `cp_emission_records`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoidance` | 共享前景作业 | 首先通过过程细分、单独计量或扩展可独立控制的单元操作来避免分配。 | `eu-pef-2021-2279` |
| `allocation_direct_assignment` | 鱼粉、回收油、可溶性组分、可销售残余物和废物流 | 当因果记录能够识别接收输出时，直接归属投入、排放和处理负荷。归类为废物的材料在所选废物处理边界前不分担共产品份额。 | `eu-pef-2021-2279` |
| `allocation_physical_then_economic` | 无法避免的多功能过程 | 无法直接归属时，使用反映因果生产关系且有文件依据的物理关系；不存在可辩护物理关系时，才使用有代表性的年度数量和价格按经济价值分配，并披露方法和测试合理替代方案。 | `eu-pef-2021-2279` |
| `allocation_mass_balance` | 内部转移与返工 | 不向内部回流分配负荷。分配共享负荷前，应核对鱼类原料、加入或移除的水、鱼粉、可销售共产品、废水和残余物。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `receipt_preparation`; `stabilization_drying`; `milling_finishing`; `packaging_release` | 原料、中间体、产品、剔除物和残余物 | 地磅、秤、生产、水分及处置记录 | lot_id; species/source; input_mass_kg; output_mass_kg; residual_mass_kg; moisture_fraction; destination; timestamp | 经校准称重、批次核对并保留水分检测 | kg; 质量分数 | 每批；每日核对 | 有代表性的连续 12 个月，或较短声明生产期的全部批次 | 归属该产品的全部前景产线和外包步骤 | 按批汇总并将放行数量归一化至 1 kg 净产品；分别核对湿物质和干物质 | 校准记录；实验室结果；批次放行；核对签字 |
| `cp_utility_records` | `stabilization_drying`; `milling_finishing`; `wastewater_residuals` | 水、电力、燃料、蒸汽和热量 | 仪表、发票、燃料库存和运行小时记录 | meter_id; opening; closing; unit; carrier; lot_or_period; allocation_driver; conversion_factor | 优先分表计量；否则记录物理分配驱动 | kg or m3; kWh; MJ; 载体单位 | 仪表间隔或每月，并与生产匹配 | 有代表性的连续 12 个月或声明生产期 | 全部前景设备和共享公用工程 | 载体总量除以核对后输出；保留换算 | 仪表核验；发票；库存核对；分配工作表 |
| `cp_cold_chain_records` | `receipt_preparation`; `packaging_release` | 冰、储存电力、温度和时长 | 采购、仪表、温度记录仪和库存记录 | ice_mass_kg; electricity_kwh; storage_mass_kg; start_time; end_time; setpoint; measured_temperature | 称量冰；计量电力；保留连续或规定间隔温度记录 | kg; kWh; h; degC | 每批加仪表间隔 | 报告期内全部相关储存 | 服务该产品的全部前景冷藏/冷冻接收和储存 | 可辩护时按质量-时间和温区分配共享电力 | 秤/仪表检查；记录仪校准；偏离日志 |
| `cp_ingredient_records` | `stabilization_drying` | 盐、烟熏处理和其他配料/添加剂 | 批记录和库存领用 | material_id; supplier_lot; mass_kg; batch_id; purpose | 称量每种投入并核对库存 | kg | 每批 | 报告期内全部批次 | 全部声明配方/路线 | 按材料求和并归一化至放行产品 | 秤校准；供应商规范；批次授权 |
| `cp_packaging_records` | `packaging_release` | 直接包装 | 物料清单、采购、库存和包装记录 | material; unit_mass_kg; units_used; scrap_kg; returned_kg | 称量代表性包装单元并核对领用 | kg | 每种包装形式；每月核对 | 报告期内全部形式 | 参考门口的全部直接包装 | 净领用包装加可归属废料后除以放行产品净质量 | 秤记录；物料清单；库存核对 |
| `cp_waste_records` | 所有适用过程 | 废水、残余物、处理投入、回收输出和外运废物 | 仪表、联单、秤、实验室和去向记录 | stream_id; mass_or_volume; moisture; destination; classification; treatment; recovered_product_status | 按流计量；记录密度换算和产品/废物判定 | kg; m3; 质量分数 | 每次转移或仪表间隔 | 有代表性的连续 12 个月或声明生产期 | 全部前景废物和回收路线 | 按流和去向汇总；按规定归一化至参考流或处理输出 | 仪表/秤检查；联单；分析；接收文件 |
| `cp_emission_records` | `stabilization_drying`; `wastewater_residuals` | 直接分物质排放 | 监测、许可、燃料分析和批准计算记录 | substance; compartment; measured_value; unit; flow_rate; operating_time; factor; source | 可得时采用实测监测；否则记录公式和因子来源 | 物质适用单位 | 监测/许可频率及每个计算期 | 与生产数据相同期间 | 所有可量化的前景排放点和无组织源 | 按物质计算并归一化至适用输出 | 实验室 QA；仪器校准；许可报告；计算文件 |
| `cp_refrigerant_records` | `packaging_release` | 制冷剂损失 | 设备登记、充注、采购、回收和维修记录 | equipment_id; refrigerant; opening_charge_kg; added_kg; recovered_kg; closing_charge_kg; service_date | 按制冷剂做年度或生产期质量平衡 | kg | 每次维修事件和年度平衡 | 与生产数据相同期间 | 服务产品的全部前景含制冷剂设备 | 损失 = 期初充注 + 添加 - 回收 - 期末充注；按有文件依据的服务驱动分配 | 技师/维修记录；设备登记；采购和回收记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 归一化数量 = 归属数量 / 放行食用鱼粉净质量 | 归属数量；放行净质量 | 每 1 kg 参考流数量 |  |
| `calc_wet_dry_balance` | 鱼类原料和产品 | 干物质 = 湿质量 x (1 - 水分分数)；在投入、鱼粉、共产品、残余物和实测损失间核对干物质 | 湿质量；水分分数；去向 | 湿质量与干物质平衡 |  |
| `calc_wastewater` | 工艺废水 | 废水质量 = 实测排放，或有文件依据的水投入减去产品/共产品保留水及另行量化的蒸发/损失 | 水投入；保留水；蒸发/损失 | 废水质量 |  |
| `calc_refrigerant_loss` | 制冷设备 | 分物质损失 = 期初充注 + 添加 - 回收制冷剂 - 期末充注 | 充注与维修字段 | 分配前制冷剂排放 kg |  |
| `calc_allocation` | 无法避免的多功能性 | 首先直接归属，其次采用所选物理关系；仅在无可辩护物理关系时使用经济价值；分数之和必须为 1 | 归属负荷；输出数量；物理驱动或经济价值 | 分配分数与分配后清单 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和投入 | 保留鱼种/来源、原料状态、路线、配方、水分基准、包装、储存条件、地理、期间和供应商/批次身份。 | 产品规范、供应商记录、批记录和放行记录；`unsd-cpc-3-2025`; `codex-cxc-52-2003` |
| `dq_measurement` | 质量、公用工程、温度、水分和排放 | 对重要测量使用经校准或核验的仪器；保留单位、换算、检出限、分配驱动和计算来源。 | 校准/核验记录和计算文件；`eu-pef-2021-2279` |
| `dq_temporal` | 前景清单 | 优先采用有代表性的连续 12 个月；较短或不连续生产期应披露季节性并论证代表性。 | 带日期记录、生产日历和代表性评估；`eu-pef-2021-2279` |
| `dq_completeness` | 前景与连接上游清单 | 核对质量和能源，计入全部 required 及条件满足的 conditional 过程，并按截断规则记录任何省略流。 | 核对和完整性清单；`eu-pef-2021-2279` |
| `dq_food_safety` | 食品级生产 | 保留适用于声明原料和路线的危害控制、卫生、温度、过程控制、剔除和产品放行证据。 | HACCP 或等效食品安全计划、监测和放行记录；`codex-cxc-52-2003` |
| `dq_estimate_replacement` | 暂定 QA 范围 | 将每个 `reasoned_estimate` 范围作为审查标志而非行业默认；比较前景值但不得代入中点。有经审查的代表性证据时替换。 | manifest 审查说明和审查决定 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_identity` | 参考产品和数据集元数据 | 产品流 UUID、1 kg Mass 参考、CPC 映射语境或任何必需限定信息缺失或不一致时，完整性校验失败。 | `unsd-cpc-3-2025` |
| `validate_reference_output` | `reference_product_output` | 要求恰好 1 kg 净放行食用鱼粉并单独报告包装；产品输出应使用声明的 Mass 属性和 kg 单位。 |  |
| `validate_process_coverage` | 过程图 | 要求每个 `required` 过程和条件成立的 `conditional` 过程；披露外包步骤并连接其数据集。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `validate_mass_balance` | 物料流 | 要求湿质量和干物质在声明容差内核对；未解决差异、未分类可销售输出和缺失去向均为问题。 |  |
| `validate_allocation` | 多功能作业 | 要求分配分数之和为 1，禁止向内部回流分配；保留直接归属/物理/经济方法的理由，使用经济分配时保留敏感性分析。 | `eu-pef-2021-2279` |
| `validate_food_safety_records` | 食品级路线 | 要求适用的危害控制、卫生、过程监测、剔除和放行记录；此项校验清单证据，不构成法规合规认证。 | `codex-cxc-52-2003` |
| `validate_provisional_ranges` | `reasoned_estimate` 范围 | 数值超出暂定范围时标记审查，但不得替换实测值或将范围视为符合性限值。 |  |
| `validate_data_quality` | 前景数据包 | 要求时间、地理、技术、测量和完整性披露，以及每个数据采集协议指定的证据。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 生产设施门口食品级食用鱼粉的前景生产数据集 |
| downstream_use | 当产品、地理、技术、时间和质量具有代表性时，可发布为 `secondary_dataset` 并用作 `background_dataset` |
| allowed_use | 与所声明食用级产品、保藏路线、边界、地理、技术和期间匹配的产品足迹、process 和 lifecyclemodel 研究 |
| excluded_use | 饲料级鱼粉；整条干制/熏制鱼；未经调整而鱼种组合、水分、添加剂、保藏或共产品处理实质不同的产品；法规或食品安全认证 |
| required_metadata | PCR id/version；产品流 UUID；CPC 映射语境；必需限定信息；设施地理；技术；报告期；边界；分配；上游数据集引用；包装和储存情景 |
| required_quality_disclosure | 一手数据占比；覆盖期；质量/能源平衡；测量和换算方法；缺失数据；暂定估算；分配敏感性；数据质量代表性；食品安全记录覆盖 |
| update_trigger | 原料来源/鱼种、保藏或干燥技术、产品水分/配方、能源系统、包装/储存、共产品路线/分配、法规或代表性数据发生实质变化；任何暂定范围被替换 |

## 11. 数据源

| 来源 ID | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | 联合国统计司，《Central Product Classification Version 3.0》，2025-06-30 结构，代码 21233 “Edible fish meal”，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-08-11） | 官方分类边界及其与相邻干制、熏制、食用内脏和其他加工鱼类类别的区别 |
| `codex-cxc-52-2003` | standard | Codex Alimentarius，《Code of Practice for Fish and Fishery Products》，CXC 52-2003，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B52-2003%252FCXC_052e.pdf（检索日期 2026-08-11） | 鱼类产品过程分解、卫生与危害控制记录、处理、卫生作业、过程控制、剔除和放行证据 |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会关于使用环境足迹方法的 Recommendation (EU) 2021/2279，https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索日期 2026-08-11） | 功能单位完整性、生命周期边界、分配层级、清单完整性、数据质量代表性和披露 |
