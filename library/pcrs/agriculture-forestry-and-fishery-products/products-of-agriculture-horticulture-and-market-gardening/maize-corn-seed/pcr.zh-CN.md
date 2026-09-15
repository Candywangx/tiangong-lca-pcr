---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.maize-corn-seed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 玉米种子

## 1. 范围与适用性

本 PCR 适用于为播种而有意生产和制备的玉米（*Zea mays* L.）种子。适用范围包括开放授粉品种、自交亲本系和杂交种子类别；具体前景数据包必须声明品种或杂交种身份、世代或种子类别、适用的认证或质量声明制度以及处理状态。

前景边界始于亲本种子、育种家种子、原种或其他经授权来源种子进入所声明的繁殖周期。边界包括田间建植与管理、遗传纯度控制、收获与田间处理、适用时运至调制设施、接收、干燥、脱粒、清选、分级、可选的处理或包衣、代表性取样与质量检验、包装、储存以及合格种子出库。该路线依据 FAO 确定的主要种子加工操作，并保留适用种子制度要求的田间检验、批次控制和标签证据（`fao-seeds-toolkit-processing-2018`；`fao-seeds-toolkit-quality-2018`；`oecd-seed-schemes-2026`；`eu-cereal-seed-directive-66-402`）。

本 PCR 不包括用于食品、饲料、淀粉、油脂、发酵或其他非繁殖用途的玉米籽粒；饲草和青贮玉米；甜玉米穗；被判定不适于播种的种子批次；授权来源种子形成之前的育种和品种研发；以及包装种子出库并播种后的作物生产。在国家或制度特定法律要求更严格时，以其为准。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.maize-corn-seed |
| classification_refs | CPC 3.0：01121，玉米种子（精确分类参考；mapping 接受状态在本 PCR 之外维护） |
| covered_products | 用于播种的玉米种子，包括已声明的开放授粉、自交系、单交、三交、顶交及其他杂交种子类别 |
| excluded_products | 用于食品、饲料、工业用途或生物能源的玉米籽粒；饲草或青贮玉米；甜玉米穗；不合格或被拒收的种子；授权来源种子形成之前的育种和研发产出 |
| representative_product | 可追溯、经清选分级、质量检验、标识和包装且可供播种的玉米种子批次 |
| production_route | 授权来源种子 -> 专用制种田繁殖与收获 -> 调制与分级 -> 可选处理 -> 检验、包装、储存与出库 |
| market_state | 调制设施门口的净合格质量；已声明品种或杂交种、种子类别、认证或质量声明制度、处理状态、水分、纯度、发芽率、批次、地域和生产年份 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在调制设施门口可供播种的合格玉米种子 |
| How much | 1,000 kg 种子净质量，不含二级和三级运输包装 |
| How well | 符合批次规格和适用制度对身份、品种纯度、分析纯度、发芽率、水分、健康状态、处理、包装、封缄和标签的要求 |
| How long or cycle | 一个已声明的繁殖和调制周期，包括储存至出库；报告储存时长 |
| reference_flow_link | `treatment_testing_packaging_storage` 的输出；相关 TianGong 通用调制过程 `c1933b4e-86c6-4282-a27f-a06bf7ce85f7` 仅可在核实玉米种子范围和交换后作为身份参考 |

| 字段 | 值 |
| --- | --- |
| Reference amount（参考数量） | 1,000 kg |
| Reference product flow（参考产品流） | Corn Seeds `23f01fdc-33b5-4cc9-bd0f-b0cb39d7daa6` |
| Reference flow property（参考流属性） | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group（参考单位组） | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit（参考单位） | kg |
| Required qualifiers（必需限定信息） | 植物学物种；品种或杂交种及亲本系统；种子类别或世代；认证或质量声明制度及司法辖区；处理或未处理状态；处理时的有效成分和载量；发芽率；分析纯度；品种纯度；水分及计量基准；受监管时的健康状态；批次标识；生产地域和年份；调制场址；储存时长；包装形式 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少必需限定信息的数据包，其参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部清单结果归一化到声明出库水分下 1,000 kg 合格种子净质量；参考质量不包括托盘及二级、三级运输包装。 |
| `moisture_basis` | 种子投入、中间种子、拒收物和合格种子 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 和水分百分比 | 对同一批次同时记录质量和水分，并说明湿基或干基约定。换算时使用干质量 = 湿质量 x（1 - 湿基水分分数）；不得在不同水分下静默比较质量（`fao-seeds-toolkit-processing-2018`；`fao-seeds-toolkit-quality-2018`）。 |
| `nutrient_basis` | 肥料和有机改良剂记录 | 产品质量和养分质量 | kg 产品和 kg N、P2O5、K2O 或声明养分 | 保留配制产品质量，并依据记录的组成计算养分投入。IPCC 公式中的氮必须表示为 kg N（`ipcc-2019-managed-soils`）。 |
| `treatment_basis` | 种子处理或包衣材料 | Mass | kg 产品和 kg 有效成分 | 分别记录配制产品和有效成分，并将二者归一化至 1,000 kg 合格种子；保留处理/未处理状态和施用率。 |
| `energy_basis` | 田间、调制和储存能源 | 能量或带密度及低位热值的燃料体积 | 记录所用的 kWh、MJ、kg 或 L | 保留计量电力和购入燃料的原始单位。任何换算均须保留换算因子、来源以及采用低位或高位热值的说明。 |
| `quality_test_basis` | 发芽率、纯度、水分、健康和品种检验 | 检验结果和样品基准 | %、计数或声明的实验室单位 | 每项结果须保存取样方法、检验方法、样品量、实验室、日期和合格判据；不得用证书陈述替代基础批次结果（`fao-seeds-toolkit-quality-2018`；`eu-cereal-seed-directive-66-402`）。 |

## 5. 系统边界

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `system_boundary_multiplication_cycle` | foreground_system_boundary | 纳入从接收授权来源种子到合格玉米种子出库的全部直接控制操作，包括田间遗传纯度操作、收获、调制、检验、包装和储存。 | `fao-seeds-toolkit-processing-2018`；`oecd-seed-schemes-2026` |
| `system_boundary_upstream_inputs` | purchased_inputs | 将来源种子、肥料、改良剂、植保产品、燃料、电力、供水、处理产品和包装连接至有代表性的上游数据集；防止购入能源与直接燃烧排放重复计算。 | `eu-environmental-footprint-2021` |
| `system_boundary_field_emissions` | managed_soil_and_field_emissions | 纳入适用的合成和有机氮、作物残体及土壤有机质矿化所致的直接与间接农田土壤 N2O；在所声明方法要求时纳入石灰或尿素施用产生的 CO2 及其他实质性田间排放。 | `ipcc-2019-managed-soils` |
| `system_boundary_quality_and_traceability` | seed_quality_operations | 纳入用于确定合格批次的代表性取样、检验、被消耗样品质量、调制损耗、封缄和标签；政策制定行政活动和作物育种研发不在默认边界内。 | `fao-seeds-toolkit-quality-2018`；`eu-cereal-seed-directive-66-402` |
| `system_boundary_exclusions` | downstream_and_capital_goods | 排除设施出库后的分销、播种和商品玉米种植。资本品只有在完成文件化实质性评估后方可排除；必须披露被排除流及其估计重要性。 | `eu-environmental-footprint-2021` |
| `system_boundary_no_silent_cutoff` | completeness | 不得仅因缺少前景数值而省略必需过程、主要材料或能源投入、拒收物流或相关基本流；应使用已披露的次级估计，或将数据缺口记录供审查。 | `eu-environmental-footprint-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 授权亲本种子、育种家种子、原种或其他来源种子进入所声明的玉米种子繁殖周期；记录种子身份、世代或类别、处理状态、批次、数量、水分、来源和认证或质量声明状态 |
| starting_condition_role | 来源种子是递归边界和上游产品投入，而非无负担材料 |
| product_classification_scope | CPC 3.0 代码 01121 分类语境；语义范围为用于播种的玉米种子 |
| recursive_input_rule | 将同类别来源种子记录为可见产品投入。为所采购类别连接一个有代表性的上游玉米种子数据集，并在该连接处停止递归谱系展开；不得删除该投入或将其建模为零负担。 |
| upstream_dataset_requirement | 优先采用与地域、亲本或来源种子类别、处理状态、生产年份和声明制度相匹配的数据集。不可得时，采用最接近的已审查种子数据集，并披露代理、时间差、地域和敏感性。 |
| disclosure | 报告起始种子类别和世代、供应商或生产场址、批次、上游数据集或代理、分配方法、纳入的田间与调制阶段、排除阶段、储存时长，以及因缺少初级记录而采用的任何估计。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `seed_crop_production` | 制种田建植、遗传纯度管理与收获 | required | 始终纳入 | 前景繁殖与收获；TianGong 过程 `3849645d-260b-42d7-98b0-9e3dc41b4f67` 仅为相关玉米生产身份参考，不为本 PCR 提供数量 | 按田间交付的收获制种作物质量计量，并归一化至 1,000 kg 合格种子 |
| `field_to_conditioner_transport` | 田间至调制设施运输 | conditional | 当收获材料在分别建模的田间与调制场址之间移动时纳入；否则记录零距离和共址 | 运输收获制种作物，且不重复已计入田间或调制记录的车辆负担 | 吨公里和运输湿质量，归一化至 1,000 kg 合格种子 |
| `conditioning_and_grading` | 接收、干燥、脱粒、清选与分级 | required | 始终纳入；对路线未使用的操作记录为不适用而非零 | 将收获制种作物前景转化为清洁、分级种子批次；TianGong 过程 `c1933b4e-86c6-4282-a27f-a06bf7ce85f7` 仅为通用调制身份参考 | 按处理前清洁分级种子质量计量，并归一化至 1,000 kg 合格种子 |
| `treatment_testing_packaging_storage` | 处理、质量检验、包装、储存与出库 | required | 始终纳入检验、包装、储存和出库；仅在实际实施时纳入处理或包衣 | 最终批次合格确认与合格产品输出 | 出库时 1,000 kg 玉米种子净质量 |

### 过程：制种田建植、遗传纯度管理与收获（`seed_crop_production`）

#### 输入

##### 产品流

###### 授权来源玉米种子（`source_seed_input`）

记录用于建立繁殖作物的亲本种子、育种家种子、原种或其他授权来源种子。保留品种或杂交种、亲本系、世代、批次、处理、水分和上游数据集身份。

- 选定流：玉米种子 `23f01fdc-33b5-4cc9-bd0f-b0cb39d7daa6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放至所声明田块的实测来源种子质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 出库合格玉米种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_seed_and_lot_identity`
- 数量范围：可替换的暂定来源种子筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1,000 kg 合格玉米种子；以已审查的品种和田块特定证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 肥料和有机改良剂产品（`fertiliser_and_amendments`）

按产品分别记录配方、数量、养分组成、施用日期、田块和施用方法。不得将养分质量视为配制产品质量。

- 选定流：为实际配方选择的肥料或有机改良剂产品
- 流属性/单位：Mass / kg 产品和 kg 养分
- 数量规则：购入量经期初库存、期末库存、调拨和退料调整后，与田间施用日志核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 出库合格玉米种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_material_inputs`
- 数量范围：可替换的暂定产品总量筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2000
  - 单位：kg 产品
  - 基准：每 1,000 kg 合格玉米种子；以已审查的区域农艺证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 植保产品（`crop_protection_products`）

记录每种实际施用的配制除草剂、杀虫剂、杀菌剂、干燥剂或生物防治产品，包括有效成分比例和处理面积。

- 选定流：为实际配方选择的植保产品
- 流属性/单位：Mass / kg 配制产品和 kg 有效成分
- 数量规则：发放量与施用及退料记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 出库合格玉米种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_material_inputs`
- 数量范围：可替换的暂定配制产品筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg 配制产品
  - 基准：每 1,000 kg 合格玉米种子；以已审查的产品和区域特定证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间燃料和电力（`field_energy`）

按类型记录整地、播种、灌溉泵送、田间作业、遗传纯度作业和收获使用的燃料及计量电力。仅在研究范围要求时纳入劳务出行，并须单独记录。

- 选定流：实际燃料产品和电力供应组合
- 流属性/单位：Energy、mass 或 volume / 按记录采用 MJ、kg、L 或 kWh
- 数量规则：按所声明制种田分配的电表、发票、油罐和设备日志
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 出库合格玉米种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy`
- 数量范围：可替换的暂定田间能源筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15000
  - 单位：MJ 购入能源当量
  - 基准：每 1,000 kg 合格玉米种子；保留原始燃料和电力单位，并以已审查的区域证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的灌溉水（`supplied_irrigation_water`）

当供水或灌溉服务数据集跨越前景边界时，将所交付水记录为技术流产品。不得将同一水量重复记录为基本流取水。

- 选定流：按实际水源和处理状态选择的灌溉供水
- 流属性/单位：Volume / m3
- 数量规则：按田块计量或计算的灌溉交付水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 出库合格玉米种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_water`
- 数量范围：可替换的暂定灌溉用水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：m3
  - 基准：每 1,000 kg 合格玉米种子；以已审查的气候、产量和技术特定证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 直接取水（`direct_water_abstraction`）

按水源和环境区室记录从环境直接抽取的灌溉水。对于同一水量，应使用本行而非供应水产品流，除非二者代表不同阶段。

- 选定流：Water，按实际环境水源和区室选择
- 流属性/单位：Volume / m3
- 数量规则：计量取水量，或泵运行时间推算的取水量减去另处跨边界记录的非田间输配损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 出库合格玉米种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_water`
- 数量范围：可替换的暂定直接取水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：m3
  - 基准：每 1,000 kg 合格玉米种子；以已审查的场址水量平衡证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 田间交付的收获制种作物（`harvested_seed_crop`）

记录离开制种田的湿质量，区分玉米穗、脱粒种子及任何单独出售的非种用玉米。将批次连接到田块和收获记录。

- 选定流：收获玉米制种作物，路线特定中间产品
- 流属性/单位：Mass / 实测水分下的 kg
- 数量规则：田间出库时经校准的称重或容器质量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 出库合格玉米种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_output_and_residues`
- 数量范围：可替换的暂定收获质量筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：3000
  - 单位：kg 湿收获制种作物
  - 基准：每 1,000 kg 合格玉米种子；以已审查的路线和水分特定证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 可用非种用玉米共产品（`usable_nonseed_coproduct`）

仅当雄行籽粒、降级籽粒或其他可用玉米作为具有可证实用途的产品离开系统时，才将其单独记录为产品。否则按实际废物或残体去向分类。

- 选定流：实际非种用玉米产品
- 流属性/单位：Mass / 实测水分下的 kg
- 数量规则：按去向和产品等级计量的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 出库合格玉米种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_output_and_residues`

##### 废物流

###### 田间拒收物和移除的植株材料（`field_rejects_and_residues`）

按质量或批准的残体模型记录去杂植株、雄穗、玉米芯、茎秆和其他移除材料，同时记录水分和实际去向。留在田间的材料保留在农田土壤模型内，不作为避免产品。

- 选定流：按实际去向选择的农业残体或废物
- 流属性/单位：Mass / kg 干物质，或带水分的 kg 湿质量
- 数量规则：按去向计量或通过田间取样推导的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 出库合格玉米种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_output_and_residues`
- 数量范围：可替换的暂定残体筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：kg 干物质
  - 基准：每 1,000 kg 合格玉米种子；以已审查的田间特定残体测量替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 农田土壤一氧化二氮（`managed_soil_n2o`）

根据记录的合成和有机氮投入、归还的作物残体氮、挥发、淋溶和径流条件以及适用时的土壤有机质矿化，计算直接和间接 N2O。优先采用有效的国家或场址特定 Tier 2 或 Tier 3 因子；否则使用适用的 IPCC 方法并披露全部因子。

- 选定流：Nitrous oxide to air，农业土壤区室
- 流属性/单位：Mass / kg N2O
- 数量规则：`calc_managed_soil_n2o`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 出库合格玉米种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`ipcc-2019-managed-soils`
- 数量范围：可替换的暂定 N2O 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg N2O
  - 基准：每 1,000 kg 合格玉米种子；以已审查的区域因子和前景氮记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 石灰和尿素施用产生的二氧化碳（`liming_and_urea_co2`）

在施用石灰、白云石或尿素且所选研究方法要求田间 CO2 时纳入。不得重复计算上游肥料生产排放。

- 选定流：Carbon dioxide，按所选方法要求选择化石源或生物源分类
- 流属性/单位：Mass / kg CO2
- 数量规则：依据材料记录和适用 IPCC 或国家因子计算；仅在记录证明未使用适用材料时为零
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 出库合格玉米种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`ipcc-2019-managed-soils`

### 过程：田间至调制设施运输（`field_to_conditioner_transport`）

#### 输入

##### 产品流

###### 收获制种作物运输服务（`field_transport_service`）

记录各路线、车辆或运输方式、载荷、距离、空返假设和运输湿质量。仅当田间与调制操作经证实共址且运输能源已计入其他位置时排除本行。

- 选定流：适用运输方式和地域的货运服务
- 流属性/单位：Transport work / tkm
- 数量规则：运输吨数 x 载货距离；适用时单独建模空返
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 出库合格玉米种子
- 基准类型：运输服务（`transport_service`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_transport`
- 数量范围：可替换的暂定运输筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3000
  - 单位：tkm
  - 基准：每 1,000 kg 合格玉米种子；以已审查的路线记录替换
  - 基准类型：运输服务（`transport_service`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调制设施接收的收获制种作物（`transported_seed_crop`）

记录接收质量和水分以核对运输；该批次与田间输出相同，仅按有证据的运输损耗或水分变化调整。

- 选定流：收获玉米制种作物，路线特定中间产品
- 流属性/单位：Mass / 实测水分下的 kg
- 数量规则：接收称重与田间发运质量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 出库合格玉米种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_transport`

##### 废物流

##### 基本流

### 过程：接收、干燥、脱粒、清选与分级（`conditioning_and_grading`）

#### 输入

##### 产品流

###### 进入调制的收获制种作物（`conditioning_seed_input`）

记录加工前的批次身份、接收形态、质量、水分、杂质和库存位置。保持批次分隔，或记录受控混批。

- 选定流：收获玉米制种作物，路线特定中间产品
- 流属性/单位：Mass / 实测水分下的 kg
- 数量规则：按批次经校准的接收称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 出库合格玉米种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_mass_balance`

###### 调制用电（`conditioning_electricity`）

纳入接收、输送、干燥辅机、脱粒、清选、分级、除尘和压缩空气用电。

- 选定流：调制场址的电力供应组合
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或按文件化设备时间或处理量分配设施总表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 清洁分级种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy`
- 数量范围：可替换的暂定调制用电筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kWh
  - 基准：每 1,000 kg 清洁分级种子；以已审查的设备和场址证据替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥燃料或热（`drying_energy`）

纳入用于降低种子水分的购入燃料或热。记录入口和出口水分，并通过记录温度和停留时间控制来保护种子活力（`fao-seeds-toolkit-processing-2018`；`fao-seeds-toolkit-quality-2018`）。

- 选定流：实际燃料或供热
- 流属性/单位：Energy、mass 或 volume / 按记录采用 MJ、kg、L 或 kWh
- 数量规则：按批次或周期计量，或经购入与库存核对的干燥能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 清洁分级种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy`
- 数量范围：可替换的暂定干燥能源筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：MJ 购入能源
  - 基准：每 1,000 kg 清洁分级种子；以已审查的入口水分和干燥设备证据替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 最终处理和包装前的清洁分级种子（`clean_graded_seed`）

记录干燥、脱粒、清选和分级后的清洁种子质量、水分、等级和批次。该中间产品与进入的田间批次或文件化混批保持关联。

- 选定流：清洁分级玉米种子，路线特定中间产品
- 流属性/单位：Mass / 实测水分下的 kg
- 数量规则：经校准称重和库存核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 出库合格玉米种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_mass_balance`

##### 废物流

###### 调制筛余物和拒收种子（`conditioning_rejects`）

按实测质量和实际去向记录苞叶、玉米芯、粉尘、破碎种子、过小或过大组分、异物和不合格种子。销售的副产品应重新归为产品输出并应用分配规则。

- 选定流：按实际去向选择的种子调制残余物或废物
- 流属性/单位：Mass / 适用时按实测水分的 kg
- 数量规则：与调制质量平衡核对的容器或去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 清洁分级种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_mass_balance`
- 数量范围：可替换的暂定调制拒收物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 清洁分级种子；以已审查的批次和设备证据替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 未捕集调制粉尘（`conditioning_dust`）

记录除尘之后的实测或方法建模颗粒物排放。捕集粉尘应归入 `conditioning_rejects`，不得同时在本行排放。

- 选定流：Particulate matter to air，按测量方法选择粒径组分和区室
- 流属性/单位：Mass / kg
- 数量规则：烟道或作业排风测量、批准因子，或在有文件化完全封闭回收和质量平衡证据时为零
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 清洁分级种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_mass_balance`

### 过程：处理、质量检验、包装、储存与出库（`treatment_testing_packaging_storage`）

#### 输入

##### 产品流

###### 进入最终制备的清洁分级种子（`final_preparation_seed_input`）

记录进入处理的批次质量和水分；对于未处理种子，则记录进入检验和包装的批次质量和水分。

- 选定流：清洁分级玉米种子，路线特定中间产品
- 流属性/单位：Mass / 实测水分下的 kg
- 数量规则：经校准称重和库存核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 出库合格玉米种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_mass_balance`

###### 种子处理和包衣产品（`seed_treatment_products`）

仅纳入实际施用的产品。记录配方、有效成分、载体水、施用率、批号、处理质量及保留的安全或法规文件；未处理种子以证据记录为零。

- 选定流：实际处理剂、着色剂、接种剂、聚合物或包衣产品
- 流属性/单位：Mass / kg 配制产品和 kg 有效成分
- 数量规则：发放量减退料和剩余库存，并与施药设备记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 经处理合格玉米种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_and_packaging_inputs`
- 数量范围：可替换的暂定种子处理筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg 配制产品
  - 基准：每 1,000 kg 合格玉米种子；以已审查的产品标签和施药设备证据替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级包装和标签（`primary_packaging`）

记录随种子交付的袋、内衬、标牌、封签及其他包装。托盘及二级或三级包装仍为清单投入，但不计入参考产品质量。

- 选定流：按材料和形式区分的实际包装材料
- 流属性/单位：Mass 和 item count / kg 和 item
- 数量规则：包装发放量减退回及未用库存，并与包装件数核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 出库合格玉米种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_and_packaging_inputs`
- 数量范围：可替换的暂定初级包装筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg 包装
  - 基准：每 1,000 kg 合格玉米种子；以已审查的物料清单和包装件证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 最终制备和储存用电（`final_electricity`）

纳入处理、包衣、检验、包装、通风、气候控制、分配至储存的照明以及出库搬运用电。

- 选定流：最终制备场址的电力供应组合
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或按文件化运行时间、面积或处理量分配设施总表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格玉米种子及所声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_energy_and_storage`
- 数量范围：可替换的暂定最终用电筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kWh
  - 基准：每 1,000 kg 合格玉米种子至出库；以已审查的场址和储存时长证据替换
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格包装玉米种子（`saleable_maize_seed`）

本行为定量参考输出。必须将其连接至所声明批次以及质量检验、处理、包装、储存和出库记录。

- 选定流：玉米种子 `23f01fdc-33b5-4cc9-bd0f-b0cb39d7daa6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据实测合格净输出，通过 `calc_normalize_reference_output` 归一化后设为 1,000 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：出库时 1,000 kg 合格玉米种子净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_final_mass_balance`

##### 废物流

###### 质量检验样品和最终不合格种子（`final_rejects_and_samples`）

按实际去向记录破坏性检验样品、洒落种子、不合格批次或组分、残余处理混合物和包装废物。退回或返工种子保持为可见内部流，不自动归为废物。

- 选定流：按实际去向选择的种子或包装废物
- 流属性/单位：Mass / kg
- 数量规则：与最终库存核对的实测样品、拒收物、洒落物、残余物和废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 出库合格玉米种子
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_mass_balance`
- 数量范围：可替换的暂定最终拒收物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg
  - 基准：每 1,000 kg 合格玉米种子；以已审查的批次记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | separately_measured_fields_lots_and_operations | 在记录允许直接归属时，通过细分田块、亲本行、批次、调制线、储存区和独立计量操作来避免分配。 | `eu-environmental-footprint-2021` |
| `allocation_recycling_internal_flows` | reprocessed_seed_and_internal_returns | 将返工种子、回收处理混合物和内部包装退回作为显式内部流返回过程；没有经证实的外部功能时不得给予避免产品抵扣。 | `eu-environmental-footprint-2021` |
| `allocation_physical_relationship` | unavoidable_joint_field_or_conditioning_burdens | 无法实施细分或系统扩展时，采用有证据的因果物理关系分配。仅在干质量合理代表共同过程驱动因素时采用干质量分配，并保留水分测量。 | `eu-environmental-footprint-2021` |
| `allocation_economic_fallback` | co_products_without_causal_physical_relationship | 若不存在可辩护的物理关系，则使用分离点同期价格形成的文件化经济关系；报告价格基准和期间，并检验价格波动敏感性。 | `eu-environmental-footprint-2021` |
| `allocation_residue_fate` | residues_rejects_and_nonseed_maize | 仅在材料具有经证实的外部功能和去向时视为共产品。废物处理接收实测废物流；留在田间的材料保留于田间过程，不作为避免产品抵扣。 | `eu-environmental-footprint-2021` |
| `allocation_disclosure` | all_multifunctional_processes | 报告所选层级步骤、各分离点的产品和废物、数量与水分、分配因子、价格或物理关系以及敏感性结果。 | `eu-environmental-footprint-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_seed_and_lot_identity` | `seed_crop_production` | 来源种子和批次身份 | 采购、证书、发放和播种记录 | 供应商；批次；物种；品种或杂交种；亲本系；世代或类别；制度；处理；质量；水分；田块；播种日期；上游数据集 | 将接收、发放、退回和播种量与田块图核对 | kg 和水分百分比 | 每批次和田块 | 完整声明繁殖周期 | 所有纳入制种田 | 按批次和田块汇总来源种子质量；不混合不同类别的身份 | 供应商记录；证书或质量声明；校准秤；田块图；核对记录 |
| `cp_field_material_inputs` | `seed_crop_production` | 肥料、改良剂和植保投入 | 发票、库存、配方和施用记录 | 产品；配方；有效成分或养分比例；数量；库存变动；田块；处理面积；日期；方法 | 将采购和库存与施用日志核对 | kg 产品；kg 养分；kg 有效成分；ha | 每次施用和月度库存结算 | 完整声明繁殖周期 | 所有纳入田块 | 按产品和田块汇总，计算养分或有效成分质量，再按合格输出归一化 | 发票；批次标签；库存台账；校准施用设备；田间日志 |
| `cp_field_energy` | `seed_crop_production` | 田间燃料和电力 | 燃料发放、发票、仪表和设备工时记录 | 燃料类型；数量；仪表读数；设备；作业；田块；日期；分配驱动因素 | 直接计量或油罐记录；按实测工时或田块面积分配共享使用并说明理由 | L；kg；MJ；kWh；h | 每项作业、交付或仪表期间 | 完整声明繁殖周期 | 所有纳入田块和直接控制设备 | 按能源载体和作业汇总，保留原始单位，按合格输出归一化 | 发票；仪表校准；油罐核对；设备日志 |
| `cp_irrigation_water` | `seed_crop_production` | 供应或直接取用的灌溉水 | 仪表、水泵、水源和灌溉事件记录 | 水源；区室；交付或取水量；泵运行时间；流量；田块；日期；损失边界 | 优先校准仪表；否则采用运行时间 x 经核实流量 | m3 | 每次灌溉事件或仪表期间 | 完整灌溉季 | 所有纳入灌溉田块 | 按水源和田块汇总；禁止在产品供水和基本流取水之间重复 | 仪表校准；泵测试；取水权或供应商发票；田间日志 |
| `cp_field_output_and_residues` | `seed_crop_production` | 收获制种作物、共产品、拒收物和残体 | 称重、容器、田间取样、水分和去向记录 | 田块；批次；输出类型；湿质量；水分；干物质；去向；日期 | 校准秤；对留田残体采用批准的分层田间取样 | kg 湿质量；kg 干物质；水分百分比 | 每个收获载荷和残体调查 | 完整周期的收获期 | 所有纳入田块 | 按批次核对田间输出和去向；明确换算水分基准；按合格输出归一化 | 称重单；水分检验；田间取样计划；去向回执 |
| `cp_field_transport` | `field_to_conditioner_transport` | 收获种子运输 | 发运、接收、路线、载荷和燃料或货运记录 | 批次；湿质量；发运水分；接收质量；接收水分；起点；终点；方式；车辆；载货距离；空返 | 地磅和路线记录；距离来自经核实路线 | kg；t；km；tkm | 每个载荷 | 周期内全部田间至调制运输 | 所有纳入路线 | 按载荷和路线计算 tkm；水分调整后核对发运和接收 | 称重单；提货单；路线证据；接收记录 |
| `cp_conditioning_mass_balance` | `conditioning_and_grading` | 种子投入、清洁输出、拒收物、粉尘和库存变化 | 称重、水分、料仓、批次、拒收物和去向记录 | 批次；操作；投入质量和水分；输出质量和水分；拒收类型；捕集粉尘；未捕集粉尘测量；期初和期末库存 | 校准秤和料仓库存；直接粉尘测量或批准因子 | kg；水分百分比 | 每批次并完成周期库存结算 | 完整调制周期 | 所有纳入调制线和仓库 | 在测量不确定度内核对水分调整投入 = 产品 + 废物 + 样品 + 库存变化 | 秤校准；水分检验；批次表；废物回执；除尘记录 |
| `cp_conditioning_energy` | `conditioning_and_grading` | 电力、燃料和热 | 仪表、发票、燃料库存、干燥机和设备工时记录 | 载体；数量；仪表期间；干燥入口和出口水分；温度；运行时间；处理量；分配驱动因素 | 优先分表计量；否则文件化分配设施仪表或燃料库存 | kWh；MJ；kg；L；h | 每批次、交付或仪表期间 | 完整调制周期 | 所有纳入调制设备 | 按载体汇总；按因果实测驱动因素分配共享能源；归一化至清洁分级种子 | 仪表校准；发票；燃料核对；干燥日志；设备工时 |
| `cp_treatment_and_packaging_inputs` | `treatment_testing_packaging_storage` | 处理、包衣、包装和标签投入 | 配方、批次、发放、退回、物料清单和包装件记录 | 产品；有效比例；发放和退回数量；处理质量；包装材料；单件质量；件数；批次 | 将库存变动与施药和包装记录核对 | kg 产品；kg 有效成分；kg 包装；item | 每个处理和包装批次 | 完整最终制备周期 | 所有纳入处理和包装线 | 按材料和批次汇总；计算施用率；按合格输出归一化 | 产品标签；批次证书；校准施药设备；库存台账；包装规格 |
| `cp_final_energy_and_storage` | `treatment_testing_packaging_storage` | 处理、检验、包装、储存和出库能源 | 分表、设施总表、设备工时、占用、温度和库存记录 | 载体；仪表期间；设备；运行时间；储存质量；面积；储存开始和出库日期；温控状态 | 优先分表；否则采用文件化因果分配 | kWh；MJ；kg；L；day | 仪表期间和每批次出库 | 从最终制备至出库 | 所有纳入最终制备和储存区域 | 按实测设备时间、处理量或质量-天分配共享能源；披露驱动因素 | 仪表校准；发票；设备日志；仓库库存；出库记录 |
| `cp_final_mass_balance` | `treatment_testing_packaging_storage` | 合格种子、样品、拒收物、洒落物、退回物和库存 | 称重、包装件数、净含量、样品、拒收、返工和库存记录 | 批次；投入质量和水分；包装件；单件净质量；合格质量；样品；拒收；返工；期初和期末库存 | 校准秤和包装净含量检查 | kg；item；水分百分比 | 每批次和批次结算 | 完整最终制备周期 | 所有纳入最终制备线和仓库 | 经文件化水分调整后核对投入 = 合格输出 + 样品 + 拒收物 + 库存变化 | 秤校准；包装报告；样品登记；拒收日志；库存核对 |
| `cp_quality_tests` | `treatment_testing_packaging_storage` | 批次身份和质量 | 取样、实验室、检验、证书、封签和标签记录 | 批次；取样方法；样品量；检验方法；实验室；日期；发芽率；分析纯度；品种纯度；水分；健康；结果；判据；证书；封签；标签 | 代表性批次取样和合格实验室或官方制度程序 | %；count；声明检验单位 | 每个合格批次和所需田间检验 | 从田间检验至出库 | 每个纳入合格批次及其来源田块 | 不得跨批次平均而掩盖不合格判据；保留单项结果和制度决定 | 取样记录；实验室报告；田间检验；证书或质量声明；标签和封签（`fao-seeds-toolkit-quality-2018`；`oecd-seed-schemes-2026`；`eu-cereal-seed-directive-66-402`） |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_output` | all inventory rows | 归一化因子 = 1,000 kg / 实测合格种子净输出；在任何显式水分基准换算后，将周期清单量乘以该因子 | 实测合格种子质量；清单量；换算时的水分 | 每 1,000 kg 合格种子的数量 |  |
| `calc_moisture_conversion` | seed and residue mass comparisons | 干质量 = 湿质量 x（1 - 湿基水分分数）；换回声明湿基时必须给出目标水分分数 | 湿质量；湿基水分分数；使用时的目标水分 | 干质量或明确换算后的湿质量 | `fao-seeds-toolkit-processing-2018`；`fao-seeds-toolkit-quality-2018` |
| `calc_nutrient_and_active_mass` | fertiliser and crop-protection products | 养分或有效成分质量 = 配制产品质量 x 声明质量分数；配制产品质量保留为单独清单量 | 配制产品质量；经核实组成 | kg 养分或有效成分和 kg 配制产品 |  |
| `calc_transport_work` | field-to-conditioning transport | 运输周转量 = 各载荷的运输湿吨数 x 载货距离 km 之和；适用时单独建模空返 | 载荷质量；距离；运输方式；空返 | 每 1,000 kg 合格种子的 tkm |  |
| `calc_managed_soil_n2o` | managed-soil direct and indirect N2O | 对合成和有机氮、归还残体氮、矿化土壤氮、挥发以及淋溶或径流项采用所声明的 IPCC Tier 1、Tier 2、Tier 3 或批准国家方法；以 44/28 将 N2O-N 转为 N2O，并按参考输出归一化 | 各来源 kg N；残体 N；适用分数和排放因子；气候或土壤条件；合格输出 | 每 1,000 kg 合格种子的 kg N2O | `ipcc-2019-managed-soils` |
| `calc_conditioning_mass_balance` | conditioning and final preparation | 水分调整投入 = 合格及中间产品输出 + 共产品 + 废物 + 样品 + 库存变化；报告残差并与综合测量不确定度比较 | 批次质量；水分；库存；样品；拒收物；共产品 | 质量平衡残差和闭合百分比 |  |
| `calc_allocation_factor` | unavoidable multifunctionality | 各输出的所选分配因子 = 其声明物理或经济驱动量 / 分离点所有共产品该驱动量之和；未分配废物单独报告 | 共产品数量和水分；因果驱动量或价格；分离点 | 被分配产品的分配因子之和为 1 | `eu-environmental-footprint-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_lot_traceability` | all seed flows | 保持从来源种子批次和田块，经调制批次、质量样品、处理、包装批次至出库的关联；记录受控混批。 | 批次台账、田块图、批次记录、样品登记、证书或质量声明、标签和出库记录 |
| `dq_measurement` | mass, moisture, water, energy, and application records | 使用校准仪器或文件化核实方法；说明精度、校准日期、缺失数据处理和水分约定。 | 校准证书、仪表日志、实验室方法和数据缺口登记 |
| `dq_temporal` | foreground campaign | 采用覆盖完整声明繁殖、调制和储存期间的记录。部分记录必须具有文件化外推和不确定性评估。 | 周期日历、发票、仪表期间、库存结算和出库记录 |
| `dq_geographic_technology` | fields, conditioning, and upstream datasets | 报告地域、灌溉状态、制种系统、杂交或开放授粉路线、设备、干燥技术、处理和储存控制；评估代理的代表性。 | 田间和设施元数据及代理比较 |
| `dq_completeness` | required processes and important flows | 核对每个必需过程的材料和能源记录；缺少主要投入、拒收物、残体、直接排放或条件性操作属于数据缺口，而非零。 | 质量和能源平衡、完整性检查表及未解决数据登记（`eu-environmental-footprint-2021`） |
| `dq_quality_conformance` | saleable lot | 保留身份、品种纯度、分析纯度、发芽率、水分、健康、处理、包装、封缄和标签的实际批次结果及适用判据。 | 实验室报告、田间检验、证书或质量声明和标签（`fao-seeds-toolkit-quality-2018`；`oecd-seed-schemes-2026`；`eu-cereal-seed-directive-66-402`） |
| `dq_reasoned_estimates` | provisional QA ranges | 将每个 `reasoned_estimate` 范围作为可替换筛选辅助，而非默认清单值或符合性限值。将前景数值与范围比较，调查实质性超出，并在已审查证据可得时替换范围。 | 前景记录、调查说明和后续已审查证据 |
| `dq_method_consistency` | emissions and allocation | 保存方法版本、因子、单位、区室、分配层级步骤和敏感性假设；防止上游与直接排放重复计算。 | 计算工作簿或机器可读规则轨迹、因子来源和分配记录 |

## 9. 校验规则

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_identity_and_scope` | product_identity | 确认产品为用于播种的 *Zea mays* 种子，并确认 CPC 分类语境、品种或杂交种、种子类别或世代、制度及司法辖区、处理状态、批次、地域、生产年份和调制场址；拒绝食品、饲料、工业、饲草、青贮、甜玉米或不合格种子范围。 | `oecd-seed-schemes-2026`；`eu-cereal-seed-directive-66-402` |
| `validate_reference_flow` | reference_product | 确认声明出库水分下恰好 1,000 kg 净合格 `Corn Seeds` 流 `23f01fdc-33b5-4cc9-bd0f-b0cb39d7daa6`，使用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg。 |  |
| `validate_process_coverage` | foreground_system | 确认所有必需过程均存在，每项条件性操作均有证据声明纳入或不适用，并排除下游作物种植。 | `fao-seeds-toolkit-processing-2018` |
| `validate_recursion_boundary` | source_seed_input | 确认同类别来源种子保持为非零产品投入，并连接至有代表性的上游数据集或披露的代理，不进行递归删除或重复计算。 | `eu-environmental-footprint-2021` |
| `validate_mass_balance` | field_conditioning_and_final_preparation | 确认水分约定一致，每个批次或周期的质量平衡在综合测量不确定度内闭合；调查无法解释的残差，不得以负废物或负库存变化强制闭合。 | `fao-seeds-toolkit-processing-2018`；`fao-seeds-toolkit-quality-2018` |
| `validate_field_emissions` | managed_soil_and_field_emissions | 确认记录氮投入、残体去向、挥发和淋溶条件、适用因子、44/28 换算、区室以及所选 IPCC 或国家 tier；确认石灰和尿素 CO2 的适用性且无上游重复计算。 | `ipcc-2019-managed-soils` |
| `validate_seed_quality` | saleable_lot | 确认代表性取样和批次特定身份、纯度、发芽率、水分、健康、处理、封缄和标签证据满足所声明适用制度；未经说明不得在其司法辖区外套用 EU 或 OECD 阈值。 | `fao-seeds-toolkit-quality-2018`；`oecd-seed-schemes-2026`；`eu-cereal-seed-directive-66-402` |
| `validate_treatment_and_packaging` | final_preparation | 确认处理产品、有效成分、载量、处理质量、包装材料、储存时长和样品或不合格品去向与库存和批次记录核对；未处理种子须有明确证据。 | `fao-seeds-toolkit-processing-2018` |
| `validate_allocation` | multifunctional_processes | 确认先尝试细分，每个共产品具有经证实的功能和去向，各分离点分配因子之和为 1，废物不获抵扣，并披露物理或经济备选方法及敏感性。 | `eu-environmental-footprint-2021` |
| `validate_data_quality_and_estimates` | dataset_readiness | 确认完整时间覆盖、校准、地域和技术代表性、数据缺口处理及不确定性披露。`reasoned_estimate` 范围仅用于筛选记录，不得替代所需前景数量，也不得未经审查成为发布关键允许范围。 | `eu-environmental-footprint-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 归一化至调制设施门口合格种子批次的前景玉米种子生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 仅当产品身份、种子类别、地域、路线、处理、质量制度、水分和时间代表性兼容且全部校验规则通过时，作为玉米种子投入的已审查上游数据集或用于比较模型 |
| excluded_use | 直接代表用于食品、饲料、工业或生物能源的玉米籽粒；饲草或青贮玉米；播种后的作物种植；不合格种子；以处理种子数据集代表未处理种子或反之；未经文件化代理评估的实质不同地域或生产技术 |
| required_metadata | PCR id 和版本状态；CPC 分类参考；参考流 UUID；物种；品种或杂交种及亲本系统；种子类别或世代；制度和司法辖区；处理；批次；质量结果和方法；地域；生产年份；田间和调制路线；灌溉；储存时长；包装；来源种子上游数据集；过程覆盖；分配；数据源 |
| required_quality_disclosure | 初级数据覆盖；校准和取样证据；质量平衡残差；缺失数据和代理处理；代表性；IPCC 或国家排放 tier 及因子；分配层级和敏感性；每项剩余 `reasoned_estimate`；不确定性；排除项及其估计重要性 |
| update_trigger | 新增或变化的种子法律或制度；PCR 范围或参考流变化；IPCC 或国家田间排放方法修订；杂交路线、灌溉、干燥、处理、包装、储存、地域、技术、分配或上游来源种子数据集发生实质变化；前景证据可收窄或替换暂定范围 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-seeds-toolkit-processing-2018` | 官方指南（`official_guidance`） | 联合国粮食及农业组织，*Seeds Toolkit — Module 2: Seed processing: principles, equipment and practice*（2018），https://openknowledge.fao.org/server/api/core/bitstreams/2019283b-6271-4b2e-82c0-19ac6256c591/content（检索日期 2026-08-07） | 种子加工过程图；接收、干燥、清选、分级、处理、包装、储存、追溯、水分和质量平衡控制 |
| `fao-seeds-toolkit-quality-2018` | 官方指南（`official_guidance`） | 联合国粮食及农业组织，*Seeds Toolkit — Module 3: Seed quality assurance*（2018），https://openknowledge.fao.org/server/api/core/bitstreams/b601435e-9c03-4ca5-8927-9f712418ec38/content（检索日期 2026-08-07） | 代表性取样；物理和品种纯度；发芽率、水分、生活力、活力和健康检验；实验室记录和样品追溯 |
| `oecd-seed-schemes-2026` | 标准（`standard`） | OECD，*OECD Seed Schemes: Rules and Regulations 2026*，包括 Maize and Sorghum Seed Scheme，https://www.oecd.org/content/dam/oecd/en/topics/policy-sub-issues/seeds/rules-and-regulation-eng.pdf（检索日期 2026-08-07） | 来源种子谱系、品种身份和纯度、田间检验、后控、批次认证、封缄和标签 |
| `eu-cereal-seed-directive-66-402` | 标准（`standard`） | 欧盟理事会关于谷类种子销售的 Directive 66/402/EEC，官方合并文本，https://eur-lex.europa.eu/eli/dir/1966/402/oj/eng（检索日期 2026-08-07） | 适用 EU 范围内的玉米田间检验和去雄语境；官方取样；身份、分析纯度、发芽率、包装、封缄和标签证据 |
| `ipcc-2019-managed-soils` | 方法因子（`method_factor`） | IPCC，*2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories*，Volume 4，Chapter 11：N2O Emissions from Managed Soils, and CO2 Emissions from Lime and Urea Application，https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf（检索日期 2026-08-07） | 农田土壤直接和间接 N2O 计算；氮活动数据；挥发和淋溶项；石灰和尿素 CO2 适用性 |
| `eu-environmental-footprint-2021` | 官方指南（`official_guidance`） | 欧盟委员会，Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods，官方合并文本，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30（检索日期 2026-08-07） | 边界完整性、上游和次级数据披露、分配层级、代表性、数据质量、排除和敏感性 |
