---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.pineapple-juice
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 菠萝汁

## 1. 范围与适用性

本 PCR 适用于以健全、适当成熟的菠萝（`Ananas comosus`）可食部分制成，并以制造工厂门口成品形式交付的未发酵但可发酵菠萝汁。涵盖直接榨取汁和由菠萝浓缩汁复原的果汁，可为清汁或浑浊汁，但必须声明生产路线、可溶性固形物基准、保藏技术和包装形式。

本 PCR 不包括菠萝果肉饮料、混合果汁、果味饮料、发酵菠萝饮料、以浓缩菠萝汁作为参考产品销售的产品、菠萝果泥，以及菠萝罐头生产产生但不能独立满足所声明菠萝汁身份的糖浆。默认工厂门口数据集也不包括下游配送、零售冷藏、消费者使用和包装生命末期；这些阶段只能作为单独声明的情景加入。

默认产品系统为从摇篮到最终制造工厂门口。前景生产从水果或浓缩汁接收开始，涵盖路线特定的准备、榨汁或复原、产品处理、灌装、包装、清洗、废水、残余物、拒收物和场内公用工程。菠萝种植、适用时的浓缩汁生产、进厂运输、能源载体、供水、包装材料、处理化学品以及场外废物或废水处理必须连接上游数据集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.pineapple-juice |
| classification_refs | CPC 3.0：21433，Pineapple juice（精确映射上下文） |
| covered_products | 直接榨取或复原的单一水果菠萝汁；清汁或浑浊汁；在声明生产路线时可为常温、冷藏、热灌装、无菌灌装或其他保藏状态 |
| excluded_products | 菠萝果肉饮料；混合果汁；果味饮料；发酵饮料；以浓缩汁作为销售参考产品的产品；果泥；糖浆；因添加水或甜味料而使身份由果汁变为其他饮料类别的产品 |
| representative_product | 最终制造工厂门口、扣除包装质量的市场就绪单一水果菠萝汁 |
| production_route | 直接路线：接收、分选、清洗、准备、榨取、精制、处理、保藏和灌装；浓缩汁复原路线：接收浓缩汁、用饮用水复原、在使用时恢复允许的同种水果组分、处理、保藏和灌装 |
| market_state | 工厂门口的已制造成品果汁；声明保藏状态和储存温度要求 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 保持所声明菠萝汁组成和感官身份的市场就绪单一水果菠萝汁 |
| How much | 1 kg 净菠萝汁，不含一级、二级和三级包装 |
| How well | 未发酵但可发酵；直接榨取汁除允许的同种果汁调配外保持榨取时的可溶性固形物水平；复原汁以 20 摄氏度下至少 12.8 °Brix 为目标，除非适用且有文件证明的真实性条款允许其他数值 |
| How long or cycle | 完成所声明保藏和灌装步骤后、最终制造工厂门口的一个放行生产批次；不赋予使用期限 |
| reference_flow_link | 最终产品输出行 `pineapple_juice_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净产品 |
| 参考产品流 | Pineapple juice `3d2b95ad-8673-4718-a728-e1e7d17b4271` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 生产路线：直接或浓缩汁复原；已知时的菠萝物种或商业品种；果汁形态：清汁或浑浊汁；实测 °Brix 和测量温度；保藏技术；包装形式和净灌装量；储存温度要求；生产地域；生产期间；菠萝残余物和其他共产品的分配处理 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 最终菠萝汁 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终处理和灌装后计量合格净果汁。1 kg 参考数量不含所有包装质量，包装另行建清单。 |
| `brix_measurement` | 直接汁和复原汁 | 可溶性固形物 | °Brix | 记录仪器、校准记录、样品温度、温度修正和批次结果。与 12.8 °Brix 复原参考比较时按 20 摄氏度基准报告。 |
| `reconstitution_mass` | 浓缩汁复原路线 | Mass | kg | 按批次记录浓缩汁、并入产品的水、恢复的果肉或香气、允许配料、样品、溢漏和产品输出。有计量或批次记录时，不得只用通用配方推断并入产品的水。 |
| `water_by_use` | 清洗、并入产品的水、冷却和清洁 | Mass 或 volume | kg 或 m3 | 将并入产品的水与工艺水和废水分开。仅在声明密度和测量温度时将体积换算为质量。 |
| `energy_by_carrier` | 电力、蒸汽、热、制冷和燃料 | Energy 加原始采购单位 | kWh、MJ 和供应商单位 | 保留计量或发票载体数量及换算因子。不得把电力和热能合并成一个无说明数量。 |
| `packaging_by_material` | 一级、二级和三级包装 | Mass | kg | 按材料和组件分别记录每 kg 净果汁的包装；识别可重复使用包装及其重复使用假设。 |
| `transport_service` | 进厂菠萝、浓缩汁、包装、化学品和废物 | 运输服务 | tkm | 用运输质量（吨）乘以单程载货距离（公里）；声明运输方式、容量或装载率及空返处理。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 直接路线为加工厂接收的健全成熟菠萝；浓缩汁复原路线为接收的菠萝浓缩汁和饮用复原水 |
| starting_condition_role | 前景采集门槛；上游负荷仍通过供应商特定或代表性数据集连接 |
| product_classification_scope | 独立于外部分类型目录所有权的单一水果菠萝汁；CPC 3.0 代码 21433 仅为映射上下文 |
| recursive_input_rule | 输入另一菠萝汁数据集的菠萝汁用单独识别的上游数据集表示，不在当前前景包内递归展开 |
| upstream_dataset_requirement | 连接菠萝种植或浓缩汁制造、进厂运输、电力和燃料、供水、包装生产、处理化学品及场外处理；披露地域、技术、期间和所有代理 |
| disclosure | 声明路线、起始物料状态、排除的下游阶段、包装边界、内部循环、废物或共产品状态、分配方法、数据缺口以及用于筛查的所有临时 `reasoned_estimate` |

### 规范性边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | 所有数据集 | 包括定义路线的菠萝或浓缩汁的上游生产和运输，以及直至最终制造门口合格包装产品的所有重要前景加工。 | `iso-14044-2006`; `del-rio-2020-pineapple-lca`; `environdec-pcr-2019-10` |
| `boundary_route_specific` | 直接路线和浓缩汁复原路线 | 不得把直接榨取和浓缩汁复原合并成未声明的通用配方。建立生产混合时报告路线份额。 | `codex-cxs-247-2005`; `eu-directive-2012-12` |
| `boundary_foreground_operations` | 加工厂 | 包括接收和分选、清洗和准备、适用时的榨取和精制、适用时的复原或调配、保藏、灌装、包装、清洗、废水、拒收物、残余物和场内公用工程。 | `fao-fruit-processing-1995`; `fao-fruit-juice-processing-2001`; `walker-et-al-2018` |
| `boundary_downstream_exclusion` | 默认工厂门口数据集 | 除非研究明确加入并标注相关情景，否则排除配送、零售、消费者储存或使用以及包装生命末期。 | `iso-14044-2006`; `environdec-pcr-2019-10` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fruit_or_concentrate_receipt` | 水果或浓缩汁接收与准备 | `required` | 始终适用；记录路线特定起始物料和拒收物处理 | 前景接收、分选、清洗和准备 | 每单位接收加工质量及每 1 kg 最终果汁 |
| `juice_extraction` | 菠萝准备、汁液榨取与精制 | `conditional` | 直接路线或场内机械处理果实固体时必需 | 前景榨取和固液分离 | 每单位离开精制步骤的原汁质量 |
| `reconstitution_and_blending` | 复原、调配与标准化 | `conditional` | 浓缩汁复原果汁以及场内调配允许配料或同种水果组分时必需 | 前景配方和批次标准化 | 每单位标准化果汁质量 |
| `preservation_and_packaging` | 产品保藏、灌装、冷却与包装 | `required` | 始终适用；只有在有记录证据时技术特定步骤才能为零 | 前景最终加工和参考产品生产 | 1 kg 净合格菠萝汁 |
| `cleaning_and_residuals` | 清洗、废水、残余物、拒收物与场内处理 | `required` | 始终适用；仅在报告期核实后记录为零 | 前景支持和残余物流管理 | 按过程分配或每 1 kg 最终果汁 |

### 过程：水果或浓缩汁接收与准备（`fruit_or_concentrate_receipt`）

#### 输入

##### 产品流

###### 定义路线的菠萝物料（`route_starting_material`）

记录直接路线接收的新鲜菠萝或浓缩汁复原路线接收的菠萝浓缩汁。保持两种路线身份和数量分离。

- 选定流：Fresh pineapple 或 pineapple juice concentrate；本非参考行的 Tiangong UUID 尚未解析
- 流属性/单位：Mass / kg
- 数量规则：按批次称量接收的起始物料，并从毛接收量中扣除有记录的接收拒收物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终菠萝汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`codex-cxs-247-2005`; `eu-directive-2012-12`; `fao-fruit-processing-1995`
- 数量范围：临时起始物料筛查估计，不作为默认配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：4.0
  - 单位：kg
  - 基准：每 1 kg 最终菠萝汁；下限表示浓缩投入，上限表示低出汁率水果加工
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 进厂运输服务（`incoming_transport`）

记录起始物料及其他主要供应品从供应商发运点到加工厂的运输。

- 选定流：Freight transport service；Tiangong UUID 尚未解析
- 流属性/单位：Transport service / tkm
- 数量规则：运输质量（吨）乘以路线距离（公里）
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 最终菠萝汁
- 基准类型：运输服务（`transport_service`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_transport_records`
- 来源：`del-rio-2020-pineapple-lca`
- 数量范围：临时运输筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：tkm
  - 基准：每 1 kg 最终菠萝汁
  - 基准类型：运输服务（`transport_service`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 接收与清洗用水（`receipt_washing_water`）

记录水果清洗和接收区作业使用的饮用水或符合规范的水；没有水果清洗的浓缩汁路线本行为零。

- 选定流：Process water；Tiangong UUID 尚未解析
- 流属性/单位：Mass / kg
- 数量规则：计量取水量减去单独计量的循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终菠萝汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`fao-fruit-processing-1995`; `walker-et-al-2018`
- 数量范围：临时清洗用水筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 最终菠萝汁
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 已接收准备物料（`accepted_material`）

记录接收损失和拒收后转往榨取或复原的质量。

- 选定流：Accepted pineapple material；Tiangong UUID 尚未解析
- 流属性/单位：Mass / kg
- 数量规则：按批次计量转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位接收过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`fao-fruit-processing-1995`

##### 废物流

###### 接收拒收物（`receiving_rejects`）

按实际去向记录损伤、未成熟、受污染或其他不合格物料。

- 选定流：Rejected pineapple material；Tiangong UUID 尚未解析
- 流属性/单位：Mass / kg
- 数量规则：按去向和处理路线称量拒收物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终菠萝汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residual_records`
- 来源：`fao-fruit-processing-1995`
- 数量范围：临时拒收比例筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg
  - 基准：每 kg 毛接收起始物料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：菠萝准备、汁液榨取与精制（`juice_extraction`）

#### 输入

##### 产品流

###### 待榨取的已接收菠萝（`pineapple_to_extraction`）

转移直接路线已接收水果质量，不重复加入上游负荷。

- 选定流：Accepted pineapple material；Tiangong UUID 尚未解析
- 流属性/单位：Mass / kg
- 数量规则：计量来自 `accepted_material` 的转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位榨取过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`fao-fruit-processing-1995`; `fao-fruit-juice-processing-2001`

###### 榨取用电（`extraction_electricity`）

记录输送、去皮或准备、破碎、榨取、精制、泵送和控制的电力。

- 选定流：Electricity；Tiangong UUID 尚未解析
- 流属性/单位：Energy / kWh
- 数量规则：分表计量电力，或分配给榨取过程的有文件依据的工厂总表数据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 最终菠萝汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`walker-et-al-2018`; `del-rio-2020-pineapple-lca`
- 数量范围：临时榨取用电筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：2
  - 单位：kWh
  - 基准：每 1 kg 最终菠萝汁
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 原始精制果汁（`raw_finished_juice`）

记录机械榨取和精制后、最终调配或保藏前的果汁。

- 选定流：Raw pineapple juice intermediate；Tiangong UUID 尚未解析
- 流属性/单位：Mass / kg
- 数量规则：计量罐转移，或按校准液位和密度进行质量平衡计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位榨取过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`fao-fruit-processing-1995`; `codex-cxs-247-2005`

##### 废物流

###### 菠萝冠、皮、芯、果肉和压榨残余物（`pineapple_residues`）

计量各可分离残余物流，并声明其为废物、共产品、动物饲料原料、能源原料或内部循环物料。

- 选定流：Pineapple processing residue；Tiangong UUID 尚未解析
- 流属性/单位：Mass / kg
- 数量规则：按残余物类型和去向称量湿质量；用于分配或销售时记录干物质
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终菠萝汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residual_records`
- 来源：`fao-fruit-processing-1995`; `iso-14044-2006`
- 数量范围：临时残余物筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：kg 湿质量
  - 基准：每 1 kg 最终菠萝汁
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：复原、调配与标准化（`reconstitution_and_blending`）

#### 输入

##### 产品流

###### 路线特定果汁基料（`juice_base_input`）

直接路线记录原始精制果汁，浓缩汁复原路线记录菠萝浓缩汁；没有路线份额元数据时不得合并。

- 选定流：Raw pineapple juice intermediate 或 pineapple juice concentrate；Tiangong UUID 尚未解析
- 流属性/单位：Mass / kg
- 数量规则：计量批次加料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批次及每 1 kg 最终菠萝汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_formulation`
- 来源：`codex-cxs-247-2005`; `eu-directive-2012-12`

###### 并入产品的复原水（`reconstitution_water`）

记录并入浓缩汁复原果汁的饮用水。直接榨取汁本行为零，除非加水合法且不改变产品身份。

- 选定流：Potable water；Tiangong UUID 尚未解析
- 流属性/单位：Mass / kg
- 数量规则：实际并入产品的计量或批次称量水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终菠萝汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_formulation`
- 来源：`codex-cxs-247-2005`; `eu-directive-2012-12`
- 数量范围：临时复原水筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.95
  - 单位：kg
  - 基准：每 1 kg 最终菠萝汁
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 允许的同种水果组分和配方助剂（`permitted_formulation_inputs`）

分别记录恢复的菠萝香气、果肉或细胞以及每种允许配料或加工助剂；不得用本行掩盖会使产品类别改变的甜味料或加水。

- 选定流：Route-specific formulation input；Tiangong UUID 尚未解析
- 流属性/单位：Mass / kg
- 数量规则：按命名物料称量批次加入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终菠萝汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_formulation`
- 来源：`codex-cxs-247-2005`; `eu-directive-2012-12`

#### 输出

##### 产品流

###### 标准化菠萝汁（`standardized_juice`）

记录配方和 Brix 核验后转往保藏步骤的放行批次。

- 选定流：Standardized pineapple juice intermediate；Tiangong UUID 尚未解析
- 流属性/单位：Mass / kg
- 数量规则：扣除样品、溢漏和滞留损失后的批次输出计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位调配过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_formulation`
- 来源：`codex-cxs-247-2005`; `eu-directive-2012-12`

### 过程：产品保藏、灌装、冷却与包装（`preservation_and_packaging`）

#### 输入

##### 产品流

###### 保藏与包装用电（`preservation_electricity`）

记录泵、换热器、冷却机、无菌设备、灌装机、输送机和包装设备的电力。

- 选定流：Electricity；Tiangong UUID 尚未解析
- 流属性/单位：Energy / kWh
- 数量规则：分表计量电力，或有文件依据地分配工厂总表数据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 最终菠萝汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`walker-et-al-2018`; `fao-fruit-juice-processing-2001`
- 数量范围：临时保藏与包装用电筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：2
  - 单位：kWh
  - 基准：每 1 kg 最终菠萝汁
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 热能与燃料（`preservation_thermal_energy`）

记录巴氏杀菌、灭菌、热灌装和容器准备使用的蒸汽、热水、直接燃料或其他热源。

- 选定流：Route-specific thermal energy carrier；Tiangong UUID 尚未解析
- 流属性/单位：Energy / MJ，并保留原始载体单位
- 数量规则：计量热能或用已声明因子换算的燃料数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 最终菠萝汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-fruit-juice-processing-2001`; `walker-et-al-2018`
- 数量范围：临时热能筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：MJ
  - 基准：每 1 kg 最终菠萝汁
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_materials`）

按材料分别记录一级容器、封口、标签、二级纸箱或薄膜、托盘份额及其他包装组件。

- 选定流：Packaging material by component；Tiangong UUID 尚未解析
- 流属性/单位：Mass / kg
- 数量规则：采购或领用包装减有记录的未使用退回量，再除以合格净果汁输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终菠萝汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`environdec-pcr-2019-10`; `del-rio-2020-pineapple-lca`
- 数量范围：临时包装质量筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 净菠萝汁
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 工厂门口合格菠萝汁（`pineapple_juice_output`）

本行为完成所声明保藏和灌装后的参考产品。包装另行建清单，不计入参考质量。

- 选定流：Pineapple juice `3d2b95ad-8673-4718-a728-e1e7d17b4271`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据采集的生产记录归一化后为 1 kg 合格净果汁
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_final_product_release`
- 来源：`codex-cxs-247-2005`; `eu-directive-2012-12`; `iso-14044-2006`
- 数量范围：参考流恒等关系
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：归一化后恰好一个 PCR 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-2006`

##### 废物流

###### 包装拒收物与产品损失（`packaging_and_product_losses`）

按实际去向记录损坏容器、开机和换线损失、不合格灌装产品、溢漏及回收产品。

- 选定流：Packaging waste and off-specification juice；Tiangong UUID 尚未解析
- 流属性/单位：Mass / kg
- 数量规则：按材料和处理去向称量或质量平衡计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终菠萝汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residual_records`
- 来源：`walker-et-al-2018`
- 数量范围：临时最终过程损失筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg
  - 基准：每 1 kg 最终菠萝汁
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：清洗、废水、残余物、拒收物与场内处理（`cleaning_and_residuals`）

#### 输入

##### 产品流

###### 清洗与卫生用水（`cleaning_water`）

记录 CIP、COP、地面、容器和设备漂洗用水，扣除计量的内部回用水。

- 选定流：Process water；Tiangong UUID 尚未解析
- 流属性/单位：Mass / kg
- 数量规则：按清洗回路计量，或依据工厂记录和有文件的清洗计划分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终菠萝汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`walker-et-al-2018`; `fao-fruit-juice-processing-2001`
- 数量范围：临时清洗用水筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：kg
  - 基准：每 1 kg 最终菠萝汁
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗与卫生化学品（`cleaning_chemicals`）

按有效配方和浓度记录每种洗涤剂、消毒剂、酸、碱或卫生剂。

- 选定流：Cleaning chemical by formulation；Tiangong UUID 尚未解析
- 流属性/单位：Mass / kg
- 数量规则：领用量按库存变化和未使用退回量修正
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终菠萝汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`
- 来源：`walker-et-al-2018`
- 数量范围：临时清洗化学品筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg 配制产品
  - 基准：每 1 kg 最终菠萝汁
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 废物流

###### 送往处理的工艺废水（`process_wastewater`）

按处理去向记录清洗、榨取、配方、冷却、清洁和溢漏产生的废水；有水并入产品或蒸发时不得把取水量等同于排水量。

- 选定流：Wastewater to treatment；Tiangong UUID 尚未解析
- 流属性/单位：Mass / kg
- 数量规则：计量排放或水量平衡；浓度或负荷实测数据另行保留
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终菠萝汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`walker-et-al-2018`; `del-rio-2020-pineapple-lca`
- 数量范围：临时废水筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：25
  - 单位：kg
  - 基准：每 1 kg 最终菠萝汁
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 处理污泥和分离固体（`treatment_residuals`）

按湿质量、可得时的干物质和最终处理路线记录污泥、筛渣和分离固体。

- 选定流：Wastewater-treatment residual；Tiangong UUID 尚未解析
- 流属性/单位：Mass / kg
- 数量规则：称量移除量，或根据实测体积和固体浓度计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终菠萝汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`del-rio-2020-pineapple-lca`
- 数量范围：临时处理残余物筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg 湿质量
  - 基准：每 1 kg 最终菠萝汁
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共享过程和公用工程 | 首先通过过程细分、单独计量、批次记录以及路线特定的质量和能量平衡避免分配。 | `iso-14044-2006`; `walker-et-al-2018` |
| `allocation_internal_recycling` | 内部回用的果汁、水或残余物 | 将内部循环保留在前景系统内。记录额外处理、泵送和损失，但不产生第二个可销售输出或避免负荷。 | `iso-14044-2006`; `walker-et-al-2018` |
| `allocation_residue_status` | 冠、皮、芯、果肉、拒收物和污泥 | 按实际法律和商业状态及处理路线声明每股物流为废物、共产品或内部循环物料。不得给未销售废物流赋予共产品抵扣。 | `iso-14044-2006`; `del-rio-2020-pineapple-lca` |
| `allocation_physical_then_economic` | 无法避免的多输出过程 | 细分不能解决共享负荷时，存在可辩护的物理因果关系则采用该关系。不存在时，采用有文件依据的代表性报告期平均经济关系并报告敏感性情景。 | `iso-14044-2006` |
| `allocation_route_mix` | 生产混合数据集 | 分别计算直接路线和浓缩汁复原路线清单，再按声明期间合格输出的实测路线份额合并。 | `codex-cxs-247-2005`; `eu-directive-2012-12` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `fruit_or_concentrate_receipt`; `juice_extraction` | 起始物料、接收物料、中间体和残余物 | 地磅、校准秤、罐和批次记录 | 批次；路线；物料；毛质量；拒收质量；转移质量；由体积换算时的密度和温度 | 直接称量或校准罐计量 | kg | 每批次 | 完整声明生产期间 | 所有纳入场址和路线 | 按物料和路线求和；核对期初期末库存 | 校准记录；批次票据；库存核对 |
| `cp_transport_records` | `fruit_or_concentrate_receipt` | 进厂运输 | 供应商发运和货运记录 | 物料；发运质量；起终点；距离；方式；车辆；装载率；空返 | 文件审查和路线计算 | kg、km、tkm | 每次发运或声明覆盖率的代表路线 | 完整声明生产期间 | 所有物料进厂路线 | 按物料和方式进行质量加权 tkm | 发票；送货单；路线证据 |
| `cp_water_records` | `fruit_or_concentrate_receipt`; `cleaning_and_residuals` | 清洗、清洁、冷却和并入产品的水 | 水表、罐记录和公用工程账单 | 表号；起止读数；回用；用途；停机；产量 | 优先校准水表；否则有文件的平衡 | kg 或 m3 | 连续或每班；每月核对 | 完整声明生产期间 | 每场址和主要水回路 | 取水减实测回用，按合格输出归一化 | 水表校准；账单核对；水量平衡 |
| `cp_energy_records` | `juice_extraction`; `preservation_and_packaging` | 电力、燃料、蒸汽、热和制冷 | 分表、总表、燃料发票和设备日志 | 载体；数量；单位；表号；过程；运行时间；换算因子；损失 | 优先分表；共享时有文件分配 | kWh、MJ 和供应商单位 | 连续或每班；每月核对 | 完整声明生产期间 | 每场址和路线 | 按载体和过程求和；按合格输出归一化 | 仪表校准；发票；换算因子来源 |
| `cp_batch_formulation` | `reconstitution_and_blending` | 果汁基料、水、允许投入、样品和输出 | 配方单和批次罐记录 | 批次；路线；配料身份；投入质量；Brix；温度；输出质量；样品；溢漏；滞留 | 批次称量和质控测量 | kg 和 °Brix | 每批次 | 完整声明生产期间 | 所有配方罐和路线 | 核对批次投入、输出、损失和库存 | 签字批次单；折光仪校准；放行结果 |
| `cp_packaging_records` | `preservation_and_packaging` | 包装组件 | 领用、采购、退回和生产记录 | 组件；材料；单件质量；领用数；退回数；拒收数；净产品质量 | 组件称量加库存核对 | kg 和 count | 每包装运行；每月核对 | 完整声明生产期间 | 每包装形式和场址 | 净组件质量除以合格净果汁 | 供应商规范；秤校准；库存核对 |
| `cp_final_product_release` | `preservation_and_packaging` | 合格最终果汁 | 灌装机、检重秤、罐和放行记录 | 批次；包装数；净灌装；散装质量；不合格质量；路线；Brix；保藏；储存要求 | 校准质量计量和质量放行 | kg | 每批次 | 完整声明生产期间 | 所有纳入产线、路线和形式 | 仅合计合格净果汁；排除包装 | 检重秤和秤校准；签字放行记录 |
| `cp_cleaning_records` | `cleaning_and_residuals` | 清洗化学品和循环 | 化学品领用、浓度和清洗计划 | 化学品；配方；浓度；领用量；退回；循环；设备；日期 | 库存差和加药记录 | kg | 每清洗循环；每月核对 | 完整声明生产期间 | 所有纳入清洗回路 | 按过程合计净化学品使用并归一化 | 库存核对；加药校准；卫生日志 |
| `cp_wastewater_records` | `cleaning_and_residuals` | 废水和处理残余物 | 排水表、实验室分析、清运和处理记录 | 体积或质量；来源；去向；COD 或其他负荷；污泥质量；干物质；处理 | 优先直接计量和实验室测量；否则有文件水量平衡 | kg、m3 和浓度单位 | 连续或每次排放；定期分析 | 完整声明生产期间 | 每排口和处理路线 | 按去向求和；浓度和负荷分别保留 | 仪表校准；实验室报告；处理或清运凭证 |
| `cp_residual_records` | 所有前景过程 | 拒收物、残余物、溢漏和包装废物 | 秤、容器、库存移动、销售和废物转移记录 | 物流；来源过程；湿质量；干物质；去向；法律状态；共产品收入 | 直接称量和去向文件 | kg | 每次移除或每班；每月核对 | 完整声明生产期间 | 所有纳入场址和残余物路线 | 按物流和去向求和；防止重复计数 | 秤校准；转移单；销售或处理凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 每个前景清单数量 | 归一化数量 = 报告期数量 / 报告期合格净菠萝汁质量 | 采集数量；合格净果汁质量 | 每 1 kg 参考流数量 | `iso-14044-2006` |
| `calc_transport_tkm` | 进出厂运输 | tkm = 运输质量（吨）x 单程载货距离（公里）；适用时另计空返 | 发运质量；距离；方式；空返假设 | 每 1 kg 参考流的 tkm | `del-rio-2020-pineapple-lca` |
| `calc_route_mix` | 生产混合数据集 | 混合清单 = 各路线归一化清单 x 合格输出实测路线份额之和 | 直接路线输出；复原路线输出；路线清单 | 声明的生产混合清单 | `codex-cxs-247-2005`; `eu-directive-2012-12` |
| `calc_batch_mass_balance` | 榨取和配方 | 投入质量 + 期初库存 = 输出质量 + 期末库存 + 实测残余物 + 拒收物 + 样品 + 溢漏 + 其他损失 | 批次和库存记录 | 闭合率和未解释损失 | `walker-et-al-2018` |
| `calc_water_balance` | 工厂用水 | 取水 + 投入物含水 = 并入产品的水 + 废水 + 蒸发 + 产品和残余物含水 + 库存变化；报告未解析差额 | 水表；配方；废水；蒸发估计；输出质量 | 期间水量平衡和归一化水流 | `walker-et-al-2018` |
| `calc_shared_utility_allocation` | 共享能源和水 | 仅在尝试细分和计量后分配；使用运行时间、吞吐量或热负荷等实测因果驱动因子并披露 | 工厂总量；分表数据；运行驱动因子；路线输出 | 过程和路线特定公用工程数量 | `iso-14044-2006`; `walker-et-al-2018` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 每个放行批次 | 保留产品名、菠萝身份、直接或复原路线、果汁形态、保藏技术、包装形式、实测 Brix 和储存要求。 | 放行规范；批次记录；标签或产品说明 |
| `dq_temporal` | 前景清单 | 覆盖代表性连续生产期间或完整季节，并披露停机、开机、异常批次和外推。 | 带日期的仪表、生产、采购和废物记录 |
| `dq_geography` | 上游和前景数据 | 识别工厂位置、菠萝或浓缩汁来源、运输路线、电力市场、水源和处理去向。 | 供应商记录；路线证据；公用工程合同；处理凭证 |
| `dq_technology` | 过程和公用工程 | 识别会实质影响流量的榨取、精制、保藏、灌装、冷却、制冷、水回用和废水处理技术。 | 设备清单；工艺图；运行记录 |
| `dq_completeness` | 必需过程图 | 为每个必需过程及每个适用的条件过程提供记录；解释已核实的零值和所有缺口。 | 过程到记录覆盖矩阵 |
| `dq_mass_balance` | 水果、浓缩汁、果汁、残余物和包装 | 核对投入、输出、库存、样品、溢漏、拒收物和残余物。筛查容差在按场址测量不确定度评审前保持临时状态。 | 签字质量平衡表；校准证据 |
| `dq_source_traceability` | 次级和代理数据 | 记录数据集身份、地域、技术、期间、版本、映射理由和替代限制。 | 数据集元数据和来源登记 |
| `dq_reasoned_estimates` | 所有临时范围 | `reasoned_estimate` 范围仅用于筛查。不得静默替代前景记录，并列出共享或发布数据集中仍保留的每个估计。 | 校验报告和未解决证据登记 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求精确菠萝汁产品 UUID、Mass 流属性 UUID、Units of mass UUID、1 kg 净参考数量及所有必需限定信息。 | `codex-cxs-247-2005`; `eu-directive-2012-12` |
| `validate_route_declaration` | 所有数据集 | 要求恰好一个声明路线，或分别计算直接与复原路线清单的实测路线混合。 | `codex-cxs-247-2005`; `eu-directive-2012-12` |
| `validate_brix` | 放行产品 | 要求批次 Brix 结果、测量温度或修正、仪器校准及与适用产品规范的比较。复原汁采用 20 摄氏度下 12.8 °Brix，除非适用且有文件证明的真实性条款另有规定。 | `codex-cxs-247-2005`; `eu-directive-2012-12` |
| `validate_process_coverage` | 过程图 | 要求所有必需过程及每个适用条件过程；零流量必须有记录支持的解释。 | `fao-fruit-processing-1995`; `walker-et-al-2018` |
| `validate_mass_and_water_balance` | 前景数据包 | 要求路线特定的物料和水量平衡，并披露全部库存变化、残余物、样品、溢漏、并入产品的水、废水和未解释差额。 | `walker-et-al-2018` |
| `validate_energy_separation` | 公用工程 | 要求电力和热载体分开，披露原始单位、换算因子、仪表覆盖和分配驱动因子。 | `walker-et-al-2018` |
| `validate_packaging` | 包装产品 | 要求按组件和材料记录包装，同时将包装排除在 1 kg 净参考质量之外。 | `environdec-pcr-2019-10`; `del-rio-2020-pineapple-lca` |
| `validate_residual_fate` | 拒收物、菠萝残余物、废水和污泥 | 要求质量、去向、处理、内部循环以及废物或共产品状态；禁止同一数量同时计废物处理和共产品抵扣。 | `iso-14044-2006`; `del-rio-2020-pineapple-lca` |
| `validate_allocation` | 共享或多输出过程 | 要求证明尝试过细分或直接测量，说明所选关系和报告期间、路线份额基准，并在使用经济分配时给出敏感性情景。 | `iso-14044-2006`; `walker-et-al-2018` |
| `validate_evidence_status` | 定量指南 | 拒绝未标注的推断范围。把 `reasoned_estimate` 保持为临时筛查指南，并列出未解决身份或范围证据缺口。 | `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 最终制造工厂门口菠萝汁生产的前景产品系统数据包 |
| downstream_use | 完成方法学和数据质量评审后可作为 `secondary_dataset`；`background_dataset` |
| allowed_use | 路线特定或实测生产混合的从摇篮到工厂门口 LCI；供应链热点分析；同时满足适用项目规则和下游阶段要求时的经核查环境声明 |
| excluded_use | 菠萝果肉饮料、混合果汁、果味饮料、发酵饮料、以浓缩汁作为销售产品，或未明确建模下游的消费者/配送声明 |
| required_metadata | 参考 UUID；路线及路线份额；品种或来源身份；Brix 及测量基准；保藏和包装技术；净灌装；储存要求；地域；期间；上游数据集身份；分配；废物和共产品去向 |
| required_quality_disclosure | 仪表和记录覆盖；校准；物料和水量平衡；共享公用工程分配；代理数据集；数据缺口；核实零值；每个剩余 `reasoned_estimate`；评审状态 |
| update_trigger | 水果或浓缩汁来源、路线份额、配方、出汁率、保藏或灌装技术、能源或水系统、包装、废物或共产品去向、分配基准、产品规范或治理来源发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-247-2005` | `standard` | FAO 和 WHO，Codex Alimentarius Commission。General Standard for Fruit Juices and Nectars，CXS 247-2005，2005 年采纳并修订至 2025 年。https://openknowledge.fao.org/handle/20.500.14283/cd9081en（检索日期 2026-08-11） | 菠萝汁身份；直接和复原路线；允许工艺与组分；真实性和质量核验；菠萝 12.8 °Brix 参考值 |
| `eu-directive-2012-12` | `standard` | Directive 2012/12/EU，修订关于果汁及类似产品的 Directive 2001/112/EC。CELEX 32012L0012。https://eur-lex.europa.eu/eli/dir/2012/12/oj/eng（检索日期 2026-08-11） | 果汁和浓缩汁复原果汁的法律定义；允许配料和处理；直接果汁 Brix 规则；复原菠萝汁 12.8 °Brix |
| `fao-fruit-processing-1995` | `handbook` | FAO。Fruit and Vegetable Processing，Appendix I: Fruit and vegetable processing flow-sheets，Agricultural Services Bulletin 119，1995。https://www.fao.org/4/V5030E/V5030E0y.htm（检索日期 2026-08-11） | 菠萝汁工艺分解；起始原料；粉碎、榨取、精制、调配、巴氏杀菌、灌装、冷却和包装 |
| `fao-fruit-juice-processing-2001` | `handbook` | Bates, R.P., Morris, J.R., and Crandall, P.G. Principles and Practices of Small- and Medium-scale Fruit Juice Processing. FAO Agricultural Services Bulletin 146，2001。https://www.fao.org/4/y2515e/y2515e00.htm（检索日期 2026-08-11） | 水果选择和清洗；榨取和精制；巴氏杀菌；灌装；冷却；包装；清洗和工艺设计 |
| `iso-14044-2006` | `standard` | ISO 14044:2006，Environmental management - Life cycle assessment - Requirements and guidelines，含 Amendments 1:2017 和 2:2020；2022 年确认继续有效。https://www.iso.org/standard/38498.html（检索日期 2026-08-11） | 目标和范围、清单、解释、报告、评审、分配层级及来源追溯框架 |
| `walker-et-al-2018` | `literature` | Walker, C., Beretta, C., Sanjuan, N., and Hellweg, S. Calculating the energy and water use in food processing and assessing the resulting impacts. International Journal of Life Cycle Assessment 23 (2018), 824-839. DOI: 10.1007/s11367-017-1327-6 | 单元过程能源和水计量；食品损失和运行数据；清洗记录；工厂核对；共享工厂数据的有文件分配 |
| `del-rio-2020-pineapple-lca` | `literature` | Del Rio, D.D.F. et al. Environmental Impacts Associated to Different Stages Spanning from Harvesting to Industrialization of Pineapple through Life Cycle Assessment. Applied Sciences 10 (2020), 7007. DOI: 10.3390/app10197007 | 菠萝从摇篮到工厂门口边界；水果接收、清洗、准备和包装；电、水、燃料、运输、残余物、排放及供应商/前景数据采集需求 |
| `environdec-pcr-2019-10` | `official_guidance` | International EPD System。PCR 2019:10，Prepared and preserved vegetable and fruit products, including juice，version 2.0，有效期至 2027-03-29。https://www.environdec.com/pcr-library/pcr2019-10（检索日期 2026-08-11） | CPC 214 加工果蔬（含果汁）的类别适用性；包装和下游环境声明上下文；未把不可访问文档正文作为定量来源 |
