---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.potatoes-otherwise-prepared-or-preserved
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 以其他方式加工或保藏的马铃薯

## 1. 范围与适用性

本 PCR 适用于通过醋或醋酸保藏、单纯冷冻、单纯水煮或蒸制以及干燥以外的方式加工或保藏的马铃薯成品。覆盖产品包括炸薯条、薯片或薯脆片、马铃薯泥制品、经油脂预烹制的马铃薯、烘烤马铃薯制品、马铃薯沙拉、马铃薯丸子（kloesse）、瑞士薯饼（roesti）等。产品可以是冷冻或非冷冻状态。

前景边界从马铃薯、配料、包装和公用工程投入在制造设施接收开始，到声明市场状态下的净成品在工厂门口放行为止。边界包括实际的原料准备、产品转化、可选速冻及冷藏、包装、清洗和卫生作业、场内废物处理、废水产生和直接排放。购入投入的上游生产由链接的背景数据集表示。配送、零售、消费者烹饪或复热以及终端处置不属于该前景数据包，除非下游研究明确扩展边界。

该宽泛类别包含方法学上差异显著的配方、水分状态、切型、烹调技术以及冷冻或非冷冻路线。因此，合规数据包必须声明产品形态和路线限定信息，并使用场址及产品特定的前景记录，不得以类别平均配方替代。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.potatoes-otherwise-prepared-or-preserved |
| classification_refs | CPC 3.0：21394，以其他方式加工或保藏的马铃薯 |
| covered_products | 炸薯条；薯片或薯脆片；马铃薯泥制品；经油脂预烹制的马铃薯；烘烤马铃薯制品；马铃薯沙拉；马铃薯丸子（kloesse）；瑞士薯饼（roesti）；同一语义边界内的其他马铃薯成品；冷冻和非冷冻产品形态 |
| excluded_products | 生鲜马铃薯；生鲜冷冻马铃薯；仅经水煮或蒸制后冷冻的马铃薯；经醋或醋酸保藏的马铃薯；干燥马铃薯；淀粉以及归入其他产品类别的制品 |
| representative_product | 制造工厂门口的净马铃薯成品，并声明产品形态、配方类别、烹调或保藏路线、包装状态以及冷冻或非冷冻状态 |
| production_route | 马铃薯接收和准备；路线特定的尺寸减小、配料、烹煮、油炸、烘烤、制泥、混合或其他保藏；可选速冻及冷藏；包装和工厂门口放行 |
| market_state | 已制造成品，按声明为包装或散装、冷冻或非冷冻状态，在工厂门口交付 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供具有声明配方、物理形态、包装状态以及冷冻或非冷冻市场状态的加工或保藏马铃薯成品 |
| How much | 1 kg 净成品 |
| How well | 符合声明的产品规范和合格放行准则；对于速冻炸薯条，适用相关 Codex 身份、组成、质量和温度准则 |
| How long or cycle | 一个生产批次直至工厂门口放行；声明的货架期属于元数据，不作为本工厂门口前景数据包中的使用持续期服务 |
| reference_flow_link | 参考流是在工厂门口放行的可销售成品净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 马铃薯，以其他方式加工或腌制 `b158bec4-e459-437d-8106-88d2f3d92c8a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品形态；配方或配料类别；烹调或保藏路线；冷冻或非冷冻状态；包装形式和净含量；生产地域；技术；分配状态；工厂门口放行条件 |

构建前景数据包时，`必需限定信息` 中的每一项都必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告工厂门口放行的恰好 1 kg 可销售成品净质量；托盘和运输包装不计入，除非它们属于声明销售单元。 |
| `net_product_mass` | 产品得率和参考归一化 | Mass | kg | 在最终加工后、工厂门口放行前测量产品净质量；返工品、不合格品、样品和损失分别记录。 |
| `batch_to_reference_conversion` | 所有前景输入和输出 | 数量对应属性 | 数量对应 SI 单位 | 按“批次记录量 / 批次可销售成品净质量（kg）”归一化，并保留原始记录和换算因子。 |
| `frozen_temperature_condition` | 速冻产品 | Temperature | degree Celsius | 声明市场状态为速冻时，记录完成速冻后的热中心温度以及贮存或发运温度；热稳定后产品须达到 -18 摄氏度或更低，仅允许采用有记录的主管机关容差。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 马铃薯、其他配料、加工助剂、包装材料和公用工程投入在制造设施门口接收，并声明每项投入的数量、状态、供应地理范围和上游数据集引用 |
| starting_condition_role | 前景制造投入门 |
| product_classification_scope | 语义上由 CPC 3.0 代码 21394 覆盖的成品；分类仅为范围背景，不能替代产品形态和路线声明 |
| recursive_input_rule | 若购入的半成品投入本身属于本 PCR 类别，则仅将其记录一次为同类产品投入，要求供应商门口数据集覆盖其上游生产，披露其已完成加工状态，并且不在接收前景过程中重复构建这些上游阶段 |
| upstream_dataset_requirement | 为马铃薯、配料、加工助剂、能源载体、作为产品流建模的供水、包装和同类别半成品投入链接具有代表性的上游数据集；披露代理、地理、技术、时间范围和排除的数据缺口 |
| disclosure | 声明产品形态、配方类别、实际单元操作、冷冻状态、包装状态、工厂位置、参考期、分配方法、截断、返工、共产品、废物、废水处理路线、直接排放以及所有偏离本边界的情况 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | 前景数据包 | 包括接收和准备、路线特定转化、可选速冻及冷藏、包装、清洗和卫生、场内废物及废水处理以及直接排放，直至产品在工厂门口放行。配送、零售、使用和终端处置不属于本前景数据包，除非下游研究明确扩展边界。 | `eu-pef-2021-2279` |
| `boundary_complete_inventory` | 前景过程 | 记录所有已知输入和输出，包括产品、共产品、水、能源、配料、包装、废物、废水以及向空气、水体和土壤的排放。识别每项共产品、副产品、返工流和废物流。 | `eu-pef-2021-2279` |
| `boundary_route_declaration` | 产品特定路线 | 仅纳入实际使用的单元操作，但必须声明分选、清洗、去皮、切分、漂烫、烹煮、油炸、烘烤、制泥、混合、冷却、速冻和贮存的处置，使省略与不适用可区分。 | `codex-cxs-114-1981`; `codex-cxc-8-1976` |
| `boundary_frozen_chain` | 速冻产品 | 包括速冻和场内冷藏、用电、适用时的制冷剂补充和泄漏、温度监测以及直至工厂门口发运的产品损失；下游冷藏运输不在本数据包内，但下游模型须链接该阶段。 | `codex-cxc-8-1976` |
| `boundary_cutoff` | 任何拟排除项 | 避免截断。若下游 PEF 合规研究采用截断，须使用筛选证据，使累计排除的材料、能源和环境显著性处于适用的 3% 规则内，并明确论证每项排除；前景数据包本身须保留已知物质流。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receiving_and_preparation` | 原料接收和马铃薯准备 | required | 设施内加工马铃薯时始终纳入；若同类别半成品投入绕过某项操作，声明绕过情况和供应商数据集 | 前景接收、分选、清洗、去皮和尺寸减小准备 | kg 马铃薯准备中间产品 |
| `product_transformation` | 产品特定转化 | required | 纳入声明产品路线实际使用的配料和保藏操作 | 前景烹煮、油炸、烘烤、制泥、混合、冷却或其他转化 | kg 可选速冻和最终包装前的转化产品 |
| `quick_freezing_and_cold_storage` | 速冻和场内冷藏 | conditional | 声明产品为速冻产品或工厂门口放行前冷冻贮存时纳入 | 前景速冻和冷冻贮存 | kg 送往最终包装或发运的冷冻产品 |
| `packaging_and_release` | 包装和工厂门口放行 | required | 始终纳入；声明实际使用的散装、初级、次级和可重复使用包装 | 前景包装、最终质量放行和参考流输出 | 1 kg 可销售成品净质量 |

### 过程：原料接收和马铃薯准备（`receiving_and_preparation`）

#### 输入

##### 产品流

###### 接收的马铃薯或同类别半成品马铃薯投入（`received_potato_input`）

记录进入准备过程的马铃薯或已披露同类别半成品马铃薯物料的实测质量。保留供应商、批次、来源、贮存状态和上游数据集身份。

- 选定流：Raw potatoes 或声明的同类别半成品马铃薯投入；发布前解析产品特定的 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：按批次称量接收可用量和拒收量，并将接受投入归一化到净成品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`unstats-cpc-3-0`
- 数量范围：暂定类别范围的接收马铃薯筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：5
  - 单位：kg
  - 基准：每 1 kg 可销售成品净质量，覆盖高水分配方产品到低水分油炸产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 准备和卫生用水（`preparation_water`）

记录清洗、去皮、转移和卫生作业中跨越准备边界的计量用水或可合理分配用水。内部循环水与新鲜补水分别记录。

- 选定流：Process water；发布前解析场址适用的 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：按准备产线计量新鲜水，仅在无法取得产线级细分时进行分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定类别范围的准备用水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 可销售成品净质量的新鲜水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 马铃薯准备中间产品（`prepared_potato_intermediate`）

记录实际适用的分选、清洗、去皮和切分操作后转入声明转化路线的实测质量。

- 选定流：Prepared potato intermediate 内部产品流
- 流属性/单位：Mass / kg
- 数量规则：转移至 `product_transformation` 的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 马铃薯准备中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass`
- 来源：`codex-cxs-114-1981`; `codex-cxc-8-1976`

##### 废物流

###### 分选、薯皮、修整和准备残余物（`preparation_residues`）

按实测质量和去向记录残余物。仅当某物料为有意生产、经质量控制、具有记录的有益用途和经济价值并离开系统时，才归为共产品；否则记录为废物。

- 选定流：Potato preparation residues；发布前按实际去向解析废物或共产品 UUID
- 流属性/单位：Mass / kg
- 数量规则：按残余物类别和目的地计量外送质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定准备残余物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：4
  - 单位：kg
  - 基准：每 1 kg 可销售成品净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 准备废水（`preparation_wastewater`）

记录送往内部处理、下水道或外部处理的废水，扣除内部循环水；保留实测数量和目的地。

- 选定流：Wastewater；发布前解析目的地特定的 Tiangong 废物流
- 流属性/单位：Mass / kg
- 数量规则：计量排放量，或根据采集的补水、产品带水、蒸发和循环记录进行水量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定准备废水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 可销售成品净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：产品特定转化（`product_transformation`）

#### 输入

##### 产品流

###### 马铃薯准备中间产品（`transformation_potato_input`）

记录从准备过程转移的内部质量，并与前一过程输出核对一致。

- 选定流：Prepared potato intermediate 内部产品流
- 流属性/单位：Mass / kg
- 数量规则：来自 `receiving_and_preparation` 的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转化产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass`
- 来源：`codex-cxs-114-1981`; `codex-cxc-8-1976`

###### 配料、食用油和加工助剂（`recipe_inputs`）

分别记录每项配料和加工助剂，包括实际使用的食用油脂、盐、糖类、调味料、乳制品或其他配方配料以及加工助剂。完成数据集不得将本汇总卡作为单一合并交换。

- 选定流：产品特定配料流；发布前解析每项 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：实际批次领用量减去有记录的退库量，并按配料分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`codex-cxs-114-1981`; `eu-pef-2021-2279`
- 数量范围：暂定合并配方投入筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.5
  - 单位：kg
  - 基准：每 1 kg 可销售成品净质量的非马铃薯配方投入合计；完成数据集须拆分各配料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 转化用电（`transformation_electricity`）

记录路线特定转化设备和产线辅助设备的计量电力，共用负荷应透明细分或分配。

- 选定流：适合场址和电压等级的 Electricity supply；发布前解析 Tiangong UUID
- 流属性/单位：Energy / kWh
- 数量规则：按产线计量，或使用有记录的设备运行时间和功率数据分配共用计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定转化用电筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：5
  - 单位：kWh
  - 基准：每 1 kg 可销售成品净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 转化用热能和燃料（`transformation_thermal_energy`）

记录漂烫、烹煮、油炸、烘烤、覆盖路线中附带的干燥以及卫生作业所用的蒸汽、热水、直接燃料或其他热能载体；分别记录载体身份和单位。

- 选定流：路线特定的 fuel、steam 或 heat supply；发布前解析每项 Tiangong UUID
- 流属性/单位：Energy / MJ
- 数量规则：测量燃料或供热，并使用有记录的低位热值或计量供热量换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定转化热能筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：MJ
  - 基准：每 1 kg 可销售成品净质量的交付热能
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 可选速冻和最终包装前的转化马铃薯产品（`transformed_product`）

记录实际烹煮、油炸、烘烤、制泥、混合、冷却或其他保藏路线后的可销售和不可销售产出实测量。

- 选定流：Transformed potato product 内部产品流
- 流属性/单位：Mass / kg
- 数量规则：转移至可选速冻或最终包装的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转化产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass`
- 来源：`codex-cxs-114-1981`; `codex-cxc-8-1976`

##### 废物流

###### 转化残余物和不合格产品（`transformation_waste`）

按组成和目的地分别记录废油、碎屑、过滤残余物、不合格产品和其他路线特定废物；内部返工产品须与废物分开记录。

- 选定流：路线特定的 transformation waste；发布前按物料和目的地解析 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：按废物类别和目的地计量外送质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定转化废物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 可销售成品净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 转化过程直接排放（`direct_transformation_emissions`）

使用测量值或设施活动数据和有记录的因子，按污染物分别记录场内燃烧、油炸排气或其他直接排放点的排放。不得将不同基本流汇总为一个交换。

- 选定流：污染物特定的 elementary flows；发布前解析每项 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：每种污染物和环境介质采用直接测量，或“场址活动数据 x 有记录的排放因子”
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-pef-2021-2279`

### 过程：速冻和场内冷藏（`quick_freezing_and_cold_storage`）

#### 输入

##### 产品流

###### 进入速冻的产品（`freezing_product_input`）

记录进入速冻设备的转化产品实测质量和入口温度。

- 选定流：Transformed potato product 内部产品流
- 流属性/单位：Mass / kg
- 数量规则：进入速冻过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 冷冻产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_chain_records`
- 来源：`codex-cxc-8-1976`

###### 速冻和冷藏用电（`frozen_chain_electricity`）

记录速冻设备和直至工厂门口放行的场内冷藏用电，包括除霜和辅助负荷。

- 选定流：适合场址和电压等级的 Electricity supply；发布前解析 Tiangong UUID
- 流属性/单位：Energy / kWh
- 数量规则：计量速冻和冷库用电，按有记录的产品质量和停留时间分配共用冷藏负荷
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售冷冻产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`codex-cxc-8-1976`; `eu-pef-2021-2279`
- 数量范围：暂定冷冻链用电筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：3
  - 单位：kWh
  - 基准：每 1 kg 可销售冷冻产品直至工厂门口放行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 速冻马铃薯产品（`quick_frozen_product`）

记录输出质量、热稳定后的热中心温度、冷库停留时间和发运温度。

- 选定流：Quick-frozen potato product 内部产品流
- 流属性/单位：Mass / kg
- 数量规则：转移至最终包装或发运的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 速冻产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_chain_records`
- 来源：`codex-cxs-114-1981`; `codex-cxc-8-1976`

##### 废物流

##### 基本流

###### 制冷剂释放（`refrigerant_releases`）

使用经核验的补充记录和存量核算，记录速冻和冷藏系统排放的每种制冷剂；没有记录时不得假定泄漏为零。

- 选定流：制冷剂特定的 emission to air；发布前解析每项 Tiangong 基本流 UUID
- 流属性/单位：Mass / kg
- 数量规则：根据期初和期末存量、采购、充注、回收及设备维护记录计算制冷剂损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售冷冻产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-pef-2021-2279`

### 过程：包装和工厂门口放行（`packaging_and_release`）

#### 输入

##### 产品流

###### 进入最终包装的产品（`packaging_product_input`）

记录进入最终包装的实测质量，并识别其来自非冷冻转化过程还是速冻贮存过程。

- 选定流：Transformed or quick-frozen potato product 内部产品流
- 流属性/单位：Mass / kg
- 数量规则：进入最终包装的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass`
- 来源：`codex-cxs-114-1981`

###### 初级、次级和散装包装（`packaging_materials`）

按材料、形式、净质量、经核验的再生含量声明以及适用时的重复使用次数，分别记录每项包装材料。仅当运输托盘不属于声明销售单元时方可排除，并披露该排除。

- 选定流：材料特定的 packaging product flows；发布前解析每项 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：使用经采购、库存变化和包装单元数量核验的包装物料清单
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-cxs-114-1981`; `eu-pef-2021-2279`
- 数量范围：暂定包装质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg
  - 基准：每 1 kg 可销售成品净质量的包装
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 工厂门口净成品（`reference_product_output`）

本流为定量参考输出。记录恰好 1 kg 可销售成品净质量，并声明产品形态、路线、包装状态以及冷冻或非冷冻放行条件。

- 选定流：马铃薯，以其他方式加工或腌制 `b158bec4-e459-437d-8106-88d2f3d92c8a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 可销售成品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`unstats-cpc-3-0`

##### 废物流

###### 包装废料和包装后拒收产品（`packaging_scrap`）

按材料和目的地分别记录包装废料和包装后拒收产品；返回过程的产品属于返工而非废物。

- 选定流：材料特定的 packaging waste 和 rejected product flows；发布前解析 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：按材料和目的地计量外送质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定包装废料筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg
  - 基准：每 1 kg 可销售成品净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 共用准备、转化、速冻、贮存、包装和公用工程系统 | 首先通过分表计量、独立批次记录和过程细分避免分配。只要能够细分，就仅采集可直接归属于声明产品的操作清单。 | `eu-pef-2021-2279` |
| `allocation_physical` | 无法避免的多功能过程 | 若过程细分或系统扩展不可行，采用反映因果关系且有记录的物理关系，例如实测加工时间、交付热量、制冷负荷或其他经核验驱动因子。质量分配本身不当然代表因果关系。 | `eu-pef-2021-2279` |
| `allocation_other_relationship` | 不存在可辩护物理关系的多功能性 | 只有在记录过程细分、系统扩展和物理分配不可行的原因后，才采用经济关系或其他关系；保留价格、参考期、货币和敏感性证据。 | `eu-pef-2021-2279` |
| `allocation_residue_status` | 马铃薯残余物、废油、返工和不合格产品 | 根据实际去向和经济状态区分内部返工、可销售共产品、可回收物料和废物。不得在此前景清单内计入避免生产信用；任何下游替代或系统扩展须作为单独透明情景。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_inputs` | `receiving_and_preparation`; `product_transformation` | 马铃薯、配料、油脂、加工助剂 | 地磅、秤、批次领料、供应商批次、库存台账 | 物料身份；供应商；批次；来源；期初库存；接收量；批次领用；退库；期末库存；实测质量 | 经校准秤具及库存核对 | kg | 每批来料和生产批次；每月核对 | 覆盖正常产品组合的声明代表性生产期 | 数据集所含全部设施和产线 | 按物料汇总净消耗质量并除以可销售净产出 | 校准证书；供应商记录；库存核对；缺失数据日志 |
| `cp_water_and_wastewater` | `receiving_and_preparation`; `product_transformation` | 新鲜水和废水 | 流量计和水量平衡记录 | 仪表 id；期初和期末读数；补水；循环；排放；蒸发估算；产品带水；处理目的地 | 优先使用产线流量计；否则采用有记录的设施平衡和因果分配 | kg 或 m3，并进行密度换算 | 连续或每班读数；每月核对 | 声明代表性生产期 | 所有纳入的准备、转化和卫生操作 | 核对投入、重复使用、排放、蒸发和产品带水；归一化到参考输出 | 仪表校准；平衡闭合；排放账单或处理日志 |
| `cp_energy_records` | `product_transformation`; `quick_freezing_and_cold_storage`; `packaging_and_release` | 电力、燃料、蒸汽和热 | 公用工程仪表、账单、设备运行时间 | 载体；仪表 id；读数；燃料数量；热值；蒸汽或热量；运行时间；产品质量；贮存停留时间 | 优先分表计量；否则使用经核验运行时间或制冷负荷进行工程分配 | kWh、MJ 或经换算的载体单位 | 连续或批次读数；每月核对 | 声明代表性生产期，适用时覆盖季节性冷藏条件 | 所有纳入设备和共用公用工程 | 扣除非生产负荷；细分或使用有记录的因果驱动因子；归一化到参考输出 | 仪表校准；账单；运行日志；换算因子来源 |
| `cp_product_mass` | 所有过程 | 内部转移、可销售产出、返工和损失 | 经校准秤具和生产台账 | 批次 id；产品形态；投入质量；转移质量；可销售产出；返工；样品；不合格质量 | 称量每次转移或核对经校准的连续质量流测量 | kg | 每批 | 完整声明生产期 | 所有纳入产品线 | 核对连续过程输出并归一化为恰好 1 kg 可销售净产出 | 秤具校准；批次质量平衡；放行记录 |
| `cp_waste_outputs` | 所有过程 | 残余物、不合格产品、废油、废水污泥、包装废料 | 秤具、废物联单、内部处理日志 | 物料；质量；适用时的水分或浓度；目的地；返工状态；经济价值；承运方 | 按流称量并保留目的地证据 | kg | 每次外运或每批；每月核对 | 完整声明生产期 | 所有纳入产线和废物处理区域 | 按物料和去向汇总；不得将可销售共产品与废物相抵 | 秤具校准；联单；账单；处理接收记录 |
| `cp_direct_emissions` | `product_transformation` | 向空气、水体和土壤的直接排放 | 烟气或出水测量及活动-因子计算 | 污染物；环境介质；浓度；流量；运行时间；燃料使用；因子；因子来源 | 优先直接测量；否则使用场址活动乘以有记录的因子 | 污染物特定 kg | 监测计划或每个运行期 | 代表实际控制水平和产品组合的时期 | 所有纳入直接排放点 | 按污染物和环境介质计算，再归一化到参考输出 | 实验室认可；仪器校准；采样计划；因子引用 |
| `cp_frozen_chain_records` | `quick_freezing_and_cold_storage` | 质量、入口温度、热中心温度、贮存和发运条件 | 经校准温度传感器、批次记录、冷库日志 | 批次 id；入口时间和温度；速冻出口时间；热稳定后热中心温度；贮存时间；空气温度；发运温度；产品质量 | 连续空气监测及经验证的直接或间接产品温度检查 | degree Celsius、hour、kg | 每批及冷库连续监测 | 声明期内所有冷冻批次 | 服务于纳入批次的全部速冻设备和冷库 | 按批次保留极值并计算质量加权贮存时间；不得通过平均掩盖温度偏差 | 传感器校准；报警和偏差日志；纠正措施记录 |
| `cp_refrigerant_records` | `quick_freezing_and_cold_storage` | 制冷剂补充、回收和释放 | 采购、库存、回收和维护记录 | 制冷剂身份；期初存量；采购；充注；回收；期末存量；设备 id | 以服务记录支撑的年度或生产期存量核算 | kg | 每次维护和期末核对 | 完整声明期 | 所有速冻和冷藏设备 | 损失 = 期初存量 + 采购 + 充注退回 - 期末存量 - 回收或转移量 | 维护账单；钢瓶称重；检漏；核对记录 |
| `cp_packaging_records` | `packaging_and_release` | 包装材料和包装单元 | 物料清单、采购及库存记录、包装计数器 | 材料；部件质量；包装单元数；期初库存；接收；废料；期末库存；重复使用次数 | 部件称重以及库存和单元数核对 | kg 和 count | 每种包装规格；每月核对 | 完整声明生产期 | 数据集所含全部包装形式 | 按包装形式计算每净产品质量的材料质量，再使用实际产出份额汇总 | 包装规格；供应商声明；库存核对；重复使用日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | 每项前景数量 | `归一化数量 = 记录数量 / 可销售成品净质量`；换算为所需 SI 单位，并保留原始数量和换算过程 | 记录数量；可销售成品净质量；换算因子 | 每 1 kg 参考产品的数量 | `eu-pef-2021-2279` |
| `batch_mass_balance` | 每个过程及整个前景数据包 | 核对全部物料投入与产品、共产品、返工、废物、可测废水携带物料、排放和有记录的库存变化；调查无法解释的差额，不得静默分配 | 物料投入；产出；返工；废物；库存变化；实测释放 | 披露的平衡闭合及无法解释差额 | `eu-pef-2021-2279` |
| `wastewater_balance` | 准备和转化废水 | `排放 = 新鲜补水 + 物料带入水 - 产品含水 - 蒸发 - 输出或回收水 - 库存变化`，使用实测项并披露估算项 | 水表；循环；可获得时的产品水分；蒸发；回收水 | 按目的地的废水数量 | `eu-pef-2021-2279` |
| `direct_emission_calculation` | 无连续直接测量的污染物特定释放 | `排放 = 场址活动 x 有记录的排放因子 x（1 - 适用时的实测控制效率）`；无正当理由不得将同一因子用于不同污染物或技术 | 活动记录；因子；控制效率；运行期 | 每参考流按环境介质的污染物质量 | `eu-pef-2021-2279` |
| `refrigerant_balance` | 速冻和冷藏制冷剂 | 按制冷剂核对期初存量、采购、充注、回收质量、转移和期末存量；无法解释的正损失记录为向空气排放 | 制冷剂库存和维护记录 | 每参考流的制冷剂特定释放 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和所有批次 | 产品形态、配方类别、实际单元操作、包装形式、冷冻状态、工厂、地理范围和参考期须可追溯到生产与放行记录。 | 产品规格；物料清单；批次记录；放行记录 |
| `dq_measurement` | 质量、水、能源、温度和排放 | 使用经校准仪表或有记录的工程计算；保留单位、换算因子、仪表覆盖范围、分配驱动因子和缺失数据处理。 | 校准证书；仪表图；计算工作簿或机器可读等效物 |
| `dq_temporal_coverage` | 前景平均值 | 使用能够代表正常运行、产品组合、维护和季节性冷藏条件的声明时期；披露停产、启动、非典型生产期和数据缺口。 | 生产日历；仪表及批次覆盖报告；缺失数据日志 |
| `dq_completeness` | 所有前景过程 | 证明覆盖所有已知产品、共产品、物料、水、能源、包装、废物、废水和直接基本流；明确论证排除项并量化适用截断。 | 流清单；质量和水量平衡；来源及代理登记；排除日志 |
| `dq_representativeness` | 前景及链接上游数据集 | 评估技术、地理和时间代表性及精度；披露代理以及与声明路线的任何不匹配。 | 数据集元数据；DQR 评估；代理论证 |
| `dq_frozen_chain` | 速冻产品 | 保留每个纳入冷冻批次的经校准温度记录、偏差、纠正措施和贮存时间；不得通过平均掩盖不合格温度偏差。 | 传感器校准；批次和冷库日志；偏差及处置记录 |
| `dq_allocation` | 共用或多功能过程 | 保留已尝试细分的证据，并记录剩余分配使用的每个驱动因子、系数、价格、参考期和敏感性。 | 仪表图；分配工作簿；价格记录；敏感性结果 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考输出 | 确认定量参考为恰好 1 kg 净可销售产品，并使用流 `b158bec4-e459-437d-8106-88d2f3d92c8a`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 和单位 kg。 | `unstats-cpc-3-0` |
| `validate_scope_and_qualifiers` | 产品身份 | 若数据包缺少产品形态、配方或配料类别、实际烹调或保藏路线、冷冻状态、包装形式、生产地理范围、技术、分配状态或工厂门口放行条件，或产品属于明确排除的马铃薯类别，则拒绝该数据包。 | `unstats-cpc-3-0`; `codex-cxs-114-1981` |
| `validate_process_route` | 过程图和清单 | 确认每个必需过程均已表示，条件式冷冻过程与声明产品状态一致，并且每个可能适用的单元操作均明确标为已纳入、不适用或供应商已完成。 | `codex-cxs-114-1981`; `codex-cxc-8-1976` |
| `validate_mass_and_water_balance` | 前景清单 | 要求过程级和整个数据包的质量核对；水或废水具有重要性时还须水量平衡。未解决差额须作为发现报告，不得静默分配。 | `eu-pef-2021-2279` |
| `validate_frozen_condition` | 速冻产品 | 确认热稳定后热中心温度达到 -18 摄氏度或更低，并且场内冷藏和发运记录证明温度受控；报告每项偏差及其处置。 | `codex-cxs-114-1981`; `codex-cxc-8-1976` |
| `validate_allocation` | 共用和多功能过程 | 确认遵循过程细分或系统扩展、物理关系、再到其他关系的层级并有记录；核验残余物状态并防止未披露的避免负担信用。 | `eu-pef-2021-2279` |
| `validate_completeness_and_cutoff` | 前景及链接数据集 | 确认所有已知输入和输出均得到处理，代理和排除均已披露，任何下游 PEF 截断都经过筛选和论证且不超过适用累计阈值。 | `eu-pef-2021-2279` |
| `validate_source_traceability` | 记录、因子和生成数据集 | 确认前景记录可追溯到校准、供应商、仪表、批次、废物、排放和温度证据；确认每个外部因子具有稳定来源，且任何暂定推理估算均未被表述为观测数据。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 归一化到工厂门口 1 kg 马铃薯净成品的产品特定前景制造数据包 |
| downstream_use | 经审核和发布后作为 `secondary_dataset`；`background_dataset` 使用 |
| allowed_use | 当路线、配方、技术、地理、冷冻状态、包装、分配、时间覆盖和上游链接兼容并已披露时，用于产品特定过程和生命周期模型构建 |
| excluded_use | 无限定信息的类别平均声明；缺少上游数据集的农业马铃薯生产；本范围以外的简单冷冻、水煮、蒸制、醋制或干燥马铃薯；消费者烹调；未单独建模的配送、零售或终端处置声明；基于暂定推理估算范围的环境声明 |
| required_metadata | 所用 PCR id 和版本；参考产品 UUID；产品形态；配方或配料类别；单元操作；冷冻状态；包装形式；净含量；工厂和地理；技术；参考期；来源和代理登记；上游数据集身份；分配和截断声明；数据质量评估 |
| required_quality_disclosure | 仪表和记录覆盖率；校准证据；质量和水量平衡闭合；时间、技术和地理代表性；缺失数据；代理使用；分配敏感性；共产品和废物去向；冷冻产品温度偏差；暂定范围状态 |
| update_trigger | 产品规格、配方、得率、加工技术、能源或制冷系统、冷冻状态管理、包装、供应商地理、分配关系、法规或 Codex 要求、数据源或代表性生产期发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unstats-cpc-3-0` | dataset | United Nations Statistics Division, Central Product Classification Version 3.0, official classification resources, https://unstats.un.org/unsd/classifications/Econ（检索于 2026-08-11） | 产品类别身份、纳入和排除边界以及分类背景 |
| `codex-cxs-114-1981` | standard | Codex Alimentarius, CXS 114-1981, Standard for Quick Frozen French Fried Potatoes, amended 2019, https://workspace.fao.org/sites/codex/Standards/CXS%20114-1981/CXS_114e.pdf（检索于 2026-08-11） | 代表性炸薯条产品定义、分选、清洗、去皮、切分、油炸、速冻、组成、质量、包装和放行条件规则 |
| `codex-cxc-8-1976` | official_guidance | Codex Alimentarius, CXC 8-1976, Code of Practice for the Processing and Handling of Quick Frozen Foods, revised 2008, https://workspace.fao.org/sites/codex/Standards/CXC%208-1976/CXC_008e.pdf（检索于 2026-08-11） | 条件式冷冻路线过程分解、冷链温度控制、监测、贮存和追溯 |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, ELI http://data.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-11） | 功能单位、参考流、系统边界、完整前景数据、分配层级、截断、数据采集、计算、质量和校验规则 |
