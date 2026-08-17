---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.pasta-cooked-stuffed-or-otherwise-prepared-but-not-as-a-complete-dish-couscous-except-a-c3bc62b9
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 熟制、填馅或其他方式加工的意面（非完整菜肴）；蒸粗麦粉（非完整菜肴）

## 1. 范围与适用性

本 PCR 覆盖熟制、填馅、冷冻或其他方式加工的意面、面条和饺类，以及未作为完整菜肴呈现的蒸粗麦粉在工厂内的生产。范围包括与具体路线相关的谷物配料制备、面团或颗粒制备、成形或填馅、蒸煮或其他热处理、使用时的干燥或冷却、使用时的冷冻、当包装属于所声明工厂大门产品时的包装，以及共用清洗和废水作业。

前景边界始于谷物基配料、水、馅料及其他配方投入在制造场址的接收，止于所声明冷藏、冷冻、干燥、常温稳定或其他市场状态的合格产品离开工厂大门。农业生产、谷物碾磨、外购配料与包装的制造、场外公用工程以及场外废物处理通过上游或下游数据集表示，不在前景过程中重复构建。

含意面、面条、饺类或蒸粗麦粉的完整预制菜肴或餐食不在范围内。既未填馅也未进行其他加工的生意面不在范围内。产品形态、谷物种类、填馅状态与组成、蒸煮或干燥状态、保藏路线、温度状态、包装基准以及散装或零售形态必须声明，因为这些事实会实质改变清单。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.pasta-cooked-stuffed-or-otherwise-prepared-but-not-as-a-complete-dish-couscous-except-a-c3bc62b9 |
| classification_refs | CPC 3.0:23721 (exact) |
| covered_products | 熟制、填馅、冷冻或其他方式加工的意面；加工面条和饺类；蒸粗麦粉；以上均作为产品而非完整菜肴销售。 |
| excluded_products | 完整预制菜肴或餐食；未填馅且未以其他方式加工的生意面；作为前景作业的上游谷物种植或碾磨；除非研究范围明确纳入，否则不包括工厂大门后的消费者制备。 |
| representative_product | 符合所声明配方、保藏路线和市场状态的净可食用加工意面或蒸粗麦粉产品。 |
| production_route | 谷物配料与水的接收和制备；混合或造粒；成形及可选填馅；蒸煮或其他热处理；可选干燥、冷却或冷冻；可选包装；清洗及废水处理。 |
| market_state | 工厂大门产品，声明为冷藏、冷冻、干燥、常温稳定或其他保藏状态，采用散装或包装形态，但不作为完整菜肴呈现。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在所声明类别边界内的净可食用加工意面、面条、饺类或蒸粗麦粉产品。 |
| How much | 净产品 1 kg，不含包装质量。 |
| How well | 符合所声明的产品身份、配方、水分或固形物基准、填馅状态、保藏路线、食品安全放行准则和市场状态。 |
| How long or cycle | 所声明报告期内一个已放行生产批次的代表；不赋予消费者使用时长。 |
| reference_flow_link | `prepared_pasta_or_couscous_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 工厂大门处 1 kg 净合格产品，不含包装。 |
| 参考产品流 | Pasta, cooked, stuffed or otherwise prepared (but not as a complete dish), couscous, except as a complete dish `1312d181-2dd0-4af3-b938-c38ed2342c7d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品形态；谷物种类或主要淀粉来源；填馅状态与主要馅料类别；加工路线；蒸煮状态；干燥状态；水分或固形物基准；冷藏、冷冻、干燥、常温稳定或其他市场状态；包装纳入情况与形式；非完整菜肴；地理；报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最后一个范围内调理步骤之后测量已放行净可食用产品，并排除包装质量；在归一化至 1 kg 前保留批次总量。 |
| `material_mass_basis` | 配料、中间品、产品、返工料和废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录使用时湿质量；当水分、固形物或浓度基准影响比较或质量平衡时必须声明；无文件化换算不得混用干湿基准。 |
| `water_mass` | 配料、蒸煮、冷却和清洗用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按用途分别记录水并识别回收或循环水；当体积不能合理按 1 kg/L 等同处理时，体积到质量换算必须使用有记录的密度和温度。 |
| `energy_carrier_units` | 电力、燃料、外购热、蒸汽和制冷 | 载能体特定能量属性 | kWh or MJ | 保留计量单位及低位或高位热值基准；记录每项换算，表征前不得合并电力与热能。 |
| `packaging_separation` | 初级、次级和运输包装 | Mass | kg | 包装在范围内时分别测量每种包装材料；包装质量不得计入 1 kg 参考产品输出。 |
| `couscous_moisture` | 表示为 Codex CXS 202-1995 蒸粗麦粉的产品 | Mass fraction | % | 声明试验方法和湿基水分结果；13.5% 上限仅适用于声明符合 Codex 蒸粗麦粉标准的产品，不得泛化到本 PCR 的其他产品。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收的谷物配料、水、馅料、其他配方材料、加工助剂和包装已到达制造场址大门，并声明供应商身份、质量基准和上游数据集链接。 |
| starting_condition_role | 该起始条件是上游配料或材料数据集与前景食品制造之间可审计的交接点。 |
| product_classification_scope | CPC 3.0:23721 中未作为完整菜肴呈现的加工意面、面条、饺类和蒸粗麦粉。 |
| recursive_input_rule | 已属于本 PCR 类别的外购或转入投入，应作为具有自身上游数据集和声明状态的投入记录；不得在接收过程中递归重建其制造。 |
| upstream_dataset_requirement | 每种外购谷物配料、馅料、其他材料、公用工程和包装投入均需要地理与技术上有代表性的上游数据集或有记录的数据缺口；场外废物处理需要按去向匹配的数据集。 |
| disclosure | 声明产品路线、配方范围、填馅或未填馅状态、保藏与温度状态、包装范围、场址地理、报告期、上游数据集替代、排除作业及所有未解决流身份。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景制造系统 | 纳入从配料接收到所声明工厂大门产品放行之间的全部场内作业，包括分配给产品的共用清洗和废水产生；上游供应和场外处理通过关联数据集建模。 | `eu-jrc-fdm-bref-2019`; `iso-14044-2006` |
| `boundary_category_exclusion` | 产品范围 | 排除完整菜肴和餐食，并排除既未填馅也未以其他方式加工的生意面；混合产品线的每项判断应对照所声明 CPC 23721 范围记录。 | `un-cpc-3-23721` |
| `boundary_route_conditionals` | 条件作业 | 仅在所代表产品实际执行时纳入填馅、干燥、冷却、冷冻和包装，并记录明确的不适用决定，不得默认作业不存在。 | `un-cpc-3-23721`; `eu-jrc-fdm-bref-2019` |
| `boundary_food_safety_utilities` | 产品接触水、蒸汽、冷却和冷链 | 纳入维持所声明卫生和温控所需的公用工程用量及排放或废水后果；可计量时分开非产品接触公用工程，否则披露分配方法。 | `eu-ec-852-2004` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `ingredient_preparation` | 配料接收与制备 | required | 制造产品始终纳入。 | 前景接收、称量、筛分、调质、混合或造粒制备。 | 转入成形的制备混合物 kg |
| `forming_and_filling` | 成形与可选填馅 | required | 成形必需；填馅作业仅适用于填馅产品。 | 前景塑形、挤压、压片、切割、造粒与可选填馅。 | 转入热加工的成形产品 kg |
| `thermal_processing` | 蒸煮、干燥与冷却 | required | 至少声明一项加工或热处理作业；干燥和冷却按路线确定。 | 前景蒸煮、蒸制、焯烫、干燥和受控冷却。 | 合格加工中间品 kg |
| `finishing_and_packaging` | 冷冻、储存与包装 | conditional | 在所声明工厂大门前执行时纳入各项作业。 | 前景保藏、冷藏/冷冻储存、包装与放行。 | 净放行参考产品 kg |
| `cleaning_and_wastewater` | 清洗、卫生与废水处理 | required | 纳入归属于所代表报告期的共用作业。 | 前景卫生支持和场内废水处理。 | 每 kg 净放行产品分配作业量 |

### 过程：配料接收与制备（`ingredient_preparation`）

#### 输入

##### 产品流

###### 谷物基配料（`cereal_ingredients`）

在接收或领用至所代表批次时，分别记录每种面粉、粗粒粉、淀粉、谷物粉或其他谷物来源的主要配料。

- 选定流：谷物基配料
- 流属性/单位：Mass / kg
- 数量规则：按材料和批次实测使用时配料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：
- 数量范围：暂定谷物投入质量平衡 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：5
  - 单位：kg/kg net product
  - 基准：每 1 kg 净放行产品，覆盖湿制、熟制、干燥和填馅路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 配料水和工艺水（`ingredient_process_water`）

记录作为配料加入或用于调质、混合或造粒的饮用水，并与清洗水分开。

- 选定流：饮用工艺水
- 流属性/单位：Mass / kg
- 数量规则：按用途和批次计量或按批次投加的水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_by_use`
- 来源：`eu-ec-852-2004`
- 数量范围：暂定制备用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg net product
  - 基准：每 1 kg 净放行产品，区分保留在产品中的水与排放水之前
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他配方投入与加工助剂（`other_formulation_inputs`）

分别记录盐、蛋、油、微量配料、加工助剂及其他配方材料；不得由通用配方推断其数量。

- 选定流：其他配方材料
- 流属性/单位：Mass / kg
- 数量规则：按材料和批次实测领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：
- 数量范围：暂定其他投入 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：kg/kg net product
  - 基准：每 1 kg 净放行产品，未使用该类投入时可为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入成形的制备混合物（`prepared_mixture`）

根据实测转移记录计算转入成形阶段的混合面团、浆料或造粒中间品湿质量。

- 选定流：制备谷物混合物
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或按期初量加投入减期末量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_balance`
- 来源：

##### 废物流

###### 制备废料与洒落（`preparation_rejects`）

按材料、水分状态和去向记录筛分废料、受污染配料及洒落；仍留在前景系统内的返工料应单独识别。

- 选定流：食品制备废物
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废弃质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_destination`
- 来源：
- 数量范围：暂定制备损耗 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg net product
  - 基准：每 1 kg 净放行产品的废弃制备材料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：成形与可选填馅（`forming_and_filling`）

#### 输入

##### 产品流

###### 制备混合物（`forming_mixture_input`）

记录从前一前景过程接收的制备混合物，不再重复加入上游负荷。

- 选定流：制备谷物混合物
- 流属性/单位：Mass / kg
- 数量规则：与 `prepared_mixture` 核对的实测转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_balance`
- 来源：

###### 馅料配料（`filling_ingredients`）

对于填馅产品，按使用时质量和所声明食品类别记录每种馅料配料；仅对明确的未填馅路线使用零值。

- 选定流：馅料配料
- 流属性/单位：Mass / kg
- 数量规则：按材料和批次实测馅料配料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`un-cpc-3-23721`
- 数量范围：暂定馅料投入 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：kg/kg net product
  - 基准：每 1 kg 净放行产品，覆盖未填馅与填馅路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 成形用电（`forming_electricity`）

根据分表或分配后的产线电表，记录混合、挤压、压片、切割、造粒和填馅设备用电。

- 选定流：供应成形设备的电力
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或有记录的设备时间分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_by_operation`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定成形用电 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kWh/kg net product
  - 基准：每 1 kg 净放行产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成形或填馅中间品（`shaped_intermediate`）

记录转入蒸煮、干燥或其他所声明加工步骤的湿质量。

- 选定流：成形或填馅意面中间品
- 流属性/单位：Mass / kg
- 数量规则：与成形投入、返工和废料核对的实测转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_balance`
- 来源：

##### 废物流

###### 成形废料（`forming_rejects`）

按去向测量修边料、畸形产品和馅料损失；内部返工是中间转移而不是废物输出。

- 选定流：成形食品废物
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废弃质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_destination`
- 来源：
- 数量范围：暂定成形损耗 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg net product
  - 基准：每 1 kg 净放行产品的废弃成形材料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：蒸煮、干燥与冷却（`thermal_processing`）

#### 输入

##### 产品流

###### 成形中间品投入（`thermal_product_input`）

记录从成形过程接收的成形或填馅中间品，并与上游转移核对。

- 选定流：成形或填馅意面中间品
- 流属性/单位：Mass / kg
- 数量规则：与 `shaped_intermediate` 核对的实测转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_balance`
- 来源：

###### 蒸煮和冷却用水（`thermal_process_water`）

按用途分别记录用于蒸煮、产汽、焯烫、淬冷或产品接触冷却的水，并识别循环使用。

- 选定流：饮用工艺水
- 流属性/单位：Mass / kg
- 数量规则：适用时采用计量取水量减去有记录的回收水量，或按批次计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_by_use`
- 来源：`eu-ec-852-2004`
- 数量范围：暂定蒸煮与冷却用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg/kg net product
  - 基准：每 1 kg 净放行产品，覆盖干热、蒸汽、水煮和冷却路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 热能（`thermal_energy`）

分别记录用于蒸煮、蒸制、干燥和热水生成的外购热、蒸汽及每种场内燃料。

- 选定流：热能载体
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录能量基准换算的计量载能体用量，并按作业分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_by_operation`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定热能 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：MJ/kg net product
  - 基准：每 1 kg 净放行产品，覆盖蒸煮与干燥路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 热加工用电（`thermal_electricity`）

记录分配给本过程的泵、输送机、蒸煮器、干燥器、风机和冷却设备用电。

- 选定流：供应热加工的电力
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或有记录的设备时间分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_by_operation`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定热加工用电 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kWh/kg net product
  - 基准：每 1 kg 净放行产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 加工产品中间品（`prepared_product_intermediate`）

在最后一个热加工及所声明冷却或干燥步骤之后、可选冷冻和包装之前测量合格产品。

- 选定流：加工意面或蒸粗麦粉中间品
- 流属性/单位：Mass / kg
- 数量规则：实测合格转移质量并声明水分或固形物基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_output_and_quality`
- 来源：

##### 废物流

###### 热加工废水（`thermal_wastewater`）

按去向测量蒸煮、淬冷和冷却产生的废水，并在可得时保留采样负荷数据。

- 选定流：食品加工废水
- 流属性/单位：Mass / kg
- 数量规则：按去向计量排水或采用有记录的水量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_volume_load`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定热加工废水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg/kg net product
  - 基准：每 1 kg 净放行产品送往场内或场外处理的废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 直接化石二氧化碳（`direct_fossil_co2`）

仅在场内燃料燃烧时纳入本行，并使用适用的已评审因子从实测燃料用量计算二氧化碳；其他直接污染物应作为独立基本流行记录。

- 选定流：化石二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：根据采集的燃料用量及经评审燃料特定排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：
- 数量范围：暂定直接化石 CO2 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg CO2/kg net product
  - 基准：仅指场内直接化石二氧化碳，每 1 kg 净放行产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：冷冻、储存与包装（`finishing_and_packaging`）

#### 输入

##### 产品流

###### 待后处理的加工产品（`finishing_product_input`）

记录从热加工转入的加工产品；跳过的后处理作业必须明确声明。

- 选定流：加工意面或蒸粗麦粉中间品
- 流属性/单位：Mass / kg
- 数量规则：与 `prepared_product_intermediate` 核对的实测转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_balance`
- 来源：

###### 制冷与包装用电（`finishing_electricity`）

当冷冻、冷藏或冷冻储存、输送、封口和包装作业在范围内时，记录其用电。

- 选定流：供应后处理作业的电力
- 流属性/单位：Energy / kWh
- 数量规则：计量用量，或按设备时间和储存时长进行有记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_by_operation`
- 来源：`eu-ec-852-2004`; `eu-jrc-fdm-bref-2019`
- 数量范围：暂定后处理用电 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kWh/kg net product
  - 基准：每 1 kg 净放行产品，声明储存时长，仅在未使用该作业时可为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_materials`）

包装在范围内时，按材料和实际领用质量分别记录初级、次级和运输包装。

- 选定流：包装材料
- 流属性/单位：Mass / kg
- 数量规则：按材料实测包装质量，包括有记录的产线损耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass`
- 来源：
- 数量范围：暂定包装质量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg net product
  - 基准：每 1 kg 净放行产品的包装材料，仅对声明的散装无包装产品可为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 加工意面或蒸粗麦粉输出（`prepared_pasta_or_couscous_output`）

本行是定量参考输出。在最终调理之后、添加包装质量之前记录已放行净可食用质量。

- 选定流：Pasta, cooked, stuffed or otherwise prepared (but not as a complete dish), couscous, except as a complete dish `1312d181-2dd0-4af3-b938-c38ed2342c7d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后恰为 1 kg 净合格产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-23721`

##### 废物流

###### 包装边角料与不合格成品（`finishing_waste`）

按材料、食品接触状态、水分状态和去向分别记录包装边角料及废弃成品。

- 选定流：后处理与包装废物
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向实测废弃质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_destination`
- 来源：
- 数量范围：暂定后处理废物 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg net product
  - 基准：每 1 kg 净放行产品的后处理与包装废物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排放至空气的制冷剂（`refrigerant_loss`）

对于冷藏或冷冻路线，根据充注与维修记录分别计算每种制冷剂损失；仅在没有可归属于产品的制冷设备时省略。

- 选定流：排放至空气的制冷剂
- 流属性/单位：Mass / kg
- 数量规则：计算补充制冷剂或经核实泄漏质量并分配至所代表产量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_loss`
- 来源：
- 数量范围：暂定制冷剂损失 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg net product
  - 基准：每 1 kg 净放行产品的直接制冷剂损失
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：清洗、卫生与废水处理（`cleaning_and_wastewater`）

#### 输入

##### 产品流

###### 清洗与卫生用水（`cleaning_water`）

在可计量时分别记录产品接触与非产品接触清洗水，并记录循环水控制。

- 选定流：清洗水
- 流属性/单位：Mass / kg
- 数量规则：按清洗回路计量，或采用有记录的清洗周期分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_by_use`
- 来源：`eu-ec-852-2004`; `eu-jrc-fdm-bref-2019`
- 数量范围：暂定清洗水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg/kg net product
  - 基准：每 1 kg 净放行产品分配的清洗水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗与卫生剂（`cleaning_agents`）

按使用时产品质量与浓度基准记录每种清洁剂、消毒剂和卫生化学品。

- 选定流：清洗或卫生剂
- 流属性/单位：Mass / kg
- 数量规则：实测领用产品质量，或根据经核实浓度与溶液体积计算投加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_agent_use`
- 来源：`eu-ec-852-2004`
- 数量范围：暂定清洗剂 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg net product
  - 基准：每 1 kg 净放行产品的使用时清洗产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 清洗废水（`cleaning_wastewater`）

记录送往场内或场外处理的废水并保留流量与采样负荷数据，不得扣除已在废水数据集中表示的污染物。

- 选定流：食品加工清洗废水
- 流属性/单位：Mass / kg
- 数量规则：按处理去向计量排水或采用水量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_volume_load`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定清洗废水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg/kg net product
  - 基准：每 1 kg 净放行产品分配的清洗废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 多产品生产线与共用作业 | 首先分离产品路线、时间段、计量表和直接测得的物料平衡，从而在可行时不使用分配而直接归属负荷。 | `iso-14044-2006` |
| `allocation_rework_internal` | 在所代表前景系统内返回的返工料 | 将内部返工料视为中间转移，不得再次赋予上游负荷，也不得将其报告为废物输出。 |  |
| `allocation_shared_operations` | 共用清洗、制冷、储存、压缩空气与公用工程 | 使用有记录的因果物理驱动因素，如计量用量、设备时间、清洗周期、占用储存时间或吞吐量；当其他驱动因素更能表示因果关系时，不得默认按净产品质量分配。 | `iso-14044-2006` |
| `allocation_coproducts` | 离开系统的可销售共产品或回收材料 | 分别报告数量、状态、去向和经济地位；有依据时优先采用物理因果分配，仅在无法支持物理关系时采用经济分配，并披露方法与敏感性。 | `iso-14044-2006`; `iso-14067-2018` |
| `allocation_waste_treatment` | 废物与废水 | 将收集和场内处理保留在前景中；按去向和状态关联场外处理，并披露任何回收或替代信用，不得从清单中静默净扣除。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `ingredient_preparation`; `forming_and_filling` | 谷物、馅料及其他配方投入 | 称量、接收和批次领料记录 | material_id; supplier_lot; product_lot; gross_mass; tare_mass; net_mass; moisture_or_solids_basis; rework_flag | 经校准秤或经核实的接收/领料系统，并与批次配方和库存移动核对 | kg | 每次接收或批次领料 | 至少覆盖所声明代表性报告期及所有纳入产品批次 | 所有代表性生产线和场址 | 按材料和产品批次汇总净质量；仅分配有记录的共用领料 | 秤校准、批次可追溯性、库存核对和异常日志 |
| `cp_water_by_use` | `ingredient_preparation`; `thermal_processing`; `cleaning_and_wastewater` | 配料、工艺、冷却和清洗用水 | 水表、批次投加和水量平衡记录 | meter_id; timestamp; opening_reading; closing_reading; batch_volume; water_use; recycled_volume; density_basis | 优先使用分表；否则使用经核实的批次投加或经核对的场址水量平衡 | kg | 连续或每批次/周期 | 代表性报告期，包括季节或生产活动差异 | 每条代表性生产线、回路和场址 | 按用途汇总；仅扣除有记录且未重新取用的循环量；按放行产品归一化 | 水表校准、适用时的饮用水证据及平衡残差复核 |
| `cp_energy_by_operation` | `forming_and_filling`; `thermal_processing`; `finishing_and_packaging` | 电力、热、蒸汽、燃料和制冷能 | 电表、账单及设备运行记录 | carrier; meter_id; opening_reading; closing_reading; equipment_id; operating_time; load; calorific_value_basis; storage_duration | 按作业分表；否则使用因果设备记录从经核实总表分配 | kWh; MJ | 连续、批次或账单周期 | 完整报告期，包含生产停机和储存时间 | 每条代表性生产线和共用公用工程系统 | 按载能体和作业汇总；记录换算与分配驱动；按放行产品归一化 | 电表/账单核对、换算工作表和分配敏感性 |
| `cp_intermediate_balance` | `ingredient_preparation`; `forming_and_filling`; `thermal_processing`; `finishing_and_packaging` | 中间转移与质量平衡 | 批次转移和库存记录 | product_lot; opening_stock; inputs; transfer_mass; closing_stock; rework; rejects; moisture_basis | 经校准转移秤，或按期初量加投入减期末量计算 | kg | 每批次或批号 | 报告期内所有纳入产品批次 | 每个代表性过程交接点 | 核对匹配的上游输出与下游输入；调查未匹配转移 | 批次谱系、秤校准及签字核对记录 |
| `cp_waste_mass_destination` | `ingredient_preparation`; `forming_and_filling`; `finishing_and_packaging` | 食品废料、洒落、不合格产品和包装边角料 | 废物秤、容器及运输记录 | waste_type; source_process; gross_mass; tare_mass; moisture_basis; rework_status; destination; ticket_id | 在产生点或去向称量；区分内部返工与跨边界废物 | kg | 每批次或运输批 | 完整报告期 | 所有代表性生产线和废物去向 | 按类型、状态和去向汇总净废物；不得与投入净扣 | 秤记录、转运凭证、去向证据和返工核对 |
| `cp_reference_output_and_quality` | `thermal_processing`; `finishing_and_packaging` | 合格产品输出与放行状态 | 生产与质量放行记录 | product_id; lot_id; net_mass; moisture_or_solids; filling_status; route; temperature_state; packaging_state; release_result | 经校准产品秤，关联批次放行和所声明试验方法 | kg; %; °C where applicable | 每个放行批次 | 报告期内所有纳入批次 | 所有代表性产品、生产线和场址 | 仅汇总已放行合格净可食用质量；排除包装并单独记录被拒批次 | 秤校准、产品规范、实验室或过程控制结果及放行授权 |
| `cp_wastewater_volume_load` | `thermal_processing`; `cleaning_and_wastewater` | 按处理去向的废水 | 流量计、水量平衡和采样记录 | discharge_point; flow; sampling_time; parameter; concentration; treatment_route; sludge_or_residue | 根据场址监测计划进行流量计量和代表性采样 | kg; m3; mg/L or site reporting unit | 可行时连续流量计量并按计划代表性采样 | 完整报告期，包括清洗峰值 | 每个纳入排放点与处理路线 | 按去向汇总流量；仅从时间匹配的流量和浓度计算负荷；避免重复基本流报告 | 流量计校准、样品监管链、实验室方法和采样代表性复核 |
| `cp_direct_emissions` | `thermal_processing` | 场内燃烧排放 | 燃料表和排放因子记录 | fuel_type; fuel_amount; energy_basis; factor_id; factor_value; pollutant; control_state | 使用实测燃料量和经评审适用因子计算各污染物，或采用直接监测 | kg; MJ | 报告间隔或监测事件 | 完整报告期 | 所有可归属场内燃烧装置 | 按污染物和装置汇总；使用有记录的因果驱动分配 | 燃料核对、因子版本与单位检查，以及使用监测时的 QA |
| `cp_packaging_mass` | `finishing_and_packaging` | 按材料的包装 | 包装领用与边角料记录 | packaging_id; material; issued_mass; returned_mass; scrap_mass; packed_units; product_lot | 经校准秤，或通过定期称量核实的供应商单件质量 | kg | 每批次或包装活动 | 完整报告期 | 所有纳入包装形式 | 领用减退回质量，与包装单元及边角料核对；与产品质量分别归一化 | 供应商规范、复称结果和包装平衡 |
| `cp_refrigerant_loss` | `finishing_and_packaging` | 排放至空气的制冷剂 | 充注、补充、回收和维修记录 | refrigerant_id; opening_charge; added_mass; recovered_mass; closing_charge; equipment_id; operating_period | 每套制冷系统的经核实质量平衡 | kg | 每次维修事件及年度/报告期结束 | 完整报告期，包括泄漏与维护 | 所有可归属制冷设备 | 按制冷剂计算损失；共用系统按有记录的冷量或储存驱动分配 | 维修证明、钢瓶称量和充注核对 |
| `cp_cleaning_agent_use` | `cleaning_and_wastewater` | 清洗与卫生化学品 | 领用、投加与浓度记录 | chemical_id; product_mass; solution_volume; concentration; circuit; cleaning_cycle | 计量投加，或与清洗计划核对的经核实领用质量 | kg | 每个清洗周期或领用 | 完整报告期 | 所有代表性清洗回路 | 按化学品汇总使用时产品质量；不得混淆配制产品质量与活性成分 | 投加器校准、安全/规范表和库存核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 每个前景清单行 | 归一化数量 = 报告期数量 / 报告期净放行参考产品质量 | 未归一化行总量；来自 `cp_reference_output_and_quality` 的净放行产品质量 | 每 1 kg 净放行产品的数量 |  |
| `calc_intermediate_balance` | 每个过程交接点 | 计算转移量 = 期初存量 + 实测投入 - 期末存量 - 实测废料 - 单独记录的损失；并与下游接收量比较 | 来自 `cp_intermediate_balance` 的匹配批次质量字段 | 经核对的中间转移量与残差 |  |
| `calc_water_balance` | 用水与废水 | 取水量 = 产品保留水 + 蒸发 + 废水 + 其他实测输出 + 期末储水 - 期初储水；报告残差而不得强制闭合 | 用水、产品水分、废水和储水记录 | 水量平衡残差及按用途归一化用水 |  |
| `calc_direct_emission` | 每种场内燃料和污染物 | 直接排放 = 所声明基准上的实测燃料量 × 经评审适用排放因子；无来源与单位评审不得插入因子 | 燃料记录；因子 ID、数值与单位 | 按基本流的污染物质量 |  |
| `calc_refrigerant_loss` | 每套制冷系统 | 制冷剂损失 = 期初充注量 + 补充量 - 回收量 - 期末充注量，仅按有记录转移调整 | 充注、补充、回收与期末记录 | 按物质的制冷剂损失 |  |
| `calc_shared_operation_allocation` | 共用公用工程与支持作业 | 分配量 = 实测共用总量 × 有记录的产品特定因果驱动 / 所有产品相同驱动之和 | 共用总量与所选物理驱动 | 产品归属共用量及分配因子 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品与参考流 | 证明每个代表性产品属于 CPC 23721 且并非完整菜肴；保留配方、填馅、路线、状态和包装限定信息。 | 产品规范、标签、批次记录及使用 `un-cpc-3-23721` 的 CPC 范围复核 |
| `dq_temporal` | 所有前景数据 | 使用能代表产品组合、清洗、储存以及季节或活动差异的时期；披露停机、异常批次和替代。 | 带日期的源记录、生产计划和代表性声明 |
| `dq_completeness` | 过程图与清单 | 核对每个必需过程和每个适用条件过程；量化材料、水、能源、废物和直接排放缺口，不得将缺少记录当作零。 | 完整性矩阵、质量/水量/能量核对和缺口日志 |
| `dq_measurement` | 实测行 | 使用经校准或核实的仪器，并在归一化前保留原始总量；分别记录估算、换算和分配。 | 校准证书、仪表检查、账单、批次记录和计算工作簿 |
| `dq_food_safety_state` | 产品接触水、热处理、冷却和冷链 | 保留证据证明所声明作业与市场状态在适用卫生、HACCP 和温控条件下生产；本 PCR 不替代食品安全合规。 | HACCP 记录、饮用水证据、过程控制记录和 `eu-ec-852-2004` |
| `dq_provisional_ranges` | 每个 `reasoned_estimate` 范围 | 该范围仅作为候选阶段 QA 筛选；发布前以代表性前景分布或经评审来源证据替换，并记录评审者接受。 | 范围替换日志、前景统计或经评审来源记录 |
| `dq_uuid_resolution` | 非参考库存流 | 发布前解析并独立核验 Tiangong UUID、流属性和单位组；在此之前保留语义候选，不得虚构 UUID。 | Tiangong 回读记录与评审者签字 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考输出必须使用 Tiangong 产品流 UUID `1312d181-2dd0-4af3-b938-c38ed2342c7d`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`、kg，以及恰好 1 kg 不含包装的净产品。 | `un-cpc-3-23721` |
| `validate_category_and_qualifiers` | 数据集身份 | 拒绝表示完整菜肴、遗漏非完整菜肴限定，或缺少产品形态、主要谷物、填馅状态、加工与保藏路线、市场状态、包装范围、地理或报告期的数据集。 | `un-cpc-3-23721` |
| `validate_process_coverage` | 过程清单 | 要求全部必需 process id 及每项适用条件作业；填馅、干燥、冷却、冷冻或包装不适用时必须明确记录。 | `eu-jrc-fdm-bref-2019` |
| `validate_mass_balance` | 材料清单 | 在一致水分基准上核对谷物、馅料、其他材料和水投入与放行产品、中间品、返工料、废物、废水及所披露损失；使用数据集经评审阈值标记未解释残差。 | `iso-14044-2006` |
| `validate_no_double_count` | 中间品、返工料、废水与排放 | 拒绝内部中间品或返工料的重复上游负荷、取水与废水数量重复，以及污染物同时在废水处理数据集和直接基本流排放中重复报告。 | `iso-14044-2006` |
| `validate_couscous_claim` | 声明符合 Codex 的蒸粗麦粉路线 | 数据集声明符合 Codex CXS 202-1995 时，要求硬粒小麦身份或明确限定的替代谷物身份、饮用水、蒸煮与干燥路线、所声明试验方法及不超过 13.5% 的水分；本规则不得用于其他产品。 | `codex-cxs-202-1995` |
| `validate_food_safety_records` | 产品接触水、蒸汽、冷却和冷链 | 要求适用卫生/HACCP 证据；无主管机构支持的适用性证据时，不得将非饮用水或不安全循环水表示为产品接触水。 | `eu-ec-852-2004` |
| `validate_provisional_estimates` | 推理估算范围 | 候选 QA 校验范围不得解释为实测值或发布默认值；发布评审必须替换每项暂定范围，或以文件化理由明确接受。 |  |
| `validate_unresolved_identities` | 库存流身份 | 实施清单所需的任何非参考 UUID 未解决或未核验时，发布就绪检查必须失败；绝不得仅从名称推断 UUID。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 未作为完整菜肴呈现的加工意面、面条、饺类或蒸粗麦粉前景制造数据包。 |
| downstream_use | `secondary_dataset`; `background_dataset`; 经评审后的下游 `process` 与 `lifecyclemodel` 投影。 |
| allowed_use | 当所声明配方、路线、温度状态、地理、报告期、包装范围和数据质量具有代表性时，用于产品特定工厂大门建模。 |
| excluded_use | 完整菜肴或餐食；未加工生的未填馅意面；在实质不同的填馅、干燥、冷藏、冷冻或常温稳定路线间进行无限定替代；食品安全认证；将暂定 QA 范围作为实测默认值。 |
| required_metadata | canonical PCR id 与版本；CPC 映射语境；参考 UUID 与数量；产品和谷物身份；填馅与配方类别；加工与保藏路线；水分或固形物基准；市场与包装状态；地理；场址与技术；报告期；分配方法；上游数据集；未解决身份。 |
| required_quality_disclosure | 前景覆盖；仪表与秤质量；采样与计算方法；质量、水量和能量残差；条件过程决定；分配驱动；数据缺口；暂定范围替换；废水与废物去向；制冷剂与直接排放处理。 |
| update_trigger | 配方、馅料类别、谷物来源、过程技术、蒸煮/干燥/冷冻路线、包装、场址、能源或水系统、废水处理、分配方法、数据时效或来源/UUID 评审发生会实质改变代表性的变化。 |

## 11. 数据源

| 来源 ID | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-23721` | official_guidance | 联合国统计司，《CPC 3.0 版解释性说明草案》，子类 23721，https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2024_2nd/Session7_Bk2_CPC3_Exp_Notes_1Nov2024.pdf（检索于 2026-08-11） | 产品范围、纳入的加工意面/面条/饺类/蒸粗麦粉形态、完整菜肴排除及分类身份。 |
| `codex-cxs-202-1995` | standard | Codex Alimentarius，CXS 202-1995《蒸粗麦粉标准》，https://www.fao.org/input/download/standards/65/CXS_202e.pdf（检索于 2026-08-11） | 蒸粗麦粉配料与过程身份、饮用水基准、蒸煮与干燥、水分限值、卫生、包装及标签限定信息。 |
| `eu-ec-852-2004` | official_guidance | Regulation (EC) No 852/2004 on the hygiene of foodstuffs，合并文本，https://eur-lex.europa.eu/eli/reg/2004/852（检索于 2026-08-11） | HACCP 与卫生控制、饮用/循环水和产品接触蒸汽、热处理冷却及冷链证据。 |
| `eu-jrc-fdm-bref-2019` | official_guidance | 欧盟委员会联合研究中心，《食品、饮料和乳品行业最佳可行技术参考文件》，2019，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/food-drink-and-milk-industries（检索于 2026-08-11） | 食品制造过程范围、运行资源与排放清单、清洗、废水及监测覆盖。 |
| `iso-14044-2006` | standard | ISO 14044:2006，Environmental management — Life cycle assessment — Requirements and guidelines，https://www.iso.org/standard/38498.html（检索于 2026-08-11） | LCI 目标与范围、清单一致性、分配、报告、评审及数据质量框架。 |
| `iso-14067-2018` | standard | ISO 14067:2018，Greenhouse gases — Carbon footprint of products — Requirements and guidelines for quantification，https://www.iso.org/standard/71206.html（检索于 2026-08-11） | 与 ISO 14040/14044 一致的产品碳足迹量化和报告。 |
