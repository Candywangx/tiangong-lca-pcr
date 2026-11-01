---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.seats-primarily-with-wooden-frames
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 未软包山毛榉框架整椅制造

## 1. 范围与适用性

本归因法覆盖新制未软包室内四脚椅完整制造：窑干实木山毛榉框架机加工、外购成型山毛榉多层板座面及靠背、真实木榫/胶/螺钉连接、经适用性确认的单组分水性PVAc胶和水性透明家具漆，至唯一完整成品椅首次质量放行。接收真实锯材及供货部件，切割并加工接头、试装、胶合/压紧、砂光、按批准工艺涂装及层间砂光/干燥、装五金/脚垫并检验。实际顺序遵循批准图纸和供方说明，采购成椅重包装或裸框架放行不能代替本门。来源：`a2s-chair-catalogue`; `cegim-beech-production`; `konar-chair-joinery`; `kleiberit-pvac-303`; `adler-unistar-2965`。

证据为透明的技术综合。A2S证明真实未软包山毛榉框架/多层板座背整椅，不证明未公开的工厂配方；CEGIM证明工业山毛榉加工、砂光、压合装配和水性涂装；KONAR区分裸框架、完整木椅和胶接榫卯。胶/漆厂提供技术例证，不代表同一个当代订单、同款椅SKU或默认配方。漆资料区分正常应力单组分与高应力双组分用途；实际椅的适用性和验收必须另行建立，不能由“家具”标签推定。A2S特定尺寸目录质量、来源涂布量/温度/时间和手册密度均非PCR默认值。

排除软包座椅、未经部件边界复核的全实木座背路线、金属框架椅、弯木/汽蒸弯曲框架制造、滚塑/塑料/藤椅、轮椅、旋转/躺卧机构、裸框架、单座板、厂内单板/胶合板制造、厂内锯木/窑干/原木加工、双组分/反应型胶或涂料、着色系统及现场燃烧或外购汽/热。采用这些路线前须补齐真实转换和原子交换。供方林业、锯材、干燥及成型板胶合负荷仍在上游，不从产品系统删除。包装、仓储、搬运、发运、退回为有独立观察期的真实原批次服务账，不声称座椅使用寿命或服务等效。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.seats-primarily-with-wooden-frames |
| classification_refs | CPC 3.0 38112；narrower；当前接受关系以`classifications/mappings/cpc-3.0-to-pcr.yaml`及`docs/adr/cpc3-additional34-20261029-38112.md`为准；须满足完整方法范围与排除项，不表示整类覆盖或科学/翻译批准 |
| covered_products | 新制未软包四脚机加工山毛榉框架整椅；成型山毛榉多层板座背；真实获准单组分胶/透明漆 |
| excluded_products | 软包/弯木/金属/塑料椅；单独框架/部件；厂内原木/窑干/胶合板；双组分/反应型/着色涂装和燃烧路线 |
| representative_product | 完整室内山毛榉框架椅，配成型多层板座背；声明实际图纸及正常应力漆适用性 |
| production_route | 干锯材及供货成型座背 → 锯切/CNC/接头加工 → 胶合/压紧/砂光 → 已确认透明涂装/干燥/层间砂光 → 终装/检验 → 首次放行 |
| market_state | 制造门首次质量放行完整椅；另列实际原批次工厂门服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造一种已声明配置的完整室内座椅 |
| How much | 1 kg 参考流 |
| How well | 真实批准图纸、完整BOM、接头/漆适用性、尺寸/稳定/强度及表面验收；无通用载荷阈值或认证 |
| How long or cycle | 一次制造及唯一首次放行周期，不规定座椅寿命 |
| reference_flow_link | `finished_chair` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 带木制框架的座椅 `5ac0b7a3-ea7c-42cb-b70c-32608f90e4e2` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 整椅配置/图纸; 水青冈属树种和合法已声明来源; 未处理干锯材门; 木材含水及干湿基; 成型座背层构/胶/几何/供方; 接头/木榫/螺钉BOM; 整胶配方和供方适用确认; 整份透明漆配方和单组分使用许可; 真实层次/无气喷涂/干燥顺序; 真实脚垫; 完整椅净质量和校准; 唯一首次放行批次和门; 实际性能试验及处置; 上游林业/锯木/窑干/板材/运输所有权; 每种包材六腿; 资产/水/空气/碳状态; 场址/时间/供方; 服务观察期及原始Q_H |

前景包必须声明全部限定。宽泛的已制造木座椅UUID由finished_chair完整说明限定，不仅依赖分类。原生质量/千克为参考。若采集按椅计数，须用经校准秤逐项称量同配置完整椅净质量并排除包装、汇总实测质量；不得套目录千克/件、次级属性、外接面积或密度。其他交换若原生确为Number of items和Item(s)/item，则仅为因子1的同类计数单位，绝非千克换算。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q为该配置/批次唯一首次质量放行完整椅实测净千克之和，使用cp_release。期末首次放行FG已属Q，不能作为制造B_close扣除或计第二次产品。 |
| wood_water | beech_stock; seat_panel; back_panel; waste wood | Mass | kg | 实测湿质量及独立干基含水u=(湿-干)/干；仅排除胶/漆/五金后可用干木=湿量/(1+u)。载水、细胞壁吸附/游离水、化学结构水和反应水各有独立证据，不得以一个残差拟合两个未知。 |
| extensive_units | all inventory rows | Native extensive property for each exchange | kg / MJ / t*km | 质量仅用于质量交换。电能为电MJ，货运为实际吨千米，保留原电表单位；分配前按3.6 MJ/kWh转换累计电量。仅真实速率对时间积分，累计体积不再次乘时间；密度须为该物质指定状态的独立实测。 |
| gross_event_units | each packaging/asset/air gross card | Mass | kg | 每个毛事件分子均为实际完整外部毛腿V，不是B_open+U-B_close或负荷份额。完整湿存量与真实新增流入同时保留，留存不消除入流实物；负荷所有权为独立维度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收门未处理窑干山毛榉锯材、供货成型山毛榉多层板座背、完整供胶/透明漆及实际螺钉/木榫/脚垫 |
| starting_condition_role | secondary_manufacturing |
| product_classification_scope | CPC 3.0 38112的窄物理子集，不推定接受映射 |
| recursive_input_rule | 外购整椅为单独识别的带负荷输入，不能代替制造或产生新增首次放行；同椅内部交接合并时抵消 |
| upstream_dataset_requirement | 保留真实林业/锯木/干燥及成型板单板/胶/成型负荷；匹配树种/来源/含水/路线/门/供方及一次运输，包含供方已含包装流入 |
| disclosure | 真实供货与厂内分界、全部原料/WIP存量、首次放行FG、失败/零产出、上游所有权、真实服务H及各未决交换/供方 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | complete product system | 包含顺序制造工序、真实内部运输、放行前不合格/试验/重工、启停/空转/清洗、实际控制及服务增量。供方制造锯材/部件不是零林业/干燥/胶负荷；整份供货制剂不得重复采购其组分。 | `a2s-chair-catalogue`; `cegim-beech-production`; `kleiberit-pvac-303`; `adler-unistar-2965` |
| boundary_q | manufacturing and FG service | 采用首次质量放行Q；期末已放行FG保留在Q中，不进制造B_close。制造存量仅含原料/WIP/未用未分配负荷。保留H期内已执行原批次服务及原始Q_H，包含留库FG/退货。发运、重检、后处理不产生新产量；放行后作业须有制造商/规格许可、作业后试验、验收及真实处置，不假定破椅可恢复。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。 | `jrc-ilcd-attributional-2010` |
| boundary_physical | all physical gates | 独立于负荷分配核对完整制造、FG服务和合并毛实物门。保留期初期末原料/WIP/FG、每种湿存量及真实外部腿，含维修水/零件；仅从另一流入/流出项中去除重复。新增料/水若留存期末仍同时保留入流及完整期末质量。内部交接抵消一次。真实未列原子流须新增，不能以other/零值或选择器标签隐藏。 每个原料/在制品/非在制品或未用材料存量均独立保留完整实物数量及每项继承交换向量，标记是否已净耗用；两个维度均不二次扣存。 | `jrc-ilcd-attributional-2010`; `usda-wood-handbook-2021` |
| boundary_carbon_water | wood/coating/air/water | 干木、胶漆固体、木生物源碳、配方化石碳及环境碳分别独立实测/取证。林业碳吸收归上游一次所有权，不能再给前景CO2信用。区分游离/吸附水、载水、化学结构水及独立证实反应水。总VOC/COD/TOC/粉尘和碳平衡不能编分子物种或化学计量反应。水及相关元素平衡须独立约束，不设默认氧化或反应水。 | `usda-wood-handbook-2021` |
| packaging_receipt_basis | packaging | 逐实际完整包装制品，P记录有偿采购（单独或随货付费，有无单独发票均可）。I记录首次非采购外部入流，含单独赠与、借用、租赁/周转池领入和未付费供方随附包装；供方随附仅为I的一个子集。ER必须以同一制品或可审计匹配批次关联本场所先前外发记录；仅有他方使用史不属于退回。P/I/ER互斥。已有匹配物理制品卡及原始分账覆盖这些来源，但仍须满足全部原生材料/形态/状态限制；不相容真实制品须另列原子行，不得替用UUID。X_in/X_out仍为独立实测水料变化，不能替代整制品接收。保留完整湿毛量、所有者/保管者、付费/非采购依据、来源、原外发关联、实际状态单位和继承制造/服务向量。无偿接收既非新制造，也不自动零负荷；真实服务及新增运输搬运按正确原批群和分母归属一次，真实未用服务另留，不设默认寿命或抵扣。存量、毛实物流和负荷向量分开。这是声明的守恒前景核算实现，不声称引用原文规定这些变量名。 | jrc-ilcd-attributional-2010 |

## 6. 过程清单结构

所有卡均保留完整说明及§§1/3/4/5/7/8/9条件。条件交换仅有证据时可缺省，普通UUID空缺不表示实物为零。每份整供制剂/物件采购一次。字段标签及机器标识保持解析器支持的拼写。毛实物卡在calc_quotient中明确采用V_gross，只有独立负荷维度使用calc_manufacturing/calc_service/calc_asset。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | 完整椅制造与首次放行 | required | 已声明锯材/部件路线 | foreground | Q新增首次放行完整椅净千克 |
| gate_service | 原批次工厂门服务 | conditional | 真实包装/仓储/搬运/发运及退回 | foreground | 原批次Q_H及实测观察期H，不增第二产品 |

### 过程：完整制造 (`manufacture`)

#### 输入

##### 产品流

###### 窑干山毛榉锯材 (`beech_stock`)

一种厚度超过6毫米、未经浸渍且未胶合的窑干山毛榉锯材供货。原生树种未指定的硬木类别在此限定为已声明的水青冈属树种和合法来源；不提供树种密度、目标含水率或认证产地。匹配上游锯材数据须一次保留林业、锯材、窑干和运输负荷，不推定厂内原木加工、窑炉或汽蒸。称量到货湿材并独立抽测含水率。

- 选定流：硬木锯材 `43103a96-43df-4f35-ad02-728237b3f815`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_material采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`a2s-chair-catalogue`; `usda-wood-handbook-2021`

###### 成型山毛榉多层板座面 (`seat_panel`)

原生已制造木制家具部件类别中的一件外购座面。声明山毛榉单板层构、成型几何、胶黏剂、含水状态、处理及供应门。供应方旋切、干燥、组坯、胶合和成型负荷在上游保留一次；它不是原始板材，也不是整椅。本路线接收未涂部件供厂内涂装；如实际带涂层到货，须保留整份供方负荷并仅去除重复厂内工序。

- 选定流：木制家具部件 `4d818756-c439-4450-856c-b24a32c05185`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_material采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`a2s-chair-catalogue`; `usda-wood-handbook-2021`

###### 成型山毛榉多层板靠背 (`back_panel`)

原生已制造木制家具部件类别中的一件外购靠背。声明山毛榉单板层构、成型几何、胶黏剂、含水状态、处理及供应门。供应方旋切、干燥、组坯、胶合和成型负荷在上游保留一次；它不是原始板材，也不是整椅。本路线接收未涂部件供厂内涂装；如实际带涂层到货，须保留整份供方负荷并仅去除重复厂内工序。

- 选定流：木制家具部件 `4d818756-c439-4450-856c-b24a32c05185`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_material采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`a2s-chair-catalogue`; `usda-wood-handbook-2021`

###### 已制造山毛榉家具木榫 (`beech_dowel`)

宽泛的已制造木制家具部件类别中的一种外购山毛榉木榫，用于指定椅接头；声明直径、长度、含水率、表面处理和供货门。保留木榫上游制造及实测整件湿质量。用beech_stock厂内加工的木榫为内部交接，不是本项外购。

- 选定流：木制家具部件 `4d818756-c439-4450-856c-b24a32c05185`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_material采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`a2s-chair-catalogue`; `usda-wood-handbook-2021`

###### 成品钢制椅装配螺钉 (`steel_screw`)

原生为全球厂端生产混合的通用钢制装配辅助紧固件。椅BOM中一种成品螺钉，不是钢线材。声明合金、表面处理、几何和实测净质量，或同种真实螺钉可追溯的数量质量换算。另一种螺钉另建卡；无默认镀锌、单钉质量或强度级别。

- 选定流：钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_material采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`a2s-chair-catalogue`; `usda-wood-handbook-2021`

###### 整件供货毡制椅脚垫 (`felt_glide`)

仅实际安装毡制护地脚垫时适用。一件供货脚垫一次包含实际背胶、背衬或固定钉；声明纤维组成和完整部件质量。不得再次采购其中已含成分；不同聚合物脚垫须另建实际卡。

- 选定流：整件供货毡制椅脚垫
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_material采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`a2s-chair-catalogue`; `usda-wood-handbook-2021`

###### 整份单组分水性聚醋酸乙烯酯木胶 (`pvac_adhesive`)

一种用于供方批准硬木/木榫连接的外购即用水性PVAc整份制剂，包含载水、助剂和固体。聚合物是聚醋酸乙烯酯，不是聚乙烯醇。KLEIBERIT证明单组分冷胶接技术，未声称它是A2S/CEGIM所用胶。整份采购/领用制剂称量一次；水、树脂、含量检测仅为子账，不是第二次采购。不推定硬化剂、额外树脂、固定涂胶量或椅子D3/D4认证。真实双组分路线必须另列实购硬化剂并补充反应/固化证据。  完整原生定义正面包括PVAc水乳液/白色木工胶产品，并非仅干树脂；本族仅用于实际整份供入的一组分PVAc水乳液木工胶，完整载水/添加剂/固体及实际供方认可配方均保留。参考Mass/kg表示本实际相容整份供货乳液，绝非干聚合物当量。不另计树脂采购，不推配方/等级/性能；实际若仅干聚合物或化学不同制剂，本整胶归属不适用。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流: 聚醋酸乙烯酯 `46c91184-28ea-4b2e-a4e7-c07f3f84369b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_material采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`kleiberit-pvac-303`; `usda-wood-handbook-2021`

###### 整份单组分水性透明家具漆 (`waterborne_lacquer`)

一种外购即用透明家具漆整份制剂，一次包含水、黏结剂及助剂。ADLER提供可工业单组分无气喷涂的例子；其单组分正常应力用途不能在无真实供方/制造商许可和试验时证明高应力椅的适用性。不推定同SKU或工厂关联、零VOC、默认固含、涂布量、膜厚、干燥时间或认证。使用实际通过适用性确认的完整制剂；双组分交联剂、色剂、UV助剂或底漆是另项实际采购，须各自建卡和证据。  完整原生木质面漆明确容纳水性/油性透明木器涂层；所举水性聚氨酯是示例，并非统一粘结剂要求。本整份Product/Mass/kg族限定为实际合格的一组分水性透明木器涂层制剂，整份供货仅计一次。保留确切粘结剂/固体/载水/获准多层用途，不能暗换独立底漆、油性漆、颜料漆、2K固化剂或树脂组分。实际椅受力/验收适用性仍须供方/制造商试验，不是原生审批。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流: 木质面漆 `097bc238-dda4-4296-b6ca-b7c573f7f39d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_material采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`adler-unistar-2965`; `a2s-chair-catalogue`; `cegim-beech-production`

###### 另加液态市政自来水 (`tap_water`)

计量清洗或供方许可调整时实际另加的市政处理水；原生为产品供水，不是未经处理地表取水。胶与漆整份制剂的载水已含，不得重购。原生参考为质量，次级体积系数不是实测水密度。即使水留在期末存量也保留完整真实流入；匹配实际供水/处理门。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_water采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`kleiberit-pvac-303`; `adler-unistar-2965`

###### 整份水性家具涂装设备清洗剂 (`cleaner`)

仅真实外购清洗剂时适用，例如供方批准的干漆清除制剂。已识别整份配方记录一次，真实另加稀释水记tap_water；不得以纯溶剂替代或编造洗剂配方。保留清洗损失和废液。

- 选定流：整份水性家具涂装设备清洗剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_material采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`adler-unistar-2965`

###### 纸基砂纸 (`abrasive_paper`)

一种用于白坯或涂层间砂光的整件纸基砂纸。原生厂内产品类别未固定粒度、磨料矿物或树脂；声明实际纸基、磨料、黏结剂、实测质量和供方负荷。织物砂带或散粒磨料须另建物理卡，不能使用本纸基身份。

- 选定流：砂纸 `ba6c99d4-60d9-46a5-9ef5-ca3d0b877d57`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_material采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`adler-unistar-2965`; `cegim-beech-production`

###### 用户端低于1千伏制造用电 (`electricity`)

原生为低于1千伏的用户端电网平均消费组合；仅在电压、地区年份和供方损失边界匹配时使用。包含锯切/CNC、压合、砂光、无气喷泵、除尘、通风、真实电干燥/调湿及公用工程，包含失败、空转、启停和清洗。若厂内制压缩空气，其真实压缩机用电在此记一次，内部供气交接合并抵消，不另添外购压缩空气负荷。这是电MJ，不是燃料/蒸汽热量。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_utility采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：`cegim-beech-production`; `adler-unistar-2965`

###### 进厂椅用材料公路货运 (`inbound_road`)

一种外部供货的真实公路货运服务，使用实测运输吨数、真实距离及车型、载荷、返程和空驶证据。供方已含运输须有一次负荷所有权，不得重加。实物包装和运输毛质量另保留，不按经济分配缩量。

- 选定流：进厂椅用材料公路货运
- 流属性/单位：Mass*distance / t*km
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_utility采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：`jrc-ilcd-attributional-2010`

###### 电动木工数控加工中心 (`cnc_asset_in`)

一台已识别完整资产的条件性真实外部取得/返还入厂。保留实测整机毛质量、附着物、在装流体、新旧状态及完整期初期末实物存量。内部搬迁只记抵消台账，不是外购。本实物卡通过calc_quotient使用V_gross，绝不按每千克椅采购一整机。服务负荷按calc_asset另以真实容量/时间及继承负荷计一次，不编固定寿命或质量。

- 选定流：电动木工数控加工中心
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为cnc_asset_in实际完整外部毛腿。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cegim-beech-production`; `jrc-ilcd-attributional-2010`

###### 电动纸基磨具木材砂光机 (`sander_asset_in`)

一台已识别完整资产的条件性真实外部取得/返还入厂。保留实测整机毛质量、附着物、在装流体、新旧状态及完整期初期末实物存量。内部搬迁只记抵消台账，不是外购。本实物卡通过calc_quotient使用V_gross，绝不按每千克椅采购一整机。服务负荷按calc_asset另以真实容量/时间及继承负荷计一次，不编固定寿命或质量。

- 选定流：电动纸基磨具木材砂光机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为sander_asset_in实际完整外部毛腿。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cegim-beech-production`; `jrc-ilcd-attributional-2010`

###### 液压木椅装配压机 (`press_asset_in`)

一台已识别完整资产的条件性真实外部取得/返还入厂。保留实测整机毛质量、附着物、在装流体、新旧状态及完整期初期末实物存量。内部搬迁只记抵消台账，不是外购。本实物卡通过calc_quotient使用V_gross，绝不按每千克椅采购一整机。服务负荷按calc_asset另以真实容量/时间及继承负荷计一次，不编固定寿命或质量。

- 选定流：液压木椅装配压机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为press_asset_in实际完整外部毛腿。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cegim-beech-production`; `jrc-ilcd-attributional-2010`

###### 电动家具无气喷涂泵 (`sprayer_asset_in`)

一台已识别完整资产的条件性真实外部取得/返还入厂。保留实测整机毛质量、附着物、在装流体、新旧状态及完整期初期末实物存量。内部搬迁只记抵消台账，不是外购。本实物卡通过calc_quotient使用V_gross，绝不按每千克椅采购一整机。服务负荷按calc_asset另以真实容量/时间及继承负荷计一次，不编固定寿命或质量。

- 选定流：电动家具无气喷涂泵
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为sprayer_asset_in实际完整外部毛腿。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cegim-beech-production`; `jrc-ilcd-attributional-2010`

###### 木尘抽排风机及壳体 (`extractor_asset_in`)

一台已识别完整资产的条件性真实外部取得/返还入厂。保留实测整机毛质量、附着物、在装流体、新旧状态及完整期初期末实物存量。内部搬迁只记抵消台账，不是外购。本实物卡通过calc_quotient使用V_gross，绝不按每千克椅采购一整机。服务负荷按calc_asset另以真实容量/时间及继承负荷计一次，不编固定寿命或质量。

- 选定流：木尘抽排风机及壳体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为extractor_asset_in实际完整外部毛腿。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cegim-beech-production`; `jrc-ilcd-attributional-2010`

###### 木工硬质合金刀片 (`cutter_in`)

指定刀具的真实完整入厂刀片；区分磨耗、在装存量和重磨，记录实际硬质合金/结合剂组成及整件质量，不采用通用金属加工磨耗系数。 实物毛事件使用V_gross；真实上游/服务负荷另按calc_asset归属一次。

- 选定流：木工硬质合金刀片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为cutter_in实际完整外部毛腿。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`jrc-ilcd-attributional-2010`; `cegim-beech-production`

###### 整件钢制主轴轴承 (`bearing_in`)

实际完整新轴承或翻修轴承，声明合金、油脂/密封和湿质量。不能因部件期末仍在装而消除真实新增流入。 实物毛事件使用V_gross；真实上游/服务负荷另按calc_asset归属一次。

- 选定流：整件钢制主轴轴承
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为bearing_in实际完整外部毛腿。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`jrc-ilcd-attributional-2010`; `cegim-beech-production`

###### 整份压机液压油 (`hydraulic_oil_in`)

一种真实整份供货液压油，声明牌号和助剂；称量净加料和在装/期初期末流体。累计体积换算须用该油独立实测密度，不能套其他产品原生次级系数。 实物毛事件使用V_gross；真实上游/服务负荷另按calc_asset归属一次。

- 选定流：整份压机液压油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为hydraulic_oil_in实际完整外部毛腿。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`jrc-ilcd-attributional-2010`; `cegim-beech-production`

###### 整件聚酯木尘集尘滤袋 (`filter_in`)

仅实际使用聚酯集尘滤袋时适用，识别缝线/支撑/涂层及整件净质量；其他滤材另建实际卡。包装和留存粉尘为独立子账。 实物毛事件使用V_gross；真实上游/服务负荷另按calc_asset归属一次。

- 选定流：整件聚酯木尘集尘滤袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为filter_in实际完整外部毛腿。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`jrc-ilcd-attributional-2010`; `cegim-beech-production`

###### 电动木工数控加工中心 (`cnc_asset_charge`)

同一已识别实物电动木工数控加工中心的仅负荷伴随记录。不是另一次外部实物输入或采购：毛到货/拆除仅由对应毛卡披露。分子为独立服务/容量计量及正当分配后，本批次真实已用上游制造/维修及实际处置负荷的有记录同单位份额，包含继承负荷及未用未分配余额。在装流体等实物存量保留完整，不设固定寿命或每千克一整机，不重复上游所有权。原服务时间/容量仅为驱动量，不是猜测质量换算。

- 选定流：电动木工数控加工中心
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`jrc-ilcd-attributional-2010`

###### 电动纸基磨具木材砂光机 (`sander_asset_charge`)

同一已识别实物电动纸基磨具木材砂光机的仅负荷伴随记录。不是另一次外部实物输入或采购：毛到货/拆除仅由对应毛卡披露。分子为独立服务/容量计量及正当分配后，本批次真实已用上游制造/维修及实际处置负荷的有记录同单位份额，包含继承负荷及未用未分配余额。在装流体等实物存量保留完整，不设固定寿命或每千克一整机，不重复上游所有权。原服务时间/容量仅为驱动量，不是猜测质量换算。

- 选定流：电动纸基磨具木材砂光机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`jrc-ilcd-attributional-2010`

###### 液压木椅装配压机 (`press_asset_charge`)

同一已识别实物液压木椅装配压机的仅负荷伴随记录。不是另一次外部实物输入或采购：毛到货/拆除仅由对应毛卡披露。分子为独立服务/容量计量及正当分配后，本批次真实已用上游制造/维修及实际处置负荷的有记录同单位份额，包含继承负荷及未用未分配余额。在装流体等实物存量保留完整，不设固定寿命或每千克一整机，不重复上游所有权。原服务时间/容量仅为驱动量，不是猜测质量换算。

- 选定流：液压木椅装配压机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`jrc-ilcd-attributional-2010`

###### 电动家具无气喷涂泵 (`sprayer_asset_charge`)

同一已识别实物电动家具无气喷涂泵的仅负荷伴随记录。不是另一次外部实物输入或采购：毛到货/拆除仅由对应毛卡披露。分子为独立服务/容量计量及正当分配后，本批次真实已用上游制造/维修及实际处置负荷的有记录同单位份额，包含继承负荷及未用未分配余额。在装流体等实物存量保留完整，不设固定寿命或每千克一整机，不重复上游所有权。原服务时间/容量仅为驱动量，不是猜测质量换算。

- 选定流：电动家具无气喷涂泵
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`jrc-ilcd-attributional-2010`

###### 木尘抽排风机及壳体 (`extractor_asset_charge`)

同一已识别实物木尘抽排风机及壳体的仅负荷伴随记录。不是另一次外部实物输入或采购：毛到货/拆除仅由对应毛卡披露。分子为独立服务/容量计量及正当分配后，本批次真实已用上游制造/维修及实际处置负荷的有记录同单位份额，包含继承负荷及未用未分配余额。在装流体等实物存量保留完整，不设固定寿命或每千克一整机，不重复上游所有权。原服务时间/容量仅为驱动量，不是猜测质量换算。

- 选定流：木尘抽排风机及壳体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`jrc-ilcd-attributional-2010`

###### 木工硬质合金刀片 (`cutter_charge`)

同一已识别实物木工硬质合金刀片的仅负荷伴随记录。不是另一次外部实物输入或采购：毛到货/拆除仅由对应毛卡披露。分子为独立服务/容量计量及正当分配后，本批次真实已用上游制造/维修及实际处置负荷的有记录同单位份额，包含继承负荷及未用未分配余额。在装流体等实物存量保留完整，不设固定寿命或每千克一整机，不重复上游所有权。原服务时间/容量仅为驱动量，不是猜测质量换算。

- 选定流：木工硬质合金刀片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`jrc-ilcd-attributional-2010`

###### 整件钢制主轴轴承 (`bearing_charge`)

同一已识别实物整件钢制主轴轴承的仅负荷伴随记录。不是另一次外部实物输入或采购：毛到货/拆除仅由对应毛卡披露。分子为独立服务/容量计量及正当分配后，本批次真实已用上游制造/维修及实际处置负荷的有记录同单位份额，包含继承负荷及未用未分配余额。在装流体等实物存量保留完整，不设固定寿命或每千克一整机，不重复上游所有权。原服务时间/容量仅为驱动量，不是猜测质量换算。

- 选定流：整件钢制主轴轴承
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`jrc-ilcd-attributional-2010`

###### 整份压机液压油 (`hydraulic_oil_charge`)

同一已识别实物整份压机液压油的仅负荷伴随记录。不是另一次外部实物输入或采购：毛到货/拆除仅由对应毛卡披露。分子为独立服务/容量计量及正当分配后，本批次真实已用上游制造/维修及实际处置负荷的有记录同单位份额，包含继承负荷及未用未分配余额。在装流体等实物存量保留完整，不设固定寿命或每千克一整机，不重复上游所有权。原服务时间/容量仅为驱动量，不是猜测质量换算。

- 选定流：整份压机液压油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`jrc-ilcd-attributional-2010`

###### 整件聚酯木尘集尘滤袋 (`filter_charge`)

同一已识别实物整件聚酯木尘集尘滤袋的仅负荷伴随记录。不是另一次外部实物输入或采购：毛到货/拆除仅由对应毛卡披露。分子为独立服务/容量计量及正当分配后，本批次真实已用上游制造/维修及实际处置负荷的有记录同单位份额，包含继承负荷及未用未分配余额。在装流体等实物存量保留完整，不设固定寿命或每千克一整机，不重复上游所有权。原服务时间/容量仅为驱动量，不是猜测质量换算。

- 选定流：整件聚酯木尘集尘滤袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`jrc-ilcd-attributional-2010`

###### 未涂山毛榉边角料处理 (`offcut_treatment`)

针对未涂山毛榉边角料具体废物流的一项真实处理服务；采集湿毛千克及真实供方/操作，与已报实物废物出口分开。不重复废物出口，不赋予销售/替代信用。分子为真实归本批次的同流处理服务，含实测处理输入基准、去向和负荷所有权；不套通用处置配方，不丢下游处理负荷。

- 选定流：未涂山毛榉边角料处理
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`jrc-ilcd-attributional-2010`

###### 未涂山毛榉刨花处理 (`shavings_treatment`)

针对未涂山毛榉刨花具体废物流的一项真实处理服务；采集湿毛千克及真实供方/操作，与已报实物废物出口分开。不重复废物出口，不赋予销售/替代信用。分子为真实归本批次的同流处理服务，含实测处理输入基准、去向和负荷所有权；不套通用处置配方，不丢下游处理负荷。

- 选定流：未涂山毛榉刨花处理
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`jrc-ilcd-attributional-2010`

###### 未涂山毛榉锯屑废物处理 (`sawdust_treatment`)

针对未涂山毛榉锯屑废物具体废物流的一项真实处理服务；采集湿毛千克及真实供方/操作，与已报实物废物出口分开。不重复废物出口，不赋予销售/替代信用。分子为真实归本批次的同流处理服务，含实测处理输入基准、去向和负荷所有权；不套通用处置配方，不丢下游处理负荷。

- 选定流：未涂山毛榉锯屑废物处理
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`jrc-ilcd-attributional-2010`

###### 已收集未涂山毛榉砂尘处理 (`raw_sanding_dust_treatment`)

针对已收集未涂山毛榉砂尘具体废物流的一项真实处理服务；采集湿毛千克及真实供方/操作，与已报实物废物出口分开。不重复废物出口，不赋予销售/替代信用。分子为真实归本批次的同流处理服务，含实测处理输入基准、去向和负荷所有权；不套通用处置配方，不丢下游处理负荷。

- 选定流：已收集未涂山毛榉砂尘处理
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`jrc-ilcd-attributional-2010`

###### 已收集山毛榉多层板加工粉尘处理 (`panel_dust_treatment`)

针对已收集山毛榉多层板加工粉尘具体废物流的一项真实处理服务；采集湿毛千克及真实供方/操作，与已报实物废物出口分开。不重复废物出口，不赋予销售/替代信用。分子为真实归本批次的同流处理服务，含实测处理输入基准、去向和负荷所有权；不套通用处置配方，不丢下游处理负荷。

- 选定流：已收集山毛榉多层板加工粉尘处理
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`jrc-ilcd-attributional-2010`

###### 已收集带漆木材涂层间砂尘处理 (`coated_dust_treatment`)

针对已收集带漆木材涂层间砂尘具体废物流的一项真实处理服务；采集湿毛千克及真实供方/操作，与已报实物废物出口分开。不重复废物出口，不赋予销售/替代信用。分子为真实归本批次的同流处理服务，含实测处理输入基准、去向和负荷所有权；不套通用处置配方，不丢下游处理负荷。

- 选定流：已收集带漆木材涂层间砂尘处理
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`jrc-ilcd-attributional-2010`

###### 未放行不合格山毛榉框架整椅处理 (`reject_chair_treatment`)

针对未放行不合格山毛榉框架整椅具体废物流的一项真实处理服务；采集湿毛千克及真实供方/操作，与已报实物废物出口分开。不重复废物出口，不赋予销售/替代信用。分子为真实归本批次的同流处理服务，含实测处理输入基准、去向和负荷所有权；不套通用处置配方，不丢下游处理负荷。

- 选定流：未放行不合格山毛榉框架整椅处理
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`jrc-ilcd-attributional-2010`

###### 废整份水性聚醋酸乙烯酯木胶处理 (`waste_adhesive_treatment`)

针对废整份水性聚醋酸乙烯酯木胶具体废物流的一项真实处理服务；采集湿毛千克及真实供方/操作，与已报实物废物出口分开。不重复废物出口，不赋予销售/替代信用。分子为真实归本批次的同流处理服务，含实测处理输入基准、去向和负荷所有权；不套通用处置配方，不丢下游处理负荷。

- 选定流：废整份水性聚醋酸乙烯酯木胶处理
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`jrc-ilcd-attributional-2010`

###### 废水性家具漆制剂处理 (`waste_lacquer_treatment`)

针对废水性家具漆制剂具体废物流的一项真实处理服务；采集湿毛千克及真实供方/操作，与已报实物废物出口分开。不重复废物出口，不赋予销售/替代信用。分子为真实归本批次的同流处理服务，含实测处理输入基准、去向和负荷所有权；不套通用处置配方，不丢下游处理负荷。

- 选定流：废水性家具漆制剂处理
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`jrc-ilcd-attributional-2010`

###### 废木胶设备水性洗液处理 (`wash_liquor_treatment`)

针对废木胶设备水性洗液具体废物流的一项真实处理服务；采集湿毛千克及真实供方/操作，与已报实物废物出口分开。不重复废物出口，不赋予销售/替代信用。分子为真实归本批次的同流处理服务，含实测处理输入基准、去向和负荷所有权；不套通用处置配方，不丢下游处理负荷。

- 选定流：废木胶设备水性洗液处理
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`jrc-ilcd-attributional-2010`

###### 废家具漆设备水性洗液处理 (`paint_wash_liquor_treatment`)

针对废家具漆设备水性洗液具体废物流的一项真实处理服务；采集湿毛千克及真实供方/操作，与已报实物废物出口分开。不重复废物出口，不赋予销售/替代信用。分子为真实归本批次的同流处理服务，含实测处理输入基准、去向和负荷所有权；不套通用处置配方，不丢下游处理负荷。

- 选定流：废家具漆设备水性洗液处理
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`jrc-ilcd-attributional-2010`

###### 已分离湿态水性家具漆污泥处理 (`paint_sludge_treatment`)

针对已分离湿态水性家具漆污泥具体废物流的一项真实处理服务；采集湿毛千克及真实供方/操作，与已报实物废物出口分开。不重复废物出口，不赋予销售/替代信用。分子为真实归本批次的同流处理服务，含实测处理输入基准、去向和负荷所有权；不套通用处置配方，不丢下游处理负荷。

- 选定流：已分离湿态水性家具漆污泥处理
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为归属制造交换向量。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`jrc-ilcd-attributional-2010`

###### 真实设备维修用液态市政水 (`repair_water_in`)

仅真实另行计量的设备维修水适用，不重复整机/整份流体已含水或另一自来水事件。完整真实流入与完整期末湿存量同时保留，仅与另一入流项去重。本卡披露完整实物V；实际供水/服务负荷由cp_asset归属一次，不是同事件的第二采购。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为repair_water_in实际完整外部毛腿。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`jrc-ilcd-attributional-2010`

##### 基本流

###### 氮 (`air_n2_in`)

实测通风/控制气流中真实环境进气氮气体，CAS 7727-37-9。使用实测组成和累计气量，或对真实速率在实际干湿温压状态积分一次；不得另添整份空气采购/排放，也不能从本毛腿推定净排放。涉及碳时保留环境、木生物源和化石涂层来源子账。本实物毛V不是制造/服务负荷向量，不作存量校正或经济缩量。 分子N2、CAS7727-37-9、Mass/kg、空气资源，不是排放、液态/外购氮或一氧化二氮。

- 选定流: 二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为air_n2_in实际完整外部毛腿。这是第8节唯一一次除法；以cp_emission采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`usda-wood-handbook-2021`

###### 氧 (`air_o2_in`)

实测通风/控制气流中真实环境进气氧气体，CAS 7782-44-7。使用实测组成和累计气量，或对真实速率在实际干湿温压状态积分一次；不得另添整份空气采购/排放，也不能从本毛腿推定净排放。涉及碳时保留环境、木生物源和化石涂层来源子账。本实物毛V不是制造/服务负荷向量，不作存量校正或经济缩量。 分子O2、CAS7782-44-7、Mass/kg、空气资源；杂乱液态/单重态/离子别名不能代表外购钢瓶或其他相态。

- 选定流: 氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为air_o2_in实际完整外部毛腿。这是第8节唯一一次除法；以cp_emission采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`usda-wood-handbook-2021`

###### 氩 (`air_ar_in`)

实测通风/控制气流中真实环境进气氩气体，CAS 7440-37-1。使用实测组成和累计气量，或对真实速率在实际干湿温压状态积分一次；不得另添整份空气采购/排放，也不能从本毛腿推定净排放。涉及碳时保留环境、木生物源和化石涂层来源子账。本实物毛V不是制造/服务负荷向量，不作存量校正或经济缩量。 普通稳定Ar、CAS7440-37-1、Mass/kg、空气资源，不是Ar41放射性、外购Product或空气排放。

- 选定流: 氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为air_ar_in实际完整外部毛腿。这是第8节唯一一次除法；以cp_emission采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`usda-wood-handbook-2021`

###### 二氧化碳 (`air_co2_in`)

实测通风/控制气流中真实环境进气二氧化碳气体，CAS 124-38-9。使用实测组成和累计气量，或对真实速率在实际干湿温压状态积分一次；不得另添整份空气采购/排放，也不能从本毛腿推定净排放。涉及碳时保留环境、木生物源和化石涂层来源子账。本实物毛V不是制造/服务负荷向量，不作存量校正或经济缩量。

- 选定流：二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为air_co2_in实际完整外部毛腿。这是第8节唯一一次除法；以cp_emission采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`usda-wood-handbook-2021`

###### 环境进气中的水蒸气 (`air_humidity_in`)

实际环境进气湿气，分子H2O CAS 7732-18-5；与木材水分及制剂载水独立计量，不是自来水采购。保留本真实实物毛流入及其相态/状态，与排出蒸气分开。

- 选定流：环境进气中的水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为air_humidity_in实际完整外部毛腿。这是第8节唯一一次除法；以cp_emission采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`a2s-chair-catalogue`; `usda-wood-handbook-2021`

#### 输出

##### 产品流

###### 首次放行完整椅 (`finished_chair`)

原生为厂内生产组合、已制造成品、以木框架为主的座椅；本PCR限定为未软包山毛榉框架、成型山毛榉多层板座背、真实指定五金/脚垫及已确认适用的单组分水性胶/透明漆的一种整椅。它不是裸框架、座板、未完总成或金属框架椅。以cp_release实测完整净质量和含水状态。Q包含期末仍在成品库存中的新增首次放行椅；仅本行作为参考产品计一次，包装和后续发运不产生第二个Q。

- 选定流：带木制框架的座椅 `5ac0b7a3-ea7c-42cb-b70c-32608f90e4e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：`a2s-chair-catalogue`; `usda-wood-handbook-2021`

###### 电动木工数控加工中心 (`cnc_asset_out`)

一台已识别完整资产的条件性真实外部移交/退役出厂。保留实测整机毛质量、附着物、在装流体、新旧状态及完整期初期末实物存量。内部搬迁只记抵消台账，不是外购。本实物卡通过calc_quotient使用V_gross，绝不按每千克椅采购一整机。服务负荷按calc_asset另以真实容量/时间及继承负荷计一次，不编固定寿命或质量。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。

- 选定流：电动木工数控加工中心
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为cnc_asset_out实际完整外部毛腿。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cegim-beech-production`; `jrc-ilcd-attributional-2010`

###### 电动纸基磨具木材砂光机 (`sander_asset_out`)

一台已识别完整资产的条件性真实外部移交/退役出厂。保留实测整机毛质量、附着物、在装流体、新旧状态及完整期初期末实物存量。内部搬迁只记抵消台账，不是外购。本实物卡通过calc_quotient使用V_gross，绝不按每千克椅采购一整机。服务负荷按calc_asset另以真实容量/时间及继承负荷计一次，不编固定寿命或质量。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。

- 选定流：电动纸基磨具木材砂光机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为sander_asset_out实际完整外部毛腿。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cegim-beech-production`; `jrc-ilcd-attributional-2010`

###### 液压木椅装配压机 (`press_asset_out`)

一台已识别完整资产的条件性真实外部移交/退役出厂。保留实测整机毛质量、附着物、在装流体、新旧状态及完整期初期末实物存量。内部搬迁只记抵消台账，不是外购。本实物卡通过calc_quotient使用V_gross，绝不按每千克椅采购一整机。服务负荷按calc_asset另以真实容量/时间及继承负荷计一次，不编固定寿命或质量。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。

- 选定流：液压木椅装配压机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为press_asset_out实际完整外部毛腿。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cegim-beech-production`; `jrc-ilcd-attributional-2010`

###### 电动家具无气喷涂泵 (`sprayer_asset_out`)

一台已识别完整资产的条件性真实外部移交/退役出厂。保留实测整机毛质量、附着物、在装流体、新旧状态及完整期初期末实物存量。内部搬迁只记抵消台账，不是外购。本实物卡通过calc_quotient使用V_gross，绝不按每千克椅采购一整机。服务负荷按calc_asset另以真实容量/时间及继承负荷计一次，不编固定寿命或质量。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。

- 选定流：电动家具无气喷涂泵
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为sprayer_asset_out实际完整外部毛腿。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cegim-beech-production`; `jrc-ilcd-attributional-2010`

###### 木尘抽排风机及壳体 (`extractor_asset_out`)

一台已识别完整资产的条件性真实外部移交/退役出厂。保留实测整机毛质量、附着物、在装流体、新旧状态及完整期初期末实物存量。内部搬迁只记抵消台账，不是外购。本实物卡通过calc_quotient使用V_gross，绝不按每千克椅采购一整机。服务负荷按calc_asset另以真实容量/时间及继承负荷计一次，不编固定寿命或质量。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。

- 选定流：木尘抽排风机及壳体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为extractor_asset_out实际完整外部毛腿。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cegim-beech-production`; `jrc-ilcd-attributional-2010`

##### 废物流

###### 未涂山毛榉边角料 (`offcut`)

干净实木边角料按湿态称量，保留含水率和去向；出售不消除普通制造或处理负荷。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：未涂山毛榉边角料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为offcut实际完整外部毛腿。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### 未涂山毛榉刨花 (`shavings`)

刨花与锯屑及带涂层粉尘分开；保留湿质量、干木/水子账、真实接收方和处理。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：未涂山毛榉刨花
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为shavings实际完整外部毛腿。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### 未涂山毛榉锯屑废物 (`sawdust`)

原生为厂内未处理锯屑废物流，供焚烧/回收；仅用于实际未涂山毛榉锯切残留物，须有含水率和去向证据。原生关于燃料/覆盖物用途的描述不提供自动替代信用、共产品地位或通用处理。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为sawdust实际完整外部毛腿。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### 已收集未涂山毛榉砂尘 (`raw_sanding_dust`)

一种已收集白坯木砂尘；与含已固化胶的多层板砂尘、磨料磨损、滤料附着和排口无组织排放区分。不得由总粉尘推定元素碳。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：已收集未涂山毛榉砂尘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为raw_sanding_dust实际完整外部毛腿。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### 已收集山毛榉多层板加工粉尘 (`panel_dust`)

含真实固化胶的板部件粉尘单列，不以未处理锯屑UUID指代本复合残留物。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：已收集山毛榉多层板加工粉尘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为panel_dust实际完整外部毛腿。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### 已收集带漆木材涂层间砂尘 (`coated_dust`)

一种捕集的木/固化涂层粉尘，须有实测组成、含水及处理；无正当其他功能负荷移交时不得按有价输出扣除。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：已收集带漆木材涂层间砂尘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为coated_dust实际完整外部毛腿。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### 未放行不合格山毛榉框架整椅 (`reject_chair`)

一把含实际座背、胶、漆和五金的完整失败椅；计量完整湿质量、去向和所含材料子账，不重复增加整料出口。它不属于Q。样品、破损和破坏试验仍承担负荷。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：未放行不合格山毛榉框架整椅
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为reject_chair实际完整外部毛腿。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### 废整份水性聚醋酸乙烯酯木胶 (`waste_adhesive`)

整份未用/溢洒胶含水/固体子账，与清洗剂和木残留分开；不采用纯聚合物身份，也不以干树脂质量代整胶。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：废整份水性聚醋酸乙烯酯木胶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为waste_adhesive实际完整外部毛腿。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### 废水性家具漆制剂 (`waste_lacquer`)

原生为待处理/处置的废水性漆/涂料残留物；仅用于实际收集的整份水性漆残留物，声明污染、含水、工序和去向。不推定排放/固化系数或废物产品信用。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：废水性涂料 `3ec596f0-fe78-40d3-be98-8ef4e3cb99e5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为waste_lacquer实际完整外部毛腿。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### 废木胶设备水性洗液 (`wash_liquor`)

木胶清洗的一份整洗液，包含真实溶解/分散胶与水；记录湿质量、检测和处理。COD是指标，不是某种有机物质量。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：废木胶设备水性洗液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为wash_liquor实际完整外部毛腿。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### 废家具漆设备水性洗液 (`paint_wash_liquor`)

漆/清洗剂洗液单列，不与木胶洗液合并；追踪真实整份湿流及处理。仅实际分离时才将沉渣和上清液列为不同出口，并去除整份与子账重复。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：废家具漆设备水性洗液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为paint_wash_liquor实际完整外部毛腿。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### 已分离湿态水性家具漆污泥 (`paint_sludge`)

仅真实湿捕集/处理工序实际分离污泥时适用；测量整份含水及干固体组成。干式过滤不自动产生污泥；不得与废漆/漆洗液重复记录同一物料。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：已分离湿态水性家具漆污泥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为paint_sludge实际完整外部毛腿。这是第8节唯一一次除法；以cp_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### 废木工硬质合金刀片 (`cutter_out`)

完整拆下刀片与真实磨损去向核对，避免重复出口磨失质量；回收出售不提供默认信用。 实物毛事件使用V_gross；真实上游/服务负荷另按calc_asset归属一次。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：废木工硬质合金刀片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为cutter_out实际完整外部毛腿。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`jrc-ilcd-attributional-2010`; `cegim-beech-production`

###### 拆下钢制主轴轴承 (`bearing_out`)

一件拆下旧轴承，包含留存润滑脂/密封，声明真实去向和状态；按实际处置/返还定性，不自动当产品销售。 实物毛事件使用V_gross；真实上游/服务负荷另按calc_asset归属一次。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：拆下钢制主轴轴承
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为bearing_out实际完整外部毛腿。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`jrc-ilcd-attributional-2010`; `cegim-beech-production`

###### 排出的废压机液压油 (`hydraulic_oil_out`)

一种实际排出的整份旧油，污染/水、泄漏和在装留存油独立追踪；不得对已扣存量的用量二扣。 实物毛事件使用V_gross；真实上游/服务负荷另按calc_asset归属一次。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：排出的废压机液压油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为hydraulic_oil_out实际完整外部毛腿。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`jrc-ilcd-attributional-2010`; `cegim-beech-production`

###### 废聚酯木尘集尘滤袋 (`filter_out`)

一个拆下整滤袋，测量附尘和水分。若拆出粉尘另列出口，仅去除重叠出口项，不消除完整湿存量或真实流入。 实物毛事件使用V_gross；真实上游/服务负荷另按calc_asset归属一次。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：废聚酯木尘集尘滤袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为filter_out实际完整外部毛腿。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`jrc-ilcd-attributional-2010`; `cegim-beech-production`

###### 废纸基砂纸 (`spent_paper`)

一张废纸基砂纸，包含实测磨耗、树脂和附着木/漆粉尘子账，不重复粉尘出口。 实物毛事件使用V_gross；真实上游/服务负荷另按calc_asset归属一次。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：废纸基砂纸
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为spent_paper实际完整外部毛腿。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`jrc-ilcd-attributional-2010`; `cegim-beech-production`

###### 废木工设备水性维修液 (`repair_water_out`)

仅真实整份水性维修废液外出时适用，识别油/尘/洗剂污染、独立湿质量、检测、去向和处理。不假定为纯净自来水返还，不自动等于入水，仅与另一出流事件去重。留存水仍在完整期末湿存量中，不消除真实入流。实际搬运/处理负荷另归属一次。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：废木工设备水性维修液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为repair_water_out实际完整外部毛腿。这是第8节唯一一次除法；以cp_asset采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`jrc-ilcd-attributional-2010`

##### 基本流

###### 氮 (`air_n2_out`)

实测通风/控制气流中真实排气氮气体，CAS 7727-37-9。使用实测组成和累计气量，或对真实速率在实际干湿温压状态积分一次；不得另添整份空气采购/排放，也不能从本毛腿推定净排放。涉及碳时保留环境、木生物源和化石涂层来源子账。本实物毛V不是制造/服务负荷向量，不作存量校正或经济缩量。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。 分子N2、CAS7727-37-9、Mass/kg、当前未指定空气排放，不是资源、长期、仅室内、NOx/N2O或液态。毛穿流与真实环境净变化分开。

- 选定流: 二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为air_n2_out实际完整外部毛腿。这是第8节唯一一次除法；以cp_emission采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`usda-wood-handbook-2021`

###### 氧 (`air_o2_out`)

实测通风/控制气流中真实排气氧气体，CAS 7782-44-7。使用实测组成和累计气量，或对真实速率在实际干湿温压状态积分一次；不得另添整份空气采购/排放，也不能从本毛腿推定净排放。涉及碳时保留环境、木生物源和化石涂层来源子账。本实物毛V不是制造/服务负荷向量，不作存量校正或经济缩量。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。 分子O2、CAS7782-44-7、Mass/kg、当前未指定空气排放，不是资源、液态Product、离子或其他介质，不由毛穿流推净生成。

- 选定流: 氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为air_o2_out实际完整外部毛腿。这是第8节唯一一次除法；以cp_emission采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`usda-wood-handbook-2021`

###### 氩 (`air_ar_out`)

实测通风/控制气流中真实排气氩气体，CAS 7440-37-1。使用实测组成和累计气量，或对真实速率在实际干湿温压状态积分一次；不得另添整份空气采购/排放，也不能从本毛腿推定净排放。涉及碳时保留环境、木生物源和化石涂层来源子账。本实物毛V不是制造/服务负荷向量，不作存量校正或经济缩量。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。 普通稳定Ar、CAS7440-37-1、Mass/kg、当前未指定空气排放，不是放射性、资源、长期或水/土壤。

- 选定流: 氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为air_ar_out实际完整外部毛腿。这是第8节唯一一次除法；以cp_emission采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`usda-wood-handbook-2021`

###### 二氧化碳 (`air_co2_out`)

实测通风/控制气流中真实排气二氧化碳气体，CAS 124-38-9。使用实测组成和累计气量，或对真实速率在实际干湿温压状态积分一次；不得另添整份空气采购/排放，也不能从本毛腿推定净排放。涉及碳时保留环境、木生物源和化石涂层来源子账。本实物毛V不是制造/服务负荷向量，不作存量校正或经济缩量。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。

- 选定流：二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为air_co2_out实际完整外部毛腿。这是第8节唯一一次除法；以cp_emission采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`usda-wood-handbook-2021`

###### 排向未指定空气的水蒸气 (`water_vapour_out`)

原生为分子H2O CAS 7732-18-5、排向未指定空气的基本流，质量/千克；同义词含冰/重水不授权采用相应相态或同位素。仅用于排向该介质的真实普通水蒸气。排气毛量包含进气湿气；木材吸附/游离水、载水/另加水和独立证实的反应水仅为子账，不重复排水。不设默认蒸发或反应产率；V_gross为实测完整出口腿，净环境信息另列。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为water_vapour_out实际完整外部毛腿。这是第8节唯一一次除法；以cp_emission采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`a2s-chair-catalogue`; `usda-wood-handbook-2021`

###### 空气中山毛榉木尘 (`wood_dust_air`)

仅实际实测排口/无组织白坯山毛榉颗粒排放时适用，保留真实空气介质；粒级为不重叠子集，总粉尘不能识别分子或等同碳质量。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。

- 选定流：空气中山毛榉木尘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为wood_dust_air实际完整外部毛腿。这是第8节唯一一次除法；以cp_emission采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`usda-wood-handbook-2021`; `adler-unistar-2965`

###### 水性家具漆气溶胶 (`coating_aerosol`)

仅实际逸散整份制剂液滴时适用，实测组成/水和粒态；不重复整份湿气溶胶及其水/树脂子账，也不假定每克喷涂均逸散。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。

- 选定流：水性家具漆气溶胶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为coating_aerosol实际完整外部毛腿。这是第8节唯一一次除法；以cp_emission采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`usda-wood-handbook-2021`; `adler-unistar-2965`

###### 排向空气的甲醛气体 (`formaldehyde_air`)

仅实际板材/胶/漆路线独立分物种测得甲醛CAS 50-00-0时适用，声明工序、受纳介质、检测方法、检出限和碳来源。不推定甲醛水溶液采购、总VOC/COD换算或通用排放因子。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。 仅实际普通分子甲醛、CAS50-00-0、Mass/kg、当前未指定空气排放，不是福尔马林溶液采购、总VOC、长期或仅室内。不由来源声称推排放量、碳源或零排放。

- 选定流: 甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为formaldehyde_air实际完整外部毛腿。这是第8节唯一一次除法；以cp_emission采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`usda-wood-handbook-2021`; `adler-unistar-2965`

###### 排向空气的甲醇蒸气 (`methanol_air`)

仅独立分物种测得甲醇CAS 67-56-1且有真实来源和空气介质时适用；木VOC或总有机碳不能确定其量。其他真实有机分子须各自建卡。 本出口数量为独立于负荷份额的实际完整实物毛腿V；其处理/搬运负荷仍归制造或正当原服务批次一次。 实际普通分子甲醇、CAS67-56-1、Mass/kg、当前未指定空气排放，不是其他含甲醇衍生物、液态化学品供货、总TOC/VOC或其他介质。来源和量独立测量。

- 选定流: 甲醇 `fe0acd60-3ddc-11dd-a935-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q；V_gross为methanol_air实际完整外部毛腿。这是第8节唯一一次除法；以cp_emission采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`usda-wood-handbook-2021`; `adler-unistar-2965`

### 过程：原批次门服务 (`gate_service`)

#### 输入

##### 产品流

###### 一个瓦楞椅运输纸箱 (`carton_p`)

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。恰为一个瓦楞椅运输纸箱的条件性有偿采购（单独或随货付费）流入事件：纸种/纤维及整箱构造。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。

- 选定流：一个瓦楞椅运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为carton_p实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一个瓦楞椅运输纸箱 (`carton_i`)

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。恰为一个瓦楞椅运输纸箱的条件性供方已含流入事件：纸种/纤维及整箱构造。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。

- 选定流：一个瓦楞椅运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为carton_i实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一个瓦楞椅运输纸箱 (`carton_er`)

恰为一个瓦楞椅运输纸箱的条件性外部退回流入事件：纸种/纤维及整箱构造。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。

- 选定流：一个瓦楞椅运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为carton_er实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一种聚乙烯椅包裹膜 (`film_p`)

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。恰为一种聚乙烯椅包裹膜的条件性有偿采购（单独或随货付费）流入事件：PE CAS 9002-88-4、真实支化/厚度及化石/可再生原料。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。 原生虽被归入无关行李分类，物理描述仍为PE薄膜；分类缺陷不提供替代许可。PET或复合层膜不适用。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为film_p实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一种聚乙烯椅包裹膜 (`film_i`)

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。恰为一种聚乙烯椅包裹膜的条件性供方已含流入事件：PE CAS 9002-88-4、真实支化/厚度及化石/可再生原料。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。 原生虽被归入无关行李分类，物理描述仍为PE薄膜；分类缺陷不提供替代许可。PET或复合层膜不适用。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为film_i实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一种聚乙烯椅包裹膜 (`film_er`)

恰为一种聚乙烯椅包裹膜的条件性外部退回流入事件：PE CAS 9002-88-4、真实支化/厚度及化石/可再生原料。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。 原生虽被归入无关行李分类，物理描述仍为PE薄膜；分类缺陷不提供替代许可。PET或复合层膜不适用。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为film_er实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一个木制运输托盘 (`pallet_p`)

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。恰为一个木制运输托盘的条件性有偿采购（单独或随货付费）流入事件：整托盘包含实际钉、树种、含水和处理。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。 宽泛已制造木装载板类别仅限定为本单个可携托盘，不增加围板/箱式托盘或无关家具。声明真实上游供方、处理及返还约定。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为pallet_p实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一个木制运输托盘 (`pallet_i`)

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。恰为一个木制运输托盘的条件性供方已含流入事件：整托盘包含实际钉、树种、含水和处理。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。 宽泛已制造木装载板类别仅限定为本单个可携托盘，不增加围板/箱式托盘或无关家具。声明真实上游供方、处理及返还约定。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为pallet_i实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一个木制运输托盘 (`pallet_er`)

恰为一个木制运输托盘的条件性外部退回流入事件：整托盘包含实际钉、树种、含水和处理。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。 宽泛已制造木装载板类别仅限定为本单个可携托盘，不增加围板/箱式托盘或无关家具。声明真实上游供方、处理及返还约定。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为pallet_er实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一个供货塑料木胶空桶 (`glue_pail_p`)

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。恰为一个供货塑料木胶空桶的条件性有偿采购（单独或随货付费）流入事件：一个完整桶及真实聚合物、盖/把手和皮重，不假定HDPE。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。 整件湿态物品/制剂原有基材、内衬、涂层、胶、五金和水均仅作实测子账计一次。真实有偿采购（单独或随货付费）的现场组件仅在与整件供货互斥时独立计外部接收/所有者，或以实测组件至组装桥接及配对内部移交抵消核对。装料胶/漆桶按实测装料毛接收与净整份制剂及实际湿态容器皮重核对；不能将装料整件与同一内容物/容器叠加两次。真实独立入流与完整期末湿库存同时保留。

- 选定流：一个供货塑料木胶空桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为glue_pail_p实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一个供货塑料木胶空桶 (`glue_pail_i`)

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。恰为一个供货塑料木胶空桶的条件性供方已含流入事件：一个完整桶及真实聚合物、盖/把手和皮重，不假定HDPE。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。 整件湿态物品/制剂原有基材、内衬、涂层、胶、五金和水均仅作实测子账计一次。真实有偿采购（单独或随货付费）的现场组件仅在与整件供货互斥时独立计外部接收/所有者，或以实测组件至组装桥接及配对内部移交抵消核对。装料胶/漆桶按实测装料毛接收与净整份制剂及实际湿态容器皮重核对；不能将装料整件与同一内容物/容器叠加两次。真实独立入流与完整期末湿库存同时保留。

- 选定流：一个供货塑料木胶空桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为glue_pail_i实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一个供货塑料木胶空桶 (`glue_pail_er`)

恰为一个供货塑料木胶空桶的条件性外部退回流入事件：一个完整桶及真实聚合物、盖/把手和皮重，不假定HDPE。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。 整件湿态物品/制剂原有基材、内衬、涂层、胶、五金和水均仅作实测子账计一次。真实单独采购的现场组件仅在与整件供货互斥时独立计外部接收/所有者，或以实测组件至组装桥接及配对内部移交抵消核对。装料胶/漆桶按实测装料毛接收与净整份制剂及实际湿态容器皮重核对；不能将装料整件与同一内容物/容器叠加两次。真实独立入流与完整期末湿库存同时保留。

- 选定流：一个供货塑料木胶空桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为glue_pail_er实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一个供货家具漆空桶 (`paint_pail_p`)

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。恰为一个供货家具漆空桶的条件性有偿采购（单独或随货付费）流入事件：一个完整桶及真实材质、内衬、盖/把手和皮重。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。 整件湿态物品/制剂原有基材、内衬、涂层、胶、五金和水均仅作实测子账计一次。真实有偿采购（单独或随货付费）的现场组件仅在与整件供货互斥时独立计外部接收/所有者，或以实测组件至组装桥接及配对内部移交抵消核对。装料胶/漆桶按实测装料毛接收与净整份制剂及实际湿态容器皮重核对；不能将装料整件与同一内容物/容器叠加两次。真实独立入流与完整期末湿库存同时保留。

- 选定流：一个供货家具漆空桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为paint_pail_p实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一个供货家具漆空桶 (`paint_pail_i`)

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。恰为一个供货家具漆空桶的条件性供方已含流入事件：一个完整桶及真实材质、内衬、盖/把手和皮重。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。 整件湿态物品/制剂原有基材、内衬、涂层、胶、五金和水均仅作实测子账计一次。真实有偿采购（单独或随货付费）的现场组件仅在与整件供货互斥时独立计外部接收/所有者，或以实测组件至组装桥接及配对内部移交抵消核对。装料胶/漆桶按实测装料毛接收与净整份制剂及实际湿态容器皮重核对；不能将装料整件与同一内容物/容器叠加两次。真实独立入流与完整期末湿库存同时保留。

- 选定流：一个供货家具漆空桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为paint_pail_i实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一个供货家具漆空桶 (`paint_pail_er`)

恰为一个供货家具漆空桶的条件性外部退回流入事件：一个完整桶及真实材质、内衬、盖/把手和皮重。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。 整件湿态物品/制剂原有基材、内衬、涂层、胶、五金和水均仅作实测子账计一次。真实单独采购的现场组件仅在与整件供货互斥时独立计外部接收/所有者，或以实测组件至组装桥接及配对内部移交抵消核对。装料胶/漆桶按实测装料毛接收与净整份制剂及实际湿态容器皮重核对；不能将装料整件与同一内容物/容器叠加两次。真实独立入流与完整期末湿库存同时保留。

- 选定流：一个供货家具漆空桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为paint_pail_er实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 实际返还的既往已放行山毛榉框椅 (`service_chair_return`)

一件既往已放行整椅的实际外部实物返还，按当前完整湿态实测，记录真实新增/拆除及原发运/批次关联。保留暂存、损坏、未获准作业、失败和拒收返还事实；记录真实已发生返还不以验收为前提。实际返还状态的原生身份待查：不得复用验收新椅UUID、宣称是如新的成品，或静默改作Waste。实际独立拆出组件或真实废物处置须有自身实际原子交换及相容身份。该实物保管腿不产生新制造、采购、信用、Q或仅按质量反转原负荷。保留完整V_gross及原Q_H/H，分别保留继承制造/服务向量、试验及实际暂存/拒收/处置。内部保管移交仅抵消一次；完整期末湿态成品或互斥维修在制品不得抹除真实入流。

仅有真实证据证明继续作为可复用产品时才采用Product类型。真实废物托运采用实际Waste卡及相容身份；复用/废物去向不明须保留待定，不能强行归Product。不为方向对称虚构事件。制造至服务的内部移交在合并时抵消，不能再次计作外部返还或新供方采购。

- 选定流: 实际返还的既往已放行山毛榉框椅
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: V_gross / Q_H；V_gross为service_chair_return实际完整外部毛腿。此为第8节唯一除法；采用cp_service采集原始值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_service`
- 来源: `jrc-ilcd-attributional-2010`

###### 原批次包装仓储搬运用电 (`service_electricity`)

同一原生低于1千伏用户端电网平均电力，核实真实场址、时间和供方门。仅采集观察期H内真实包装、仓储、搬运和发运增量，包含留库成品和退货；原始Q_H固定。已执行服务不因成品期末留库而递延。不重复制造电表，不假定通用储存时长。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：A_H / Q_H；A_H为归属原批次真实服务向量。这是第8节唯一一次除法；以cp_service采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`jrc-ilcd-attributional-2010`

###### 一个瓦楞椅运输纸箱 (`carton_charge`)

同一一个瓦楞椅运输纸箱的仅负荷伴随记录，不增加第七实物腿或第二次采购。完整P/I/ER/S/EO/W保留在六毛卡，披露不额外引发上游负荷或信用。追踪一次真实供货所有权及归原批次的实际使用/返还/处理负荷；仅真实未用未分配负荷结转，不能因FG留库扣已执行包装/仓储服务。复用件负荷须有真实服务/容量证据，实物毛质量绝不按经济份额缩小。分子A_H为独立正当的同交换单位负荷向量，不是实物毛V。

- 选定流：一个瓦楞椅运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_H / Q_H；A_H为归属原批次真实服务向量。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`

###### 一种聚乙烯椅包裹膜 (`film_charge`)

同一一种聚乙烯椅包裹膜的仅负荷伴随记录，不增加第七实物腿或第二次采购。完整P/I/ER/S/EO/W保留在六毛卡，披露不额外引发上游负荷或信用。追踪一次真实供货所有权及归原批次的实际使用/返还/处理负荷；仅真实未用未分配负荷结转，不能因FG留库扣已执行包装/仓储服务。复用件负荷须有真实服务/容量证据，实物毛质量绝不按经济份额缩小。分子A_H为独立正当的同交换单位负荷向量，不是实物毛V。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_H / Q_H；A_H为归属原批次真实服务向量。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`

###### 一个木制运输托盘 (`pallet_charge`)

同一一个木制运输托盘的仅负荷伴随记录，不增加第七实物腿或第二次采购。完整P/I/ER/S/EO/W保留在六毛卡，披露不额外引发上游负荷或信用。追踪一次真实供货所有权及归原批次的实际使用/返还/处理负荷；仅真实未用未分配负荷结转，不能因FG留库扣已执行包装/仓储服务。复用件负荷须有真实服务/容量证据，实物毛质量绝不按经济份额缩小。分子A_H为独立正当的同交换单位负荷向量，不是实物毛V。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_H / Q_H；A_H为归属原批次真实服务向量。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`

###### 一个供货塑料木胶空桶 (`glue_pail_charge`)

同一一个供货塑料木胶空桶的仅负荷伴随记录，不增加第七实物腿或第二次采购。完整P/I/ER/S/EO/W保留在六毛卡，披露不额外引发上游负荷或信用。追踪一次真实供货所有权及归原批次的实际使用/返还/处理负荷；仅真实未用未分配负荷结转，不能因FG留库扣已执行包装/仓储服务。复用件负荷须有真实服务/容量证据，实物毛质量绝不按经济份额缩小。分子A_H为独立正当的同交换单位负荷向量，不是实物毛V。

- 选定流：一个供货塑料木胶空桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_H / Q_H；A_H为归属原批次真实服务向量。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`

###### 一个供货家具漆空桶 (`paint_pail_charge`)

同一一个供货家具漆空桶的仅负荷伴随记录，不增加第七实物腿或第二次采购。完整P/I/ER/S/EO/W保留在六毛卡，披露不额外引发上游负荷或信用。追踪一次真实供货所有权及归原批次的实际使用/返还/处理负荷；仅真实未用未分配负荷结转，不能因FG留库扣已执行包装/仓储服务。复用件负荷须有真实服务/容量证据，实物毛质量绝不按经济份额缩小。分子A_H为独立正当的同交换单位负荷向量，不是实物毛V。

- 选定流：一个供货家具漆空桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_H / Q_H；A_H为归属原批次真实服务向量。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`

###### 实际单独供货的托盘维修木板 (`pack_repair_wood`)

仅真实单独供货用于托盘维修的木板；记录确切树种、供货加工/处理、含水、污染及实测整份湿态新旧/在装状态。不是整托盘或其已含木板，不默认更换，也不套木材密度换算。 本条件实物卡仅报告原Q_H及观测H下完整实际原生单位毛V_gross，绝非库存修正耗用或负荷/经济份额。真实关联供货/作业/处理负荷独立归属一次，不新增采购、供方或信用。全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流: 实际单独供货的托盘维修木板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为pack_repair_wood实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack_repair采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack_repair`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 实际门服务独立加用自来水 (`service_liquid_water`)

真实成品/包装清洗/调湿/作业中单独供入的经处理饮用标准液态自来水，仅在实际供方/处理与完整原生族相符时使用。参考Mass/kg，次级Volume不是实测密度。供货制剂、装料桶或湿物品已有载水只是子账，不是本卡额外入流。 本条件实物卡仅报告原Q_H及观测H下完整实际原生单位毛V_gross，绝非库存修正耗用或负荷/经济份额。真实关联供货/作业/处理负荷独立归属一次，不新增采购、供方或信用。全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为service_liquid_water实际完整外部毛腿。这是第8节唯一一次除法；以cp_service_water采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service_water`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

##### 基本流

###### 留库成品和包装实际大气H2O水蒸气摄入 (`service_humidity_in`)

普通成品/包装储存搬运或真实作业中独立观测的普通H2O水蒸气吸湿/凝结；自然含水变化无需维修事件或许可。游离/吸附水与结构/反应水及整件供货载水分开。唯一来源过程/事件及非叠加组件子账防止与通风空气毛测量重复。不假设密度、固定湿度或残差拟合。 本条件实物卡仅报告原Q_H及观测H下完整实际原生单位毛V_gross，绝非库存修正耗用或负荷/经济份额。真实关联供货/作业/处理负荷独立归属一次，不新增采购、供方或信用。全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流: 留库成品和包装实际大气H2O水蒸气摄入
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为service_humidity_in实际完整外部毛腿。这是第8节唯一一次除法；以cp_service_water采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service_water`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

#### 输出

##### 产品流

###### 既往已放行完整山毛榉框椅的实际毛发运 (`service_chair_dispatch`)

一件已属于原首次放行批次的完整已制造未软包山毛榉框椅实际向外毛发运，保留当前配置、胶接/涂层适用性及实际验收/处置。仅实际完整椅仍相容时采用原生完整已制造Product族；损坏或后续作业不能推定完整性或恢复。不相容外送组件或实际Waste在数据完成前须有自身具体实际卡，不得删除已观测事件。V_gross为实际当前整椅净湿质量，排除单独清单包装，不能用分配负荷、存量校正耗用或净发运代替。原制造负荷保持一次关联；实际储存/搬运/作业/服务增量仍归原Q_H/H。发运及重复发运不生成新Q或另一制造产出。毛发运与每次实际返还分别核对完整期末成品、损失及物料变化。

- 选定流: 带木制框架的座椅 `5ac0b7a3-ea7c-42cb-b70c-32608f90e4e2`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: V_gross / Q_H；V_gross为service_chair_dispatch实际完整外部毛腿。此为第8节唯一除法；采用cp_service采集原始值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_service`
- 来源: `jrc-ilcd-attributional-2010`

###### 一个瓦楞椅运输纸箱 (`carton_s`)

恰为一个瓦楞椅运输纸箱的条件性随实物毛发运外出事件：纸种/纤维及整箱构造。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。

- 选定流：一个瓦楞椅运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为carton_s实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一个瓦楞椅运输纸箱 (`carton_eo`)

恰为一个瓦楞椅运输纸箱的条件性对外返还外出事件：纸种/纤维及整箱构造。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。

- 选定流：一个瓦楞椅运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为carton_eo实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一种聚乙烯椅包裹膜 (`film_s`)

恰为一种聚乙烯椅包裹膜的条件性随实物毛发运外出事件：PE CAS 9002-88-4、真实支化/厚度及化石/可再生原料。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。 原生虽被归入无关行李分类，物理描述仍为PE薄膜；分类缺陷不提供替代许可。PET或复合层膜不适用。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为film_s实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一种聚乙烯椅包裹膜 (`film_eo`)

恰为一种聚乙烯椅包裹膜的条件性对外返还外出事件：PE CAS 9002-88-4、真实支化/厚度及化石/可再生原料。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。 原生虽被归入无关行李分类，物理描述仍为PE薄膜；分类缺陷不提供替代许可。PET或复合层膜不适用。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为film_eo实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一个木制运输托盘 (`pallet_s`)

恰为一个木制运输托盘的条件性随实物毛发运外出事件：整托盘包含实际钉、树种、含水和处理。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。 宽泛已制造木装载板类别仅限定为本单个可携托盘，不增加围板/箱式托盘或无关家具。声明真实上游供方、处理及返还约定。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为pallet_s实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一个木制运输托盘 (`pallet_eo`)

恰为一个木制运输托盘的条件性对外返还外出事件：整托盘包含实际钉、树种、含水和处理。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。 宽泛已制造木装载板类别仅限定为本单个可携托盘，不增加围板/箱式托盘或无关家具。声明真实上游供方、处理及返还约定。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为pallet_eo实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一个供货塑料木胶空桶 (`glue_pail_s`)

恰为一个供货塑料木胶空桶的条件性随实物毛发运外出事件：一个完整桶及真实聚合物、盖/把手和皮重，不假定HDPE。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。

- 选定流：一个供货塑料木胶空桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为glue_pail_s实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一个供货塑料木胶空桶 (`glue_pail_eo`)

恰为一个供货塑料木胶空桶的条件性对外返还外出事件：一个完整桶及真实聚合物、盖/把手和皮重，不假定HDPE。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。

- 选定流：一个供货塑料木胶空桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为glue_pail_eo实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一个供货家具漆空桶 (`paint_pail_s`)

恰为一个供货家具漆空桶的条件性随实物毛发运外出事件：一个完整桶及真实材质、内衬、盖/把手和皮重。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。

- 选定流：一个供货家具漆空桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为paint_pail_s实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 一个供货家具漆空桶 (`paint_pail_eo`)

恰为一个供货家具漆空桶的条件性对外返还外出事件：一个完整桶及真实材质、内衬、盖/把手和皮重。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。

- 选定流：一个供货家具漆空桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为paint_pail_eo实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

##### 废物流

###### 废一个瓦楞椅运输纸箱 (`carton_w`)

恰为一个瓦楞椅运输纸箱的条件性废弃外出事件：纸种/纤维及整箱构造。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。 本项为已识别污染的真实废弃件，不把产品UUID用于废物身份。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：废一个瓦楞椅运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为carton_w实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 废一种聚乙烯椅包裹膜 (`film_w`)

恰为一种聚乙烯椅包裹膜的条件性废弃外出事件：PE CAS 9002-88-4、真实支化/厚度及化石/可再生原料。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。 原生虽被归入无关行李分类，物理描述仍为PE薄膜；分类缺陷不提供替代许可。PET或复合层膜不适用。 本项为已识别污染的真实废弃件，不把产品UUID用于废物身份。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：废一种聚乙烯椅包裹膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为film_w实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 废一个木制运输托盘 (`pallet_w`)

恰为一个木制运输托盘的条件性废弃外出事件：整托盘包含实际钉、树种、含水和处理。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。 宽泛已制造木装载板类别仅限定为本单个可携托盘，不增加围板/箱式托盘或无关家具。声明真实上游供方、处理及返还约定。 本项为已识别污染的真实废弃件，不把产品UUID用于废物身份。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：废一个木制运输托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为pallet_w实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 废一个供货塑料木胶空桶 (`glue_pail_w`)

恰为一个供货塑料木胶空桶的条件性废弃外出事件：一个完整桶及真实聚合物、盖/把手和皮重，不假定HDPE。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。 本项为已识别污染的真实废弃件，不把产品UUID用于废物身份。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：废一个供货塑料木胶空桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为glue_pail_w实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 废一个供货家具漆空桶 (`paint_pail_w`)

恰为一个供货家具漆空桶的条件性废弃外出事件：一个完整桶及真实材质、内衬、盖/把手和皮重。P/I/ER/S/EO/W各为一个方向/事件，保留实际完整湿态毛腿V及空置、附着WIP/FG、可复用的期初期末存量。同一到货件的P和I为互斥所有权标记；供方已含流入仍保留实物并有一次上游所有权。内部复用抵消，不产生新采购、产品Q、自动共产品或信用。本卡calc_quotient使用V_gross，不作负荷分配或存量校正；真实采购/处理/服务负荷在独立维度归属一次。 本项为已识别污染的真实废弃件，不把产品UUID用于废物身份。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流：废一个供货家具漆空桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为paint_pail_w实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 实际独立拆出的托盘维修废木料 (`pack_removed_wood`)

仅真实独立拆出的木板/边角废料流，按整份湿态Mass/kg计，明确污染/处理/危险性及合格接收方。完整原生废木料明确包括木包装残料；团聚木砖分类与宽泛名称/说明不一致，保留为分类缺陷，不能证明压块、木灰、自动回收或填埋。不是整份混合出口，也不在托盘W内重复相加。 本条件实物卡仅报告原Q_H及观测H下完整实际原生单位毛V_gross，绝非库存修正耗用或负荷/经济份额。真实关联供货/作业/处理负荷独立归属一次，不新增采购、供方或信用。全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流: 废木料 `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为pack_removed_wood实际完整外部毛腿。这是第8节唯一一次除法；以cp_pack_repair采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack_repair`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 实际独立收集的门服务水性废液 (`service_wastewater`)

仅真实独立收集的成品/包装清洗/调湿/作业液态废液，按整份湿质量记录水/固体/胶/涂层及接收处理证据。湿废物/物品内留水不是另一液态出口，COD/TOC不等于具体化学物质量。实际混合流总量与来源子账择一表达，不叠加外送。 本条件实物卡仅报告原Q_H及观测H下完整实际原生单位毛V_gross，绝非库存修正耗用或负荷/经济份额。真实关联供货/作业/处理负荷独立归属一次，不新增采购、供方或信用。全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流: 实际独立收集的门服务水性废液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为service_wastewater实际完整外部毛腿。这是第8节唯一一次除法；以cp_service_water采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service_water`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### 实际废弃的既往已放行山毛榉框椅 (`service_chair_waste`)

真实损坏/拒收的既往已放行椅按实测当前整件/组件/湿态处置，包含真实新增和拆除物。对应原批次Q_H/H及实际接收处理。不是未放行失败椅、完整合格Product、新Q、自动制造反转或恢复。 本条件实物卡仅报告原Q_H及观测H下完整实际原生单位毛V_gross，绝非库存修正耗用或负荷/经济份额。真实关联供货/作业/处理负荷独立归属一次，不新增采购、供方或信用。全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流: 实际废弃的既往已放行山毛榉框椅
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为service_chair_waste实际完整外部毛腿。这是第8节唯一一次除法；以cp_service_waste采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service_waste`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

##### 基本流

###### 留库成品和包装实际释放的H2O水蒸气 (`service_vapour_out`)

普通成品/包装储存搬运或真实作业中实际普通H2O解吸/蒸发，独立测量来源/相态/当前出口。原生CAS7732-18-5、Mass/kg、未指定空气排放；虽别名杂乱，不是液水/冰/重水/氚水。分别记录入口/出口，包装/成品来源子账非叠加且计一次；不假定维修、蒸发率或结构水损失。 本条件实物卡仅报告原Q_H及观测H下完整实际原生单位毛V_gross，绝非库存修正耗用或负荷/经济份额。真实关联供货/作业/处理负荷独立归属一次，不新增采购、供方或信用。全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：V_gross / Q_H；V_gross为service_vapour_out实际完整外部毛腿。这是第8节唯一一次除法；以cp_service_water采集原始量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service_water`
- 来源：`jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

## 7. 分配与共产品处理

以下规则仅用于真实归因多功能情形，制造事实来源不证明分配方法。实物质量、各包装腿及空气/资产毛事件均独立于负荷份额保留完整。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocate_subdivide | actual shared burdens | 先以独立计量专属过程或有证据虚拟细分避免分配。保留交换向量、真实其他功能/批次及匹配过程门；不得给所有行强设一个质量/经济比例。 | `jrc-ilcd-attributional-2010` |
| allocate_causality | remaining shared exchanges | 对各剩余交换识别并证明决定性的物理因果关系。真实容量/时间、木加工去除量、涂装作业及仓储约束须逐交换判断；相关性、质量相等或便利价格不证明因果。 | `jrc-ilcd-attributional-2010` |
| allocate_residual | genuinely residual common process | 仅实际穷尽细分和因果分析后，剩余共同过程负荷才可使用同一门、真实状态下同期有证据市值。披露币种/时间/质量、剩余范围、敏感性及全部功能的守恒。不得任意选择物理/经济分配、固定比例或自动避免产品信用。 | `jrc-ilcd-attributional-2010` |
| allocate_waste | wood residues rejects samples treatment | 普通边角/刨花/粉尘、失败椅、样品及其处理即使外送或出售仍属制造/服务负荷。T_other必须有真实独立功能/批次、正当分配及一次记录的向量移交。实物毛出口不得按该负荷份额缩量。内部复用抵消，不变成新外购。 | `jrc-ilcd-attributional-2010` |

## 8. 前景数据采集、计算与质量规则

协议仅采未归一化原始广延量。“per reference flow”汇总标签表示唯一calc_quotient的最终基准，采集阶段不执行除法。保留完整制造期及真实批次服务观察期，含零产出、所有工况、存量、退回及失败。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | manufacture | 各供货制剂/部件 | 原始记录及独立测量 | 收/领/退; 完整配方/BOM; 树种/来源; 湿质量; 含量; 含水; 原料/WIP期初期末; 继承交换向量; 失败批；row_id；来源过程/事件/工单；实际原批次Q_H/H；原料/在制品/非在制品实物量及每项继承交换向量；已净耗用标记；验收/暂存/拒收/处置 | 经校准整份净/皮重称量及真实供方/生产记录；木含水独立采样；聚合物/载水/固体仅子账，不重复采购。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。 放行后对已有确切供货的真实使用须以独立实际过程/事件及原Q_H/H记录，不作新制造或重复接收；任何不同真实材料/操作在数据完成前须有自身原子行。 | kg; original assay units | 每批/事件; 期初期末盘存; 适用时连续表计 | 完整制造期及真实原批次服务观察期 | 真实场址/供方/工序/批次; 原始单位及全部相关方向 | per reference flow | 称重校准; BOM; 供方路线/来源; 存量核对 |
| cp_release | manufacture | 唯一首次放行Q | 原始记录及独立测量 | 配置; 序号/批; 整椅净千克; 皮重; 含水; 接头/漆许可; 尺寸/稳定/强度/表面试验; 首次放行时间; 暂存/不合格/样品; 期初期末FG谱系 | 使用经校准秤称量同配置每把验收完整椅并排除运输包装；核对首次放行登记及真实制造商/规格试验，不用目录单件质量。 | kg net whole chair; test units | 每批/事件; 期初期末盘存; 适用时连续表计 | 完整制造期及真实原批次服务观察期 | 真实场址/供方/工序/批次; 原始单位及全部相关方向 | per reference flow | 校准; 签署放行; 完整试验法及验收/处置 |
| cp_utility | manufacture | 电力及进厂运输 | 原始记录及独立测量 | 工序/批次; 电表增量; 累计/速率标记; 时段; kWh/MJ; 电压; 地区/时间; 供货边界; 真实载荷/距离/空返 | 读取校准累计表，或对真实速率积分一次；保留真实运输载荷/距离及供方已含所有权，不采每Q用量。 | kWh/MJ; t*km | 每批/事件; 期初期末盘存; 适用时连续表计 | 完整制造期及真实原批次服务观察期 | 真实场址/供方/工序/批次; 原始单位及全部相关方向 | per reference flow | 表计/时序; 电压及供方证明; 运单 |
| cp_water | manufacture | 各水相及载水子账 | 原始记录及独立测量 | 液/汽/吸附/游离/结构/反应来源; 质量/累计体积; 独立密度; 温压; X_in/X_out; 完整湿态期初期末; 返还及处理; 如真实有供方则明确焓边界；row_id；来源过程/事件/工单；实际原批次Q_H/H；原料/在制品/非在制品实物量及每项继承交换向量；已净耗用标记；验收/暂存/拒收/处置 | 逐真实相称量或计量；使用该物质状态独立密度及物种/化学计量证据。载水在整制剂内一次保留；真实新增水期末留存仍保留入流和完整湿存量。不编汽/锅炉或热返还约定。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。 放行后对已有确切供货的真实使用须以独立实际过程/事件及原Q_H/H记录，不作新制造或重复接收；任何不同真实材料/操作在数据完成前须有自身原子行。 | kg per phase; original volume/state units | 每批/事件; 期初期末盘存; 适用时连续表计 | 完整制造期及真实原批次服务观察期 | 真实场址/供方/工序/批次; 原始单位及全部相关方向 | per reference flow | 校准; 独立样品/密度/状态; 供方/处理约定 |
| cp_waste | manufacture | 各真实废物/残留 | 原始记录及独立测量 | 流源及实际物料; 湿毛质量; 水/固体/胶; 污染; 留样; 废物状态; 去向; 处理向量; 任何正当独立功能移交；row_id；真实收集出口/供方标识；实测整份湿总量及各来源独立W原始量；非叠加总量或分区；整件/组件组装及配对移交标识 | 逐真实流分离称量，核对真实处理/接收记录及湿总量与子账；出售不自动扣制造/处理负荷。 整件湿态物品/制剂原有基材、内衬、涂层、胶、五金和水均仅作实测子账计一次。真实单独采购的现场组件仅在与整件供货互斥时独立计外部接收/所有者，或以实测组件至组装桥接及配对内部移交抵消核对。装料胶/漆桶按实测装料毛接收与净整份制剂及实际湿态容器皮重核对；不能将装料整件与同一内容物/容器叠加两次。真实独立入流与完整期末湿库存同时保留。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 | kg wet; original assay units | 每批/事件; 期初期末盘存; 适用时连续表计 | 完整制造期及真实原批次服务观察期 | 真实场址/供方/工序/批次; 原始单位及全部相关方向 | per reference flow | 称重; 废物/接收票据; 处理; 污染检测 |
| cp_asset | manufacture | 各资产/刀具/维修/流体 | 原始记录及独立测量 | 资产/BOM; 新/旧; 毛流入/流出; 完整湿态期初期末/安装/拆除; 附着/流体; 时间/容量; 已用服务及未用未分配负荷; 继承向量; 仅重叠去重X_in/X_out；row_id；来源过程/事件/工单；实际原批次Q_H/H；原料/在制品/非在制品实物量及每项继承交换向量；已净耗用标记；验收/暂存/拒收/处置 | 称量已识别完整资产/材料/流体并核对服务/维修记录，实物毛质量与真实服务负荷分开；无固定寿命、单件质量或每千克一整机。cp_asset亦覆盖门服务设备，并保留原批次。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。 放行后对已有确切供货的真实使用须以独立实际过程/事件及原Q_H/H记录，不作新制造或重复接收；任何不同真实材料/操作在数据完成前须有自身原子行。 | kg per actual article/fluid; real time/capacity units | 每批/事件; 期初期末盘存; 适用时连续表计 | 完整制造期及真实原批次服务观察期 | 真实场址/供方/工序/批次; 原始单位及全部相关方向 | per reference flow | BOM; 秤; 真实容量使用; 维修及负荷谱系 |
| cp_emission | manufacture | 各毛气体及真实排放物种 | 原始记录及独立测量 | 物种/CAS; 真实介质; 碳源; 干湿状态; 进出口毛累计体积或速率/时间; 浓度/检出限; 湿度; 捕集颗粒及不重叠粒级; 独立密度; 不确定度；row_id；来源过程/事件/工单；实际原批次Q_H/H；原料/在制品/非在制品实物量及每项继承交换向量；已净耗用标记；验收/暂存/拒收/处置 | 使用有代表性的校准物种分析和状态/体积/浓度配套测量；保留完整N2/O2/Ar/CO2/H2O毛腿并另列真实净环境信息。不重复整空气；未测/未检出/零不同。真实额外分子各自新增，不以VOC/COD冒物种。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。 放行后对已有确切供货的真实使用须以独立实际过程/事件及原Q_H/H记录，不作新制造或重复接收；任何不同真实材料/操作在数据完成前须有自身原子行。 | kg each actual species/particulate; original instrument units | 每批/事件; 期初期末盘存; 适用时连续表计 | 完整制造期及真实原批次服务观察期 | 真实场址/供方/工序/批次; 原始单位及全部相关方向 | per reference flow | 采样/物种/校准; 状态; 检出限; 完整方法 |
| cp_pack | gate_service | 每种包材一个六腿账 | 原始记录及独立测量 | 材质及整件; O; P; I; ER; C; S; EO; W; 空置/附着WIP/FG/复用; 完整含水; 上游所有权; 真实毛实物发运; 原批次; 仅重叠去重X_in/X_out；row_id；真实收集出口/供方标识；实测整份湿总量及各来源独立W原始量；非叠加总量或分区；整件/组件组装及配对移交标识 ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 称量每个完整湿外部事件及期初期末整件存量；同到货P/I只有一次所有权，保留外部退回ER；内部复用抵消。各卡采用完整V，不是分配负荷或扣存量用量。真实额外包材须新增六卡。 整件湿态物品/制剂原有基材、内衬、涂层、胶、五金和水均仅作实测子账计一次。真实有偿采购（单独或随货付费）的现场组件仅在与整件供货互斥时独立计外部接收/所有者，或以实测组件至组装桥接及配对内部移交抵消核对。装料胶/漆桶按实测装料毛接收与净整份制剂及实际湿态容器皮重核对；不能将装料整件与同一内容物/容器叠加两次。真实独立入流与完整期末湿库存同时保留。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg per named whole wet packaging article | 每批/事件; 期初期末盘存; 适用时连续表计 | 完整制造期及真实原批次服务观察期 | 真实场址/供方/工序/批次; 原始单位及全部相关方向 | per reference flow | 秤/皮重; 供方已含证明; 六腿; 发运/返还/废弃票据 |
| cp_service | gate_service | 真实原批次服务 | 原始记录及独立测量 | H; 原始Q_H; 观察期; FG期初期末历史; 毛发运/退回; 原交付关联; 真实增量; 后处理许可/试验/验收/处置; 未用未分配服务；row_id；来源过程/事件/工单；实际原批次Q_H/H；原料/在制品/非在制品实物量及每项继承交换向量；已净耗用标记；验收/暂存/拒收/处置 | 保留有时间戳仓储/包装/搬运/发运及真实获准后处理日志，匹配电表及批次谱系。已执行服务即使FG留库仍归原Q_H。不推定净交付分母或仅凭退货质量逆转原负荷。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。 放行后对已有确切供货的真实使用须以独立实际过程/事件及原Q_H/H记录，不作新制造或重复接收；任何不同真实材料/操作在数据完成前须有自身原子行。 | original extensive units; physical FG kg; time | 每批/事件; 期初期末盘存; 适用时连续表计 | 完整制造期及真实原批次服务观察期 | 真实场址/供方/工序/批次; 原始单位及全部相关方向 | per reference flow | 服务表; 原放行; 作业许可; 作业后试验; 处置 |
| cp_service_waste | gate_service | service_chair_waste | 原始记录及独立测量 | row_id；来源过程/事件；期间；原Q_H/H；实际入/出毛V、kg；完整湿态成品/维修在制品/材料保管库存；实际新旧材料；独立液/汽/游离/吸附/结构相证据；原测量单位/校准/皮重与换算证据；普通湿气与真实作业分开；作业许可/结果/暂存/处置；唯一实物事件和唯一负荷所有者；真实出口及独立非叠加来源；不确定性 | 按kg及独立物质/相态/状态证据测量本确切真实实物事件，同时保留新增入流与完整期末湿库存。普通储存湿气无需作业许可。每事件计一次，另保留可归属负荷，采集中不除产品分母。全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。 整件湿态物品/制剂原有基材、内衬、涂层、胶、五金和水均仅作实测子账计一次。真实单独采购的现场组件仅在与整件供货互斥时独立计外部接收/所有者，或以实测组件至组装桥接及配对内部移交抵消核对。装料胶/漆桶按实测装料毛接收与净整份制剂及实际湿态容器皮重核对；不能将装料整件与同一内容物/容器叠加两次。真实独立入流与完整期末湿库存同时保留。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 | kg | 每批/事件; 期初期末盘存; 适用时连续表计 | 完整制造期及真实原批次服务观察期 | 真实场址/供方/工序/批次; 原始单位及全部相关方向 | per reference flow | 秤/皮重; 供方已含证明; 六腿; 发运/返还/废弃票据 |
| cp_service_water | gate_service | service_liquid_water; service_humidity_in; service_wastewater; service_vapour_out | 原始记录及独立测量 | row_id；来源过程/事件；期间；原Q_H/H；实际入/出毛V、kg；完整湿态成品/维修在制品/材料保管库存；实际新旧材料；独立液/汽/游离/吸附/结构相证据；原测量单位/校准/皮重与换算证据；普通湿气与真实作业分开；作业许可/结果/暂存/处置；唯一实物事件和唯一负荷所有者；真实出口及独立非叠加来源；不确定性 | 按kg及独立物质/相态/状态证据测量本确切真实实物事件，同时保留新增入流与完整期末湿库存。普通储存湿气无需作业许可。每事件计一次，另保留可归属负荷，采集中不除产品分母。全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。 整件湿态物品/制剂原有基材、内衬、涂层、胶、五金和水均仅作实测子账计一次。真实单独采购的现场组件仅在与整件供货互斥时独立计外部接收/所有者，或以实测组件至组装桥接及配对内部移交抵消核对。装料胶/漆桶按实测装料毛接收与净整份制剂及实际湿态容器皮重核对；不能将装料整件与同一内容物/容器叠加两次。真实独立入流与完整期末湿库存同时保留。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 | kg | 每批/事件; 期初期末盘存; 适用时连续表计 | 完整制造期及真实原批次服务观察期 | 真实场址/供方/工序/批次; 原始单位及全部相关方向 | per reference flow | 秤/皮重; 供方已含证明; 六腿; 发运/返还/废弃票据 |
| cp_pack_repair | gate_service | pack_repair_wood; pack_removed_wood | 原始记录及独立测量 | row_id；来源过程/事件；期间；原Q_H/H；实际入/出毛V、kg；完整湿态成品/维修在制品/材料保管库存；实际新旧材料；独立液/汽/游离/吸附/结构相证据；原测量单位/校准/皮重与换算证据；普通湿气与真实作业分开；作业许可/结果/暂存/处置；唯一实物事件和唯一负荷所有者；真实出口及独立非叠加来源；不确定性 | 按kg及独立物质/相态/状态证据测量本确切真实实物事件，同时保留新增入流与完整期末湿库存。普通储存湿气无需作业许可。每事件计一次，另保留可归属负荷，采集中不除产品分母。全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。 整件湿态物品/制剂原有基材、内衬、涂层、胶、五金和水均仅作实测子账计一次。真实单独采购的现场组件仅在与整件供货互斥时独立计外部接收/所有者，或以实测组件至组装桥接及配对内部移交抵消核对。装料胶/漆桶按实测装料毛接收与净整份制剂及实际湿态容器皮重核对；不能将装料整件与同一内容物/容器叠加两次。真实独立入流与完整期末湿库存同时保留。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 | kg | 每批/事件; 期初期末盘存; 适用时连续表计 | 完整制造期及真实原批次服务观察期 | 真实场址/供方/工序/批次; 原始单位及全部相关方向 | per reference flow | 秤/皮重; 供方已含证明; 六腿; 发运/返还/废弃票据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | raw extensive observations | 分配前将原始观测转为真实广延量单位。积分体积已累计，仅真实速率使用sum(rate×interval)。电力1 kWh=3.6 MJ。密度为该物料/状态独立实测，次级系数和目录单件值不建立千克换算。 | raw observations; state; independent density; explicit units | converted raw quantities |  |
| calc_q | finished_chair | Q=sum(唯一新增首次质量放行完整椅净千克)，在已声明含水/配置下实测。期末FG为Q一部分，不是另一输出或制造B_close。Q=0保留真实负荷，不产生单位结果。 | cp_release | Q | `a2s-chair-catalogue` |
| calc_manufacturing | manufacturing burden dimensions only | A=B_open+U_new-B_close-T_other，为真实分配后同交换单位向量。B存量含原料/WIP/未用未分配负荷，不含首次放行FG。纳入全部失败/Q0/启停/空转/清洗/试验/重工负荷。T_other须真实独立功能/批次及正当一次向量移交，不是普通废物出售。内部交接抵消，已扣存量用量不得再扣。 | converted vectors; inherited raw/WIP stores; allocation evidence | A | `jrc-ilcd-attributional-2010` |
| calc_asset | actual asset/tool/fluid burden dimension only | 以实测服务、容量/时间及正当分配，将实际已用服务/耗材负荷归制造或原服务批次；仅未用未分配负荷结转一次。新旧件毛流入/拆除和完整湿期末存量另保留为实物V。已含油/零件只有一次所有权；磨耗出口和留存零件核对避免重复。无固定寿命或每千克一整机假设。 | cp_asset; inherited charge; actual use; allocation decision | actual asset burden within A or A_H; gross V separately | `jrc-ilcd-attributional-2010` |
| calc_service | actual original-cohort burden dimensions only | A_H=在观察期内归原批次H的真实已执行服务向量，原始Q_H固定。保留完整FG历史、真实增量、损失及仅获准并有试验/处置的后处理。仅未用未分配服务可扣一次，不因FG仍在库扣已执行服务。 全部真实已发生作业（含未获准/未经批准、失败或拒收操作）的实际材料/水/能源/排放/废物/保管及负荷均保留。许可、配置适用作业后试验和验收仅控制授权、继续合格及实际暂存/拒收/处置，不能抹除真实事件或推定恢复、新Q或新路线。实际放行后作业采用原Q_H及观测H，成品留库也保留；未观测未来作业仍未知。维修留置成品与维修在制品保管状态互斥。 | cp_service; cp_pack; actual utility/asset increments | A_H; Q_H | `jrc-ilcd-attributional-2010` |
| calc_physical | each physical material/species and packaging/asset event | 期初+外部流入=期末+外部流出，物理转化须有独立证据。包装逐件O+P+I+ER+F_in-X_in=C+S+EO+W+F_out-X_out。F_in/F_out为独立实测的额外真实材料/水流入与拆出，包括实际维修新增/拆除及普通吸湿/释湿；它们须有独立原子来源事件记录，不能作为平衡残差。X_in/X_out仅扣除同一侧另一流入/流出流量项已表示的、经证实的重复数量，须有配对流项/事件ID及独立实测重叠量。不得扣期初/期末存量、相反侧流量、期末留存的新增入流，也不能仅因存在清单卡而扣量。同侧另一流项不存在重复时X为零。每张毛流卡V保持原值，记录非叠加替代表达之间的对账。实物新增流入与完整期末湿质量均保留。各包装/资产/空气毛卡分子V_gross为实际完整外部腿。披露毛V不引发经济缩量、负荷向量扣除、重复存量校正、新采购/信用或第二个Q。 整件湿态物品/制剂原有基材、内衬、涂层、胶、五金和水均仅作实测子账计一次。真实有偿采购（单独或随货付费）的现场组件仅在与整件供货互斥时独立计外部接收/所有者，或以实测组件至组装桥接及配对内部移交抵消核对。装料胶/漆桶按实测装料毛接收与净整份制剂及实际湿态容器皮重核对；不能将装料整件与同一内容物/容器叠加两次。真实独立入流与完整期末湿库存同时保留。 一个真实物理收集混合废物出口须选择一个相容整份混合物Waste交换及一次真实处理/供方记录。各来源独立实测W原始量须守恒总量并记录不确定性；整份总量或分区为非叠加择一表达。此时来源Waste卡及其处理伴随卡仅为来源/负荷分区子账，不能虚构分离出口或重复供方收费。真实独立流保留正确独立身份和处理。不能将纯木屑或漆废物身份套给不相容混合物；仅该出口真实存在时在数据完成前新增/重选实际具体混合物。 | cp_material; cp_water; cp_waste; cp_pack; cp_asset; cp_emission | gross V; independent closure and residuals |  |
| calc_quotient | all inventory rows except fixed finished_chair | 制造负荷维度q=A/Q，真实原批次服务负荷维度q_H=A_H/Q_H；包装/资产/空气毛实物卡在制造事件q_gross=V_gross/Q，在服务事件为V_gross/Q_H。V_gross是实测完整真实外部腿，绝非负荷向量、扣存量用量或经济份额。原始转换及相应分子准备后仅执行这一次除法，卡片和协议汇总引用同一次计算，不增加除法。Q=0或Q_H=0保留原始负荷/毛腿而无单位结果；合并将内部Q抵消一次，保留相容制造/服务维度。 实际Waste毛腿及独立实测门服务新增/拆除材料和液/汽水实物事件也采用V_gross/Q_H（制造则Q），不是A/A_H、库存修正或经济份额。真实关联供方/处理/服务负荷有一个独立所有者；报告毛腿不新增采购/供方或信用。 | A; Q; A_H; Q_H; V_gross; event/cohort direction | q; q_H; q_gross |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | every flow and provider | 核查完整原生类别/类型/形态/路线/CAS/地理/介质及全部属性单位限制，以及真实供货制剂/BOM。UUID身份不批准供方、牌号或性能。具体数据集交换使用前须解决普通辅助身份；核心整椅身份或真实路线缺口不得靠检查掩盖。 | 完整原生记录; 供方规格; 路线/BOM证据 |
| dq_period | manufacture and original cohort service | 覆盖全部失败/零产出/试验/启停/空转/清洗、原料/WIP和FG谱系、真实服务期及退回/后处理处置。未知、未测、未检出和证实零值分别保留；不编数量或套来源配方。 | 完整时序; 盘存; 放行及服务日志 |
| dq_evidence | each rule and conversion | 保留完整适用主源上下文、相邻替代、独立分配方法、单位/状态/校准及抽样/不确定度。工业文献为定性路线证据；手册室内饰面段不提供工厂家具涂装配方。双语限定、行、规则、来源顺序及完整说明须一致。 | 完整原件上下文; 来源适用性; 校准; 完整双语审计 |

## 9. 校验规则

每项规则须连同适用范围、完整祖先/来源上下文、§§5/7及原始/计算规则阅读。这些是未来数据包要求，未决物理或科学问题不能报告通过。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_terminal | reference object and finished_chair | 要求完整新制未软包山毛榉框架椅、已声明成型座背及真实适用胶/漆、完整BOM和制造商试验。裸架/座板、未完总成、成椅重包或不相容类别不能通过。UUID/类型/属性/单位链及完整原生限制必须匹配。 | `a2s-chair-catalogue`; `konar-chair-joinery` |
| validate_q | all measurement relationships | 要求仅一个1千克finished_chair参考输出及双语同基准；核实实测首次放行Q、完整含水/配置，不重复Q+期末FG，不因FG留存扣已执行服务。逐原分子广延量核实真实换算、一次除法及零分母处理。 | `usda-wood-handbook-2021` |
| validate_gross | packaging air water and assets | 要求每种真实包材六方向卡及完整O/P/I/ER/C/S/EO/W闭合；各毛卡用完整V，不用分配/扣存量负荷。核实供方已含入流和一次所有权、完整湿入流及完整期末质量、原子气体/相态/物种、真实资产/维修/在装流体存量及独立服务负荷。不得残差拟合多未知。 | `jrc-ilcd-attributional-2010`; `usda-wood-handbook-2021` |
| validate_allocation | every allocation/other-function transfer | 先核实真实专属/虚拟细分，再逐交换决定性因果，最后仅真实剩余使用同门/状态同期市值证据。废物出售本身不转移负荷。各功能之和须等于真实向量，毛实物腿不缩量。 | `jrc-ilcd-attributional-2010` |
| validate_postwork | actual post-release work and returns | 要求原批次谱系、制造商/规格许可、真实新增输入/损失、后处理试验、验收及处置。重检/退回不是新增Q；不得假定退回质量等于原交付或足以逆转原负荷。净交付不属于本声明分母。 | `jrc-ilcd-attributional-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 已声明完整椅制造及单独识别的真实原批次工厂门服务 |
| excluded_use | 通用家具/座椅等效; 使用寿命; 认证性能; 未复核其他路线; 零负荷供货锯材或自动信用 |
| required_metadata | 全部§3限定、首次放行批次及真实H期、原生/供方限制、原单位及完整上游/存量/所有权谱系 |
| required_quality_disclosure | 抽样/不确定度、缺口及未决辅助/供方、试验/处置、来源综合限制、真实分配、完整检查及跳过/未知范围 |
| update_trigger | 产品/BOM/树种/供货门/胶漆路线变化、真实新原子/供方、试验/验收或存量/分配证据变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-38112 | official_guidance | UNSD CPC Version 3.0 38112 — https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/38112 | 仅分类层级/标题，不提供制造或分配规则 |
| a2s-chair-catalogue | handbook | A2S, Our products, complete English catalogue, PDF pp.28–29 (printed pp.26–27) — https://a2s.com/PDF%20Printmedien/Englisch_EN/A2S_EN_catalog_our_products.pdf | 7097整椅终端和成型山毛榉多层板座背、实木架、胶/榫/螺钉连接及水性漆；相邻软包/其他框架配置排除，不采用目录质量或认证性能默认值 |
| cegim-beech-production | literature | CEGIM manufacturer, solid beech furniture production — https://cegim.ro/en/ | 工业干山毛榉、CNC/铣削/砂光、压合装配和水性涂装顺序；混合家具/软包产品组合不是本椅BOM或当代工厂数据集 |
| konar-chair-joinery | literature | KONAR manufacturer, Wooden chair frames — https://konar-meble.pl/en/wooden-chair-frames-manufacturer/ | 硬木机加工和胶接榫卯；完整木椅与软包裸架区分，不提供归因分配证据 |
| kleiberit-pvac-303 | handbook | KLEIBERIT 303.0 technical data sheet, version 08:05:2026, complete 2 pp. — https://www.kleiberit.com/fileadmin/Content_new/Produktinformationen/303.0/dbe3030_KSE.pdf | 整份即用PVAc分散胶、单组分硬木/榫接冷胶合选择及水清洗；保留双组分硬化剂替代和材料依赖，不采用涂量/压力/时间/密度或认证默认值 |
| adler-unistar-2965 | handbook | ADLER Bluefin Unistar 2965, TDS 4-0 IMC 2965 09/26, complete 5 pp. — https://www.adler-lacke.com/Canto/tmb/bluefin-unistar_tmb_2965_en.pdf | 整份水性透明家具漆、工业无气喷涂选择、基材准备/层间砂光/干燥/清洗；保留正常应力单组分与高应力双组分范围区别，不采用配方/涂量/能量/排放/时间或试验阈值默认值 |
| usda-wood-handbook-2021 | handbook | USDA FPL, Wood handbook—wood as an engineering material, FPL-GTR-282 (2021), ch.4, 10 and limitations in ch.16 — https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | 干基含水定义、木/胶物理区分和供方适用确认；室内饰面段明确未覆盖工厂家具涂装，不采用生材范围或通用排放/密度因子 |
| jrc-ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD General guide—Detailed guidance, first ed. March 2010, §7.9.2–7.9.3, PDF pp.275–288 — https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因细分/虚拟细分、逐交换决定性物理因果及真实剩余过程门市值、服务约束；不是木椅配方或默认负荷移交 |
