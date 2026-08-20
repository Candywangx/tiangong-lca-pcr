---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-cattle-frozen
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 冷冻牛肉

## 1. 范围与适用性

本 PCR 适用于以冷冻方式保存、并以胴体、半胴体、四分体、带骨分割肉、去骨分割肉、修割肉或绞肉形式在冷冻肉生产工厂门口交付的牛肉。它覆盖一体化屠宰路线，也覆盖采购冷藏牛肉后进行分割、包装和冷冻的路线。数据包必须声明牛种或商业类别、产品形态、带骨或去骨状态、包装形式、冷冻技术、生产地域和交付门口。

对于一体化路线，前景从屠宰场门口的待宰活牛开始；对于部分路线，前景从收货门口可追溯的外购胴体或冷藏牛肉开始。前景在声明的工厂门口结束，产品为经过冷冻以及范围内冷冻储存后、可进入冷链发运的净重冷冻牛肉。上游养牛和饲料生产、部分路线省略的屠宰或冷却、外购能源与材料制造、零售、烹饪、消费以及声明门口之后的寿命末期必须由关联数据集表示，不得默默并入前景。

不包括鲜或冷藏牛肉、可食用杂碎、预制餐食、熟制或腌制肉制品、非牛肉，以及仅表面冷却但未达到声明冷冻状态的肉。食品安全合规是生成清单数据的前提；本 PCR 不替代主管机关要求、HACCP 计划或产品规范。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-cattle-frozen |
| classification_refs | CPC 3.0:21131 Meat of cattle, frozen |
| covered_products | 冷冻牛胴体、半胴体、四分体、带骨分割肉、去骨分割肉、修割肉和绞牛肉 |
| excluded_products | 鲜或冷藏牛肉；可食用杂碎；熟制、腌制、调味或其他预制肉；非牛肉；声明工厂门口之后的零售或餐饮产品 |
| representative_product | 冷冻牛肉生产工厂门口的包装冷冻去骨牛肉 |
| production_route | 一体化时包括屠宰和胴体处理；冷却；适用时分割或去骨；包装；速冻；至声明门口的冷冻储存 |
| market_state | 已冷冻、按卫生要求处理、可按批次追溯、按声明包装或以其他方式保护，并在热状态稳定后维持 -18 °C 或更低温度 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供后续配送、加工、零售或餐饮使用的冷冻牛肉 |
| How much | 1 kg 净产品质量，不含运输包装和单独声明的冰或冰衣 |
| How well | 已声明产品身份与形态；热状态稳定后热中心为 -18 °C 或更低；满足食品安全放行要求；冷链条件保持至声明门口 |
| How long or cycle | 一个生产批次经过声明的前景路线和纳入的冷冻储存时长 |
| reference_flow_link | `frozen_cattle_meat_reference` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 冷冻牛肉 `16e6d353-2acd-4dc3-99b3-fce9d27fbbd7` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 牛种或商业类别；产品形态（胴体 / 分割肉 / 修割肉 / 绞肉）；带骨或去骨状态；净产品质量基准；包装形式；冷冻技术；热中心放行温度；纳入的储存时长；生产地域；生产期间；工厂门口 |

构建前景数据包时，每项必需限定信息都必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失限定信息会使该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以恰好 1 kg 净重冷冻牛肉作为定量参考；排除托盘、可重复使用运输物品和单独报告的包装。 |
| `net_product_mass` | 产品和中间肉品质量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的秤量记录。声明质量是热胴体、冷却胴体、预处理肉还是冷冻净产品，若无明确换算不得混用这些基准。 |
| `frozen_state_temperature` | 冷冻放行和冷冻储存 | Temperature | °C | 测量热中心放行温度并记录具有时间序列的冷库温度；产品在热状态稳定后必须达到 -18 °C 或更低，并在冷链中保持 -18 °C 或更低，仅允许有文件记录且适用的公差。 |
| `water_mass_conversion` | 水投入和废水输出 | Mass or volume | kg or m3 | 保留实测体积和温度；将体积换算为质量时，记录密度假设和换算公式。 |
| `storage_duration` | 冷冻储存 | Time | day | 按批次记录入库和出库时间戳并计算储存时长；储存用电和损失必须采用相同的批次时间覆盖进行归一化。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一体化路线为屠宰场门口的待宰活牛，部分路线为收货门口采购且可追溯的冷藏牛胴体或牛肉 |
| starting_condition_role | 主要物料投入；其上游生产以及任何省略的屠宰或冷却由关联上游数据集表示 |
| product_classification_scope | 对应 CPC 3.0:21131 的冷冻牛肉；鲜或冷藏牛肉和可食用杂碎不属于该产品身份 |
| recursive_input_rule | 若使用同一类别的冷冻牛肉作为投入，将其作为带自身数据集的可追溯上游产品投入记录一次，不再递归重建其已完成的生产阶段 |
| upstream_dataset_requirement | 为活牛或外购冷藏肉以及外购电力、燃料、水、包装、清洁剂、制冷剂、运输和废物处理关联具有地域和时间代表性的数据集 |
| disclosure | 声明实际起始物料、纳入和省略的单元过程、产品形态、共产品处理、截断、储存时长、温度控制制度、数据缺口和未解析流身份 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_route_accounting` | 所有前景路线 | 纳入从声明起始条件到放行冷冻牛肉的每项前景操作，包括适用时的动物解体、包装、制冷、用水、废水处理和厂内运输；明确披露任何省略操作及其上游数据集。 | `fao-leap-large-ruminants-2016`; `codex-cxc-58-2005` |
| `boundary_quick_freezing` | 速冻和向储存转移 | 纳入能源、制冷剂补充与泄漏、产品损失、冷冻放行检查和向冷库转移；只有热状态稳定后热中心达到 -18 °C 或更低，才视为冷冻完成。 | `codex-cxc-8-1976-2008`; `fao-meat-cold-store-1991` |
| `boundary_cold_storage` | 声明门口之前的冷冻储存 | 纳入储存用电、制冷剂损失、除霜相关资源、产品损失和实际批次储存时长；保留冷链温度记录。 | `codex-cxc-8-1976-2008`; `fao-meat-cold-store-1991` |
| `boundary_cutoff_disclosure` | 物料和能量流 | 不得省略已知具有环境或质量平衡显著性的流。任何筛除流都必须连同筛选依据予以识别，并纳入完整性和敏感性复核。 | `fao-leap-large-ruminants-2016` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `slaughter_and_dressing` | 活牛接收、屠宰、胴体处理和初次冷却 | conditional | 活牛进入前景时纳入；仅当经核验的外购胴体或冷藏肉数据集覆盖这些操作时方可省略 | 前景初级加工 | 转移至下一个纳入过程的已处理和冷却牛肉 kg |
| `cutting_and_packaging` | 分割、去骨、修割、切份、绞制和包装 | conditional | 纳入为获得声明产品形态和包装形式而实际使用的操作 | 前景产品制备 | 转移至冷冻的预处理冷藏牛肉 kg |
| `quick_freezing` | 速冻和放行 | required | 冷冻产品身份始终要求纳入 | 前景状态转化 | 热中心以 -18 °C 或更低温度放行的冷冻牛肉 kg |
| `frozen_storage` | 至声明工厂门口的冷冻储存 | required | 纳入从冷冻放行到声明门口的储存；储存时长为零的直接转移仍须记录 | 前景调理和持有 | 声明门口净重冷冻牛肉 kg 和批次储存天数 |

### 过程：活牛接收、屠宰、胴体处理和初次冷却（`slaughter_and_dressing`）

#### 输入

##### 产品流

###### 待宰活牛（`live_cattle_input`）

记录进入一体化屠宰路线的验收牛批次和实测活重。Tiangong 产品流 UUID 尚未解析，发布前必须精确查找并选定。

- 选定流：Slaughter-ready live cattle（UUID unresolved）
- 流属性/单位：Mass / kg live weight
- 数量规则：汇总归属于生产批次的已验收活牛体重记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重冷冻牛肉参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_material_balance`
- 来源：`fao-leap-large-ruminants-2016`; `codex-cxc-58-2005`
- 数量范围：暂定活重投入 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.3
  - 上限：5.0
  - 单位：kg live weight/kg net frozen cattle meat
  - 基准：跨胴体、带骨和去骨产品路线的宽泛候选阶段筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 屠宰和冷却用电（`slaughter_electricity`）

记录接收、屠宰、胴体处理、冷却、泵送、压缩空气、照明和卫生清洁的实测或可辩护分表电量。

- 选定流：Electricity, supplied at plant（UUID unresolved）
- 流属性/单位：Energy / kWh
- 数量规则：分配至该过程和生产批次的计量电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已处理冷却肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utilities`
- 来源：`fao-leap-large-ruminants-2016`
- 数量范围：暂定屠宰和冷却用电 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：5.0
  - 单位：kWh/kg dressed chilled meat
  - 基准：宽泛候选阶段设施用电筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 屠宰、胴体处理、冷却和卫生清洁供水（`slaughter_water`）

记录进入的工艺水和清洁用水，保留实测体积以及任何质量换算。

- 选定流：Process water（UUID unresolved）
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：生产批次期间进入过程的计量水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已处理冷却肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utilities`
- 来源：`fao-leap-large-ruminants-2016`; `codex-cxc-58-2005`
- 数量范围：暂定屠宰用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.2
  - 上限：30
  - 单位：kg water/kg dressed chilled meat
  - 基准：需要由场址数据替换的宽泛候选阶段用水筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 现场使用的燃料和热能（`slaughter_thermal_energy`）

分别记录各燃料或外购热能载体。前景内发生燃烧时，直接燃烧排放必须按物质特定基本流编制清单。

- 选定流：Fuel or thermal energy, carrier-specific（UUID unresolved）
- 流属性/单位：Energy or mass / MJ, kWh, or kg
- 数量规则：分配至屠宰和初次冷却的计量或发票载体数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已处理冷却肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utilities`
- 来源：`fao-leap-large-ruminants-2016`
- 数量范围：暂定热能 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：MJ/kg dressed chilled meat
  - 基准：宽泛候选阶段热能筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转移至预处理或冷冻的已处理冷却牛肉（`dressed_chilled_meat_output`）

根据胴体处理和初次冷却后经校准的批次秤量计算验收冷却肉输出。

- 选定流：Dressed and chilled cattle meat（UUID unresolved）
- 流属性/单位：Mass / kg
- 数量规则：转移至下一个纳入过程的实测冷却胴体和可食肉质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每生产批次以及每 1 kg 下游净重冷冻牛肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_material_balance`
- 来源：`fao-leap-large-ruminants-2016`
- 数量范围：暂定已处理肉输出比例 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.2
  - 上限：0.8
  - 单位：kg dressed chilled meat/kg accepted live weight
  - 基准：宽泛候选阶段质量得率筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 产生收入的屠宰共产品（`slaughter_coproducts`）

按质量和收入类别分别记录每种产生收入的皮、可食共产品、脂肪、炼制原料或其他产品。流 UUID 在精确查找前保持未解析。

- 选定流：Slaughter co-product, product-specific（UUID unresolved）
- 流属性/单位：Mass / kg
- 数量规则：按生产批次实测每种可销售共产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每生产批次以及每 1 kg 已处理冷却肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_material_balance`
- 来源：`fao-leap-large-ruminants-2016`
- 数量范围：暂定共产品质量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：4.0
  - 单位：kg co-products/kg dressed chilled meat
  - 基准：宽泛候选阶段聚合筛查；逐项复核每个共产品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 无收入屠宰残余物和判废物料（`slaughter_waste`）

按处理路线记录判废物料、胃肠内容物、筛除物及其他无收入残余物，不得把可销售共产品重新归为废物。

- 选定流：Slaughter residual or condemned material, route-specific（UUID unresolved）
- 流属性/单位：Mass / kg
- 数量规则：发往各处理路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已处理冷却肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_wastes`
- 来源：`fao-leap-large-ruminants-2016`; `codex-cxc-58-2005`
- 数量范围：暂定屠宰废物 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3.0
  - 单位：kg waste/kg dressed chilled meat
  - 基准：宽泛候选阶段残余物筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 送往处理的废水（`slaughter_wastewater`）

记录废水体积或质量、处理去向，以及所选处理数据集需要的实测或采样负荷指标。

- 选定流：Wastewater from meat processing（UUID unresolved）
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：计量废水排放量加有文件记录的未计量流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已处理冷却肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_wastes`
- 来源：`fao-leap-large-ruminants-2016`
- 数量范围：暂定屠宰废水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：35
  - 单位：kg wastewater/kg dressed chilled meat
  - 基准：宽泛候选阶段排放筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：分割、去骨、修割、切份、绞制和包装（`cutting_and_packaging`）

#### 输入

##### 产品流

###### 接收用于预处理的冷藏牛肉（`chilled_meat_input`）

按形态和批次记录内部转移或外购冷藏牛肉。外购肉需要可追溯的上游数据集覆盖省略的生产阶段。

- 选定流：Chilled cattle meat（UUID unresolved）
- 流属性/单位：Mass / kg
- 数量规则：为声明预处理路线验收的实测冷藏肉质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 送往冷冻的预处理冷藏肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_material_balance`
- 来源：`codex-cxc-58-2005`; `fao-leap-large-ruminants-2016`
- 数量范围：暂定冷藏肉投入 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：3.0
  - 单位：kg chilled meat/kg prepared chilled meat
  - 基准：跨带骨和去骨预处理的宽泛候选阶段筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_input`）

按材料和质量记录内包装及外包装；可重复使用运输物品不计入净产品质量，在范围内时单独建模。

- 选定流：Food-contact and secondary packaging material, material-specific（UUID unresolved）
- 流属性/单位：Mass / kg
- 数量规则：按材料计算领用包装减去有文件记录的退回和未用库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 送往冷冻的预处理冷藏肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_material_balance`
- 来源：`codex-cxc-8-1976-2008`; `fao-meat-cold-store-1991`
- 数量范围：暂定包装质量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.30
  - 单位：kg packaging/kg prepared chilled meat
  - 基准：宽泛候选阶段包装筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分割和包装用电（`cutting_electricity`）

记录归属于本过程的分割、去骨、绞制、包装、房间冷却、压缩空气和卫生清洁用电。

- 选定流：Electricity, supplied at plant（UUID unresolved）
- 流属性/单位：Energy / kWh
- 数量规则：分配至本过程的计量或可辩护分表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理冷藏肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_utilities`
- 来源：`fao-leap-large-ruminants-2016`
- 数量范围：暂定预处理用电 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：3.0
  - 单位：kWh/kg prepared chilled meat
  - 基准：宽泛候选阶段用电筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 送往冷冻的预处理冷藏牛肉（`prepared_chilled_meat_output`）

记录转移至冷冻的净预处理肉，保留产品形态、带骨状态、包装形式和批次身份。

- 选定流：Prepared chilled cattle meat（UUID unresolved）
- 流属性/单位：Mass / kg
- 数量规则：转移至冷冻的实测验收净肉质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净重冷冻牛肉参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_material_balance`
- 来源：`fao-leap-large-ruminants-2016`
- 数量范围：暂定预处理肉转移 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：1.5
  - 单位：kg prepared chilled meat/kg net frozen cattle meat
  - 基准：宽泛候选阶段冷冻前损失筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 产生收入的预处理共产品（`cutting_coproducts`）

骨、脂肪、修割肉或其他可销售输出进入其他市场时分别记录。

- 选定流：Preparation co-product, product-specific（UUID unresolved）
- 流属性/单位：Mass / kg
- 数量规则：实测每项产生收入的输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 预处理冷藏肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_material_balance`
- 来源：`fao-leap-large-ruminants-2016`
- 数量范围：暂定预处理共产品 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2.0
  - 单位：kg co-products/kg prepared chilled meat
  - 基准：宽泛候选阶段筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 预处理判废物和包装废物（`cutting_waste`）

按处理路线分别记录无收入肉类判废物和包装边角料。

- 选定流：Meat-processing or packaging waste, route-specific（UUID unresolved）
- 流属性/单位：Mass / kg
- 数量规则：发往各处理路线的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理冷藏肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_material_balance`
- 来源：`fao-leap-large-ruminants-2016`
- 数量范围：暂定预处理废物 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg waste/kg prepared chilled meat
  - 基准：宽泛候选阶段判废和边角料筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：速冻和放行（`quick_freezing`）

#### 输入

##### 产品流

###### 进入冷冻机的预处理冷藏牛肉（`freezing_meat_input`）

按批次记录进入冷冻设备的净肉质量和温度。

- 选定流：Prepared chilled cattle meat（UUID unresolved）
- 流属性/单位：Mass / kg
- 数量规则：进入速冻操作的实测投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行冷冻牛肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_batch_energy`
- 来源：`codex-cxc-8-1976-2008`; `fao-meat-cold-store-1991`
- 数量范围：暂定冷冻投入 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：1.3
  - 单位：kg chilled meat/kg released frozen meat
  - 基准：宽泛候选阶段冷冻损失筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 速冻用电（`freezing_electricity`）

记录批次或连续生产期间冷冻机、风机、泵、输送设备、除霜和可归属辅助设备的电量。

- 选定流：Electricity, supplied at plant（UUID unresolved）
- 流属性/单位：Energy / kWh
- 数量规则：分配至同一运行期放行冷冻产品的计量电量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行冷冻牛肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_batch_energy`
- 来源：`codex-cxc-8-1976-2008`; `fao-meat-cold-store-1991`
- 数量范围：暂定速冻用电 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：5.0
  - 单位：kWh/kg released frozen meat
  - 基准：宽泛候选阶段技术筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 向冷冻系统补充的制冷剂（`freezing_refrigerant_makeup`）

记录向服务于速冻的设备中添加的每种制冷剂，并仅分配可归属部分。

- 选定流：Refrigerant, substance-specific（UUID unresolved）
- 流属性/单位：Mass / kg
- 数量规则：根据有文件记录的系统质量平衡分配制冷剂添加量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行冷冻牛肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`fao-leap-large-ruminants-2016`
- 数量范围：暂定制冷剂补充 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg refrigerant/kg released frozen meat
  - 基准：刻意放宽的候选阶段泄漏筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行至储存的冷冻牛肉（`released_frozen_meat`）

仅放行热中心温度和食品安全检查满足声明要求的批次。

- 选定流：Frozen cattle meat, internal transfer（UUID unresolved）
- 流属性/单位：Mass / kg
- 数量规则：热状态稳定后放行的实测冷冻净产品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：纳入储存损失前恰好 1 kg 放行冷冻牛肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_batch_energy`
- 来源：`codex-cxc-8-1976-2008`
- 数量范围：冷冻质量平衡 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.7
  - 上限：1.0
  - 单位：kg released frozen meat/kg prepared chilled meat input
  - 基准：候选阶段质量平衡筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 冷冻判废物和产品损失（`freezing_waste`）

按处理路线记录判废产品、汁液损失、破损包装和其他损失。

- 选定流：Freezing reject or product loss, route-specific（UUID unresolved）
- 流属性/单位：Mass / kg
- 数量规则：离开冷冻操作的实测判废或损失质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行冷冻牛肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_batch_energy`
- 来源：`codex-cxc-8-1976-2008`
- 数量范围：暂定冷冻废物 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.3
  - 单位：kg waste/kg released frozen meat
  - 基准：宽泛候选阶段损失筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 冷冻系统排放至空气的制冷剂（`freezing_refrigerant_emission`）

将每种泄漏制冷剂作为物质特定基本流编制清单；不得使用汇总制冷剂排放代理。具体制冷剂确定并精确匹配之前 UUID 保持未解析。

- 选定流：Refrigerant emitted to air, substance-specific（UUID unresolved）
- 流属性/单位：Mass / kg
- 数量规则：分配至速冻的计算未回收制冷剂损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行冷冻牛肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`fao-leap-large-ruminants-2016`
- 数量范围：暂定制冷剂排放 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg refrigerant/kg released frozen meat
  - 基准：刻意放宽的候选阶段泄漏筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：至声明工厂门口的冷冻储存（`frozen_storage`）

#### 输入

##### 产品流

###### 进入储存的放行冷冻牛肉（`stored_frozen_meat_input`）

记录冷库入库时的批次质量、入库时间、包装形式和热状态。

- 选定流：Released frozen cattle meat, internal transfer（UUID unresolved）
- 流属性/单位：Mass / kg
- 数量规则：验收入库的实测冷冻净肉质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 声明门口净重冷冻牛肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_lot_energy_temperature`
- 来源：`codex-cxc-8-1976-2008`; `fao-meat-cold-store-1991`
- 数量范围：暂定储存投入 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：1.2
  - 单位：kg storage input/kg net frozen meat at gate
  - 基准：宽泛候选阶段储存损失筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷冻储存用电（`storage_electricity`）

记录实际批次储存期间冷库压缩机、风机、泵、除霜、照明、控制和可归属辅助设备的电量。

- 选定流：Electricity, supplied at plant（UUID unresolved）
- 流属性/单位：Energy / kWh
- 数量规则：按照时间和容量一致的方法，将计量冷库电量分配给储存批次质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg·月冷冻肉储存量，再归一化到参考批次实际时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_lot_energy_temperature`
- 来源：`codex-cxc-8-1976-2008`; `fao-meat-cold-store-1991`
- 数量范围：暂定冷冻储存用电 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：2.0
  - 单位：kWh/(kg·month)
  - 基准：宽泛候选阶段冷库筛查
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 向冷库补充的制冷剂（`storage_refrigerant_makeup`）

记录向服务于冷冻储存的设备中添加的每种制冷剂，并仅分配可归属部分。

- 选定流：Refrigerant, substance-specific（UUID unresolved）
- 流属性/单位：Mass / kg
- 数量规则：根据冷库系统质量平衡分配制冷剂添加量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg·月冷冻肉储存量，再归一化到实际时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`fao-leap-large-ruminants-2016`
- 数量范围：暂定冷库制冷剂 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：kg refrigerant/(kg·month)
  - 基准：刻意放宽的候选阶段泄漏筛查
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 声明工厂门口的净重冷冻牛肉（`frozen_cattle_meat_reference`）

该行在所有纳入储存损失之后实现功能单位。Tiangong 产品 UUID 仅保存在参考流定义中，不作为清单 UUID 重复使用。

- 选定流：Meat of cattle, frozen, reference product
- 流属性/单位：Mass / kg
- 数量规则：声明工厂门口恰好 1 kg 净重冷冻牛肉
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：
- 来源：`codex-cxc-8-1976-2008`
- 数量范围：参考流身份
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：精确定量参考
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`codex-cxc-8-1976-2008`

##### 废物流

###### 冷冻储存产品损失（`storage_product_loss`）

按处理路线记录脱水、包装破损、温度失控判废和过期批次；不得从参考产品中默默冲减损失。

- 选定流：Frozen meat storage loss, route-specific（UUID unresolved）
- 流属性/单位：Mass / kg
- 数量规则：声明储存期内实测库存损失和判废质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明门口净重冷冻牛肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_lot_energy_temperature`
- 来源：`fao-meat-cold-store-1991`; `codex-cxc-8-1976-2008`
- 数量范围：暂定包装储存损失 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg loss/kg net frozen meat at gate
  - 基准：宽泛候选阶段筛查；FAO 手册报告未包装肉具有更高蒸发风险，并要求保留包装和温度历史
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 冷库排放至空气的制冷剂（`storage_refrigerant_emission`）

采用与制冷剂补充相同的系统质量平衡，将每种泄漏制冷剂作为物质特定基本流编制清单。

- 选定流：Refrigerant emitted to air, substance-specific（UUID unresolved）
- 流属性/单位：Mass / kg
- 数量规则：归属于储存批次的计算未回收制冷剂损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg·月冷冻肉储存量，再归一化到实际时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`fao-leap-large-ruminants-2016`
- 数量范围：暂定冷库制冷剂排放 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：kg refrigerant/(kg·month)
  - 基准：刻意放宽的候选阶段泄漏筛查
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 多功能前景过程 | 首先在技术可行时拆分单独计量的屠宰、胴体处理、分割、冷冻、储存、炼制和公用工程操作；仅对确实共享的负荷实施分配。 | `fao-leap-large-ruminants-2016` |
| `allocation_revenue_products` | 肉类和产生收入的共产品 | 当拆分不能解决共享初级加工负荷时，采用代表期收入份额在冷冻肉和所有产生收入的共产品之间分配；保留数量、价格、币种、地域、期间和计算。 | `fao-leap-large-ruminants-2016` |
| `allocation_residuals_and_waste` | 无收入残余物和废物 | 加工门口无收入的物料不分配产品份额，但保留前景内部引起的收集、处理、运输和直接排放负荷；不得把产生收入的输出归为废物。 | `fao-leap-large-ruminants-2016` |
| `allocation_shared_species` | 加工多种动物的设施 | 优先采用物种特定计量或生产批次。仍有共享负荷时，以加工质量和运行差异记录分配依据；无明确计算和敏感性检查不得在物种之间转移负荷。 | `fao-leap-large-ruminants-2016` |
| `allocation_consistency` | 所有分配结果 | 在质量平衡、公用工程用量、废物处理和共产品收入中采用同一内部一致的分配期间和方法；披露对显著不同价格或方法的敏感性。 | `fao-leap-large-ruminants-2016` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_slaughter_material_balance` | `slaughter_and_dressing` | 活牛、已处理肉和可销售共产品 | 批次秤量与发运记录 | lot_id; animal_count; live_weight; hot_carcass_weight; chilled_weight; co_product_type; co_product_mass; timestamp | 经校准秤量并与生产和发运记录核对 | kg | 每批 | 代表期内所有生产日 | 每个纳入屠宰场 | 按批次和输出类别汇总；核对期初和期末在制品 | 秤校准、批次追溯、核对签字和异常日志 |
| `cp_slaughter_utilities` | `slaughter_and_dressing` | 电力、燃料、热能和水 | 仪表、发票和运行小时记录 | meter_id; opening_reading; closing_reading; fuel_quantity; water_volume; operating_hours; production_mass; allocation_basis | 直接仪表或有文件记录的分表/分配方法 | kWh; MJ; kg; m3 | 班次、日或发票期间 | 可用时采用有代表性的连续 12 个月 | 每个纳入设施和公用工程系统 | 扣除非生产用途；一致分配共享用量；按冷却肉输出归一化 | 仪表校准、发票、分配工作表和缺失数据标记 |
| `cp_slaughter_wastes` | `slaughter_and_dressing` | 废水、判废物料和无收入残余物 | 流量计、地磅、转移联单和实验室记录 | stream_id; mass_or_volume; destination; treatment_route; COD; nitrogen; sampling_time | 计量或秤量；处理数据需要组成时采用代表性混合采样 | kg; m3; mg/L | 每次发运和计划采样 | 与产品和公用工程相同期间 | 每个纳入排放和废物路线 | 按流和路线汇总；保留采样负荷和不确定性 | 仪表或秤检查、实验室报告、废物联单和质量平衡核对 |
| `cp_cutting_material_balance` | `cutting_and_packaging` | 冷藏肉、预处理肉、包装、共产品和判废物 | 批次秤量和库存领用记录 | batch_id; input_mass; output_mass; presentation; bone_state; packaging_material; packaging_mass; co_product_mass; reject_mass | 经校准秤量和库存领退记录 | kg | 每批 | 代表期内所有批次 | 每条纳入分割或包装线 | 按批次核对质量；仅聚合相同产品形态 | 校准、批次流转单、包装清单和得率核对 |
| `cp_cutting_utilities` | `cutting_and_packaging` | 分割间和包装用电 | 仪表和运行记录 | meter_id; reading; operating_hours; line_output; allocation_basis | 分表或来自设施总表的有文件工程分配 | kWh | 班次或日 | 与预处理肉输出相同期间 | 每条纳入生产线和共享公用工程 | 一致分配共享电力并按预处理输出归一化 | 仪表证据、设备计划和分配复核 |
| `cp_freezing_batch_energy` | `quick_freezing` | 肉投入、冷冻输出、电力、判废物和放行温度 | 批次或连续运行记录 | lot_id; input_mass; output_mass; electricity; start_time; end_time; inlet_temperature; thermal_centre_temperature; reject_mass | 经校准秤量、电表和产品温度传感器 | kg; kWh; °C; h | 每批或连续运行 | 代表期内所有冷冻运行 | 每台冷冻机和生产线 | 匹配能量和质量的时间窗口；按放行冷冻输出归一化 | 仪表校准、温度传感器校准、放行记录和停机日志 |
| `cp_refrigerant_balance` | `quick_freezing` | 冷冻机和冷库制冷剂补充及排放 | 制冷剂库存和维修记录 | refrigerant_species; opening_inventory; additions; recovery; transfers; closing_inventory; equipment_id; service_date | 依据钢瓶秤量、采购记录和维修日志进行质量平衡 | kg | 每次维修并进行年度核对 | 包含季节运行的代表性 12 个月 | 服务于纳入过程的每个制冷系统 | 按物质计算未回收损失，并采用有文件设备服务或负荷基准分配 | 钢瓶重量、发票、技师日志、检漏和核对 |
| `cp_storage_lot_energy_temperature` | `frozen_storage` | 储存质量、时长、电量、温度、损失和放行质量 | 仓储管理、区间仪表、温度记录器和损失记录 | lot_id; entry_mass; exit_mass; entry_time; exit_time; interval_kWh; air_temperature; product_temperature; loss_reason; loss_mass | 批次时间戳关联区间电量和经校准连续温度记录器 | kg; day; kWh; °C | 连续温度和仪表区间；每次批次移动 | 完整声明储存期和有代表性的设施年度期间 | 每个纳入冷库和批次 | 计算批次天数；按容量和时间一致分配电量；核对损失 | 记录器和仪表校准、报警历史、库存核对和纠正措施记录 |
| `cp_coproduct_revenue` | `slaughter_and_dressing` | 肉和共产品的分配份额 | 销售和生产记录 | product_id; mass; net_price; currency; market; transaction_date; excluded_fees | 经审计或可追溯发票与生产数量匹配 | kg and currency/kg | 每笔交易，按月汇总 | 与清单一致的代表性 12 个月 | 每个纳入设施和输出市场 | 按产品计算收入和代表性收入份额；检验重大价格变化 | 发票抽样、币种方法、账目核对和敏感性工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景数量 | 归一化数量 = 可归属批次或期间数量 / 声明门口净重冷冻牛肉质量 | 可归属数量；净参考产品质量 | 每 1 kg 参考流的数量 | `fao-leap-large-ruminants-2016` |
| `calc_process_yield` | 屠宰、预处理、冷冻和储存 | 过程得率 = 验收过程输出质量 / 验收过程投入质量；分别报告分子和分母状态 | 验收投入质量；验收输出质量 | 质量得率和损失比例 | `fao-leap-large-ruminants-2016` |
| `calc_water_mass` | 水和废水 | 换算质量 = 实测体积 × 记录温度或合理温度下的有文件密度；保留原始体积 | 实测体积；密度；温度 | 水或废水 kg |  |
| `calc_refrigerant_loss` | 冷冻和储存制冷 | 各物质未回收损失 = 期初库存 + 添加 + 转入 - 回收 - 转出 - 期末库存；负值必须调查 | 各制冷剂库存和维修记录 | 制冷剂排放 kg 或未解决平衡差 | `fao-leap-large-ruminants-2016` |
| `calc_storage_energy` | 冷冻储存 | 分配储存电量 = 区间电量 × 有文件批次分配份额；批次结果为入库至出库各区间分配电量之和 | 区间电量；批次质量；占用容量；入库和出库时间 | 每储存批次 kWh 和 kWh/(kg·month) | `codex-cxc-8-1976-2008`; `fao-meat-cold-store-1991` |
| `calc_revenue_share` | 共享屠宰和预处理负荷 | 对所有产生收入的共产品 j，收入份额_i = 数量_i × 代表性净价格_i / sum(数量_j × 代表性净价格_j) | 产品数量；净价格；币种和期间 | 各产品分配份额 | `fao-leap-large-ruminants-2016` |
| `calc_mass_balance` | 每个过程和整个前景 | 质量平衡差 = 实测总投入 - 实测产品总输出 - 实测废物总输出 - 有文件库存变化；调查物料缺口，不得强制闭合 | 投入；输出；废物；库存变化 | 绝对和相对质量平衡差 | `fao-leap-large-ruminants-2016` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 牛、肉、共产品和参考产品 | 保留从声明起始物料到冷冻参考产品的批次关联，并声明产品形态、带骨状态、包装、路线和门口。 | 通过批次标识关联的接收、生产、仓储和放行记录 |
| `dq_temporal_representativeness` | 常规前景数据 | 可用时采用近期有代表性的 12 个月期间；否则论证较短生产期并披露季节性、停机和异常运行。 | 带日期原始记录、生产日历和代表性声明 |
| `dq_measurement_control` | 质量、能量、水、温度和制冷剂数据 | 使用经校准仪器或可追溯发票；识别估算区间和替代方法。 | 校准证书、发票、仪表台账和缺口日志 |
| `dq_completeness` | 过程及前景质量和能量平衡 | 核算物料投入、肉类输出、共产品、废物、水、废水、包装、能源、制冷剂和储存损失；解释每项重大质量平衡差和截断。 | 过程质量平衡、公用工程核对、截断登记和纠正措施 |
| `dq_temperature_history` | 冷冻放行和储存 | 对声明批次期间保留热中心放行测量、连续或足够频繁的储存温度记录、报警、偏离和纠正措施。 | 经校准记录器导出、放行记录、报警日志和处置决定 |
| `dq_allocation` | 多功能过程 | 保留拆分决定、所有产生收入的输出、代表性价格、币种处理、分配份额和对显著不同价格或方法的敏感性。 | 分配工作簿、发票证据和敏感性结果 |
| `dq_uncertainty_and_estimates` | 推理估算、代理数据和计算值 | 标记每项估算，保留其依据和范围，定量或定性讨论不确定性；发布前用记录或经评审证据替换候选阶段推理估算，除非已获明确接受。 | 数据质量登记、不确定性声明、评审决定和替换记录 |
| `dq_geography_and_technology` | 上游和背景数据集 | 匹配设施地域、电力市场、燃料、水、处理路线、制冷剂物质、冷冻技术和参考年；记录每项代理。 | 数据集元数据和代理论证日志 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求恰好 1 kg 净重 Meat of cattle, frozen，产品 UUID 为 `16e6d353-2acd-4dc3-99b3-fce9d27fbbd7`、Mass UUID 为 `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID 为 `93a60a57-a4c8-11da-a746-0800200c9a66`、单位为 kg；拒绝以鲜/冷藏肉或可食用杂碎替代。 |  |
| `validate_required_qualifiers` | 参考产品元数据 | 牛类别、产品形态、带骨状态、净质量基准、包装形式、冷冻技术、放行温度、储存时长、地域、期间或门口任一缺失时判定不符合。 |  |
| `validate_route_completeness` | 过程图和上游关联 | 要求具备速冻和冷冻储存记录。活牛进入前景时要求屠宰和胴体处理；外购冷藏肉进入时要求关联覆盖省略阶段的上游数据集。 | `fao-leap-large-ruminants-2016`; `codex-cxc-58-2005` |
| `validate_frozen_state` | 速冻放行和冷冻储存 | 要求证据证明热状态稳定后热中心达到 -18 °C 或更低，且储存在仅有文件记录的适用公差下保持 -18 °C 或更低；缺失温度证据时结果为不确定。 | `codex-cxc-8-1976-2008` |
| `validate_mass_balance` | 每个纳入过程和整个前景 | 计算并报告质量平衡差；超出经评审容差的未解释差异为错误，不得通过调整参考产品掩盖。 | `fao-leap-large-ruminants-2016` |
| `validate_allocation` | 共享前景负荷 | 要求拆分证据或覆盖所有产生收入共产品的完整收入分配；不得向无收入残余物分配份额，也不得把可销售产品误归为废物。 | `fao-leap-large-ruminants-2016` |
| `validate_refrigerants` | 冷冻和储存制冷 | 要求制冷剂物质、设备范围、库存平衡和物质特定基本排放；拒绝以未识别的汇总制冷剂排放作为最终清单。 | `fao-leap-large-ruminants-2016` |
| `validate_data_coverage` | 前景记录 | 报告已接受输入、已执行检查、已跳过检查、发现项和完整性；缺失必需过程、公用工程、废水、温度、分配或损失证据时校验结果为不确定。 | `fao-leap-large-ruminants-2016`; `codex-cxc-8-1976-2008` |
| `validate_reasoned_estimates` | 所有 reasoned_estimate 范围 | 候选阶段范围只能作为 QA 校验范围，不得充当采集值或发布关键允许范围；发布前要求替换或取得明确方法学评审接受。 |  |
| `validate_unresolved_uuids` | 非参考清单身份 | 发布前，将每个实际使用的产品流、废物流和基本流解析到正确 Tiangong 身份，或记录经批准的身份例外；不得为其他清单角色复用参考产品 UUID。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 冷冻牛肉生产前景数据包及其 process 或 lifecyclemodel 投影 |
| downstream_use | `secondary_dataset`；当地域、技术、分配和数据质量元数据足以支持预期模型时可作 `background_dataset` |
| allowed_use | 对声明的冷冻牛肉路线、产品形态、地域、期间、门口和储存时长开展归因型 LCA 与清单构建 |
| excluded_use | 鲜或冷藏肉、可食用杂碎、熟制或预制产品、非牛肉、未披露代理路线、食品安全认证，或未统一范围和评审质量的比较性声明 |
| required_metadata | PCR id 与版本；CPC 参考；产品限定信息；设施地域；参考年；路线和门口；纳入过程；上游数据集关联；储存时长；温度制度；分配方法；截断；数据源；未解析身份；评审状态 |
| required_quality_disclosure | 原始数据占比和覆盖；仪器与发票依据；质量平衡差；温度偏离；分配敏感性；制冷剂平衡；废水表征；代理数据集；推理估算；不确定性；局限 |
| update_trigger | 产品形态、起始条件、冷冻或制冷技术、制冷剂物质、包装、储存时长、设施地域、能源供应、分配经济数据、法规、来源证据或重大数据质量发现发生变化 |

## 11. 数据源

| Source id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `fao-leap-large-ruminants-2016` | 官方指南（`official_guidance`） | FAO. Environmental performance of large ruminant supply chains: Guidelines for assessment, Version 1, 2016, ISBN 978-92-5-109523-2. https://openknowledge.fao.org/handle/20.500.14283/i6494en（检索日期 2026-08-11） | 初级肉类加工边界、物料流核算、能源/水/制冷剂/废水采集、共产品分配、代表性、数据质量和不确定性 |
| `codex-cxc-8-1976-2008` | 标准（`standard`） | Codex Alimentarius. Code of Practice for the Processing and Handling of Quick Frozen Foods, CXC 8-1976, revised 2008. https://www.fao.org/input/download/standards/285/CXP_008e.pdf（检索日期 2026-08-11） | 速冻定义、-18 °C 热中心和冷链条件、包装、冷冻储存、温度记录及转移控制 |
| `codex-cxc-58-2005` | 标准（`standard`） | Codex Alimentarius. Code of Hygienic Practice for Meat, CXC 58-2005. https://www.fao.org/input/download/standards/10196/CXP_058e.pdf（检索日期 2026-08-11） | 屠宰与胴体处理过程范围、肉类卫生前提、追溯、操作、冷却、卫生清洁及运输控制 |
| `fao-meat-cold-store-1991` | 手册（`handbook`） | Cano-Muñoz, G. Manual on meat cold store operation and management. FAO Animal Production and Health Paper 92, 1991, ISBN 92-5-102788-9. https://www.fao.org/4/T0098E/T0098E00.htm（检索日期 2026-08-11） | 肉类冷却与冷冻过程分解、包装和冷冻储存机制、冷库运行、产品损失及温度历史要求 |
