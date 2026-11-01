---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.wind-musical-instruments-including-pipe-organs-accordians-and-brass-wind-instruments
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 漆饰活塞阀黄铜小号制造

## 1. 范围与适用性

本方法覆盖新制漆饰声学活塞阀黄铜小号，从实际外购金属供货形态及互不重叠成件，经真实现场部件成形切削、连接、表面准备、涂漆、总装调整、功能检验至唯一首次质量放行。终端包括真实喇叭口、吹口/主管、完整可用活塞/阀壳/弹簧/滑管系统、支撑件及确实随供的可用号嘴。调性、合金牌号、零件自制/外购、漆化学和配件均为数据集限定。独立厂家证据支持透明技术综合，不代表同一SKU、共同工厂、订单、认证或实测BOM。[yamaha-bell; yamaha-casing; yamaha-piston; yamaha-mouthpipe; yamaha-final; yamaha-manual; adams-eb.]

参考产品排除木管/簧片乐器、手风琴、管风琴、转阀小号、短号/富鲁格号、玩具或非音乐器具、电子/MIDI乐器或音箱、独售喇叭口/管/号嘴、裸金属及琴体电镀路线、外购整件简单重包装。宽泛原生管乐器族正面包含已制造铜管乐器，但不证明这些排除路线方法相同。外购已镀活塞或号嘴的上游镀覆承接一次，不虚构现场镀槽。Adams默认镀饰降E案例用于饰面及配件反例，其可选漆饰不代表共同实测工序。[un-cpc3-notes; yamaha-finish; adams-eb.]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.wind-musical-instruments-including-pipe-organs-accordians-and-brass-wind-instruments |
| classification_refs | CPC 3.0 38330；narrower；当前接受关系以`classifications/mappings/cpc-3.0-to-pcr.yaml`及`docs/adr/cpc3-additional34-20261029-38330.md`为准；须满足完整方法范围与排除项，不表示整类覆盖或科学/翻译批准 |
| covered_products | 完整新制漆饰声学活塞阀黄铜小号，明确实际供货构型 |
| excluded_products | 木管簧片手风琴管风琴；转阀及其他铜管终端；零件；电子玩具；琴体电镀裸铜；整件重包装 |
| representative_product | 构型及调性明确的完整活塞阀漆饰小号 |
| production_route | 真实金属及部件供料→现场实际部件工序→连接清洁抛光涂漆→总装调整功能验收 |
| market_state | 工厂端首次质量放行整件，供货号嘴与配件范围明确 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完整小号通过声学气柱产生音乐，按实际构型可正常演奏 |
| How much | 完整合格构型首次放行净质量中的1千克 |
| How well | 按厂家及委托规格完成真实外观、阀作用、气密、音高调整及试奏，保留判据；不规定检验数值 |
| How long or cycle | 一次制造批次首次放行；原批次后续真实服务按观测H另报，无默认寿命 |
| reference_flow_link | finished |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 管乐器（包括管风琴、手风琴及铜管乐器） `426979e0-dbcc-48d8-b69d-d2d9a9541521` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 完整声学小号构型; 活塞阀系统; 实际调性与规格; 喇叭口吹口主管及阀滑管构型; 真实合金牌号及供货形态; 现场及外购部件工序; 漆制剂及施工固化路线; 随供号嘴及可用配件范围; 排除包装琴盒及另供配件瓶的净质量; 校准称量及唯一首次验收; 生产批次Q及期末已放行FG; 原服务批次Q_H及观测H; 原料WIP及未归属服务继承向量; 完整毛实物腿及包装责任; 真实后续作业许可检验及处置; 原生限制及供方覆盖 |

必需限定信息须完整记录在数据集元数据、过程说明、参考流备注或产品说明；缺项不能称参考定义完整。整体核心的所有原生限制及排除范围亦完整保留在finished消费卡。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | finished | Mass | kg | 以cp_release实测同构型首次放行完整乐器净kg，Q为各实测净量直接和，不用件数或管几何推重量；期末FG已含于Q。 |
| native_extensive | all inventory rows | 每行实际原生广延属性 | 各行声明单位 | 不把Mass/kg强套MJ/m3/h。分别保留物理V及负荷A，真实原单位换算后仅calc_quotient除一次。 |
| whole_preparation | all preparation rows | Mass | kg | 整份供货制剂采购一次；内部成分和载水仅分析子账，实际厂内另加量独立。 |
| no_density_inference | all mass-volume bridges | 实际物质的质量与体积 | kg; m3 | 每件↔kg须真实同构型净质量测量；Number of items到item仅相同物理单位因子1。面积非本参考基准，次级属性系数不推密度或重量；积分总量不再乘时间。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实外购金属板管棒及成件、整份制剂和公用工程的供货状态 |
| starting_condition_role | 前景接口，保留供应既有上游负荷 |
| product_classification_scope | 38330内窄化完整漆饰活塞阀黄铜小号，不覆盖整个分类叶 |
| recursive_input_rule | 整供物上游一次，内部部件同身份量历史交接配对抵消，不以成品重包装替代制造 |
| upstream_dataset_requirement | 匹配真实合金供货加工、成件、制剂、水能、工装、运输和废物处理，缺口明示 |
| disclosure | 构型、实际路线、供货责任、首次放行门Q、原Q_H/H服务、毛实物与负荷维度、未决及排除 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_chain | manufacturing_system | 从真实收到的合金板/管/棒及部件状态开始。纳入实际下料、锤制/旋压、拉管/整形/弯制、填料回收、真实阀加工/拉削/钎焊/研磨、软焊总装、清洗抛光、涂漆及真实固化干燥、润滑调整及最终功能/外观/试奏。不能强设所有工厂均有液压成形、窑、每种手工、电镀槽或特定能源系统。 | `yamaha-bell`; `yamaha-casing`; `yamaha-piston`; `yamaha-mouthpipe`; `yamaha-final` |
| boundary_supply | all inputs | 每份真实整供物仅一个上游界面：整份外购制剂或部件采购一次，内含树脂/溶剂/水/合金组分仅分析子账。现场配制则逐项列真实购料、另加载体、混配能源损失，不再采购内部配制成品。外购成品阀组、弹簧、喇叭口承接供应制造，仅去除重复现场工序，不删上游负荷。 | `yamaha-casing`; `yamaha-piston`; `yamaha-final`; `ilcd-attributional-2010` |
| boundary_q | first release | 选择首次质量放行而非净交付。Q为生产批次中各完整构型首次放行实测净质量之和，每件一次。期末已放行FG已在Q中，不能再加产量或扣其制造负荷。未合格的失败/留置/样品不入Q。重验、返货、获准或未获准放行后作业及发运均不造新Q。 | `yamaha-final`; `ilcd-attributional-2010` |
| boundary_history | materials and WIP | 原始实物期初期末量与每流继承负荷向量分开。制造B_open/B_close含原料存量、WIP和真正未用/未归属的非WIP存料或服务预付，不含已归Q的已放行FG制造负荷。已作存量校正的消耗不能再扣。内部部件交接按相同身份/数量/历史配对合并抵消；BOM不是额外外部产品或参考输出。 | `ilcd-attributional-2010` |
| boundary_actual | all processes | 采集全部真实失败批次、零产出、启停、待机、清理、样品、维修、返工和损失。Q=0保留真实原量及负荷，不出单位结果。缺UUID、供应方或未来工厂量不是零或截断。声明工厂完整前须逐项新增每种真实未列单一材料、合金、整份制剂、气体、燃料、工装、废物出口及已鉴别化学排放。 | `ilcd-attributional-2010` |
| boundary_services | fg_service | 仓储、搬运、包装及发运保留真实独立归属服务账H，使用原批次Q_H及观测时域。原制造历史为身份承接，不再采购。仅未用/未归属服务或预付可结转，已执行原批次服务不因FG期末留库而扣。真实重工须厂家/规格许可及后检/验收/处置才能确认持续合格；缺许可或后检失败不能删除已发生物流负荷。损伤或凹陷活塞不能简单重新插回，保留厂家联系经销商的说明。自然湿度交换不虚构作业许可。 | `yamaha-manual`; `ilcd-attributional-2010` |
| boundary_physical | all physical gates | 制造、放行FG/服务及合并物理门均以完整毛腿、独立期初期末湿存量和真实反应转移项核对。毛实物流不得按分配或经济份额缩量。每相关合金/元素及独立H2O相态、溶解/颗粒物种和实测排放分账；COD、VOC、NOx、总金属、总离子、PM是指标而非单分子。不能一个残差求两个未知，不编氧化、反应水、合金损失或密度。 | `ilcd-attributional-2010` |
| boundary_pack | packaging_assets | 每种真实包装材料分别保留期初空/附WIP/附FG/复用存量和P/I/ER/S/EO/W六事件腿，再加真实互不重叠维修及水交换。期末为完整湿质量。内部复用抵消。新增材料/水即使留期末也有真实入流；X_in/X_out仅对其他同侧流项去重，不对期末存量或反侧去重。随货I有真实质量及一个上游责任方。整件湿物与内容物/皮重桥须互不重叠。 应用cp_pack完整等式：真实F_in/F_out，且仅减去其他同侧已证重复X；不得扣存量或对侧项。 | `ilcd-attributional-2010` |
| boundary_waste | all waste | 普通制造废物、失败件、样品或外售废料保留既有制造和处理负荷。外送/出售不自动产生T_other扣项、替代产品信用、成品率分配或回收信用。一个真实混合废物出口只有一个废物交换；实测来源池之和等于整份湿总量，不叠加重复供方/处理。仅真实有独立功能的其他批次/产品及正当分配移交才允许一次负荷向量转移，毛实物仍全。 若用独立实测origin-W分区替代实际混合总量，它们是同一出口和唯一供应方的非加和表达，不是新增处置；真实收集门与来源过程交接须明确。 | `ilcd-attributional-2010` |
| boundary_energy | utilities | 电、热、各燃料按原生广延能量单位；真实蒸汽/热水载体kg、外部产品凝结水/水返还及热状态/焓与交付MJ分开，水能供方边界仅一次，不重复供方采购、不默认蒸汽锅炉或返还信用。已积分时段气体总量不再乘时间，仅真实速率才积分。 | `ilcd-attributional-2010` |
| boundary_downstream | dataset boundary | 声明含上游链接及生产废物处理的摇篮至首次放行边界；区分实测门到门与不完整上游链接。后续真实前景服务另按原批次报告。下游分销、演奏使用维护及报废场景不在本制造结果；用户手册不是工厂用量、寿命或认证证据。 | `yamaha-manual`; `ilcd-attributional-2010` |
| packaging_receipt_basis | packaging | 逐实际完整包装制品，P记录有偿采购（单独或随货付费，有无单独发票均可）。I记录首次非采购外部入流，含单独赠与、借用、租赁/周转池领入和未付费供方随附包装；供方随附仅为I的一个子集。ER必须以同一制品或可审计匹配批次关联本场所先前外发记录；仅有他方使用史不属于退回。P/I/ER互斥。已有匹配物理制品卡及原始分账覆盖这些来源，但仍须满足全部原生材料/形态/状态限制；不相容真实制品须另列原子行，不得替用UUID。X_in/X_out仍为独立实测水料变化，不能替代整制品接收。保留完整湿毛量、所有者/保管者、付费/非采购依据、来源、原外发关联、实际状态单位和继承制造/服务向量。无偿接收既非新制造，也不自动零负荷；真实服务及新增运输搬运按正确原批群和分母归属一次，真实未用服务另留，不设默认寿命或抵扣。存量、毛实物流和负荷向量分开。这是声明的守恒前景核算实现，不声称引用原文规定这些变量名。 | ilcd-attributional-2010 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| components | 金属及部件准备 | required | 真实自制外购分支并记录收货状态 | 制造 | Q |
| assembly_finish | 连接清洗抛光及漆饰 | required | 仅实际剩余工序 | 制造 | Q |
| release | 总装调整及首次放行 | required | 完整乐器首次合格 | 制造 | Q |
| fg_service | 放行FG服务 | conditional | 真实仓储搬运包装发运返货及放行后作业 | 原批次服务及收存 | Q_H; H |
| packaging_assets | 包装及资产收存 | conditional | 真实材料事件及资产服务或收存 | 制造或原批次服务及收存 | Q; Q_H; H |

所有卡以实际单事件毛V为实物维度，独立负荷结果用A_c/A_H；两维不叠加成第二采购。条件卡不证明工厂存在该流；真实存在而未列的单一流须新增，不能藏于零或other集合。一个真实混废出口仅启用mixed_bin或对应实际混箱卡，其来源卡W转作非叠加子账。

### 过程：金属及部件准备（`components`）

#### 输入

##### 产品流

###### 铜锌合金（`brass_sheet`）

实际供喇叭口下料成形的板料；记录合金实测成分与供货形态，不规定牌号或比例。外购板料的轧制上游只承接一次。 不替代纯铜或白铜。本卡须限定实际单一板料及其上游加工。

- 选定流：黄铜板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-bell`; `ilcd-attributional-2010`

###### 铜锌合金（`brass_tube`）

实际用于吹口管或滑管的外购管坯；记录既有拉制和供货形态，只计剩余实际整形弯制，不重计供应方已完成工序。 不替代纯铜或白铜。本卡须限定实际单一管料及其上游加工。

- 选定流：黄铜管
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-mouthpipe`; `ilcd-attributional-2010`

###### 铜锌合金（`brass_rod`）

实际用于切削明确支架或阀部件的棒料；实心供料区别于管坯及外购成件。 原生产品流/质量记录为铜锌合金，正式分类限定为铜棒、杆和型材。本绑定仅用于本卡实际实心棒料，不用于板料或空心管料；原生泛合金名称不能越过供货形态限定。实际Cu/Zn成分、合金牌号、供货状态、上游加工及供应方/数据提供方兼容性均须独立实证，不假定成分或牌号。不替代纯铜或白铜。

- 选定流：铜锌合金 `e422cfbf-5444-43ab-a68a-22be82e2ad47`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-casing`; `ilcd-attributional-2010`

###### 铜镍锌合金管坯（`nickelsilver_tube`）

仅真实白铜管坯；不等于金属银，不以纯铜替代。

- 选定流：铜镍锌合金管坯
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### 已成形黄铜小号喇叭口（`bell_bought`）

仅外购已成形喇叭口，声明真实饰面状态；现场采购账不再加其内含板料和已完成成形。 原生产品/质量为厂内生产混合的完整已制造乐器零件/配件家族。本卡仅用于其角色所指的一项真实供给小号部件，实际材料、加工/表面状态、自制外购边界及供应方兼容性均须独立记录。孤立的下一分类备注“384 体育用品”是分类标题缺陷，不使体育用品适用。本投入不是完整小号、原合金或任意发动机/液压零件。完整外购分总成的内含部件只归属一次，本类独立部件卡仅用于该整份供应之外。

- 选定流：乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### 小号活塞阀壳分总成（`valve_block`）

一份加工状态明确的外购阀壳分总成；上游含其自带阀壳和连接；另供活塞与弹簧须互不重叠。 原生产品/质量为厂内生产混合的完整已制造乐器零件/配件家族。本卡仅用于其角色所指的一项真实供给小号部件，实际材料、加工/表面状态、自制外购边界及供应方兼容性均须独立记录。孤立的下一分类备注“384 体育用品”是分类标题缺陷，不使体育用品适用。本投入不是完整小号、原合金或任意发动机/液压零件。完整外购分总成的内含部件只归属一次，本类独立部件卡仅用于该整份供应之外。

- 选定流：乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### 已制造小号活塞阀（`piston_bought`）

真实单独供货活塞，凭供应证据确认金属及镀层；普通铜或钢液压阀不是乐器活塞。 原生产品/质量为厂内生产混合的完整已制造乐器零件/配件家族。本卡仅用于其角色所指的一项真实供给小号部件，实际材料、加工/表面状态、自制外购边界及供应方兼容性均须独立记录。孤立的下一分类备注“384 体育用品”是分类标题缺陷，不使体育用品适用。本投入不是完整小号、原合金或任意发动机/液压零件。完整外购分总成的内含部件只归属一次，本类独立部件卡仅用于该整份供应之外。

- 选定流：乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### 已制造黄铜小号阀滑管（`valve_slide`）

真实外购阀滑管，确认内外管；其管料不再作为外购管坯重复计入。 原生产品/质量为厂内生产混合的完整已制造乐器零件/配件家族。本卡仅用于其角色所指的一项真实供给小号部件，实际材料、加工/表面状态、自制外购边界及供应方兼容性均须独立记录。孤立的下一分类备注“384 体育用品”是分类标题缺陷，不使体育用品适用。本投入不是完整小号、原合金或任意发动机/液压零件。完整外购分总成的内含部件只归属一次，本类独立部件卡仅用于该整份供应之外。

- 选定流：乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### 已制造黄铜小号主调音滑管（`main_slide`）

真实外购主调音滑管，确认匹配的管径和构型但不规定尺寸。 原生产品/质量为厂内生产混合的完整已制造乐器零件/配件家族。本卡仅用于其角色所指的一项真实供给小号部件，实际材料、加工/表面状态、自制外购边界及供应方兼容性均须独立记录。孤立的下一分类备注“384 体育用品”是分类标题缺陷，不使体育用品适用。本投入不是完整小号、原合金或任意发动机/液压零件。完整外购分总成的内含部件只归属一次，本类独立部件卡仅用于该整份供应之外。

- 选定流：乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### 已制造黄铜小号支架（`braces`）

一件实际供货支架，声明饰面及随附件；阀组内含部件仅在其子账。 原生产品/质量为厂内生产混合的完整已制造乐器零件/配件家族。本卡仅用于其角色所指的一项真实供给小号部件，实际材料、加工/表面状态、自制外购边界及供应方兼容性均须独立记录。孤立的下一分类备注“384 体育用品”是分类标题缺陷，不使体育用品适用。本投入不是完整小号、原合金或任意发动机/液压零件。完整外购分总成的内含部件只归属一次，本类独立部件卡仅用于该整份供应之外。

- 选定流：乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### 已制造小号排水键总成（`waterkey`）

实际供货排水键，仅含文件所列组件；确认是否已含弹簧与密封垫。 原生产品/质量为厂内生产混合的完整已制造乐器零件/配件家族。本卡仅用于其角色所指的一项真实供给小号部件，实际材料、加工/表面状态、自制外购边界及供应方兼容性均须独立记录。孤立的下一分类备注“384 体育用品”是分类标题缺陷，不使体育用品适用。本投入不是完整小号、原合金或任意发动机/液压零件。完整外购分总成的内含部件只归属一次，本类独立部件卡仅用于该整份供应之外。

- 选定流：乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### 已制造小号按键帽（`finger_button`）

一件实际供货按键帽，保留真实金属和镶嵌材料身份，与所供活塞组件互不重复。 原生产品/质量为厂内生产混合的完整已制造乐器零件/配件家族。本卡仅用于其角色所指的一项真实供给小号部件，实际材料、加工/表面状态、自制外购边界及供应方兼容性均须独立记录。孤立的下一分类备注“384 体育用品”是分类标题缺陷，不使体育用品适用。本投入不是完整小号、原合金或任意发动机/液压零件。完整外购分总成的内含部件只归属一次，本类独立部件卡仅用于该整份供应之外。

- 选定流：乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### 聚合物小号活塞导向件（`guide`）

一件实际另购活塞导向件，确认真实聚合物配方及整件供货。 原生产品/质量为厂内生产混合的完整已制造乐器零件/配件家族。本卡仅用于其角色所指的一项真实供给小号部件，实际材料、加工/表面状态、自制外购边界及供应方兼容性均须独立记录。孤立的下一分类备注“384 体育用品”是分类标题缺陷，不使体育用品适用。本投入不是完整小号、原合金或任意发动机/液压零件。完整外购分总成的内含部件只归属一次，本类独立部件卡仅用于该整份供应之外。

- 选定流：乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### 毛毡小号阀缓冲垫（`felt`）

一件供货毛毡缓冲垫，记录真实纤维混合及水分，不假设为羊毛。 原生产品/质量为厂内生产混合的完整已制造乐器零件/配件家族。本卡仅用于其角色所指的一项真实供给小号部件，实际材料、加工/表面状态、自制外购边界及供应方兼容性均须独立记录。孤立的下一分类备注“384 体育用品”是分类标题缺陷，不使体育用品适用。本投入不是完整小号、原合金或任意发动机/液压零件。完整外购分总成的内含部件只归属一次，本类独立部件卡仅用于该整份供应之外。

- 选定流：乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### 软木小号排水键垫（`cork`）

仅真实独立软木密封垫；外购排水键已含时不得另计。 原生产品/质量覆盖厂内生产混合的已制造天然或凝聚软木制品。本卡限定一项实际软木密封垫，记录真实天然/凝聚状态及内含黏结剂；不是原树皮、泛生物质或橡胶垫，不规定黏结剂配方，不重复计入外购放水键的内含垫。

- 选定流：天然软木制品，凝结软木及其制品 `9dee16fe-f882-489f-9b63-3c0ee5148e02`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### 已制造黄铜小号号嘴（`mouthpiece`）

条件纳入供货可用号嘴及其饰面构型；客户另配号嘴排除于产品质量，不假定一律随供。 原生产品/质量为厂内生产混合的完整已制造乐器零件/配件家族。本卡仅用于其角色所指的一项真实供给小号部件，实际材料、加工/表面状态、自制外购边界及供应方兼容性均须独立记录。孤立的下一分类备注“384 体育用品”是分类标题缺陷，不使体育用品适用。本投入不是完整小号、原合金或任意发动机/液压零件。完整外购分总成的内含部件只归属一次，本类独立部件卡仅用于该整份供应之外。

- 选定流：乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-structure`; `yamaha-manual`; `adams-eb`; `yamaha-casing`

###### 铁或钢制弹簧和弹簧片（`spring`）

仅真实另供铁或钢制成品弹簧，工厂生产混合。宽泛原生弹簧族不规定圈径或刚度；已含于外购分总成者不再计。 原生为铁钢弹簧已制造成品族，工厂生产混合、质量/kg，无固定牌号、刚度、圈径或地域。中文通用流体措辞误译不凌驾于一致弹簧名称/成品路线/产品类型。

- 选定流：铁或钢制弹簧和弹簧片 `650cda2f-7baa-413f-ac22-ff0da54ea8ba`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 小号活塞金属管坯（`piston_blank`）

仅实际现场制造活塞时纳入；确定真实单一合金及管坯，另供气路小管另列实测流，不假定蒙乃尔或不锈钢成分。

- 选定流：小号活塞金属管坯
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 小号活塞气路金属小管（`pathway_tube`）

仅实际独立供货并嵌入活塞的气路小管，明确单一合金；成品活塞已含时不另购计。

- 选定流：小号活塞气路金属小管
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 易熔弯管填充合金（`bending_alloy`）

仅真实供货的单一易熔填充合金；记录完整合金分析和回收存量，不规定铅镉成分或操作配方。熔出复用是内部回路。

- 选定流：易熔弯管填充合金
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-bell`; `yamaha-mouthpipe`

###### 拉管润滑制剂（`drawing_fluid`）

真实整份外购拉管制剂只计一次；活性组分与载体仅成分子账，真实厂内稀释另计加水。

- 选定流：拉管润滑制剂
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 金属切削液浓缩制剂（`cutting_fluid`）

真实整份外购切削液浓缩制剂，预含水只计一次；真实稀释水及可回收槽液存量分账，不能删去留存新增入流。 原生产品/质量金属加工液家族明确包括切削和冲压，未固定浓度、牌号、供应地域或配方。本卡限定为与作业相容的一项真实整份外购切削液浓缩制剂，记录真实油/水/添加剂分析及供应状态。其载体水不另作接收，不以纯油、压缩气体或未列明各实际投入的厂内配方替代。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 交流电（`electricity_components`）

条件为真实中国用户侧低于1千伏电网平均消费混合交流电；原生净热值/MJ在此表示电能，不是燃料燃烧。实测千瓦时按精确3.6 MJ/kWh换算。其他地域、电压、供电须另用兼容流。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_components`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 自来水（`water_components`）

仅真实工厂端处理后饮用级市政供水产品，记录处理与供应方。仅采用质量/kg；次级体积系数不是密度。质体换算须独立测该状态密度。外购整份制剂载水不重复；真实另加水即使留期末湿存量仍是入流。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_components`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 已制造小号阀顶盖（`valve_top_cap`）

仅真实另购单个顶盖，声明金属及饰面；整份外购阀组已含时不再采购计。 原生产品/质量为厂内生产混合的完整已制造乐器零件/配件家族。本卡仅用于其角色所指的一项真实供给小号部件，实际材料、加工/表面状态、自制外购边界及供应方兼容性均须独立记录。孤立的下一分类备注“384 体育用品”是分类标题缺陷，不使体育用品适用。本投入不是完整小号、原合金或任意发动机/液压零件。完整外购分总成的内含部件只归属一次，本类独立部件卡仅用于该整份供应之外。

- 选定流：乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-manual`; `yamaha-structure`

###### 已制造小号阀底盖（`valve_bottom_cap`）

仅真实另供底盖，声明金属饰面；保留装配边界，不与另一外购部件内含量重复。 原生产品/质量为厂内生产混合的完整已制造乐器零件/配件家族。本卡仅用于其角色所指的一项真实供给小号部件，实际材料、加工/表面状态、自制外购边界及供应方兼容性均须独立记录。孤立的下一分类备注“384 体育用品”是分类标题缺陷，不使体育用品适用。本投入不是完整小号、原合金或任意发动机/液压零件。完整外购分总成的内含部件只归属一次，本类独立部件卡仅用于该整份供应之外。

- 选定流：乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_components`
- 来源：`yamaha-manual`; `yamaha-structure`

##### 基本流

###### 大气水蒸气吸收（`humidity_in_components`）

条件为制造或仓储搬运中的真实自然吸湿；独立量测水质量与环境状态，不是购水、仅限维修的水、液态排水或假设获准操作。

- 选定流：大气水蒸气吸收
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species_components`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

#### 输出

##### 废物流

###### 小号工序水性废液（`effluent_components`）

仅一个真实外部混合水性废液出口，整份湿质量一次；独立量测溶解/颗粒组分仅为不叠加分析子账。仅真实处理后向环境排放且在所选处理方边界外，才另列基本流。

- 选定流：小号工序水性废液
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_components`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

##### 基本流

###### 水蒸气（`vapour_components`）

仅真实排入未特指空气的普通H2O气体，CAS 7732-18-5，基本流质量/kg。原生多语同义词含同位素、冰和羟基词，不改变所选普通气态H2O身份。不能冒充液雾或据此推反应/结构水；真实仓储自然失水亦保留。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species_components`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

### 过程：连接清洗抛光及漆饰（`assembly_finish`）

#### 输入

##### 产品流

###### 锡焊料（`solder`）

仅实际金属连接用锡为主软焊料。原生为工厂焊接材料产品，电子用途为例举而非唯一用途，不规定铅银铜比例。含芯整份供货须另作整份制剂，不能合金加重复助焊剂。

- 选定流：锡焊料 `ea4c87ef-6623-4c40-831f-ef146fd4b4d8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 铜基焊料（`braze`）

仅真实铜基连接合金，适配原生致密金属接头用途；成分及供货形态须采集。银为主钎料须另建兼容身份和原子卡。

- 选定流：铜基焊料 `70972c8b-0052-4f75-9cac-6a94bdbd6b9a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 金属连接助焊制剂（`flux`）

按实际连接路线整份供货；波峰焊免清洗原生不适用，未采用。整份焊料制剂已含助焊剂时不另计。

- 选定流：金属连接助焊制剂
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_assembly_finish`
- 来源：`yamaha-final`; `yamaha-manual`; `ilcd-attributional-2010`

###### 水性金属清洗制剂（`cleaner`）

实际整份外购水性金属清洗剂，配方和载水只计一次，不编酸碱配方；各真实另供槽液化学品新增独立卡。

- 选定流：水性金属清洗制剂
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_assembly_finish`
- 来源：`yamaha-final`; `yamaha-manual`; `ilcd-attributional-2010`

###### 金属布轮抛光制剂（`polish`）

真实整份供货的磨料抛光制剂。已读散装抛光剂原生参考属性为铝含量，不能证明整份制剂质量，故未绑定。

- 选定流：金属布轮抛光制剂
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_assembly_finish`
- 来源：`yamaha-final`; `yamaha-manual`; `ilcd-attributional-2010`

###### 小号透明漆涂饰制剂（`lacquer`）

真实整份供货透明漆，声明树脂和载体化学；静电施工不证明粉末漆或紫外固化，不预设树脂或溶剂。

- 选定流：小号透明漆涂饰制剂
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_assembly_finish`
- 来源：`yamaha-final`; `yamaha-manual`; `ilcd-attributional-2010`

###### 透明漆稀释制剂（`thinner`）

仅真实另购整份稀释剂；不假定溶剂组成，外购漆内含溶剂不再采购计。

- 选定流：透明漆稀释制剂
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_assembly_finish`
- 来源：`yamaha-final`; `yamaha-manual`; `ilcd-attributional-2010`

###### 小号活塞润滑油制剂（`valve_oil`）

实际整份供货且供应适配的小号活塞油；有固定热值限定的石油馏分无匹配证据不采用，不规定用量。

- 选定流：小号活塞润滑油制剂
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_assembly_finish`
- 来源：`yamaha-final`; `yamaha-manual`; `ilcd-attributional-2010`

###### 小号滑管润滑脂制剂（`slide_grease`）

实际整份滑管脂，区别于液态活塞油及所购制剂内含组分。

- 选定流：小号滑管润滑脂制剂
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_assembly_finish`
- 来源：`yamaha-final`; `yamaha-manual`; `ilcd-attributional-2010`

###### 棉布抛光轮（`buff_cloth`）

仅真实棉布轮，采集供应纤维确认及磨耗更换；磨料制剂仅在独立供货时另列。

- 选定流：棉布抛光轮
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_assembly_finish`
- 来源：`yamaha-final`; `yamaha-manual`; `ilcd-attributional-2010`

###### 氧化铝砂轮（`grind_wheel`）

仅真实含结合剂和支撑的整件氧化铝砂轮，其他成分磨具不强套。

- 选定流：氧化铝砂轮
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_assembly_finish`
- 来源：`yamaha-final`; `yamaha-manual`; `ilcd-attributional-2010`

###### 漆喷房过滤滤芯（`filter`）

仅真实整件可更换喷漆滤芯；空干质量与截留湿料分账，不重复截留漆。

- 选定流：漆喷房过滤滤芯
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_assembly_finish`
- 来源：`yamaha-final`; `yamaha-manual`; `ilcd-attributional-2010`

###### 交流电（`electricity_assembly_finish`）

条件为真实中国用户侧低于1千伏电网平均消费混合交流电；原生净热值/MJ在此表示电能，不是燃料燃烧。实测千瓦时按精确3.6 MJ/kWh换算。其他地域、电压、供电须另用兼容流。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 自来水（`water_assembly_finish`）

仅真实工厂端处理后饮用级市政供水产品，记录处理与供应方。仅采用质量/kg；次级体积系数不是密度。质体换算须独立测该状态密度。外购整份制剂载水不重复；真实另加水即使留期末湿存量仍是入流。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 管输天然气燃料（`gas`）

仅实际现场燃烧器或钎焊窑所耗气体燃料，记录组成及交付状态；甲烷CAS且质量/体积系数皆1的原生不能证明混合气组成或密度，未采用。外购热为另一供热责任界面。

- 选定流：管输天然气燃料
- 流属性/单位：Volume / m3
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 外购工业过程热（`heat`）

仅真实外购交付热，声明技术及供方；独立计量传热，不假设锅炉或同份供热重复现场燃料。

- 选定流：外购工业过程热
- 流属性/单位：Net calorific value / MJ
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 交付蒸汽载体（`steam_in`）

条件为真实外部蒸汽载体kg，记录压力温度及实际焓；供方水能覆盖只有一个上游责任方，不新增重复采购。

- 选定流：交付蒸汽载体
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 换热供水载体（`thermal_water_in`）

仅真实外部热水载体，独立质量和焓；与整份蒸汽/热水供方已含水不得重复。

- 选定流：换热供水载体
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

##### 基本流

###### 大气水蒸气吸收（`humidity_in_assembly_finish`）

条件为制造或仓储搬运中的真实自然吸湿；独立量测水质量与环境状态，不是购水、仅限维修的水、液态排水或假设获准操作。

- 选定流：大气水蒸气吸收
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 氧气工序空气分流（`air_o2_inputs`）

仅真实氧气按本行方向和介质跨越物理边界，包括实测未反应穿流；组成和气体质量独立确认，不叠加空气集合流。瓶装采购气体另需产品身份及供应方。 原生基本流/质量O2，CAS7782-44-7，介质为空气资源／空气中的可再生元素资源。仅用于该真实方向独立测得的普通气态O2；不以液体/同位素/离子别名替代，不假定空气比例，不用总元素残差，也不叠加整空气。购入整空气或保护气保留独立产品/供应方归属，其内含气体不再额外作为免费大气资源。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 氮气工序空气分流（`air_n2_inputs`）

仅真实氮气按本行方向和介质跨越物理边界，包括实测未反应穿流；组成和气体质量独立确认，不叠加空气集合流。瓶装采购气体另需产品身份及供应方。 原生基本流/质量N2，CAS7727-37-9，介质为空气资源／空气中的可再生元素资源。仅用于该真实方向独立测得的普通气态N2；不以液体/同位素/离子别名替代，不假定空气比例，不用总元素残差，也不叠加整空气。购入整空气或保护气保留独立产品/供应方归属，其内含气体不再额外作为免费大气资源。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 氩气工序空气分流（`air_ar_inputs`）

仅真实氩气按本行方向和介质跨越物理边界，包括实测未反应穿流；组成和气体质量独立确认，不叠加空气集合流。瓶装采购气体另需产品身份及供应方。 原生基本流/质量Ar，CAS7440-37-1，介质为空气资源／空气中的可再生元素资源。仅用于该真实方向独立测得的普通气态Ar；不以液体/同位素/离子别名替代，不假定空气比例，不用总元素残差，也不叠加整空气。购入整空气或保护气保留独立产品/供应方归属，其内含气体不再额外作为免费大气资源。

- 选定流：氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

#### 输出

##### 产品流

###### 外返凝结水（`condensate_return`）

仅真实返给外部供方的产品凝结水，记录接收方与热状态；毛实物退回区别于负荷结转，无自动信用。

- 选定流：外返凝结水
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 外返换热水（`thermal_water_return`）

仅真实按实测热状态返给外部的产品水；内循环抵消，不是再采购、环境水或负供热。

- 选定流：外返换热水
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

##### 废物流

###### 小号工序水性废液（`effluent_assembly_finish`）

仅一个真实外部混合水性废液出口，整份湿质量一次；独立量测溶解/颗粒组分仅为不叠加分析子账。仅真实处理后向环境排放且在所选处理方边界外，才另列基本流。

- 选定流：小号工序水性废液
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 黄铜切削屑（`brass_shavings`）

真实独立黄铜切屑出口，独立量测附着切削液及合金；出售或回收不扣既有制造和处理负荷。 原生废物流/质量为工厂全球机加工产生并收集的切屑/刨花/车屑，不包含后续处理。本卡限定实际独立黄铜机加工屑，保留独立测量的附着冷却液/水/污染物；不替换白铜，不作重熔产品、生活混合垃圾或假定下游回收信用。真实处理归属仅在本收集边界之外计一次。

- 选定流：金属废料、刨花和车屑 `2a5ca712-1e70-48bf-b665-e6d49a55f3cb`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 铜镍锌合金边角料（`nickelsilver_scrap`）

仅独立外出白铜废料，不是银金属，也不是混合废箱同一份总量。

- 选定流：铜镍锌合金边角料
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 收集金属抛光粉尘（`polish_dust`）

一股实际收集并送处理的混合粉尘废物，组分元素分析不把PM说成单分子；逸散部分须其真实化学与颗粒身份。

- 选定流：收集金属抛光粉尘
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 金属表面加工湿污泥（`sludge`）

仅真实独立湿污泥出口，水与固体独立量测，不是已测废液的第二份估计。

- 选定流：金属表面加工湿污泥
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 废弃漆制剂残余（`lacquer_residue`）

一股真实独立整份漆残余，含真实溶剂树脂；已在弃滤芯内者仅作为该出口子账。

- 选定流：废弃漆制剂残余
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 废漆过滤滤芯（`spent_filter`）

一个真实整件含截留漆的湿弃滤芯出口，截留漆只含一次，避免另列同份残漆并只配一次处理。

- 选定流：废漆过滤滤芯
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 废金属加工乳化液（`spent_fluid`）

仅真实独立外出废乳化液；整份湿质量与分析子账不得叠加另一混合废液或废箱总量。

- 选定流：废金属加工乳化液
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 废易熔弯管填充合金（`bending_residue`）

真实独立废弃合金并分析污染；内部回收可复用填料是存量和内部循环，不默认副产品。

- 选定流：废易熔弯管填充合金
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 不合格完整小号（`rejected_instrument`）

仅处置后真实废弃完整乐器，不进入合格Q，保留失败作业全部负荷，无自动副产品或替代金属信用。

- 选定流：不合格完整小号
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 小号车间混合固体废物（`mixed_bin`）

条件为一个真实混合外出废箱；各来源池独立量测子账之和等于单一湿箱总量；同份物质不能同时另列切屑/滤芯/布/包装废出口，只配一个处理方并处理一次。

- 选定流：小号车间混合固体废物
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

##### 基本流

###### 水蒸气（`vapour_assembly_finish`）

仅真实排入未特指空气的普通H2O气体，CAS 7732-18-5，基本流质量/kg。原生多语同义词含同位素、冰和羟基词，不改变所选普通气态H2O身份。不能冒充液雾或据此推反应/结构水；真实仓储自然失水亦保留。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 氧气工序空气分流（`air_o2_outputs`）

仅真实氧气按本行方向和介质跨越物理边界，包括实测未反应穿流；组成和气体质量独立确认，不叠加空气集合流。瓶装采购气体另需产品身份及供应方。 原生基本流/质量O2，CAS7782-44-7，介质为未特指空气排放。仅用于该真实方向独立测得的普通气态O2；不以液体/同位素/离子别名替代，不假定空气比例，不用总元素残差，也不叠加整空气。真实排气来源与毛穿流，同净生成及购入气体归属分开。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 氮气工序空气分流（`air_n2_outputs`）

仅真实氮气按本行方向和介质跨越物理边界，包括实测未反应穿流；组成和气体质量独立确认，不叠加空气集合流。瓶装采购气体另需产品身份及供应方。 原生基本流/质量N2，CAS7727-37-9，介质为未特指空气排放。仅用于该真实方向独立测得的普通气态N2；不以液体/同位素/离子别名替代，不假定空气比例，不用总元素残差，也不叠加整空气。真实排气来源与毛穿流，同净生成及购入气体归属分开。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 氩气工序空气分流（`air_ar_outputs`）

仅真实氩气按本行方向和介质跨越物理边界，包括实测未反应穿流；组成和气体质量独立确认，不叠加空气集合流。瓶装采购气体另需产品身份及供应方。 原生基本流/质量Ar，CAS7440-37-1，介质为未特指空气排放。仅用于该真实方向独立测得的普通气态Ar；不以液体/同位素/离子别名替代，不假定空气比例，不用总元素残差，也不叠加整空气。真实排气来源与毛穿流，同净生成及购入气体归属分开。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 二氧化碳（化石源）（`carbon_dioxide`）

仅独立鉴别且真实排向空气的二氧化碳；以独立量测和真实碳来源确定分子质量，VOC/COD/NOx总量或质量残差不证明该物种或默认排放因子。 仅化石源CO2气体，CAS 124-38-9，排向未特指空气基本流、质量/kg；化石来源须独立记录。干冰/离子同义词不允许改作液固离子流或CO2吸收信用。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 甲烷（`methane`）

仅独立鉴别且真实排向空气的甲烷；以独立量测和真实碳来源确定分子质量，VOC/COD/NOx总量或质量残差不证明该物种或默认排放因子。 未采用UUID：精确化石甲烷原生同义词混入炭黑、石墨、纳米管和其他分子，存在未解颗粒/结构硬冲突。真实CH4独立实测量及化石来源证据仍保留。

- 选定流：甲烷
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 一氧化碳（化石源）（`carbon_monoxide`）

仅独立鉴别且真实排向空气的一氧化碳；以独立量测和真实碳来源确定分子质量，VOC/COD/NOx总量或质量残差不证明该物种或默认排放因子。 仅化石源CO气体，CAS 630-08-0，排向未特指空气基本流、质量/kg；即使原生有冷冻液体/烟气同义词，也不能替代为这些流。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 二氧化氮（`nitrogen_dioxide`）

仅独立鉴别且真实排向空气的二氧化氮；以独立量测和真实碳来源确定分子质量，VOC/COD/NOx总量或质量残差不证明该物种或默认排放因子。

- 选定流：二氧化氮
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 一氧化氮（`nitric_oxide`）

仅独立鉴别且真实排向空气的一氧化氮；以独立量测和真实碳来源确定分子质量，VOC/COD/NOx总量或质量残差不证明该物种或默认排放因子。

- 选定流：一氧化氮
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 乙醇（`ethanol`）

仅独立鉴别且真实排向空气的乙醇；以独立量测和真实碳来源确定分子质量，VOC/COD/NOx总量或质量残差不证明该物种或默认排放因子。

- 选定流：乙醇
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 丙酮（`acetone`）

仅独立鉴别且真实排向空气的丙酮；以独立量测和真实碳来源确定分子质量，VOC/COD/NOx总量或质量残差不证明该物种或默认排放因子。 未采用UUID：已读丙酮原生还含不兼容醚/缩醛别名，该绑定分子身份仍未解，不允许将混溶剂当丙酮。

- 选定流：丙酮
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species_assembly_finish`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

### 过程：总装调整及首次放行（`release`）

#### 输入

##### 产品流

###### 交流电（`electricity_release`）

条件为真实中国用户侧低于1千伏电网平均消费混合交流电；原生净热值/MJ在此表示电能，不是燃料燃烧。实测千瓦时按精确3.6 MJ/kWh换算。其他地域、电压、供电须另用兼容流。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_release`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 自来水（`water_release`）

仅真实工厂端处理后饮用级市政供水产品，记录处理与供应方。仅采用质量/kg；次级体积系数不是密度。质体换算须独立测该状态密度。外购整份制剂载水不重复；真实另加水即使留期末湿存量仍是入流。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_release`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

##### 基本流

###### 大气水蒸气吸收（`humidity_in_release`）

条件为制造或仓储搬运中的真实自然吸湿；独立量测水质量与环境状态，不是购水、仅限维修的水、液态排水或假设获准操作。

- 选定流：大气水蒸气吸收
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species_release`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

#### 输出

##### 产品流

###### 管乐器（包括管风琴、手风琴及铜管乐器）（`finished`）

严格为新制漆饰声学活塞阀黄铜小号整件，含喇叭口、吹口/主管、真实阀壳/活塞/弹簧/滑管/支架及确实随供可用号嘴；原生为工厂生产混合、已制造成品产品流、质量/kg。原生不规定牌号、合金比例、调性或地域。宽泛族名不把本方法扩至管风琴、手风琴、木管、零件、玩具或电子产品。原生中文通用说明将flow误译为气流，但双语名称、成品路线、产品类型和质量参考共同指向实物。称完整合格构型净质量，排除一次性包装、琴盒及另供配件瓶。首次放行Q包括期末FG且每整件一次；内部组件交接配对抵消。

- 选定流：管乐器（包括管风琴、手风琴及铜管乐器） `426979e0-dbcc-48d8-b69d-d2d9a9541521`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：`yamaha-structure`; `yamaha-final`; `yamaha-manual`; `adams-eb`; `un-cpc3-notes`

##### 废物流

###### 小号工序水性废液（`effluent_release`）

仅一个真实外部混合水性废液出口，整份湿质量一次；独立量测溶解/颗粒组分仅为不叠加分析子账。仅真实处理后向环境排放且在所选处理方边界外，才另列基本流。

- 选定流：小号工序水性废液
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_release`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

##### 基本流

###### 水蒸气（`vapour_release`）

仅真实排入未特指空气的普通H2O气体，CAS 7732-18-5，基本流质量/kg。原生多语同义词含同位素、冰和羟基词，不改变所选普通气态H2O身份。不能冒充液雾或据此推反应/结构水；真实仓储自然失水亦保留。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species_release`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

### 过程：放行FG服务（`fg_service`）

#### 输入

##### 产品流

###### 交流电（`electricity_fg_service`）

条件为真实中国用户侧低于1千伏电网平均消费混合交流电；原生净热值/MJ在此表示电能，不是燃料燃烧。实测千瓦时按精确3.6 MJ/kWh换算。其他地域、电压、供电须另用兼容流。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_service`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 自来水（`water_fg_service`）

仅真实工厂端处理后饮用级市政供水产品，记录处理与供应方。仅采用质量/kg；次级体积系数不是密度。质体换算须独立测该状态密度。外购整份制剂载水不重复；真实另加水即使留期末湿存量仍是入流。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_service`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 已放行小号收存（`fg_received`）

仅已放行完整FG的真实外部收存或独立建模内部配对交接；保留原Q_H及历史向量，不是新制造采购。 原生产品/质量为厂内生产混合的已制造完整管乐器家族；本卡仅用于同一完整漆面活塞阀黄铜小号及真实原配置/批群。宽名称及误译为气流的备注均不识别喇叭口、散阀、转阀乐器、电镀琴身、玩具或电子乐器。仅当实际处置和整件状态支持时使用本产品接口；真实废弃物保留独立实际废物流记录。退回/持有的湿态物理状态与历史负荷独立测量，不产生新 Q。

- 选定流：管乐器（包括管风琴、手风琴及铜管乐器） `426979e0-dbcc-48d8-b69d-d2d9a9541521`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_service`
- 来源：`yamaha-manual`; `ilcd-attributional-2010`

###### 外返已放行小号（`fg_return`）

真实外返整件按收货状态称量，变化水分、零件、损失及包装分别确认；保留原交付索引，不假定返重等于原发重或产生新Q。 原生产品/质量为厂内生产混合的已制造完整管乐器家族；本卡仅用于同一完整漆面活塞阀黄铜小号及真实原配置/批群。宽名称及误译为气流的备注均不识别喇叭口、散阀、转阀乐器、电镀琴身、玩具或电子乐器。仅当实际处置和整件状态支持时使用本产品接口；真实废弃物保留独立实际废物流记录。退回/持有的湿态物理状态与历史负荷独立测量，不产生新 Q。

- 选定流：管乐器（包括管风琴、手风琴及铜管乐器） `426979e0-dbcc-48d8-b69d-d2d9a9541521`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_service`
- 来源：`yamaha-manual`; `ilcd-attributional-2010`

###### 铁或钢制弹簧和弹簧片（`repair_spring`）

仅真实另供新替换铁或钢成品弹簧，即使留期末FG也保留入流，不是整件新乐器。 原生为铁钢弹簧已制造成品族，工厂生产混合、质量/kg，无固定牌号、刚度、圈径或地域。中文通用流体措辞误译不凌驾于一致弹簧名称/成品路线/产品类型。

- 选定流：铁或钢制弹簧和弹簧片 `650cda2f-7baa-413f-ac22-ff0da54ea8ba`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_service`
- 来源：`yamaha-manual`; `ilcd-attributional-2010`

###### 小号活塞润滑油制剂（`repair_oil`）

真实整份维修活塞油一次，区别于历史制造油；已执行服务即使FG仍留置也归原批次。

- 选定流：小号活塞润滑油制剂
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_service`
- 来源：`yamaha-manual`; `ilcd-attributional-2010`

##### 基本流

###### 大气水蒸气吸收（`humidity_in_fg_service`）

条件为制造或仓储搬运中的真实自然吸湿；独立量测水质量与环境状态，不是购水、仅限维修的水、液态排水或假设获准操作。

- 选定流：大气水蒸气吸收
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_service`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

#### 输出

##### 产品流

###### 已放行小号毛发运（`fg_shipped`）

全部真实完整FG毛发运，用真实质量及原序号批次；发运不是首次生产，期末FG不再加Q。 原生产品/质量为厂内生产混合的已制造完整管乐器家族；本卡仅用于同一完整漆面活塞阀黄铜小号及真实原配置/批群。宽名称及误译为气流的备注均不识别喇叭口、散阀、转阀乐器、电镀琴身、玩具或电子乐器。仅当实际处置和整件状态支持时使用本产品接口；真实废弃物保留独立实际废物流记录。退回/持有的湿态物理状态与历史负荷独立测量，不产生新 Q。

- 选定流：管乐器（包括管风琴、手风琴及铜管乐器） `426979e0-dbcc-48d8-b69d-d2d9a9541521`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_service`
- 来源：`yamaha-manual`; `ilcd-attributional-2010`

###### 小号留置品对外移交（`fg_held_out`）

仅真实毛对外留置/退回移交，记录接收及处置；负荷移交需独立正当功能/批次决定。 原生产品/质量为厂内生产混合的已制造完整管乐器家族；本卡仅用于同一完整漆面活塞阀黄铜小号及真实原配置/批群。宽名称及误译为气流的备注均不识别喇叭口、散阀、转阀乐器、电镀琴身、玩具或电子乐器。仅当实际处置和整件状态支持时使用本产品接口；真实废弃物保留独立实际废物流记录。退回/持有的湿态物理状态与历史负荷独立测量，不产生新 Q。

- 选定流：管乐器（包括管风琴、手风琴及铜管乐器） `426979e0-dbcc-48d8-b69d-d2d9a9541521`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_service`
- 来源：`yamaha-manual`; `ilcd-attributional-2010`

##### 废物流

###### 小号工序水性废液（`effluent_fg_service`）

仅一个真实外部混合水性废液出口，整份湿质量一次；独立量测溶解/颗粒组分仅为不叠加分析子账。仅真实处理后向环境排放且在所选处理方边界外，才另列基本流。

- 选定流：小号工序水性废液
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_service`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

###### 拆出小号弹簧（`removed_spring`）

真实拆出弹簧仅在独立废弃时为一个废出口；合金附油需量测，区别于混箱内子账。

- 选定流：拆出小号弹簧
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_service`
- 来源：`yamaha-manual`; `ilcd-attributional-2010`

###### 废弃留置小号（`fg_failed`）

仅真实失败或未经许可作业后弃置FG；保留全部真实实物流及增量。许可/后检决定持续合格与处置，不决定是否采集已发生作业。

- 选定流：废弃留置小号
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_service`
- 来源：`yamaha-manual`; `ilcd-attributional-2010`

##### 基本流

###### 水蒸气（`vapour_fg_service`）

仅真实排入未特指空气的普通H2O气体，CAS 7732-18-5，基本流质量/kg。原生多语同义词含同位素、冰和羟基词，不改变所选普通气态H2O身份。不能冒充液雾或据此推反应/结构水；真实仓储自然失水亦保留。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_service`
- 来源：`yamaha-final`; `ilcd-attributional-2010`

### 过程：包装及资产收存（`packaging_assets`）

#### 输入

##### 产品流

###### 瓦楞运输纸箱（`carton_P`）

一份真实完整的瓦楞纸板运输纸箱，限定实际构造和构型，不是纸箱、塑料袋、膜、内衬等包装的集合。相容原子Product流UUID仍待解析。记录真实纸板/瓦楞/层数构造、纤维组成、涂层/复合、湿态、内含胶黏剂/紧固件及供方范围；不预设通用纤维比例、处理、尺寸、重量或寿命。供货整箱内含组成随整箱计一次，真实另供衬件、胶带及其他材料各保互斥独立行及唯一上游归属。保留本卡按包装边界与原始协议定义的P/I/ER/S/EO角色，已有packaging_receipt_basis时依其执行；新供方身份不能改变事件定义。按本卡声明的Mass/kg保完整实测湿毛量及原事件/门/保管/批群，无论即时使用或留期末。保留期初期末空/附着/复用存量、内部复用及独立实测水料变化；不以存量、负荷或经济份额校正缩小毛流。真实制造/服务负荷另按原批群规则和唯一归一化归属一次；单纯毛接收或外发不产生新制造、采购负荷、供方链接或信用。绑定前须解析物理相容的纸箱身份/供方；身份缺口须披露，不能以混合包装集合或虚构UUID代替。

- 选定流: 瓦楞运输纸箱
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 瓦楞运输纸箱（`carton_I`）

一份真实完整的瓦楞纸板运输纸箱，限定实际构造和构型，不是纸箱、塑料袋、膜、内衬等包装的集合。相容原子Product流UUID仍待解析。记录真实纸板/瓦楞/层数构造、纤维组成、涂层/复合、湿态、内含胶黏剂/紧固件及供方范围；不预设通用纤维比例、处理、尺寸、重量或寿命。供货整箱内含组成随整箱计一次，真实另供衬件、胶带及其他材料各保互斥独立行及唯一上游归属。保留本卡按包装边界与原始协议定义的P/I/ER/S/EO角色，已有packaging_receipt_basis时依其执行；新供方身份不能改变事件定义。按本卡声明的Mass/kg保完整实测湿毛量及原事件/门/保管/批群，无论即时使用或留期末。保留期初期末空/附着/复用存量、内部复用及独立实测水料变化；不以存量、负荷或经济份额校正缩小毛流。真实制造/服务负荷另按原批群规则和唯一归一化归属一次；单纯毛接收或外发不产生新制造、采购负荷、供方链接或信用。绑定前须解析物理相容的纸箱身份/供方；身份缺口须披露，不能以混合包装集合或虚构UUID代替。

- 选定流: 瓦楞运输纸箱
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 瓦楞运输纸箱（`carton_ER`）

一份真实完整的瓦楞纸板运输纸箱，限定实际构造和构型，不是纸箱、塑料袋、膜、内衬等包装的集合。相容原子Product流UUID仍待解析。记录真实纸板/瓦楞/层数构造、纤维组成、涂层/复合、湿态、内含胶黏剂/紧固件及供方范围；不预设通用纤维比例、处理、尺寸、重量或寿命。供货整箱内含组成随整箱计一次，真实另供衬件、胶带及其他材料各保互斥独立行及唯一上游归属。保留本卡按包装边界与原始协议定义的P/I/ER/S/EO角色，已有packaging_receipt_basis时依其执行；新供方身份不能改变事件定义。按本卡声明的Mass/kg保完整实测湿毛量及原事件/门/保管/批群，无论即时使用或留期末。保留期初期末空/附着/复用存量、内部复用及独立实测水料变化；不以存量、负荷或经济份额校正缩小毛流。真实制造/服务负荷另按原批群规则和唯一归一化归属一次；单纯毛接收或外发不产生新制造、采购负荷、供方链接或信用。绑定前须解析物理相容的纸箱身份/供方；身份缺口须披露，不能以混合包装集合或虚构UUID代替。

- 选定流: 瓦楞运输纸箱
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 聚乙烯防护袋（`pe_bag_P`）

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。条件为真实聚乙烯防护袋另购收存事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。 原生产品/质量为厂内生产混合的完整聚乙烯袋，CAS9002-88-4；不是聚乙烯树脂、聚丙烯/PET薄膜或泡沫。采用实际完整PE保护袋，声明封口件、湿态及供应/退回条件，不固定厚度或周转寿命。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 聚乙烯防护袋（`pe_bag_I`）

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。条件为真实聚乙烯防护袋首次非采购外部入流事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。 原生产品/质量为厂内生产混合的完整聚乙烯袋，CAS9002-88-4；不是聚乙烯树脂、聚丙烯/PET薄膜或泡沫。采用实际完整PE保护袋，声明封口件、湿态及供应/退回条件，不固定厚度或周转寿命。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 聚乙烯防护袋（`pe_bag_ER`）

条件为真实聚乙烯防护袋收到外部返还事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。 原生产品/质量为厂内生产混合的完整聚乙烯袋，CAS9002-88-4；不是聚乙烯树脂、聚丙烯/PET薄膜或泡沫。采用实际完整PE保护袋，声明封口件、湿态及供应/退回条件，不固定厚度或周转寿命。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 纸质包裹薄纸（`tissue_P`）

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。条件为真实纸质包裹薄纸另购收存事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：纸质包裹薄纸
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 纸质包裹薄纸（`tissue_I`）

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。条件为真实纸质包裹薄纸首次非采购外部入流事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：纸质包裹薄纸
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 纸质包裹薄纸（`tissue_ER`）

条件为真实纸质包裹薄纸收到外部返还事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：纸质包裹薄纸
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 聚乙烯泡沫衬垫（`foam_P`）

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。条件为真实聚乙烯泡沫衬垫另购收存事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：聚乙烯泡沫衬垫
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 聚乙烯泡沫衬垫（`foam_I`）

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。条件为真实聚乙烯泡沫衬垫首次非采购外部入流事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：聚乙烯泡沫衬垫
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 聚乙烯泡沫衬垫（`foam_ER`）

条件为真实聚乙烯泡沫衬垫收到外部返还事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：聚乙烯泡沫衬垫
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 可复用木托盘（`pallet_P`）

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。条件为真实可复用木托盘另购收存事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。 原生产品/质量家族为厂内生产混合的完整已制造木质载货平台；本卡是一项实际木托盘，不是散修补木块、整机或固定欧标规格。记录真实组件、内含水分、新旧状态及归属，不默认周转次数或寿命，不重复采购整件内含零件。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 可复用木托盘（`pallet_I`）

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。条件为真实可复用木托盘首次非采购外部入流事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。 原生产品/质量家族为厂内生产混合的完整已制造木质载货平台；本卡是一项实际木托盘，不是散修补木块、整机或固定欧标规格。记录真实组件、内含水分、新旧状态及归属，不默认周转次数或寿命，不重复采购整件内含零件。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 可复用木托盘（`pallet_ER`）

条件为真实可复用木托盘收到外部返还事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。 原生产品/质量家族为厂内生产混合的完整已制造木质载货平台；本卡是一项实际木托盘，不是散修补木块、整机或固定欧标规格。记录真实组件、内含水分、新旧状态及归属，不默认周转次数或寿命，不重复采购整件内含零件。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 高密度聚乙烯润滑油瓶（`bottle_P`）

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。条件为真实高密度聚乙烯润滑油瓶另购收存事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：高密度聚乙烯润滑油瓶
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 高密度聚乙烯润滑油瓶（`bottle_I`）

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。条件为真实高密度聚乙烯润滑油瓶首次非采购外部入流事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：高密度聚乙烯润滑油瓶
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 高密度聚乙烯润滑油瓶（`bottle_ER`）

条件为真实高密度聚乙烯润滑油瓶收到外部返还事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：高密度聚乙烯润滑油瓶
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 钢制供漆罐（`tin_P`）

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。条件为真实钢制供漆罐另购收存事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。 原生产品/质量为钢罐，未特指涂层、食品罐藏路线或供应地域。仅用于真实整件钢制漆料供应罐，并由实物确认其原生小容器类别条件（容量不超过300L，无机械/热力设备，不用于压缩/液化气体）。不得罐身/罐盖重复，不替换原钢或整份漆料制剂。残留漆料/水属于互斥整件内容物/皮重账；废弃污染罐使用真实废物流路线。

- 选定流：钢罐 `b13f7ab0-5d1d-48ad-af1e-bf8da76083b7`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 钢制供漆罐（`tin_I`）

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。条件为真实钢制供漆罐首次非采购外部入流事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。 原生产品/质量为钢罐，未特指涂层、食品罐藏路线或供应地域。仅用于真实整件钢制漆料供应罐，并由实物确认其原生小容器类别条件（容量不超过300L，无机械/热力设备，不用于压缩/液化气体）。不得罐身/罐盖重复，不替换原钢或整份漆料制剂。残留漆料/水属于互斥整件内容物/皮重账；废弃污染罐使用真实废物流路线。

- 选定流：钢罐 `b13f7ab0-5d1d-48ad-af1e-bf8da76083b7`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 钢制供漆罐（`tin_ER`）

条件为真实钢制供漆罐收到外部返还事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。 原生产品/质量为钢罐，未特指涂层、食品罐藏路线或供应地域。仅用于真实整件钢制漆料供应罐，并由实物确认其原生小容器类别条件（容量不超过300L，无机械/热力设备，不用于压缩/液化气体）。不得罐身/罐盖重复，不替换原钢或整份漆料制剂。残留漆料/水属于互斥整件内容物/皮重账；废弃污染罐使用真实废物流路线。

- 选定流：钢罐 `b13f7ab0-5d1d-48ad-af1e-bf8da76083b7`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 小号携带盒（`case_P`）

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。条件为真实小号携带盒另购收存事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：小号携带盒
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 小号携带盒（`case_I`）

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。条件为真实小号携带盒首次非采购外部入流事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：小号携带盒
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 小号携带盒（`case_ER`）

条件为真实小号携带盒收到外部返还事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：小号携带盒
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 木托盘维修木块（`pallet_repair_wood`）

一块实际另供维修木块，不是整托盘；新增入流与完整期末湿资产质量同时保留。

- 选定流：木托盘维修木块
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`ilcd-attributional-2010`

###### 包装新增液态水（`pack_water_in`）

仅真实另加且未含于整件湿P/I的液态水。X_in只对其他流入项去重；留期末湿存量不能消除真实入流。

- 选定流：包装新增液态水
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`ilcd-attributional-2010`

###### 金属加工设备服务（`asset_machine`）

真实按工时及实测使用归属的设备服务，记录供方覆盖；机器实物存量与购置另记，不固定寿命或每kg一整机。

- 选定流：金属加工设备服务
- 流属性/单位：Duration / h
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`ilcd-attributional-2010`

###### 小号成形工装服务（`asset_jig`）

按实际使用工时及更换历史计工装服务；未用服务可结转，已执行服务不因FG留库而扣。

- 选定流：小号成形工装服务
- 流属性/单位：Duration / h
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`ilcd-attributional-2010`

###### 购入金属加工机器（`asset_acquired`）

仅真实外部整机资产收存，独立毛kg及历史；不重复服务供方负荷采购，资产质量与服务归属维度分开。

- 选定流：购入金属加工机器
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`ilcd-attributional-2010`

##### 基本流

###### 包装吸收大气水蒸气（`pack_humidity`）

真实独立平衡包装池自然吸收水蒸气，独立量测kg；新增水入流及完整期末湿存量同留。不是液态维修水；若已含于整件湿入流，仅去重该同侧重叠流项。同池同事件已在fg_service量测者不重计。

- 选定流：包装吸收大气水蒸气
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`ilcd-attributional-2010`

#### 输出

##### 产品流

###### 瓦楞运输纸箱（`carton_S`）

一份真实完整的瓦楞纸板运输纸箱，限定实际构造和构型，不是纸箱、塑料袋、膜、内衬等包装的集合。相容原子Product流UUID仍待解析。记录真实纸板/瓦楞/层数构造、纤维组成、涂层/复合、湿态、内含胶黏剂/紧固件及供方范围；不预设通用纤维比例、处理、尺寸、重量或寿命。供货整箱内含组成随整箱计一次，真实另供衬件、胶带及其他材料各保互斥独立行及唯一上游归属。保留本卡按包装边界与原始协议定义的P/I/ER/S/EO角色，已有packaging_receipt_basis时依其执行；新供方身份不能改变事件定义。按本卡声明的Mass/kg保完整实测湿毛量及原事件/门/保管/批群，无论即时使用或留期末。保留期初期末空/附着/复用存量、内部复用及独立实测水料变化；不以存量、负荷或经济份额校正缩小毛流。真实制造/服务负荷另按原批群规则和唯一归一化归属一次；单纯毛接收或外发不产生新制造、采购负荷、供方链接或信用。绑定前须解析物理相容的纸箱身份/供方；身份缺口须披露，不能以混合包装集合或虚构UUID代替。

- 选定流: 瓦楞运输纸箱
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 瓦楞运输纸箱（`carton_EO`）

一份真实完整的瓦楞纸板运输纸箱，限定实际构造和构型，不是纸箱、塑料袋、膜、内衬等包装的集合。相容原子Product流UUID仍待解析。记录真实纸板/瓦楞/层数构造、纤维组成、涂层/复合、湿态、内含胶黏剂/紧固件及供方范围；不预设通用纤维比例、处理、尺寸、重量或寿命。供货整箱内含组成随整箱计一次，真实另供衬件、胶带及其他材料各保互斥独立行及唯一上游归属。保留本卡按包装边界与原始协议定义的P/I/ER/S/EO角色，已有packaging_receipt_basis时依其执行；新供方身份不能改变事件定义。按本卡声明的Mass/kg保完整实测湿毛量及原事件/门/保管/批群，无论即时使用或留期末。保留期初期末空/附着/复用存量、内部复用及独立实测水料变化；不以存量、负荷或经济份额校正缩小毛流。真实制造/服务负荷另按原批群规则和唯一归一化归属一次；单纯毛接收或外发不产生新制造、采购负荷、供方链接或信用。绑定前须解析物理相容的纸箱身份/供方；身份缺口须披露，不能以混合包装集合或虚构UUID代替。

- 选定流: 瓦楞运输纸箱
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 聚乙烯防护袋（`pe_bag_S`）

条件为真实聚乙烯防护袋毛实物发出事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。 原生产品/质量为厂内生产混合的完整聚乙烯袋，CAS9002-88-4；不是聚乙烯树脂、聚丙烯/PET薄膜或泡沫。采用实际完整PE保护袋，声明封口件、湿态及供应/退回条件，不固定厚度或周转寿命。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 聚乙烯防护袋（`pe_bag_EO`）

条件为真实聚乙烯防护袋向外部返还事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。 原生产品/质量为厂内生产混合的完整聚乙烯袋，CAS9002-88-4；不是聚乙烯树脂、聚丙烯/PET薄膜或泡沫。采用实际完整PE保护袋，声明封口件、湿态及供应/退回条件，不固定厚度或周转寿命。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 纸质包裹薄纸（`tissue_S`）

条件为真实纸质包裹薄纸毛实物发出事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：纸质包裹薄纸
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 纸质包裹薄纸（`tissue_EO`）

条件为真实纸质包裹薄纸向外部返还事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：纸质包裹薄纸
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 聚乙烯泡沫衬垫（`foam_S`）

条件为真实聚乙烯泡沫衬垫毛实物发出事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：聚乙烯泡沫衬垫
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 聚乙烯泡沫衬垫（`foam_EO`）

条件为真实聚乙烯泡沫衬垫向外部返还事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：聚乙烯泡沫衬垫
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 可复用木托盘（`pallet_S`）

条件为真实可复用木托盘毛实物发出事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。 原生产品/质量家族为厂内生产混合的完整已制造木质载货平台；本卡是一项实际木托盘，不是散修补木块、整机或固定欧标规格。记录真实组件、内含水分、新旧状态及归属，不默认周转次数或寿命，不重复采购整件内含零件。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 可复用木托盘（`pallet_EO`）

条件为真实可复用木托盘向外部返还事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。 原生产品/质量家族为厂内生产混合的完整已制造木质载货平台；本卡是一项实际木托盘，不是散修补木块、整机或固定欧标规格。记录真实组件、内含水分、新旧状态及归属，不默认周转次数或寿命，不重复采购整件内含零件。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 高密度聚乙烯润滑油瓶（`bottle_S`）

条件为真实高密度聚乙烯润滑油瓶毛实物发出事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：高密度聚乙烯润滑油瓶
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 高密度聚乙烯润滑油瓶（`bottle_EO`）

条件为真实高密度聚乙烯润滑油瓶向外部返还事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：高密度聚乙烯润滑油瓶
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 钢制供漆罐（`tin_S`）

条件为真实钢制供漆罐毛实物发出事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。 原生产品/质量为钢罐，未特指涂层、食品罐藏路线或供应地域。仅用于真实整件钢制漆料供应罐，并由实物确认其原生小容器类别条件（容量不超过300L，无机械/热力设备，不用于压缩/液化气体）。不得罐身/罐盖重复，不替换原钢或整份漆料制剂。残留漆料/水属于互斥整件内容物/皮重账；废弃污染罐使用真实废物流路线。

- 选定流：钢罐 `b13f7ab0-5d1d-48ad-af1e-bf8da76083b7`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 钢制供漆罐（`tin_EO`）

条件为真实钢制供漆罐向外部返还事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。 原生产品/质量为钢罐，未特指涂层、食品罐藏路线或供应地域。仅用于真实整件钢制漆料供应罐，并由实物确认其原生小容器类别条件（容量不超过300L，无机械/热力设备，不用于压缩/液化气体）。不得罐身/罐盖重复，不替换原钢或整份漆料制剂。残留漆料/水属于互斥整件内容物/皮重账；废弃污染罐使用真实废物流路线。

- 选定流：钢罐 `b13f7ab0-5d1d-48ad-af1e-bf8da76083b7`
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 小号携带盒（`case_S`）

条件为真实小号携带盒毛实物发出事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：小号携带盒
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 小号携带盒（`case_EO`）

条件为真实小号携带盒向外部返还事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：小号携带盒
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

##### 废物流

###### 瓦楞运输纸箱（`carton_W`）

条件为真实瓦楞运输纸箱废弃外出事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 聚乙烯防护袋（`pe_bag_W`）

条件为真实聚乙烯防护袋废弃外出事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：聚乙烯防护袋
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 纸质包裹薄纸（`tissue_W`）

条件为真实纸质包裹薄纸废弃外出事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：纸质包裹薄纸
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 聚乙烯泡沫衬垫（`foam_W`）

条件为真实聚乙烯泡沫衬垫废弃外出事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：聚乙烯泡沫衬垫
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 可复用木托盘（`pallet_W`）

条件为真实可复用木托盘废弃外出事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：可复用木托盘
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 高密度聚乙烯润滑油瓶（`bottle_W`）

条件为真实高密度聚乙烯润滑油瓶废弃外出事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：高密度聚乙烯润滑油瓶
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 钢制供漆罐（`tin_W`）

条件为真实钢制供漆罐废弃外出事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：钢制供漆罐
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 小号携带盒（`case_W`）

条件为真实小号携带盒废弃外出事件；独立采集含事件附着水的完整毛腿V，一种材料一个方向。P与I为互斥采购事件，随货进入仍保留真实质量及一个上游责任方；ER是真外返收存，S含全部毛外出，EO为真实外返，W仅在真实分出口时独立。期初期末空包材、附着WIP/FG及复用存量均保留。V不乘经济份额、不作存量净扣、不造第二采购/供方/信用。内容物与皮重桥互不重叠；真实单混箱仅一个废物交换，本池W转为不叠加来源子账。

- 选定流：小号携带盒
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`yamaha-manual`; `adams-eb`; `ilcd-attributional-2010`

###### 拆出托盘木块（`pallet_old_wood`）

一股实际拆出旧木块废出口，不自动等于整托盘报废或替代信用。

- 选定流：拆出托盘木块
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`ilcd-attributional-2010`

###### 包装排出液态水（`pack_water_out`）

仅真实单独排出液态水废物；X_out只对其他流出项去重，不假定排向环境，处理及接收方按实。

- 选定流：包装排出液态水
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`ilcd-attributional-2010`

###### 报废金属加工机器（`asset_retired`）

仅真实独立报废整机外出毛kg，处理一次，无自动回收信用或整份服务即时扣除。

- 选定流：报废金属加工机器
- 流属性/单位：Mass / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`ilcd-attributional-2010`

##### 基本流

###### 水蒸气（`pack_vapour`）

仅独立平衡包装池真实普通H2O气体失湿排向未特指空气，CAS 7732-18-5，基本流质量/kg；不采用同位素/冰别名。保留完整期末湿质量，避免与fg_service同事件水排放重复；液态排水为不同真实出口。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_i / D；仅引用第8节唯一商式的同一次结果，本卡N=完整实际毛腿V_i，非负荷向量或存量净扣量；本制造批次D=Q，原批次服务及其毛腿D=原Q_H。不再除且不经济缩量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`ilcd-attributional-2010`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | shared manufacturing and service | 仅在研究决策情境适用时采用归因建模。先专属或实物拆分乐器构型及服务批次，再虚拟拆分各专属因果交换。整份采购阀组或制剂不允许再分配一次其内含组分。 | `ilcd-attributional-2010` |
| allocation_causality | remaining individual exchanges | 对各剩余共享交换分别确定量化决定性物理因果；仅在确实决定该交换时用实测设备需求/时间、材料归属、实际热需求或有证据服务驱动。不得任意选质量/件数/时间/经济或统一万能键。份额与观测总量核对并记录限制。 | `ilcd-attributional-2010` |
| allocation_residual | true common residual process | 仅拆分和逐交换因果后确实不可分的共同剩余，才用真实共同功能在同期、同一共同工序门、实际状态数量的真实价值。转译市场价须去除仅下游的饰面/包装/运输，不设固定价或份额；缺可靠价值为未决分配，不能任意经济分配。剩余键仅对该剩余向量一次，不对毛实物流使用。 | `ilcd-attributional-2010` |
| allocation_history | cohort vectors | 每份供应、期初期末继承向量及作业增量只有一个责任方。仅正当真实其他功能/批次负荷移交T_other一次，普通废物出售不算。已执行原批次服务和已放行FG制造不属未用存量。设备/工装实物存量、维修、真实新旧件和在装流体区别于服务负荷及实测使用，无固定资产寿命或每kg一整机。 | `ilcd-attributional-2010` |

## 8. 前景数据采集、计算与质量规则

协议只采未归一化原始观测。汇总栏“每参考流”仅声明最终基准，采集不除分母；先完成calc_raw和适用的独立负荷/毛流归属，再由calc_quotient对每维唯一执行一次。毛V不作存量净扣或经济分配，已执行原批次服务不因留库扣除。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | release | finished | measurement | serial; configuration; pitch; metal_grade; finish; supplied_mouthpiece; included_components; acceptance_event; first_release_time; measured_net_mass_kg; scale_calibration; failures; held_FG_O_C; original_cohort; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | 逐件用校准秤称同构型首次合格整件，排除一次性包装、琴盒及另供配件瓶；确实含随供可用号嘴时才含其质量。直接按完整批次汇总实测净kg，用序号事件去重，不从件数、管几何或原生次级系数推质量。 | kg | 每事件及期初期末 | 完整观测批次及原批次H；含失败和零产出 | 实际供应方、现场工序及外部门 | 每参考流 | 校准、原始记录、取样、供应边界、不确定性、毛流负荷核对 |
| cp_material_components | components | each actual supplied material or component | measurement | row_id; lot; supply_form; grade; alloy_or_formulation_assay; whole_preparation; make_buy; upstream_completed_work; raw_receipts; rate_or_total; raw_unit; density_state; O_C_raw_WIP_nonWIP; per_exchange_history_vector; owner; uncertainty; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | 逐份量测真实整供物和互不重叠领用量，原料存量/WIP及未归属非WIP存料分开。供货组件的BOM是不叠加子账，仅独立供货原子另列。供方包装走真实I腿且一个上游责任方。整份制剂不再采购其活性物及载体；真实现场配制另列购料能源损失。 | kg; original native extensive unit | 每事件及期初期末 | 完整观测批次及原批次H；含失败和零产出 | 实际供应方、现场工序及外部门 | 每参考流 | 校准、原始记录、取样、供应边界、不确定性、毛流负荷核对 |
| cp_material_assembly_finish | assembly_finish | each actual supplied material or component | measurement | row_id; lot; supply_form; grade; alloy_or_formulation_assay; whole_preparation; make_buy; upstream_completed_work; raw_receipts; rate_or_total; raw_unit; density_state; O_C_raw_WIP_nonWIP; per_exchange_history_vector; owner; uncertainty; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | 逐份量测真实整供物和互不重叠领用量，原料存量/WIP及未归属非WIP存料分开。供货组件的BOM是不叠加子账，仅独立供货原子另列。供方包装走真实I腿且一个上游责任方。整份制剂不再采购其活性物及载体；真实现场配制另列购料能源损失。 | kg; original native extensive unit | 每事件及期初期末 | 完整观测批次及原批次H；含失败和零产出 | 实际供应方、现场工序及外部门 | 每参考流 | 校准、原始记录、取样、供应边界、不确定性、毛流负荷核对 |
| cp_utilities_components | components | each individual electricity water fuel heat carrier | measurement | row_id; submeter; supplier_boundary; voltage; geography; thermal_technology; total_or_rate; time_interval; original_unit; actual_gas_state; measured_density; gas_composition; carrier_mass; thermal_states; enthalpy; return_mass; O_C_charge; owner; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | 独立采真实计量及存流观测，先原单位换算再归属。电千瓦时按3.6 MJ/kWh；已积分气液体积不再积分。密度须为该物质状态实测，不默认水或次级原生系数。交付能量、实物载体、外部产品返还分开且供方水能责任一次。 | MJ; kg; m3; original meter unit | 每事件及期初期末 | 完整观测批次及原批次H；含失败和零产出 | 实际供应方、现场工序及外部门 | 每参考流 | 校准、原始记录、取样、供应边界、不确定性、毛流负荷核对 |
| cp_utilities_assembly_finish | assembly_finish | each individual electricity water fuel heat carrier | measurement | row_id; submeter; supplier_boundary; voltage; geography; thermal_technology; total_or_rate; time_interval; original_unit; actual_gas_state; measured_density; gas_composition; carrier_mass; thermal_states; enthalpy; return_mass; O_C_charge; owner; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | 独立采真实计量及存流观测，先原单位换算再归属。电千瓦时按3.6 MJ/kWh；已积分气液体积不再积分。密度须为该物质状态实测，不默认水或次级原生系数。交付能量、实物载体、外部产品返还分开且供方水能责任一次。 | MJ; kg; m3; original meter unit | 每事件及期初期末 | 完整观测批次及原批次H；含失败和零产出 | 实际供应方、现场工序及外部门 | 每参考流 | 校准、原始记录、取样、供应边界、不确定性、毛流负荷核对 |
| cp_utilities_release | release | each individual electricity water fuel heat carrier | measurement | row_id; submeter; supplier_boundary; voltage; geography; thermal_technology; total_or_rate; time_interval; original_unit; actual_gas_state; measured_density; gas_composition; carrier_mass; thermal_states; enthalpy; return_mass; O_C_charge; owner; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | 独立采真实计量及存流观测，先原单位换算再归属。电千瓦时按3.6 MJ/kWh；已积分气液体积不再积分。密度须为该物质状态实测，不默认水或次级原生系数。交付能量、实物载体、外部产品返还分开且供方水能责任一次。 | MJ; kg; m3; original meter unit | 每事件及期初期末 | 完整观测批次及原批次H；含失败和零产出 | 实际供应方、现场工序及外部门 | 每参考流 | 校准、原始记录、取样、供应边界、不确定性、毛流负荷核对 |
| cp_species_components | components | each actual species and medium | measurement | row_id; molecular_identity; CAS; phase; source; fossil_origin; receiver_medium; sampling_point; gas_or_liquid_total; actual_rate; interval; concentration; reference_state; independent_mass; detection_limit; element_balance; natural_humidity; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | 独立量测实际分子/相态/接收介质及流量。仅实测速率积分；浓度只乘匹配体积/质量一次。总金属/离子/COD/VOC/NOx/PM为质量指标不能命名分子。自然吸失湿、游离/相态水、反应水和结构水分开；未知保留未知。 | kg; actual concentration/volume/rate unit | 每事件及期初期末 | 完整观测批次及原批次H；含失败和零产出 | 实际供应方、现场工序及外部门 | 每参考流 | 校准、原始记录、取样、供应边界、不确定性、毛流负荷核对 |
| cp_species_assembly_finish | assembly_finish | each actual species and medium | measurement | row_id; molecular_identity; CAS; phase; source; fossil_origin; receiver_medium; sampling_point; gas_or_liquid_total; actual_rate; interval; concentration; reference_state; independent_mass; detection_limit; element_balance; natural_humidity; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | 独立量测实际分子/相态/接收介质及流量。仅实测速率积分；浓度只乘匹配体积/质量一次。总金属/离子/COD/VOC/NOx/PM为质量指标不能命名分子。自然吸失湿、游离/相态水、反应水和结构水分开；未知保留未知。 | kg; actual concentration/volume/rate unit | 每事件及期初期末 | 完整观测批次及原批次H；含失败和零产出 | 实际供应方、现场工序及外部门 | 每参考流 | 校准、原始记录、取样、供应边界、不确定性、毛流负荷核对 |
| cp_species_release | release | each actual species and medium | measurement | row_id; molecular_identity; CAS; phase; source; fossil_origin; receiver_medium; sampling_point; gas_or_liquid_total; actual_rate; interval; concentration; reference_state; independent_mass; detection_limit; element_balance; natural_humidity; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | 独立量测实际分子/相态/接收介质及流量。仅实测速率积分；浓度只乘匹配体积/质量一次。总金属/离子/COD/VOC/NOx/PM为质量指标不能命名分子。自然吸失湿、游离/相态水、反应水和结构水分开；未知保留未知。 | kg; actual concentration/volume/rate unit | 每事件及期初期末 | 完整观测批次及原批次H；含失败和零产出 | 实际供应方、现场工序及外部门 | 每参考流 | 校准、原始记录、取样、供应边界、不确定性、毛流负荷核对 |
| cp_waste_components | components | each actual external waste outlet | measurement | row_id; actual_bin; source_pool; gross_wet_mass; solids_water_assay; contaminants; segregation; receiver; treatment_owner; treatment_boundary; ordinary_waste_or_true_function; disposal_sale; burden_history; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | 真实分出口独立称量。单一混箱外出仅保留一个废物交换，各来源实测子账不叠加且和为湿总量。处理一次；内部回用抵消但真实搬运能源损失保留。普通废物出售不扣已发生负荷。 | kg | 每事件及期初期末 | 完整观测批次及原批次H；含失败和零产出 | 实际供应方、现场工序及外部门 | 每参考流 | 校准、原始记录、取样、供应边界、不确定性、毛流负荷核对 |
| cp_waste_assembly_finish | assembly_finish | each actual external waste outlet | measurement | row_id; actual_bin; source_pool; gross_wet_mass; solids_water_assay; contaminants; segregation; receiver; treatment_owner; treatment_boundary; ordinary_waste_or_true_function; disposal_sale; burden_history; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | 真实分出口独立称量。单一混箱外出仅保留一个废物交换，各来源实测子账不叠加且和为湿总量。处理一次；内部回用抵消但真实搬运能源损失保留。普通废物出售不扣已发生负荷。 | kg | 每事件及期初期末 | 完整观测批次及原批次H；含失败和零产出 | 实际供应方、现场工序及外部门 | 每参考流 | 校准、原始记录、取样、供应边界、不确定性、毛流负荷核对 |
| cp_waste_release | release | each actual external waste outlet | measurement | row_id; actual_bin; source_pool; gross_wet_mass; solids_water_assay; contaminants; segregation; receiver; treatment_owner; treatment_boundary; ordinary_waste_or_true_function; disposal_sale; burden_history; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | 真实分出口独立称量。单一混箱外出仅保留一个废物交换，各来源实测子账不叠加且和为湿总量。处理一次；内部回用抵消但真实搬运能源损失保留。普通废物出售不扣已发生负荷。 | kg | 每事件及期初期末 | 完整观测批次及原批次H；含失败和零产出 | 实际供应方、现场工序及外部门 | 每参考流 | 校准、原始记录、取样、供应边界、不确定性、毛流负荷核对 |
| cp_service | fg_service | each real original-cohort FG work and utility leg | measurement | row_id; serial; original_release_Q_H; H_start_end; gross_G_R; receipt_shipping_mass; changed_parts_water; actual_work; permission; posttests; acceptance; disposition; historical_manufacture_vector; incremental_service_vector; performed_or_unused_charge; raw_FG_O_C; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | 保留真实收存仓储搬运包装发运返货重工，包括失败及未经许可事件。厂家/规格许可加后检只决定持续合格，不决定已发生作业是否存在。真实自然变化水分和零件质量保留。原制造历史承接但不再供方采购；已执行H作业照归属，仅未用/未归属预付结转。首次放行分母仍为原Q_H，不转成净交付。 | kg; MJ; m3; h; original native unit | 每事件及期初期末 | 完整观测批次及原批次H；含失败和零产出 | 实际供应方、现场工序及外部门 | 每参考流 | 校准、原始记录、取样、供应边界、不确定性、毛流负荷核对 |
| cp_pack | packaging_assets | each material P I ER S EO W and disjoint repair/water leg | measurement | material_pool; row_id; direction; P; I; ER; S_gross; EO; W; wet_empty_attachedWIP_attachedFG_reusable_O_C; owner; whole_article_contents_tare; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence; production_Q_or_original_Q_H; H; natural_humidity; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 每一实际包装池使用 O + P + I + ER + F_in - X_in = C + S_gross + EO + W + F_out - X_out。O/C 各为完整湿态空置、附着WIP/FG及复用存量一次。F_in/F_out 是在其他毛项之外真实进入/离开的物料、零件或水贡献，须独立测量。X 仅扣已在其他同侧实际流项中证明重复的部分，绝不扣存量、对侧项、卡片存在或假定。新增维修物料/水留在期末时仍同时保留真实流入与完整湿态期末质量。采用湿态整件，或互斥实测组成/水分解；明确配对的组分至整件内部交接在合并时抵消。单一实际混合外部出口选择一个独立测得总量，或完整独立测得的origin-W分区，共用唯一供应方与非加和组成子账；不两者相加、不用残差强补未知份额、不重复独立分流出口。保留真实来源过程/事件及收集门；跨过程来源贡献须有匹配内部交接，不虚构第二次外部处置。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每事件及期初期末 | 完整观测批次及原批次H；含失败和零产出 | 实际供应方、现场工序及外部门 | 每参考流 | 校准、原始记录、取样、供应边界、不确定性、毛流负荷核对 |
| cp_asset | packaging_assets | each asset article part fluid or service dimension | measurement | row_id; actual_asset; complete_wet_mass; new_old_parts; installed_fluid; O_C_stock; gross_receipt_return_discard; service_hours; actual_capacity_use; service_owner; unused_charge; repair; original_Q_H_H; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_Q_or_Q_H; observed_H_not_divisor | 完整实物资产收存与实测服务负荷维度分开；记录购置责任、实际使用及维修更换历史，不固定寿命或每kg一整资产。真实新旧件及流体物种各需独立卡。新增件/流体留期末仍同时有入流及完整期末湿质量。不重复服务供方采购。 | kg; h | 每事件及期初期末 | 完整观测批次及原批次H；含失败和零产出 | 实际供应方、现场工序及外部门 | 每参考流 | 校准、原始记录、取样、供应边界、不确定性、毛流负荷核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | all observations | 在归属前将原始速率/总量换为实际原生广延单位，仅真实速率按观测时段积分，密度成分须该物质状态独立证据。实测电量E_MJ=3.6*E_kWh，此处不除参考分母。 | raw_observation; raw_unit; interval; actual_state; density; composition | U_native | `ilcd-attributional-2010` |
| calc_manufacture | manufacturing burden dimensions | 先专属/拆分与逐交换因果或正当真实剩余分配，再逐元素A_c=B_open+U_burden-B_close-T_other。B_close不含已归Q的已放行FG或已执行原批次服务。T_other仅真实其他功能/批次正当移交一次，普通废物出售留A_c。U_burden若已作存量校正不二扣，物理毛V独立。 U_burden 是由原生实测观察与兼容供应边界一次形成的逐交换上游及实际前景负荷向量；原始U_native及完整毛实物V_i并非该向量。 | B_open; U_burden; B_close; T_other; attribution_record | A_c | `ilcd-attributional-2010` |
| calc_service | original-cohort service burden dimensions | 实际归属后A_H=C_open+U_H-C_unused_close-T_other_H。历史制造不是另一次U_H采购，仅真正未用/未归属服务预付结转；已执行作业即使FG期末留存仍归属。失败及未获准作业全留且保留观测H，D为原首次放行Q_H。 | C_open; U_H; C_unused_close; T_other_H; Q_H; H | A_H | `ilcd-attributional-2010` |
| calc_physical | all gross physical card dimensions | V_i为该方向和原生广延单位下完整实测真实毛腿。不能以B_open+U-B_close、经济份额或负荷向量替V_i；毛卡不作存量净扣或分配。仅对真实重叠同侧流项X去重，新增入流和完整期末湿存量同时保留。实物披露不造第二采购/供方负荷/信用；相关负荷维度在A_c/A_H独立一次归属。 | gross_event; direction; native_unit; same_side_overlap | V_i | `ilcd-attributional-2010` |
| calc_quotient | all inventory rows | q=N/D，每个标记维度只执行此唯一商式一次：实物卡N=V_i，负荷结果另用N=A_c或A_H。首次放行制造D=Q；H服务及其毛实物腿D=原Q_H。参考输出1kg。Q及Q_H为完整乐器首次合格实测净kg，非交付质量。D=0保留真实原流负荷，不出单位q。卡片与聚合仅引用同一次结果，不再除。 H仅选择实际观察区间，累积负荷不得再除H。已观察持有/退回FG仍用原Q_H，不减去既有制造或已执行服务。 | N; D; V_i; A_c; A_H; Q; Q_H; H | q | `ilcd-attributional-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all cards | 记录真实整产品/组件/材料/物种身份及全部原生限制、CAS、形态、路线、牌号、相态、地域、介质、参考属性与真实供方覆盖。未知明示，不兼容绑定须替换，不编匹配供方。 | 完整原生、供应规格、构型及验收 |
| dq_measurement | all protocols | 保留校准原始观测、原单位、速率/总量、构型批次场址时域、每次失败及不确定性/检出限。双语核对唯一参考输出、分母及唯一商式；有限检查不证明未来工厂数据。 | 校准、原计量、序号验收、原量至结果追溯 |
| dq_completeness | all gates | 完整原料/WIP/FG、逐流继承向量、毛腿、真实包装六事件、资产零件流体存量及单次供方均须齐。不能以零或未拆输入集合藏实际流；真实单混废出口以实测来源子账明确支持。 | 物理元素物种平衡、供应责任矩阵、废物回执 |
| dq_evidence | all sources | 厂家原件仅支持定性路线终端及反例，不推出通用组成、质量尺寸、公差、剂量、工艺参数、排放成品率寿命因子。ILCD分配适用归因，不是小号化学。普通采集/供方缺口与真实核心hold及待独立科学翻译复核分开披露。 | 来源范围限制、反例上下文、缺口记录 |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_terminal | reference and all cards | 以正面primary及完整原生核对完整可用漆饰活塞阀黄铜小号和供货构型。硬材料/形态/路线/相态/类型/介质冲突阻断相关绑定；真实未确认整件核心身份须保留draft/unmapped/unusable。普通辅助/供应采集缺口不等于核心hold。 | `yamaha-structure`; `yamaha-final`; `un-cpc3-notes` |
| validation_q | first release and services | 首次合格净质量一次且含期末FG，内部Q/部件交接配对抵消；交付/重验/重工不造新产量。原服务批次分母及时域明确。Q=0无单位结果；全部真实失败/未获准作业及损失保留。 | `yamaha-final`; `ilcd-attributional-2010` |
| validation_inventory | all inventory rows | 每卡一个原子/事件，保留全部限定、对应官方中文UUID名称、完整原生限制及正确广延属性单位。采集记录保留未除原始单位；唯一商式对每物理V或独立归属负荷分子只除一次，卡片与聚合仅引用该结果。 | `ilcd-attributional-2010` |
| validation_balances | manufacture FG and combined gates | 核对完整湿物理门、相关独立元素物种、原料/WIP期初期末及逐流负荷向量、包装六事件、真实资产维修流体、真实气体及热载体。新增入流与完整期末湿存量同时保留。不得经济缩毛质量、两未知残差、指标冒分子或重复混废处理。 | `ilcd-attributional-2010` |
| validation_scope | all claims | 原生身份、制造定性证据及分配方法分开。不设默认BOM、合金比例、单件质量、由次级属性推密度、膜厚、调音/气密公差、检验值、热温时压配方、寿命、成品率、能耗/排放因子或审批主张。科学/翻译复核及已接受mapping/发布均独立。 | `yamaha-final`; `yamaha-finish`; `adams-eb`; `ilcd-attributional-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 限定构型路线归因首次放行制造；原批次真实服务按Q_H/H独立结果 |
| excluded_use | 完整38330叶覆盖、全行业平均、成品包装代制造、其他乐器或饰面外推、默认因子、认证审批或替代信用 |
| required_metadata | 完整声学小号构型; 活塞阀系统; 实际调性与规格; 喇叭口吹口主管及阀滑管构型; 真实合金牌号及供货形态; 现场及外购部件工序; 漆制剂及施工固化路线; 随供号嘴及可用配件范围; 排除包装琴盒及另供配件瓶的净质量; 校准称量及唯一首次验收; 生产批次Q及期末已放行FG; 原服务批次Q_H及观测H; 原料WIP及未归属服务继承向量; 完整毛实物腿及包装责任; 真实后续作业许可检验及处置; 原生限制及供方覆盖 |
| required_quality_disclosure | 已测及未知、全部条件、普通辅助/供应缺口与真实核心hold分别、原生限制、一次归属、毛流/负荷核对、代表性及不确定性、待审范围 |
| update_trigger | 终端、构型、合金及供货形态、饰面路线、供方原生、原子流、Q门、服务批次、分配或来源变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| yamaha-bell | literature | Manufacturing the bell; https://www.yamaha.com/en/musical_instrument_guide/trumpet/manufacturing/; retrieval 2026-10-20 UTC | 仅实际小号制造的定性喇叭口制造上下文；无默认尺寸剂量公差配方或因子。所有Yamaha页属于同一企业来源族。 |
| yamaha-casing | literature | Manufacturing the valve casings; https://www.yamaha.com/en/musical_instrument_guide/trumpet/manufacturing/manufacturing002.html; retrieval 2026-10-20 UTC | 仅实际小号制造的定性阀壳制造上下文；无默认尺寸剂量公差配方或因子。所有Yamaha页属于同一企业来源族。 |
| yamaha-piston | literature | Manufacturing the pistons; https://www.yamaha.com/en/musical_instrument_guide/trumpet/manufacturing/manufacturing003.html; retrieval 2026-10-20 UTC | 仅实际小号制造的定性活塞制造上下文；无默认尺寸剂量公差配方或因子。所有Yamaha页属于同一企业来源族。 |
| yamaha-mouthpipe | literature | Manufacturing the mouth pipe; https://www.yamaha.com/en/musical_instrument_guide/trumpet/manufacturing/manufacturing004.html; retrieval 2026-10-20 UTC | 仅实际小号制造的定性吹口管制造上下文；无默认尺寸剂量公差配方或因子。所有Yamaha页属于同一企业来源族。 |
| yamaha-final | literature | Final assembly and coating; https://www.yamaha.com/en/musical_instrument_guide/trumpet/manufacturing/manufacturing005.html; retrieval 2026-10-20 UTC | 仅实际小号制造的定性总装及涂饰上下文；无默认尺寸剂量公差配方或因子。所有Yamaha页属于同一企业来源族。 |
| yamaha-finish | literature | Choosing on the basis of the material and the coating; https://www.yamaha.com/en/musical_instrument_guide/trumpet/selection/; retrieval 2026-10-20 UTC | 仅实际小号制造的定性材料及饰面选择上下文；无默认尺寸剂量公差配方或因子。所有Yamaha页属于同一企业来源族。 |
| yamaha-structure | literature | Learn the names of the parts; https://www.yamaha.com/en/musical_instrument_guide/trumpet/mechanism/; retrieval 2026-10-20 UTC | 仅实际小号制造的定性部件名称上下文；无默认尺寸剂量公差配方或因子。所有Yamaha页属于同一企业来源族。 |
| adams-eb | literature | Adams Eb Trumpet; https://www.adams-music.com/en/brass/trumpet/eb; retrieval 2026-10-20 UTC | 独立整件构型反例：供琴盒和油但无标准号嘴；默认镀饰与可选漆/裸铜区别；不作共同工厂BOM或数量复用。 |
| yamaha-manual | handbook | Trumpet Cornet Flugelhorn Rotary Trumpet Piccolo Trumpet Owners Manual; https://usa.yamaha.com/files/download/other_assets/8/326908/trumpet_en_om_b0.pdf; retrieval 2026-10-20 UTC | 整件小号活塞滑管名称及条件润滑搬运，相邻转阀/短号/富鲁格号反例；用户说明不提供工厂用量或破损恢复许可。 |
| un-cpc3-notes | official_guidance | CPC Version 3.0 Explanatory Notes; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; retrieval 2026-10-20 UTC | CPC3.0第190页完整管乐器与电子乐器及部件区别，仅分类。 |
| ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA – Detailed guidance, first edition March 2010, 7.9.2–7.9.3 printed pp.255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因拆分及逐交换物理因果后真实剩余同门同状态市场价值；一次责任归属和明确不确定性的核算综合。不是乐器制造化学或工厂用量。 |
