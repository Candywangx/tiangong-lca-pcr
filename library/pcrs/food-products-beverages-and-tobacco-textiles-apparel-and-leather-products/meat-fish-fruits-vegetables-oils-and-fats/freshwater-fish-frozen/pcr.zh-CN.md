---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.freshwater-fish-frozen
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 冷冻淡水鱼

## 1. 范围与适用性

本 PCR 覆盖淡水鱼从进入冻结加工设施开始，经初加工、冻结、可选挂冰、包装和冷冻储存，直至所声明设施大门的前景加工。所覆盖的产品形态是仍属于鱼、而非鱼片或分离鱼肉的整条、去血、去内脏、去头、去鳞或其他修整形态的淡水鱼。数据生产者应声明物种、野生或养殖来源、接收形态与温度状态、修整状态、挂冰状态与质量口径、包装形式、冻结技术、储存温度与时长、地理范围和报告期。

本 PCR 不包括活鱼、鲜鱼或冷藏鱼；冷冻鱼片；无论是否绞碎的分离鱼肉；鱼肝和鱼卵；裹面包屑、熟制、熏制、干制、盐渍、发酵、罐藏或其他方式加工的产品；海水鱼；甲壳类、软体动物和其他水生无脊椎动物。捕捞、养殖、上岸和所接收鱼产品的生产应由上游数据集表示。所声明设施大门之后的配送、零售、制备、消费和生命终结不在本前景边界内，除非另行增加数据集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.freshwater-fish-frozen |
| classification_refs | CPC 3.0：21211 Freshwater fish, frozen（`exact`） |
| covered_products | 整条、去血、去内脏、去头、去鳞或其他修整形态的冷冻淡水鱼，不包括鱼片和分离鱼肉 |
| excluded_products | 活鱼、鲜鱼或冷藏鱼；冷冻鱼片；无论是否绞碎的冷冻鱼肉；鱼肝和鱼卵；配制或其他方式保藏的鱼产品；海水鱼；甲壳类、软体动物和其他水生无脊椎动物 |
| representative_product | 声明了物种、来源、修整状态、挂冰状态和包装的已包装冷冻淡水鱼 |
| production_route | 接收淡水鱼；检验和初加工；冻结；可选挂冰；包装；冷冻储存；设施大门交付 |
| market_state | 所声明加工设施大门处的冷冻产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应具有所声明物种、来源和修整状态的冷冻淡水鱼 |
| How much | 1 kg 冷冻淡水鱼净质量 |
| How well | 产品保持在所声明的冷冻状态，并符合生产者形成文件的接收和食品安全规范 |
| How long or cycle | 一个生产批次从接收，经初加工、冻结、可选挂冰、包装和冷冻储存，直至设施大门交付 |
| reference_flow_link | 一个声明的输出行 `frozen_freshwater_fish_reference`，归一化为 1 kg 净产品 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Freshwater fish, frozen `1c2a109f-6b9a-47eb-88a7-232025a03c81` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或物种组；野生或养殖来源；上游来源地理范围；整条或所声明修整状态；接收状态；冻结技术；挂冰状态及挂冰是否计入所声明净质量；包装形式及包装是否计入；储存温度；冷冻储存时长；设施地理范围；报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告 1 kg 冷冻鱼净质量，不含包装。应声明可单独去除的冰衣是否计入鱼产品净质量，并对所有归一化清单行采用相同口径。 |
| `mass_balance_basis` | 鱼、水、冰衣、包装、残余物和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将实测质量换算为 kg，并在同一形成文件的湿基质量口径下核对批次投入、保留产品、单独计量时的可去除冰衣、残余物、废水转移和库存变化。 |
| `energy_normalization` | 电力和燃料 | 与所计量能源载体相适用的能量数量 | kWh 或所声明载体单位 | 保留所计量能源载体的单位，记录换算系数并按 1 kg 参考产品归一化，不得以质量属性替代能量属性。 |
| `storage_time_basis` | 冷冻储存 | 经过时间 | day | 记录从进入冷冻储存到设施大门交付的批次质量加权储存时长，并披露任何共享储存的分配。 |

## 5. 系统边界

前景系统始于所接收淡水鱼跨越冻结设施边界之时。系统包括验收控制、卸料、在设施内实施时的清洗和修整、冻结、可选挂冰、包装、冷冻储存、内部搬运、可归属于所纳入操作的清洁卫生、废水与残余物转移、制冷剂损失，以及设施内运行的处理活动。默认前景清单不包括资本品，除非其对所声明研究具有重要性或适用的下游方法要求纳入。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 淡水鱼进入加工设施，并声明物种、野生或养殖来源、供应商/来源地理范围、接收形态、接收质量、温度状态和上游数据集引用 |
| starting_condition_role | 上游产品投入和冷冻鱼前景加工的可审计起点 |
| product_classification_scope | 仍保持整条或修整鱼形态的冷冻淡水鱼；不包括单独分类的冷冻鱼片、鱼肉、鱼肝和鱼卵，以及其他加工产品 |
| recursive_input_rule | 用于再冻结、重新包装或混合的同类别冷冻淡水鱼投入应由独立上游数据集表示并加以识别；不得在本前景系统内递归重建其此前生产。 |
| upstream_dataset_requirement | 将每个接收鱼来源链接至具有代表性的捕捞或养殖以及上岸/供应数据集，并保留野生/养殖来源、物种、地理、技术和时间代表性。 |
| disclosure | 声明所纳入的初加工步骤、挂冰口径、包装边界、冻结与储存技术、储存时长、共享服务分配、排除的操作和全部截断。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_received_fish_to_gate` | 所有数据集 | 纳入从接收淡水鱼直至冷冻参考产品在设施大门交付的全部可归属前景操作。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `boundary_upstream_link` | 接收鱼和其他外购产品 | 以独立上游数据集表示设施接收之前的生产；不得省略，也不得作为无文件依据的前景估计重建。 | `eu-pef-2021-2279` |
| `boundary_cold_chain` | 冻结和储存 | 纳入计量的冻结、温度控制、冷冻储存、制冷剂损失和所声明大门之前的内部搬运；披露时长和温度口径。 | `codex-cxc-52-2003` |
| `boundary_cutoff_disclosure` | 所有排除的流或操作 | 使用重要性评估识别并说明排除事项；不得仅以缺少数据为由省略可能具有重要性的流。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receiving_preparation` | 接收与初加工 | `required` | 始终纳入；各项修整操作仅在报告设施内实施时适用 | 前景验收、清洗、修整和初加工 | 转入冻结的已初加工鱼 kg |
| `freezing_glazing` | 冻结与可选挂冰 | `required` | 始终纳入；挂冰流仅在采用挂冰时适用 | 前景冻结、温度控制和挂冰 | 转入包装的冷冻鱼 kg |
| `packaging_storage` | 包装与冷冻储存 | `required` | 始终纳入；无包装散装交付应记录零包装并说明形式 | 前景包装、冷冻储存和设施大门交付 | 1 kg 冷冻淡水鱼净质量参考产品 |

### 过程：接收与初加工（`receiving_preparation`）

#### 输入

##### 产品流

###### 接收的淡水鱼（`received_freshwater_fish`）

所接收淡水鱼从独立建模的捕捞或养殖供应链跨越前景边界。应记录供应商批次，不得以冷冻参考流 UUID 替代上游状态。

- 选定流：所接收淡水鱼，声明为活/鲜/冷藏或部分冻结状态（Tiangong UUID 未解析）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每个接收批次的实测验收质量，按最终参考产品归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷冻淡水鱼净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_received_fish`
- 来源：`unsd-cpc-3-0-21211`; `codex-cxc-52-2003`
- 数量范围：宽泛、可替换的接收鱼筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：3
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 冷冻净质量参考产品的接收鱼质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 加工和清洁用水（`preparation_water`）

记录可归属于所纳入初加工操作的清洗、修整、设备清洁和卫生用水。

- 选定流：Process water（Tiangong UUID 未解析）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或以其他方式形成文件的可归属供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已初加工鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：宽泛、可替换的初加工用水筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 已初加工鱼
  - 基准：每 kg 已初加工鱼输出的初加工和清洁供水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已初加工淡水鱼中间产品（`prepared_fish_intermediate`）

计算所声明修整和沥水操作后转入冻结的验收鱼质量。

- 选定流：已初加工淡水鱼中间产品（Tiangong UUID 未解析）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量，或根据接收鱼、保留鱼、残余物和库存变化计算的批次质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 转入冻结的已初加工鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_prepared_transfer`
- 来源：`codex-cxc-52-2003`; `reference-mass-identity`
- 数量范围：宽泛、可替换的已初加工鱼产率筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.3
  - 上限：1.1
  - 单位：kg/kg 接收鱼
  - 基准：每 kg 验收接收鱼转出的已初加工鱼
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 鱼残余物和不合格物料（`preparation_residues`）

按实际去向记录鱼头、内脏、鱼鳞、修整残余、变质鱼及其他不合格物料；作为产品出售的副产品应重新分类并按分配规则处理。

- 选定流：鱼加工残余物或去向特定废物（Tiangong UUID 未解析）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按去向实测残余物和不合格物料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已初加工鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：宽泛、可替换的残余物筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg 已初加工鱼
  - 基准：每 kg 已初加工鱼输出的残余物和不合格物料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初加工废水（`preparation_wastewater`）

记录转入场内或场外处理的废水，并避免与产品、残余物或库存中保留的水重复计算。

- 选定流：转至所声明处理路线的废水（Tiangong UUID 未解析）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量废水，或按处理去向形成可靠用水平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已初加工鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`reference-mass-identity`
- 数量范围：宽泛、可替换的废水筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 已初加工鱼
  - 基准：每 kg 已初加工鱼输出送往处理的废水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：冻结与可选挂冰（`freezing_glazing`）

#### 输入

##### 产品流

###### 已初加工淡水鱼投入（`prepared_fish_to_freezing`）

记录从 `receiving_preparation` 转入的已初加工中间产品，并保留批次身份。

- 选定流：已初加工淡水鱼中间产品（Tiangong UUID 未解析）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：与上游过程输出核对的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 转入包装的冷冻鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prepared_transfer`
- 来源：`reference-mass-identity`
- 数量范围：宽泛、可替换的冻结投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.8
  - 上限：2
  - 单位：kg/kg 转出冷冻鱼
  - 基准：每 kg 转入包装的冷冻鱼所需已初加工鱼投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冻结用电（`freezing_electricity`）

记录冻结设备及可归属辅助负荷的计量用电，不包括另行记录的冷冻储存用电。

- 选定流：电力，声明电网或供应商组合（Tiangong UUID 未解析）
- 流属性/单位：Energy / kWh（UUID 未解析）
- 数量规则：分配至冻结并按冷冻输出归一化的计量电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 转入包装的冷冻鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：宽泛、可替换的冻结用电筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：10
  - 单位：kWh/kg 转出冷冻鱼
  - 基准：每 kg 转入包装的冷冻鱼的冻结用电
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 挂冰用水（`glazing_water`）

仅在施加冰衣时记录挂冰用水；声明冰衣是否计入商业产品质量和参考质量口径。

- 选定流：饮用级挂冰用水（Tiangong UUID 未解析）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：供水量减去单独计量的未保留水，或直接测量冰衣质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 转入包装的冷冻鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_glaze_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：宽泛、可替换的挂冰筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 转出冷冻鱼
  - 基准：每 kg 转入包装的冷冻鱼所保留的挂冰水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制冷剂补充量（`freezing_refrigerant_makeup`）

无法获得直接泄漏记录时，记录可归属于冻结设备的制冷剂采购或充注补充量。

- 选定流：设施特定制冷剂（Tiangong UUID 未解析）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至冻结设备和报告期的实测补充质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 转入包装的冷冻鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：宽泛、可替换的制冷剂补充筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 转出冷冻鱼
  - 基准：每 kg 转入包装的冷冻鱼所分配的制冷剂补充量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷冻鱼中间产品（`frozen_fish_intermediate`）

记录添加包装之前转入包装的冷冻鱼，并与已初加工鱼、保留冰衣、不合格物料和库存变化进行核对。

- 选定流：冷冻淡水鱼中间产品（Tiangong UUID 未解析）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按所声明挂冰口径测得的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 转入包装的冷冻鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_transfer`
- 来源：`codex-cxc-52-2003`; `reference-mass-identity`
- 数量范围：冷冻转移质量平衡筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.8
  - 上限：1.2
  - 单位：kg/kg 所声明冷冻转移输出
  - 基准：每 kg 所声明冷冻转移输出所记录的冷冻中间产品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 排放到空气的制冷剂（`freezing_refrigerant_emission`）

根据所声明冻结设备的维修和库存记录计算制冷剂排放；区分回收、销毁、转移和排放数量。

- 选定流：排放到空气的设施特定制冷剂（Tiangong UUID 未解析）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至冻结设备并按冷冻输出归一化的制冷剂损失计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 转入包装的冷冻鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-pef-2021-2279`; `reference-mass-identity`
- 数量范围：宽泛、可替换的制冷剂直接排放筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 转出冷冻鱼
  - 基准：每 kg 转入包装的冷冻鱼所排放到空气的制冷剂
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：包装与冷冻储存（`packaging_storage`）

#### 输入

##### 产品流

###### 接收用于包装的冷冻鱼（`frozen_fish_to_packaging`）

采用相同挂冰和净质量口径，记录从 `freezing_glazing` 转入的冷冻中间产品。

- 选定流：冷冻淡水鱼中间产品（Tiangong UUID 未解析）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：与上游过程输出核对的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷冻淡水鱼净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_transfer`
- 来源：`reference-mass-identity`
- 数量范围：宽泛、可替换的包装投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.2
  - 单位：kg/kg 参考产品
  - 基准：每 kg 冷冻净质量参考产品的冷冻中间产品投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_materials`）

按材料和实际质量记录一级、二级和三级包装；披露可重复使用运输包装是按每次使用还是按使用寿命分配建模。

- 选定流：材料特定包装产品（Tiangong UUID 未解析）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：向产品批次发放的实测或物料清单包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷冻淡水鱼净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：宽泛、可替换的包装筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 参考产品
  - 基准：每 kg 冷冻净质量参考产品发放的包装材料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷冻储存用电（`storage_electricity`）

记录在所声明批次质量加权储存时长内冷库和可归属辅助负荷的计量用电。

- 选定流：电力，声明电网或供应商组合（Tiangong UUID 未解析）
- 流属性/单位：Energy / kWh（UUID 未解析）
- 数量规则：按形成文件的因果驱动因素分配，并按已交付参考产品归一化的储存计量电量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷冻淡水鱼净质量参考产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：宽泛、可替换的冷冻储存用电筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kWh/kg 参考产品
  - 基准：所声明时长内每 kg 冷冻净质量参考产品分配的冷冻储存用电
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷冻淡水鱼参考产品（`frozen_freshwater_fish_reference`）

这是设施大门交付处唯一声明的参考输出。

- 选定流：Freshwater fish, frozen `1c2a109f-6b9a-47eb-88a7-232025a03c81`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 冷冻淡水鱼净质量的固定参考数量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`reference-mass-identity`
- 数量范围：固定参考质量恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：所声明参考流输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`reference-mass-identity`

##### 废物流

###### 包装废料和不合格包装（`packaging_waste`）

按材料和处理去向记录包装废料、损坏包装和不合格包装产品；设施大门边界内不包括消费后包装废物。

- 选定流：材料特定包装废物（Tiangong UUID 未解析）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转移到各处理去向的实测包装废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷冻淡水鱼净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：宽泛、可替换的包装废物筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 参考产品
  - 基准：每 kg 冷冻净质量参考产品的包装废物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共享过程和多输出操作 | 在采用分配之前，应拆分计量操作或使用直接因果归属。能够独立计量的过程或公用工程应保留独立记录。 | `eu-pef-2021-2279` |
| `allocation_physical` | 鱼产品、可销售副产品、残余物、公用工程和共享储存 | 无法避免分配时，采用能够反映资源使用或产出生成因果关系并形成文件的物理关系；当其他物理驱动更符合因果关系时，不得自动采用质量分配。 | `eu-pef-2021-2279` |
| `allocation_other_relation` | 缺乏可靠物理关系的多输出操作 | 采用其他形成文件的关系；仅在物理因果关系不可成立时才采用经济分配，并记录数值、币种、价格期、地理范围和敏感性。 | `eu-pef-2021-2279` |
| `allocation_waste_reclassification` | 残余物和不合格鱼 | 仅当某流具有形成文件的产品功能和去向时才作为共产品；否则应对所声明废物处理建模，不得虚构抵扣。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_received_fish` | `receiving_preparation` | 接收淡水鱼 | 接收记录 | lot_id; supplier; species; wild_or_farmed; source_geography; received_form; temperature_state; gross_mass; accepted_mass; receipt_time | 校准秤和验收日志 | kg; °C; timestamp | 每批 | 完整报告期 | 所有纳入的接收点 | 按所声明产品和来源汇总验收质量；保留排除批次记录 | 秤校准；供应商文件；批次可追溯性；温度记录 |
| `cp_water_records` | `receiving_preparation` | 加工和清洁用水 | 仪表或公用工程记录 | meter_id; opening_reading; closing_reading; period; shared_users; allocation_driver | 独立水表或经核对的设施用水平衡 | kg 或 m3，并有实测换算口径 | 仪表周期且至少每月 | 完整报告期 | 纳入的初加工和清洁区域 | 扣除不相关用水，并按形成文件的因果驱动因素分配共享用水 | 仪表校准；公用事业账单；核对记录 |
| `cp_prepared_transfer` | `receiving_preparation` | 已初加工鱼转移 | 批次质量平衡记录 | lot_id; accepted_mass; transfer_mass; residue_mass; wastewater_mass; inventory_change; timestamp | 校准秤和批次核对 | kg | 每批 | 完整报告期 | 所有纳入的初加工线 | 汇总转移质量并按批次核对未解释差异 | 秤校准；签字批次表；平衡异常日志 |
| `cp_residue_records` | `receiving_preparation` | 残余物和不合格物料 | 废物或副产品交付记录 | lot_id; material_type; mass; destination; product_or_waste_status; dispatch_reference | 校准秤和去向文件 | kg | 每次转移 | 完整报告期 | 所有纳入的初加工线 | 按材料、状态和去向分别汇总 | 秤校准；发票或废物转移联单 |
| `cp_wastewater_records` | `receiving_preparation` | 转入处理的废水 | 仪表或用水平衡记录 | meter_reading; water_input; retained_water; residue_water; discharge_or_transfer; treatment_route | 独立仪表或经核对的用水平衡 | kg 或 m3，并有实测换算口径 | 仪表周期且至少每月 | 完整报告期 | 所有纳入的工艺排水口 | 按处理路线汇总，并与可归属供水进行核对 | 仪表校准；采样或转移记录；核对记录 |
| `cp_energy_records` | `freezing_glazing` | 冻结用电 | 电表记录 | meter_id; opening_reading; closing_reading; period; frozen_output; shared_loads; allocation_driver | 独立分表或根据设施总表形成文件的分配 | kWh | 仪表周期且至少每月 | 完整报告期 | 纳入的冻结设备及辅助设施 | 扣除单独计量负荷，并用可归属 kWh 除以冷冻转移输出 | 仪表校准；账单；分配工作表 |
| `cp_glaze_records` | `freezing_glazing` | 保留冰衣 | 批次质量记录 | lot_id; pre_glaze_mass; post_glaze_mass; supplied_water; nonretained_water; glaze_convention | 校准秤和批次用水记录 | kg | 每个挂冰批次 | 完整报告期 | 所有挂冰线 | 保留冰衣 = 挂冰后质量 - 挂冰前质量，并与用水平衡交叉核对 | 秤校准；批次记录；挂冰口径批准记录 |
| `cp_refrigerant_records` | `freezing_glazing` | 制冷剂补充和排放 | 设备维修和库存记录 | equipment_id; refrigerant_type; opening_charge; additions; recoveries; transfers; closing_charge; service_date; process_assignment | 维修日志和制冷剂库存核对 | kg | 每次维修事件并每年核对 | 完整报告期 | 所有纳入的冻结和储存设备，尽可能分别归属 | 损失 = 期初充注 + 补充 - 回收 - 转移 - 期末充注；仅分配共享设备 | 技师记录；采购记录；充注核对 |
| `cp_frozen_transfer` | `freezing_glazing` | 冷冻中间产品转移 | 批次转移记录 | lot_id; prefreeze_mass; retained_glaze; reject_mass; frozen_transfer_mass; inventory_change; temperature; timestamp | 校准秤和转移日志 | kg; °C; timestamp | 每批 | 完整报告期 | 所有冻结线 | 按所声明挂冰口径汇总转移，并核对批次平衡 | 秤校准；批次可追溯性；温度记录 |
| `cp_packaging_records` | `packaging_storage` | 包装投入和废物 | 物料清单和发料记录 | packaging_material; issued_mass; returned_mass; scrap_mass; packed_output; reusable_cycles | 秤、采购记录和生产发料记录 | kg；以实测单件质量换算时可用 count | 每批并在报告期核对 | 完整报告期 | 所有纳入的包装线 | 包装净投入 = 发放 - 未用退回；分别记录废料和可重复使用包装分配 | 供应商规范；秤校准；核对记录 |
| `cp_storage_records` | `packaging_storage` | 冷冻储存和交付 | 仪表和仓库记录 | meter_id; electricity; lot_id; entry_time; dispatch_time; stored_mass; storage_temperature; shared_users; allocation_driver | 电表加仓库管理记录 | kWh; kg; °C; timestamp | 仪表周期和每次批次移动 | 完整报告期 | 所有纳入的冷库和交付点 | 按形成文件的因果驱动因素分配共享用电，并计算批次质量加权储存天数 | 仪表校准；温度日志；库存核对；交付记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 报告期可归属数量 / 冷冻淡水鱼净质量参考输出 | 可归属数量；参考净输出 | 每 1 kg 参考产品的数量 | `reference-mass-identity`; `eu-pef-2021-2279` |
| `calc_preparation_balance` | `receiving_preparation` | 验收鱼 + 可归属用水 = 已初加工转移 + 残余物 + 废水转移 + 保留水 + 库存变化 + 形成文件的平衡差异 | 验收质量；用水；转移；残余物；废水；库存变化 | 经核对的初加工质量平衡 | `reference-mass-identity`; `codex-cxc-52-2003` |
| `calc_glaze_mass` | 仅挂冰产品 | 保留冰衣质量 = 挂冰后质量 - 挂冰前质量；与供水和未保留水交叉核对 | 挂冰前质量；挂冰后质量；用水记录 | kg 保留冰衣及是否计入产品质量的声明 | `reference-mass-identity`; `codex-cxc-52-2003` |
| `calc_refrigerant_loss` | 冻结和储存设备 | 损失 = 期初充注 + 补充 - 回收 - 转移 - 期末充注；按形成文件的设备驱动因素分配共享损失 | 充注和维修库存；设备归属 | 各过程排放的 kg 制冷剂 | `reference-mass-identity`; `eu-pef-2021-2279` |
| `calc_storage_duration` | 冷冻储存 | 批次质量加权储存天数 = sum（批次质量 × 经过天数）/ sum（已交付批次质量） | 入库时间；交付时间；批次质量 | day | `reference-mass-identity` |
| `calc_packaging_mass` | 包装 | 包装净投入 = 发放质量 - 未使用退回质量；可重复使用包装负担采用形成文件的寿命周转次数和损失 | 发放、退回、废料、重复使用次数和输出记录 | 每参考产品的 kg 包装和 kg 废料 | `reference-mass-identity`; `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和接收鱼 | 保留物种或物种组、野生/养殖来源、来源地理范围、修整状态、挂冰口径、包装和批次可追溯性；不得替换为鱼片、鱼肉或海水鱼身份。 | 产品规范；供应商记录；批次记录；`unsd-cpc-3-0-21211`; `codex-cxs-190-1995` |
| `dq_measurement` | 质量、能量、水、温度和时间 | 使用经校准或验证的测量系统；记录换算、共享仪表分配、缺失读数和平衡异常。 | 校准记录；仪表记录；计算工作表；`eu-pef-2021-2279` |
| `dq_temporal` | 所有前景活动 | 覆盖包含季节性生产和储存变化的代表性运营期，或披露限制并说明外推依据。 | 报告期完整性记录；生产计划；`eu-pef-2021-2279` |
| `dq_completeness` | 所有纳入过程 | 核对生产、库存、公用工程、包装、残余物、废水、制冷剂和交付记录；调查具有重要性的未解释差异。 | 质量和能量核对；异常日志；`eu-pef-2021-2279` |
| `dq_representativeness` | 下游使用 | 对照所声明冷冻鱼系统评价技术、地理、时间和产品代表性，并披露偏差。 | 代表性评价；元数据记录；`eu-pef-2021-2279` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 确认恰有一个参考输出采用 UUID `1c2a109f-6b9a-47eb-88a7-232025a03c81`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 和 1 kg 数量。 | `reference-mass-identity` |
| `validate_scope_identity` | 产品元数据 | 确认已声明淡水物种或物种组、野生/养殖来源、整条或修整状态、挂冰口径、包装和上游数据集，并拒绝以鱼片、分离鱼肉、鱼肝/鱼卵、海水鱼或其他保藏产品替代。 | `unsd-cpc-3-0-21211`; `codex-cxs-190-1995` |
| `validate_process_coverage` | 过程图和清单 | 确认接收/初加工、冻结、采用时的可选挂冰、包装、冷冻储存、清洁卫生、残余物、废水、制冷剂和交付已记录，或明确说明不适用。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `validate_mass_balance` | 每批及报告期 | 按所声明质量口径核对鱼、保留冰衣、包装、残余物、废水和库存变化；将未解释差异标记供复核，不得强行配平。 | `reference-mass-identity`; `eu-pef-2021-2279` |
| `validate_energy_and_cold_storage` | 冻结和储存 | 确认冻结与储存能源未重复计算、已声明储存时长和温度，并且共享负荷采用形成文件的分配驱动因素。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `validate_provisional_ranges` | 所有 `reasoned_estimate` 范围 | 宽泛暂定范围仅作为筛选辅助；数值超出范围应触发调查而非自动拒绝，并应在用于发布关键约束之前以经评审证据替换。 |  |
| `validate_allocation` | 多输出和共享操作 | 确认优先尝试了拆分或直接归属，并披露所有剩余分配方法、因子和敏感性。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 在所声明设施大门将淡水鱼加工为整条或修整形态冷冻鱼的前景生产数据集 |
| downstream_use | 当满足所声明限定信息和代表性条件时，可作为 `secondary_dataset` 或 `background_dataset` 发布，用于产品 LCA 和生命周期模型 |
| allowed_use | 物种、来源、修整状态、上游生产、设施技术、挂冰口径、包装、储存时长、地理范围、时间段和分配具有代表性的冷冻淡水鱼研究 |
| excluded_use | 直接表示捕捞或养殖；活/鲜/冷藏鱼；冷冻鱼片或分离鱼肉；海水鱼；其他保藏产品；未添加额外数据集时的下游配送、零售、烹饪、消费或生命终结 |
| required_metadata | PCR id；数据集版本；参考流 UUID；物种；野生/养殖来源；上游数据集；接收与最终产品状态；修整状态；挂冰口径；包装；设施地理范围；技术；储存温度与时长；报告期；分配；截断；数据源 |
| required_quality_disclosure | 初级数据占比；测量与校准覆盖；质量/能量核对；缺失数据处理；技术、地理和时间代表性；分配敏感性；未解析 UUID；暂定范围的替换状态 |
| update_trigger | 物种组合、来源、修整或挂冰口径、冻结/储存技术、包装、设施、能源供应、制冷剂、分配、报告期、官方分类范围、来源指南或经验证的 Tiangong 身份发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21211` | `official_guidance` | 联合国统计司，《Central Product Classification Version 3.0 explanatory notes》，子类 21211 Freshwater fish, frozen，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-11） | 产品类别范围、所纳入淡水鱼形态，以及鱼片和鱼肉排除项 |
| `codex-cxc-52-2003` | `standard` | Codex Alimentarius，《Code of Practice for Fish and Fishery Products》，CXC 52-2003，https://www.fao.org/input/download/standards/10273/CXP_052e.pdf（检索日期 2026-08-11） | 过程分解、接收与卫生控制、冻结、挂冰、包装、储存、温度记录和可追溯性 |
| `codex-cxs-190-1995` | `standard` | Codex Alimentarius，《Standard for Quick-Frozen Fish Fillets》，CXS 190-1995，https://www.fao.org/input/download/standards/115/CXS_190e.pdf（检索日期 2026-08-11） | 仅用于定义并区分应从本整条/修整鱼 PCR 中排除的鱼片；不用于将鱼片要求扩展至 CPC 21211 |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods，CELEX 32021H2279，http://data.europa.eu/eli/reco/2021/2279/oj（检索日期 2026-08-11） | 系统边界完整性、重要性、分配层级、包装与能源建模、数据质量、代表性和披露 |
| `reference-mass-identity` | `method_factor` | PCR 参考流和守恒恒等式：所有可归属清单数量均按所声明 1 kg 净质量参考输出归一化，质量平衡保留实测投入、产出和库存变化 | 参考归一化、质量平衡、挂冰、包装、储存时长和制冷剂库存计算 |
