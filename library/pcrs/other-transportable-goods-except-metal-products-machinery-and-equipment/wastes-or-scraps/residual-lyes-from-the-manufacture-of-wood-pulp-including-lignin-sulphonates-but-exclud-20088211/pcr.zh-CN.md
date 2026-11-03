---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.residual-lyes-from-the-manufacture-of-wood-pulp-including-lignin-sulphonates-but-exclud-20088211
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 工业供料用钙基亚硫酸盐制浆残液浓缩液

## 1. 范围与适用性

本PCR覆盖一个有明确物理边界的工业产品：钙基酸性亚硫酸氢盐制浆残液，经澄清和蒸发浓缩，形成保留真实糖、无机盐及水分的未改性整液原料。前景从接收去皮原生针叶木木片开始，包括真实产生残液的完整共同蒸煮洗涤阶段，不缩成外购成品包装。以明确工业供料规范的首次质量放行为终端；所需后续处理另保留。[来源: unsd-cpc-39230; jrc-pulp-bref-2015; lignostar-calcium-liquor]

本路线透明综合JRC工艺证据及供应商液体产品说明，不声称同一当代工厂、SKU或订单。具体场址的酸/基盐/木材及供货接口必须取证。不规定通用收率、固含、组成、剂量、工艺温度/时间或排放因子。FAO另述的精制木质素磺酸钙(40-65)需要额外精制干燥，其工序及食品数值规范不得转借本整液终端。真实数据集须证明法律产品/废物状态和接收方接受。[来源: jrc-pulp-bref-2015; lignostar-calcium-liquor; jecfa-calcium-2008]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.residual-lyes-from-the-manufacture-of-wood-pulp-including-lignin-sulphonates-but-exclud-20088211 |
| classification_refs | CPC 3.0:39230; 较窄的钙基亚硫酸盐制浆残液子集; 映射接受另行审查 |
| covered_products | 原生针叶木制浆残液经澄清及蒸发浓缩形成的整液; 保留残余糖和无机盐的工业液体原料 |
| excluded_products | 妥尔油; 硫酸盐法或烧碱法黑液; 镁/钠/铵基残液; 化学改性或超滤精制木质素磺酸盐; 干粉; 乙醇; 香兰素; 饲料酵母; 以纤维浆为参考产品; 废物处理服务 |
| representative_product | 指定工业接收方接受的未改性含木质素磺酸钙棕色残液浓缩液，用作粘结或分散原料 |
| production_route | 接收去皮原生针叶木木片; 碳酸钙/SO2蒸煮酸制备; 间歇酸性亚硫酸氢盐蒸煮; 喷放及纤维洗涤筛选; 残液澄清; 间接蒸汽蒸发及实际SO2回收; 液体首次质量放行 |
| market_state | 首次质量放行的散装水溶液; 实测净湿质量; 声明固含量及钙反离子; 无通用固含量指标; 后续储存/装载/发运另列增量服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 工业钙基整液粘结/分散原料供给 |
| How much | 1 kg新增首次放行浓缩液净湿质量 |
| How well | 符合真实接收方固含、pH、钙、残余糖盐、游离SO2及不溶物规范；不等同精制等级 |
| How long or cycle | 一个生产放行批次；不声称下游使用寿命 |
| reference_flow_link | liquor_release |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 木浆制造过程中产生的废碱液，包括木质素磺酸盐，但不包括妥尔油 `eb0f8f48-b84e-4202-adaf-41b7ce30b584` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 原生针叶木树种及比例; 木片体积约定与实测水分; 钙基酸性亚硫酸氢盐路线; 碳酸盐含量及SO2供货形态; 蒸煮酸游离及结合SO2; 蒸煮程序; 纸浆与残液分离门; 未精制未改性整液; 钙反离子与实际溶解盐; 固含量及试验方法; 残余糖与不溶物; pH及游离SO2; 接收用途及实际接受限值; 排除包装的批次净湿质量; 首次放行事件及唯一批次身份; 逐交换WIP继承; 蒸汽供方与凝结水返回约定; 气体回收及每个实际出口; 法律及市场状态; 场址及期间; 电力绑定的条件性地区和电压 |

必需限定信息须逐项声明在数据集元数据、过程/参考流备注或等效字段中；缺项即参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_wet_mass | liquor_release | 质量 | kg | Q为cp_release中唯一且新增首次放行浓缩液批次的净湿质量之和。所有制造行使用同一Q。排除容器、发运复验、已放行退货及重复转移。固含量属于限定信息和组成子账，不是另一分母。统计残碱液名称不规定碱性pH，以真实酸性亚硫酸盐化学及实测放行pH为准。 |
| solution_basis | liquid_so2; calcium_carbonate; caustic_solution; liquor_release | 质量 | kg | 每种外购物资按完整供货形态只计一次。含量、载水、钙、硫、木质素磺酸盐及糖均为内含子账。厂内制酸计入外购碳酸盐、SO2、加水及实际混合能耗/损失；内部蒸煮酸不另作采购。 |
| physical_units | all inventory rows | 各行指定属性 | kg; m3; MJ | 先转换原始数量，再分配和归一化。已积分体积不得再乘时间；只有实际速率才积分。液体密度须针对该液体在记录的温度及固含量下独立测量。木片堆积密度须匹配水分、尺寸和装填状态。不得用水密度或次级流系数虚构任一种密度。 |
| utilities_basis | electricity; heating_steam; returned_condensate | 能量与质量 | MJ; kg | 电量kWh乘3.6转换为MJ；所用交流电身份的原生净热值属性仅为其能量参考，不作为燃料热值。蒸汽按实际供给水蒸气kg记录压力、温度、干度和焓。供汽与返回凝结水的质量和焓分别记录；每个接口采用一种供方负荷约定，不得同时绑定kg蒸汽和重复热服务供方。 |
| species_and_water | all inventory rows | 质量 | kg | 分配前独立闭合总湿质量、干固体及C/S/Ca账。游离水、净反应水、物理水汽和结晶/结构水分别取证。碳酸盐酸反应及木质素磺化须有进料、物种及反应程度记录；不得用一个余额拟合两个未知物种。COD/TOC/VOC指标保留原报告基准，不冒充已识别化学物质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 带有林业及削片上游负荷的外供去皮原生针叶木木片; 外购SO2、碳酸钙、淡水及公用工程 |
| starting_condition_role | 从原料到浓缩液的前景制造，包括产生残液的共同制浆阶段 |
| product_classification_scope | 小于CPC3.0:39230范围; 单一钙基工业液体分支; 不自动覆盖其他残碱液 |
| recursive_input_rule | 内部稀残液、回收SO2、蒸发回流及同批返工在匹配转移链抵消，不作新采购。外购浓缩液不得取代木片制残液起点；外购残液整理数据集须另声明边界。 |
| upstream_dataset_requirement | 上游匹配木片树种/加工/体积约定、化学品完整供货配方及质量、水源与处理、实际电力、实际蒸汽返回合同、外部处理及实际进厂运输。缺少供方数据须披露，不设为零。 |
| disclosure | 声明场址/期间、全部阶段、共同未漂白湿浆分离门、实际外供/处理接口、WIP/FG截点、出口拓扑、失败期间、分配及首次放行与放行后增量服务的区别。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_chain | mill | 纳入木片接收筛选及储存、制酸、间歇蒸煮、喷放、纸浆洗涤筛选、稀残液收集、沉降澄清、间接蒸发、SO2收集吸收及实际回用、取样、清洗、空转启停和首次质量放行。未漂白湿浆以实测分离状态离开共同边界；后续专属漂白干燥归于纸浆系统。 | jrc-pulp-bref-2015; lignostar-calcium-liquor |
| boundary_route | mill | 本分支采用碳酸钙/SO2制酸、外购SO2及间接外供蒸汽。这是透明技术综合，不声称单一工厂或SKU。不得复制镁/钠基回收炉、MgO灰闭环、发酵、香兰素、酵母、超滤、pH改性或喷雾干燥。实际存在此类工序须审查边界并显式新增原子流。 | jrc-pulp-bref-2015; lignostar-calcium-liquor; jecfa-calcium-2008 |
| boundary_recovery | weak liquor and outlets | 每笔实测稀残液按来源及实际去向划分为浓缩供料、内部回用、外部处理或有证据的其他分支。分区互斥且穷尽母数量；同一有机固体不得同时外售及燃烧。汽提SO2回制酸是内部回用，不作外购SO2或能源共产品。不得默认燃烧、能源回收或替代信用。 | jrc-pulp-bref-2015; lignostar-calcium-liquor |
| boundary_utilities | utilities and treatment | 所选基础分支使用电驱搬运/泵送及外供间接蒸汽，不虚构厂内燃料锅炉。返回供方的真实凝结水作为独立Product返回，记录温度/焓及水所有权约定，不作基本流排放或销售。加热回路排污、蒸发脏凝液及冷却水排污分别记录。厂外废水处理只绑定一次；随废水转出的原始污染负荷不再作为直接排放。若实际厂内处理或燃烧，须审查工序并分别新增每种化学品、燃料及物种。 | jrc-pulp-bref-2015 |
| boundary_first_release | liquor_release and post_release | Q只计新增首次质量放行的净湿浓缩液。已放行期末FG已属于Q，不再加作生产。后续储存、装载、发运、复验和退货处理按批次另立服务账，保留实际能耗、清洗、包装和损失。已放行退货继承原制造负荷；只有真实新增返工进入服务账。合并制造与服务模块时抵消匹配的内部Q转移，不再形成第二产量。 | jrc-pulp-bref-2015; ilcd-allocation-2010 |
| boundary_completeness | all exchanges | 每卡仅代表一种化学物、完整供货制剂、物理材料、废物或排放物种。路线条件写入相应卡片。真实存在而未列出的每种消泡剂、除垢剂、润滑剂、制冷剂、清洗剂、冷却排污及已识别气/水物种均须在声称完整前新增独立卡及协议。缺席须有流程/计量证据；UUID未解决不使真实流归零。 | jrc-pulp-bref-2015; lignostar-calcium-liquor |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| mill | 钙基共同制浆及残液浓缩 | required | 声明的木片到液体路线 | 完整制造及独立工序原账 | 1 kg reference flow |
| post_release | 放行后批次服务 | conditional | 真实发生的储存装载发运及退货服务 | 独立增量服务账; cp_services | 明确的批次服务基准; 不新增Q |

制造卡属于mill；post_release服务按相同物理流类型逐项建原子服务卡，使用cp_services并关联实际公用工程/包装/废物协议，明确服务分母，不复用制造单位值作原始分子。以下制造阶段按边界测量，保留未分配实物流与归属负荷两个视图。

### 过程：钙基共同制浆及残液浓缩（`mill`）

#### 输入

##### 产品流

###### 木片（`wood_chips`）

接收去皮原生针叶木木片，不是胶合/施胶铺装料或硫酸盐浆。原生Product身份范围较广，按体积计；记录树种、水分、杂质及确切堆积/实木体积约定。独立称湿质量并测量匹配堆积密度用于质量闭合及供方换算；UUID不证明密度或供方适用性。

- 选定流：木片 `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- 流属性/单位：Volume / m3
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_materials`
- 来源：jrc-pulp-bref-2015; lignostar-calcium-liquor

###### 碳酸钙（`calcium_carbonate`）

制备蒸煮酸的一整份碳酸钙供货物。通用Product身份未指定含量、粒径、涂层、地区或路线；保留的旧Other-goods分类不作化学证据。须取得供应商碳酸钙身份及碳酸盐/杂质/水分分析，不默认纯沉淀等级，不重复采购内含Ca或载水。

- 选定流：碳酸钙 `699cf1be-0ca2-4c34-af60-fd58a8e9d549`
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_materials`
- 来源：jrc-pulp-bref-2015; lignostar-calcium-liquor

###### 制酸用外购液态二氧化硫（`liquid_so2`）

一份液态SO2净供货，记录含量、储存损失及实际汽化/吸收公用工程。它不是空气排放、内部回收气、硫酸、亚硫酸钠或硅酸钙。未采用无矛盾的适配Product身份；不得绑定室内基本流SO2或仍带基本流描述的Product候选。

- 选定流：制酸用外购液态二氧化硫
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_materials`
- 来源：jrc-pulp-bref-2015; lignostar-calcium-liquor

###### 淡水（`fresh_water`）

用于制酸、洗浆、吸收/冷却补水和清洗的外供淡水，分用途计量。原生Product质量身份不承诺水源、纯度或处理；保留每个实际供方/水质并匹配上游处理。它不是环境直接取水、海水、默认去离子水或内部凝液。不得根据另一自来水记录的次级属性推算密度。

- 选定流：淡水 `f919c997-a3fc-4274-b239-9cbcd07d52ad`
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_utilities`
- 来源：jrc-pulp-bref-2015; lignostar-calcium-liquor

###### 交流电（`electricity`）

纳入制造操作的真实电网供电一项，以分工序子表记录。本绑定仅适用于CN用户侧35–330 kV电网平均交流电，既非发电/光伏记录亦非韩国电力。绑定前确认接口；其他场址/电压/供电须另核身份与供方。若厂内变压在边界内，损失只计一次。原生参考属性为MJ净热值，仅确立能量单位。

- 选定流：交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：Net calorific value / MJ
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_utilities`
- 来源：jrc-pulp-bref-2015

###### 间接加热用外供水蒸汽（`heating_steam`）

蒸煮和蒸发加热接口实际跨界水蒸气质量，记录压力、温度、干度、焓及供方返回/水约定。本分支蒸汽通过换热器与残液隔离；真实直接注汽须另测掺入水量。不假设11.0 MPaG等级，不以热服务UUID代替kg蒸汽。不虚构厂内锅炉或重复燃料/供方。

- 选定流：间接加热用外供水蒸汽
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_utilities`
- 来源：jrc-pulp-bref-2015

###### 外购氢氧化钠清洗水溶液（`caustic_solution`）

仅在实际用于清洗或适配外部洗气补液时纳入；不默认用量、浓度或进入产品。完整供货溶液只计一次，另列NaOH含量/载水子账及废清洗液去向。95–98%固体及固定30%或50%候选不能替代浓度未知溶液。

- 选定流：外购氢氧化钠清洗水溶液
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_materials`
- 来源：jrc-pulp-bref-2015

###### HDPE装载防拆封签（`hdpe_seal`）

仅当散装出口实际附加时计入一件成型HDPE封签；整件称量并记录保留的少量组分。HDPE树脂、板材、衬层、混合封口族及未指定包装集合均不是该物。制造与放行后服务耗用分列。散装罐/槽车是按服务分配并披露的耐用设备，不属于产品净质量，亦非每批采购新罐。

- 选定流：HDPE装载防拆封签
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_packaging`
- 来源：jrc-pulp-bref-2015

#### 输出

##### 产品流

###### 木浆制造过程中产生的废碱液，包括木质素磺酸盐，但不包括妥尔油（`liquor_release`）

选定广义残碱液Product身份在此限定为新增首次放行的澄清钙基酸性亚硫酸盐整液浓缩液：水溶、未改性未精制，记录真实固含、糖、溶解盐、pH及钙反离子。工厂生产混合及未指定处理不证明钙基等级或供方。中文通用备注把排除的tall oil另称松香油；保留上述正式basename并明确排除妥尔油。不得换用硫酸盐黑液或精制木质素磺酸盐干粉。本行唯一作为参考输出。

- 选定流：木浆制造过程中产生的废碱液，包括木质素磺酸盐，但不包括妥尔油 `eb0f8f48-b84e-4202-adaf-41b7ce30b584`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_release`
- 来源：jrc-pulp-bref-2015; lignostar-calcium-liquor

###### 水洗未漂白钙基亚硫酸盐针叶木浆悬浮液（`wet_pulp`）

洗涤分离门共同纤维输出，含独立测得的水及干浆量。它不是残液分母，也非漂白干燥市场浆。保留真实湿质量、干分、夹带残液/盐及去向；物理输出不自动获得避免纸浆信用。后续专属精整不属于本残液制造。

- 选定流：水洗未漂白钙基亚硫酸盐针叶木浆悬浮液
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_materials`
- 来源：jrc-pulp-bref-2015; lignostar-calcium-liquor

###### 返回供方的加热蒸汽凝结水（`returned_condensate`）

实际返回蒸汽供方的洁净凝结水，单独测量返回温度/焓及水所有权合同。属于加热物理质量/能量门，不是残液蒸发废凝液。用输入蒸汽、返回量、真实放空、排污和存量对账，不假设全部返回，不自动作共产品抵扣。

- 选定流：返回供方的加热蒸汽凝结水
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_utilities`
- 来源：jrc-pulp-bref-2015

###### 随实物毛发运外出的HDPE装载防拆封签（`hdpe_seal_out`）

仅表示同一种封签的实物外出腿。按真实毛流转记录，包括更换/退货批次所带封签；不增加Q，不另作采购，不作可售共产品。放行后新增操作进入服务账。

- 选定流：随实物毛发运外出的HDPE装载防拆封签
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_packaging`
- 来源：jrc-pulp-bref-2015

##### 废物流

###### 不合格针叶木片筛选残渣（`chip_screen_reject`）

真实不合格木片部分，记录水分、具体原因、去向及处理；清洁木粉与污染物同时存在时分别加卡。不得从原木材/水/碳账消失，亦不默认燃料信用。

- 选定流：不合格针叶木片筛选残渣
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_materials`
- 来源：jrc-pulp-bref-2015; lignostar-calcium-liquor

###### 钙基亚硫酸盐木节及纤维筛渣浆（`pulp_screen_reject`）

一股实测湿筛渣流，内含干纤维、夹带残液和水子账。内部返回在外部输出前抵消，外部处理及污染差异流继续独立识别。

- 选定流：钙基亚硫酸盐木节及纤维筛渣浆
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_materials`
- 来源：jrc-pulp-bref-2015; lignostar-calcium-liquor

###### 钙基蒸煮酸制备沉降污泥（`acid_preparation_sludge`）

真实制酸污泥，实测碳酸盐/亚硫酸盐/硫酸盐/杂质组成及水分。不标作纯石膏，不按通用硫酸钙CAS推算结晶水。与残液沉降泥分开。

- 选定流：钙基蒸煮酸制备沉降污泥
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_materials`
- 来源：jrc-pulp-bref-2015; lignostar-calcium-liquor

###### 钙基制浆残液沉降泥（`liquor_decanter_sludge`）

浓缩前真实分离的不溶物，实测夹带整液及水。作为一股接收废物保留组成子账，不另作采购或重复木质素磺酸盐损失。若另有独立化学沉垢清除，须加独立行。

- 选定流：钙基制浆残液沉降泥
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_materials`
- 来源：jrc-pulp-bref-2015; lignostar-calcium-liquor

###### 亚硫酸盐制浆残液蒸发脏凝液（`dirty_condensate`）

残液蒸发真实凝结水送厂外处理，保留SO2/亚硫酸盐、甲醇、有机酸及COD/TOC分析子账。它是一笔湿转移；内含化学物不再作直接水排放。内部凝液回用抵消，另有处理/汽提设备须显式建账。

- 选定流：亚硫酸盐制浆残液蒸发脏凝液
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_outlets`
- 来源：jrc-pulp-bref-2015

###### 钙基亚硫酸盐设备清洗废水（`cleaning_effluent`）

真实清洗水出口，含完整清洗液、夹带纤维/残液及实测组成；停产时不默认零。送指定处理供方。不得把其他工艺废水暗合并入本行。

- 选定流：钙基亚硫酸盐设备清洗废水
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_outlets`
- 来源：jrc-pulp-bref-2015

###### 钙基亚硫酸盐洗浆水排污（`washer_purge`）

真实洗浆水排污，不包含已作稀残液转移或随湿浆带出的水。核对洗水、回用滤液和纤维夹带。若全部内部回收，须证明拓扑而非删除原记录。

- 选定流：钙基亚硫酸盐洗浆水排污
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_outlets`
- 来源：jrc-pulp-bref-2015

###### 间接加热回路水排污（`heating_blowdown`）

仅在真实发生时记录的加热水排污，与返回供方凝结水及残液脏凝液不同；记录含盐、温度及接收方。不存在的排污需证明不适用，不得虚构以配平输入蒸汽。

- 选定流：间接加热回路水排污
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_utilities`
- 来源：jrc-pulp-bref-2015

###### 不合格钙基亚硫酸盐制浆残液浓缩液（`offspec_liquor`）

仅记录真实不合格整液送外部处理；不合格期末WIP及内部返工另保留，不生成新Q。若真实作为另一产品销售，须证明合法功能与价格并在分配前另建Product卡。

- 选定流：不合格钙基亚硫酸盐制浆残液浓缩液
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_outlets`
- 来源：jrc-pulp-bref-2015; lignostar-calcium-liquor

###### 废弃HDPE装载防拆封签（`hdpe_seal_waste`）

实际破损/拆除封签这一种废物。称量并与封签存量、毛外出附着及外部返回对账；内部回用抵消。既非再生树脂产量，亦非抵扣。

- 选定流：废弃HDPE装载防拆封签
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_packaging`
- 来源：jrc-pulp-bref-2015

##### 基本流

###### 二氧化硫（`so2_air`）

收集吸收后真实残余SO2，CAS7446-09-5，测量气体状态及逐出口捕集。原生Elementary绑定为空气未细分且非长期；已知烟囱/城市/室内差异须匹配正确介质身份。内部回收SO2及废水亚硫酸盐不属于此排放。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_outlets`
- 来源：jrc-pulp-bref-2015

###### 甲醇（`methanol_air`）

仅记录捕集后真实测得的空气甲醇CAS67-56-1，不是总VOC、α-甲基苯甲醇、室内甲醇或农业土壤流。原生未细分非长期空气绑定须披露真实受体；已知具体介质时须替换。转移脏凝液中剩余甲醇属于内含子账。目录同义词还混列甲醇钠、甲醇水混合物及官能团/制剂术语，这些不构成授权身份。选择仅限分析确认并匹配主basename/CAS的中性甲醇，不含上述同义词替代物。

- 选定流：甲醇 `fe0acd60-3ddc-11dd-a935-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_outlets`
- 来源：jrc-pulp-bref-2015

###### 乙酸（`acetic_air`）

仅记录真实识别并逸入空气的乙酸CAS64-19-7，不是总酸度/COD、吲哚-3-乙酸或水转移。原生未细分非长期空气绑定须披露真实出口/受体，已知具体介质时正确重绑定。不能仅因浓缩就假设挥发酸排放。原生同义词目录还列乙酸钠、二乙酸纤维素及制剂名，这些化学物不同，均排除。仅采用实测且匹配主basename/CAS的乙酸。

- 选定流：乙酸 `08a91e70-3ddc-11dd-92c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_outlets`
- 来源：jrc-pulp-bref-2015

###### 水蒸气（`water_vapour_air`）

真实未凝结水蒸气CAS7732-18-5排入空气，不含已凝结回用/处理或返回供方的水。原生未细分非长期空气Mass绑定不是外购蒸汽身份。混杂水/同位素同义词不授权重水；所选物理物质为普通H2O水汽。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_outlets`
- 来源：jrc-pulp-bref-2015

###### 碳酸钙酸反应产生并排入空气的二氧化碳（`carbonate_co2_air`）

制酸中地质碳酸盐碳真实形成并排入空气的CO2，分别测定反应碳酸盐、保留无机碳及气体捕集。不是化石燃料CO2或木材生物碳CO2。不得采用标为化石源的UUID，不推断完全反应，不在缺少平衡反应实证时推算生成水。

- 选定流：碳酸钙酸反应产生并排入空气的二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：本行采用第8节唯一最终归一化所得a_j；不再次相除。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_outlets`
- 来源：jrc-pulp-bref-2015; lignostar-calcium-liquor

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_status | joint outputs | 本方法为归因型，仅对确需分配的情形适用ILCD层级。在真实分离门判定湿浆、稀残液及不合格物的法律状态、正/负/零市场价值及实际功能。CPC废物名称或销售本身不证明无负荷投入或处理功能。负价值或不明确物流须另审服务与系统边界，不强造正产品价格。 | ilcd-allocation-2010 |
| allocation_subdivide | each exchange | 先独立计量或虚拟细分专属过程：残液澄清浓缩及其取样、蒸汽、清洗和损失归残液；纸浆专属精整归纸浆。虚拟细分须有物理过程理解及可追溯数量关系。说明剩余黑箱，并在可行细分未实施时披露偏差。 | ilcd-allocation-2010 |
| allocation_causality | remaining shared exchange j | 对仍共享的每个交换，识别其与各功能之间起决定作用的物理因果关系。元素守恒、物料去向、热负荷或设备时间仅在决定该交换且已处理损失及无价值输出时可用。湿质量、干质量或能量本身不是通用分配键。保留逐交换alpha_j及验证证据，不把一个比例自动用于所有化学品、能源及排放。 | ilcd-allocation-2010 |
| allocation_residual_value | genuinely inseparable remainder | 只有缺少可辩护决定性物理关系的剩余交换，才使用共同湿浆/稀残液分离门、实际状态、同期代表性市场价值。若仅有浓缩液或漂白浆交易，须用匹配销售价及专属后续加工、储存、包装和运输成本透明反推分离门价值，采用真实数量并说明时间与币种约定。不得以精制粉体价格代表含糖盐稀残液。报告敏感性及未解决/负价处理，不设固定比例，不任意选物理或经济方法。 | ilcd-allocation-2010 |
| allocation_no_credit | returns and coproducts | 完整未分配的物理质量/物种账独立于分配后的负荷向量。湿浆和每条对外分支是实测物理输出，不自动抵扣。内部回用SO2、水及不合格残液在精确转移处抵消，不作销售或新采购。凝结水返回依明确上游供方约定处理，不自动产生共产品/回收信用。 | jrc-pulp-bref-2015; ilcd-allocation-2010 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | mill | 首次质量放行 | 经校准罐/秤及放行记录 | lot_id; event_id; first_release_flag; gross_mass; tare_mass; wet_net_mass; dry_fraction; sampling_method; pH; free_SO2; calcium; residual_sugars; insolubles; acceptance_limits; rejected_mass; opening_FG; closing_FG; opening_WIP; closing_WIP | 每批扣容器称重；按明确位置/时间对均质批次采用验证过的固含/物种方法取样；保留买方限值及首次放行决定。失败、复验及退货分记。 原始汇总要求：保留批次原始质量和唯一首次放行清单；新增符合条件净湿质量求和为Q；期末FG仍在放行批次内，不再叠加；本处不归一化交换。 下列汇总栏只声明结果基准；本协议不相除，唯一最终归一化在第8节执行。 | kg; fraction; assay units | 每批及每次放行事件 | 完整声明制造批次及全部失败期间 | 浓缩液放行罐及实际实验室 | 每 1 kg 参考流 | 秤/罐校准; 样品链; 分析QC; 接收规范; 签署放行; 存量对账 |
| cp_materials | mill | 每种原子采购及共同物料 | 接收/领用/存量及配制记录 | row_id; event_id; supplier; supplied_form; raw_unit; quantity; opening_stock; closing_stock; assay; moisture; carrier_water; species; chip_volume_convention; measured_density; density_temperature; WIP_mass; WIP_burden_vector; internal_transfer_id; destination | 分别称量采购领用及实物毛输出，逐转移计量；相同装填/水分下配对木片体积及湿质量；保留实际制酸配方、化学物种及分工序存量。 原始汇总要求：按行及工序保留未归一化事件量；分别核对期初加接收与期末加领用；保留全部逐交换继承向量及内部链接；供calc_raw和calc_burden使用。 下列汇总栏只声明结果基准；本协议不相除，唯一最终归一化在第8节执行。 | kg; m3; kg/m3; assay units | 每次接收/领用/转移及存量截点 | 相同批次并追溯期初WIP | 木片场; 制酸; 蒸煮; 洗浆; 澄清; 蒸发 | 每 1 kg 参考流 | 发票; 批记录; 分析证书; 质量体积配对测量; 仪表校准; 转移及WIP账 |
| cp_utilities | mill | 电力及每个水/蒸汽接口 | 子表及供方合同 | row_id; meter_id; raw_quantity; raw_unit; start_end_reading; timestamp; pressure; temperature; steam_quality; mass; enthalpy; condensate_return_mass; return_enthalpy; supplier_water_ownership; cooling_makeup; purge; duration; failure_idle_cleaning_state | 用工序子表核对总表；蒸汽/返回独立计量并记录热力学计算状态及所有权；区分真实速率和积分读数，保留零产出期间。 原始汇总要求：按载体及工序保留原始分子总量，不相除；分列专属/共享服务及供给/返回腿；供calc_raw后calc_burden使用。 下列汇总栏只声明结果基准；本协议不相除，唯一最终归一化在第8节执行。 | MJ; kWh; kg; m3; pressure; temperature; kJ/kg | 连续或逐事件并汇总期间 | 整个批次含启停/空转/清洗 | 所有纳入制造的公用工程接口 | 每 1 kg 参考流 | 校准; 仪表对账; 供方边界; 焓/状态方法; 失败日志 |
| cp_outlets | mill | 每股废物及真实排放物种 | 转移联单及出口/物种监测 | row_id; source_zone; destination; outlet_id; parent_total; partition_id; event_id; wet_mass; dry_solids; species; concentration_basis; gas_volume; volume_is_integrated; gas_flow_rate; interval; gas_temperature; pressure; humidity; measured_capture; bypass; raw_unit | 逐废物称量及实测组成；捕集后按匹配干湿气量及状态测定每个识别物种，保留旁路和无组织排放；说明处理接收方并排除内含污染物重复计算。 原始汇总要求：保留物种及湿物流原始分子与母流/出口拓扑；总量与来源分区为非叠加视图；仅由calc_raw在分配前转换。 下列汇总栏只声明结果基准；本协议不相除，唯一最终归一化在第8节执行。 | kg; m3; kg/m3; mg/Nm3; kg/h | 每次转移及监测时段 | 完整批次含失败/清洗/异常事件 | 每个可溯源液体及气体出口 | 每 1 kg 参考流 | 联单; 接收方; 实验室QC及检出限; 气体标准状态; 捕集测试; 独立平衡 |
| cp_packaging | mill | 每种独立HDPE封签 | 存量及实物流转账 | seal_type; opening_empty; opening_attached_WIP; opening_attached_FG; opening_reusable; purchases; external_returns_received; closing_empty; closing_attached_WIP; closing_attached_FG; closing_reusable; gross_outward_attached; external_return_outward; waste; internal_reuse; unit_article_mass; event_id; cohort | 按类型计数并称整件封签，跟踪每次保管流转；制造与放行后服务分开。无包装须有核实的散装转移配置。 原始汇总要求：逐物件保留原始六腿平衡，抵消内部回用；不得按件数推断kg/件；本处不相除，不把包装计入Q。 下列汇总栏只声明结果基准；本协议不相除，唯一最终归一化在第8节执行。 | kg; items | 每次流转及截点 | 相同实物期初期末截点及服务期间 | 全部受控储存/装载点 | 每 1 kg 参考流 | 盘点; 单件称量; 采购/返回/发运/废物票据; 保管链接 |
| cp_allocation | mill | 每个共享负荷交换 | 细分/因果及共同分离门价值工作表 | exchange_id; exclusive_scope; raw_burden; causal_test; alpha_j; common_gate_state; actual_joint_quantities; contemporaneous_prices; currency; price_period; exclusive_downstream_cost; inherited_allocated_vector; uncertainty; sensitivity | 子表或虚拟细分；验证每个剩余交换的决定性物理关系；仅对真正剩余用可溯源合同/成本反推分离门价值。继承的已分配负荷不再分配。 原始汇总要求：保持原生分子单位的分配表，不归一化地形成alpha_j证据及专属/共享划分；由calc_burden使用一次。 下列汇总栏只声明结果基准；本协议不相除，唯一最终归一化在第8节执行。 | native row unit; currency; fraction | 每生产周期及价格更新 | 相同共同分离批次及代表性价格期间 | 共同制浆及残液专属分支 | 每 1 kg 参考流 | 因果验证; 校准; 分离状态价格校正; 溯源; 敏感性 |
| cp_services | post_release | 已放行批次储存及发运 | 批次服务及FG账 | cohort_id; original_release_id; opening_FG; closing_FG; gross_dispatch; customer_return; incremental_rework; storage_time; utility_row; packaging_row; raw_service_quantity; original_burden_link | 对已放行批次真实增量储存/装载/清洗计量，涵盖历史FG及退货，保留原制造负荷链接；逐公用工程/材料/废物/物种分开。 原始汇总要求：保留服务原始分子及批次链接，不把发运或复验作新Q，不将已含期末FG加入制造产量。 下列汇总栏只声明结果基准；本协议不相除，唯一最终归一化在第8节执行。 | native row units; kg; time | 每次服务事件 | 实际服务期间，保留历史批次溯源 | 放行后罐存/装载接口 | 每 1 kg 参考流 | 仪表/保管日志; FG平衡; 真实增量返工; 原放行 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | all inventory rows | 逐事件先把真实原量换成卡片单位，再分配。浓度乘已积分体积时该体积只用一次；真实速率才对时间积分一次。气体浓度和体积须匹配标准/实际状态及干湿基。体积转质量只用该物质独立实测密度；保留反应/物种证据。 | raw_quantity; raw_unit; measured_density; gas_state; cp_materials; cp_utilities; cp_outlets | R_j | jrc-pulp-bref-2015 |
| calc_burden | all inventory rows | 逐负荷交换形成A_j = dedicated_current_j + alpha_j * shared_current_j + inherited_open_WIP_j - carried_close_WIP_j。当前项保留全部失败、空转、启停、清洗及真实放行前返工负荷。继承向量已经归属，不再乘alpha_j。逐WIP批次及交换关联最终放行，不能仅按质量结转。共同物理输出及出口账保持未分配；其报告A_j为相应实测物理量，不作共产品抵扣。 | R_j; alpha_j; inherited_open_WIP_j; carried_close_WIP_j; cp_materials; cp_allocation | A_j | ilcd-allocation-2010 |
| normalize_once | all inventory rows | a_j = A_j / Q; A_j = 声明卡片单位的归属未归一化交换分子; a_j = 每1 kg参考流的交换量。仅在Q > 0时执行这一次相除；卡片及采集汇总引用同一结果，不再相除。Q = 0时保留全部原始及继承负荷及其去向/批次，不出单位结果，不设零值或虚构分母。 | A_j; Q; cp_release | a_j | ilcd-allocation-2010 |
| calc_physical_gates | mill; post_release | 逐工序及合并边界核对：期初实物存量 + 全部真实外部投入 + 收到外部返回 = 期末实物存量 + 实物毛外出 + 真实排放。内部转移对仅在合并门抵消。gross V为完整逐事件实物净湿外出量，不是客户净销售或Q。F只含新增首次放行事件。X只可从OTHER移除同侧完全相同事件的精确重复，不得移除不同外出、损失、返回或共产品。已放行Q或者作模块边界物理转移，或者包含在已放行期末FG及后续流转中；不可将Q与同一FG再相加。 | opening_stock; external_inputs; external_returns; closing_stock; gross_V; actual_emissions; F; X; OTHER; cp_materials; cp_release | reconciled physical gates | jrc-pulp-bref-2015 |
| calc_packaging | hdpe_seal; hdpe_seal_out; hdpe_seal_waste | 每种真实封签：期初空/附着WIP/附着FG/可回用 + 外购 + 收到外部返回 = 期末空/附着WIP/附着FG/可回用 + 随毛实物发运附着外出 + 向外返回 + 废物。这六腿保留全部期初期末位置；内部回用抵消。匹配同一实物截点及毛发运事件，不以净产品Q替代，不重复采购。 | cp_packaging; opening_packaging; purchases; returns_received; closing_packaging; gross_attached_out; returns_sent; waste | balanced per-type packaging account | ilcd-allocation-2010 |
| calc_outlet_topology | all physical outlets | 每个混合出口总量等于相同取样/控制点下不重叠的实测来源分区。清单选择总量或完整来源分区，并对该真实转移绑定一个接收供方；不得叠加两种视图或多个完整处理供方。化学物种及水独立对账，指标不得填补缺失物种。 | cp_outlets; parent_total; source_partitions; provider_id | single-counted physical outlet | jrc-pulp-bref-2015 |
| calc_services | post_release | 历史FG及客户退货保留原放行批次制造负荷。复验/发运不产生新产量；仅把实测新增储存、装载、清洗和真实返工归其批次。合并时抵消匹配内部放行转移，保留完整FG、毛发运、退货、废物及服务记录。服务强度须另声明服务基准，不再次对制造结果执行normalize_once。 | cp_services; original_burden_link; raw_service_quantity; cohort_id | incremental service ledger | ilcd-allocation-2010 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 每次数据集绑定前核对完整原生身份及全部硬条件；核心残液UUID为广义身份，条件性公用工程UUID保留全部确切限制。供方/等级/辅助UUID缺口须披露，不作零。 | 原生记录; 精确支持链; 供方证书; 边界及介质证据 |
| dq_sampling | cp_release; cp_outlets | 采用代表性均质批次取样及已验证固含/物种分析，保留检出限、校准、平行样、不确定性及取样偏差。不得把引用食品等级纯度或供应商典型固含变为放行限值。 | 取样方案; 方法验证; 分析QC; 实际接收限值 |
| dq_completeness | all stages | 采集完整声明代表周期/期间及异常/失败/Q0/空转/清洗事件；跟踪期初期末WIP及逐交换继承向量。不得将不明负余额或无依据不适用行视为完整。 | 生产日志; 校准; WIP溯源; 独立物理及C/S/Ca/水核查 |
| dq_method | allocation and post-release | 来源适用性及年代与当前工厂记录分开。报告分配因果/价值校正及敏感性、供方热/水约定、完整服务批次及包装账。工程检查不构成科学或翻译审批。 | ILCD工作表; 前景记录; 来源原件; 服务/包装对账 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | whole dataset | 确认由木片制浆形成的钙基酸性亚硫酸氢盐整液供料、明确湿浆分离门及工业接收方。拒绝硫酸盐黑液、其他反离子、外购成品液重包装、精制粉、妥尔油或处置服务替代。 | unsd-cpc-39230; jrc-pulp-bref-2015; lignostar-calcium-liquor; jecfa-calcium-2008 |
| validate_denominator | liquor_release; all inventory rows | 须有cp_release唯一首次放行Q及唯一1 kg湿参考输出。核对A_j/Q仅在normalize_once执行；原始采集及卡片不再除。Q0保留负荷而无单位结果。已放行期末FG、复验、退货及发运不得增加Q。 | ilcd-allocation-2010 |
| validate_physical | each stage and combined gate | 须有完整gross V及独立湿质量、干固体、碳、硫、钙和水核查，并使用实测物种/反应程度及独立存量。内部转移状态/数量匹配并在合并门抵消，保留失败、拒收、每条外部分支及WIP负荷向量。不得一个余额拟合两个未知量。 | jrc-pulp-bref-2015; lignostar-calcium-liquor |
| validate_inventory | all inventory rows | 核对每卡属性单位、完整说明、原始协议、source ids及真实条件。新增每个真实未列原子交换；缺数量或UUID为未解决，不作零。原生参考属性及单位组精确链、介质/电压/地区限制须继续适配数据集。 | jrc-pulp-bref-2015 |
| validate_outlets | liquid and air outlets | 核对来源分区无重叠且穷尽母流；总量与分区不叠加，每次真实转移仅一个供方。脏凝液内含物种不是直接水排放。供方返回凝结水、空气水汽、反应水及脏凝液分别保留。未知物种/流态不得声称完整。 | jrc-pulp-bref-2015 |
| validate_allocation | cp_allocation | 先核专属/虚拟细分，再核逐交换决定性物理因果，最后仅对剩余采用共同门同期实际状态市场价值。不得固定比例、任意质量/价格选择或默认能源/共产品信用；继承向量不得再次分配。 | ilcd-allocation-2010 |
| validate_services_packaging | post_release; cp_packaging | 须有完整期初期末FG批次服务链接及每种包装在相同截点的六腿实物平衡。随毛实物发运封签不是净产品Q或新采购。合并模块抵消匹配内部Q，同时保留全部真实增量服务及退货/返工事件。 | ilcd-allocation-2010 |
| validate_evidence | all claims | 须有完整引用来源及前景适用性、明确技术综合限制、批次/计量/样品一手记录及真实不确定性。候选方法工程符合性与科学审查、翻译审查、映射接受及出版分别判定。 | jrc-pulp-bref-2015; lignostar-calcium-liquor; jecfa-calcium-2008; ilcd-allocation-2010 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 按所述固含及门点开展钙基整液浓缩液工业粘结/分散供料建模 |
| allowed_use | 具备实际接收方接受及明确分配、上游与服务约定的适配液体供料 |
| excluded_use | 通用木质素磺酸盐化学品; 精制食品等级; 粉体; 妥尔油; 硫酸盐黑液; 其他反离子; 自动抵扣燃料/回收; 废物处理服务 |
| required_metadata | 原生针叶木树种及比例; 木片体积约定与实测水分; 钙基酸性亚硫酸氢盐路线; 碳酸盐含量及SO2供货形态; 蒸煮酸游离及结合SO2; 蒸煮程序; 纸浆与残液分离门; 未精制未改性整液; 钙反离子与实际溶解盐; 固含量及试验方法; 残余糖与不溶物; pH及游离SO2; 接收用途及实际接受限值; 排除包装的批次净湿质量; 首次放行事件及唯一批次身份; 逐交换WIP继承; 蒸汽供方与凝结水返回约定; 气体回收及每个实际出口; 法律及市场状态; 场址及期间; 电力绑定的条件性地区和电压 |
| required_quality_disclosure | 一手计量及取样; 来源年代/适用性; 未知及辅助UUID/供方缺口; 完整Q0和失败数据; 独立平衡; WIP向量; 分配证据及敏感性; 公用工程返回合同; 独立服务/包装账 |
| update_trigger | 木材/基盐/制酸路线、精制改性、浓缩状态、出口/回收拓扑、首次放行门、蒸汽/电供、接收用途、法律市场状态、实质分配或证据失效发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-39230 | official_guidance | United Nations Statistics Division, CPC Version 3.0, code39230, official detail and repository source CPC_Ver_3.0_Structure_30Jun2025.csv; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/39230 | 分类语境包括木质素磺酸盐并明确排除妥尔油；不作身份、产品状态或LCA分配证据。 |
| jrc-pulp-bref-2015 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Production of Pulp, Paper and Board, 2015, §§4.1.1–4.1.5/4.2.2/4.3.22; PDF409/415/417–424/437/456/471/517–518, printed371/377/379–386/399/418/433/479–480; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | 一手技术路线语境：钙基与镁基回收区别、纤维/残液分离、副产品分支、SO2/凝液及异常控制。图4.4是镁基，图4.10含酵母，均不代表所选钙基整液工厂。不采用数值默认值或当前合规结论。 |
| lignostar-calcium-liquor | handbook | LignoStar Group BV, Calcium Lignosulfonates, Calcium Bisulfite Pulping Process and liquid/powder interface, undated page retained2026-10-26; https://www.lignostar.com/en/calcium-lignosulfonates/ | 供应商一手技术说明：钙反离子蒸煮、碳酸盐/氢氧化物制酸、沉降澄清、蒸发及工业供货。支持可行液体分支；典型固含/时间/温度及营销文字不作规定。非同一SKU/工厂，亦非LCA分配方法。 |
| jecfa-calcium-2008 | official_guidance | FAO/WHO JECFA, Calcium Lignosulfonate (40-65), Chemical and Technical Assessment, 69th JECFA2008, §§4–5, PDF1–3 with complete8-page context; https://www.fao.org/fileadmin/templates/agns/pdf/jecfa/cta/69/Calcium_Lignosulfonate__40_65.pdf | 独立一手制造反例：酸调整、超滤及喷雾干燥属于超出本工业整液的精制食品等级终端。用于保留糖/亚硫酸盐/钙语境，不转用食品等级限值、精制聚合物身份或定量清单。 |
| ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, first edition March2010, §§7.9.2–7.9.3, PDF275–292/printed255–272, especially printed256/259/264–268; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因情景确需分配时的方法指导：细分/虚拟细分、逐交换决定性物理因果及剩余实际状态共同门经济价值。它不是制浆配方、工厂比例、自动零负荷或回收抵扣。 |
