---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.wooden-furniture-of-a-kind-used-in-the-bedroom
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 未涂饰实心松木完整床架套件制造

## 1. 范围与适用性

本归因方法覆盖新制未涂饰单层实心松木完整床架套件制造：从实际接收未处理窑干锯材/刨光料，经选料下料、剩余刨削、榫卯钻孔、干砂光、若实际存在则按批准永久子组件接合用胶、配合/抽样装配、完整五金说明准备、整配置检查至唯一首次质量放行。终端为所有包裹合成的一套完整未组装平包套件，含床头/床尾/侧向构件、实际全部托条及实心松木支承条、图纸指定中支撑和全随附功能制品。客户装配与床垫在本终端外。来源：`glb-untreated-london`; `glb-component-machining`; `glb-hardware-kit`; `glb-kit-delivery`; `glb-solid-slats`; `cashmores-kd-pine`。

primary为透明技术综合。床制造商证明完整未涂饰松木床、实际部件加工、榫卯/支承条固定及全套供给；独立木料商证明真实窑干未处理刨光供货形态；胶TDS仅支持实际确认可用的条件永久接合，不声称为示例床配方。不主张共同当代订单、工厂数据或供应链。完整批准BOM及说明保留，实际配合和规格特定试验确认完整验收，不设载荷、甲醛或认证数值。

排除购买成品床重包装，单独腿/梁/支承底座、床垫/弹簧箱、软包、MDF/刨花板/胶合板或胶合指接主要结构、主要硬木架、曲木蒸弯、现场原木锯木窑干、涂层油蜡防腐路线、反应型/双组分接合胶、电动可调折叠储物高架双层儿童医疗床、客户装配使用及终端报废。原批次实际包装储运发运退回作为观测工厂门时窗独立增量服务保留。不同主要路线重新评适用，实际路线内辅料原子流补卡，不藏0/other。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.wooden-furniture-of-a-kind-used-in-the-bedroom |
| classification_refs | CPC 3.0 38170；narrower；当前接受关系以`classifications/mappings/cpc-3.0-to-pcr.yaml`及`docs/adr/cpc3-additional34-20261029-38170.md`为准；须满足完整方法范围与排除项，不表示整类覆盖或科学/翻译批准 |
| covered_products | 完整新制未处理单层实心松木床架套件，含全真实实木支承条/五金/说明系统 |
| excluded_products | 床垫; 独立组件支撑; 涂饰/工程板/硬木结构; 电动储物专用床; 整装终端; 成品床重包装 |
| representative_product | 未涂饰松木London型完整套件及方柱、实际图纸特定支撑；无来源默认尺寸或测试值 |
| production_route | 窑干料→选下料/剩余刨削→榫卯钻孔→砂光/实际许可永久子组件→配合检查完整套件→首次放行 |
| market_state | 工厂唯一首次质量放行完整未组装套件；原批次实际门服务分账 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造并唯一首次放行同一声明配置的完整未处理松木床架套件 |
| How much | 完整套件的1 kg参考流 |
| How well | 整图纸BOM说明; 实际适配木料接合五金; 真尺寸表面配合稳定结构试验处置; 无通用性能值 |
| How long or cycle | 一个制造首次放行周期; 实际原批次H另记; 不设睡眠使用寿命 |
| reference_flow_link | `finished_bed_kit` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 卧室用木家具 `3b8c5b0a-4a30-4bc1-a5f5-0f0ade7db101` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 整套配置及图纸版本; 全床头床尾侧梁支承条中支撑BOM; 全真实随附五金工具; 印刷或电子装配说明版本; 未处理未组装终端; Pinus树种合法产地; 实际锯刨供货门含水; 每材料供方供态; 真接合及条件永久子组件胶许可; 整制剂及另加水; 实际作业测试; 整套实测净质量校准; 唯一首次放行批次Q; 原料/WIP/FG历史逐交换继承向量; 实际场址时段; 原生等级路线形态地域媒体类型属性; 能水空气状态; 每包P/I/ER/S/EO/W及上游所有者; 资产全实物存量及已履行服务; 真废物出口处理; 原Q_H观测H; 真作业许可后测; 验收或hold/废物处置; 分配驱动及未决数值范围 |

前景包逐项声明限定信息。同配置每完整套件全部零件的校准净质量只合计一次，包含随附功能五金及实体说明工具，排除运输包装。不以单腿、裸支承底或整装床代理质量作Q。计数须逐整套匹配同配置实测净质量及含水；不用目录kg/item、次级属性或密度换算。Number of items→Item(s)与item仅物理计数等价因子1，不是kg转换。不采用面积分母。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q为cp_release校准实测完整套件唯一首次放行净kg和。已放行期末FG在Q中且非制造B_close，不把Q和该FG重复当产量。 |
| moisture | 木及每湿库存 | Mass | kg | 分离木u=(wet-dry)/dry，dry=wet/(1+u)，独立代表含水。载水自由细胞壁吸附结构反应水及非木组分分开，一残差不拟两未知。 |
| extensive_units | all inventory rows | 实际原生广延属性 | 本行单位 | Mass/kg仅质量行，电能MJ货运kg*km真实服务h各保自身属性。raw分配前转单位一次，累计不再积分，密度须本物质状态独立证据。 |
| gross_events | 每毛卡 | 真实实物属性 | 本行单位 | N_i=V_i为实际完整毛腿，不是B_open+U-B_close或负荷经济份额。新增入流留全湿期末仍是入流，仅对另一入出项重叠除。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 未处理未胶合窑干松木锯/刨料; 真独供螺钉连接件说明; 真适配条件整份单组分PVAc; 收料门能水服务 |
| starting_condition_role | secondary_manufacturing |
| product_classification_scope | CPC3.0:38170中完整未处理松木床套件窄范围，不推全叶覆盖或接受映射 |
| recursive_input_rule | 外购完整套件保留独立负荷输入，不替代木料制造或另造首次放行。内部产品交接合并匹配抵消。 |
| upstream_dataset_requirement | 按树种形态处理门地域时段匹配林业锯木窑干刨削、整制剂制品及运输供方一次，保留供方已含包装实入及单所有者 |
| disclosure | 真上游现场分界; 原料WIP FG历史; 全失败; 首Q; 原批次H; 真包装资产水空气及供方身份不确定性 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| b_scope | 分类及完整套件范围 | CPC38170仅提供卧室木家具分类上下文。完整未涂饰松木套件边界排除相邻涂饰硬木储物可调户外及床垫替代，不由分类坐标推全叶覆盖或接受映射。 | `un-cpc-bedroom-2025`; `glb-contract-brochure-2025`; `glb-untreated-london` |
| b_route | 完整制造路线 | 纳入实际收料选料、下料、剩余刨削、榫卯钻孔、干砂光、实际许可的永久子组件胶接、整套配合/抽样装配、配置检查及唯一首次放行。保留失败、试件、启停、闲置、清理、集尘和外协。整份制品/制剂只采购一次，组分互斥分账。排除的主要路线须重新评估适用性后才用。 | `glb-untreated-london`; `glb-component-machining`; `glb-hardware-kit`; `glb-solid-slats`; `kleiberit-pvac-303` |
| b_q | 制造及原批次服务 | Q为完整套件首次质量放行的唯一净kg。已放行期末FG已含在Q，不作为制造B_close扣除，也不在Q之外再计第二生产输出。制造B_close仅含原料/WIP及未使用/未分配非WIP库存/charge。按交换/批次保留原料/WIP继承向量。原始活动已是库存修正消耗时，只核对一次，不再修正。 | `ilcd-attributional-2010` |
| b_service | 实际服务时窗H | 包装、储存、搬运、发运、退回及实际放行后作业保留原放行身份/Q_H和实测H。FG留库仍保留已履行原批次服务，仅结转未用/未分配service/charge。期初期末FG历史制造向量及完整毛G/R与当期增量分开。发运、重验及退回后放行不新增Q。净交付分母不属本方法；采用该分母须另有原交付数量/逆转D_rev及历史负荷，不猜退回质量等于原交付。 原Q_H固定于唯一首次放行，H只是观测时域，绝非额外除数。完整真实FG保管门闭合O_FG+T_new+R_ext+F_in-X_in=C_FG+G_ext+W_actual+F_out-X_out。T_new是已计Q的配对内部首放行移交，合并抵消。实际R/G保留独立实测当前状态毛质量及原批次；F是真实新增/移除料水，X仅同侧其他流的已证重复。未授权/失败/hold实际工作即使不合格也全部保留。 | `ilcd-attributional-2010`; `glb-kit-delivery` |
| b_physical | 制造FG及合并门 | 保留原料、WIP、FG、残余、复用包装及在装资产完整湿态期初期末与所有真实外部毛入/出。首次放行是制造到FG内部交接，合并时匹配抵消，不把Q叠加于FG和G/R。毛量不按负荷份额缩减。真实新增料/水留期末仍同时保留实入流及完整期末质量；X只剔除另一个入/出项中重复部分。 | `ilcd-attributional-2010`; `usda-wood-handbook-2021` |
| b_pack | 每种实际包装制品 | 每实际整份包装池闭合O+P+I+ER+F_in-X_in=C+S+EO+W+F_out-X_out。O/C为互斥完整湿空包、附着WIP、附着FG及复用库存。F_in/F_out为独立实测真实材料或液态/大气水新增移除，不是拟合残差。X仅扣事件ID配对证明的同侧其他真实流重复项，绝不扣库存、对侧流、卡片存在或真实新保留流入。整供制品及组分非加和；现场另供组件须互斥收货或实测组分至整件桥，配对内部移交合并抵消。自然湿交换无需虚构维修或许可。S随实际毛发运而非Q。一个真实混合出口只用整总量或逐来源独立实测W分区，不叠总分或重复供方；真实分开W出口须独立真实证据。未知/破损Product或Waste状态仍记录并待匹配身份，不强制复用Product。 | `ilcd-attributional-2010`; `kleiberit-pvac-303` |
| b_water_carbon | 木材制剂空气及水 | 完整实物质量、相关元素、干木、生物木碳、化石制剂/塑料碳和环境碳独立约束。林业吸收保留上游所有者，不加前景信用。普通储运自然吸湿失水亦为真实流，不虚构维修许可。自由/细胞壁吸附、液/汽、载水、化学结构水及独立证据反应水分别。胶干燥不自动是化学反应。COD/VOC/PM/TOC及木粉尘不是分子；一个残差不能解两个未知。 区分本地自由大气Resource与已在木材、整份制剂、设备或采购气体Product内的气水。内含组分随唯一上游所有者及非加和子账，不再作免费Resource摄入。真实另购压缩空气/气体Product须独立原子卡、状态/压力/原生属性接口及唯一供方；内部空气移交抵消而真实压缩/通风电耗释放保留。分子毛转移与真实环境净变化分开。 | `usda-wood-handbook-2021`; `ilcd-attributional-2010` |
| b_rework | 实际试验修理及处置 | 实际放行后作业及持续合格须制造商/规格许可、作业后试验、验收及处置。许可是验收门而非删除门：未授权、失败或暂扣的真实作业保留全部已发生物流负荷及原批次和实际hold/废物结果，不假定破损木接头或缺件套件恢复。普通废物、失败、样品、销售或外送不是T_other；只有真实其他批次/功能及正当一次分配移交才接收负荷向量。 | `ilcd-attributional-2010`; `glb-untreated-london` |
| b_assets | 设备及实际新增原子流 | 整机/刀具/流体保管与已履行服务及实际单个隐含/维护供方向量分开。保留增旧零件、修理、磨损材料、流体和每种水相，不设固定寿命或每kg一整机替换。仅结转未用/未分配服务/charge。具体数据使用前逐一加实际未列供货制剂、包装、紧固件、燃料、热载体、制冷剂、水相、废物及真实物种卡。未知存在不作0或not_applicable。真实热/蒸汽须有载体质量、热MJ、供回、温焓和供方水能约定，不虚构锅炉。 逐真实机/具/零件/流体池按其协调实物单位闭合O+R_in+F_in-X_in=C+R_out+F_out-X_out。R是真实外部整件收退，含实际Waste退役；F是真实实测组件/水新增移除。X只扣配对证实同侧其他真实流重复，绝不扣库存/对侧腿或真实保留流入。整份与组件供应互斥，或用实测装配桥及内部移交抵消。一个真实混出口总量或独立实测来源分区只关联一供方；不虚构替换、维修、退回或湿交换事件。 | `ilcd-attributional-2010` |
| packaging_receipt_basis | packaging | 逐实际完整包装制品，P记录有偿采购（单独或随货付费，有无单独发票均可）。I记录首次非采购外部入流，含单独赠与、借用、租赁/周转池领入和未付费供方随附包装；供方随附仅为I的一个子集。ER必须以同一制品或可审计匹配批次关联本场所先前外发记录；仅有他方使用史不属于退回。P/I/ER互斥。已有匹配物理制品卡及原始分账覆盖这些来源，但仍须满足全部原生材料/形态/状态限制；不相容真实制品须另列原子行，不得替用UUID。X_in/X_out仍为独立实测水料变化，不能替代整制品接收。保留完整湿毛量、所有者/保管者、付费/非采购依据、来源、原外发关联、实际状态单位和继承制造/服务向量。无偿接收既非新制造，也不自动零负荷；真实服务及新增运输搬运按正确原批群和分母归属一次，真实未用服务另留，不设默认寿命或抵扣。存量、毛实物流和负荷向量分开。这是声明的守恒前景核算实现，不声称引用原文规定这些变量名。 | ilcd-attributional-2010 |

## 6. 过程清单结构

每卡保留完整描述及§§1–5和7–9适用条件。采未除raw，实物毛V与归属负荷/服务向量是不同维度，独立service/charge账有一个真实供方负荷。各卡与聚合引用唯一calc_quotient结果。真实无事件须证据才缺省，使用前逐一补真实未列原子流。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | 完整松木套件制造首次放行 | required | 实际木料至完整套件路线 | foreground | Q |
| gate_service | 原批次真实工厂门服务 | conditional | 观测储运发运退回作业 | foreground | 原Q_H及观测H，无新产品 |
| packaging | 每制品真实六腿包装及charge | conditional | 每真制品及外部事件 | foreground | 原Q_H及观测H，无新产品 |
| assets | 真实机器刀具流体及服务 | conditional | 真保管维修已履行服务 | foreground | 原Q_H及观测H，无新产品 |

### 过程：完整松木套件制造首次放行 (`manufacture`)

#### 输入

##### 产品流

###### 未处理窑干松木锯材 (`pine_stock`)

接收加工厂供货门的整份未胶合窑干松木锯材；声明实际Pinus树种、合法产地、等级、尺寸、锯切或刨光状态及实测含水率。原生为加工厂窑干针叶锯材Product和Mass，不替换为硬木、绿材、胶合板或预制床架。以Scandinavian redwood商品名销售木料的独立供应商只证明刨光供货形态，不证明其是GLB订单或通用树种。林业、锯木、窑干、供方已完成的刨光及运输负荷各保留一次，仅现场实际剩余下料、刨削、榫卯及钻孔纳入前景。称完整湿态收料和原料/在制库存，木材含水率独立取样。

- 选定流：针叶锯材 `50904047-e5b0-4110-990a-53751d250267`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_material采未除raw。分子为制造归属A_m_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cashmores-kd-pine`; `glb-untreated-london`; `usda-wood-handbook-2021`

###### 钢制支承条及床架螺钉 (`wood_screw`)

本卡为实际支承条/托条或其他指定床架连接中的单一钢螺钉制品，原生为钢螺钉Product族和Mass。物理不同的规格或镀层须各自独立批次或加卡，不以钢材或组合五金包代替。实采散装供客户装配及已装螺钉；已含于外购部件的同一螺钉不再采购。不预设数量或强度。

- 选定流：钢螺钉 `35a4d7dc-1c42-4eb2-a48a-0f9a5abce9d6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_material采未除raw。分子为制造归属A_m_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`glb-solid-slats`; `glb-hardware-kit`

###### 钢床架连接螺栓 (`bed_bolt`)

仅在批准的榫卯及机械连接图纸实际存在时，本卡单独计量钢床架连接螺栓。原生为全球工厂端制造/装配用钢紧固件Product族，别名包括螺栓、螺母、螺钉，参考Mass；本卡限定单一制品，不是五金集合。供方等级、几何、镀层及装配用途仍须核实，不套用特定国家供方，也不推定示例床必有此件。实际整件及已含组件桥仅计一次。

- 选定流：钢紧固件 `ebfe08f5-42c8-484e-b39a-684a35981c24`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_material采未除raw。分子为制造归属A_m_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`glb-hardware-kit`; `usda-wood-handbook-2021`

###### 钢床架横孔螺母 (`barrel_nut`)

仅在批准的榫卯及机械连接图纸实际存在时，本卡单独计量钢床架横孔螺母。原生为全球工厂端制造/装配用钢紧固件Product族，别名包括螺栓、螺母、螺钉，参考Mass；本卡限定单一制品，不是五金集合。供方等级、几何、镀层及装配用途仍须核实，不套用特定国家供方，也不推定示例床必有此件。实际整件及已含组件桥仅计一次。

- 选定流：钢紧固件 `ebfe08f5-42c8-484e-b39a-684a35981c24`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_material采未除raw。分子为制造归属A_m_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`glb-hardware-kit`; `usda-wood-handbook-2021`

###### 完整印刷装配说明书 (`instruction_leaflet`)

一份实际随套件供应的完整印刷装配说明书，采用工厂端已制造其他印刷品Product族及Mass。原生备注混入相邻文具标题，但不把一致的印刷制品名称和类型变成仅限笔记本。声明实际纸张、油墨及印刷供方；整件供方已含的纸墨不再采购。本卡为套件文件，不是运输纸箱质量。若仅电子说明，则以证据证明无实体本卡并保留说明版本。

- 选定流：其他印刷品 `3d54fb5f-3574-4f47-9529-24b60a73a174`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_material采未除raw。分子为制造归属A_m_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`glb-kit-delivery`; `glb-hardware-kit`

###### 整份单组分水性PVAc接合胶 (`pvac_glue`)

仅在制造商实际批准的永久木制子组件接合中条件纳入。整份即用水性PVAc制剂包括载水及添加剂只采购一次，聚合物assay、固体及载水仅作子账。独立胶TDS支持榫接、指接、洁净调湿表面、涂布夹持、实际材料试验及水清洗；它不证明GLB某SKU用胶，也不证明床接头适用。单组分与另加固化剂双组分是不同路线，本方法只允许实际确认的单组分，不把设计可拆接头粘死。不设密度、涂胶量、目标含水率、时间、温度、粘接等级或认证默认值。实际另加稀释水另列输入。

- 选定流：整份水性PVAc木接合胶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_material采未除raw。分子为制造归属A_m_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`kleiberit-pvac-303`; `usda-wood-handbook-2021`

###### 纸基砂光磨具 (`abrasive_paper`)

实际木材干式砂光用一件完整纸基磨具，原生为工厂端Product及Mass。声明磨粒、纸基、结合剂及基材适配，外购整件时不另加纸和磨料采购。实际带/片形态及磨耗实采，不设默认消耗。布基砂带是不同制品，须另设匹配卡；废磨具与逸散颗粒为实际不同去向。

- 选定流：砂纸 `ba6c99d4-60d9-46a5-9ef5-ca3d0b877d57`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_material采未除raw。分子为制造归属A_m_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`glb-component-machining`; `usda-wood-handbook-2021`

###### 制造低压电网电力 (`electricity_m`)

原生为小于1kV低压交流电Product、消费组合到用户、电网平均供电。须匹配实际电压、场址、电网、年度及供方，不用垃圾焚烧发电或原生CN供给地域之外的组合替代。保留累计kWh，分配前按3.6 MJ/kWh转换电能一次。参考属性是原生命名Net calorific value的能量属性，不是燃料质量或额外购热。保留实际下料、接合、砂光、抽尘、照明、启停、闲置、失败和清理负荷，电路账互不重叠。 已选原生地域明确为CN中国；仅真实中国低压用户侧电网平均供给匹配时可用，其他地域另核身份。英国床厂原件只作制造技术例证，不支持给其套中国供电。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：使用本行唯一已算x_i；按cp_energy_m采未除raw。分子为制造归属A_m_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_m`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 制造实际新增液态自来水 (`tap_water_m`)

本卡为实际经处理市政饮用水供给，原生工厂端/到消费者Product，参考Mass。原生次级Volume系数不是实测密度或耗水要求。完整采集实际清理、允许的稀释/修理新增液体，包括留在期末湿料中的入流；不因期末留存取消。整份外购制剂/制品已含水保留于整份输入，仅作互斥组分桥。不虚构锅炉、蒸汽或换热器。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_water_m采未除raw。分子为制造归属A_m_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water_m`
- 来源：`kleiberit-pvac-303`; `usda-wood-handbook-2021`; `ilcd-attributional-2010`

###### 实际进厂公路货运 (`inbound_freight`)

原生为公路货运Product、工厂端生产组合、质量距离参考，须用实际相容公路供方、货载和路线。原生参考单位kg*km，实物货载包括包装，原t*km按1000转换一次。负荷分配前判断实际质量/体积限制与共运。供方已含运输负荷只归属一次，不重复司机燃料，不编距离、车辆、空返或载率。

- 选定流：货物运输 `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- 数量规则：使用本行唯一已算x_i；按cp_transport采未除raw。分子为制造归属A_m_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—制造实际木工清理废水 (`cleaning_wastewater_m_treatment`)

仅在本实际制造实际木工清理废水出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—木工清理废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_m采未除raw。分子为制造归属A_m_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_m`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—未处理松木下料边角料 (`pine_offcut_treatment`)

仅在本实际未处理松木下料边角料出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—未处理松木下料边角料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_m采未除raw。分子为制造归属A_m_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_m`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—收集的未处理松木加工废料 (`pine_residue_treatment`)

仅在本实际收集的未处理松木加工废料出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—收集的未处理松木加工废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_m采未除raw。分子为制造归属A_m_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_m`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—废纸基砂光磨具 (`spent_abrasive_treatment`)

仅在本实际废纸基砂光磨具出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—废纸基砂光磨具
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_m采未除raw。分子为制造归属A_m_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_m`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—共同收集的松木与磨具加工废物 (`mixed_machining_waste_treatment`)

仅在本实际共同收集的松木与磨具加工废物出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—共同收集的松木与磨具加工废物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_m采未除raw。分子为制造归属A_m_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_m`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—废弃整份水性PVAc胶 (`glue_residue_treatment`)

仅在本实际废弃整份水性PVAc胶出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—废弃整份水性PVAc胶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_m采未除raw。分子为制造归属A_m_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_m`
- 来源：`ilcd-attributional-2010`

##### 废物流

##### 基本流

###### 实际空气摄入的二氮 (`n2_m_in`)

实际自然空气摄入中的分子二氮（7727-37-9）。要求媒体为空气资源中的可再生元素资源；任何相容绑定仅适用于本实际媒体、相态和时段，工业供气、土壤/水媒体、长期排放或特定同位素记录均不同。用实际状态及独立组分测完整物种毛量V，不设空气比例。环境CO2不等于化石或林业生物碳吸收/排放，不自动产生气候信用。干空气、H2O及实际供气组分桥互斥，不叠加整空气和分物种。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_air_m采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air_m`
- 来源：`ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### 实际空气摄入的氧气 (`o2_m_in`)

实际自然空气摄入中的分子氧气（7782-44-7）。要求媒体为空气资源中的可再生元素资源；任何相容绑定仅适用于本实际媒体、相态和时段，工业供气、土壤/水媒体、长期排放或特定同位素记录均不同。用实际状态及独立组分测完整物种毛量V，不设空气比例。环境CO2不等于化石或林业生物碳吸收/排放，不自动产生气候信用。干空气、H2O及实际供气组分桥互斥，不叠加整空气和分物种。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_air_m采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air_m`
- 来源：`ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### 实际空气摄入的氩 (`ar_m_in`)

实际自然空气摄入中的分子氩（7440-37-1）。要求媒体为空气资源中的可再生元素资源；任何相容绑定仅适用于本实际媒体、相态和时段，工业供气、土壤/水媒体、长期排放或特定同位素记录均不同。用实际状态及独立组分测完整物种毛量V，不设空气比例。环境CO2不等于化石或林业生物碳吸收/排放，不自动产生气候信用。干空气、H2O及实际供气组分桥互斥，不叠加整空气和分物种。

- 选定流：氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_air_m采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air_m`
- 来源：`ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### 实际空气摄入的环境二氧化碳 (`ambient_co2_m_in`)

实际自然空气摄入中的分子环境二氧化碳（124-38-9）。要求媒体为空气资源中的可再生元素资源；任何相容绑定仅适用于本实际媒体、相态和时段，工业供气、土壤/水媒体、长期排放或特定同位素记录均不同。用实际状态及独立组分测完整物种毛量V，不设空气比例。环境CO2不等于化石或林业生物碳吸收/排放，不自动产生气候信用。干空气、H2O及实际供气组分桥互斥，不叠加整空气和分物种。

- 选定流：环境二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_air_m采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air_m`
- 来源：`ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### 普通环境H2O摄入 (`humidity_m_in`)

普通机加工、储存、搬运及实际清理/维修中的自然H2O水汽吸收。以kg独立采集相态、状态和库存含水，不为自然湿度交换虚构作业许可。Volume基准环境H2O身份须有独立状态特定实测水汽体积及密度；本Mass交换须有自身相容身份及计量基准前保留未绑定，绝不套液态水密度。湿态来料/制剂已含载水不是第二外部输入。实际新增水与完整期末湿质量同时保留，仅剔除重复的其他流入/流出项。

- 选定流：环境水汽摄入
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_water_m采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water_m`
- 来源：`usda-wood-handbook-2021`; `ilcd-attributional-2010`

#### 输出

##### 产品流

###### 完整首次放行未涂饰松木床架套件 (`finished_bed_kit`)

本卡为完整新制单层非电动未组装床架套件：实际全部床头构件/立柱、床尾构件/立柱、两根长侧梁及托条、整套实心松木支承条、图纸实际指定的中梁/支脚、全部接合五金及随附说明/附件/工具。所有包裹合起来才是一套，不以床垫、裸梁、单独床垫支撑、单腿或购买成品重包装代替。原生为工厂端生产组合的已制造卧室木家具Product，参考Mass；物理相容的宽产品族在本卡限定为完整未涂饰套件。原生备注混入相邻珠宝标题，但不改变一致的家具物理身份、路线和类型。实际树种、尺寸、连接、装配配合、结构/稳定/表面试验与处置须确认，不设通用阈值。首次质量放行须核实完整BOM及配置；抽样装配、发运、退回、重验均不形成新产量。Q为每套同配置完整套件唯一首次放行的实测净质量之和，包括装配或散供功能五金及实体说明，排除全部运输包装，保留木材含水信息。不用目录重量、次级属性或密度代称重。

- 选定流：卧室用木家具 `3b8c5b0a-4a30-4bc1-a5f5-0f0ade7db101`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_release`
- 来源：`glb-untreated-london`; `glb-hardware-kit`; `glb-solid-slats`; `glb-kit-delivery`; `usda-wood-handbook-2021`

##### 废物流

###### 制造实际木工清理废水 (`cleaning_wastewater_m`)

本卡为实际分开收集的单一清理废水出口，整份包括水和污染物。实采成分、去向及处理一次；COD/TOC数值不是分子质量。实际收集处理的出口不采用原生指定排入水体的记录。只有实际条件用胶作业发生时才有相关组分，水/固体子账互斥，不另加整份出口。

- 选定流：木工清理废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_water_m采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water_m`
- 来源：`kleiberit-pvac-303`; `ilcd-attributional-2010`

###### 未处理松木下料边角料 (`pine_offcut`)

本卡为工厂实际分开收集的单一未处理松木下料边角料Waste出口，以Mass/kg计量。记录湿质量、含水、污染及接收方。全球废物统计不代表本厂数据或回收信用。普通失败下料、试件、集尘及处理负荷保留；销售或外送不自动转走制造负荷。若该来源池实际合收于一个混合出口，仅作为其量测子账，不额外增加交换。与本实际非团聚形态的适配尚未获证，UUID身份保留未决。泛称木废料及来源描述不能证明形态匹配或分类错误。绑定前核实真实形态、污染、接收方及供方归属；保留实际材料和处理负荷，不虚构团聚。

- 选定流：未处理松木下料边角料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_waste采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`glb-component-machining`; `usda-wood-handbook-2021`; `ilcd-attributional-2010`

###### 收集的未处理松木加工废料 (`pine_residue`)

本卡为工厂实际分开收集的单一收集的未处理松木加工废料Waste出口，以Mass/kg计量。记录湿质量、含水、污染及接收方。全球废物统计不代表本厂数据或回收信用。普通失败下料、试件、集尘及处理负荷保留；销售或外送不自动转走制造负荷。若该来源池实际合收于一个混合出口，仅作为其量测子账，不额外增加交换。与本实际非团聚形态的适配尚未获证，UUID身份保留未决。泛称木废料及来源描述不能证明形态匹配或分类错误。绑定前核实真实形态、污染、接收方及供方归属；保留实际材料和处理负荷，不虚构团聚。

- 选定流：收集的未处理松木加工废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_waste采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`glb-component-machining`; `usda-wood-handbook-2021`; `ilcd-attributional-2010`

###### 废纸基砂光磨具 (`spent_abrasive`)

仅在实际独立出口存在时纳入本单一废纸基砂光磨具。称整份湿态，保留污染与接收/处理。胶出口须实际用胶后才有；普通失败、暂存、清理或销售均不抹除已发生的物流及负荷。真实单一混合出口只保留一个Waste交换及独立量测的互斥来源池，组分不再作为额外外部输出。原料Product或纯化学品不能证明其Waste身份。

- 选定流：废纸基砂光磨具
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_waste采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`glb-component-machining`; `kleiberit-pvac-303`; `ilcd-attributional-2010`

###### 共同收集的松木与磨具加工废物 (`mixed_machining_waste`)

仅在实际独立出口存在时纳入本单一共同收集的松木与磨具加工废物。称整份湿态，保留污染与接收/处理。胶出口须实际用胶后才有；普通失败、暂存、清理或销售均不抹除已发生的物流及负荷。真实单一混合出口只保留一个Waste交换及独立量测的互斥来源池，组分不再作为额外外部输出。原料Product或纯化学品不能证明其Waste身份。

- 选定流：共同收集的松木与磨具加工废物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_waste采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`glb-component-machining`; `kleiberit-pvac-303`; `ilcd-attributional-2010`

###### 废弃整份水性PVAc胶 (`glue_residue`)

仅在实际独立出口存在时纳入本单一废弃整份水性PVAc胶。称整份湿态，保留污染与接收/处理。胶出口须实际用胶后才有；普通失败、暂存、清理或销售均不抹除已发生的物流及负荷。真实单一混合出口只保留一个Waste交换及独立量测的互斥来源池，组分不再作为额外外部输出。原料Product或纯化学品不能证明其Waste身份。

- 选定流：废弃整份水性PVAc胶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_waste采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`glb-component-machining`; `kleiberit-pvac-303`; `ilcd-attributional-2010`

##### 基本流

###### 实际空气排出的二氮 (`n2_m_out`)

实际普通空气排出中的分子二氮（7727-37-9）。要求媒体为未指定空气排放；任何相容绑定仅适用于本实际媒体、相态和时段，工业供气、土壤/水媒体、长期排放或特定同位素记录均不同。用实际状态及独立组分测完整物种毛量V，不设空气比例。环境CO2不等于化石或林业生物碳吸收/排放，不自动产生气候信用。干空气、H2O及实际供气组分桥互斥，不叠加整空气和分物种。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_air_m采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air_m`
- 来源：`ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### 实际空气排出的氧气 (`o2_m_out`)

实际普通空气排出中的分子氧气（7782-44-7）。要求媒体为未指定空气排放；任何相容绑定仅适用于本实际媒体、相态和时段，工业供气、土壤/水媒体、长期排放或特定同位素记录均不同。用实际状态及独立组分测完整物种毛量V，不设空气比例。环境CO2不等于化石或林业生物碳吸收/排放，不自动产生气候信用。干空气、H2O及实际供气组分桥互斥，不叠加整空气和分物种。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_air_m采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air_m`
- 来源：`ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### 实际空气排出的氩 (`ar_m_out`)

实际普通空气排出中的分子氩（7440-37-1）。要求媒体为未指定空气排放；任何相容绑定仅适用于本实际媒体、相态和时段，工业供气、土壤/水媒体、长期排放或特定同位素记录均不同。用实际状态及独立组分测完整物种毛量V，不设空气比例。环境CO2不等于化石或林业生物碳吸收/排放，不自动产生气候信用。干空气、H2O及实际供气组分桥互斥，不叠加整空气和分物种。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_air_m采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air_m`
- 来源：`ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### 实际空气排出的环境二氧化碳 (`ambient_co2_m_out`)

实际普通空气排出中的分子环境二氧化碳（124-38-9）。要求媒体为未指定空气排放；任何相容绑定仅适用于本实际媒体、相态和时段，工业供气、土壤/水媒体、长期排放或特定同位素记录均不同。用实际状态及独立组分测完整物种毛量V，不设空气比例。环境CO2不等于化石或林业生物碳吸收/排放，不自动产生气候信用。干空气、H2O及实际供气组分桥互斥，不叠加整空气和分物种。

- 选定流：环境二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_air_m采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air_m`
- 来源：`ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### 实际H2O水汽排出 (`water_vapour_m`)

实际分子H2O气体，CAS7732-18-5，原生为未指定普通空气排放Elementary及Mass。包括正常储运自然解吸与实际木材、胶、清理干燥；普通湿度交换不需要工作许可。液体排水、冷凝液、排水媒体的水汽记录、外购蒸汽及化学结构水均不同。独立测量数量和状态，整份废水已含的载水不又作为H2O气体排放。VOC/COD或碳残差均不能证明反应水。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_water_m采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water_m`
- 来源：`usda-wood-handbook-2021`; `ilcd-attributional-2010`

###### 逸散入空气的松木粉尘 (`pine_dust_air`)

本卡为抽尘控制后实际逸散空气的单一固体松木粉尘出口。逸散干颗粒、含水、粒径方法及去向独立于收集废物量测。木粉尘/PM是实际复合物而非分子，total PM、PM10、PM2.5为嵌套指标，不是相加物种。Waste粉尘及软木/矿物颗粒不能替代本Elementary木粉尘交换，不编粒径或气体身份。仅有真实物种证据时为实际木材分子挥发物另加卡。

- 选定流：空气松木粉尘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_air_m采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air_m`
- 来源：`glb-component-machining`; `usda-wood-handbook-2021`; `ilcd-attributional-2010`

### 过程：原批次真实工厂门服务 (`gate_service`)

#### 输入

##### 产品流

###### 原批次服务低压电网电力 (`electricity_h`)

原生为小于1kV低压交流电Product、消费组合到用户、电网平均供电。须匹配实际电压、场址、电网、年度及供方，不用垃圾焚烧发电或原生CN供给地域之外的组合替代。保留累计kWh，分配前按3.6 MJ/kWh转换电能一次。参考属性是原生命名Net calorific value的能量属性，不是燃料质量或额外购热。保留实际下料、接合、砂光、抽尘、照明、启停、闲置、失败和清理负荷，电路账互不重叠。 已选原生地域明确为CN中国；仅真实中国低压用户侧电网平均供给匹配时可用，其他地域另核身份。英国床厂原件只作制造技术例证，不支持给其套中国供电。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：使用本行唯一已算x_i；按cp_energy_h采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_h`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 原批次服务实际新增液态自来水 (`tap_water_h`)

本卡为实际经处理市政饮用水供给，原生工厂端/到消费者Product，参考Mass。原生次级Volume系数不是实测密度或耗水要求。完整采集实际清理、允许的稀释/修理新增液体，包括留在期末湿料中的入流；不因期末留存取消。整份外购制剂/制品已含水保留于整份输入，仅作互斥组分桥。不虚构锅炉、蒸汽或换热器。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_water_h采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water_h`
- 来源：`kleiberit-pvac-303`; `usda-wood-handbook-2021`; `ilcd-attributional-2010`

###### 原批次实际床架套件退回 (`bed_return`)

记录原批次实际退回实物状态及完整湿质量，关联原首次放行和交付身份。原生为工厂端生产组合已制造卧室木家具Product、Mass/kg参考，只适用于实际完整合格套件；破损碎片、缺件或Waste处置须用各自真实具体原子流，不套本Product。保留期初/期末FG及各交换继承向量、原Q_H、时窗H、毛G/R及新增水、零件、损失和作业。发运、退回和重验不产生Q。实际放行后作业及持续合格须制造商/规格许可、作业后测试、验收及处置；已发生的未授权或失败作业仍全留物流负荷。不假定恢复，也不按退回质量自动同比逆转。

- 选定流：卧室用木家具 `3b8c5b0a-4a30-4bc1-a5f5-0f0ade7db101`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_fg采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`glb-untreated-london`; `glb-kit-delivery`; `ilcd-attributional-2010`

###### 实际处理服务—原批次服务实际木工清理废水 (`cleaning_wastewater_h_treatment`)

仅在本实际原批次服务实际木工清理废水出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—木工清理废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_h采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_h`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—实际废弃床架套件 (`bed_discard_treatment`)

仅在本实际实际废弃床架套件出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—废弃木制床架套件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_h采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_h`
- 来源：`ilcd-attributional-2010`

##### 废物流

##### 基本流

###### 实际空气摄入的二氮 (`n2_h_in`)

实际自然空气摄入中的分子二氮（7727-37-9）。要求媒体为空气资源中的可再生元素资源；任何相容绑定仅适用于本实际媒体、相态和时段，工业供气、土壤/水媒体、长期排放或特定同位素记录均不同。用实际状态及独立组分测完整物种毛量V，不设空气比例。环境CO2不等于化石或林业生物碳吸收/排放，不自动产生气候信用。干空气、H2O及实际供气组分桥互斥，不叠加整空气和分物种。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_air_h采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air_h`
- 来源：`ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### 实际空气摄入的氧气 (`o2_h_in`)

实际自然空气摄入中的分子氧气（7782-44-7）。要求媒体为空气资源中的可再生元素资源；任何相容绑定仅适用于本实际媒体、相态和时段，工业供气、土壤/水媒体、长期排放或特定同位素记录均不同。用实际状态及独立组分测完整物种毛量V，不设空气比例。环境CO2不等于化石或林业生物碳吸收/排放，不自动产生气候信用。干空气、H2O及实际供气组分桥互斥，不叠加整空气和分物种。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_air_h采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air_h`
- 来源：`ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### 实际空气摄入的氩 (`ar_h_in`)

实际自然空气摄入中的分子氩（7440-37-1）。要求媒体为空气资源中的可再生元素资源；任何相容绑定仅适用于本实际媒体、相态和时段，工业供气、土壤/水媒体、长期排放或特定同位素记录均不同。用实际状态及独立组分测完整物种毛量V，不设空气比例。环境CO2不等于化石或林业生物碳吸收/排放，不自动产生气候信用。干空气、H2O及实际供气组分桥互斥，不叠加整空气和分物种。

- 选定流：氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_air_h采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air_h`
- 来源：`ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### 实际空气摄入的环境二氧化碳 (`ambient_co2_h_in`)

实际自然空气摄入中的分子环境二氧化碳（124-38-9）。要求媒体为空气资源中的可再生元素资源；任何相容绑定仅适用于本实际媒体、相态和时段，工业供气、土壤/水媒体、长期排放或特定同位素记录均不同。用实际状态及独立组分测完整物种毛量V，不设空气比例。环境CO2不等于化石或林业生物碳吸收/排放，不自动产生气候信用。干空气、H2O及实际供气组分桥互斥，不叠加整空气和分物种。

- 选定流：环境二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_air_h采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air_h`
- 来源：`ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### 普通环境H2O摄入 (`humidity_h_in`)

普通机加工、储存、搬运及实际清理/维修中的自然H2O水汽吸收。以kg独立采集相态、状态和库存含水，不为自然湿度交换虚构作业许可。Volume基准环境H2O身份须有独立状态特定实测水汽体积及密度；本Mass交换须有自身相容身份及计量基准前保留未绑定，绝不套液态水密度。湿态来料/制剂已含载水不是第二外部输入。实际新增水与完整期末湿质量同时保留，仅剔除重复的其他流入/流出项。

- 选定流：环境水汽摄入
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_water_h采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water_h`
- 来源：`usda-wood-handbook-2021`; `ilcd-attributional-2010`

#### 输出

##### 产品流

###### 原批次完整床架套件毛发运 (`bed_dispatch`)

记录原批次实际发运/废弃实物状态及完整湿质量，关联原首次放行和交付身份。原生为工厂端生产组合已制造卧室木家具Product、Mass/kg参考，只适用于实际完整合格套件；破损碎片、缺件或Waste处置须用各自真实具体原子流，不套本Product。保留期初/期末FG及各交换继承向量、原Q_H、时窗H、毛G/R及新增水、零件、损失和作业。发运、退回和重验不产生Q。实际放行后作业及持续合格须制造商/规格许可、作业后测试、验收及处置；已发生的未授权或失败作业仍全留物流负荷。不假定恢复，也不按退回质量自动同比逆转。

- 选定流：卧室用木家具 `3b8c5b0a-4a30-4bc1-a5f5-0f0ade7db101`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_fg采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`glb-untreated-london`; `glb-kit-delivery`; `ilcd-attributional-2010`

##### 废物流

###### 原批次服务实际木工清理废水 (`cleaning_wastewater_h`)

本卡为实际分开收集的单一清理废水出口，整份包括水和污染物。实采成分、去向及处理一次；COD/TOC数值不是分子质量。实际收集处理的出口不采用原生指定排入水体的记录。只有实际条件用胶作业发生时才有相关组分，水/固体子账互斥，不另加整份出口。

- 选定流：木工清理废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_water_h采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water_h`
- 来源：`kleiberit-pvac-303`; `ilcd-attributional-2010`

###### 实际废弃床架套件 (`bed_discard`)

记录原批次实际发运/废弃实物状态及完整湿质量，关联原首次放行和交付身份。原生为工厂端生产组合已制造卧室木家具Product、Mass/kg参考，只适用于实际完整合格套件；破损碎片、缺件或Waste处置须用各自真实具体原子流，不套本Product。保留期初/期末FG及各交换继承向量、原Q_H、时窗H、毛G/R及新增水、零件、损失和作业。发运、退回和重验不产生Q。实际放行后作业及持续合格须制造商/规格许可、作业后测试、验收及处置；已发生的未授权或失败作业仍全留物流负荷。不假定恢复，也不按退回质量自动同比逆转。

- 选定流：废弃木制床架套件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_fg采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`glb-untreated-london`; `glb-kit-delivery`; `ilcd-attributional-2010`

##### 基本流

###### 实际空气排出的二氮 (`n2_h_out`)

实际普通空气排出中的分子二氮（7727-37-9）。要求媒体为未指定空气排放；任何相容绑定仅适用于本实际媒体、相态和时段，工业供气、土壤/水媒体、长期排放或特定同位素记录均不同。用实际状态及独立组分测完整物种毛量V，不设空气比例。环境CO2不等于化石或林业生物碳吸收/排放，不自动产生气候信用。干空气、H2O及实际供气组分桥互斥，不叠加整空气和分物种。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_air_h采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air_h`
- 来源：`ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### 实际空气排出的氧气 (`o2_h_out`)

实际普通空气排出中的分子氧气（7782-44-7）。要求媒体为未指定空气排放；任何相容绑定仅适用于本实际媒体、相态和时段，工业供气、土壤/水媒体、长期排放或特定同位素记录均不同。用实际状态及独立组分测完整物种毛量V，不设空气比例。环境CO2不等于化石或林业生物碳吸收/排放，不自动产生气候信用。干空气、H2O及实际供气组分桥互斥，不叠加整空气和分物种。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_air_h采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air_h`
- 来源：`ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### 实际空气排出的氩 (`ar_h_out`)

实际普通空气排出中的分子氩（7440-37-1）。要求媒体为未指定空气排放；任何相容绑定仅适用于本实际媒体、相态和时段，工业供气、土壤/水媒体、长期排放或特定同位素记录均不同。用实际状态及独立组分测完整物种毛量V，不设空气比例。环境CO2不等于化石或林业生物碳吸收/排放，不自动产生气候信用。干空气、H2O及实际供气组分桥互斥，不叠加整空气和分物种。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_air_h采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air_h`
- 来源：`ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### 实际空气排出的环境二氧化碳 (`ambient_co2_h_out`)

实际普通空气排出中的分子环境二氧化碳（124-38-9）。要求媒体为未指定空气排放；任何相容绑定仅适用于本实际媒体、相态和时段，工业供气、土壤/水媒体、长期排放或特定同位素记录均不同。用实际状态及独立组分测完整物种毛量V，不设空气比例。环境CO2不等于化石或林业生物碳吸收/排放，不自动产生气候信用。干空气、H2O及实际供气组分桥互斥，不叠加整空气和分物种。

- 选定流：环境二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_air_h采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air_h`
- 来源：`ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### 实际H2O水汽排出 (`water_vapour_h`)

实际分子H2O气体，CAS7732-18-5，原生为未指定普通空气排放Elementary及Mass。包括正常储运自然解吸与实际木材、胶、清理干燥；普通湿度交换不需要工作许可。液体排水、冷凝液、排水媒体的水汽记录、外购蒸汽及化学结构水均不同。独立测量数量和状态，整份废水已含的载水不又作为H2O气体排放。VOC/COD或碳残差均不能证明反应水。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_water_h采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water_h`
- 来源：`usda-wood-handbook-2021`; `ilcd-attributional-2010`

### 过程：每制品真实六腿包装及charge (`packaging`)

#### 输入

##### 产品流

###### 瓦楞运输纸箱 (`carton_p`)

一份真实完整的瓦楞纸板运输纸箱，限定实际构造和构型，不是纸箱、塑料袋、膜、内衬等包装的集合。相容原子Product流UUID仍待解析。记录真实纸板/瓦楞/层数构造、纤维组成、涂层/复合、湿态、内含胶黏剂/紧固件及供方范围；不预设通用纤维比例、处理、尺寸、重量或寿命。供货整箱内含组成随整箱计一次，真实另供衬件、胶带及其他材料各保互斥独立行及唯一上游归属。保留本卡按包装边界与原始协议定义的P/I/ER/S/EO角色，已有packaging_receipt_basis时依其执行；新供方身份不能改变事件定义。按本卡声明的Mass/kg保完整实测湿毛量及原事件/门/保管/批群，无论即时使用或留期末。保留期初期末空/附着/复用存量、内部复用及独立实测水料变化；不以存量、负荷或经济份额校正缩小毛流。真实制造/服务负荷另按原批群规则和唯一归一化归属一次；单纯毛接收或外发不产生新制造、采购负荷、供方链接或信用。绑定前须解析物理相容的纸箱身份/供方；身份缺口须披露，不能以混合包装集合或虚构UUID代替。

- 选定流: 瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `glb-kit-delivery`

###### 瓦楞运输纸箱 (`carton_i`)

一份真实完整的瓦楞纸板运输纸箱，限定实际构造和构型，不是纸箱、塑料袋、膜、内衬等包装的集合。相容原子Product流UUID仍待解析。记录真实纸板/瓦楞/层数构造、纤维组成、涂层/复合、湿态、内含胶黏剂/紧固件及供方范围；不预设通用纤维比例、处理、尺寸、重量或寿命。供货整箱内含组成随整箱计一次，真实另供衬件、胶带及其他材料各保互斥独立行及唯一上游归属。保留本卡按包装边界与原始协议定义的P/I/ER/S/EO角色，已有packaging_receipt_basis时依其执行；新供方身份不能改变事件定义。按本卡声明的Mass/kg保完整实测湿毛量及原事件/门/保管/批群，无论即时使用或留期末。保留期初期末空/附着/复用存量、内部复用及独立实测水料变化；不以存量、负荷或经济份额校正缩小毛流。真实制造/服务负荷另按原批群规则和唯一归一化归属一次；单纯毛接收或外发不产生新制造、采购负荷、供方链接或信用。绑定前须解析物理相容的纸箱身份/供方；身份缺口须披露，不能以混合包装集合或虚构UUID代替。

- 选定流: 瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `glb-kit-delivery`

###### 瓦楞运输纸箱 (`carton_er`)

一份真实完整的瓦楞纸板运输纸箱，限定实际构造和构型，不是纸箱、塑料袋、膜、内衬等包装的集合。相容原子Product流UUID仍待解析。记录真实纸板/瓦楞/层数构造、纤维组成、涂层/复合、湿态、内含胶黏剂/紧固件及供方范围；不预设通用纤维比例、处理、尺寸、重量或寿命。供货整箱内含组成随整箱计一次，真实另供衬件、胶带及其他材料各保互斥独立行及唯一上游归属。保留本卡按包装边界与原始协议定义的P/I/ER/S/EO角色，已有packaging_receipt_basis时依其执行；新供方身份不能改变事件定义。按本卡声明的Mass/kg保完整实测湿毛量及原事件/门/保管/批群，无论即时使用或留期末。保留期初期末空/附着/复用存量、内部复用及独立实测水料变化；不以存量、负荷或经济份额校正缩小毛流。真实制造/服务负荷另按原批群规则和唯一归一化归属一次；单纯毛接收或外发不产生新制造、采购负荷、供方链接或信用。绑定前须解析物理相容的纸箱身份/供方；身份缺口须披露，不能以混合包装集合或虚构UUID代替。

- 选定流: 瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `glb-kit-delivery`

###### 实际包装服务负荷—瓦楞运输纸箱 (`carton_charge`)

原批次和观测H内实际可归属的瓦楞运输纸箱供给/服务负荷维度。此为匹配供方的实际kg当量服务账，不是第二实物收料，不入毛质量平衡也不再采购P/I/ER。真实上游生产/复用服务所有者和已履行服务各归属一次，真实废物处理由单独处理服务卡一次归属，仅结转未使用/未分配charge。已履行服务不因包装FG留期末消失。不设固定复用寿命、替代信用或自动废物借贷；供方转换缺失保持未知。

- 选定流：瓦楞运输纸箱已归属供给服务
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`

###### 新购进入—LDPE缠绕膜 (`film_p`)

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。一个实际LDPE薄膜制品，原生为Product及Mass；不替换PET、HDPE树脂、EPS垫材或整袋。确认实际聚合物、添加剂及供方。若有纸芯、胶带或另层制品，各另设整件流，不藏于聚合物assay。本卡仅为实际P方向/事件，分子为完整实物毛量V，绝非负荷向量、库存修正消耗或经济份额。退回或发运制品保留实际整件状态；已成为Waste的破损物不能用本Product。供方已含I即使没有另张发票也保留实物流入和一个上游所有者。完整保留期初/期末空、附着WIP、附着FG及复用湿态库存，新增量留在期末仍是流入。仅对同一其他流入/流出项去重。实物披露不新增采购、供方负荷或信用，实际负荷由另设charge账只归属一次。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `glb-kit-delivery`

###### 供方已含进入—LDPE缠绕膜 (`film_i`)

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。一个实际LDPE薄膜制品，原生为Product及Mass；不替换PET、HDPE树脂、EPS垫材或整袋。确认实际聚合物、添加剂及供方。若有纸芯、胶带或另层制品，各另设整件流，不藏于聚合物assay。本卡仅为实际I方向/事件，分子为完整实物毛量V，绝非负荷向量、库存修正消耗或经济份额。退回或发运制品保留实际整件状态；已成为Waste的破损物不能用本Product。供方已含I即使没有另张发票也保留实物流入和一个上游所有者。完整保留期初/期末空、附着WIP、附着FG及复用湿态库存，新增量留在期末仍是流入。仅对同一其他流入/流出项去重。实物披露不新增采购、供方负荷或信用，实际负荷由另设charge账只归属一次。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `glb-kit-delivery`

###### 外部退回接收—LDPE缠绕膜 (`film_er`)

一个实际LDPE薄膜制品，原生为Product及Mass；不替换PET、HDPE树脂、EPS垫材或整袋。确认实际聚合物、添加剂及供方。若有纸芯、胶带或另层制品，各另设整件流，不藏于聚合物assay。本卡仅为实际ER方向/事件，分子为完整实物毛量V，绝非负荷向量、库存修正消耗或经济份额。退回或发运制品保留实际整件状态；已成为Waste的破损物不能用本Product。供方已含I即使没有另张发票也保留实物流入和一个上游所有者。完整保留期初/期末空、附着WIP、附着FG及复用湿态库存，新增量留在期末仍是流入。仅对同一其他流入/流出项去重。实物披露不新增采购、供方负荷或信用，实际负荷由另设charge账只归属一次。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `glb-kit-delivery`

###### 实际包装服务负荷—LDPE缠绕膜 (`film_charge`)

原批次和观测H内实际可归属的LDPE缠绕膜供给/服务负荷维度。此为匹配供方的实际kg当量服务账，不是第二实物收料，不入毛质量平衡也不再采购P/I/ER。真实上游生产/复用服务所有者和已履行服务各归属一次，真实废物处理由单独处理服务卡一次归属，仅结转未使用/未分配charge。已履行服务不因包装FG留期末消失。不设固定复用寿命、替代信用或自动废物借贷；供方转换缺失保持未知。

- 选定流：LDPE缠绕膜已归属供给服务
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`

###### 新购进入—木运输托盘 (`pallet_p`)

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。一个用于机械搬运、运输及储存的完整可移动木载荷平台，采用工厂端已制造木托盘/装载板/套环Product族及Mass。本卡仅为托盘，不是维修板、钉、水或整床。不设欧标尺寸、树种、热处理、固定复用次数或运输份额；声明实际配置及完整湿质量。本卡仅为实际P方向/事件，分子为完整实物毛量V，绝非负荷向量、库存修正消耗或经济份额。退回或发运制品保留实际整件状态；已成为Waste的破损物不能用本Product。供方已含I即使没有另张发票也保留实物流入和一个上游所有者。完整保留期初/期末空、附着WIP、附着FG及复用湿态库存，新增量留在期末仍是流入。仅对同一其他流入/流出项去重。实物披露不新增采购、供方负荷或信用，实际负荷由另设charge账只归属一次。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `glb-kit-delivery`

###### 供方已含进入—木运输托盘 (`pallet_i`)

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。一个用于机械搬运、运输及储存的完整可移动木载荷平台，采用工厂端已制造木托盘/装载板/套环Product族及Mass。本卡仅为托盘，不是维修板、钉、水或整床。不设欧标尺寸、树种、热处理、固定复用次数或运输份额；声明实际配置及完整湿质量。本卡仅为实际I方向/事件，分子为完整实物毛量V，绝非负荷向量、库存修正消耗或经济份额。退回或发运制品保留实际整件状态；已成为Waste的破损物不能用本Product。供方已含I即使没有另张发票也保留实物流入和一个上游所有者。完整保留期初/期末空、附着WIP、附着FG及复用湿态库存，新增量留在期末仍是流入。仅对同一其他流入/流出项去重。实物披露不新增采购、供方负荷或信用，实际负荷由另设charge账只归属一次。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `glb-kit-delivery`

###### 外部退回接收—木运输托盘 (`pallet_er`)

一个用于机械搬运、运输及储存的完整可移动木载荷平台，采用工厂端已制造木托盘/装载板/套环Product族及Mass。本卡仅为托盘，不是维修板、钉、水或整床。不设欧标尺寸、树种、热处理、固定复用次数或运输份额；声明实际配置及完整湿质量。本卡仅为实际ER方向/事件，分子为完整实物毛量V，绝非负荷向量、库存修正消耗或经济份额。退回或发运制品保留实际整件状态；已成为Waste的破损物不能用本Product。供方已含I即使没有另张发票也保留实物流入和一个上游所有者。完整保留期初/期末空、附着WIP、附着FG及复用湿态库存，新增量留在期末仍是流入。仅对同一其他流入/流出项去重。实物披露不新增采购、供方负荷或信用，实际负荷由另设charge账只归属一次。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `glb-kit-delivery`

###### 实际包装服务负荷—木运输托盘 (`pallet_charge`)

原批次和观测H内实际可归属的木运输托盘供给/服务负荷维度。此为匹配供方的实际kg当量服务账，不是第二实物收料，不入毛质量平衡也不再采购P/I/ER。真实上游生产/复用服务所有者和已履行服务各归属一次，真实废物处理由单独处理服务卡一次归属，仅结转未使用/未分配charge。已履行服务不因包装FG留期末消失。不设固定复用寿命、替代信用或自动废物借贷；供方转换缺失保持未知。

- 选定流：木运输托盘已归属供给服务
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`

###### 新购进入—PVAc胶塑料桶 (`pail_p`)

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。仅在实际采购桶装胶时，本卡为一个完整空塑料胶桶。胶TDS同时列桶和瓶/箱替代形态，不证明桶聚合物、皮重、同一订单或复用适配。须由供方证明实际聚合物及独立盖、提手、内衬；整件只计一次，组件桥互斥，另购组件另加原子卡。胶内容物另记，不计入桶皮重。本卡仅为实际P方向/事件，分子为完整实物毛量V，绝非负荷向量、库存修正消耗或经济份额。退回或发运制品保留实际整件状态；已成为Waste的破损物不能用本Product。供方已含I即使没有另张发票也保留实物流入和一个上游所有者。完整保留期初/期末空、附着WIP、附着FG及复用湿态库存，新增量留在期末仍是流入。仅对同一其他流入/流出项去重。实物披露不新增采购、供方负荷或信用，实际负荷由另设charge账只归属一次。

- 选定流：塑料胶桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 供方已含进入—PVAc胶塑料桶 (`pail_i`)

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。仅在实际采购桶装胶时，本卡为一个完整空塑料胶桶。胶TDS同时列桶和瓶/箱替代形态，不证明桶聚合物、皮重、同一订单或复用适配。须由供方证明实际聚合物及独立盖、提手、内衬；整件只计一次，组件桥互斥，另购组件另加原子卡。胶内容物另记，不计入桶皮重。本卡仅为实际I方向/事件，分子为完整实物毛量V，绝非负荷向量、库存修正消耗或经济份额。退回或发运制品保留实际整件状态；已成为Waste的破损物不能用本Product。供方已含I即使没有另张发票也保留实物流入和一个上游所有者。完整保留期初/期末空、附着WIP、附着FG及复用湿态库存，新增量留在期末仍是流入。仅对同一其他流入/流出项去重。实物披露不新增采购、供方负荷或信用，实际负荷由另设charge账只归属一次。

- 选定流：塑料胶桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 外部退回接收—PVAc胶塑料桶 (`pail_er`)

仅在实际采购桶装胶时，本卡为一个完整空塑料胶桶。胶TDS同时列桶和瓶/箱替代形态，不证明桶聚合物、皮重、同一订单或复用适配。须由供方证明实际聚合物及独立盖、提手、内衬；整件只计一次，组件桥互斥，另购组件另加原子卡。胶内容物另记，不计入桶皮重。本卡仅为实际ER方向/事件，分子为完整实物毛量V，绝非负荷向量、库存修正消耗或经济份额。退回或发运制品保留实际整件状态；已成为Waste的破损物不能用本Product。供方已含I即使没有另张发票也保留实物流入和一个上游所有者。完整保留期初/期末空、附着WIP、附着FG及复用湿态库存，新增量留在期末仍是流入。仅对同一其他流入/流出项去重。实物披露不新增采购、供方负荷或信用，实际负荷由另设charge账只归属一次。

- 选定流：塑料胶桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 实际包装服务负荷—PVAc胶塑料桶 (`pail_charge`)

原批次和观测H内实际可归属的PVAc胶塑料桶供给/服务负荷维度。此为匹配供方的实际kg当量服务账，不是第二实物收料，不入毛质量平衡也不再采购P/I/ER。真实上游生产/复用服务所有者和已履行服务各归属一次，真实废物处理由单独处理服务卡一次归属，仅结转未使用/未分配charge。已履行服务不因包装FG留期末消失。不设固定复用寿命、替代信用或自动废物借贷；供方转换缺失保持未知。

- 选定流：PVAc胶塑料桶已归属供给服务
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`

###### 窑干松木托盘维修板 (`pallet_repair_plank`)

本卡为实际窑干松木托盘维修板，不是整托盘。来板须匹配加工厂窑干未胶合针叶锯材，实际追加下料和修理作业保留，不假定已含在供货中。实际新增/旧件进入及拆下状态分别采。新增量留在完整期末湿态库存仍保留实入流，X仅对另一已含流入/流出项去重。已含于进厂整托盘的初始材料不再新购。失败或未授权实际修理仍保留材料、能耗、水及hold/废物历史。

- 选定流：针叶锯材 `50904047-e5b0-4110-990a-53751d250267`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_maintenance采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：`ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### 钢托盘维修钉 (`pallet_repair_nail`)

本卡为实际钢托盘维修钉，不是整托盘。不以整托盘或钢螺钉Product替代本独立钢钉或Waste。实际新增/旧件进入及拆下状态分别采。新增量留在完整期末湿态库存仍保留实入流，X仅对另一已含流入/流出项去重。已含于进厂整托盘的初始材料不再新购。失败或未授权实际修理仍保留材料、能耗、水及hold/废物历史。 本卡采用全球工厂制造装配用Steel fasteners族，准确原生Mass/kg，正面包括真实钢制紧固制品；只限本单种实测托盘维修钢钉，类型/涂层/供方另核。不是钢螺钉、整托盘、零件合集或Waste，不设件重/配方/磨耗。

- 选定流：钢紧固件 `ebfe08f5-42c8-484e-b39a-684a35981c24`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_maintenance采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：`ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### 实际处理服务—实际废弃包装—瓦楞运输纸箱 (`carton_w_treatment`)

仅在本实际实际废弃包装—瓦楞运输纸箱出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—废瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_p采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_p`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—实际废弃包装—LDPE缠绕膜 (`film_w_treatment`)

仅在本实际实际废弃包装—LDPE缠绕膜出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—废LDPE缠绕膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_p采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_p`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—实际废弃包装—木运输托盘 (`pallet_w_treatment`)

仅在本实际实际废弃包装—木运输托盘出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—废木运输托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_p采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_p`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—实际废弃包装—PVAc胶塑料桶 (`pail_w_treatment`)

仅在本实际实际废弃包装—PVAc胶塑料桶出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—废PVAc胶塑料桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_p采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_p`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—一个实际合收纸与LDPE与木包装废物出口 (`mixed_packaging_waste_treatment`)

仅在本实际一个实际合收纸与LDPE与木包装废物出口出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—纸与LDPE与木混合包装废物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_p采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_p`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—拆下托盘木废料 (`removed_pallet_wood_treatment`)

仅在本实际拆下托盘木废料出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—拆下托盘木废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_p采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_p`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—拆下托盘钢钉废物 (`removed_pallet_nail_treatment`)

仅在本实际拆下托盘钢钉废物出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—拆下托盘钢钉废物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_p采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_p`
- 来源：`ilcd-attributional-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 瓦楞运输纸箱 (`carton_s`)

一份真实完整的瓦楞纸板运输纸箱，限定实际构造和构型，不是纸箱、塑料袋、膜、内衬等包装的集合。相容原子Product流UUID仍待解析。记录真实纸板/瓦楞/层数构造、纤维组成、涂层/复合、湿态、内含胶黏剂/紧固件及供方范围；不预设通用纤维比例、处理、尺寸、重量或寿命。供货整箱内含组成随整箱计一次，真实另供衬件、胶带及其他材料各保互斥独立行及唯一上游归属。保留本卡按包装边界与原始协议定义的P/I/ER/S/EO角色，已有packaging_receipt_basis时依其执行；新供方身份不能改变事件定义。按本卡声明的Mass/kg保完整实测湿毛量及原事件/门/保管/批群，无论即时使用或留期末。保留期初期末空/附着/复用存量、内部复用及独立实测水料变化；不以存量、负荷或经济份额校正缩小毛流。真实制造/服务负荷另按原批群规则和唯一归一化归属一次；单纯毛接收或外发不产生新制造、采购负荷、供方链接或信用。绑定前须解析物理相容的纸箱身份/供方；身份缺口须披露，不能以混合包装集合或虚构UUID代替。

- 选定流: 瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `glb-kit-delivery`

###### 瓦楞运输纸箱 (`carton_eo`)

一份真实完整的瓦楞纸板运输纸箱，限定实际构造和构型，不是纸箱、塑料袋、膜、内衬等包装的集合。相容原子Product流UUID仍待解析。记录真实纸板/瓦楞/层数构造、纤维组成、涂层/复合、湿态、内含胶黏剂/紧固件及供方范围；不预设通用纤维比例、处理、尺寸、重量或寿命。供货整箱内含组成随整箱计一次，真实另供衬件、胶带及其他材料各保互斥独立行及唯一上游归属。保留本卡按包装边界与原始协议定义的P/I/ER/S/EO角色，已有packaging_receipt_basis时依其执行；新供方身份不能改变事件定义。按本卡声明的Mass/kg保完整实测湿毛量及原事件/门/保管/批群，无论即时使用或留期末。保留期初期末空/附着/复用存量、内部复用及独立实测水料变化；不以存量、负荷或经济份额校正缩小毛流。真实制造/服务负荷另按原批群规则和唯一归一化归属一次；单纯毛接收或外发不产生新制造、采购负荷、供方链接或信用。绑定前须解析物理相容的纸箱身份/供方；身份缺口须披露，不能以混合包装集合或虚构UUID代替。

- 选定流: 瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `glb-kit-delivery`

###### 随毛实物发运离开—LDPE缠绕膜 (`film_s`)

一个实际LDPE薄膜制品，原生为Product及Mass；不替换PET、HDPE树脂、EPS垫材或整袋。确认实际聚合物、添加剂及供方。若有纸芯、胶带或另层制品，各另设整件流，不藏于聚合物assay。本卡仅为实际S方向/事件，分子为完整实物毛量V，绝非负荷向量、库存修正消耗或经济份额。退回或发运制品保留实际整件状态；已成为Waste的破损物不能用本Product。供方已含I即使没有另张发票也保留实物流入和一个上游所有者。完整保留期初/期末空、附着WIP、附着FG及复用湿态库存，新增量留在期末仍是流入。仅对同一其他流入/流出项去重。实物披露不新增采购、供方负荷或信用，实际负荷由另设charge账只归属一次。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `glb-kit-delivery`

###### 对外退还送出—LDPE缠绕膜 (`film_eo`)

一个实际LDPE薄膜制品，原生为Product及Mass；不替换PET、HDPE树脂、EPS垫材或整袋。确认实际聚合物、添加剂及供方。若有纸芯、胶带或另层制品，各另设整件流，不藏于聚合物assay。本卡仅为实际EO方向/事件，分子为完整实物毛量V，绝非负荷向量、库存修正消耗或经济份额。退回或发运制品保留实际整件状态；已成为Waste的破损物不能用本Product。供方已含I即使没有另张发票也保留实物流入和一个上游所有者。完整保留期初/期末空、附着WIP、附着FG及复用湿态库存，新增量留在期末仍是流入。仅对同一其他流入/流出项去重。实物披露不新增采购、供方负荷或信用，实际负荷由另设charge账只归属一次。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `glb-kit-delivery`

###### 随毛实物发运离开—木运输托盘 (`pallet_s`)

一个用于机械搬运、运输及储存的完整可移动木载荷平台，采用工厂端已制造木托盘/装载板/套环Product族及Mass。本卡仅为托盘，不是维修板、钉、水或整床。不设欧标尺寸、树种、热处理、固定复用次数或运输份额；声明实际配置及完整湿质量。本卡仅为实际S方向/事件，分子为完整实物毛量V，绝非负荷向量、库存修正消耗或经济份额。退回或发运制品保留实际整件状态；已成为Waste的破损物不能用本Product。供方已含I即使没有另张发票也保留实物流入和一个上游所有者。完整保留期初/期末空、附着WIP、附着FG及复用湿态库存，新增量留在期末仍是流入。仅对同一其他流入/流出项去重。实物披露不新增采购、供方负荷或信用，实际负荷由另设charge账只归属一次。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `glb-kit-delivery`

###### 对外退还送出—木运输托盘 (`pallet_eo`)

一个用于机械搬运、运输及储存的完整可移动木载荷平台，采用工厂端已制造木托盘/装载板/套环Product族及Mass。本卡仅为托盘，不是维修板、钉、水或整床。不设欧标尺寸、树种、热处理、固定复用次数或运输份额；声明实际配置及完整湿质量。本卡仅为实际EO方向/事件，分子为完整实物毛量V，绝非负荷向量、库存修正消耗或经济份额。退回或发运制品保留实际整件状态；已成为Waste的破损物不能用本Product。供方已含I即使没有另张发票也保留实物流入和一个上游所有者。完整保留期初/期末空、附着WIP、附着FG及复用湿态库存，新增量留在期末仍是流入。仅对同一其他流入/流出项去重。实物披露不新增采购、供方负荷或信用，实际负荷由另设charge账只归属一次。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `glb-kit-delivery`

###### 随毛实物发运离开—PVAc胶塑料桶 (`pail_s`)

仅在实际采购桶装胶时，本卡为一个完整空塑料胶桶。胶TDS同时列桶和瓶/箱替代形态，不证明桶聚合物、皮重、同一订单或复用适配。须由供方证明实际聚合物及独立盖、提手、内衬；整件只计一次，组件桥互斥，另购组件另加原子卡。胶内容物另记，不计入桶皮重。本卡仅为实际S方向/事件，分子为完整实物毛量V，绝非负荷向量、库存修正消耗或经济份额。退回或发运制品保留实际整件状态；已成为Waste的破损物不能用本Product。供方已含I即使没有另张发票也保留实物流入和一个上游所有者。完整保留期初/期末空、附着WIP、附着FG及复用湿态库存，新增量留在期末仍是流入。仅对同一其他流入/流出项去重。实物披露不新增采购、供方负荷或信用，实际负荷由另设charge账只归属一次。

- 选定流：塑料胶桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 对外退还送出—PVAc胶塑料桶 (`pail_eo`)

仅在实际采购桶装胶时，本卡为一个完整空塑料胶桶。胶TDS同时列桶和瓶/箱替代形态，不证明桶聚合物、皮重、同一订单或复用适配。须由供方证明实际聚合物及独立盖、提手、内衬；整件只计一次，组件桥互斥，另购组件另加原子卡。胶内容物另记，不计入桶皮重。本卡仅为实际EO方向/事件，分子为完整实物毛量V，绝非负荷向量、库存修正消耗或经济份额。退回或发运制品保留实际整件状态；已成为Waste的破损物不能用本Product。供方已含I即使没有另张发票也保留实物流入和一个上游所有者。完整保留期初/期末空、附着WIP、附着FG及复用湿态库存，新增量留在期末仍是流入。仅对同一其他流入/流出项去重。实物披露不新增采购、供方负荷或信用，实际负荷由另设charge账只归属一次。

- 选定流：塑料胶桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `kleiberit-pvac-303`

##### 废物流

###### 实际废弃包装—瓦楞运输纸箱 (`carton_w`)

一股实际废弃瓦楞运输纸箱Waste流，保留真实整件材质、污染及处置，不是已制造Product参考。本卡仅为实际W方向/事件，分子为完整实物毛量V，绝非负荷向量、库存修正消耗或经济份额。用真实单一Waste出口；若本池从同一个混合出口离开，仅在来源子账量W，不把本组分卡另加成外部交换。此处Waste身份保留未确认，不套已制造Product。完整保留期初/期末空、附着WIP、附着FG及复用湿态库存，新增量留在期末仍是流入。仅对同一其他流入/流出项去重。实物披露不新增采购、供方负荷或信用，实际负荷由另设charge账只归属一次。

- 选定流：废瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `glb-kit-delivery`

###### 实际废弃包装—LDPE缠绕膜 (`film_w`)

一股实际废弃LDPE缠绕膜Waste流，保留真实整件材质、污染及处置，不是已制造Product参考。本卡仅为实际W方向/事件，分子为完整实物毛量V，绝非负荷向量、库存修正消耗或经济份额。用真实单一Waste出口；若本池从同一个混合出口离开，仅在来源子账量W，不把本组分卡另加成外部交换。此处Waste身份保留未确认，不套已制造Product。完整保留期初/期末空、附着WIP、附着FG及复用湿态库存，新增量留在期末仍是流入。仅对同一其他流入/流出项去重。实物披露不新增采购、供方负荷或信用，实际负荷由另设charge账只归属一次。

- 选定流：废LDPE缠绕膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `glb-kit-delivery`

###### 实际废弃包装—木运输托盘 (`pallet_w`)

一股实际废弃木运输托盘Waste流，保留真实整件材质、污染及处置，不是已制造Product参考。本卡仅为实际W方向/事件，分子为完整实物毛量V，绝非负荷向量、库存修正消耗或经济份额。用真实单一Waste出口；若本池从同一个混合出口离开，仅在来源子账量W，不把本组分卡另加成外部交换。此处Waste身份保留未确认，不套已制造Product。完整保留期初/期末空、附着WIP、附着FG及复用湿态库存，新增量留在期末仍是流入。仅对同一其他流入/流出项去重。实物披露不新增采购、供方负荷或信用，实际负荷由另设charge账只归属一次。

- 选定流：废木运输托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `glb-kit-delivery`

###### 实际废弃包装—PVAc胶塑料桶 (`pail_w`)

一股实际废弃PVAc胶塑料桶Waste流，保留真实整件材质、污染及处置，不是已制造Product参考。本卡仅为实际W方向/事件，分子为完整实物毛量V，绝非负荷向量、库存修正消耗或经济份额。用真实单一Waste出口；若本池从同一个混合出口离开，仅在来源子账量W，不把本组分卡另加成外部交换。此处Waste身份保留未确认，不套已制造Product。完整保留期初/期末空、附着WIP、附着FG及复用湿态库存，新增量留在期末仍是流入。仅对同一其他流入/流出项去重。实物披露不新增采购、供方负荷或信用，实际负荷由另设charge账只归属一次。

- 选定流：废PVAc胶塑料桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一个实际合收纸与LDPE与木包装废物出口 (`mixed_packaging_waste`)

仅在确有上述材料的一个混合出口时条件纳入。称整出口，独立测互斥纸箱/膜/托盘W来源池，分池和应在不确定度内对上整出口，但组分W不再作为单独外部交换相加。真实胶桶或其他组分若进入同一出口，须加入实际来源池并修订具体身份。处理/供方一次，毛V完整，不因出售产生信用。

- 选定流：纸与LDPE与木混合包装废物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_packaging采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-attributional-2010`

###### 拆下托盘木废料 (`removed_pallet_wood`)

本卡为实际拆下托盘木废料，不是整托盘。该Waste出口为工厂实际拆下木件，以Mass/kg计量，不是托盘或钢钉，不采用全球统计或默认回收。实际新增/旧件进入及拆下状态分别采。新增量留在完整期末湿态库存仍保留实入流，X仅对另一已含流入/流出项去重。已含于进厂整托盘的初始材料不再新购。失败或未授权实际修理仍保留材料、能耗、水及hold/废物历史。与本实际非团聚形态的适配尚未获证，UUID身份保留未决。泛称木废料及来源描述不能证明形态匹配或分类错误。绑定前核实真实形态、污染、接收方及供方归属；保留实际材料和处理负荷，不虚构团聚。

- 选定流：拆下托盘木废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_maintenance采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：`ilcd-attributional-2010`; `usda-wood-handbook-2021`

###### 拆下托盘钢钉废物 (`removed_pallet_nail`)

本卡为实际拆下托盘钢钉废物，不是整托盘。不以整托盘或钢螺钉Product替代本独立钢钉或Waste。实际新增/旧件进入及拆下状态分别采。新增量留在完整期末湿态库存仍保留实入流，X仅对另一已含流入/流出项去重。已含于进厂整托盘的初始材料不再新购。失败或未授权实际修理仍保留材料、能耗、水及hold/废物历史。

- 选定流：拆下托盘钢钉废物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_maintenance采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：`ilcd-attributional-2010`; `usda-wood-handbook-2021`

##### 基本流

### 过程：真实机器刀具流体及服务 (`assets`)

#### 输入

##### 产品流

###### 钢木工锯片 (`steel_blade`)

本卡为实际单一钢木工锯片，保留整件/整份制剂、增旧拆下状态、在装流体及完整湿态库存。原生为全球工厂端钢锯片/剪切刀片辅助切削制品族，没有定量磨耗率；仅限定本单一钢刀具，硬质合金复合物或仅金属切削供方须另证适配。本实物分子是完整毛量V，服务/隐含负荷由实际资产账另归属一次。进厂整机已含零件/流体不另购，本卡仅记真实追加供给。新增维修料留期末仍同时保留实入流及完整期末质量，仅对另一入/出项去重。保留失败作业、真实污染物/水相及接收处理。实际未列增旧刀具或维修材料须逐原子补卡。

- 选定流：钢锯片或剪切刀片 `970801c9-08c1-4d9c-999d-4b66609430be`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 钢木工钻头 (`drill_bit`)

本卡为实际单一钢木工钻头，保留整件/整份制剂、增旧拆下状态、在装流体及完整湿态库存。无实际相容性证据不推定固定等级、热值、磨耗率、寿命或海上/废油再生路线。本实物分子是完整毛量V，服务/隐含负荷由实际资产账另归属一次。进厂整机已含零件/流体不另购，本卡仅记真实追加供给。新增维修料留期末仍同时保留实入流及完整期末质量，仅对另一入/出项去重。保留失败作业、真实污染物/水相及接收处理。实际未列增旧刀具或维修材料须逐原子补卡。

- 选定流：钢木工钻头
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 钢木工刨刀 (`planer_knife`)

本卡为实际单一钢木工刨刀，保留整件/整份制剂、增旧拆下状态、在装流体及完整湿态库存。无实际相容性证据不推定固定等级、热值、磨耗率、寿命或海上/废油再生路线。本实物分子是完整毛量V，服务/隐含负荷由实际资产账另归属一次。进厂整机已含零件/流体不另购，本卡仅记真实追加供给。新增维修料留期末仍同时保留实入流及完整期末质量，仅对另一入/出项去重。保留失败作业、真实污染物/水相及接收处理。实际未列增旧刀具或维修材料须逐原子补卡。

- 选定流：钢木工刨刀
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 整份石油润滑油 (`lubricant`)

本卡为实际单一整份石油润滑油，保留整件/整份制剂、增旧拆下状态、在装流体及完整湿态库存。无实际相容性证据不推定固定等级、热值、磨耗率、寿命或海上/废油再生路线。本实物分子是完整毛量V，服务/隐含负荷由实际资产账另归属一次。进厂整机已含零件/流体不另购，本卡仅记真实追加供给。新增维修料留期末仍同时保留实入流及完整期末质量，仅对另一入/出项去重。保留失败作业、真实污染物/水相及接收处理。实际未列增旧刀具或维修材料须逐原子补卡。

- 选定流：整份石油润滑油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 新增钢机器轴承 (`bearing_new`)

本卡为新增、旧件进入或外送复用该次事件中的一个实际钢滚动机器轴承，原生为工厂端生产组合已制造滚珠轴承或滚柱轴承Product族、Mass/kg。限定真实单一轴承几何、钢结构、密封及在装润滑；另供密封/流体各为实际独立原子流，进厂整轴承已含不再采购。声明增旧状态及原剩余负荷向量，不设固定寿命。这不是整机、切削刀片、滑动轴套或Waste。毛分子是完整实际V，轴承留期末仍保完整实入；实际已履行整机服务及拆下Waste轴承各另记一次。

- 选定流：滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 接收旧钢机器轴承 (`bearing_old_in`)

本卡为新增、旧件进入或外送复用该次事件中的一个实际钢滚动机器轴承，原生为工厂端生产组合已制造滚珠轴承或滚柱轴承Product族、Mass/kg。限定真实单一轴承几何、钢结构、密封及在装润滑；另供密封/流体各为实际独立原子流，进厂整轴承已含不再采购。声明增旧状态及原剩余负荷向量，不设固定寿命。这不是整机、切削刀片、滑动轴套或Waste。毛分子是完整实际V，轴承留期末仍保完整实入；实际已履行整机服务及拆下Waste轴承各另记一次。

- 选定流：滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 木工横截锯床—新购进入 (`saw_new`)

本卡为一次木工横截锯床的新购进入实物保管事件。原生为工厂端生产组合的已制造木材加工机床Product族及Mass，本卡限定为这一台功能配置完整机器，不替代为仅金属机床、板材压机、木材输出或设备集合。保留序列、配置、全部整机材料/流体质量、增旧毛入/出及期初期末在装存量。整机入流已含组件不叠加；真实后续维修新增料及水分另记。分子为完整毛V，不是负荷份额；已履行服务和实际隐含负荷使用另算。不设固定寿命、自动替换或每kg床一整机。实际无事件只能凭证据条件缺省。

- 选定流：木料、软木、骨、硬橡胶、硬质塑料或类似硬质材料加工用机械，制造木质或其他木制碎料板或建筑用纤维板的压力机，以及处理木料或软木的机械 `740d919d-5380-4e2e-b5aa-c374314b9743`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 木工横截锯床—旧机接收 (`saw_used_in`)

本卡为一次木工横截锯床的旧机接收实物保管事件。原生为工厂端生产组合的已制造木材加工机床Product族及Mass，本卡限定为这一台功能配置完整机器，不替代为仅金属机床、板材压机、木材输出或设备集合。保留序列、配置、全部整机材料/流体质量、增旧毛入/出及期初期末在装存量。整机入流已含组件不叠加；真实后续维修新增料及水分另记。分子为完整毛V，不是负荷份额；已履行服务和实际隐含负荷使用另算。不设固定寿命、自动替换或每kg床一整机。实际无事件只能凭证据条件缺省。

- 选定流：木料、软木、骨、硬橡胶、硬质塑料或类似硬质材料加工用机械，制造木质或其他木制碎料板或建筑用纤维板的压力机，以及处理木料或软木的机械 `740d919d-5380-4e2e-b5aa-c374314b9743`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 木工横截锯床实际能力服务 (`saw_service`)

本卡为木工横截锯床实际已履行服务，单位h，须有实证能力/利用率、真实共用驱动因素、供方边界及原批次。这是服务而非整机Mass，与增旧收退废实物卡分开。按实际隐含/维护服务向量归属一次，不设固定寿命。仅在供方未含时另记电力及真实维修材料；保留已发生闲置、启停、失败和清理服务，仅结转未用/未分配service/charge。能力/供方转换未知阻止数值使用，不阻止实物采集。

- 选定流：木工横截锯床能力服务
- 流属性/单位：时间 / h
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子为实际已履行service A_asset_i，独立整机实物质量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`ilcd-attributional-2010`

###### 木工刨床—新购进入 (`planer_new`)

本卡为一次木工刨床的新购进入实物保管事件。原生为工厂端生产组合的已制造木材加工机床Product族及Mass，本卡限定为这一台功能配置完整机器，不替代为仅金属机床、板材压机、木材输出或设备集合。保留序列、配置、全部整机材料/流体质量、增旧毛入/出及期初期末在装存量。整机入流已含组件不叠加；真实后续维修新增料及水分另记。分子为完整毛V，不是负荷份额；已履行服务和实际隐含负荷使用另算。不设固定寿命、自动替换或每kg床一整机。实际无事件只能凭证据条件缺省。

- 选定流：木料、软木、骨、硬橡胶、硬质塑料或类似硬质材料加工用机械，制造木质或其他木制碎料板或建筑用纤维板的压力机，以及处理木料或软木的机械 `740d919d-5380-4e2e-b5aa-c374314b9743`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 木工刨床—旧机接收 (`planer_used_in`)

本卡为一次木工刨床的旧机接收实物保管事件。原生为工厂端生产组合的已制造木材加工机床Product族及Mass，本卡限定为这一台功能配置完整机器，不替代为仅金属机床、板材压机、木材输出或设备集合。保留序列、配置、全部整机材料/流体质量、增旧毛入/出及期初期末在装存量。整机入流已含组件不叠加；真实后续维修新增料及水分另记。分子为完整毛V，不是负荷份额；已履行服务和实际隐含负荷使用另算。不设固定寿命、自动替换或每kg床一整机。实际无事件只能凭证据条件缺省。

- 选定流：木料、软木、骨、硬橡胶、硬质塑料或类似硬质材料加工用机械，制造木质或其他木制碎料板或建筑用纤维板的压力机，以及处理木料或软木的机械 `740d919d-5380-4e2e-b5aa-c374314b9743`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 木工刨床实际能力服务 (`planer_service`)

本卡为木工刨床实际已履行服务，单位h，须有实证能力/利用率、真实共用驱动因素、供方边界及原批次。这是服务而非整机Mass，与增旧收退废实物卡分开。按实际隐含/维护服务向量归属一次，不设固定寿命。仅在供方未含时另记电力及真实维修材料；保留已发生闲置、启停、失败和清理服务，仅结转未用/未分配service/charge。能力/供方转换未知阻止数值使用，不阻止实物采集。

- 选定流：木工刨床能力服务
- 流属性/单位：时间 / h
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子为实际已履行service A_asset_i，独立整机实物质量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`ilcd-attributional-2010`

###### 木工榫孔钻孔机—新购进入 (`drill_new`)

本卡为一次木工榫孔钻孔机的新购进入实物保管事件。原生为工厂端生产组合的已制造木材加工机床Product族及Mass，本卡限定为这一台功能配置完整机器，不替代为仅金属机床、板材压机、木材输出或设备集合。保留序列、配置、全部整机材料/流体质量、增旧毛入/出及期初期末在装存量。整机入流已含组件不叠加；真实后续维修新增料及水分另记。分子为完整毛V，不是负荷份额；已履行服务和实际隐含负荷使用另算。不设固定寿命、自动替换或每kg床一整机。实际无事件只能凭证据条件缺省。

- 选定流：木料、软木、骨、硬橡胶、硬质塑料或类似硬质材料加工用机械，制造木质或其他木制碎料板或建筑用纤维板的压力机，以及处理木料或软木的机械 `740d919d-5380-4e2e-b5aa-c374314b9743`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 木工榫孔钻孔机—旧机接收 (`drill_used_in`)

本卡为一次木工榫孔钻孔机的旧机接收实物保管事件。原生为工厂端生产组合的已制造木材加工机床Product族及Mass，本卡限定为这一台功能配置完整机器，不替代为仅金属机床、板材压机、木材输出或设备集合。保留序列、配置、全部整机材料/流体质量、增旧毛入/出及期初期末在装存量。整机入流已含组件不叠加；真实后续维修新增料及水分另记。分子为完整毛V，不是负荷份额；已履行服务和实际隐含负荷使用另算。不设固定寿命、自动替换或每kg床一整机。实际无事件只能凭证据条件缺省。

- 选定流：木料、软木、骨、硬橡胶、硬质塑料或类似硬质材料加工用机械，制造木质或其他木制碎料板或建筑用纤维板的压力机，以及处理木料或软木的机械 `740d919d-5380-4e2e-b5aa-c374314b9743`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 木工榫孔钻孔机实际能力服务 (`drill_service`)

本卡为木工榫孔钻孔机实际已履行服务，单位h，须有实证能力/利用率、真实共用驱动因素、供方边界及原批次。这是服务而非整机Mass，与增旧收退废实物卡分开。按实际隐含/维护服务向量归属一次，不设固定寿命。仅在供方未含时另记电力及真实维修材料；保留已发生闲置、启停、失败和清理服务，仅结转未用/未分配service/charge。能力/供方转换未知阻止数值使用，不阻止实物采集。

- 选定流：木工榫孔钻孔机能力服务
- 流属性/单位：时间 / h
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子为实际已履行service A_asset_i，独立整机实物质量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`ilcd-attributional-2010`

###### 木工砂光机—新购进入 (`sander_new`)

本卡为一次木工砂光机的新购进入实物保管事件。原生为工厂端生产组合的已制造木材加工机床Product族及Mass，本卡限定为这一台功能配置完整机器，不替代为仅金属机床、板材压机、木材输出或设备集合。保留序列、配置、全部整机材料/流体质量、增旧毛入/出及期初期末在装存量。整机入流已含组件不叠加；真实后续维修新增料及水分另记。分子为完整毛V，不是负荷份额；已履行服务和实际隐含负荷使用另算。不设固定寿命、自动替换或每kg床一整机。实际无事件只能凭证据条件缺省。

- 选定流：木料、软木、骨、硬橡胶、硬质塑料或类似硬质材料加工用机械，制造木质或其他木制碎料板或建筑用纤维板的压力机，以及处理木料或软木的机械 `740d919d-5380-4e2e-b5aa-c374314b9743`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 木工砂光机—旧机接收 (`sander_used_in`)

本卡为一次木工砂光机的旧机接收实物保管事件。原生为工厂端生产组合的已制造木材加工机床Product族及Mass，本卡限定为这一台功能配置完整机器，不替代为仅金属机床、板材压机、木材输出或设备集合。保留序列、配置、全部整机材料/流体质量、增旧毛入/出及期初期末在装存量。整机入流已含组件不叠加；真实后续维修新增料及水分另记。分子为完整毛V，不是负荷份额；已履行服务和实际隐含负荷使用另算。不设固定寿命、自动替换或每kg床一整机。实际无事件只能凭证据条件缺省。

- 选定流：木料、软木、骨、硬橡胶、硬质塑料或类似硬质材料加工用机械，制造木质或其他木制碎料板或建筑用纤维板的压力机，以及处理木料或软木的机械 `740d919d-5380-4e2e-b5aa-c374314b9743`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 木工砂光机实际能力服务 (`sander_service`)

本卡为木工砂光机实际已履行服务，单位h，须有实证能力/利用率、真实共用驱动因素、供方边界及原批次。这是服务而非整机Mass，与增旧收退废实物卡分开。按实际隐含/维护服务向量归属一次，不设固定寿命。仅在供方未含时另记电力及真实维修材料；保留已发生闲置、启停、失败和清理服务，仅结转未用/未分配service/charge。能力/供方转换未知阻止数值使用，不阻止实物采集。

- 选定流：木工砂光机能力服务
- 流属性/单位：时间 / h
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子为实际已履行service A_asset_i，独立整机实物质量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`ilcd-attributional-2010`

###### 木粉尘抽集机—新购进入 (`extractor_new`)

本卡为一次木粉尘抽集机的新购进入实物保管事件。实际废弃整机或粉尘抽集机保持自身具体流，不因机器分类而豁免Product/Waste/类型冲突。保留序列、配置、全部整机材料/流体质量、增旧毛入/出及期初期末在装存量。整机入流已含组件不叠加；真实后续维修新增料及水分另记。分子为完整毛V，不是负荷份额；已履行服务和实际隐含负荷使用另算。不设固定寿命、自动替换或每kg床一整机。实际无事件只能凭证据条件缺省。

- 选定流：木粉尘抽集机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 木粉尘抽集机—旧机接收 (`extractor_used_in`)

本卡为一次木粉尘抽集机的旧机接收实物保管事件。实际废弃整机或粉尘抽集机保持自身具体流，不因机器分类而豁免Product/Waste/类型冲突。保留序列、配置、全部整机材料/流体质量、增旧毛入/出及期初期末在装存量。整机入流已含组件不叠加；真实后续维修新增料及水分另记。分子为完整毛V，不是负荷份额；已履行服务和实际隐含负荷使用另算。不设固定寿命、自动替换或每kg床一整机。实际无事件只能凭证据条件缺省。

- 选定流：旧木粉尘抽集机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 木粉尘抽集机实际能力服务 (`extractor_service`)

本卡为木粉尘抽集机实际已履行服务，单位h，须有实证能力/利用率、真实共用驱动因素、供方边界及原批次。这是服务而非整机Mass，与增旧收退废实物卡分开。按实际隐含/维护服务向量归属一次，不设固定寿命。仅在供方未含时另记电力及真实维修材料；保留已发生闲置、启停、失败和清理服务，仅结转未用/未分配service/charge。能力/供方转换未知阻止数值使用，不阻止实物采集。

- 选定流：木粉尘抽集机能力服务
- 流属性/单位：时间 / h
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子为实际已履行service A_asset_i，独立整机实物质量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—废弃钢机器轴承 (`bearing_waste_treatment`)

仅在本实际废弃钢机器轴承出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—废弃钢机器轴承
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_a采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_a`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—废石油润滑油 (`used_oil_treatment`)

仅在本实际废石油润滑油出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—废石油润滑油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_a采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_a`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—废钢木工锯片 (`blade_waste_treatment`)

仅在本实际废钢木工锯片出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—废钢木工锯片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_a采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_a`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—废钢木工钻头 (`drill_bit_waste_treatment`)

仅在本实际废钢木工钻头出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—废钢木工钻头
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_a采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_a`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—废钢木工刨刀 (`planer_knife_waste_treatment`)

仅在本实际废钢木工刨刀出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—废钢木工刨刀
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_a采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_a`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—木工横截锯床—废弃 (`saw_waste_treatment`)

仅在本实际木工横截锯床—废弃出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—废木工横截锯床
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_a采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_a`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—木工刨床—废弃 (`planer_waste_treatment`)

仅在本实际木工刨床—废弃出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—废木工刨床
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_a采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_a`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—木工榫孔钻孔机—废弃 (`drill_waste_treatment`)

仅在本实际木工榫孔钻孔机—废弃出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—废木工榫孔钻孔机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_a采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_a`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—木工砂光机—废弃 (`sander_waste_treatment`)

仅在本实际木工砂光机—废弃出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—废木工砂光机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_a采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_a`
- 来源：`ilcd-attributional-2010`

###### 实际处理服务—木粉尘抽集机—废弃 (`extractor_waste_treatment`)

仅在本实际木粉尘抽集机—废弃出口真实发生的单个处理/供方服务时条件纳入。用实际接收处理湿料kg量测，确认真实接收作业、排放残余、运输及已含边界；供方若用另一广延单位，数值使用前须实采原生单位状态转换。本卡为负荷/服务需求，不是第二实物废腿。混合出口只有一个处理所有者，不另购组分处理；不存在来源池独立出口时无另设服务。真现场处理展开真实材料能水物种交换，不与整份场外供方重复。保留普通失败样品销售及真实处理负荷，不自动信用或T_other转移。真实供方身份路线转换缺失明示，不假0。

- 选定流：处理服务—废木粉尘抽集机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_treatment_a采未除raw。分子为原批次实际service/charge A_s_i一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_treatment_a`
- 来源：`ilcd-attributional-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 外送复用旧钢机器轴承 (`bearing_out`)

本卡为新增、旧件进入或外送复用该次事件中的一个实际钢滚动机器轴承，原生为工厂端生产组合已制造滚珠轴承或滚柱轴承Product族、Mass/kg。限定真实单一轴承几何、钢结构、密封及在装润滑；另供密封/流体各为实际独立原子流，进厂整轴承已含不再采购。声明增旧状态及原剩余负荷向量，不设固定寿命。这不是整机、切削刀片、滑动轴套或Waste。毛分子是完整实际V，轴承留期末仍保完整实入；实际已履行整机服务及拆下Waste轴承各另记一次。

- 选定流：滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 木工横截锯床—对外复用 (`saw_reuse_out`)

本卡为一次木工横截锯床的对外复用实物保管事件。原生为工厂端生产组合的已制造木材加工机床Product族及Mass，本卡限定为这一台功能配置完整机器，不替代为仅金属机床、板材压机、木材输出或设备集合。保留序列、配置、全部整机材料/流体质量、增旧毛入/出及期初期末在装存量。整机入流已含组件不叠加；真实后续维修新增料及水分另记。分子为完整毛V，不是负荷份额；已履行服务和实际隐含负荷使用另算。不设固定寿命、自动替换或每kg床一整机。实际无事件只能凭证据条件缺省。

- 选定流：木料、软木、骨、硬橡胶、硬质塑料或类似硬质材料加工用机械，制造木质或其他木制碎料板或建筑用纤维板的压力机，以及处理木料或软木的机械 `740d919d-5380-4e2e-b5aa-c374314b9743`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 木工刨床—对外复用 (`planer_reuse_out`)

本卡为一次木工刨床的对外复用实物保管事件。原生为工厂端生产组合的已制造木材加工机床Product族及Mass，本卡限定为这一台功能配置完整机器，不替代为仅金属机床、板材压机、木材输出或设备集合。保留序列、配置、全部整机材料/流体质量、增旧毛入/出及期初期末在装存量。整机入流已含组件不叠加；真实后续维修新增料及水分另记。分子为完整毛V，不是负荷份额；已履行服务和实际隐含负荷使用另算。不设固定寿命、自动替换或每kg床一整机。实际无事件只能凭证据条件缺省。

- 选定流：木料、软木、骨、硬橡胶、硬质塑料或类似硬质材料加工用机械，制造木质或其他木制碎料板或建筑用纤维板的压力机，以及处理木料或软木的机械 `740d919d-5380-4e2e-b5aa-c374314b9743`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 木工榫孔钻孔机—对外复用 (`drill_reuse_out`)

本卡为一次木工榫孔钻孔机的对外复用实物保管事件。原生为工厂端生产组合的已制造木材加工机床Product族及Mass，本卡限定为这一台功能配置完整机器，不替代为仅金属机床、板材压机、木材输出或设备集合。保留序列、配置、全部整机材料/流体质量、增旧毛入/出及期初期末在装存量。整机入流已含组件不叠加；真实后续维修新增料及水分另记。分子为完整毛V，不是负荷份额；已履行服务和实际隐含负荷使用另算。不设固定寿命、自动替换或每kg床一整机。实际无事件只能凭证据条件缺省。

- 选定流：木料、软木、骨、硬橡胶、硬质塑料或类似硬质材料加工用机械，制造木质或其他木制碎料板或建筑用纤维板的压力机，以及处理木料或软木的机械 `740d919d-5380-4e2e-b5aa-c374314b9743`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 木工砂光机—对外复用 (`sander_reuse_out`)

本卡为一次木工砂光机的对外复用实物保管事件。原生为工厂端生产组合的已制造木材加工机床Product族及Mass，本卡限定为这一台功能配置完整机器，不替代为仅金属机床、板材压机、木材输出或设备集合。保留序列、配置、全部整机材料/流体质量、增旧毛入/出及期初期末在装存量。整机入流已含组件不叠加；真实后续维修新增料及水分另记。分子为完整毛V，不是负荷份额；已履行服务和实际隐含负荷使用另算。不设固定寿命、自动替换或每kg床一整机。实际无事件只能凭证据条件缺省。

- 选定流：木料、软木、骨、硬橡胶、硬质塑料或类似硬质材料加工用机械，制造木质或其他木制碎料板或建筑用纤维板的压力机，以及处理木料或软木的机械 `740d919d-5380-4e2e-b5aa-c374314b9743`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 木粉尘抽集机—对外复用 (`extractor_reuse_out`)

本卡为一次木粉尘抽集机的对外复用实物保管事件。实际废弃整机或粉尘抽集机保持自身具体流，不因机器分类而豁免Product/Waste/类型冲突。保留序列、配置、全部整机材料/流体质量、增旧毛入/出及期初期末在装存量。整机入流已含组件不叠加；真实后续维修新增料及水分另记。分子为完整毛V，不是负荷份额；已履行服务和实际隐含负荷使用另算。不设固定寿命、自动替换或每kg床一整机。实际无事件只能凭证据条件缺省。

- 选定流：旧木粉尘抽集机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

##### 废物流

###### 废弃钢机器轴承 (`bearing_waste`)

本卡为实际单一废弃钢机器轴承，保留整件/整份制剂、增旧拆下状态、在装流体及完整湿态库存。无实际相容性证据不推定固定等级、热值、磨耗率、寿命或海上/废油再生路线。本实物分子是完整毛量V，服务/隐含负荷由实际资产账另归属一次。进厂整机已含零件/流体不另购，本卡仅记真实追加供给。新增维修料留期末仍同时保留实入流及完整期末质量，仅对另一入/出项去重。保留失败作业、真实污染物/水相及接收处理。实际未列增旧刀具或维修材料须逐原子补卡。

- 选定流：废弃钢机器轴承
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 废石油润滑油 (`used_oil`)

本卡为产生点实际废石油润滑油Waste流，原生Mass/kg、处理路线未指定。原生定义亦含合成废润滑油，本卡限定实际整份石油制剂及实测污染和水，不套50/25/15成分、海上渔船来源、再生Product或预定回收燃烧处置。记完整排出质量及全部在装剩余流体库存，水污染独立量测，不与另整份废水重叠。不另购组分或自动废物信用，实际处理供方负荷由独立处理服务卡归属一次。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 废钢木工锯片 (`blade_waste`)

本卡为实际单一废钢木工锯片，保留整件/整份制剂、增旧拆下状态、在装流体及完整湿态库存。无实际相容性证据不推定固定等级、热值、磨耗率、寿命或海上/废油再生路线。本实物分子是完整毛量V，服务/隐含负荷由实际资产账另归属一次。进厂整机已含零件/流体不另购，本卡仅记真实追加供给。新增维修料留期末仍同时保留实入流及完整期末质量，仅对另一入/出项去重。保留失败作业、真实污染物/水相及接收处理。实际未列增旧刀具或维修材料须逐原子补卡。

- 选定流：废钢木工锯片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 废钢木工钻头 (`drill_bit_waste`)

本卡为实际单一废钢木工钻头，保留整件/整份制剂、增旧拆下状态、在装流体及完整湿态库存。无实际相容性证据不推定固定等级、热值、磨耗率、寿命或海上/废油再生路线。本实物分子是完整毛量V，服务/隐含负荷由实际资产账另归属一次。进厂整机已含零件/流体不另购，本卡仅记真实追加供给。新增维修料留期末仍同时保留实入流及完整期末质量，仅对另一入/出项去重。保留失败作业、真实污染物/水相及接收处理。实际未列增旧刀具或维修材料须逐原子补卡。

- 选定流：废钢木工钻头
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 废钢木工刨刀 (`planer_knife_waste`)

本卡为实际单一废钢木工刨刀，保留整件/整份制剂、增旧拆下状态、在装流体及完整湿态库存。无实际相容性证据不推定固定等级、热值、磨耗率、寿命或海上/废油再生路线。本实物分子是完整毛量V，服务/隐含负荷由实际资产账另归属一次。进厂整机已含零件/流体不另购，本卡仅记真实追加供给。新增维修料留期末仍同时保留实入流及完整期末质量，仅对另一入/出项去重。保留失败作业、真实污染物/水相及接收处理。实际未列增旧刀具或维修材料须逐原子补卡。

- 选定流：废钢木工刨刀
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 木工横截锯床—废弃 (`saw_waste`)

本卡为一次木工横截锯床的废弃实物保管事件。实际废弃整机或粉尘抽集机保持自身具体流，不因机器分类而豁免Product/Waste/类型冲突。保留序列、配置、全部整机材料/流体质量、增旧毛入/出及期初期末在装存量。整机入流已含组件不叠加；真实后续维修新增料及水分另记。分子为完整毛V，不是负荷份额；已履行服务和实际隐含负荷使用另算。不设固定寿命、自动替换或每kg床一整机。实际无事件只能凭证据条件缺省。

- 选定流：废木工横截锯床
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 木工刨床—废弃 (`planer_waste`)

本卡为一次木工刨床的废弃实物保管事件。实际废弃整机或粉尘抽集机保持自身具体流，不因机器分类而豁免Product/Waste/类型冲突。保留序列、配置、全部整机材料/流体质量、增旧毛入/出及期初期末在装存量。整机入流已含组件不叠加；真实后续维修新增料及水分另记。分子为完整毛V，不是负荷份额；已履行服务和实际隐含负荷使用另算。不设固定寿命、自动替换或每kg床一整机。实际无事件只能凭证据条件缺省。

- 选定流：废木工刨床
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 木工榫孔钻孔机—废弃 (`drill_waste`)

本卡为一次木工榫孔钻孔机的废弃实物保管事件。实际废弃整机或粉尘抽集机保持自身具体流，不因机器分类而豁免Product/Waste/类型冲突。保留序列、配置、全部整机材料/流体质量、增旧毛入/出及期初期末在装存量。整机入流已含组件不叠加；真实后续维修新增料及水分另记。分子为完整毛V，不是负荷份额；已履行服务和实际隐含负荷使用另算。不设固定寿命、自动替换或每kg床一整机。实际无事件只能凭证据条件缺省。

- 选定流：废木工榫孔钻孔机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 木工砂光机—废弃 (`sander_waste`)

本卡为一次木工砂光机的废弃实物保管事件。实际废弃整机或粉尘抽集机保持自身具体流，不因机器分类而豁免Product/Waste/类型冲突。保留序列、配置、全部整机材料/流体质量、增旧毛入/出及期初期末在装存量。整机入流已含组件不叠加；真实后续维修新增料及水分另记。分子为完整毛V，不是负荷份额；已履行服务和实际隐含负荷使用另算。不设固定寿命、自动替换或每kg床一整机。实际无事件只能凭证据条件缺省。

- 选定流：废木工砂光机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

###### 木粉尘抽集机—废弃 (`extractor_waste`)

本卡为一次木粉尘抽集机的废弃实物保管事件。实际废弃整机或粉尘抽集机保持自身具体流，不因机器分类而豁免Product/Waste/类型冲突。保留序列、配置、全部整机材料/流体质量、增旧毛入/出及期初期末在装存量。整机入流已含组件不叠加；真实后续维修新增料及水分另记。分子为完整毛V，不是负荷份额；已履行服务和实际隐含负荷使用另算。不设固定寿命、自动替换或每kg床一整机。实际无事件只能凭证据条件缺省。

- 选定流：废木粉尘抽集机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一已算x_i；按cp_assets采未除raw。分子仅为完整实际毛V_i，不用制造/服务向量或库存修正份额。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`glb-component-machining`; `ilcd-attributional-2010`

##### 基本流

## 7. 分配与共产品处理

工业制造来源不证明LCA分配。下列只适用于已声明归因多功能过程情境，实物毛交换独立于分配保持完整。

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| a_framework | 归因多功能性 | 本层级只用于已声明归因研究且正当以分配解决的多功能性。先专属作业和流直接归属，再实际或虚拟细分分离所需功能及互斥其他功能。说明未拆剩余的可行性及偏差。不自由选物理/经济分配或后果替代。 | `ilcd-attributional-2010` |
| a_causality | 每个剩余负荷交换 | 每个剩余交换分别找与实际功能的决定性物理因果：按实际需要用切削工作任务、真实部件含量、限定载荷/体积及时长、真实储存空间时间或量测共用服务。不同交换可有不同驱动。须证明它决定数量；方便的质量/产量或经济比例不是因果。驱动只作用负荷向量，不缩毛V。 | `ilcd-attributional-2010` |
| a_residual | 真实未解决剩余多功能过程负荷 | 仅前述步骤仍有真实剩余时，才用同一共同过程门、真实状态共功能的同期实际市值。去除下游涂饰、包装、储存、运输差异归至同门；负值、零值、未交易及未决不确定性如实记录，不编价格或固定比例。本过程分配不同于多功能产品服务等价。 | `ilcd-attributional-2010` |
| a_waste | 普通生产废物退回及处理 | 销售边角料、残余、失败套件、样品或包装，不自动形成共产品、扣除制造/搬运/处理负荷、避免产品信用或T_other转移。保留真实毛流及已发生负荷。真实其他功能/批次有正当分配/移交才接收一次向量，记录接收/处理边界及不确定性。退回/重验不新购整床或新造产量。 | `ilcd-attributional-2010` |

## 8. 前景数据采集、计算与质量规则

采集每raw单元均未归一化。保留原单位状态、精确实物事件、维度、批次及继承向量。下链转换归属一次再给一个x_i，协议聚合与卡使用不再除。真实未决身份供方量包括服务能力转换阻止依赖数值复用，不编工厂量测。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | finished_bed_kit | 量测及放行台账 | 批次; 配置; 图纸版本; 完整BOM; 每个实物部件; 净套件kg; 木含水率; 校准; 试验方法结果; 验收; 处置; 唯一放行时间; 原Q_H | 以校准秤称同配置完整未组装套件，合计全部实际部件及随附功能制品，排除运输包装。木含水独立取样。完整组件/五金/说明检查、真实配合/抽样装配及规格试验关联唯一首次放行。只采原始净质量及放行标志，Q合计一次，不在此除交换量。 | kg; item; 实际试验单位 | 每配置及首次放行 | 完整批次含零放行 | 制造门及全部已首次放行库存 | 每参考流 | 原记录; 校准仪器; 真材料规格; 完整批次库存事件桥; 不确定度; 真供方许可测试处置 |
| cp_material | manufacture | pine_stock; wood_screw; bed_bolt; barrel_nut; instruction_leaflet; pvac_glue; abrasive_paper | 收发及库存记录 | row_id; 批号; 供方; 整份湿质量; 树种; 等级; 处理; 原单位; 接收; 发料; 期初原料/WIP; 期末原料/WIP; 每交换继承向量; 所有者; 实际永久接合及胶规格; 整份制剂assay子账; 损失; 库存修正状态 | 称整份实际收发与完整湿态原料/WIP库存，核来源路线和唯一所有者。整份制剂/制品一次，组分及载水互斥分账。实际现场接合胶与另加水仅在真实使用时各列采购输入。保留是否已作库存修正。只采未除raw，单位转换和归属在后，不在此除Q。 | kg; 原广延单位 | 每批发料及期初期末 | 完整时段及库存历史 | 实际收料加工装配及库存 | 每参考流 | 原记录; 校准仪器; 真材料规格; 完整批次库存事件桥; 不确定度; 真供方许可测试处置 |
| cp_energy_m | manufacture | electricity_m | 仪表及任务记录 | row_id; 表计; 起终读数; 原单位; 累计或速率; 真实间隔; 电压; 电网地域; 供方; 电路; 作业; 闲置; 失败; 启停; 清理; 批次; H; 分配驱动 | 累计kWh与真实速率时间记录分开，不把累计量再积分。原能量在分配前转换一次，电路与实际制造/服务任务互斥归属。匹配电压/电网/场址/时段/供方。全部零产出、失败、闲置、清理保留，采集不除。 已选原生交流电限定CN中国、小于1kV、用户侧电网平均消费组合；仅真实匹配该地域/电压/供给边界可用。其他实际供电须另核身份，不由英国制造例证推定中国电力适用。 | kWh; MJ; 实际速率单位 | 每间隔及事件 | 整批次及观测H | 实际仪表电路及服务门 | 每参考流 | 原记录; 校准仪器; 真材料规格; 完整批次库存事件桥; 不确定度; 真供方许可测试处置 |
| cp_energy_h | gate_service | electricity_h | 仪表及任务记录 | row_id; 表计; 起终读数; 原单位; 累计或速率; 真实间隔; 电压; 电网地域; 供方; 电路; 作业; 闲置; 失败; 启停; 清理; 批次; H; 分配驱动 | 累计kWh与真实速率时间记录分开，不把累计量再积分。原能量在分配前转换一次，电路与实际制造/服务任务互斥归属。匹配电压/电网/场址/时段/供方。全部零产出、失败、闲置、清理保留，采集不除。 已选原生交流电限定CN中国、小于1kV、用户侧电网平均消费组合；仅真实匹配该地域/电压/供给边界可用。其他实际供电须另核身份，不由英国制造例证推定中国电力适用。 | kWh; MJ; 实际速率单位 | 每间隔及事件 | 整批次及观测H | 实际仪表电路及服务门 | 每参考流 | 原记录; 校准仪器; 真材料规格; 完整批次库存事件桥; 不确定度; 真供方许可测试处置 |
| cp_transport | manufacture | inbound_freight | 运单记录 | 实际公路段; 全湿载荷kg; 距离; 车辆; 质量或体积限制; 返程; 供方; 已含范围; 原单位; 批次 | 量实际完整货载含包装，保留实际路线/返程/供方。正当分配前算真实质量距离，货载毛量完整。t*km转kg*km一次，不设车辆/距离/载率默认。供方已含货运一个所有者，采集未除。 | kg; km; t*km; kg*km | 每实际运输段 | 完整供货时段 | 供方到实际收料门 | 每参考流 | 原记录; 校准仪器; 真材料规格; 完整批次库存事件桥; 不确定度; 真供方许可测试处置 |
| cp_water_m | manufacture | tap_water_m; cleaning_wastewater_m; humidity_m_in; water_vapour_m | 独立含水水量及状态量测 | row_id; 相态; 实际媒体; 质量; 体积或真实速率; 温度; 压力; 湿度; 本物质密度; 期初期末完整湿库存; 独立烘干样; 电测校准; 自由/吸附/载/结构/反应水; 真实F_in/F_out; 重叠身份; 批次; H; F_in; F_out; proved_same_side_OTHER_duplicate_X; paired_event_id; actual_originating_process_id; actual_row_id; real_direction; physical_gate; original_cohort_Q_or_Q_H; observed_H_not_divisor | 普通制造储运及真实清理维修中，每实际水相、吸湿解吸及整出口独立称/计。含水率用代表样立即湿称及有效恒重烘干，或树种温度校准电测，保留挥发抽提物、梯度和仪器限制。不用残差拟合两个未知。真实水入流即使留期末仍保留，只从另一流项除重。仅raw；气体积转换须实际H2O状态/密度，不套液态水密度。 真实增减记F；X仅扣同侧其他真实流已证重复，不扣库存或对侧量。 | kg; m3须独立状态/密度; 实际速率单位 | 每事件及代表间隔 | 全部库存生产及实际H | 制造FG服务及合并门 | 每参考流 | 原记录; 校准仪器; 真材料规格; 完整批次库存事件桥; 不确定度; 真供方许可测试处置 |
| cp_water_h | gate_service | tap_water_h; cleaning_wastewater_h; humidity_h_in; water_vapour_h | 独立含水水量及状态量测 | row_id; 相态; 实际媒体; 质量; 体积或真实速率; 温度; 压力; 湿度; 本物质密度; 期初期末完整湿库存; 独立烘干样; 电测校准; 自由/吸附/载/结构/反应水; 真实F_in/F_out; 重叠身份; 批次; H; F_in; F_out; proved_same_side_OTHER_duplicate_X; paired_event_id; actual_originating_process_id; actual_row_id; real_direction; physical_gate; original_cohort_Q_or_Q_H; observed_H_not_divisor | 普通制造储运及真实清理维修中，每实际水相、吸湿解吸及整出口独立称/计。含水率用代表样立即湿称及有效恒重烘干，或树种温度校准电测，保留挥发抽提物、梯度和仪器限制。不用残差拟合两个未知。真实水入流即使留期末仍保留，只从另一流项除重。仅raw；气体积转换须实际H2O状态/密度，不套液态水密度。 真实增减记F；X仅扣同侧其他真实流已证重复，不扣库存或对侧量。 | kg; m3须独立状态/密度; 实际速率单位 | 每事件及代表间隔 | 全部库存生产及实际H | 制造FG服务及合并门 | 每参考流 | 原记录; 校准仪器; 真材料规格; 完整批次库存事件桥; 不确定度; 真供方许可测试处置 |
| cp_air_m | manufacture | n2_m_in; n2_m_out; o2_m_in; o2_m_out; ar_m_in; ar_m_out; ambient_co2_m_in; ambient_co2_m_out; pine_dust_air | 物种及气流量测 | row_id; 实际物种; 分子CAS; 相态; 媒体; 入出口; 实际组分; 累计体积; 真实速率; 时间; 温度; 压力; 湿度; 粒径切分; 收集/逸散; 碳来源; 批次 | 独立状态/组分证据量完整实际毛物种及逸散颗粒，仅真速率积分，累计体积用一次。不设空气组成默认，不由总指标推分子，不叠整空气与分物种或嵌套粒径。真实另供气有自身Product及互斥组分桥。raw未除。 区分本地自由大气Resource与已在木材、整份制剂、设备或采购气体Product内的气水。内含组分随唯一上游所有者及非加和子账，不再作免费Resource摄入。真实另购压缩空气/气体Product须独立原子卡、状态/压力/原生属性接口及唯一供方；内部空气移交抵消而真实压缩/通风电耗释放保留。分子毛转移与真实环境净变化分开。 | kg; 实际体积状态; 实际速率单位 | 每量测作业或环境间隔 | 所有模式及观测H | 真实摄入排出媒体 | 每参考流 | 原记录; 校准仪器; 真材料规格; 完整批次库存事件桥; 不确定度; 真供方许可测试处置 |
| cp_air_h | gate_service | n2_h_in; n2_h_out; o2_h_in; o2_h_out; ar_h_in; ar_h_out; ambient_co2_h_in; ambient_co2_h_out | 物种及气流量测 | row_id; 实际物种; 分子CAS; 相态; 媒体; 入出口; 实际组分; 累计体积; 真实速率; 时间; 温度; 压力; 湿度; 粒径切分; 收集/逸散; 碳来源; 批次 | 独立状态/组分证据量完整实际毛物种及逸散颗粒，仅真速率积分，累计体积用一次。不设空气组成默认，不由总指标推分子，不叠整空气与分物种或嵌套粒径。真实另供气有自身Product及互斥组分桥。raw未除。 区分本地自由大气Resource与已在木材、整份制剂、设备或采购气体Product内的气水。内含组分随唯一上游所有者及非加和子账，不再作免费Resource摄入。真实另购压缩空气/气体Product须独立原子卡、状态/压力/原生属性接口及唯一供方；内部空气移交抵消而真实压缩/通风电耗释放保留。分子毛转移与真实环境净变化分开。 | kg; 实际体积状态; 实际速率单位 | 每量测作业或环境间隔 | 所有模式及观测H | 真实摄入排出媒体 | 每参考流 | 原记录; 校准仪器; 真材料规格; 完整批次库存事件桥; 不确定度; 真供方许可测试处置 |
| cp_waste | manufacture | pine_offcut; pine_residue; spent_abrasive; mixed_machining_waste; glue_residue | 出口及处理记录 | row_id; 出口; 来源池; 整湿质量; 含水; 污染; 独立或混合; 接收; 处理; 销售; 样品/失败; 继承向量; 负荷所有者 | 称每真出口及全部留存残余，实际处理一次。真实混合出口只有一整Waste及独立互斥来源池，不把总分作外部输出叠加。普通失败/样品/销售保留制造及处理负荷，除非真实其他功能/批次有正当一次向量。完整raw V与分配负荷分开，不除。 | kg; 接收实际单位 | 每箱发运及库存期末 | 完整生产时段 | 实际出口及接收门 | 每参考流 | 原记录; 校准仪器; 真材料规格; 完整批次库存事件桥; 不确定度; 真供方许可测试处置 |
| cp_fg | gate_service | bed_dispatch; bed_return; bed_discard | 原批次放行交付历史 | 原放行id; 原Q_H; H; 期初期末FG; 每继承向量; 毛G; 实际R; 原发运; 退回状态质量; 新零件; 水; 损失; 许可; 真实作业; 后测; 验收; hold/废物; F_in; F_out; proved_same_side_OTHER_duplicate_X; paired_event_id; actual_originating_process_id; actual_row_id; real_direction; physical_gate; original_cohort_Q_or_Q_H; observed_H_not_divisor | 分别追踪称原批次完整套件和真实破损/部分状态。期初期末湿FG及原制造向量独立于当期服务增量。重工/规格许可及试验证明验收，未授权/失败已发生作业仍全留物流负荷处置。不新增Q，不由退回质量猜原交付逆转。仅raw G/R，包装另记。 原Q_H固定于唯一首次放行，H只是观测时域，绝非额外除数。完整真实FG保管门闭合O_FG+T_new+R_ext+F_in-X_in=C_FG+G_ext+W_actual+F_out-X_out。T_new是已计Q的配对内部首放行移交，合并抵消。实际R/G保留独立实测当前状态毛质量及原批次；F是真实新增/移除料水，X仅同侧其他流的已证重复。未授权/失败/hold实际工作即使不合格也全部保留。 | kg; 实际试验单位; item | 每事件及期末 | 原历史及实测H | FG到真实外接收方 | 每参考流 | 原记录; 校准仪器; 真材料规格; 完整批次库存事件桥; 不确定度; 真供方许可测试处置 |
| cp_packaging | packaging | carton_p; carton_i; carton_er; carton_s; carton_eo; carton_w; carton_charge; film_p; film_i; film_er; film_s; film_eo; film_w; film_charge; pallet_p; pallet_i; pallet_er; pallet_s; pallet_eo; pallet_w; pallet_charge; pail_p; pail_i; pail_er; pail_s; pail_eo; pail_w; pail_charge; mixed_packaging_waste | 六方向台账及单所有者记录 | 制品; 实际材料; 湿皮重; 整件/组分桥; 期初空附着WIP附着FG复用; P; I; ER; 期末同状态; 毛S; EO; W; 混合出口/来源池; X_in; X_out; charge所有者; 未用charge; 批次; Q_H; H; F_in; F_out; proved_same_side_OTHER_duplicate_X; paired_event_id; actual_originating_process_id; actual_row_id; real_direction; physical_gate; original_cohort_Q_or_Q_H; observed_H_not_divisor ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 每真实制品六实际事件逐一称量，I无另票亦保实物。全湿期初期末与真维修/水入流即使留存仍保，X仅对另一已含入/出项去重。内部复用抵消。单混合出口分池W子账不重复组分外出。整件/皮重/内容及组分互斥。毛V不库存/经济修正，实际service charge另归属一次；采集不除。 每实际整份包装池闭合O+P+I+ER+F_in-X_in=C+S+EO+W+F_out-X_out。O/C为互斥完整湿空包、附着WIP、附着FG及复用库存。F_in/F_out为独立实测真实材料或液态/大气水新增移除，不是拟合残差。X仅扣事件ID配对证明的同侧其他真实流重复项，绝不扣库存、对侧流、卡片存在或真实新保留流入。整供制品及组分非加和；现场另供组件须互斥收货或实测组分至整件桥，配对内部移交合并抵消。自然湿交换无需虚构维修或许可。S随实际毛发运而非Q。一个真实混合出口只用整总量或逐来源独立实测W分区，不叠总分或重复供方；真实分开W出口须独立真实证据。未知/破损Product或Waste状态仍记录并待匹配身份，不强制复用Product。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg; 原计数须独立实测皮重 | 每真实六腿及库存事件 | 完整匹配批次及H | 空WIP FG复用及外返/废物门 | 每参考流 | 原记录; 校准仪器; 真材料规格; 完整批次库存事件桥; 不确定度; 真供方许可测试处置 |
| cp_maintenance | packaging | pallet_repair_plank; pallet_repair_nail; removed_pallet_wood; removed_pallet_nail | 维修库存材料记录 | 零件; 真实增旧; 整质量; 已含桥; 期初期末湿库存; 真流入; 真流出; 水; 重叠id; 原批次; 许可; 真作业; 测试; 处置; 供方; F_in; F_out; proved_same_side_OTHER_duplicate_X; paired_event_id; actual_originating_process_id; actual_row_id; real_direction; physical_gate; original_cohort_Q_or_Q_H; observed_H_not_divisor | 分别称实际维修输入/出口，全湿库存与新增实入同时保留。整接收托盘已含零件不是新增采购。X仅剔相同其他入/出项，不因库存留存消流。未授权/失败作业仍保能、水、件及处置。raw与实际供方负荷归属分开，不在此除。 每实际整份包装池闭合O+P+I+ER+F_in-X_in=C+S+EO+W+F_out-X_out。O/C为互斥完整湿空包、附着WIP、附着FG及复用库存。F_in/F_out为独立实测真实材料或液态/大气水新增移除，不是拟合残差。X仅扣事件ID配对证明的同侧其他真实流重复项，绝不扣库存、对侧流、卡片存在或真实新保留流入。整供制品及组分非加和；现场另供组件须互斥收货或实测组分至整件桥，配对内部移交合并抵消。自然湿交换无需虚构维修或许可。S随实际毛发运而非Q。一个真实混合出口只用整总量或逐来源独立实测W分区，不叠总分或重复供方；真实分开W出口须独立真实证据。未知/破损Product或Waste状态仍记录并待匹配身份，不强制复用Product。 | kg; 实际广延单位 | 每收料维修拆下及库存日 | 实际服务H及库存史 | 真实托盘及零件边界 | 每参考流 | 原记录; 校准仪器; 真材料规格; 完整批次库存事件桥; 不确定度; 真供方许可测试处置 |
| cp_assets | assets | steel_blade; drill_bit; planer_knife; lubricant; bearing_new; bearing_old_in; bearing_out; bearing_waste; used_oil; blade_waste; drill_bit_waste; planer_knife_waste; saw_new; saw_used_in; saw_reuse_out; saw_waste; saw_service; planer_new; planer_used_in; planer_reuse_out; planer_waste; planer_service; drill_new; drill_used_in; drill_reuse_out; drill_waste; drill_service; sander_new; sander_used_in; sander_reuse_out; sander_waste; sander_service; extractor_new; extractor_used_in; extractor_reuse_out; extractor_waste; extractor_service | 实物资产台账及服务记录 | 序列; 配置; 整质量; 在装流体; 期初在装; 新接收; 旧接收; 真维修新增; 拆下磨损料; 复用外出; 废物; 期末湿库存; 已含组件桥; 服务时; 真能力; 利用率; 驱动; 供方向量; 未用未分配服务; 批次; 许可/测试/处置; F_in; F_out; proved_same_side_OTHER_duplicate_X; paired_event_id; actual_originating_process_id; actual_row_id; real_direction; physical_gate; original_cohort_Q_or_Q_H; observed_H_not_divisor | 每真实机/具/料/流体完整存量毛腿与实际已履行服务时和隐含负荷使用分开。增旧维修料及水即使留期末仍为入流，进厂整机已含组件不再采购。凭真使用能力与逐交换因果归属service/供方向量一次，不设固定寿命或每kg整机质量。保留闲置/失败/清理和失败未授权实际维修，仅结转未用未分配service/charge。能力/供方转换未知保持未知，仅采raw。 逐真实机/具/零件/流体池按其协调实物单位闭合O+R_in+F_in-X_in=C+R_out+F_out-X_out。R是真实外部整件收退，含实际Waste退役；F是真实实测组件/水新增移除。X只扣配对证实同侧其他真实流重复，绝不扣库存/对侧腿或真实保留流入。整份与组件供应互斥，或用实测装配桥及内部移交抵消。一个真实混出口总量或独立实测来源分区只关联一供方；不虚构替换、维修、退回或湿交换事件。 | kg; h; 实际原生广延单位 | 每真实资产事件及服务间隔 | 真实期初历史至批次及H | 在装资产材料库存及真实供方 | 每参考流 | 原记录; 校准仪器; 真材料规格; 完整批次库存事件桥; 不确定度; 真供方许可测试处置 |
| cp_treatment_m | manufacture | cleaning_wastewater_m_treatment; pine_offcut_treatment; pine_residue_treatment; spent_abrasive_treatment; mixed_machining_waste_treatment; glue_residue_treatment | 接收处理服务记录 | 废出口id; 实际湿进料kg; 供方原单位; 状态转换; 接收方; 真实处理作业; 已含运输; 排放残余边界; 供方所有者; 真实现场分界; 批次; 已发生负荷; 缺证 | 逐真实出口在分配除法前采一个实际处理供方活动及完整已含边界。混合出口一个供方，来源池不另购处理。现场处理逐采实际材料能水物种，不重复整供方；用kg需求前确认真实原生单位及独立状态转换。销售或外送不删除普通已发生制造处理负荷，零票价不证明零处理。保未除raw和不确定度。 | kg实际湿进料; 原生服务单位 | 每真出口处理事件 | 完整原批次及实际H | 真实出口接收处理门 | 每参考流 | 原记录; 校准仪器; 真材料规格; 完整批次库存事件桥; 不确定度; 真供方许可测试处置 |
| cp_treatment_h | gate_service | cleaning_wastewater_h_treatment; bed_discard_treatment | 接收处理服务记录 | 废出口id; 实际湿进料kg; 供方原单位; 状态转换; 接收方; 真实处理作业; 已含运输; 排放残余边界; 供方所有者; 真实现场分界; 批次; 已发生负荷; 缺证 | 逐真实出口在分配除法前采一个实际处理供方活动及完整已含边界。混合出口一个供方，来源池不另购处理。现场处理逐采实际材料能水物种，不重复整供方；用kg需求前确认真实原生单位及独立状态转换。销售或外送不删除普通已发生制造处理负荷，零票价不证明零处理。保未除raw和不确定度。 | kg实际湿进料; 原生服务单位 | 每真出口处理事件 | 完整原批次及实际H | 真实出口接收处理门 | 每参考流 | 原记录; 校准仪器; 真材料规格; 完整批次库存事件桥; 不确定度; 真供方许可测试处置 |
| cp_treatment_p | packaging | carton_w_treatment; film_w_treatment; pallet_w_treatment; pail_w_treatment; mixed_packaging_waste_treatment; removed_pallet_wood_treatment; removed_pallet_nail_treatment | 接收处理服务记录 | 废出口id; 实际湿进料kg; 供方原单位; 状态转换; 接收方; 真实处理作业; 已含运输; 排放残余边界; 供方所有者; 真实现场分界; 批次; 已发生负荷; 缺证 | 逐真实出口在分配除法前采一个实际处理供方活动及完整已含边界。混合出口一个供方，来源池不另购处理。现场处理逐采实际材料能水物种，不重复整供方；用kg需求前确认真实原生单位及独立状态转换。销售或外送不删除普通已发生制造处理负荷，零票价不证明零处理。保未除raw和不确定度。 | kg实际湿进料; 原生服务单位 | 每真出口处理事件 | 完整原批次及实际H | 真实出口接收处理门 | 每参考流 | 原记录; 校准仪器; 真材料规格; 完整批次库存事件桥; 不确定度; 真供方许可测试处置 |
| cp_treatment_a | assets | bearing_waste_treatment; used_oil_treatment; blade_waste_treatment; drill_bit_waste_treatment; planer_knife_waste_treatment; saw_waste_treatment; planer_waste_treatment; drill_waste_treatment; sander_waste_treatment; extractor_waste_treatment | 接收处理服务记录 | 废出口id; 实际湿进料kg; 供方原单位; 状态转换; 接收方; 真实处理作业; 已含运输; 排放残余边界; 供方所有者; 真实现场分界; 批次; 已发生负荷; 缺证 | 逐真实出口在分配除法前采一个实际处理供方活动及完整已含边界。混合出口一个供方，来源池不另购处理。现场处理逐采实际材料能水物种，不重复整供方；用kg需求前确认真实原生单位及独立状态转换。销售或外送不删除普通已发生制造处理负荷，零票价不证明零处理。保未除raw和不确定度。 | kg实际湿进料; 原生服务单位 | 每真出口处理事件 | 完整原批次及实际H | 真实出口接收处理门 | 每参考流 | 原记录; 校准仪器; 真材料规格; 完整批次库存事件桥; 不确定度; 真供方许可测试处置 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw_units | all inventory rows | 归属前把未除原广延单位转本行原生单位一次：电MJ=3.6×kWh，kg*km=1000×t*km。仅真测率按真实时窗/状态积分，累计体积已积分。密度按真实物质状态独立测，次级属性系数不提供kg/item或密度。 | raw_i; unit_i; measured_state; conversion_evidence | U_i | `ilcd-attributional-2010` |
| calc_manufacturing | all inventory rows | 仅负荷维度A_m_i = B_open_i + U_attributed_i - B_close_i - T_other_i。B为逐交换批次原料/WIP及未用未分配charge继承向量。B_close不含已首次放行FG。普通不合格/废物/样品/销售及处理非T_other；转移须真实其他批次功能及正当一次移交。已修正消耗不二次库存修正，本式绝不作用毛V。 | B_open_i; U_attributed_i; B_close_i; T_other_i; cohort | A_m_i | `ilcd-attributional-2010` |
| calc_service | all inventory rows | A_s_i为H内实际已履行原批次服务及实际用到的前期已归属向量，经正当分配及一个供方所有权。分母保持原Q_H。期末FG不逆转已履行服务，仅结转未用未分配charge/service。历史制造负荷与实物保管毛量另账。已发生未授权/失败作业保留增量与hold/废物结果。 | original_cohort; Q_H; H; actual_service; assigned_prior_vector; unused_charge; allocation_evidence | A_s_i | `ilcd-attributional-2010` |
| calc_asset_service | all inventory rows | 按观测使用能力及逐交换正当归属得实际已履行h及一个隐含维护供方向量。整机零件流体实物存量分开。不设固定寿命、每kg全机采购或猜能力/供方因子；缺转换阻止依赖数值。仅未用未分配服务charge结转。 | fulfilled_h; actual_capacity; provider_vector; cohort; driver | A_asset_i | `ilcd-attributional-2010` |
| calc_gross | all inventory rows | 每毛卡N_i = V_i，为本广延单位实际完整实物腿。V_i绝非B_open+U-B_close、制造/服务分配负荷或经济份额。真实入流即使在全期末存量仍保留，X只剔相同其他入/出项。毛披露不新增采购、供方、处理或信用，真实负荷另归属一次。 | V_i; event_id; actual_state; disjoint_bridge; cohort | N_gross_i | `ilcd-attributional-2010` |
| calc_numerator | all inventory rows | 每账单元选一个适用分子维度：制造A_m_i、原批次服务charge A_s_i、真实资产service A_asset_i、毛披露完整V_i。毛披露不加进负荷总量，V不作负荷分配/库存修正。不同真实批次功能用各自原分母分开，不混质量。 | A_m_i; A_s_i; A_asset_i; V_i; dimension; cohort | N_i | `ilcd-attributional-2010` |
| calc_denominator | all inventory rows | Q为本配置批次唯一首次质量放行整套净kg的校准实测和。制造Q_c为Q；H内实际服务/毛/资产账为原Q_H。期末已首次放行FG在Q内。Q_c=0时保留全真实分子及实物记录，不给单位结果。 H只描述观测范围，不参与归一化除法。 | net_complete_kit_kg; unique_release_id; original_Q_H; H | Q_c | `glb-untreated-london`; `ilcd-attributional-2010` |
| calc_quotient | all inventory rows | x_i = N_i / Q_c。这是首次放行分母唯一一次除法，在原单位转换和一次适用分子归属或完整毛V_i之后。每卡和聚合仅引用本已算x_i，不再除。参考输出正好1千克。Q_c=0无单位x_i，真实负荷保留。 | N_i; Q_c | x_i | `ilcd-attributional-2010` |
| calc_pack_balance | all inventory rows | 每实际整份包装池闭合O+P+I+ER+F_in-X_in=C+S+EO+W+F_out-X_out。O/C为互斥完整湿空包、附着WIP、附着FG及复用库存。F_in/F_out为独立实测真实材料或液态/大气水新增移除，不是拟合残差。X仅扣事件ID配对证明的同侧其他真实流重复项，绝不扣库存、对侧流、卡片存在或真实新保留流入。整供制品及组分非加和；现场另供组件须互斥收货或实测组分至整件桥，配对内部移交合并抵消。自然湿交换无需虚构维修或许可。S随实际毛发运而非Q。一个真实混合出口只用整总量或逐来源独立实测W分区，不叠总分或重复供方；真实分开W出口须独立真实证据。未知/破损Product或Waste状态仍记录并待匹配身份，不强制复用Product。 | O; P; I; ER; C; S; EO; W; F_in; F_out; X_in; X_out; paired_event_ids; disjoint_source_pools | independent_packaging_reconciliation | `ilcd-attributional-2010` |
| calc_physical | all inventory rows | 制造FG服务及合并门：完整期初湿存量加全真外入等于完整期末湿存量加全真外出，仅用独证转化及测量不确定度。首次放行内部交接匹配抵消，外部G/R及完整FG一次。仅木部分u=(wet-dry)/dry，dry=wet/(1+u)，先排除金属胶包装组分再用木式。相关元素、来源特定碳及水相闭合须独立约束，不用一残差拟两未知。 | full_O; gross_in; full_C; gross_out; independent_phases; independent_elements; carbon_origin | independent_physical_reconciliation | `usda-wood-handbook-2021`; `ilcd-attributional-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 整套及全行 | 匹配真实完整制造终端及每原生CAS/材料/形态/路线/等级/地域/媒体/类型/属性。相容宽族由完整卡上下文限定，不单看分类或SKU，不豁免硬冲突。 | 精确原生及链; 真实BOM/供方/规格 |
| dq_primary | 证据综合 | 区分整产品制造商、部件作业、真实供货形态、制剂及归因方法。不暗示共同SKU订单工厂或定量默认。保留相邻涂饰/硬木/可调/储物/床垫替代及适用限制。 | 完整primary原件及上下文; 实际适配 |
| dq_measurement | Q及每raw事件 | 按配置校准整套净质量及独立含水，真实广延单位和分相状态密度，代表取样及不确定度。不编未来厂用量尺寸载荷甲醛阈值收率能耗寿命。 | 原称重仪表; 校准; 取样法; 真试验 |
| dq_completeness | 全时段上游批次 | 含零失败启停闲置清理重工，逐原料/WIP/FG交换继承向量，供方已含包装及单上游所有者。无事件须证据，未知身份供方量不作0。 | 完整库存事件批次账; 供方边界; 明示缺口 |
| dq_gross | 每实物门包装资产 | 完整毛腿独立负荷分配，实存六方向及库存维修水相。新增入流与完整期末同时保，整件分组互斥，每真混合出口一次。 | 独立湿质量元素水及六腿闭合 |
| dq_service | 原批次作业主张 | 保原Q_H/H匹配毛G/R原制造历史与真增量，期末FG不删已服务。许可后测支持验收不删除失败已作。工程检查不审批方法翻译映射发布。 | 放行历史; 真作业试验处置; 审查状态 |

## 9. 校验规则

具体数据使用前执行下列要求。未知仍未知，工程检查核声明关系和源保真，不验证真实工厂量测或科学审批。

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| v_whole | 参考套件及每一交换 | 须有同配置完整套件BOM、说明、许可供货/加工/接合路线、真实试验/首次放行记录及物理相容已制造Product参考。不容CAS、形态、等级、路线、媒体、类型硬冲突或以部件代替、猜原生身份；采用卡保留原生全部限制。普通辅料/供方证据缺失明示，仅阻止依赖数值使用；完整核心身份缺失是真core hold。 | `glb-untreated-london`; `glb-kit-delivery`; `ilcd-attributional-2010` |
| v_measurement | Q原始记录及唯一商 | Q为完整套件唯一首次放行的实测净质量和，有校准、配置、含水并排除包装。各协议仅采未除原始量。先转单位及归属一次，再x_i=N_i/Q_c；毛流卡用完整真实V_i。协议聚合及卡仅引用同一次商，不再除。Q_c=0保留真实分子/物流，不输出单位结果。未来未知量不可宣称已测或通过。 | `usda-wood-handbook-2021`; `ilcd-attributional-2010` |
| v_closure | 制造服务包装及资产 | 独立核制造、FG服务及合并门毛湿质量和相关元素/碳/水，保留完整期初期末及所有真实包装六方向。增修料/水即使留期末仍保入流，X只剔除其他入/出项重复。整件与组分不重叠；单混合出口不与分池叠加。不可一个残差推两个未知。 | `usda-wood-handbook-2021`; `ilcd-attributional-2010` |
| v_history | 负荷批次及实际作业 | 核每交换原料/WIP继承向量、首次放行FG处理、真实原Q_H/H及G/R关联、供方/服务一次归属与无二次库存修正。保留已履行服务和普通失败/废物/处理；T_other须真实其他功能/批次及正当移交。实际作业许可、试验、验收支持合格，已发生未授权/失败作业仍完整记录和hold/废物处置。 | `ilcd-attributional-2010` |
| v_quality | 完成数据集及主张 | 如实声明来源独立性、适用缺口、实际场址/时段/地域/供方匹配、不确定性、无事件证据及未决辅料。工程Schema、指纹和有限关系检查不证明科学审批、翻译reviewed、映射接受、发布或整个CPC叶覆盖。 | `ilcd-attributional-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 为下游LCA供经核实际完整未处理松木套件制造清单；真实原批次门服务分披露 |
| allowed_use | 真实匹配终端材料路线首次放行门且实测配置、完整供方库存不确定性披露 |
| excluded_use | 睡眠服务寿命等价; 床垫或整卧室; 单支撑腿; 成品床重包; 不同主要路线; 自动碳回收信用; 无复核历史桥净交付 |
| required_metadata | 整套配置及图纸版本; 全床头床尾侧梁支承条中支撑BOM; 全真实随附五金工具; 印刷或电子装配说明版本; 未处理未组装终端; Pinus树种合法产地; 实际锯刨供货门含水; 每材料供方供态; 真接合及条件永久子组件胶许可; 整制剂及另加水; 实际作业测试; 整套实测净质量校准; 唯一首次放行批次Q; 原料/WIP/FG历史逐交换继承向量; 实际场址时段; 原生等级路线形态地域媒体类型属性; 能水空气状态; 每包P/I/ER/S/EO/W及上游所有者; 资产全实物存量及已履行服务; 真废物出口处理; 原Q_H观测H; 真作业许可后测; 验收或hold/废物处置; 分配驱动及未决数值范围 |
| required_quality_disclosure | 真实来源场址时段供方代表性; 未决身份数量; 科学翻译状态; 测量不确定度; 全适用缺省作业; 不推认证 |
| update_trigger | 套件BOM终端树种供给接合涂饰变化; 原生限制供方场址时段变; 新真排放废物服务; 证据量测不确定度修订 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `glb-untreated-london` | handbook | Get Laid Beds — London Bed untreated pine configuration; https://www.getlaidbeds.co.uk/wooden-beds/standard-height-beds/london-wooden-bed-frame/untreated/small-single | 完整床配置；未涂饰松木与涂饰/硬木/可调/床垫替代；榫卯及完整套件门 |
| `glb-component-machining` | handbook | Get Laid Beds — Meet the Makers: General Operative Chris; 19 November 2024; https://www.getlaidbeds.co.uk/blog/meet-the-makers-spotlight-on-general-operative-chris | 实际实木下料、钻孔、砂光及部件检查；染色路线是相邻替代，不套用未涂饰套件 |
| `glb-hardware-kit` | handbook | Get Laid Beds — Screw-room Steve; 18 September 2024; https://www.getlaidbeds.co.uk/blog/meet-the-makers-spotlight-on-steve-andrews-aka-screw-room-steve | 按床号配置准备螺钉及完整装配供给；排除翻盖机构替代 |
| `glb-kit-delivery` | handbook | Get Laid Beds — Delivery information; https://www.getlaidbeds.co.uk/delivery ; manufacturer whole flat-pack statement at https://www.getlaidbeds.co.uk/ | 完整平包供给及单独客户装配/配送选项；套件制造不含客户装配或床垫采购 |
| `glb-solid-slats` | handbook | Get Laid Beds — Slat information; https://www.getlaidbeds.co.uk/slats-information | 完整实木支承条系统及螺钉托条连接；中支撑按实际配置，不设载荷/寿命/数量默认 |
| `cashmores-kd-pine` | handbook | Cashmores — Scandinavian redwood PSE product information; https://www.cashmores-timber.co.uk/webshop/planed-timber/45mm-thick-pse/145-x-45mm-6x2-scandinavian-redwood-pse/ | 独立真实窑干未处理刨光松木供货形态示例；不证明共同订单，不设尺寸/树种/用量默认 |
| `kleiberit-pvac-303` | handbook | KLEIBERIT 303.0 TDS; version 08:05:2026; https://www.kleiberit.com/fileadmin/Content_new/Produktinformationen/303.0/dbe3030_KSE.pdf | 条件整份即用单组分PVAc接合胶、实际适配及清洗；排除相邻双组分/热压替代，无数值配方 |
| `usda-wood-handbook-2021` | official_guidance | USDA Forest Products Laboratory; Wood handbook—wood as an engineering material; FPL-GTR-282 (2021); chapters 4, 8, 10, 13; https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | 木材干基含水率及独立取样校准；自由/吸附水、紧固及胶接条件；不设通用密度或性能默认 |
| `ilcd-attributional-2010` | official_guidance | JRC ILCD Handbook General guide for LCA—Detailed guidance (March 2010), attributional §§7.9.2–7.9.3, printed pp255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因细分/虚拟细分、逐交换决定性物理因果及真实状态共同过程门的剩余市值；负荷/实物/库存/服务核算设计 |
| `un-cpc-bedroom-2025` | official_guidance | UNSD CPC 3.0 structure (30 June 2025) and code38170; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/38170 | 仅分类上下文；不证明方法、UUID适配或已接受映射 |
| `glb-contract-brochure-2025` | handbook | Get Laid Beds Contract Furniture 2025; complete 35-page PDF; https://www.getlaidbeds.co.uk/upload/glb_commercial_brochure.pdf | 整家具及相邻床垫/储物/户外替代；实际未涂饰松木选项和腿型；照片不证明工厂配方 |
