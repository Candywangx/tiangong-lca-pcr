---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.condensed-milk
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 炼乳

## 1. 范围与适用性

本 PCR 仅适用于通过从乳中部分去除水分并添加糖，或通过能获得相同组成和特性的等效工艺制成的甜炼乳。覆盖以零售、餐饮或散装工业形式供应的全脂、脱脂、部分脱脂和高脂甜炼乳。前景结果为工厂门口产品；所声明的包装形式可以是消费包装、运输容器或散装发运。

不包括未加糖淡炼乳（CPC 22221）、CPC 22229 乳和稀奶油产品、乳和稀奶油粉、普通未浓缩液态乳、婴幼儿配方食品、配制乳制甜点、非乳基浓缩饮料以及下游使用或消费。原料乳、糖、其他配料、包装、燃料、电力、水和外购处理服务的上游生产通过链接上游数据集表示，不在炼乳前景过程中重新构建。

Codex 组成限值、质量因素和乳制品命名规则只用于界定或校验所声明的产品身份。BAT 性能水平及相关监测规定只用于确定相关前景流和质量证据。这些来源中的数值均不是通用 LCI 数量；实际数量必须来自有代表性的场址和批次记录，或来自下文明确标注的临时 `reasoned_estimate` QA 校验范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.condensed-milk |
| classification_refs | CPC 3.0: 22222 Condensed milk |
| covered_products | 全脂甜炼乳；脱脂甜炼乳；部分脱脂甜炼乳；高脂甜炼乳 |
| excluded_products | CPC 22221 淡炼乳；CPC 22229 乳和稀奶油产品；乳和稀奶油粉；普通未浓缩液态乳；婴幼儿配方食品；配制乳制甜点；非乳基浓缩饮料 |
| representative_product | 全脂甜炼乳 |
| production_route | 乳接收与标准化；热处理；真空浓缩；糖和配料添加；冷却或乳糖结晶控制；灌装或散装发运；清洗和场内废水处理 |
| market_state | 制造厂门口处于实际销售包装或散装发运包装中的常温稳定或以其他方式声明的炼乳 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合所声明产品亚型和组成规格的炼乳 |
| How much | 1 kg 净炼乳产品 |
| How well | 符合所声明的乳脂、总乳固体、非脂乳固体中乳蛋白、甜味剂、质量和包装规格 |
| How long or cycle | 制造厂门口的一个生产批次；不声明使用期服务 |
| reference_flow_link | `final_packaging_and_dispatch` 的净可售产品输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 炼乳 `5db242cb-3e7b-46fc-89cc-d676dd2a1fd3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品亚型；甜味剂类型和质量分数；乳脂质量分数；总乳固体质量分数；非脂乳固体中乳蛋白；包装或散装发运形式和净质量；生产技术；生产地域；参考期；分配方法 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息的数据包，其参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部清单量归一化到 1 kg 净可售炼乳；参考产品质量不含初级、次级和运输包装质量。 |
| `wet_mass_basis` | 乳、乳制配料、糖、水、产品、损失和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 除非流条目明确声明干物质基准，否则记录接收或排放状态的湿质量；保留换算所用的实测固形物或水分分数。 |
| `composition_mass_fraction` | 产品亚型和组成 | 质量分数 | kg/kg 产品 | 使用批次特定的实验室或放行记录，在一致的质量基准上确定乳脂、总乳固体和非脂乳固体中乳蛋白。 |
| `energy_conversion` | 外购电力和热能 | 能量 | 电力用 kWh；热能用 MJ | 保留计量单位和换算系数；仅在需要统一能量单位时按 1 kWh = 3.6 MJ 换算电力，不合并电力与燃料清单。 |
| `water_volume_conversion` | 水和含水废水 | 质量或体积 | kg 或 m3 | 优先使用直接质量或体积记录；体积换算为质量时，使用实测或有文件依据的密度和温度，不使用未声明的密度假设。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | 前景制造 | 纳入乳接收、储存损失、标准化、热处理、浓缩、配料、冷却或结晶控制、灌装或散装发运、过程清洗、直接服务于这些操作的场内公用工程，以及由报告设施运行时的场内废水处理。 | `codex-cxs-282-1971`; `eu-fdm-bat-2019-2031` |
| `boundary_purchased_inputs` | 上游产品投入 | 将原料乳、乳制配料、糖、添加剂、包装、燃料、电力、水、清洗剂以及外购废物或废水处理保留为可见的产品流或废物流交换，并链接代表性上游数据集。 | `codex-cxs-282-1971`; `eu-pef-2021-2279` |
| `boundary_exclusions` | 下游和资本品 | 除非研究目标明确扩展系统，否则排除工厂门口后的配送、零售冷藏、消费者使用和产品包装生命末期；一致地披露被排除的资本品和基础设施。 | `eu-pef-2021-2279` |
| `boundary_losses_and_emissions` | 物料与排放闭合 | 记录乳或产品损失、不合格产品、冷凝水去向、废水、包装废物和实测直接释放；不得将其隐藏在收率因子或净投入中。 | `eu-fdm-bat-2019-2031` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 乳和其他乳制配料在制造场址门口接收，并声明质量、组成、温度或保存状态、供应商地域和上游数据集身份 |
| starting_condition_role | 外购产品投入和前景保管起点 |
| product_classification_scope | 对应 CPC 3.0 代码 22222 的炼乳，并声明产品亚型和组成限定信息 |
| recursive_input_rule | 进入同一产品类别的炼乳返工料保持为单独计量的产品投入；识别其来源批次或上游数据集，不递归重建其先前制造 |
| upstream_dataset_requirement | 将乳、乳制配料、糖、添加剂、包装、能源载体、电力、水、清洗剂和场外处理服务链接至地域和时间上具有代表性的上游数据集 |
| disclosure | 声明产品亚型和组成、原料状态、返工、纳入的场内操作、技术、包装或散装形式、参考期、地域、分配方法、损失、废水路线以及每项排除或代理数据集 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `milk_reception_and_standardization` | 乳接收与标准化 | `required` | 始终纳入 | 前景接收、储存、组成调整和准备 | 送至浓缩的标准化乳中间体 kg |
| `concentration_and_formulation` | 热处理、浓缩与配料 | `required` | 始终纳入 | 前景去水、糖或配料添加和散装炼乳生产 | 送至后处理的散装炼乳 kg |
| `final_packaging_and_dispatch` | 冷却、后处理、包装与发运 | `required` | 始终纳入，包括声明的散装发运 | 前景最终调理和参考产品输出 | 制造厂门口 1 kg 净可售炼乳 |

### 过程：乳接收与标准化（`milk_reception_and_standardization`）

#### 输入

##### 产品流

###### 原料乳和乳制配料（`received_milk_and_dairy_ingredients`）

每种接收的乳、乳粉、稀奶油、乳脂产品、乳渗余物、乳渗透物、乳糖或其他声明乳制配料跨越场址保管边界时分别记录。所选 Tiangong 流 UUID 尚未解析，必须在激活前核验。

- 选定流：原料乳和适用乳制配料；Tiangong flow UUID unresolved
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由实测接收质量、库存变动和退回物料修正得到所代表批次消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可售炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_materials`
- 来源：`codex-cxs-282-1971`
- 数量范围：暂定乳和乳制配料质量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：6
  - 单位：kg/kg 净可售炼乳
  - 基准：宽泛首轮湿质量筛查；以经评审的产品特定证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 接收和标准化用水（`reception_standardization_water`）

记录添加到产品或用于可直接归属的接收与标准化操作的水，不含接收乳中已有的水。

- 选定流：Process water；Tiangong flow UUID unresolved
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：过程中消耗的计量或批次记录用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 数量范围：暂定接收用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg 净可售炼乳
  - 基准：宽泛首轮场址用水筛查；以计量证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

通常无需废物投入。按法律所有权和所选处理模型，将外部处理后的返工料或退回物料记录为单独废物或产品投入。

##### 基本流

本过程不规定基本流投入；上游资源开采属于所链接的投入数据集。

#### 输出

##### 产品流

###### 标准化乳中间体（`standardized_milk_intermediate`）

记录转移到浓缩过程的质量，并保留组成和内部转移批次。

- 选定流：Standardized milk intermediate；Tiangong flow UUID unresolved
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可售炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_materials`
- 数量范围：暂定中间体收率 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：6
  - 单位：kg/kg 净可售炼乳
  - 基准：宽泛首轮湿质量筛查；以批次质量平衡证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外送分离乳组分（`exported_milk_components`）

仅当稀奶油、脱脂乳或其他标准化组分作为可售共产品离开本产品系统时记录；内部转移保持为中间体。

- 选定流：Separated milk component；Tiangong flow UUID unresolved
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测外送共产品质量；无组分离开系统时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可售炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_materials`
- 数量范围：暂定外送组分 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 净可售炼乳
  - 基准：宽泛首轮共产品筛查；以批次证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 接收损失和废水（`reception_losses_and_wastewater`）

按实际去向记录溢洒或拒收乳、清洗液及其他接收损失；拆分处理路线实质不同的流。

- 选定流：按处理路线区分的乳品损失或废水；Tiangong flow UUID unresolved
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往各处理路线的实测或质量平衡计算废物
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_and_losses`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定接收损失 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg 净可售炼乳
  - 基准：宽泛首轮合并损失和清洗液筛查；以路线特定记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

本过程不规定直接基本流输出。任何实测直接释放必须作为具有经核验 Tiangong UUID 的单独基本流添加。

### 过程：热处理、浓缩与配料（`concentration_and_formulation`）

#### 输入

##### 产品流

###### 进入浓缩的标准化乳（`standardized_milk_input`）

记录来自乳接收与标准化过程的实测内部转移。

- 选定流：Standardized milk intermediate；Tiangong flow UUID unresolved
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入所代表批次的实测标准化乳质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 散装炼乳输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_materials`
- 数量范围：暂定浓缩进料 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：6
  - 单位：kg/kg 散装炼乳
  - 基准：宽泛首轮湿进料筛查；以批次记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 糖和其他许可配料（`sugar_and_other_ingredients`）

将糖与饮用水、氯化钠、组成调整乳制配料和许可添加剂分别记录。配料身份和使用必须符合所声明产品规格和适用市场规则。

- 选定流：糖和每种其他配料；Tiangong flow UUID unresolved
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每种所代表配料的实测领用质量减有记录的退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可售炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_materials`
- 来源：`codex-cxs-282-1971`
- 数量范围：暂定糖和配料 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：1
  - 单位：kg/kg 净可售炼乳
  - 基准：宽泛首轮合并配料筛查；以配方记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购热能载体或蒸汽（`thermal_energy_input`）

燃料按质量或体积记录，外购蒸汽按交付能量记录；保留低位或高位热值基准和供应商数据集。

- 选定流：按载体区分的燃料或外购蒸汽；Tiangong flow UUID unresolved
- 流属性/单位：Energy / 交付至过程的 MJ
- 数量规则：分配至所代表热处理和浓缩操作的计量热能
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可售炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定热能 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：15
  - 单位：MJ/kg 净可售炼乳
  - 基准：宽泛首轮过程能耗筛查；以计量且技术特定的证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购电力（`concentration_electricity`）

记录泵、真空产生、浓缩、冷却和可直接归属辅助设备的计量电力，不与热能合并。

- 选定流：声明电网或供应商组合的 Electricity；Tiangong flow UUID unresolved
- 流属性/单位：Energy / kWh
- 数量规则：所代表操作消耗的计量或工程分配电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定电力 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：3
  - 单位：kWh/kg 净可售炼乳
  - 基准：宽泛首轮电力筛查；以计量证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 浓缩和清洗用水（`concentration_cleaning_water`）

记录可归属所代表批次的过程水和就地清洗用水，扣除在同一系统中复用且单独计量的回收冷凝水。

- 选定流：Process water；Tiangong flow UUID unresolved
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至浓缩和配料的计量取水量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定浓缩用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 净可售炼乳
  - 基准：宽泛首轮过程和清洗用水筛查；以计量证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

通常无需废物投入。外购废物处理对应于相关废物输出表示，不作为无链接投入。

##### 基本流

不规定基本流投入；上游资源和排放保留在所链接的能源和物料数据集中。

#### 输出

##### 产品流

###### 散装炼乳中间体（`bulk_condensed_milk`）

记录转移到最终冷却、后处理和发运的散装炼乳，并保留批次组成和质量。

- 选定流：Bulk condensed milk intermediate；Tiangong flow UUID unresolved
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 散装炼乳输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_materials`
- 数量范围：散装输出归一化检查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 散装炼乳
  - 基准：精确过程输出归一化
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 回收冷凝水（`recovered_condensate`）

仅当蒸发器冷凝水数量和去向均有计量时，将其记录为内部或外送产品流；否则一致地将其送入废水路线。

- 选定流：Recovered process water；Tiangong flow UUID unresolved
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按去向拆分计量复用或外送冷凝水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可售炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 数量范围：暂定回收冷凝水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg 净可售炼乳
  - 基准：宽泛首轮回收筛查；以计量证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 浓缩废水和产品损失（`concentration_wastewater_and_losses`）

记录清洗废水、送往处理的未回收冷凝水、不合格散装产品及其他损失；实质上不同时按处理去向分别记录。

- 选定流：按处理路线区分的废水或乳制品损失；Tiangong flow UUID unresolved
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量加质量平衡计算的产品损失，按去向拆分
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_and_losses`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定浓缩废物 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 净可售炼乳
  - 基准：宽泛首轮合并废水和损失筛查；以路线特定证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 直接燃烧二氧化碳（`direct_fossil_co2`）

仅当燃料在前景边界内燃烧时纳入此条目。由燃料记录和有文件依据的因子确定排放，并在激活前替换尚未解析的 Tiangong 流身份。

- 选定流：Carbon dioxide, fossil, to air；Tiangong flow UUID unresolved
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：燃料数量乘以有文件依据的载体特定二氧化碳因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数量范围：暂定直接化石二氧化碳 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg CO2/kg 净可售炼乳
  - 基准：宽泛首轮直接燃烧筛查；以燃料特定计算证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：冷却、后处理、包装与发运（`final_packaging_and_dispatch`）

#### 输入

##### 产品流

###### 进入后处理的散装炼乳（`bulk_condensed_milk_input`）

记录来自浓缩和配料过程的实测内部转移。

- 选定流：Bulk condensed milk intermediate；Tiangong flow UUID unresolved
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：可售和拒收单元对应的实测散装转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可售炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_output`
- 数量范围：暂定散装投入 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.5
  - 单位：kg/kg 净可售炼乳
  - 基准：宽泛首轮灌装收率筛查；以生产线记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_materials`）

按材料和供应商数据集分别记录初级、次级及可归属运输包装；散装发运记录实际容器处理和复用约定。

- 选定流：按材料类型区分的 Packaging material；Tiangong flow UUID unresolved
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用包装减有记录的未使用退回量，并包括预期生产线废品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可售炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_output`
- 数量范围：暂定包装质量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 净可售炼乳
  - 基准：宽泛首轮包装形式筛查；以物料清单证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 后处理和包装电力（`packaging_electricity`）

记录冷却、搅拌或结晶控制、灌装、密封、喷码和可直接归属包装线辅助设备用电。

- 选定流：声明电网或供应商组合的 Electricity；Tiangong flow UUID unresolved
- 流属性/单位：Energy / kWh
- 数量规则：所代表操作消耗的计量或工程分配电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：暂定后处理电力 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kWh/kg 净可售炼乳
  - 基准：宽泛首轮后处理和包装筛查；以计量证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

通常无需废物投入。

##### 基本流

不规定基本流投入；上游负荷保留在所链接的产品数据集中。

#### 输出

##### 产品流

###### 净可售炼乳（`reference_condensed_milk`）

这是唯一参考产品输出。将完成的清单精确归一化为 1 kg 净产品，同时保留计算所用的实际总产量和拒收记录。

- 选定流：炼乳 `5db242cb-3e7b-46fc-89cc-d676dd2a1fd3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定参考输出 1 kg 净可售炼乳
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 数量范围：精确参考流归一化
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：参考产品输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 不合格产品和包装废物（`offspec_product_and_packaging_waste`）

按材料和处理路线分别记录不合格炼乳和包装废品；不得从投入中隐式扣除。

- 选定流：按处理路线区分的不合格乳制品或包装废物；Tiangong flow UUID unresolved
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往每条复用、再生、回收或处置路线的实测拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_output`
- 数量范围：暂定后处理废物 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 净可售炼乳
  - 基准：宽泛首轮合并废品筛查；以材料和路线特定记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

本过程不规定直接基本流输出。任何实测制冷剂损失或其他直接释放，应作为具有经核验 Tiangong UUID 和有文件依据计算的单独基本流添加。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 可分离操作和产品线 | 在技术可行时，通过细分独立计量的接收、浓缩、后处理、公用工程和处理操作来避免分配。 | `eu-pef-2021-2279` |
| `allocation_internal_intermediates` | 标准化乳、散装炼乳、返工料和回收冷凝水 | 内部转移承接其实测上游负荷，不作为共产品。返工料必须保留来源批次负荷；内部使用的回收冷凝水减少外购水总需求，不获得避免产品信用。 | `eu-pef-2021-2279` |
| `allocation_exported_milk_components` | 稀奶油、脱脂乳或其他外送乳制共产品 | 细分后，使用反映因果质量或固形物转化的有文件依据物理关系分配剩余共同负荷；如不存在可辩护物理关系，使用同期价格进行经济分配，并报告物理分配敏感性。 | `eu-pef-2021-2279` |
| `allocation_waste_and_recycling` | 废物处理、回收物料和外送冷凝水 | 处理负荷留在产生系统，除非所选下游数据集实施另一项已披露约定；不得重复声明避免负荷或再生信用。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_materials` | `milk_reception_and_standardization`; `concentration_and_formulation` | 接收物料、内部转移、配方配料、组成和外送乳制组分 | 地磅、校准罐表或在线仪表、批次单、库存账、实验室放行记录 | 物料 id；供应商；批次；期初和期末库存；接收、领用、退回、转移和外送质量；乳脂；总乳固体；非脂乳固体中乳蛋白；甜味剂分数 | 将物理仪表或秤记录与批次和库存记录核对 | kg；kg/kg | 每批，按月或年汇总 | 至少连续 12 个代表性月份，较短季节性生产则覆盖完整生产期 | 所有纳入的生产线和储罐 | 按物料和批次汇总净消耗或转移质量，再除以净可售参考产品质量 | 校准记录；库存核对；批次追溯；实验室方法和质量控制结果 |
| `cp_utilities` | all process ids | 电力、燃料、蒸汽、水和回收冷凝水 | 结算表或分表读数、燃料发票、锅炉日志、公用工程分配记录 | 仪表 id；期初和期末读数；单位；燃料量；热值基准；蒸汽条件；冷凝水量；分配驱动量；停机时间 | 优先使用过程分表；否则按有文件依据的运行小时、产量或工程负荷分配经核对的场址总量 | kWh；MJ；kg；m3 | 连续或每班，按月汇总 | 与生产相同参考期 | 所有纳入的公用工程和可直接归属辅助设备 | 扣除经核验的非 PCR 用量，将剩余量除以净可售产品；保留分配驱动量 | 仪表校准；发票核对；场址能量和水平衡；分配工作表 |
| `cp_wastewater_and_losses` | `milk_reception_and_standardization`; `concentration_and_formulation` | 产品损失、清洗液、冷凝水去向、废水和处理路线 | 排水仪表、废物联单、批次偏差、质量平衡记录、实验室分析 | 流 id；来源；质量或体积；密度；产品固形物；COD 或其他报告污染物；去向；处理；日期 | 计量每条物料路线；仅将未计量产品损失作为已披露残差计算 | kg；m3；kg 污染物 | 每批或每日，按月汇总 | 与生产相同参考期 | 每条纳入的排放和损失路线 | 按流和去向求和，必要时以实测密度换算，并按参考输出归一化 | 仪表校准；交接或处理联单；实验室结果；签署的质量平衡评审 |
| `cp_packaging_and_output` | `final_packaging_and_dispatch` | 包装投入、产品总量、净可售输出、不合格产品和包装废品 | 物料清单、生产线计数器、检重秤、仓库放行、拒收日志 | 产品批次；包装材料；领用、退回、灌装、接收和拒收单元；声明净质量；散装发运质量；废物去向 | 将包装领用和生产线输出记录与放行产品和废品核对 | kg；item | 每个包装批次或生产班次 | 与生产相同参考期 | 每种纳入的包装或散装发运形式 | 由合格单元和经核验净质量计算净可售产品；按类型汇总材料和废品 | 检重秤校准；物料清单；仓库核对；废品去向记录 |
| `cp_direct_emissions` | `concentration_and_formulation` | 直接燃料燃烧和其他实测释放 | 燃料记录、连续监测、烟道测试、泄漏日志、排放计算 | 燃料量；碳含量或因子；氧化因子；监测浓度和流量；运行时间；制冷剂补加和回收量 | 可用时采用监测质量；否则由采集活动数据和有引用的载体特定因子计算 | kg；kg/h；浓度单位 | 每个燃料批次、监测间隔、测试或维护事件 | 与生产相同参考期 | 边界内全部燃烧和直接释放点 | 按来源计算，在参考期求和并除以净可售输出，不含上游排放 | 仪表或监测器校准；实验室报告；因子引用；计算评审 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_consumption` | 每项物料投入 | 净消耗质量 = 期初库存 + 接收量 - 期末库存 - 有记录的退回或转出量 | `cp_batch_materials` 或 `cp_packaging_and_output` 的库存和移动记录 | 物料消耗 kg | `mass-balance-identity` |
| `calc_reference_output` | 参考产品 | 净可售质量 = 合格包装数 × 每包经核验净质量 + 计量的合格散装发运质量 | `cp_packaging_and_output` 的合格单元数、检重结果和散装仪表 | 净可售炼乳 kg | `mass-balance-identity` |
| `calc_normalized_inventory` | 每个清单条目 | 归一化量 = 该 PCR 可归属的期间量除以同期净可售炼乳质量 | 采集或计算的期间量；`calc_reference_output` | 每 1 kg 参考产品的量 | `eu-pef-2021-2279`; `mass-balance-identity` |
| `calc_mass_balance` | 每个过程和报告期 | 质量平衡残差 = 湿质量投入总量 - 实测产品和共产品输出 - 实测废物和废水输出 - 量化水蒸气或其他实测释放；调查并披露实质残差 | 批次物料；产品输出；冷凝水；废物；废水；排放 | 残差 kg 和百分比 | `mass-balance-identity` |
| `calc_energy` | 外购能源 | 交付能量 = 计量能量，或燃料量 × 有文件依据的热值；保持电力和各燃料载体分开 | `cp_utilities` 的公用工程记录 | 每参考产品的电力 kWh 和热能 MJ | `eu-fdm-bat-2019-2031` |
| `calc_allocation_factor` | 外送共产品 | 分配因子 = 某输出所选且有文件依据的物理或经济指标，除以联合生产全部输出该指标之和 | 输出量和固形物或同期价格记录 | 无量纲负荷份额 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和每个清单交换 | 使用经核验炼乳参考 UUID，并在激活前解析每个非参考 Tiangong 流 UUID；保留产品亚型、组成、包装、地域、技术和期间限定信息。 | Tiangong 精确回读；产品规格；批次和供应商记录 |
| `dq_temporal` | 前景活动数据 | 使用至少连续 12 个代表性月份，除非生产期更短；说明停机、异常批次和外推。 | 带日期的仪表、批次、库存和放行记录 |
| `dq_completeness` | 物料、能源、水、废物、废水和直接排放 | 核对所有纳入过程，并按质量、能量和运行时间报告覆盖率；不得仅因 Tiangong UUID 尚未解析而省略实质流。 | 质量、能量和水平衡；来源登记；未解析身份登记 |
| `dq_measurement` | 前景记录和计算 | 保留足以独立复现的校准、实验室方法、仪表层级、换算因子、分配驱动量和计算工作表。 | 校准证书；实验室 QA；签署的计算评审 |
| `dq_representativeness` | 上游数据集和前景汇总 | 匹配地域、技术、产品状态和参考期；披露每项代理，并对原料乳、糖、包装和能源代理进行敏感性分析。 | 数据集元数据和代理评估 |
| `dq_reasoned_ranges` | 每个 `reasoned_estimate` 范围 | 仅将范围用作暂定 QA 筛查；未经明确情景论证，不得用中点替代前景值，并在出版关键用途前以经评审前景或来源支持证据替换。 | 范围证据评审日志和替换决策 |
| `dq_source_value_limits` | Codex 规格和 BAT 性能信息 | 组成限值、质量因素、命名规定、BAT 相关性能水平和监测频次仅用于身份、适用性、合规背景或数据质量检查；不得将其写入为通用 LCI 数量。 | 对照 `codex-cxs-282-1971`、`codex-cxs-206-1999` 和 `eu-fdm-bat-2019-2031` 的产品规格与来源用途评审 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求恰好一个 1 kg 参考输出，使用 Condensed Milk UUID `5db242cb-3e7b-46fc-89cc-d676dd2a1fd3`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和单位 kg。 |  |
| `validate_product_scope` | 产品身份和组成 | 要求 CPC 3.0 代码 22222，并声明亚型、甜味剂、乳脂、总乳固体和非脂乳固体中乳蛋白；拒绝 CPC 22221、CPC 22229、乳粉和普通液态乳，并要求乳制品术语与所声明产品一致。 | `unsd-cpc-3-0-22222`; `codex-cxs-282-1971`; `codex-cxs-206-1999` |
| `validate_process_coverage` | 前景过程图 | 要求全部三个 process id，并提供证据说明清洗、直接服务的公用工程、损失、废水路线和场址直接排放已纳入或明确证实不适用。 | `eu-fdm-bat-2019-2031` |
| `validate_mass_and_yield` | 过程和总体质量平衡 | 要求实测净输出、投入输出核对和每项实质残差的经评审解释；推理估算范围是警告，不是替代值。 | `mass-balance-identity` |
| `validate_allocation` | 多输出操作 | 要求细分证据或声明分配方法、指标值、总和为一的因子，并在使用经济分配时提供敏感性分析。 | `eu-pef-2021-2279` |
| `validate_data_quality` | 报告期和来源包 | 要求对齐的时间覆盖、校准和实验室证据、上游数据集元数据、代理披露，以及未解析身份或范围证据的明确清单。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `validate_no_double_counting` | 能源、水回收、返工、废物和再生 | 拒绝场址总量与过程分表、燃料燃烧与外购热、回收冷凝水与外购水，或废物处理与再生信用之间的重复计算。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 制造厂门口炼乳生产前景数据集 |
| downstream_use | 完成方法学评审、UUID 解析和代表性上游链接后用作 `secondary_dataset`；`background_dataset` |
| allowed_use | 为所声明炼乳亚型、组成、技术、地域、包装形式和参考期构建 LCA process 和 lifecyclemodel |
| excluded_use | 未进行敏感性分析时，不得用于淡炼乳、乳粉、婴幼儿配方食品、非乳基浓缩饮料、未声明产品亚型，或超出所记录代表性的地域和技术 |
| required_metadata | PCR id 和版本状态；CPC 代码；产品亚型；组成；包装或散装形式；参考 UUID；场址地域；技术；参考期；产能和利用率背景；分配；纳入操作；上游数据集；数据所有者和评审状态 |
| required_quality_disclosure | 覆盖率和核对；校准和实验室证据；时间、地域和技术代表性；代理数据集；分配敏感性；损失和废水路线；未解析 UUID；全部推理估算范围及其替换状态 |
| update_trigger | 产品亚型或组成、乳来源、浓缩技术、能源或水系统、包装形式、分配、废水路线、场址地域、实质产量、适用标准、参考流身份发生变化，或新证据使 QA 校验范围失效 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-22222` | `official_guidance` | 联合国统计司，《产品总分类》（CPC）3.0 版解释性说明，22222 子类 Condensed milk；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-12） | 分类身份及明确纳入和排除项；不用于定量 LCI |
| `codex-cxs-282-1971` | `standard` | Codex Alimentarius，CXS 282-1971《甜炼乳标准》，1999 年修订、2010 年修正；https://www.fao.org/input/download/standards/173/CXS_282e.pdf（检索于 2026-08-12） | 甜炼乳定义、范围、许可原料和配料、产品亚型及组成限定信息；组成数值不是通用 LCI 数量 |
| `codex-cxs-206-1999` | `standard` | Codex Alimentarius，CXS 206-1999《乳制品术语使用通用标准》，1999 年通过、2022 年修正；https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B206-1999%2FCXS_206e.pdf（检索于 2026-08-12） | 乳制品身份、术语和命名披露；不用于定量 LCI |
| `eu-pef-2021-2279` | `official_guidance` | 欧盟委员会 2021 年 12 月 15 日关于使用环境足迹方法的建议（EU）2021/2279，附件 I 和 II；https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng（检索于 2026-08-12） | 功能单位与参考流框架、系统边界披露、公司特定前景数据、数据质量、分配、代理和校验 |
| `eu-fdm-bat-2019-2031` | `official_guidance` | 欧盟委员会 2019 年 11 月 12 日关于食品、饮料和乳品行业 BAT 结论的实施决定（EU）2019/2031；https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj（检索于 2026-08-12） | 水、能源、原料、废水、废气、损失和直接释放的清单与监测；BAT 性能值不是通用 LCI 数量 |
| `mass-balance-identity` | `method_factor` | 对实测前景投入、输出、库存、损失和转移应用质量守恒恒等式；确定性 PCR 计算方法 | 净消耗、参考输出归一化、过程质量平衡和精确参考流检查 |
