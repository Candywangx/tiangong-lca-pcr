---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.isotopes-n-e-c-and-compounds-thereof-including-heavy-water
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 碳-13标记碳酸钙粉末首次质量放行

## 1. 范围与适用性

本方法规定合法供应、非放射性的碳-13标记碳酸钙固体粉末所声明队列的环境核算，起于接收化学上已制成的物料，止于有文件证明的首次成品质量放行。这是下游质量放行边界，不是化学合成。合格批次必须有证据表明此前尚未作为同一成品放行。首次收货、新商品 SKU、新容器、复验、调拨或转售均不证明首次放行。若证据显示购入的是已放行散装成品，则本首次放行方法不适用：应单独核算实际下游分装或配送服务，不再产生生产分母。

有商品规格的固体（`sigma-carbonate-492027`）、独立记录实际购入的粉末（`naviaux-calcite-2019`）及对应的单一物质（`cil-carbonate-sds-2017`）确立了真实产品。它们未确立实际合格的首次放行场址、批次、制造路线或环境清单。下列协议规定未来采集要求，不声称已有现场结果。不描述或推断合成、同位素分离、富集或放射性材料制备。供方内部制法保持黑箱。Sigma 2016年产品日期声明将质量放行日期定义为分析数据经审核、确认产品说明、规格与批次均匀性相符的时点，并与后续复验日期区别（`sigma-product-dating-2016`）。这份历史通用声明支持质量放行是实在的关口，但不能证明当前批次从未被更上游供方提前放行；仍须追溯实际批次源头。

排除普通未标记碳酸盐、自然范围同位素参考碳酸盐、石灰石和方解石矿物、配制溶液或混合物、其他标记化合物、重水、放射性核素和核材料。冻结的2025年6月坐标为 CPC34260；2026年10月说明将其连接至 HS2845。HS第28章注6区分人为改变的同位素组成与普通自然组成。仅有同位素 delta 值或计量学称号不足以证明此类身份（`unsd-cpc3-2025`、`unsd-cpc3-2026`、`wco-hs2022-ch28`、`iaea-610`）。普通碳酸盐不在本限定同位素范围内；放射性产品也在范围外，应另行核对 CPC336 类。邻近 CPC34240 已接受的氯酸钠方法不覆盖本产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.isotopes-n-e-c-and-compounds-thereof-including-heavy-water |
| classification_refs | CPC 3.0 34260，碳-13 标记碳酸钙粉末的较窄映射已获接受，见 docs/adr/2026-11-22-accept-cpc-34260-carbon-13-labelled-calcium-carbonate-powder.md |
| covered_products | 化学上已制成的碳-13标记碳酸钙粉末，保持所声明固态，仅一次归入有记录的首次成品质量放行 |
| excluded_products | 已放行散装成品的零售分装；转售；自然范围碳酸盐参考物质；普通碳酸盐；其他同位素或化合物；配制品；核或放射性产品；内部制备路线 |
| representative_product | 碳-13标记碳酸钙，Sigma492027，CAS287389-46-2；CIL CLM-7564 支持对应单一物质身份，不证明共同批次或工厂 |
| production_route | 闭箱的化学成品供给、批次身份与质量评估及首次质量放行；不假设现场化学转化 |
| market_state | 在有记录的首次质量放行关口的固体粉末成品；采用整体化学品净质量，排除包装和已移除样品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在首次成品质量放行关口提供指定的碳-13标记碳酸钙粉末 |
| How much | 1 kg 整体已放行化学产品净质量 |
| How well | 实际批次规格和证书须规定标记化学身份，分别报告化学含量与碳同位素原子分数、物态、方法和不确定性；目录的99原子百分数不是化学纯度 |
| How long or cycle | 一个明确的批次队列和核算期；不作寿命服务等效，复验不更新首次放行 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 碳-13标记碳酸钙粉末 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 标记身份和同位素；实际供方、制造方、SKU、批号；固态；分别列明化学含量与同位素原子分数的方法、基准和不确定性；实际 CoA 及适用 SDS；此前未放行状态和首次放行责任的证据；外包供方与交接；化学品净质量、皮重及已移除样品；首次放行队列 Q 与核算期；放行前后库存及退回；包装组件身份、质量、产权与覆盖；上游环境数据集关口、参考数量、地域与时期；质量服务及运输覆盖范围；实际公用事业、废物及未决覆盖 |

所有限定信息均须在数据集元数据、过程说明或等效证据中声明。参考产品 UUID 缺失不允许用普通碳酸钙代替。Mass/kg 支撑链为独立核实的历史 ILCD 身份，不代表已选定产品流，也不证明其未来原生参考属性。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用 cp_mass，以经校准质量记录或有依据的毛重减组件皮重记录称量同批整体化学品净质量。Q 定义为本队列本期首次放行的正净质量；发运重量或容器数量不能代替 Q。 |
| isotope_basis | reference product | Mass | kg | 分别保留同位素原子分数、化学含量和整体产品质量。不得将净质量乘以99原子百分数、delta 值或假设的化学纯度；不得把分母改成碳-13的质量。 |
| small_mass | reference product | Mass | kg | 保留可追溯的称量、精度及不确定性；g 乘以0.001换算为 kg。销售包装规格不是实测批次质量或制造批量；放行前移除的样品不属于 Q。 |
| electricity_basis | release_electricity | Energy `f6811440-ee37-11de-8a39-0800200c9a66` | kWh | 电表读数保留 kWh；Units of energy 中1 kWh = 3.6 MJ。此技术属性只描述计量；链接前须验证所选供方流本身的属性链，能量单位相同不证明净热值属性或供方适用性。此计量支撑指向 Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在指定收货或质量放行地点接收化学上已制成的标记粉末，有批次身份及此前未放行状态的记录，并计入实际关联包装 |
| starting_condition_role | 携带历史环境负担的购入同类技术圈起点物料，不是无负担原料 |
| product_classification_scope | 仅 CPC34260 中有记录的标记碳酸钙首次放行子集；分类不规定生产路线 |
| recursive_input_rule | 用一个相容闭箱供方环境数据集解析同类化学成品供给；记录实际关口和放行状态，防止自引用或循环，不重建内部同位素制备 |
| upstream_dataset_requirement | 与产品、等级和批次相容的环境数据集，明确参考质量、地域、时期、边界、包装、运输、质量服务覆盖和不确定性；区分缺数据与零值，并分开上游和本地负担 |
| disclosure | 仅下游首次质量放行关口；从摇篮到大门的声明须有验证的闭箱上游链及完整环境和包装审查；已放行购入物不得产生 Q |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_release | all datasets | 必须提供原始批次放行历史与责任放行方，追溯外包质量工作及实际交接。收货、按需分装和放行后复验不产生生产；批次证书本身仍须历史佐证。采用历史声明中质量放行与复验的区别，并追溯源头供方是否已更早放行，不把当前供应商证书日期自动当成首次。 | sigma-carbonate-492027; sigma-product-dating-2016; cil-retest-2025 |
| boundary_blackbox | all datasets | 供方历史负担仅承接一次，本地活动另列。采用闭箱供给，不获取内部制备操作说明；上游覆盖未知时拒绝整体产品足迹声明。 | eu-pef-2021-corrected |
| boundary_physical | all datasets | 采用两本相邻化学品实物账；若确有包装实物池，每个池声明一个实体周界。实际位置决定实物库存：外地持有产权的对象不得同时计作已发出和边内期末库存。核对全部收、发、存质量，不把不平衡当成排放。 | eu-pef-2021-corrected |
| boundary_packaging | all datasets | 完成清单前分别识别实际容器本体、封盖和每种外包装组件；不得从目录包装规格推断材质、质量或负担。每种组件区分购买、首次非购买外部接收，以及可证为同一件先前从本站发出的真实退回。即使供方覆盖缺失，实际承担的采购、运输和服务负担仍各计一次。 | sigma-carbonate-492027; eu-pef-2021-corrected |
| boundary_completeness | all datasets | 审查实际质量服务、入厂物流、储存、公用事业、样品、包装、废物和环境释放。对下列未列但有证据的每个交换增加一张原子卡，不用未指明的集合卡或虚构默认值。空白分节在有合理不存在记录前代表尚未评估覆盖。 | eu-pef-2021-corrected |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| first_release | 化学成品粉末收货与首次质量放行 | required | 仅可追溯的此前未放行队列；无现场化学转化；缺少放行历史证据则边界不适用 | 下游放行前景与闭箱供方上游 | reference_product |
| released_stock | 已放行商品库存与后续服务账 | conditional | 实际放行后库存、退回、外部接收、发运或可归属服务；保留原始批次队列 | 独立下游后续账，不产生新生产 Q | released_dispatch；仅实物 D，不是第二功能参考 |

闭箱化学成品供给 → 声明的收货与质量评估 → 首次放行 Q。若供方交货前实施质量工作，须识别该供方，并将其服务范围与供方数据集核对；接收已放行商品属于下游配送。不得虚构本地制备步骤。放行后库存和发运是放行关口外另行链接的后续账，不是另一笔生产输出。若确有相关放行后流转或服务，纳入下述条件性 released_stock 账。Q 是从 first_release 对应转入的内部接收，不是外部购买，也不是独立携带第二笔负担的产品输入。放行关口结果与后续服务结果分开，不得把 Q 与 D 汇总成两个最终输出；合并实物视图中 Q 抵销。条件卡须有实际发生，无发生时可凭证排除，不虚构数量。

各卡规定具体候选交换，不是已观测工厂数量。现有产品证据未确立包装材质与组件身份，完整数据集须先采集并分别补充原子卡。不假设玻璃、塑料、托盘或循环池。若验证的供方范围未包含购入分析和运输，亦须按实际服务身份补充。不得用虚构流、参考范围、零值或 UUID 填补覆盖缺口。

### 过程：化学成品粉末收货与首次质量放行（`first_release`）

#### 输入

##### 产品流

###### 接收的标记化学品（`received_powder`）

记录整体化学成品标记粉末的实际外部接收，保留来源批号、此前放行状态、实际包装和关联供方负担。非购买接收亦携带其来源及剩余历史负担；采购金额不决定实物质量。本卡仅计此前未放行物的首次外部接收，不包含单独卡 unreleased_sample_return 的真实样品退回；I 是这两类互斥输入之和，不重复物料或上游负担。

- 选定流：碳-13标记碳酸钙粉末
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经 cp_mass 与 cp_burdens 核对、可归属参考输出的同队列实际接收化学品净质量；新生产账排除内部循环和已放行库存。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`sigma-carbonate-492027`；`cil-carbonate-sds-2017`

###### 外送未放行样品的真实退回（`unreleased_sample_return`）

仅适用于有记录、化学身份不变且此前未放行的样品从实际外部质量服务保管方退回。作为 I 的显式分组记录，保留先前外送关联，仅带回剩余负担；不是新的供方制造输入。

- 选定流：碳-13标记碳酸钙粉末
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用 cp_samples 采集实际退回质量，仅按原队列规则归一化；Q 为零时保留原质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_samples`
- 来源：`eu-pef-2021-corrected`

###### 可归属的计量电力（`release_electricity`）

仅在实际电力可归属收货、质量评估和放行前储存时适用。记录实际电表与供方范围及共享分配依据；外部质量服务已含的电力不得再计入本地。

- 选定流：质量放行场址供电
- 流属性/单位：Energy `f6811440-ee37-11de-8a39-0800200c9a66` / kWh
- 数量规则：本放行队列可归属的实测电量；除以 Q 前保留期初期末读数、日期、表计范围与 cp_burdens 分配；用量未知不等于零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_activity`
- 来源：`eu-pef-2021-corrected`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 首次放行化学品（`reference_product`）

唯一参考输出为跨过首次质量放行关口的整体粉末净质量。排除保留或消耗的样品和未放行物料；随后零售分装或发运不产生另一参考输出。

- 选定流：碳-13标记碳酸钙粉末
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`sigma-carbonate-492027`；`naviaux-calcite-2019`

###### 对外退回的未放行化学品（`unreleased_return`）

仅适用于实际退回供方、未放行且化学身份不变的粉末。这是伴随互斥负担转移的外部产品调拨，不是 Q、共产品信用、负废物或虚构的收率改善。

- 选定流：碳-13标记碳酸钙粉末
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际采集未放行退回质量，与 Q 及实物废物分开归属；用 cp_burdens 识别接收方和剩余负担。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`eu-pef-2021-corrected`

###### 实际外送的未放行粉末样品（`unreleased_sample_out`）

仅为真实跨越所声明场址周界、交予明确外部质量服务的实物样品。移至同场址留样柜属于内部流转，仍计 U1，不是 S。不引入现场化学转化或消耗。

- 选定流：碳-13标记碳酸钙粉末
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用 cp_samples 采集实际外送样品毛流量 S，记录保管和真实服务终点；不得把随后服务废物再计为 W。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_samples`
- 来源：`eu-pef-2021-corrected`

##### 废物流

###### 废弃的未混合粉末（`discarded_powder`）

仅适用于实际废弃的未混合标记碳酸钙粉末，包括仍为此物质的废弃实物样品。反应残渣、液体和混合分析废物属于其他交换：须有实际身份及各自原子卡，或经核实已纳入外部服务范围。

- 选定流：废弃碳-13标记碳酸钙粉末
- 流属性/单位：Mass / kg
- 数量规则：采集废弃粉末净质量、实际接收或处理方及剩余负担，与留样、对外退回化学品及未解释账差分开；不假设废物比例。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`cil-carbonate-sds-2017`；`eu-pef-2021-corrected`

##### 基本流

产品 SDS、不闭合的质量账或后续实验室溶解均未确立基本排放。具体释放须有物质、介质和实测或建模基准；收集的未处理废物不是基本释放。

### 过程：已放行商品库存与后续服务账（`released_stock`）

此条件账保留原生产队列及其历史负担。内部 Q 接收从 reference_product 按完全相同批次、时间、质量及负担转移对应记入，不新增第二张外部清单卡。实际 G、J、D 和外送样品移除由下列原子接口记录。已放行场内留样仍计 R1；其他实际 L 终点须在完整性声明前建立具体卡。放行后新增服务负担归回原队列，包括没有新放行的时期；旧货不得重新获得整笔上游制造负担。本账公用事业与 first_release 的实际表计分配分开。

#### 输入

##### 产品流

###### 已放行粉末的真实退回（`released_return`）

仅适用于已放行批次或身份不变的已放行样品，且可追至本站先前外发记录。保留原队列、状态、净质量和剩余已发生负担；没有先前外发证据的供方来货属于 J。

- 选定流：碳-13标记碳酸钙粉末
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用 cp_released 采集实际接收毛流量 G 及其原队列归属；G 不增加 Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_released`
- 来源：`eu-pef-2021-corrected`

###### 其他外部接收的已放行粉末（`released_external_receipt`）

适用于 J，包括购买或非购买的已放行粉末，但无法证明是本站同件真实退回。保留外部来源和其自身原放行队列，不并入本期首次放行分母。

- 选定流：碳-13标记碳酸钙粉末
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用 cp_released 采集实际外部接收化学品净质量毛流量 J 及剩余历史负担；不分配为首次放行。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_released`
- 来源：`eu-pef-2021-corrected`

###### 可归属的放行后计量电力（`postrelease_electricity`）

仅为实际放行后储存、退回评估或再发运用电，且未被其他供方、服务或电表分配重复包含。这是新增服务，不是新制造。

- 选定流：质量放行场址供电
- 流属性/单位：Energy `f6811440-ee37-11de-8a39-0800200c9a66` / kWh
- 数量规则：用 cp_released_activity 采集可归属放行后电量；本期 Q 为零时仍保留原量，仅归属其原队列或单独披露的服务结果。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_released_activity`
- 来源：`eu-pef-2021-corrected`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已放行粉末的实际对外发运（`released_dispatch`）

适用于实际 D 销售或调拨，包括可证退回品的再发运。保留原队列，剩余负担仅外转一次；此实物产品外发不是 reference_product，也不重建 Q。

- 选定流：碳-13标记碳酸钙粉末
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用 cp_released 采集实际对外化学品净质量毛流量 D；本期 Q 为零仍追踪原队列。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_released`
- 来源：`eu-pef-2021-corrected`

###### 实际外送的已放行粉末样品（`released_sample_out`）

仅为确实外送至有记录质量服务或复验的已放行样品。仅一次归入 L，不计 D。场内留样仍计 R1；身份不变样品后来退回时，凭原外送证据计入 G。服务消耗或废物须有自身范围中的记录终点，不再增加第二笔现场废物。

- 选定流：碳-13标记碳酸钙粉末
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用 cp_released 与 cp_samples 采集实际外送样品质量，保留原队列及原上游负担，复验不更新负担。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_released`
- 来源：`eu-pef-2021-corrected`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | first_release | 分配前拆分队列、供方覆盖范围和本地计量活动。对确实共享的质量、储存或运输活动记录因果驱动；优先细分，再采用合理物理关系，最后才采用其他有依据且做敏感性分析的关系。不虚构经济比例，不按同位素原子分数分配。 | eu-pef-2021-corrected |
| allocation_history | all datasets | 环境历史负担与实物质量分账核对：期初承接 + 本期外部带入的剩余已发生份额 + 真正新增 = 当期归属 + 期末承接 + 互斥外转或其他归属。逐原件、批次队列和交换适用；真实退回仅带回其剩余份额，不重新携带第二笔完整制造负担。 | eu-pef-2021-corrected |
| allocation_packaging | all datasets | 每种实际包装组件分开记录实物产权和位置、接收、复用及剩余负担。购买和首次非购买接收不是实际退回；供方覆盖缺失须调查。实际采购、运输或服务各计一次，实物流转不得除以复用次数。任何寿命份额规则均须真实服务证据；PEF 复用示例不提供默认周转次数。 | eu-pef-2021-corrected |
| allocation_losses | all datasets | 按有依据的队列规则归属不合格批次评估、不可回收损失和样品或废物处理。不得自动归给虚构共产品、创建替代普通碳酸盐信用，或让一笔负担既随退回粉末转出又归入 Q。Q 始终是独立于分配的实物净质量。 | eu-pef-2021-corrected |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_identity | first_release | 身份与首次放行 | 原始批次历史及证书 | 供方、制造方；SKU；来源及分批谱系；此前放行状态；原始首次放行时间与责任方；CoA、复验或到期；分别列明化学含量和同位素基准、方法、不确定性；SDS；外包服务方及交接 | 将原始证书、批次谱系和首次放行登记对应实际交接；查明散装物此前是否已放行。化学含量与同位素丰度分开；下游采购论文不能证明制造。 | 文件 | 每批及每次放行决策 | 与 cp_mass 相同队列和时期 | 实际供方和指定放行地点 | 按批保留证据，不合并不同规格 | 原件、责任方确认与独立适用性审查 |
| cp_mass | first_release | 接收、首次放行、退回和废弃化学品 | 两本相邻实物账 | 队列；时间；毛重；组件皮重；净 kg；不确定性；放行前期初、接收、期末；首次放行 Q；样品留存、外移或消耗；未放行退回；废物；放行后期初、退回、期末、发运和其他处置 | 用经校准的天平和可追溯批次质量记录；以相同 Q 及互斥去向核对放行前后账；调查差额，不推断排放，不再放行旧库存。 | kg | 每次实物流转和放行，逐期结账 | 明确完整核算期及队列 | 声明的实物边界，包括已识别的外部服务保管 | 每 1 kg 参考流 | 校准、皮重来源、盘点、放行证据、交接单和核对不确定性 |
| cp_activity | first_release | 实际公用事业与外部服务 | 电表、发票、服务范围 | 表号；读数；日期；kWh；供方、电压、地域；服务身份；实际交接及样品终点；运输分段、距离、载荷；边界；供方数据集已含内容；分配驱动；缺失字段 | 读取实际公用事业与质量服务记录，无重叠地核对供方已含和本地活动；完成前识别每项缺失原子交换，不索取同位素制备操作数据。 | kWh 及每种实际服务单位分别保留 | 每条记录，按队列和期间汇总 | 与 cp_mass 相同完整核算期 | 实际本地及外包质量边界 | 每 1 kg 参考流 | 电表校准、发票、服务声明、供方覆盖和因果分配证据 |
| cp_packaging | first_release | 每种实际包装组件 | 组件级实物和负担账 | 容器本体、封盖、外包装组件身份；材质；实物号；单位质量；产权；位置；期初；购买；首次非购买外部接收；关联先前发出的真实退回；外发；处置；期末；供方覆盖；实际采购、运输、服务及剩余负担 | 检查实际组件并称量或用可追溯组件记录；每次首次外部接收都计入，不论购买与否或供方是否包含。真实退回须有同一实物先前外发证据；核对一个实体周界，对每种已识别材料或组件分别建卡，不虚构循环池。 | kg 与件数分列，以实测组件质量换算 | 每次有关流转和盘点 | 匹配核算期并追溯期初库存 | 声明的实物场址或池周界，外地保管另列 | 每 1 kg 参考流 | 组件规格、称重、关联流转记录、保管、发票和供方纳入或排除说明 |
| cp_burdens | first_release | 历史和新增环境负担 | 逐交换剩余负担账 | 原件或批次；供方数据集、参考数量及关口；期初承接；外部带入剩余已发生份额；真正新增；当期归属；期末承接；互斥外转或其他归属；不确定性；分配证据 | 接收、储存、放行、退回、废物和转移全过程逐原始负担仅销账一次；分开已含和另增的包装、运输、分析及公用事业负担。不把期初存货采购全额再次计费，也不将首次非购买接收视为无负担。 | 保留各原始交换单位 | 每次负担事件并逐期结账 | 相同队列及全部相关承接历史 | 与化学品和组件边界一致，显式记录外转 | 每 1 kg 参考流 | 供方数据集来源与相容性、负担转移账、完整性和重复计量审查 |
| cp_samples | first_release | 实际外送样品和场内留样 | 样品保管账 | 原批次或队列；放行前后状态；外送和退回编号及时间；保管方和场址周界；外部净质量；场内留样位置；实际分析终点；服务已含废物和负担 | 区分场内留存与对外转移；称量每次实际外送和退回。未放行退回单列为 I 子组；不变的已放行退回计 G。外部消耗采用实际服务终点，不引入现场转化或虚构损失。 | kg | 每次实际样品流转及盘点 | 原队列追踪至实际终点 | 场址实物周界，外部服务保管另行明确 | 每 1 kg 参考流 | 保管交接单、校准、批次历史、服务终点及覆盖证明 |
| cp_released | released_stock | G、J、D 及实际已放行样品移除 | 原队列放行后实物和负担账 | 批次及原放行 Q_origin；R0；内部本期 Q；G 及原外发证明；J 及外部来源；R1；D；实际 L 终点；组件皮重；不确定性；承接剩余负担 | 核对每笔实物毛流量和存量，不从 G、J、D 推断 Q。场内留样仍计 R1。按外部原队列分列 J，保留负担历史；本期 Q 为零仍记录原量。 | kg | 每笔实际放行后流转及逐期结账 | 原队列，包括后续零放行期间 | 与化学品库存相同声明周界，外部保管显式记录 | 每 1 kg 参考流 | 原放行谱系、库存、关联退回或外发单及负担转移凭证 |
| cp_released_activity | released_stock | 实际后续公用事业与服务 | 原队列新增服务账 | 原队列；实际 kWh；电表、读数和日期；电力供方；实际服务、运输和包装交换；因果归属；上游已含内容；本期 Q；原 Q_origin；缺失字段 | 后续服务增量与放行阶段、供方已含活动分开测量。每项实际交换仅一次归回原队列；本期无放行不等于无活动。原分母不可得时保留独立服务结果。 | kWh 及各实际服务单位分别保留 | 每条记录及逐期结账 | 后续期间关联原放行队列 | 实际下游库存或服务场址及已识别外部范围 | 每 1 kg 参考流 | 电表与发票、因果归属、原分母和重复计量审查 |

### 计算规则

Q 是独立记录的首次放行质量；下列平衡用于核对，不得由发运或库存差倒算虚构生产。符号代表实物账项，不是虚构观测值。

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_release | all inventory rows | 仅在合格首次放行 Q 为正时，将可归属于该放行队列的各项交换量分别除以 Q kg，保留分子单位和1 kg参考分母。G、J、D 及后续服务交换不进入新生产账。本期 Q 为零或缺失时仍保留实际未归一化实物和负担记录，不除以 Q、不丢弃新增服务。后续增量链接原队列；仅可用该原队列经核实为正的原放行质量 Q_origin 归一化，队列分开。Q_origin 不可得时披露独立未归一化服务结果及分母缺口，不形成完整归一化数据集。 | cp_mass; cp_activity; cp_burdens; cp_released; cp_released_activity | 每 1 kg 参考流的交换 | eu-pef-2021-corrected |
| prerelease_balance | all datasets | U0 + I = Q + U1 + S + W + T。U0、U1 包括全部周界内放行前化学品净库存及场内留样，内部移动不改变其总量。I 为实际外部接收的此前未放行物毛流量，未放行样品真实退回另列子组；S 为实际外送样品毛流量，不是场内留样或消耗；W 为其他实际向外的化学品废物或损失；T 为未放行对外产品转移。外送样品终点逐项记入 cp_samples，不得把服务废物同时计入 S 和 W；结合测量不确定性调查残差。 | cp_mass; cp_identity; cp_samples | 放行前实物闭合 | |
| postrelease_balance | all datasets | R0 + Q + G + J = R1 + D + L。R0、R1 为已放行期初、期末库存；G 为真实旧已放行商品退回；J 为其他外部已放行接收；D 为实际对外发运或调拨；L 为其他实际有记录的已放行物对外移除，包括外送样品，逐终点与 D 分开。场内已放行留样仍计 R1，不假设现场转化。Q 在前账流出、在后账等额流入，合并抵销。R0、G、J 和 D 均不创造 Q。 | cp_mass; cp_identity; cp_released; cp_samples | 放行后及合并实物闭合 | |
| component_balance | actual packaging components | 每种组件：期初 + 购买首次接收 + 首次非购买外部接收 + 可证同件真实退回 = 声明周界内期末 + 实际对外流转 + 处置 + 其他有记录的移除。内部流转抵销，每次外部接收只分类一次。件数仅用实测同组件单位质量转质量；外地周转实物不计边内库存。 | cp_packaging | 不含虚构数量的组件实物闭合 | eu-pef-2021-corrected |
| burden_balance | all datasets | 期初承接 + 外部带入的剩余已发生份额 + 真正新增 = 当期归属 + 期末承接 + 互斥外转或其他归属。逐原件、队列并以各原始交换单位核对，分别保留化学品和包装历史；退回、复验或重包装均不重复完整背景负担。 | cp_burdens; cp_packaging | 环境负担一次性闭合 | eu-pef-2021-corrected |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference_product | 实际链接前须精确标记产品流及经核实的原生属性和单位链；普通碳酸钙不等效。批次组成与原子分数分列。 | 原始供方批次记录及流直读；sigma-carbonate-492027；cil-carbonate-sds-2017 |
| dq_gate | first_release | 证明此前未放行状态、实际首次放行责任和外包交接；销售或复验政策不能推断合格场址或生产路线。 | cp_identity；原始放行谱系 |
| dq_inventory | all datasets | 解决包装组件、服务范围和每个实际环境交换；区分缺数据、有依据的不适用和实测零。不推断排放因子、操作条件、收率或定量范围。 | cp_activity；cp_packaging；cp_burdens；供方数据集审查 |
| dq_services | released_stock | 本期 Q 为零仍保留 G、J、D、L 原量、库存和新增服务；仅归回原队列及经核实为正的 Q_origin，否则披露未归一化服务结果。条件卡排除须有实际无发生证据，不是猜测零值。 | cp_released；cp_released_activity；cp_samples |
| dq_time | all datasets | 声明实际时期、地域、技术、电表与质量不确定性及样品或留样状态；历史 SDS 或支撑 XML 不是当前平台或批次读数。 | cp_identity；cp_mass；来源版本和供方适用性评估 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_identity | all datasets | 拒绝用普通碳酸钙、方解石身份或自然范围参考碳酸盐核算标记产品；核实唯一精确参考输出、原生属性和单位支撑及全部必需限定信息。产品 UUID 缺失仍是链接缺口。 | wco-hs2022-ch28; sigma-carbonate-492027; iaea-610 |
| validation_gate | all datasets | 实际批次历史不能确立 Q 或显示已放行散装成品时，拒绝首次放行适用性。按需包装、新小瓶、采购、转售或复验均不得更新 Q 或上游制造负担；须有责任方及实际外包交接证据。 | sigma-carbonate-492027; cil-retest-2025 |
| validation_mass | all datasets | Q 须大于零，两本化学品账均须在记录的不确定性内闭合，合并抵销 Q。留样、退回化学品、废物和已放行库存去向互斥；未闭合账差是问题，不是排放或新产品。 | |
| validation_packaging | all datasets | 必须有实际组件身份、原子卡、实物收发存及历史和新增负担覆盖。不论供方是否包含，均区分购买、首次非购买接收和可证真实退回；供方证据缺失阻止完整性声明，不删除交换。 | eu-pef-2021-corrected |
| validation_burdens | all datasets | 必须有产品相容的闭箱上游覆盖，并分别闭合化学品和包装的一次性历史负担账，核对本地与外包活动。覆盖缺口存在时不得声称完整足迹、可用背景或零负担；算术闭合不证明分配有效或科学批准。 | eu-pef-2021-corrected |
| validation_services | all datasets | 实际发生时须有 G、J、D 毛流量和外送样品接口，保留场内留样库存。拒绝在 Q 为零时除以本期分母、丢失新增服务、混用队列或让旧退回或复验库存重新携带整笔背景负担；独立下游服务账不产生 Q。 | cil-retest-2025; eu-pef-2021-corrected |
| validation_units | all datasets | 拒绝以同位素原子百分数作为整体产品质量分数，拒绝推定未经核实的供方能量属性。独立核对千克换算、净质量或皮重、实际 Q 及各分子单位。 | sigma-carbonate-492027 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 有条件的拟用前景方法；完成并独立审查的数据集才可在所声明关口用作 secondary_dataset 或 background_dataset |
| downstream_use | 仅在首次放行适用性、UUID、上游与清单完整性独立确立后，用于精确标记碳酸钙供给建模 |
| allowed_use | 准备采集及审查证据；随后仅链接精确相容产品和关口，披露剩余不确定性 |
| excluded_use | 将当前不完整清单用作完整背景；全分类制造；把零售分装当新生产；内部同位素制备操作；放射性或核用途；普通碳酸钙替代；自动 PEF 符合性 |
| required_metadata | 全部参考限定信息；批次谱系及放行责任；Q；边界与两本库存账；原生流、属性及单位；供方及服务范围；组件和负担账；时期、地域、分配和不确定性 |
| required_quality_disclosure | 分开结构检查、未解决的流或包装或供方或关口证据、科学审查与实证资格。已撰写规则和来源身份不是工厂观测数据或方法批准。 |
| update_trigger | 经核实的批次放行或证书、实际关口变化；流直读身份；供方、组件和服务覆盖；路线或规格、时期或地域变化；独立审查 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD CPC第3版完整说明，2025-06-30，PDF第161页；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 冻结34260标题及邻近34240、34250、3427；无产品工艺或数量。 |
| unsd-cpc3-2026 | official_guidance | UNSD CPC3说明，2026-10-23，CPC3第1429行A:D；https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | 相同34260标题及 HS2022税目2845连接；仅补充分类背景，不修改冻结源。 |
| wco-hs2022-ch28 | official_guidance | WCO HS2022第28章注6末段、税目28.45；https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0628_2022e.pdf?la=en | 人为改变同位素组成的税则身份区分；无同位素制备或工艺数据。 |
| sigma-carbonate-492027 | handbook | Sigma-Aldrich碳-13标记碳酸钙，产品492027，2026-11-22读取；https://www.sigmaaldrich.com/US/en/product/aldrich/492027 | 标记化学身份、固态及目录99原子百分数规格；产品专属 Packaging 说明允许从散装库存按需分装。未提供实际批次、化学含量、首次放行、容器材质或制造负担。 |
| naviaux-calcite-2019 | literature | Naviaux等（2019），Temperature dependence of calcite dissolution kinetics in seawater，Methods第2节、PDF第3页；https://par.nsf.gov/servlets/purl/10123239 | 独立记录实际购入标记粉末 SKU492027；只采用购入事实，采购后的实验室样品制备或溶解在放行边界外。无首次放行、制造清单或第二供方证据。 |
| cil-carbonate-sds-2017 | handbook | CIL CALCIUM CARBONATE(13C,99%)，CLM-7564 SDS，v3.0，2017-05-23，第1至3节及第9节物态字段；https://isotope.com/product/attachment/CLM-7564-1/SDS%20-%20CLM-7564.pdf | 对应标记单一物质及固体粉末；在该版列明制度下未作危险分类。原件明确限定 CAS、EC 条目为未标记物；无批次证书、当日普遍危险性保证、化学纯度测定、首次放行或环境清单。 |
| sigma-product-dating-2016 | handbook | Sigma-Aldrich，Product Dating Information Statement，2016-03-09，第1页首段及 Recommended Retest Dated Products；https://www.sigmaaldrich.com/deepweb/assets/sigmaaldrich/marketing/global/documents/178/822/product-dating-information-statement.pdf | 历史通用质量日期定义：质量放行对应合规分析数据审核，后续复验日期可更新。支持两个事件的区别，不是492027实际批次证书、原始制造方首次放行、当前普遍政策或环境清单；须追溯源头供方此前是否已放行。 |
| cil-retest-2025 | handbook | Jeffrey Drew，CIL北美ISO质量经理，Implementation of Retest and Expiration Dates on Certificates of Analysis，2025-07-15，第1页；https://isotope.com/content/files/images/retest%20and%20expiration%20dates%20on%20coas%20july%202025.pdf | 区分未开封且按建议储存物料的复验和到期日期；2023年起的 CoA 政策不是具体批次历史、实际到期、新生产或环境数据集。 |
| iaea-610 | official_guidance | IAEA-610碳酸盐参考物质，产品说明及稳定同位素参考信息；https://analytical-reference-materials.iaea.org/iaea-610 | 自然范围同位素校准碳酸盐的反例：单凭计量学身份或 delta 值不能识别人为标记化合物；不得用作替代流。 |
| eu-pef-2021-corrected | official_guidance | 欧委会建议(EU)2021/2279，2022-05-23更正合并版，附录I第3.2.1至3.2.2、4.2、4.3、4.4.9、4.5节（参考量PDF第33页，复用第79页，分配第87页）；https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02021H2279-20211230 | 仅一般参考、边界、完整性、分配和复用原则。两本化学品账及原件和队列负担账是本 PCR 声明的核算要求，不是引用欧盟公式；不推断产品清单、周转次数、负担因子或 PEF 批准。 |
