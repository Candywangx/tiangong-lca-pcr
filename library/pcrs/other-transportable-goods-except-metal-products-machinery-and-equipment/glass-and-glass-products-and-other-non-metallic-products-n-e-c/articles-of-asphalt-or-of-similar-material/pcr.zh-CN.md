---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.articles-of-asphalt-or-of-similar-material
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 玻纤胎矿物粒面沥青屋面卷材制造

## 1. 范围与适用性

本方法覆盖一种制成品：未改性、非自粘、以完整固体卷状供货的玻纤胎矿物粒面沥青屋面卷材。从外购完整已固化玻纤胎及屋面级涂覆沥青开始，含真实填充涂料配制及完整浸涂/撒粒/冷却/切断/收卷/质检路线，终止于唯一首次完整质量放行。包装、仓储、搬运和发运保留原队列独立服务账。它是制造手册与真实制造商终端支持的透明技术综合，不声称同一SKU/工厂配方。`arma-residential-manual-2014`; `tarco-fiberglass-msr`

排除瓦片及其自封/层压/离型带体系、SBS/APP 或聚酯改性卷材、光面/有机衬垫、裸/未涂胎毡和原纸、液体涂料/底涂/乳液、作为前景的上游粘结料开采精炼、铺路混合料、屋面系统及安装。普通物料/供方/数量缺口仍为采集要求，实际核心终端不相容则hold。不提供默认组成、工厂热源、排放、涂覆温度、线速、密度、寿命、防火/抗风/声学等级或认证。UN CPC3.0仅列37930及相邻37940标题而无详细包含/排除段落；本较窄语义边界不是已接受映射。`unsd-cpc3-notes-2025`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.articles-of-asphalt-or-of-similar-material |
| classification_refs | CPC 3.0 37930；narrower；当前接受关系以`classifications/mappings/cpc-3.0-to-pcr.yaml`及`docs/adr/cpc3-additional34-20261029-37930.md`为准；须满足完整方法范围与排除项，不表示整类覆盖或科学/翻译批准 |
| covered_products | 未改性、非自粘、矿物粒面玻纤胎沥青屋面卷材；未安装完整固体复合制品 |
| excluded_products | 瓦片；SBS/APP/聚酯改性卷材；有机毡及裸胎；液体涂料/底涂/乳液；光面衬垫；铺路混合料；完整屋面及安装 |
| representative_product | 一类声明牌号的矿物粒面玻纤胎沥青卷材；Tarco 证明实物终端，不证明本方法的具体配方或工厂 |
| production_route | 接收已固化整份玻纤胎与屋面涂覆沥青；调理混合真实填料；胎体浸涂；上撒彩粒及背撒防粘矿物；压嵌；冷却；测长；切断；收卷；检查首次放行；包装/仓储/发运另记 |
| market_state | 完整未安装质量放行卷材，可拆包材另列，不声明下游屋面覆盖或服务性能 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应完整未安装矿物粒面玻纤胎沥青屋面卷材 |
| How much | 首次完整质量放行时实际单面投影材料面积 1 m2 |
| How well | 声明实际设计、材料、尺寸、状态及实测产品试验，不主张整屋面性能等价 |
| How long or cycle | 一次首次放行制造队列，实际放行后服务时域另报，不固定安装寿命 |
| reference_flow_link | finished_roll |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 沥青基防水卷材 `78f09f81-deb9-42dd-9418-7860faee0a2e` |
| 参考流属性 | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| 参考单位组 | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| 参考单位 | m2 |
| 必需限定信息 | 场址与采集期; 配置与批次/队列身份; 玻纤胎及已固化粘结剂供货状态; 石油涂覆沥青牌号及上游氧化 owner; 整份配方与厂内配制所有权; 实际填料矿物组成和水分; 彩粒石种/覆面/颜色/粒度; 实际背面防粘材料; 未改性非自粘固体卷材终端; 收卷尺寸与经校准单面面积; 产品净质量及实测水分; 首次完整质量放行门及 Q; 不合格/样品/返工去向; 原料/WIP/FG/包材/资产期初期末存量; 队列继承负荷向量及服务时域; 实际热源与冷却路线; 供方地理与原生身份限制; 实测气液物种及排放介质; 供方随货入厂所有权; 实际产品试验且不推定等级/寿命 |

全部限定信息须在数据集元数据、产品/流描述或等价完整消费上下文声明，缺失则具体数据集不完整。参考流必须连同完整过程和流卡限制阅读，原生族名称本身不证明适用。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_area | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Q = 各唯一首次完整质量放行的单面投影材料实测面积之和，采用 cp_release。边搭接带仍属于材料面积，不扣搭接、不计双面或名义屋面覆盖。 |
| geometry | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | 仅已证实矩形展开片材可校准长乘宽。变宽或缺口按实测宽度积分/可追溯图纸几何，记录收卷测长校准及验收前缺陷；异形不以外接矩形代替。 |
| material_mass | roofing_mat; coating_asphalt; limestone_filler; roofing_granule; back_sand; diesel_fuel; cooling_water; cleaning_water; repair_water; steam_supply; hotwater_supply; lubricant; thermal_oil; filter_bag; cutoff_knife; bearing; line_asset; air_o2; air_n2; air_ar; air_h2o; air_co2; roll_scrap; granule_waste; filter_cake; wastewater; spent_filter; spent_oil; spent_thermal; old_knife; old_bearing; retired_line; condensate_return; hotwater_return; co2_fossil; co_air; so2_air; toluene_air; oxygen_out; nitrogen_out; argon_out; water_vapour; co2_passthrough; no_air; no2_air; methane_air; benzene_air; quartz_air; calcite_air; pack_paper_p; pack_paper_i; pack_paper_er; pack_paper_s; pack_paper_eo; pack_paper_w; pack_film_p; pack_film_i; pack_film_er; pack_film_s; pack_film_eo; pack_film_w; pack_pallet_p; pack_pallet_i; pack_pallet_er; pack_pallet_s; pack_pallet_eo; pack_pallet_w; pack_core_p; pack_core_i; pack_core_er; pack_core_s; pack_core_eo; pack_core_w; pack_strap_p; pack_strap_i; pack_strap_er; pack_strap_s; pack_strap_eo; pack_strap_w; service_diesel; service_water; released_roll_waste; service_wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 质量规则仅用于质量账。独立测完整湿/到货质量和水分，结合水、自由水、反应水、蒸气及夹带分开；产品净重排除可拆包材。配置一致时以校准秤及匹配投影面积实测 kg/m2 或 kg/卷，不给数值 M 或密度。 |
| native_units | all inventory rows | 实际原生广延属性 | native | Mass/kg 不强套 MJ、kWh 或 m3。保留各流原生广延属性，电 kWh 按 3.6 换 MJ 一次；燃料体积须自身观测状态/组成/密度及热值基准。Number of items/Item(s) 与 item 为同一物理单位、因子1，绝不猜 kg/件。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 入厂外购完整已固化玻纤胎、已加工屋面涂覆沥青、单独购入填料及覆面彩粒，不是购入成品卷材再包装 |
| starting_condition_role | 从带负荷物料开始的前景制造，上游加工仍由相容供应数据集承担 |
| product_classification_scope | 37930 的一条较窄制品制造路线；UN 注释列标题，不提供瓦片或卷材配方，37940 混合料另列标题 |
| recursive_input_rule | 同类成品卷材投入不能替代完整制造；真实中间体须有继承负荷、移交状态和新增操作；实质不同投入须审查范围 |
| upstream_dataset_requirement | 每份整料/配方一个供方 owner，真实路线/状态/地理/运输门；补采缺失供应原始证据并披露不确定性 |
| disclosure | 首次放行面积 Q、物料门、全部存量及继承向量桥、真实公用工程/载体约定、包材毛流腿和原队列服务时域 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | manufacture | 覆盖整料接收/储存和真实备料、填料调理混合、完整胎体浸涂、矿物面/背撒、冷却、修边切断收卷及首次完整质量放行。保留全部失败/零产出、启停、空载、清理、未放行返工、除尘水控及其公用工程/废物。不推定厂内沥青氧化、成毡、彩粒覆面、聚合物改性、瓦片层压或屋面安装。 | `arma-residential-manual-2014`; `tarco-fiberglass-msr` |
| b_owner | all inventory rows | 完整已固化胎毡或外供填充涂料采购一次，已含粘结剂、添加剂、载水、填料仅作子账。真实厂内配制须采每种单独采购成分及真实加热混合损失；外供整份填充配方时新增单一原子身份，仅取消其已含成分的重复采购。新增料水即使留存期末也不取消真实流入；实际未列材料或物种须新增。 | `arma-residential-manual-2014`; `tarco-fiberglass-msr` |
| b_gate | finished_roll | Q 为完整卷材唯一首次质量放行时的实际单面投影材料面积之和。已首次放行的期末 FG 已含于 Q，不再新增作产出，也不扣其制造负荷。重验、发运、外退及放行后处理均不新造首次放行产量。按真实面积、质量、配置、水分维护毛发运/退回和 FG 变动，不将退回质量盲当未变的原交付。 | `arma-residential-manual-2014`; `tarco-fiberglass-msr` |
| b_vectors | manufacture | 逐交换继承负荷向量使用期初原料/WIP/未分配库存加当期归属负荷，减期末原料/WIP和真实未使用/未分配库存，加合法转入、仅减有据的功能/队列转出。制造期末 B 排除已放行 FG。不合格、样品、普通废物及其处理负荷即使出售外送仍保留；仅真实其他队列/功能且有正当移交/分配才移转一次向量。内部返工继承向量并仅加真实增量，不重复上游收费或二次存量修正。 | `ilcd-detailed-2010` |
| b_service | service | 仓储/包装/搬运/发运及获准放行后作业的实际增量另账，归属原队列 Q 与观测时域，包括仍留库 FG 已接受的服务；仅未用/未分配服务或费用结转。后处理须制造商/规范许可、试验、验收和处置，不假定破损可恢复。新旧件、每种水相和新增损失保持原子。合并时内部首次放行移交只抵消一次，不把制造 Q 与期末 FG 当独立产品相加。 | `arma-residential-manual-2014`; `ilcd-detailed-2010` |
| b_physical | all inventory rows | 制造、FG/服务和合并工厂门分别独立核对质量及相关元素。制造实物期末包括原料/WIP/未分配库及相关在装件/流体，已放行产品离开该门一次，包括后续期末 FG。合并门改含期初期末 FG、真实外部卷材毛流腿、包材、资产、湿库存、空气物种及载体水；仅内部移交抵消。毛实物量绝不按负荷分配份额缩量。组成/物种/水状态须独立证据，不能用一残差拟两个未知。 | `ilcd-detailed-2010` |
| b_pack | service | 本账覆盖接收及放行前或后真实附着，每项实际包材操作按记录归制造/队列服务门一次。逐种包材分别核对：期初空置+附着 WIP/FG+周转存量+P+I+ER = 期末空置+附着 WIP/FG+周转存量+S+EO+W，统一实测质量/状态。P 有偿采购（单独或随货付费），I 供方随货入厂，ER 收到外返，S 随毛实物发运外出，EO 对外返还，W 废弃。内部复用抵消；P/I 整件已含内容及六腿仅与其他入出项去重。新增真实流入与完整期末湿质量同时保留。包材不进 Q，不重复购买周转资产，上游 owner 一次，不自动共产品或抵免。 | `arma-residential-manual-2014`; `ilcd-detailed-2010` |
| b_airwater | manufacture | 保留进气、排气、冷却蒸发、冷凝、夹带、液体移交及处理的真实物种和相态。仅真正速率按实测时间积分，已积分气液体积不再乘时间。采用该物质/状态独立密度、实测热状态及焓。蒸汽/热水载体千克与购热 MJ 关联、不重复采购或编造锅炉。VOC/PAH/PM/COD/NOx 总量在独立识别物种前仅为指标，物种未知不作零或虚构分子。 | `arma-residential-manual-2014`; `ilcd-detailed-2010` |
| b_assets | manufacture | 设备/工装实物存量与当期归属服务负荷分开，保留期初期末在装质量、每种新旧维修件、润滑剂、水及真实 X_in/X_out。X 项仅与其他毛入出项去重，不能因新增料在装留存就取消流入。不设固定寿命、通用磨损率或每平方米整机。真实外部运输、外包操作须新增单独服务原子，记录毛载荷/距离/方式和供应边界，供方已含服务只拥有一次。 | `ilcd-detailed-2010` |
| packaging_receipt_basis | packaging | 逐实际完整包装制品，P记录有偿采购（单独或随货付费，有无单独发票均可）。I记录首次非采购外部入流，含单独赠与、借用、租赁/周转池领入和未付费供方随附包装；供方随附仅为I的一个子集。ER必须以同一制品或可审计匹配批次关联本场所先前外发记录；仅有他方使用史不属于退回。P/I/ER互斥。已有匹配物理制品卡及原始分账覆盖这些来源，但仍须满足全部原生材料/形态/状态限制；不相容真实制品须另列原子行，不得替用UUID。X_in/X_out仍为独立实测水料变化，不能替代整制品接收。保留完整湿毛量、所有者/保管者、付费/非采购依据、来源、原外发关联、实际状态单位和继承制造/服务向量。无偿接收既非新制造，也不自动零负荷；真实服务及新增运输搬运按正确原批群和分母归属一次，真实未用服务另留，不设默认寿命或抵扣。存量、毛实物流和负荷向量分开。这是声明的守恒前景核算实现，不声称引用原文规定这些变量名。 | ilcd-detailed-2010 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | 完整卷材制造与首次放行 | required | 所声明未改性非自粘玻纤胎矿物面路线 | reference_product | 原队列首次放行 Q m2 |
| service | 包材收存与放行后服务 | required | 真实服务及观测时域，具体原子可证实不发生 | supporting_process | 原队列 Q m2；服务增量另账 |

普通质量卡为具体实物交换，服务/资产负荷分配另用向量账。量未知也须逐行 raw 采集，先执行适用换算/分配/存量规则，再唯一 normalize_once，卡仅复用结果。条件性不发生须证据，不以零占位。声称完整前补齐一切真实未列原子，包括运输、清洗化学品、热载体、制冷剂、包材或排放。

### 过程：完整卷材制造与首次放行（`manufacture`）

#### 输入

##### 产品流

###### 已固化玻璃纤维屋面增强胎毡（`roofing_mat`）

整份外购湿法成网并经粘结剂固化的玻璃纤维屋面胎毡，其粘结剂与添加剂只采购一次。取得供应商组成、固化/干态供货、水分、面密度及屋面适用性；未固化木纤维压制湿毡、散玻纤和裸纸均不相符，已含粘结剂与成毡用水不再次采购。

- 选定流：已固化玻璃纤维屋面增强胎毡
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`arma-residential-manual-2014`

###### 外购屋面级涂覆沥青（`coating_asphalt`）

一份已加工到所需涂覆牌号的外购石油沥青，本方法不含厂内吹氧。原生 Product 身份描述工厂端黏稠石油沥青及精炼、防水用途，未证明氧化牌号或屋面专用供应背景；须取得实际供应商氧化/牌号/状态和上游精炼、吹氧负荷。煤焦油、天然含沥青岩、铺路混合料及整份填充配方属于不同身份。

- 选定流：沥青 `4e256aeb-9d90-4e11-9e58-4299c38c424b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`arma-residential-manual-2014`

###### 涂覆用磨细石灰石填料（`limestone_filler`）

仅记录实际单独采购的磨细石灰石稳定填料，采集岩性、矿物组成、粒度、水分及配料质量。来源示例不规定配方或固定比例；候选原生 CAS 587-26-8 与石灰石化学身份冲突，故不绑定。实际使用板岩或其他填料时新增各自原子卡及上游 owner，不合并到本卡。

- 选定流：涂覆用磨细石灰石填料
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`arma-residential-manual-2014`

###### 陶瓷覆面的矿物屋面彩粒（`roofing_granule`）

一份完整供货的陶瓷覆面屋面矿物彩粒，记录实际石种/矿物、覆面组成、颜色、粒度、水分和供应方。矿物载体及覆面化验仅为子账，不再采购；未覆面普通岩石、铸造树脂覆膜砂和道路拌合站骨料不能代表该屋面制剂，不编石种或颜料配方。

- 选定流：陶瓷覆面的矿物屋面彩粒
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`arma-residential-manual-2014`; `tarco-fiberglass-msr`

###### 硅砂背撒粉（`back_sand`）

条件性记录单独供货、实际用于背面防粘的硅砂，采集矿相、牌号、粒子结构、水分及供应路线；不假定所有背撒料均为硅砂。查询候选有多晶型别名且英中制备路线不一致，须确认相容原生和供应身份后才绑定。

- 选定流：硅砂背撒粉
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`arma-residential-manual-2014`; `tarco-fiberglass-msr`

###### 制造电力（`make_power`）

计量配料/加热、驱动、填料调理、除尘、冷却、定长收卷/切断、检查和归属的空载、启停及清理电力。所选原生 Product 是中国低于 1 kV 电网平均用户侧供电，净热值/MJ；仅在实际供电地理、电压及供应背景相符时使用，否则取得其他原子身份。实测 kWh 按 3.6 换为 MJ 一次，不套燃料或排放默认值。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`arma-residential-manual-2014`

###### 管输天然气燃料（`gas_fuel`）

条件性实际加热燃料，采集积分体积、温度/压力/压缩因子、干湿基、组成、该燃料独立实测密度、热值及供应背景。不得凭名称定甲烷纯度；宽泛候选的 CAS/甲烷别名与未定混合物冲突，另一候选仅为 2012 江苏热电联产案例，均不采用。燃料质量与热量为同一次采购的关联子账。

- 选定流：管输天然气燃料
- 流属性/单位：Volume / m3
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`arma-residential-manual-2014`

###### 制造搬运柴油（`diesel_fuel`）

仅在实际搬运或备用设备使用时记录实测燃料，不推定设备存在。原生 Product/Mass/kg 未特指牌号、配方、炼制路线、地理、密度、热值和供应方，实际供货均须取得，区分化石/生物碳，不设固定 CO2 因子。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`arma-residential-manual-2014`

###### 冷却及喷淋补充水（`cooling_water`）

记录本功能实际使用的市政饮用水，不以内部循环量作投入。原生 Product 是经处理市政供水、Mass/kg，未固定地理，须确认供应处理相容；其次级 Volume 系数不是实测密度。新增水即使留在期末湿料或在装流体中也保留真实流入，记录相态和去向，整份供货配方已含之水不重复。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`arma-residential-manual-2014`

###### 制造清理水（`cleaning_water`）

记录本功能实际使用的市政饮用水，不以内部循环量作投入。原生 Product 是经处理市政供水、Mass/kg，未固定地理，须确认供应处理相容；其次级 Volume 系数不是实测密度。新增水即使留在期末湿料或在装流体中也保留真实流入，记录相态和去向，整份供货配方已含之水不重复。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`arma-residential-manual-2014`

###### 维护维修用水（`repair_water`）

记录本功能实际使用的市政饮用水，不以内部循环量作投入。原生 Product 是经处理市政供水、Mass/kg，未固定地理，须确认供应处理相容；其次级 Volume 系数不是实测密度。新增水即使留在期末湿料或在装流体中也保留真实流入，记录相态和去向，整份供货配方已含之水不重复。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`arma-residential-manual-2014`

###### 外购水蒸汽热载体（`steam_supply`）

仅在真实外购蒸汽时纳入，不编造锅炉。采集载体千克、温压、干度、焓、返还约定及购入有效热 MJ；载体质量不等于 MJ。供水与制汽负荷只由一个供应背景拥有一次，分别记录冷凝水返还与损失，不把同一热量重复作其他采购载体。

- 选定流：外购水蒸汽热载体
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_heat`
- 来源：`arma-residential-manual-2014`

###### 外购热水热载体（`hotwater_supply`）

条件性真实外购热水；分别记录载体质量、进出热状态、焓差及供方水/能约定，内部循环水及厂内产生的热不再采购。

- 选定流：外购热水热载体
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_heat`
- 来源：`arma-residential-manual-2014`

###### 机器配方润滑油（`lubricant`）

仅实际供货润滑油配方；采集基础油、添加剂、牌号、实测存量/加注及泄漏，不由普通油品查询推定 PAO、润滑脂或剂量。

- 选定流：机器配方润滑油
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`arma-residential-manual-2014`

###### 矿物油基导热配方（`thermal_oil`）

条件性实际间接加热回路流体，不是淬火油或外购热。采集完整配方、在装量、补加、移除及损失；上游 owner 一次，同时保留完整期末流体与真实新流入。

- 选定流：矿物油基导热配方
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`arma-residential-manual-2014`

###### 聚酯除尘滤袋（`filter_bag`）

一个实际完整聚酯除尘滤袋，裸聚酯纤维/网布不证明成品滤袋身份。采集材质、覆面、使用和更换，截留尘另列且不重质量。

- 选定流：聚酯除尘滤袋
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`arma-residential-manual-2014`

###### 钢制定长切断刀片（`cutoff_knife`）

卷材线实际完整钢制切断刀片，采集合金/镀层、新件与在装存量、刃磨、更换和移出旧刀质量，不设通用磨损率或每平方米一整刀。

- 选定流：钢制定长切断刀片
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`arma-residential-manual-2014`

###### 钢制机器轴承（`bearing`）

条件性实际更换轴承，采集完整结构、供应商、新旧件及在装存量。未列出的真实维修件须另卡。

- 选定流：钢制机器轴承
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`arma-residential-manual-2014`

###### 沥青涂覆收卷生产线（`line_asset`）

实物资产购入/退役及在装存量与当期队列服务负荷分开。采集实际结构、投用、维护、能力、观测使用及合理服务分摊，不规定寿命或每平方米计一整线。

- 选定流：沥青涂覆收卷生产线
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`arma-residential-manual-2014`

##### 废物流

##### 基本流

###### 大气分子氧输入（`air_o2`）

实际燃烧或通风的空气组分毛流量，CAS 7782-44-7。独立测定进气流量、组成及状态；大气 CO2 不是新增化石 CO2。不能以外购纯气或向大气排放 UUID 代表资源输入；整份空气计量仅作核对小计，不再作为分子交换。

- 选定流：大气分子氧输入
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`arma-residential-manual-2014`

###### 大气分子氮输入（`air_n2`）

实际燃烧或通风的空气组分毛流量，CAS 7727-37-9。独立测定进气流量、组成及状态；大气 CO2 不是新增化石 CO2。不能以外购纯气或向大气排放 UUID 代表资源输入；整份空气计量仅作核对小计，不再作为分子交换。

- 选定流：大气分子氮输入
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`arma-residential-manual-2014`

###### 大气氩输入（`air_ar`）

实际燃烧或通风的空气组分毛流量，CAS 7440-37-1。独立测定进气流量、组成及状态；大气 CO2 不是新增化石 CO2。不能以外购纯气或向大气排放 UUID 代表资源输入；整份空气计量仅作核对小计，不再作为分子交换。

- 选定流：大气氩输入
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`arma-residential-manual-2014`

###### 大气水蒸气输入（`air_h2o`）

实际燃烧或通风的空气组分毛流量，CAS 7732-18-5。独立测定进气流量、组成及状态；大气 CO2 不是新增化石 CO2。不能以外购纯气或向大气排放 UUID 代表资源输入；整份空气计量仅作核对小计，不再作为分子交换。

- 选定流：大气水蒸气输入
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`arma-residential-manual-2014`

###### 大气二氧化碳输入（`air_co2`）

实际燃烧或通风的空气组分毛流量，CAS 124-38-9。独立测定进气流量、组成及状态；大气 CO2 不是新增化石 CO2。不能以外购纯气或向大气排放 UUID 代表资源输入；整份空气计量仅作核对小计，不再作为分子交换。

- 选定流：大气二氧化碳输入
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`arma-residential-manual-2014`

#### 输出

##### 产品流

###### 首次放行完整屋面卷材（`finished_roll`）

玻纤胎、沥青涂层、陶瓷矿物粒面及实际矿物防粘背撒料组成的完整制成卷材，经冷却、定长切断、收卷和质量验收。原生 Product 族明确包含屋面毡/卷材，工厂端 Area/m2；其底涂/乳液示例不定义本终端。限定为具有实际设计/材料/供货/状态证据的完整固体卷材，不推定普通膜供应背景、化学配方、厚度、寿命、认证或已安装系统。产品净质量及面积排除可拆纸芯、包纸、托盘。

- 选定流：沥青基防水卷材 `78f09f81-deb9-42dd-9418-7860faee0a2e`
- 流属性/单位：Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：1 m2
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：`arma-residential-manual-2014`; `tarco-fiberglass-msr`

###### 返供方蒸汽冷凝水（`condensate_return`）

仅真实外部载体返还。采集实测千克、相态、温压、焓、水质和供方约定；这是实物 Product 返还，不自动抵免或作负采购。排水、放空及夹带损失另列，返还水不同时作废物。

- 选定流：返供方蒸汽冷凝水
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_heat`
- 来源：`arma-residential-manual-2014`

###### 返供方换热水（`hotwater_return`）

仅真实外部载体返还。采集实测千克、相态、温压、焓、水质和供方约定；这是实物 Product 返还，不自动抵免或作负采购。排水、放空及夹带损失另列，返还水不同时作废物。

- 选定流：返供方换热水
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_heat`
- 来源：`arma-residential-manual-2014`

##### 废物流

###### 未放行玻纤沥青卷材边角废料（`roll_scrap`）

实际完整复合边角/不合格料，保留玻纤胎、沥青、矿物、水分和污染质量；失败批、样品及清理残留按真实去向分别计量，外送处理或出售不消除制造/处理负荷。

- 选定流：未放行玻纤沥青卷材边角废料
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`arma-residential-manual-2014`

###### 废陶瓷覆面屋面彩粒（`granule_waste`）

实际单收的废弃/散落覆面彩粒。内部回收彩粒在边界内回流抵消，但保留真实回收能耗和损失，不再采购或自动作共产品。

- 选定流：废陶瓷覆面屋面彩粒
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`arma-residential-manual-2014`

###### 含沥青矿物滤饼（`filter_cake`）

实际单独移出的滤饼，独立测定湿质量、液相及矿物/有机组成，不由 COD 换成某化合物；已含液体/固体不再另作出流。

- 选定流：含沥青矿物滤饼
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`arma-residential-manual-2014`

###### 含沥青冷却清洗废水（`wastewater`）

送至明确处理方的实际液流；不同水质/接收方须新增各卡。测积分液体体积及该流独立状态密度或称重质量、水相物种及移出污泥；这是废物移交，不是直接向淡水排放。

- 选定流：含沥青冷却清洗废水
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`arma-residential-manual-2014`

###### 废聚酯除尘滤袋（`spent_filter`）

实际废滤袋及其附着物须识别，袋与尘账互不重叠，记录真实接收方及处理负荷。

- 选定流：废聚酯除尘滤袋
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`arma-residential-manual-2014`

###### 废机器润滑油（`spent_oil`）

原生 Waste/Mass/kg，产生点的石油基或合成废润滑油，处理未特指。仅用于真实收集的废液态润滑油并声明组成与接收方，不代表润滑脂、导热液或污染擦布；分开存量及真实泄漏。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`arma-residential-manual-2014`

###### 废矿物油基导热配方（`spent_thermal`）

条件性实际移出导热液，指明配方和污染；不映射淬火油，也不假定为普通废润滑油。

- 选定流：废矿物油基导热配方
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`arma-residential-manual-2014`

###### 废钢制定长切断刀片（`old_knife`）

实际移出的刀片含覆面和附着料；新件即使留在期末在装存量，旧件仍保留毛出流。

- 选定流：废钢制定长切断刀片
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`arma-residential-manual-2014`

###### 废钢制机器轴承（`old_bearing`）

条件性实际移出轴承，附着油和材料互不重计，不假定回收信用。

- 选定流：废钢制机器轴承
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`arma-residential-manual-2014`

###### 退役沥青涂覆收卷生产线（`retired_line`）

真实实物退役及去向，独立移交部件/流体须拆卡；资产实物质量与已分摊历史服务负荷分开。

- 选定流：退役沥青涂覆收卷生产线
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`arma-residential-manual-2014`

##### 基本流

###### 新增化石二氧化碳（`co2_fossil`）

仅独立确定的新增化石 CO2，CAS124-38-9，向未特指大气排放。原生干冰/离子别名不证明这些相态，本卡只限分子气态 CO2 及化石来源，排除大气穿透和生物/矿物来源，不假定排放因子或完全燃烧。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`arma-residential-manual-2014`

###### 向大气排放的化石一氧化碳（`co_air`）

实际化石分子 CO，CAS630-08-0，未特指大气；宽泛废气/烟气别名不表示整份烟气，CO 与 CO2、有机碳分别定量。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`arma-residential-manual-2014`

###### 向大气排放的二氧化硫（`so2_air`）

实际分子 SO2 气体，CAS7446-09-5，未特指大气；制剂/发酵剂别名不允许以混合制剂排放，按 SO2 当量报告的 SOx 不自动等于 SO2 质量。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`arma-residential-manual-2014`

###### 向大气排放的甲苯（`toluene_air`）

条件性单独识别的分子甲苯，CAS108-88-3，未特指大气；排除同位素示踪别名、总 VOC 和技术级混合溶剂。测实际质量、物种及来源，不规定必然存在或排放系数。

- 选定流：甲苯 `4d9a8790-3ddd-11dd-9bb5-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`arma-residential-manual-2014`

###### 排气中分子氧（`oxygen_out`）

实际分子气态 O2，CAS7782-44-7，未特指大气。原生离子/液体/单线态别名不描述本交换，测定残余 O2，区分进入、消耗和排出。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`arma-residential-manual-2014`

###### 排气中分子氮（`nitrogen_out`）

实际分子气态 N2，CAS7727-37-9，未特指大气，不是总氮、硝酸盐、氨或 NOx。穿透毛质量与新增含氮物种分开。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`arma-residential-manual-2014`

###### 排气氩（`argon_out`）

真实单一组分，CAS 7440-37-1，具实测相态、排放介质和时段。空气氩穿透，不是外购保护气产品。真实新增分子或颗粒物种必须另卡；物种未明属于数据缺口，不作零。

- 选定流：排气氩
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`arma-residential-manual-2014`

###### 向大气排放的水蒸气（`water_vapour`）

真实单一组分，CAS 7732-18-5，具实测相态、排放介质和时段。关联子账分开进气湿分、自由水蒸发和燃烧/反应水来源，液滴夹带不冒充水蒸气。真实新增分子或颗粒物种必须另卡；物种未明属于数据缺口，不作零。

- 选定流：向大气排放的水蒸气
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`arma-residential-manual-2014`

###### 大气二氧化碳穿透（`co2_passthrough`）

真实单一组分，CAS 124-38-9，具实测相态、排放介质和时段。进气大气 CO2 实际随排气离开，不计为新增化石质量。真实新增分子或颗粒物种必须另卡；物种未明属于数据缺口，不作零。

- 选定流：大气二氧化碳穿透
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`arma-residential-manual-2014`

###### 向大气排放的一氧化氮（`no_air`）

真实单一组分，CAS 10102-43-9，具实测相态、排放介质和时段。单独测 NO，总 NOx 按 NO2 当量不能当作实际 NO 或 NO2 质量。真实新增分子或颗粒物种必须另卡；物种未明属于数据缺口，不作零。

- 选定流：向大气排放的一氧化氮
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`arma-residential-manual-2014`

###### 向大气排放的二氧化氮（`no2_air`）

真实单一组分，CAS 10102-44-0，具实测相态、排放介质和时段。须实际 NO2 分子及状态，只有 N2O4 别名不能证明本身份。真实新增分子或颗粒物种必须另卡；物种未明属于数据缺口，不作零。

- 选定流：向大气排放的二氧化氮
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`arma-residential-manual-2014`

###### 向大气排放的甲烷（`methane_air`）

真实单一组分，CAS 74-82-8，具实测相态、排放介质和时段。条件性测实际燃料逃逸或已识别来源甲烷，不是总烃。真实新增分子或颗粒物种必须另卡；物种未明属于数据缺口，不作零。

- 选定流：向大气排放的甲烷
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`arma-residential-manual-2014`

###### 向大气排放的苯（`benzene_air`）

真实单一组分，CAS 71-43-2，具实测相态、排放介质和时段。条件性单独实测苯，不是 VOC、PAH 或苯/苯胺混合物；候选别名含混合物，在相容精确原生证据取得前不绑定。真实新增分子或颗粒物种必须另卡；物种未明属于数据缺口，不作零。

- 选定流：向大气排放的苯
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`arma-residential-manual-2014`

###### 向大气排放的晶体石英颗粒（`quartz_air`）

真实单一组分，CAS 14808-60-7，具实测相态、排放介质和时段。仅单独实测石英颗粒矿相及粒径分段；总 PM 或多晶型硅总量不等于石英质量。真实新增分子或颗粒物种必须另卡；物种未明属于数据缺口，不作零。

- 选定流：向大气排放的晶体石英颗粒
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`arma-residential-manual-2014`

###### 向大气排放的方解石颗粒（`calcite_air`）

真实单一组分，CAS 471-34-1，具实测相态、排放介质和时段。仅独立识别的实际排尘中方解石；石灰石或陶瓷彩粒尘中其他物种须另卡。真实新增分子或颗粒物种必须另卡；物种未明属于数据缺口，不作零。

- 选定流：向大气排放的方解石颗粒
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`arma-residential-manual-2014`

### 过程：包材收存及原队列放行后服务（`service`）

#### 输入

##### 产品流

###### 牛皮纸卷材包装纸——单独外购（`pack_paper_p`）

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。P 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。须真实单一所列包材、配方及供方，不用泛包材集合身份。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：牛皮纸卷材包装纸——单独外购
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 牛皮纸卷材包装纸——供方随货入厂（`pack_paper_i`）

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。I 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。须真实单一所列包材、配方及供方，不用泛包材集合身份。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：牛皮纸卷材包装纸——供方随货入厂
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 牛皮纸卷材包装纸——收到外部返还（`pack_paper_er`）

ER 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。须真实单一所列包材、配方及供方，不用泛包材集合身份。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：牛皮纸卷材包装纸——收到外部返还
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 聚乙烯包装薄膜——单独外购（`pack_film_p`）

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。P 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。原生 PE 薄膜 CAS9002-88-4、Mass/kg；箱包 CPC 分类错误与一致 PE 名称/CAS/说明分开披露，PET 对比不代表 PET 身份。须实际 PE 牌号/组成/供应背景相符，多层覆膜另用身份。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 聚乙烯包装薄膜——供方随货入厂（`pack_film_i`）

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。I 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。原生 PE 薄膜 CAS9002-88-4、Mass/kg；箱包 CPC 分类错误与一致 PE 名称/CAS/说明分开披露，PET 对比不代表 PET 身份。须实际 PE 牌号/组成/供应背景相符，多层覆膜另用身份。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 聚乙烯包装薄膜——收到外部返还（`pack_film_er`）

ER 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。原生 PE 薄膜 CAS9002-88-4、Mass/kg；箱包 CPC 分类错误与一致 PE 名称/CAS/说明分开披露，PET 对比不代表 PET 身份。须实际 PE 牌号/组成/供应背景相符，多层覆膜另用身份。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 完整木制装载托盘——单独外购（`pack_pallet_p`）

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。P 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。原生族为已制造完整木质装载平台、Mass/kg，本卡限定一个完整木托盘；尺寸、木种、钉、水分、处理及供应方须实际相符，不默认欧标或散木料。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 完整木制装载托盘——供方随货入厂（`pack_pallet_i`）

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。I 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。原生族为已制造完整木质装载平台、Mass/kg，本卡限定一个完整木托盘；尺寸、木种、钉、水分、处理及供应方须实际相符，不默认欧标或散木料。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 完整木制装载托盘——收到外部返还（`pack_pallet_er`）

ER 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。原生族为已制造完整木质装载平台、Mass/kg，本卡限定一个完整木托盘；尺寸、木种、钉、水分、处理及供应方须实际相符，不默认欧标或散木料。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 纸板收卷芯——单独外购（`pack_core_p`）

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。P 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。原生为工厂端圆柱纸板筒/纸芯、Mass/kg；须实际层数、胶粘剂、尺寸、水分及供方，留在设备的收卷轴不是交付纸芯。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 纸板收卷芯——供方随货入厂（`pack_core_i`）

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。I 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。原生为工厂端圆柱纸板筒/纸芯、Mass/kg；须实际层数、胶粘剂、尺寸、水分及供方，留在设备的收卷轴不是交付纸芯。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 纸板收卷芯——收到外部返还（`pack_core_er`）

ER 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。原生为工厂端圆柱纸板筒/纸芯、Mass/kg；须实际层数、胶粘剂、尺寸、水分及供方，留在设备的收卷轴不是交付纸芯。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 聚丙烯包装带——单独外购（`pack_strap_p`）

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。P 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。须真实单一所列包材、配方及供方，不用泛包材集合身份。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：聚丙烯包装带——单独外购
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 聚丙烯包装带——供方随货入厂（`pack_strap_i`）

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。I 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。须真实单一所列包材、配方及供方，不用泛包材集合身份。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：聚丙烯包装带——供方随货入厂
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 聚丙烯包装带——收到外部返还（`pack_strap_er`）

ER 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。须真实单一所列包材、配方及供方，不用泛包材集合身份。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：聚丙烯包装带——收到外部返还
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 放行后服务电力（`service_power`）

仅放行后仓储、包装、搬运、发运及获准处理的实际增量电力，归属原首次放行队列与声明观测时域。同制造电表一样限定中国低于 1 kV 电网平均/MJ，不推定场址相容。服务已发生则即使对应 FG 仍在期末也保留；仅未使用/未分配的服务或费用可结转。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`arma-residential-manual-2014`; `ilcd-detailed-2010`

###### 放行后搬运柴油（`service_diesel`）

按原队列记录实际服务增量燃料，与制造燃料及供方已含运输分开。原生柴油 Mass/kg 未定牌号、调合、密度、热值、炼制路线、地理及供方，须实际供货证据。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`arma-residential-manual-2014`; `ilcd-detailed-2010`

###### 放行后服务用水（`service_water`）

仅获准处理或包材/资产服务的实际增量用水，与制造同样限定经处理市政供水 Mass/kg，须供方相容，体积换算密度独立测得；真实流入及完整期末湿质量同时保留。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`arma-residential-manual-2014`; `ilcd-detailed-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 牛皮纸卷材包装纸——随毛实物发运离厂（`pack_paper_s`）

S 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。须真实单一所列包材、配方及供方，不用泛包材集合身份。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：牛皮纸卷材包装纸——随毛实物发运离厂
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 牛皮纸卷材包装纸——对外返还（`pack_paper_eo`）

EO 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。须真实单一所列包材、配方及供方，不用泛包材集合身份。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：牛皮纸卷材包装纸——对外返还
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 聚乙烯包装薄膜——随毛实物发运离厂（`pack_film_s`）

S 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。原生 PE 薄膜 CAS9002-88-4、Mass/kg；箱包 CPC 分类错误与一致 PE 名称/CAS/说明分开披露，PET 对比不代表 PET 身份。须实际 PE 牌号/组成/供应背景相符，多层覆膜另用身份。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 聚乙烯包装薄膜——对外返还（`pack_film_eo`）

EO 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。原生 PE 薄膜 CAS9002-88-4、Mass/kg；箱包 CPC 分类错误与一致 PE 名称/CAS/说明分开披露，PET 对比不代表 PET 身份。须实际 PE 牌号/组成/供应背景相符，多层覆膜另用身份。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 完整木制装载托盘——随毛实物发运离厂（`pack_pallet_s`）

S 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。原生族为已制造完整木质装载平台、Mass/kg，本卡限定一个完整木托盘；尺寸、木种、钉、水分、处理及供应方须实际相符，不默认欧标或散木料。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 完整木制装载托盘——对外返还（`pack_pallet_eo`）

EO 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。原生族为已制造完整木质装载平台、Mass/kg，本卡限定一个完整木托盘；尺寸、木种、钉、水分、处理及供应方须实际相符，不默认欧标或散木料。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 纸板收卷芯——随毛实物发运离厂（`pack_core_s`）

S 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。原生为工厂端圆柱纸板筒/纸芯、Mass/kg；须实际层数、胶粘剂、尺寸、水分及供方，留在设备的收卷轴不是交付纸芯。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 纸板收卷芯——对外返还（`pack_core_eo`）

EO 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。原生为工厂端圆柱纸板筒/纸芯、Mass/kg；须实际层数、胶粘剂、尺寸、水分及供方，留在设备的收卷轴不是交付纸芯。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 聚丙烯包装带——随毛实物发运离厂（`pack_strap_s`）

S 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。须真实单一所列包材、配方及供方，不用泛包材集合身份。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：聚丙烯包装带——随毛实物发运离厂
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 聚丙烯包装带——对外返还（`pack_strap_eo`）

EO 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。须真实单一所列包材、配方及供方，不用泛包材集合身份。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：聚丙烯包装带——对外返还
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

##### 废物流

###### 牛皮纸卷材包装纸——废弃（`pack_paper_w`）

W 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。须真实单一所列包材、配方及供方，不用泛包材集合身份。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：牛皮纸卷材包装纸——废弃
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 聚乙烯包装薄膜——废弃（`pack_film_w`）

W 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。原生 PE 薄膜 CAS9002-88-4、Mass/kg；箱包 CPC 分类错误与一致 PE 名称/CAS/说明分开披露，PET 对比不代表 PET 身份。须实际 PE 牌号/组成/供应背景相符，多层覆膜另用身份。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：聚乙烯包装薄膜——废弃
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 完整木制装载托盘——废弃（`pack_pallet_w`）

W 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。原生族为已制造完整木质装载平台、Mass/kg，本卡限定一个完整木托盘；尺寸、木种、钉、水分、处理及供应方须实际相符，不默认欧标或散木料。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：完整木制装载托盘——废弃
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 纸板收卷芯——废弃（`pack_core_w`）

W 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。原生为工厂端圆柱纸板筒/纸芯、Mass/kg；须实际层数、胶粘剂、尺寸、水分及供方，留在设备的收卷轴不是交付纸芯。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：纸板收卷芯——废弃
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 聚丙烯包装带——废弃（`pack_strap_w`）

W 是该包材的毛实物流腿，分别记录空置、附着 WIP/FG 及周转件期初期末存量。新增材料留在期末存量仍有真实流入；供方随货 I 保留实物质量及一次上游 owner，不二次采购。须真实单一所列包材、配方及供方，不用泛包材集合身份。W 须真实污染和接收方，洁净产品 UUID 不作废物身份。

- 选定流：聚丙烯包装带——废弃
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`arma-residential-manual-2014`

###### 废弃的已放行玻纤沥青卷材（`released_roll_waste`）

放行后破损、取样或退回卷材的真实废弃，记录当前湿质量与原队列，不造新增制造 Q 或自动冲回/信用。放行后处理须制造商/规范许可、处理后试验和验收/处置，不能假定破损可修复。

- 选定流：废弃的已放行玻纤沥青卷材
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`arma-residential-manual-2014`; `ilcd-detailed-2010`

###### 放行后含沥青清洗废水（`service_wastewater`）

实际增量收集液，含接收方、组成、当前状态和质量，归属原队列；不能以退回产品质量相等掩盖新增水/损失。实际服务燃料、排放、维修件和废物存在时各另原子卡。

- 选定流：放行后含沥青清洗废水
- 流属性/单位：Mass / kg
- 数量规则：复用本行单次归一的实物结果 x；保留毛实物记录及另行归属的负荷向量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`arma-residential-manual-2014`; `ilcd-detailed-2010`

##### 基本流

辅助包材账覆盖真实接收、放行前或后附着、存量及全部外部流腿，不声称供方随货入厂发生于质量放行之后。每项实际包材操作按记录的制造/队列服务门归属一次，声明放行前附着并抵消内部包材移交。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_framework | all inventory rows | 本归因方法仅用于研究情境需要分配的场景，不任意代入后果型避免生产信用；分配前识别真实功能与门。 | `ilcd-detailed-2010` |
| a_hierarchy | all inventory rows | 先采专属子过程并实分或虚分；再逐剩余交换识别决定性物理因果，相关时包括服务时长及真实限制能力，不设通用质量、面积或经济系数。只有真实不可分的剩余共同过程负荷，才采用同一过程门、实际状态、同期真实共功能市值，披露价格/来源/时间/币种及敏感性。 | `ilcd-detailed-2010` |
| a_waste | all inventory rows | 收款、废物销售或外部回收路线不证明独立功能或避免负荷。保留普通制造不合格、清理、样品及处理；有据真实其他队列/功能移交才可移转一次负荷向量，毛实物质量仍不缩量核平，不设固定分配比例或自动抵免。 | `ilcd-detailed-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

以下协议仅采原始广延单位，不采预先除过的单位结果。aggregation_rule 标签只声明最终报告基准；唯一除法在换算与归属后的 normalize_once。服务保留原队列 Q 与真实时域。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | 完整成品卷材 | 原始采集记录 | 批次; 配置; 实际单面面积; 产品净质量; 实测水分; 首次验收时间; 试验; Q; 期初期末 WIP/FG | 校准长宽或设计专属面积测量及净称重，关联每个唯一整卷质量放行记录；记录全部不合格/样品/返工，核无二次首次放行。 | m2; kg | 每卷及结期 | 声明制造期和首次放行队列 | 制造线与验收门 | 每参考流 | 校准; 尺寸; 试验/验收记录; 唯一批次桥 |
| cp_material | manufacture | 每种所列材料 | 原始采集记录 | 材料和批次; 供方; 整份配方 owner; 到货毛净质量; 随货包材 I; 组成; 干湿状态; 期初期末原料和 WIP; 继承交换向量 | 校准秤称到货与存量，核供方规格和全部组成子账，追踪真实批次领用、损失及移交；保留换算/分配/归一前 raw 数量。 | kg | 每到货、每批及结期 | 完整期间含失败和零产出批 | 接收至首次放行物料门 | 每参考流 | 秤证书; 盘存; SDS/规格; 水分; 领退料单 |
| cp_energy | manufacture | 每种所列电力或燃料 | 原始采集记录 | 电表; 载体; 原量/单位; 积分量或速率; 时间; 电压; 地理; 组成; 温压压缩因子; 密度; 热值; 期初期末存量; 阶段与队列 | 读取校准电表/燃料到货，独立换算真实速率/单位/状态，制造与服务分开；归一前记录启停/空载/清理及专属/共用因果。 | original kWh; MJ; m3; kg | 连续或每供货与结期 | 完整制造期 | 实际生产线及共用设施 | 每参考流 | 仪表; 发票; 状态/组成试验; 分配证据 |
| cp_water | manufacture | 每种所列用水功能 | 原始采集记录 | 水源; 功能; 原质量或积分体积; 相态; 状态; 独立密度; 期初期末湿库存; 真实 X_in/X_out; 内循环; 排水与蒸发去向 | 校准供水/功能仪表或称重，独立取样核各水相；真实入流与完整期末湿质量并留，仅去重重复的入出表示。 | kg; original m3 | 连续、每干预及结期 | 完整制造维护期 | 用水及湿库存门 | 每参考流 | 仪表/秤校准; 取样; 相态/状态及库存记录 |
| cp_heat | manufacture | 每种外部热载体及返还 | 原始采集记录 | 供方; 水/产热 owner; 入及返载体质量; 相态; 温压; 干度; 焓; 有效热; 排水; 放空; 存量变化 | 仅真实外供；按声明热状态测各载体/返还及热量，核供方约定和内循环，不重复采购。 | kg; MJ | 每供/返及结期 | 实际公用工程时域 | 供方至前景及返还门 | 每参考流 | 合同; 校准质量/热表; 焓/状态依据 |
| cp_asset | manufacture | 每项所列资产或维护材料 | 原始采集记录 | 资产/部件ID; 组成; 期初期末新件/在装质量; 购入; 投用; 使用; 服务向量; 旧件出; 新件入; 水/流体状态; X_in/X_out; 维修退役 | 盘完整实物资产与每次真实干预，另按观测使用及正当分配确定队列服务负荷；真实入流和期末在装湿质量并留，整资产已含部件/流体不重计。 | kg; observed service units | 每干预及结期 | 资产历史及观测服务期 | 在装与库存 | 每参考流 | 资产 BOM; 维护记录; 秤; 服务/存量桥 |
| cp_waste | manufacture | 每种所列废物 | 原始采集记录 | 流; 批次; 当前湿质量; 水/固组成; 处理方; 取样; 内回收; 继承向量; 普通废物或真实其他功能 | 称量取样每项真实外送废物及留存量，确定处理负荷及分隔去向；保留普通不合格产品负荷，有据向量移交另记。 | kg; original integrated m3 | 每流移交及结期 | 完整期含清理失败 | 产生、留存及明确接收方 | 每参考流 | 地磅; 分析; 接收/处理记录; 废物库存 |
| cp_air | manufacture | 每种分子或颗粒物种 | 原始采集记录 | 源; 入/出; 实际物种和CAS; 相态; 粒径段; 介质; 积分气量或真实流率; 时间; 温压; 干湿/O2修正; 质量浓度; 来源; 检出限; 控制/捕集/旁路 | 按真实点/无组织入出状态取样，独立识别物种及速率/状态约定；仅积分真实速率，核总量/粒径/相态且不重叠分段，不由 VOC/PM/NOx/COD 总量估物种。 | original concentration and gas units; kg | 连续或有代表性完整测期 | 全部操作阶段及真实控制 | 实际介质及排放点 | 每参考流 | 实验室方法; 校准; 检出限; 原监测和状态记录 |
| cp_pack | service | 每种包材及P/I/ER/S/EO/W腿 | 原始采集记录 | 材料; 组成; 上游 owner; 期初期末空置/附着WIP/FG/周转存量; P; I; ER; S; EO; W; 毛实物发运; 实测水分; 队列; 实际X重复项 ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 计数称量匹配实际包材与全部六毛腿；同配置、水态、范围实测质量。财务已含仍记供方随货实物入厂；内部复用抵消，新增入流及完整期末湿质量并留。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg; actual counts | 每移动及结期 | 原队列及声明服务时域 | 空置、附着和周转包材门 | 每参考流 | 称/数校准; 供方owner; 毛发运退回凭证 |
| cp_service | service | 每项放行后增量交换 | 原始采集记录 | 原队列; 唯一首次放行Q; 观测时域; 期初期末FG; 毛G与R; 当前真实质量/面积/状态; 已执行服务; 未用/未分配费用; 许可; 后试验; 验收/处置; 真实新增件/水和损失 | 实测队列服务真实增量，期末 FG 已接受服务仍保留；追踪原负荷、许可及后试验，不由毛/净交付或退回重量重造首次放行数量。 | original extensive units | 每服务及观测结期 | 原首次放行队列加显式时域 | FG、仓库、发运及获准后作业 | 每参考流 | 原验收桥; 仪表; 许可/试验; 库存/退回/处置记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| prepare_raw | all inventory rows | 分配前将逐行 raw 原单位与真实速率换成一次广延量；已积分量时间因子为1。保留各实测实物毛腿，仅需质量体积换算时用该物质/状态独立密度。 | raw_records; conversion_basis; state; time | converted_raw | `ilcd-detailed-2010` |
| cohort_attribution | all inventory rows | 保留各真实实物毛腿及记录的队列归属，包材和维修/水腿绝不乘环境负荷份额。负荷向量另账：先归专属负荷，再有据细分/因果及 a_hierarchy 下真实剩余市值分配；按 b_vectors 核逐交换期初期末原料/WIP/未分配负荷向量及合法移交，不扣已放行FG、不扣普通废物、不二次存量修正。A 标识各自明确的实物分子或负荷向量分量，不以一者替另一者。 | converted_raw; allocation_evidence; inherited_vectors; transfer_decisions | A | `ilcd-detailed-2010` |
| release_quantity | finished_roll | Q = 唯一首次放行完整卷材经校准的实际单面投影材料面积之和，不二次放行、不按安装搭接修正、不含包材面积。 | cp_release; unique_acceptance; actual_geometry | Q | `arma-residential-manual-2014`; `tarco-fiberglass-msr` |
| normalize_once | all inventory rows | Q > 0 时唯一一次 x = A / Q，各分子保留其原生广延单位，按每 1 m2 参考流；服务采用原队列 Q 及真实观测时域 A。Q = 0 保留 A 而不出单位结果。本规则是各明确标识的实物账或负荷账唯一 A/Q 操作，数量卡复用实物 x，汇总复用同一结果；毛核对记录不缩量。 | A; Q; original_cohort; service_horizon | x | `ilcd-detailed-2010` |
| physical_balances | all inventory rows | 各实物门：期初完整湿存量加真实毛流入 = 期末完整湿存量加真实毛流出，内部移交抵消一次；制造、FG/服务和合并门采用 b_physical 的不同存量边界。包材逐材料独立用 b_pack；维修水 X 仅去重其他流项，不取消留库的新入流。相关元素/物种独立核，不用拟合残差解多个未知。 | gross_legs; stocks; species; moisture; X_duplicates | physical_balance_report | `ilcd-detailed-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_terminal | finished_roll | 完整固体玻纤胎/沥青/矿物卷材身份及唯一首次质检放行，限定信息和真实独立试验齐全，不套来源等级或寿命。 | 供方规格; 验收及几何证据 |
| dq_raw | all inventory rows | 保留原记录、单位、校准、覆盖、零产出时段、失败批、检出限及未知，缺失、实测零和证实不发生分开。 | 全部采集协议及原文件 |
| dq_vectors | all inventory rows | 分别审逐交换继承向量、真实实物毛平衡及一次归一；包材/资产服务须一次上游owner及合理原队列归属。 | 存量、移交、分配及原队列账 |
| dq_identity | all inventory rows | 核原生身份限制及实际供方相容；无绑定原子投入/辅助是普通身份缺口，不是零使用证据；完整终端身份实质冲突属于核心hold。 | 精确原生记录及供方/状态证据 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_identity | all inventory rows | 核对完整终端/材料身份、真实 Product/Waste/Elementary 类型、CAS、相态/形态、路线、地理、介质及全部原生属性限制，按精确属性到单位组参考单位使用。宽泛原生族不证明供应方/背景适用性，不相容或未决原子保留无绑定并追踪。 | `arma-residential-manual-2014`; `tarco-fiberglass-msr` |
| v_basis | finished_roll | 必须齐备声明限定信息、首次完整放行质量证据、单投影材料面积和匹配配置；仅真实矩形可长乘宽，任意/异形须可追溯设计专属测量。屋面净覆盖、搭接、双面、名义卷重及次级密度系数不能定义 Q。 | `arma-residential-manual-2014`; `tarco-fiberglass-msr` |
| v_accounting | all inventory rows | 须先有原始单位数据、单位/速率转换、合理分配及继承向量，再唯一一次 A/Q。采集协议保留 raw；卡与汇总复用同一次结果。Q=0 保留真实负荷、不出单位结果，已归一值不得再次除。 | `ilcd-detailed-2010` |
| v_complete | all inventory rows | 独立核对制造、FG/服务、合并实物及元素门；包材六腿和维修/水 X 不能抹去留存库存的真实入流。检查失败、启停、空载、清理、未放行 WIP/返工、FG 退回、资产和所有真实新增原子。未知不作通过、零或 not_applicable。 | `ilcd-detailed-2010` |
| v_service | service | 须原队列 Q、真实观测时域、毛发运/退回及保留的已执行服务负荷；放行后返工须许可及后试验/验收/处置，记录真实增量料/水/能/废物，不假定破损恢复或新产出。 | `arma-residential-manual-2014`; `ilcd-detailed-2010` |
| v_sources | all inventory rows | 工业过程文献不作分配证据，不把文献配方、温度、线速、密度、寿命或等级作默认。明确来源范围限制、真实前景不确定性及缺失证据；声明或机械检查不是场址观测或科学审批。 | `arma-residential-manual-2014`; `tarco-fiberglass-msr`; `ilcd-detailed-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 某一声明完整卷材配置的材料阶段清单，含制造及范围独立的原队列服务 |
| allowed_use | 状态/路线/配置/供方基准匹配，全部身份限制和不确定性进入下游上下文 |
| excluded_use | 无独立情景的整屋面/系统或安装覆盖比较；代替瓦片/改性卷材；默认寿命/等级或负废物信用 |
| required_metadata | 场址与采集期; 配置与批次/队列身份; 玻纤胎及已固化粘结剂供货状态; 石油涂覆沥青牌号及上游氧化 owner; 整份配方与厂内配制所有权; 实际填料矿物组成和水分; 彩粒石种/覆面/颜色/粒度; 实际背面防粘材料; 未改性非自粘固体卷材终端; 收卷尺寸与经校准单面面积; 产品净质量及实测水分; 首次完整质量放行门及 Q; 不合格/样品/返工去向; 原料/WIP/FG/包材/资产期初期末存量; 队列继承负荷向量及服务时域; 实际热源与冷却路线; 供方地理与原生身份限制; 实测气液物种及排放介质; 供方随货入厂所有权; 实际产品试验且不推定等级/寿命 |
| required_quality_disclosure | 原数据覆盖、首次放行 Q、继承向量、毛实物门、全部未决身份/供方相容、服务时域、零产出负荷及剩余不确定性 |
| update_trigger | 胎体/涂覆配方、改性剂、彩粒/背撒、几何、路线/门、供应背景、控制或方法证据变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-notes-2025 | official_guidance | UNSD CPC Ver.3.0 explanatory notes, 30 June 2025, PDF186; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类标题/父级及相邻37940，不推定详细配方或全覆盖。 |
| arma-residential-manual-2014 | handbook | ARMA Residential Asphalt Roofing Manual, 2014, printed3–4 and7–10; https://www.asphaltroofing.org/media/_pda/2019/03/TAC-Technical-Review-Task-Force-Residential-Asphalt-Roofing-Manual-2014.pdf | 材料准备、完整玻纤胎浸涂/撒粒/冷却、收卷/质量/仓储路线。图2-1为层压瓦片反例上下文，不是本卷材配方；不取固定配比、温度、线速、寿命或分配。 |
| tarco-fiberglass-msr | literature | Tarco, Fiberglass Mineral Surfaced Roll Roofing for Residential Applications, complete manufacturer page snapshot 2026-10-20; https://tarcoroofing.com/fiberglass-mineral-surfaced-roll-roofing | 正面完整终端：玻纤胎/沥青/陶瓷彩粒面/矿物防粘背面、卷状供货及真实储存安装上下文。材料毛面积不同于搭接后安装覆盖；名义参数、等级、施工用量不作PCR默认。 |
| ilcd-detailed-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA — Detailed guidance, March2010, sections7.9.2–7.9.3, printed255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 需要分配的归因范围、专属/虚分、逐交换决定性物理因果、剩余共同门实际状态市值；本文件队列/存量/毛腿协议用于执行该方法，手册不是卷材工厂数据。 |
