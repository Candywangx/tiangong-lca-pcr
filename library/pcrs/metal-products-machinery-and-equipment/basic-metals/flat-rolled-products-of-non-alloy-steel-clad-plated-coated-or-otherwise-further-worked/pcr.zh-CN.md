---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-non-alloy-steel-clad-plated-coated-or-otherwise-further-worked
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 经包覆、镀层、涂层或其他进一步加工的非合金钢平板轧材

## 1. 范围与适用性

本 PCR 适用于在生产场址大门处交付的非合金钢平板轧材，其交付状态由包覆、金属镀覆或涂覆、有机涂覆，或其他已声明的进一步加工形成。只要基材仍为非合金钢，且涂镀层或进一步加工状态构成所售产品的一部分，板材、带材、中厚板和卷材均属于本 PCR 范围，不受宽度限制。

前景边界始于接收热轧或冷轧非合金钢平板基材，终于生产场址大门处验收合格的成品。边界包括适用的表面制备、热处理、金属涂镀、有机涂覆、金属包覆、机械进一步加工、精整、包装、场内废水处理、直接排放和产生的废物。钢基材、涂层金属、涂料、化学品、燃料、电力、水和包装的供应商门口生产通过相连的上游数据集表示。

不包括不锈钢或其他合金钢基材产品、硅电工钢、高速钢、仅经热轧或冷轧且未进一步加工即销售的平板钢材、已丧失平板轧材属性的制造部件、下游安装和使用以及生命周期末期。本 PCR 不规定特定产品标准或涂层体系；前景数据包必须识别实际路线和每一层确切的保留层。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-non-alloy-steel-clad-plated-coated-or-otherwise-further-worked |
| classification_refs | CPC 3.0：41231，语义范围精确匹配；来源 `un-cpc-3-0-2025` |
| covered_products | 经包覆、金属镀覆或涂覆、有机涂覆或其他已声明进一步加工后销售的非合金钢平板轧材，包括涂镀层板材、带材、中厚板和卷材 |
| excluded_products | 不锈钢或其他合金钢基材产品；硅电工钢和高速钢；仅热轧或冷轧、未经进一步加工的平板钢材；下游制造部件；使用阶段和生命周期末期 |
| representative_product | 已声明基材钢号、尺寸、涂镀或包覆体系、进一步加工路线、表面处理和交付形态的成品非合金钢平板轧材 |
| production_route | 接收平板钢基材后，按实际情况组合表面制备、热处理、金属涂镀、有机涂覆、金属包覆、机械进一步加工、精整和包装 |
| market_state | 生产场址大门处的干燥成品板材、带材、中厚板或卷材；产品质量包括保留的金属层、有机层、钝化层和防护油层；运输包装单独报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在生产场址大门处提供处于已声明包覆、镀层、涂层或其他进一步加工状态的特定非合金钢平板轧材 |
| How much | 1,000 kg 合格产品，包括所有保留层，不包括运输包装 |
| How well | 符合已声明的钢号、尺寸、涂镀或包覆材料及单位面积质量或厚度、单/双面状态、表面处理、机械状态和验收规范 |
| How long or cycle | 不适用于工厂门口声明单位；不隐含使用寿命 |
| reference_flow_link | `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 经包覆、镀层、涂层或其他进一步加工的非合金钢平板轧材（Tiangong UUID 未解决） |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 非合金钢钢号；来料基材状态及供应商数据集；板材/带材/中厚板/卷材形态；宽度和厚度；包覆、镀层、涂层或进一步加工路线；每一种保留层材料；每面涂层单位面积质量或厚度及单/双面状态；钝化和防护油；生产场址和地域；生产期间；合格产品规范；包装配置；分配与再生利用方法 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和钢制中间体 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用校准秤确定合格产品质量，或由实测尺寸和经核实密度计算。纳入保留的涂镀层、包覆层、钝化层、涂漆层和防护油层；排除运输包装。所有清单行归一化至 1,000 kg 合格产品。 |
| `coating_mass` | 金属层、有机层、钝化层和包覆层 | 质量；报告时可附单位面积质量或厚度 | kg 保留层，并声明 g/m2 或 μm 结果 | 由经核对的镀浴或涂料使用量与产品测量确定保留层质量。声明数值是两面合计还是单面值，并保留换算所用面积、面别、密度和测试方法。 |
| `electricity_energy` | 交流电 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表 kWh 原始值，按 1 kWh = 3.6 MJ 换算。声明地域、电压、供应商或市场基础、交付边界和共用电表分配。 |
| `gas_volume` | 气态天然气 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按已声明温度、压力和含湿基准报告计量体积。能源或化石碳计算使用时，保留供应商热值。 |
| `mass_balance` | 基材、保留层、合格产品、废钢、残余物和库存变化 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对生产期间进行干质量核对。解释“基材加保留添加物”与“合格产品加废次品、废钢、残余物、排放和库存变化”之间的差异。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在本前景数据包所表示的涂镀、包覆或进一步加工之前接收的热轧或冷轧非合金钢平板轧材 |
| starting_condition_role | 前景转化的上游产品投入和物理起始状态 |
| product_classification_scope | 交付状态为经包覆、镀层、涂层或其他进一步加工的非合金钢平板轧材；分类仅为辅助语境，不能替代已声明的产品属性 |
| recursive_input_rule | 若投入已属于本产品类别，将其记录为同类供应商门口投入，声明已有保留层和起始状态，不在前景边界内重复供应商的涂镀或进一步加工阶段 |
| upstream_dataset_requirement | 对钢基材、每一种外购材料、化学品、燃料、电力供应、水供应、包装组件和外部处理服务链接地域与技术均有代表性的供应商门口数据集 |
| disclosure | 声明纳入与排除的路线步骤、场内与外部处理、共用公用工程、纳入的非正常运行、截断、分配选择、再生料含量/生命周期末期方法，以及供应商数据集与前景产品状态的不匹配 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start_and_end` | foreground_product_system | 从接收非合金钢平板轧材开始，到生产场址大门处验收合格并包装的产品结束；纳入两者之间每一项适用转化和场内辅助作业。 | `worldsteel-lci-methodology-2017` |
| `boundary_route_condition` | conditional_processes | 仅在满足过程图纳入条件时纳入相应条件过程；只有证据表明路线或交换不存在时方可记录为零。 | `eu-jrc-fmp-bref-2022` |
| `boundary_energy_and_material_completeness` | all_foreground_processes | 分别记录每一种能源载体，并将每一种具有物质性或环境相关性的材料、化学品、废物流和基本排放记录为原子交换；记录排除项及其依据。 | `worldsteel-lci-methodology-2017` |
| `boundary_upstream_and_double_counting` | linked_background_datasets | 通过相连数据集纳入上游供应，并检查其边界，避免钢生产、涂镀、再生利用或废物处理重复计入。 | `worldsteel-lci-methodology-2017` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `substrate_preparation` | 基材接收与表面制备 | `required` | 始终纳入接收、检验和实际实施的制备；酸洗与碱性脱脂行按路线有条件纳入 | 前景制备 | 每 1,000 kg 合格产品 |
| `thermal_conditioning` | 热处理与固化加热 | `conditional` | 生产线对带钢进行退火、加热、干燥、固化或其他热处理时纳入 | 前景热加工 | 每 1,000 kg 通过本过程的合格产品 |
| `metallic_coating` | 金属镀覆或涂覆 | `conditional` | 施加锌、铝、锡或其他金属层时纳入；本清单仅为锌、铝和锡提供原子行 | 前景金属涂镀 | 每 1,000 kg 合格金属涂镀产品 |
| `organic_coating` | 有机卷材涂覆 | `conditional` | 施加保留的有机涂料层时纳入；仅使用实际消耗的确切配方行 | 前景有机涂覆 | 每 1,000 kg 合格有机涂覆产品 |
| `metal_cladding` | 金属包覆 | `conditional` | 将独立的不锈钢板或铝板与非合金钢基材结合时纳入 | 前景包覆 | 每 1,000 kg 合格包覆产品 |
| `mechanical_further_working` | 机械进一步加工 | `conditional` | 平整、拉矫、压瓦、切边或其他已声明机械操作改变所售产品时纳入 | 前景机械加工 | 每 1,000 kg 合格进一步加工产品 |
| `finishing_packaging` | 最终精整、检验与包装 | `required` | 始终纳入验收、产品称量、施加的防护油和实际随货包装组件 | 前景最终处理 | 1,000 kg 合格参考产品 |
| `wastewater_treatment` | 场内工艺废水处理 | `conditional` | 工艺废水在报告场址内处理时纳入；否则在产生过程中记录确切外部处理服务 | 前景辅助处理 | 每 m3 工艺废水处理量并归一化至参考流 |

### 过程：基材接收与表面制备（`substrate_preparation`）

#### 输入

##### 产品流

###### 非合金钢平板基材（`substrate_input`）

实际接收的热轧或冷轧基材跨越前景边界，并与合格产品和损失核对。

- 选定流：非合金钢平板基材，已声明热轧或冷轧状态（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分配至代表性生产的接收称量质量，归一化至合格产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`worldsteel-lci-methodology-2017`

###### 制备电力（`prep_electricity`）

记录分配至本过程的入口输送、清洗、刷洗、漂洗、泵送、干燥和抽风用交流电。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：计量或有记录分配的电力，由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`
- 来源：`worldsteel-lci-methodology-2017`

###### 酸洗用盐酸（`prep_hydrochloric_acid`）

仅在以盐酸去除热轧氧化皮或其他已声明表面状态时纳入，并记录外购溶液及其浓度。

- 选定流：盐酸水溶液，浓度已声明（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：经库存修正的生产线净领用酸液；无盐酸酸洗时方可为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_chemicals`
- 来源：`eu-jrc-fmp-bref-2022`

###### 碱性脱脂用氢氧化钠（`prep_sodium_hydroxide`）

实施碱性脱脂时纳入氢氧化钠，并将采购溶液浓度、供应状态和补加记录保留为前景限定信息。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：经库存修正的氢氧化钠溶液净领用量；无碱性脱脂时方可为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_chemicals`
- 来源：`eu-jrc-fmp-bref-2022`

###### 制备用工艺水（`prep_water`）

记录制备槽、漂洗、刷洗和洗涤器使用的外部补给水；单独计量的闭路循环水不作为新投入。将水源、水质、场址供水边界和密度换算条件保留为前景限定信息。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分配至基材制备的计量或槽罐平衡补给水，以质量报告；若由实测体积换算，应采用申报条件下有文件支持的密度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_effluent`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已制备基材（`prepared_substrate`）

将转入下一前景操作的干燥已制备带钢记录为内部中间体。

- 选定流：已制备非合金钢平板基材（前景内部流；Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：制备过程转出的称量或质量平衡干燥输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

###### 废盐酸酸洗液（`spent_pickling_liquor`）

使用盐酸酸洗时，将移出的酸性废液作为单独废物流记录。

- 选定流：钢材酸洗废盐酸液（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量或由体积与密度计算的槽液移出量，扣除返回再生液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`eu-jrc-fmp-bref-2022`

###### 废碱性脱脂液（`spent_degreasing_solution`）

将移出的碱性脱脂液与漂洗废水分开记录。

- 选定流：钢材脱脂废碱液（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量或由体积与密度计算的生产线移出液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`eu-jrc-fmp-bref-2022`

###### 基材制备废水（`prep_wastewater`）

记录已声明制备线在场内或外部处理前的合并水流，不与无关场内污水合并。

- 选定流：平板钢漂洗与脱脂废水（Tiangong UUID 未解决）
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3；单位组 体积 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：从基材制备排向处理边界的计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_effluent`
- 来源：`eu-jrc-fmp-bref-2022`

##### 基本流

###### 排入空气的盐酸（`prep_hydrochloric_acid_air`）

酸洗路线运行时，纳入酸洗捕集和排气中实测或按许可证计算的盐酸排放。

- 选定流：氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分配至代表性生产的烟囱监测量或有记录的监管质量流量计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-jrc-fmp-bref-2022`

### 过程：热处理与固化加热（`thermal_conditioning`）

#### 输入

##### 产品流

###### 进入热处理的已制备带钢（`thermal_input`）

记录进入退火、加热、干燥或固化的内部已制备带钢。

- 选定流：进入热处理的已制备非合金钢平板轧材（前景内部流；Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量或质量平衡过程投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`eu-jrc-fmp-bref-2022`

###### 热处理电力（`thermal_electricity`）

记录热设备及其风机和控制系统使用的交流电。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：计量或有记录分配的电力，由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`
- 来源：`worldsteel-lci-methodology-2017`

###### 热处理用天然气（`thermal_natural_gas`）

记录分配至直接或间接燃烧加热、干燥、退火或固化设备的天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3；单位组 体积 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：修正至已声明基准状态并分配至热处理的计量气量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_metering`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 热处理带钢（`heat_treated_strip`）

记录转入涂镀或精整的热处理带钢。

- 选定流：热处理非合金钢平板带钢（前景内部流；Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量或质量平衡干燥输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

###### 热处理化石源二氧化碳（`thermal_fossil_co2`）

计算或测量本过程天然气燃烧的直接化石源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 `calc_fossil_co2` 由计量燃料、供应商碳数据和氧化假设计算，或使用不重复计入的质量保证烟囱数据
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_metering`
- 来源：

###### 热处理氮氧化物（`thermal_nitrogen_oxides`）

按二氧化氮当量记录受监管的氮氧化物质量，并披露这一报告约定。

- 选定流：排入空气的氮氧化物，以二氧化氮计（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分配至代表性生产的质量保证烟囱排放量或许可证计算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-jrc-fmp-bref-2022`

###### 热处理一氧化碳（`thermal_carbon_monoxide`）

监测或计算时记录燃烧设备排放的一氧化碳。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分配至代表性生产的质量保证烟囱排放量或许可证计算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-jrc-fmp-bref-2022`

### 过程：金属镀覆或涂覆（`metallic_coating`）

#### 输入

##### 产品流

###### 进入金属涂镀的带钢（`metallic_input`）

记录进入金属涂镀步骤的已制备或热处理带钢。

- 选定流：进入金属涂镀的已处理非合金钢平板轧材（前景内部流；Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量或质量平衡过程投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`eu-jrc-fmp-bref-2022`

###### 涂层级锌（`coating_zinc`）

仅在含锌金属层消耗锌时纳入，并声明合金组成和镀浴库存变化。

- 选定流：锌，涂层级，纯度和物态已声明（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采购量加期初库存减期末库存和实测可回收返回量所得净锌投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_chemicals`
- 来源：`eu-jrc-fmp-bref-2022`

###### 涂层级铝（`coating_aluminium`）

仅在含铝金属层消耗铝时纳入，并声明合金组成。

- 选定流：铝，涂层级，纯度和物态已声明（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采购量和镀浴库存变化所得净铝投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_chemicals`
- 来源：`eu-jrc-fmp-bref-2022`

###### 涂层级锡（`coating_tin`）

仅在施加锡层时纳入，并保留电镀槽或熔融镀浴库存记录。

- 选定流：锡，涂层级，纯度和物态已声明（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采购量和镀浴库存变化所得净锡投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_chemicals`
- 来源：`worldsteel-lci-methodology-2017`

###### 金属涂镀电力（`metallic_electricity`）

记录涂镀传动、泵、电镀、气刀、控制和所分配抽风的电力。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：计量或有记录分配的电力，由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`
- 来源：`worldsteel-lci-methodology-2017`

###### 金属涂镀用天然气（`metallic_natural_gas`）

记录分配至镀浴、相关干燥或生产线加热的天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3；单位组 体积 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：修正至已声明基准状态并分配至金属涂镀的计量气量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_metering`
- 来源：`eu-jrc-fmp-bref-2022`

###### 保护气氮气（`protective_nitrogen`）

仅在已声明金属涂镀路线消耗保护气时记录工业氮气。将纯度、供应地理、技术、交付边界和物态保留为前景限定信息。

- 选定流：氮气 `92233c86-8e75-441c-94de-03cc91bc7c10`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用计量或供应商记录的氮气质量；若由实测气体体积换算，应采用有文件支持的密度和申报基准条件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_chemicals`
- 来源：`eu-jrc-fmp-bref-2022`

###### 保护气氢气（`protective_hydrogen`）

仅在已声明金属涂镀路线消耗保护气时记录工业氢气。

- 选定流：工业氢气，纯度和供应状态已声明（Tiangong UUID 未解决）
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3；单位组 体积 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：按已声明基准状态计量或供应商记录的氢气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_chemicals`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 金属涂镀带钢（`metallic_coated_strip`）

记录带保留金属层、尚未最终精整的带钢。

- 选定流：金属涂镀非合金钢平板带钢（前景内部流；Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：包括保留金属层的称量或质量平衡干燥输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

###### 锌灰（`zinc_ash`）

将从镀浴表面移出的氧化富锌灰作为独立废物或回收共产品记录。

- 选定流：金属涂镀浴锌灰（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分配至代表性生产的每批移出称量；披露去向及废物或共产品处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`eu-jrc-fmp-bref-2022`

###### 锌铁底渣（`zinc_bottom_dross`）

将从镀浴移出的高密度锌铁底渣与锌灰分开记录。

- 选定流：金属涂镀浴锌铁底渣（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分配至代表性生产的每批移出称量；披露去向及废物或共产品处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`eu-jrc-fmp-bref-2022`

##### 基本流

###### 金属涂镀化石源二氧化碳（`metallic_fossil_co2`）

计算或测量分配至金属涂镀的天然气直接化石源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 `calc_fossil_co2` 由计量燃料计算，或使用不重复计入的质量保证烟囱数据
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_metering`
- 来源：

###### 金属涂镀排入空气的锌（`metallic_zinc_air`）

实测或按许可证计算时，记录镀浴及精整排气中的锌排放。

- 选定流：锌 `08a91e70-3ddc-11dd-94e3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分配至代表性生产的质量保证烟囱排放量或许可证计算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-jrc-fmp-bref-2022`

### 过程：有机卷材涂覆（`organic_coating`）

#### 输入

##### 产品流

###### 进入有机涂覆的带钢（`organic_input`）

记录进入有机涂覆线的已制备或金属涂镀带钢。

- 选定流：进入有机涂覆的非合金钢平板轧材（前景内部流；Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量或质量平衡过程投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`worldsteel-lci-methodology-2017`

###### 聚酯卷材涂料（`polyester_coating_paint`）

仅对确切外购聚酯卷材涂料使用本行，并保留供应商产品、固体含量、溶剂/水含量和安全数据。

- 选定流：聚酯卷材涂料，确切供应商配方（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：经期初/期末库存和退料修正的涂料净领用量；未使用该确切配方时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_chemicals`
- 来源：`worldsteel-lci-methodology-2017`

###### 水性丙烯酸卷材涂料（`acrylic_coating_paint`）

仅对确切外购水性丙烯酸卷材涂料使用本行，并保留供应商配方。

- 选定流：水性丙烯酸卷材涂料，确切供应商配方（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：经期初/期末库存和退料修正的涂料净领用量；未使用该确切配方时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_chemicals`
- 来源：`eu-jrc-fmp-bref-2022`

###### 有机涂覆电力（`organic_electricity`）

记录辊涂机、泵、风机、控制系统和所分配尾气处理的电力。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：计量或有记录分配的电力，由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`
- 来源：`worldsteel-lci-methodology-2017`

###### 有机涂料固化用天然气（`organic_natural_gas`）

记录分配至涂料干燥或固化的天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3；单位组 体积 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：修正至已声明基准状态并分配至固化的计量气量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_metering`
- 来源：`worldsteel-lci-methodology-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 有机涂层带钢（`organic_coated_strip`）

记录包含保留有机层的干燥涂层带钢。

- 选定流：有机涂层非合金钢平板带钢（前景内部流；Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：包括保留有机层的称量或质量平衡干燥输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`worldsteel-lci-methodology-2017`

##### 废物流

###### 废卷材涂料（`spent_coating_paint`）

将移出或弃置的涂料与废水和包装分开记录。

- 选定流：废卷材涂料，确切配方已声明（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分配至代表性生产的弃置涂料称量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`eu-jrc-fmp-bref-2022`

##### 基本流

###### 有机涂覆化石源二氧化碳（`organic_fossil_co2`）

计算或测量分配至涂料固化天然气的直接化石源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按 `calc_fossil_co2` 由计量燃料计算，或使用不重复计入的质量保证烟囱数据
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_metering`
- 来源：

### 过程：金属包覆（`metal_cladding`）

#### 输入

##### 产品流

###### 进入包覆的基材（`cladding_input`）

记录进入包覆操作的非合金钢基材。

- 选定流：进入金属包覆的非合金钢平板轧材（前景内部流；Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量或质量平衡过程投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`un-cpc-3-0-2025`

###### 不锈钢包覆板（`stainless_cladding_sheet`）

仅在独立不锈钢板作为保留包覆层时纳入确切钢号。

- 选定流：不锈钢包覆板，确切钢号已声明（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：进入结合过程的称量包覆板，扣除单独称量边角料；不存在时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

###### 铝包覆板（`aluminium_cladding_sheet`）

仅在独立铝板作为保留包覆层时纳入确切合金。将确切合金、板材状态、供应商地理和包覆用途保留为前景限定信息。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：进入结合过程的称量包覆板，扣除单独称量边角料；不存在时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

###### 包覆电力（`cladding_electricity`）

记录分配至轧制复合、输送和包覆线辅助设备的交流电。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：计量或有记录分配的电力，由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`
- 来源：`worldsteel-lci-methodology-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包覆带钢（`clad_strip`）

记录最终精整前的结合包覆产品。

- 选定流：金属包覆非合金钢平板轧材（前景内部流；Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：包含保留包覆层的称量或质量平衡输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`un-cpc-3-0-2025`

##### 废物流

###### 包覆边角废料（`cladding_scrap`）

按实际组成记录分选或混合的包覆边角料。

- 选定流：平板钢生产金属包覆边角废料（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：从包覆过程移出的称量废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：

##### 基本流

### 过程：机械进一步加工（`mechanical_further_working`）

#### 输入

##### 产品流

###### 进入进一步加工的涂镀或包覆带钢（`further_work_input`）

记录进入已声明机械操作的路线特定内部带钢。

- 选定流：进入机械进一步加工的涂镀或包覆非合金钢平板轧材（前景内部流；Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量或质量平衡过程投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`eu-jrc-fmp-bref-2022`

###### 进一步加工电力（`further_work_electricity`）

记录平整、矫直、压瓦、切边或其他已声明机械操作的交流电。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：计量或有记录分配的电力，由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`
- 来源：`worldsteel-lci-methodology-2017`

###### 矿物基轧制润滑油（`rolling_lubricant`）

机械操作领用确切矿物基轧制或成形润滑油时纳入。

- 选定流：矿物基轧制润滑油，确切供应商牌号（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：经库存和回收修正的润滑油净领用量；未使用时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_chemicals`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 机械进一步加工带钢（`further_worked_strip`）

记录已声明机械操作后、最终验收前的带钢。

- 选定流：机械进一步加工的非合金钢平板轧材（前景内部流；Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量或质量平衡输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

###### 非合金钢切边废钢（`steel_trim_scrap`）

将清洁切边料与不合格产品和混合包覆废料分开记录。

- 选定流：平板轧材精整产生的非合金钢切边废钢（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：从过程移出的分选切边废钢称量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`eu-jrc-fmp-bref-2022`

###### 废矿物基轧制润滑油（`spent_rolling_lubricant`）

将移出的废润滑油作为单独废物流记录。将轧制工序来源、润滑油配方、污染状态和去向保留为前景限定信息。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分配至代表性生产的移出润滑油称量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：

##### 基本流

### 过程：最终精整、检验与包装（`finishing_packaging`）

#### 输入

##### 产品流

###### 进入最终精整的已转化带钢（`finishing_input`）

记录进入最终验收的实际涂镀、包覆或其他进一步加工内部产品。

- 选定流：最终精整前的进一步加工非合金钢平板轧材（前景内部流；Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量或质量平衡过程投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

###### 精整电力（`finishing_electricity`）

记录最终矫平或检验、称量、搬运和包装使用的交流电。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：计量或有记录分配的电力，由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`
- 来源：`worldsteel-lci-methodology-2017`

###### 防护矿物油（`protective_oil`）

当确切防护油保留在交付产品表面时纳入，并与工艺润滑油区分。

- 选定流：平板钢用防护矿物油，确切供应商牌号（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：防护油净领用量或涂布质量测量；交付产品未涂油时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_chemicals`
- 来源：`eu-jrc-fmp-bref-2022`

###### 钢制包装带（`steel_packaging_strap`）

将随卷材或板包提供的钢制包装带与产品质量分开记录。将尺寸、涂层状态、供应商地理和包装用途保留为前景限定信息。

- 选定流：钢打包带 `56fe4f71-b594-4b55-8553-c87f2516737d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：施加于发运产品的包装带称量值或由采购数量换算的质量；不存在时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品，包装不计入参考产品质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

###### 牛皮防护包装纸（`kraft_wrapping_paper`）

将随运输包装提供的牛皮纸与产品质量分开记录。

- 选定流：牛皮防护包装纸（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：施加于发运产品的包装纸称量值或由采购数量换算的质量；不存在时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品，包装不计入参考产品质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格参考产品（`reference_product`）

这是唯一参考产品输出，包括非合金钢基材和所有产品保留层。

- 选定流：经包覆、镀层、涂层或其他进一步加工的非合金钢平板轧材（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：以质量放行的合格产品为基础，固定归一化至 1,000 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：
- 来源：`worldsteel-lci-methodology-2017`

##### 废物流

###### 不合格涂层钢废料（`off_spec_steel_scrap`）

将不合格成品或半成品涂层钢与清洁切边料分开记录。

- 选定流：不合格涂层非合金钢废料（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：代表期间内未在场内返工的不合格产品称量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：

##### 基本流

### 过程：场内工艺废水处理（`wastewater_treatment`）

#### 输入

##### 产品流

###### 进入处理的工艺废水（`wastewater_input`）

记录进入场内处理的内部工艺废水流。

- 选定流：平板钢制备与涂镀工艺废水（前景内部废物流；Tiangong UUID 未解决）
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3；单位组 体积 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：分配至代表性生产的计量进水量，不重复计入产生过程的废物流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_effluent`
- 来源：`eu-jrc-fmp-bref-2022`

###### 废水处理电力（`wastewater_electricity`）

记录泵送、搅拌、加药、澄清和脱水使用的交流电。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：计量或有记录分配的电力，由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`
- 来源：`worldsteel-lci-methodology-2017`

###### 废水中和用氢氧化钠（`wastewater_sodium_hydroxide`）

仅在场内中和使用时纳入氢氧化钠，并将中和溶液浓度和供应状态保留为前景限定信息。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分配至代表性废水处理的溶液净领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_chemicals`
- 来源：`eu-jrc-fmp-bref-2022`

###### 沉淀用三氯化铁（`wastewater_ferric_chloride`）

仅在沉淀金属或悬浮物时纳入三氯化铁，并保留溶液浓度。

- 选定流：三氯化铁水溶液，浓度已声明（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分配至代表性废水处理的溶液净领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_chemicals`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 处理后工艺废水（`treated_process_wastewater`）

记录场址排放或外部处理边界处的处理后水流。

- 选定流：平板钢表面处理后废水（Tiangong UUID 未解决）
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3；单位组 体积 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：分配至代表性生产的计量处理后废水；披露接收边界和水质数据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_effluent`
- 来源：`eu-jrc-fmp-bref-2022`

###### 脱水含金属废水污泥（`wastewater_sludge`）

将脱水处理污泥与废槽液和镀浴残余物分开记录。

- 选定流：平板钢工艺废水处理产生的脱水含金属污泥（Tiangong UUID 未解决）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：湿污泥称量，并记录实测干固体分数和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`eu-jrc-fmp-bref-2022`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared_processes_and_utilities | 优先细分过程并使用专用仪表或有物理依据的工程分配。对每条共用生产线或公用工程记录分配键、期间和受影响清单行。 | `worldsteel-lci-methodology-2017` |
| `allocation_mass_for_similar_products` | jointly_produced_flat_steel_products | 无法细分且产品所经操作实质相似时，按合格干产品质量分配共用负荷；只有记录证明其他物理关系更具代表性时才采用其他方法。 | `worldsteel-lci-methodology-2017` |
| `allocation_rework` | internal_rework | 将场内返工材料保留在前景系统内，不作为外售共产品抵扣；完成库存变化结算后只计净外部投入和输出。 | `worldsteel-lci-methodology-2017` |
| `allocation_recovered_outputs` | steel_scrap_zinc_ash_dross_and_other_recovered_outputs | 仅当输出以有记录功能和去向离场时才归为共产品。优先采用系统扩展并披露被替代功能；否则报告选定分配方法，并将不抵扣的废物处理作为敏感性情景。 | `worldsteel-lci-methodology-2017` |
| `allocation_recycling_scope` | recycled_content_and_end_of_life | 声明废钢投入和生命周期末期再生利用方法。不得将已含再生利用抵扣的供应商数据集与第二次前景或下游抵扣叠加。 | `worldsteel-lci-methodology-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | 所有适用生产过程 | 基材、中间体、包覆板和合格产品质量 | 称量单、卷材记录、生产记录或尺寸计算 | 时间；材料或卷号；产品钢号；路线；毛/皮/净质量；尺寸；计算时密度；合格/不合格状态 | 优先校准称量；仅在尺寸和密度已核实时使用尺寸计算 | kg | 每次接收、转移和批次放行 | 代表性连续 12 个月；较短期间须说明 | 报告场址内所有纳入生产线 | 按产品路线批次汇总；修正期初期末在制品；按合格质量归一化 | 校准记录；批次追溯；与生产台账核对 |
| `cp_energy_metering` | 所有适用过程 | 交流电 | 仪表或发票分表记录 | 仪表编号；时间；期初/期末读数；kWh；电压；供应商/市场；共用表分配键 | 优先专用表；否则采用有记录工程分配 | 保留 kWh，报告 MJ | 连续或每月抄表 | 与生产相同期间 | 所有纳入生产线及分配辅助设施 | 期末减期初；分配共用量；按 3.6 MJ/kWh 换算 | 仪表校准或发票核对；分配工作表 |
| `cp_fuel_metering` | thermal_conditioning; metallic_coating; organic_coating | 气态天然气 | 修正气表和供应商质量记录 | 仪表编号；体积；温度；压力；含湿基准；热值；可得时碳含量；分配键 | 修正仪表读数及供应商声明 | 已声明状态 m3 | 连续或每月抄表 | 与生产相同期间 | 所有纳入燃烧设备 | 将修正体积分配至过程；保留质量数据用于排放计算 | 仪表核验；供应商声明；燃料与烟气核对 |
| `cp_process_chemicals` | substrate_preparation; metallic_coating; organic_coating; mechanical_further_working; finishing_packaging; wastewater_treatment | 酸、碱、涂层金属、气体、涂料、油品和处理化学品 | 采购、槽罐、镀浴、领料和库存记录 | 确切产品；供应商；浓度/纯度；批次；期初库存；收料；退料；期末库存；使用过程 | 按确切外购产品进行物料平衡 | kg 或已声明状态 m3 | 每次交付和领用；每月盘存 | 与生产相同期间 | 所有纳入过程 | 收料加期初库存减期末库存、退料和无关用途 | 发票；盘存；镀浴分析；供应商技术和安全数据 |
| `cp_water_effluent` | substrate_preparation; wastewater_treatment | 供应水和工艺废水 | 水表、排水表、槽罐或许可证记录 | 仪表编号；质量或体积；换算时的密度和基准条件；水源；循环量；排放点；pH；温度；电导率；相关污染物浓度 | 优先专用表；仅在有记录时使用槽罐平衡 | 工艺用水按 kg；UUID 未解决的废水行按 m3；换算时保留实测体积和密度 | 连续或分批；至少每月汇总 | 与生产相同期间 | 所有纳入用水和排放点 | 净外部补给；内部循环不作为新投入；对齐进出水边界 | 仪表检查；实验室报告；密度证据；水平衡 |
| `cp_direct_emissions` | substrate_preparation; thermal_conditioning; metallic_coating | 直接空气排放 | 连续监测、烟囱测试或许可证质量流量计算 | 排气筒；物种；浓度；流量；氧基准；运行小时；方法；检出限；生产分配 | 质量保证监测或有记录监管计算 | kg 物种 | 连续监测或规定测试频次 | 生产期间代表性运行状态 | 每个纳入排放点 | 浓度乘修正烟气流量与运行时间；分配至代表性生产 | 校准；认可测试报告；不确定性和未检出处理 |
| `cp_residues` | 所有适用过程 | 废槽液、废涂料、废钢、锌灰、底渣、废油、污泥和不合格品 | 地磅读数、容器记录、转移联单和分析 | 确切残余物；毛/皮/净质量；相关时干固体；组成；日期；去向；废物/共产品状态 | 每批外运称量或使用校准容器 | kg；相关时干固体分数 | 每次移出 | 与生产相同期间 | 所有纳入过程 | 按确切残余物汇总；修正贮存库存变化 | 秤校准；转移文件；实验室分析；接收方确认 |
| `cp_packaging` | finishing_packaging | 随货钢带和牛皮纸 | 包装物料清单、领用记录或数量转质量记录 | 组件；供应商；单件质量；数量或长度；领用量；产品批次 | 称量代表性单件并乘领用数量/长度 | kg | 每包装批次或每月领用 | 与生产相同期间 | 随合格产品提供的包装 | 汇总确切随货组件；不计入参考产品质量 | 采购记录；单件质量检查；包装规范 |
| `cp_coating_measurement` | metallic_coating; organic_coating; finishing_packaging | 保留涂镀层、包覆层、钝化层和油层 | 产品测试和生产线控制记录 | 产品号；面别；面积；涂层单位面积质量或厚度；方法；密度；保留层材料；验收结果 | 规定的重量法、XRF、β 反散射、湿化学或验证厚度法 | g/m2、μm 和计算 kg | 每产品作业按规范频次 | 与生产相同期间 | 每一种产品规范 | 按确切产品规范进行产量加权 | 校准仪器；测试方法；平行样；验收记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 每个清单行 | 归一化量 = 期间量 / 合格参考产品质量 × 1,000 kg | 期间采集量；合格产品质量 | 每 1,000 kg 合格产品的数量 | `worldsteel-lci-methodology-2017` |
| `calc_electricity_mj` | 每个电力行 | MJ = 电表 kWh × 3.6 | 电表 kWh | MJ 电力 |  |
| `calc_layer_mass` | 保留涂镀或包覆层 | 保留层质量 = 实测面积 × 单位面积涂层总质量，并声明面别；使用厚度时乘经核实密度 | 产品面积；面别；单位面积质量或厚度；密度 | kg 保留层 | `eu-jrc-fmp-bref-2022` |
| `calc_fossil_co2` | 天然气燃烧行 | 化石源 CO2 = 燃料量 × 供应商碳含量或经批准因子 × 氧化因子 × 44/12；采用同一烟囱 CO2 质量时不得叠加 | 修正燃料量；碳含量或因子；氧化因子 | kg 化石源 CO2 |  |
| `calc_mass_reconciliation` | 整个前景系统 | 基材 + 保留外购材料 + 期初在制品 = 合格产品 + 外运废钢、废物、残余物、实测释放 + 期末在制品 + 已解释差异 | 所有过程质量记录 | 质量平衡差异及百分比 | `worldsteel-lci-methodology-2017` |
| `calc_shared_utility` | 共用电力、燃气、水和处理 | 优先按专用分表分配；否则采用运行时间×额定负荷、修正产量或处理体积等有记录物理驱动量 | 总表；驱动量记录 | 分配至过程的数量 | `worldsteel-lci-methodology-2017` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和基材 | 保留供应商/生产批次关联、非合金钢钢号、来料状态、尺寸、所有保留层、涂层单位面积质量或厚度及面别、进一步加工路线、表面状态和验收规范。 | 采购规范；卷材卡；检验证书；产品放行记录 |
| `dq_temporal` | 所有前景数据 | 使用代表性 12 个月。较短期间必须覆盖每种代表产品路线的完整生产作业，并解释季节、维修和产品组合影响。 | 有日期边界的原始记录；生产日历；说明 |
| `dq_geography_technology` | 前景及相连上游数据 | 声明生产场址、国家/地区、生产线技术、炉型/涂镀类型和供应商地域；解释缺乏代表性的上游或电力数据集。 | 场址和供应商元数据；数据集映射记录 |
| `dq_completeness` | 所有过程 | 纳入每个适用过程图步骤、每种能源载体、确切外购材料和化学品、确切废物流及实测基本排放；按质量、能源和环境相关性说明排除项。 | 完整性清单；采购与清单核对；排放和废物清单 |
| `dq_measurement` | 质量、能源、水、化学品、排放和残余物 | 保留与各测量相适应的校准、检出限、浓度/纯度、基准状态、干固体和分配证据。 | 校准证书；实验室报告；供应商声明；分配工作表 |
| `dq_consistency` | 模型与报告 | 对所有代表性生产线和产品一致采用归一化、分配、库存修正和再生利用规则；记录偏离和不确定性。 | 计算工作簿；方法说明；敏感性结果 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference_product | 确认唯一参考输出为 1,000 kg 合格产品；核实保留层计入而运输包装不计入该质量。 | `worldsteel-lci-methodology-2017` |
| `validation_route_completeness` | process_map_and_inventory | 确认每个实际路线步骤均已表示，每个条件过程有纳入或不存在的证据，且任何选定流都不是集合标签或未解决的选择指令。 | `eu-jrc-fmp-bref-2022` |
| `validation_mass_balance` | whole_foreground_system | 执行基材、涂层金属和总质量平衡；调查并披露物料差异，不得强行闭合。 | `worldsteel-lci-methodology-2017` |
| `validation_energy_and_emissions` | all_energy_and_combustion_rows | 将电力和燃料与仪表核对，核实 kWh 至 MJ 换算和燃气基准状态，并确保计算的化石源 CO2 不与烟囱数据重复。 | `worldsteel-lci-methodology-2017` |
| `validation_coating_identity` | retained_layers | 将供应商配方和镀浴组成与产品实测涂层单位面积质量或厚度、面别和验收记录交叉核对。 | `eu-jrc-fmp-bref-2022` |
| `validation_waste_and_water` | wastes_residues_and_effluent | 将废槽液、废水、污泥、锌灰、底渣、废钢和不合格品与库存变化及转移文件核对，并保留确切去向。 | `eu-jrc-fmp-bref-2022` |
| `validation_allocation_and_double_counting` | shared_burdens_co_products_and_recycling | 核实细分和分配键，检验重要回收输出选择，并确保上游或下游再生利用抵扣和处理不重复计入。 | `worldsteel-lci-methodology-2017` |
| `validation_source_and_uuid_status` | all_rows_and_rules | 拒绝未经验证的 UUID 和代理身份；确认每个 UUID 空缺行仍列于 manifest 未解决元数据，且非默认规则保留来源 id。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查并解决 UUID 后，可发布为 secondary_dataset 或 background_dataset 的前景生产数据集 |
| downstream_use | 用于确切已声明产品路线的从摇篮到大门产品足迹、EPD 或 PEF 研究、采购模型及下游 process 或 lifecyclemodel 构建 |
| allowed_use | 仅在基材、钢号、涂镀/包覆/进一步加工路线、保留层、产品尺寸与形态、场址地域、生产期间、分配和再生利用方法与目标模型相容时使用 |
| excluded_use | 不得作为不锈钢/合金钢/电工钢/高速钢、未涂层平板钢材、制造部件、使用阶段性能或生命周期末期的无条件平均；无研究特定功能单位和审查时不得支持比较性声明 |
| required_metadata | canonical PCR id；参考流限定信息；场址和期间；产品与基材规范；路线过程图；纳入/排除操作；上游数据集清单；能源供应；分配和再生利用方法；UUID 解决状态 |
| required_quality_disclosure | 前景与次级数据占比；仪表和秤覆盖；质量平衡差异；截断；共用公用工程分配；涂层测试覆盖；数据年龄；不确定性；非正常运行处理；未解决流和范围证据需求 |
| update_trigger | 基材或产品钢号、保留层或供应商配方、涂镀/包覆/进一步加工路线、生产线技术、场址或能源供应、分配/再生利用方法、材料收得率、排放控制、废水处理、产品规范或前景数据期间变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `dataset` | 联合国统计司，CPC 3.0 结构，第 41231 行，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-02） | 正式产品分类身份和语义范围；不作为方法或数值证据 |
| `eu-jrc-fmp-bref-2022` | `official_guidance` | 欧盟委员会联合研究中心，《黑色金属加工工业最佳可行技术参考文件》，EUR 31321 EN，JRC131649，DOI：https://doi.org/10.2760/196475 | 表面制备、连续热浸涂镀和后处理过程分解；化学品、废水、废气、残余物、涂层控制和监测要求 |
| `worldsteel-lci-methodology-2017` | `handbook` | 世界钢铁协会，《钢铁产品生命周期清单方法报告》，ISBN 978-2-930069-89-0，https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf | 工厂门口声明单位、钢铁系统边界、能源和物料完整性、数据采集与校验、共产品处理和再生利用披露 |
