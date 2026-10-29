---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.unreinforced-vibropressed-concrete-paving-blocks
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 单层未配筋振压混凝土铺块制造

## 1. 范围与适用性

本归因型方法覆盖一个声明牌号的完整单层未配筋混凝土铺块：从未制成铺块的实际来料开始，经过半干法混合与振动压实、实际受控养护、脱板搬运、规定的机械修边、检测及唯一首次质量放行。纳入全部制造、控制、失败、样品、启停、空转、清理、真实返工和资产服务。原批次包装、仓储、搬运、发运和退回在观测期 H 内另行记录。具体数据集声明场址与地理；下列电力身份仅适用于中国用户侧 1–35 kV 电网供电。这是原始工业路线及产品证据的透明技术综合，并非同一工厂配方或同一当代 SKU、订单的证明。

排除湿态预拌混凝土、水泥及熟料、天然石、烧成陶瓷铺地品、高树脂人造石、配筋制品、加气或高压蒸养制品、湿浇大板、独立面层、专门 CO2 养护制品及安装后的路面系统。终端为未涂层、未密封的整体同料铺块。实际存在的整体矿物颜料和一份适配的完整外加剂供货制剂分别登记。实际水洗、喷丸、抛光、涂层、新胶结料或骨料化学组成以及其他养护路线，均须重新判断适用性并增加全部真实原子交换，不能藏在零值或未指定残项内。采购已制成铺块后的包装不能代替制造。

Masa 区分有面层和无面层制品、养护区通风以及可选表面处理；CMHA 独立描述水泥和骨料混合物通过压力与振动成形。Marshalls EPD 提供整体同料半干法案例及独立包装阶段。其废物可忽略、用水回收、加热频率、平均产品、单位面积质量、厚度缩放、寿命和下游碳化均为案例条件，不构成本方法默认值；其质量或体积分配表也不是本 PCR 的分配规则。符合性由真实产品规范和放行证据确定，不给出默认水灰比、坍落度、压力、振动程序、温度、养护时间、水化率、密度、强度、尺寸、寿命或 CO2 抵扣。 `masa-concrete-block-production`; `marshalls-through-mix-2023`; `cmha-pav-tec-010`

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.unreinforced-vibropressed-concrete-paving-blocks |
| classification_refs | CPC 3.0 37540；narrower；当前接受关系及决定以`classifications/mappings/cpc-3.0-to-pcr.yaml`及其引用ADR为准，不表示整类覆盖或科学/翻译批准 |
| covered_products | 一个声明整体同料牌号的完整裸品、单层未配筋振压养护混凝土铺块 |
| excluded_products | 排除湿态预拌混凝土、水泥及熟料、天然石、烧成陶瓷铺地品、高树脂人造石、配筋制品、加气或高压蒸养制品、湿浇大板、独立面层、专门 CO2 养护制品及安装后的路面系统。终端为未涂层、未密封的整体同料铺块。实际存在的整体矿物颜料和一份适配的完整外加剂供货制剂分别登记。实际水洗、喷丸、抛光、涂层、新胶结料或骨料化学组成以及其他养护路线，均须重新判断适用性并增加全部真实原子交换，不能藏在零值或未指定残项内。采购已制成铺块后的包装不能代替制造。 |
| representative_product | 唯一首次质量放行的未安装混凝土铺块 |
| production_route | 真实非成品供货 → 制备混合 → 振压 → 受控养护 → 必要机械修边及检验 → 首次放行 |
| market_state | 完整硬化裸单元，无涂层或独立面层；净参考量不含包材 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 声明完整混凝土铺块的制造；声明单位不代表安装路面的功能等效 |
| How much | 1 m2 |
| How well | 首次放行符合实际规范图纸、牌号及必要试验；原生高强度路面砖族以真实结果限定，不设通用阈值 |
| How long or cycle | 一个声明制造批次及报告期，另有原批次服务观测期 H，不假定寿命 |
| reference_flow_link | `accepted_paver` |

| Field | Value |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 砖块 `24c495b7-b9f4-4187-93ea-327a9e6f1037` |
| 参考流属性 | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` |
| 参考单位组 | 面积单位组 `93a60a57-a3c8-18da-a746-0800200c9a66` |
| 参考单位 | m2 |
| 必需限定信息 | 声明的整体同料牌号及铺地用途; 水泥胶结料及实际骨料矿物组成和粒级; 未配筋且无独立面层; 实际颜料及完整外加剂制剂; 半干法成形路线及机器配置; 实际养护温湿度及时间记录; 后整状态及未施加涂层; 对应图纸的实际单面投影几何; 首次放行裸产品净质量及留存水状态; 试验方法和规范及批次验收; 唯一首次放行批次账 Q_c; 期初期末原料与养护在制品逐交换历史; 原批次 Q_H 及实际服务观测期 H; 实物发运退回及原交付引用; 供货形态和包装所有权及实际地理; 原生身份限制及供应数据适配性 |

在具体数据集元数据、参考流备注、过程说明或等效字段声明全部必需限定信息。本表须与 accepted_paver 完整卡及祖先语境共同读取；完整原生混凝土身份限定孤立分类瑕疵。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_area | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Q_c 为唯一首次放行裸成品实际单面投影面积之和。使用经校准的尺寸测量和可追溯的对应设计图纸；仅在已证实矩形时用 L × W。排除单元间铺缝，不用包围矩形、双面或安装路面面积；输出行严格为 1 m2。 |
| one_normalization | all inventory rows | native extensive property | row-specific | 采集未经归一化的原始记录；先换算原单位与真实速率，归属批次并对账，再且仅再执行一次 normalize_once。卡片与采集汇总引用该结果。Q_c 包含新放行批次的期末成品，不是净交付量；服务行使用原批次 Q_H。Q=0 保留真实负荷而不生成单位结果。 |
| moisture_and_mass | material and bare-product mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用经校准衡器及有记录的取样测定净湿态或收到态物料与裸铺块质量。自由水、吸附水及化学或结构结合水用适宜试验和相态证据分别确定。完整湿态库存和真实新增入流同时保留。单位面积质量须对应同图纸、厚度、批次、含水与放行龄期；原生次级因子、假定单件质量或密度不能代替换算。 |
| electricity_conversion | m_electricity; s_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留原生广延能量属性。用 3.6 MJ/kWh 将实测 kWh 换成 MJ，不将电能解释为实测燃料热值。核实中国 1–35 kV 电网平均供电，并声明变压器与供应边界。 |
| volume_state | m_gas; m_hydraulic | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 保留原生 Volume。天然气声明压力、温度、组成及干湿基；液压油声明温度和配方。已积分体积不再乘时间；真实速率只积分一次。质量换算采用该物质独立实测密度，燃料热量采用真实低位热值，不能由原生次级系数推出。 |
| carrier_heat | m_purchased_heat; m_steam; m_condensate; m_return_water; m_heat_carrier_water; s_heat_carrier_water | actual heat and carrier mass | MJ; kg | 不虚构蒸汽、锅炉或换热回路。真实使用时，外购热只计一次，蒸汽载体质量、品质和焓、对外返回凝结水或换热水以及供方水能所有权分别记录。不得重复计算整份热供应数据和其燃料或蒸汽子账。 对真实外部载体/返回腿m_steam、m_heat_carrier_water、s_heat_carrier_water、m_condensate、m_return_water，A_e表示以该原生行单位独立实测的完整实物毛量V_e，不是分配负担向量、净耗用、库存差或经济份额。制造腿以Q_c、服务腿以观察H内关联原始Q_H，仅对V_e应用normalize_once一次。入流与返回的绝对毛量分别保留，即使两者数值相同；真实温度、压力、相态/品质、焓与交付热MJ独立测量。同一约定水/热供应方仅承担一次供应负荷，此物理载体/返回不是再次整份采购、外送抵扣或假定锅炉/回路。只对OTHER同侧其他物理流中同一真实流项/事件去重；不与库存、对侧流或仅已存在的卡抵消。尚未列出的真实返回在使用前须另建并核实其实际原子卡，不预设返回或工艺必有。 |
| species_balance | all elementary rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 物理总质量及相关 C/H/O/Ca/N/S 元素平衡，与真实物种或相态证据独立。水化和碳化分别确定，一个残差不能拟合两个未知量。以 NO2 当量表示的 NOx、COD、VOC、总碳和 PM 粒径段是指标，不证明特定化学物种。不得在已计入的空气物种之上再加空气总量。 |
| asset_service | m_vibropress; m_mould; m_board; s_forklift | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 完整配置资产质量由校准称重或可追溯适配制造商记录确定。实物采购、在装存量、退役和维修，与分配的隐含服务向量分开。只允许有证据的服务或能力分配，不设固定寿命，不按每 kg 或 m2 计一整机。未知服务能力保留为具体数据集缺口。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际整份水泥粉、湿法水洗中砂、天然圆砾粗骨料、水及每份真实制剂和公用工程供货门 |
| starting_condition_role | 完整从摇篮至首次放行制造，另列已观测原批次服务 |
| product_classification_scope | CPC 3.0:37540 较窄的单层未配筋振压混凝土铺块 |
| recursive_input_rule | 外部再生混凝土骨料或铺块来源料须独立适配上游投入和真实转化；内部返回只抵消一次并继承向量，不能以采购成品铺块递归代替制造。 |
| upstream_dataset_requirement | 匹配真实材质形态路线、供方地理时段及完整供货；不将整份供应数据与重复成分或能量供应并用。 |
| disclosure | 批次、真实湿态相态、完整物理及负荷历史、Q_c/Q_H/H、毛退回、包材六腿、资本服务、缺口及分配 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | product system | 纳入每份完整供货材料、燃料、水和包材的上游生产及实际来料运输；前景包括接收制备、混合、成形、养护、全部必要后整、试验和控制至首次放行，随后另纳入所有已执行的原批次服务。前景从实际供货水泥、骨料和完整制剂开始，不能从采购成品铺块开始。 | `masa-concrete-block-production`; `marshalls-through-mix-2023`; `cmha-pav-tec-010` |
| boundary_supplies | purchased formulations | 整份外购水泥、颜料制剂、外加剂或脱模制剂只跨边界一次，保留供应商随货包装及唯一上游所有者。化验成分、载水和活性固体为组成子账，不是重复采购。真实厂内配制须逐项列外购成分及真实混合能耗、损失。未列而实际存在的流应逐一新增原子卡，不能藏在零值或其他材料总项中。 | `cmha-pav-tec-010`; `marshalls-through-mix-2023` |
| boundary_first_release | manufacturing cohorts | Q_c 在真实养护、后整和检验后的首次规定质量放行时每件只登记一次。新放行的期末成品已含在 Q_c 内，不再作为第二次产出加入，也不扣其制造负荷。复验、仓储、发运、退回和出售都不形成新产量；尚未放行的养护库存为在制品，保留完整逐交换继承历史。 | `masa-concrete-block-production`; `marshalls-through-mix-2023` |
| boundary_burden_stocks | manufacturing inventory vectors | 每个交换 e 与批次 c 对账 A_m,e = B_open,e + X_owned,e + T_in,e - B_close,e - T_other,e。B_open/B_close 仅含原料、未放行在制品及真正未使用或未分派的库存、服务费用，不含已放行成品。X_owned 含唯一归属的真实运营负荷与入流。保留失败、零产出、启停、空转、清理、返工及废物处理负荷。普通不合格、样品、外售废物和处置不能产生 T_other；只有真实独立的其他批次或功能及正当分配或负荷交接，才允许一次向量转移。已扣库存的消耗记录不能再次扣库存。 | `jrc-ilcd-2010` |
| boundary_service | original released cohorts | 服务使用观测期 H 内真实增量工作 A_s,e 和原批次首次放行面积 Q_H。仍留库存的成品已享受服务也须计入；仅真正未使用或未分派的服务、费用可结转。历史制造和已执行服务向量、实物发运 G、退回 R 与原交付冲销 D_rev 分开保留；水分、损失、损坏或真实返工使退回质量不必等于原交付质量。本首次放行方法不用 G-R 替代 Q。净交付数据集另须经审查的完整期初期末成品历史负荷及原交付冲销桥接。 | `jrc-ilcd-2010`; `marshalls-through-mix-2023` |
| boundary_physical | manufacturing FG and combined physical gates | 制造物理门将完整湿态期初库存加全部真实毛入流材料、水、燃料、大气物种、维修和资产，与完整湿态期末库存、唯一新 Q 裸品质量、全部真实废物、样品、不合格、排放、返回、退役资产流出及在装资产变化对账。成品账另以期初加首次放行和实物退回，对应期末加毛发运、真实废物和转移。合并物理门只抵消同一内部首次放行或其他内部转移。物理毛流腿不按负荷份额缩量。水和维修 X_in/X_out 仅对同一其他入流或出流项去重；新增量即使留在期末湿库存，也同时保留真实入流与完整期末质量。 在所列库存等式中，M_open/M_close 排除已由 delta_installed 表示的在装资产本体及内含流体，另存其完整湿态在装存量账。成品库存属成品门，原料及在制品属制造门，合并各计一次。 | `jrc-ilcd-2010` |
| boundary_rework | unreleased and released rework | 逐次追踪返工阶段、原批次、状态、新增材料、水、能耗、排放、损失、检验与去向。放行后作业须有制造商或规范允许以及作业后检验、验收和处置。不假定破损水硬材料单元可恢复原功能；不合格品破碎成骨料不形成另一件验收铺块，也不自动抵扣。 独立记录真实新增及移出的各项新旧材料、零件和自由水、载水、吸收水、结构水、反应水相。维修滞留成品只记为有标识的成品子状态或互斥维修在制品，不同时属于两者。追溯真实制造商/规格许可、工作后试验、验收或拒收及最终去向；不假定破损、硬化或返湿铺块的状态或可恢复性，任何工作均不新增Q。 制造商/规范许可与工作后试验仅决定授权、持续合格及验收/拒收/处置资格。所有真实已执行的未授权、未批准、失败或拒收作业及其全部材料/部件/水/能耗、排放、损失、废物和负荷均须独立记录，并归属正确原始Q_c或Q_H/H，即使未获许可或试验失败也不删除。这不授权该作业，也不假定破损水硬性材料恢复原功能，不新增Q。 | `masa-concrete-block-production`; `cmha-pav-tec-010` |
| boundary_packaging | each packaging article | 每一种材料或包材单独对账：期初空包材 + 期初附着在制品或成品 + 期初可重复使用包材 + P + I + ER + X_in = 期末空包材 + 期末附着在制品或成品 + 期末可重复使用包材 + S + EO + W + X_out。P 为有偿采购（单独或随货付费），I 为首次非采购外部入流，ER 为外部退回收到，S 为随实物毛发运带出，EO 为其他对外返回或输出，W 为废物。P/I 整件及其上游所有者只计一次，内部复用抵消。六腿只对相同的其他物理入流或出流去重；新增包材留在期末仍是真实入流。包材不进入裸品 Q，不随每次复用重复采购，也不自动成为共产品。  独立称量真实维修材料和水增减，X只补其他同方向流项未表示的物料，绝不与期初期末存量抵消。完整湿态P/I制品接收只计一次且上游只归属一次；真实留存流入与完整湿态期末质量同时保留。 完整湿态制品接收已一次包含其整体木材/紧固件/涂层及所含水。现场另加部件或水仅在与整件接收互斥时作为独立真实入流；保留制品/组分桥与成对内部交接，合并时不得同时相加整件装配皮重及其同一组分。若实际只有一个混合包材废物出口，逐来源材料独立实测W并保留非叠加原始来源子账，核对sum(origin W)等于实测混合总量，使用一个已核实的实际Waste交换及处理所有者。总量或其互斥分项二选一，不同时叠加。材料W卡仅在实物真正分流时才是独立出口；否则只作该来源子账，不虚构分离出口。仅在真实发生该出口时新增并核实单一混收出口卡，不预设混收必有。  每次真实P/I/ER接收均按packaging_receipt_basis区分。| `marshalls-through-mix-2023`; `jrc-ilcd-2010` |
| packaging_receipt_basis | each packaging receipt | 对每个真实包装制品，将每次完整外部接收且仅接收一次归类。P为有偿采购，包括虽无单独发票但已随其他供货付费的包装。I为全部首次非采购外部入流，包括单独赠与、借用、租赁或周转池接收，以及未采购的供方随附包装；随附仅是I的子集。ER必须是本场所先前已向外发出、且能以同一制品或可审计同构型批次匹配原外发记录的真实退回；仅有保管权或他方使用史不证明退回。P、I、ER互斥。已有I卡及其原始协议按相同物理制品覆盖这些I来源，不预设新材料、UUID或数量。X_in/X_out仍仅为互斥的材料或水变化项，不能代替整制品接收。保留毛实物量、所有者/保管者、付费或非采购依据、来源、所需原外发链接、原生状态单位和继承的制造/服务向量。非采购不等于新制造或自动零负荷：实际已用服务和新增运输搬运按正确原批群及其分母归属一次，未用服务另留，不设默认寿命或抵扣。这是声明的守恒前景核算实现，不声称引用原文规定这些变量名称。 | `jrc-ilcd-2010` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| mix_form | 接收制备、混合与振压 | required | 真实非成品来料及完整半干法成形路线 | 接收制备、混合与振压 | 服务为 H 内原 Q_H；制造为 Q_c |
| cure_release | 养护、搬运、后整与首次放行 | required | 从未放行养护在制品至必要检验和唯一验收 | 养护、搬运、后整与首次放行 | 服务为 H 内原 Q_H；制造为 Q_c |
| manufacturing_controls | 制造公用工程、控制、清理与资产服务 | required | 全部真实制造支持活动，包括零产出时段 | 制造公用工程、控制、清理与资产服务 | 服务为 H 内原 Q_H；制造为 Q_c |
| cohort_services | 原批次包装、仓储、发运及退回 | required | 以原首次放行面积 Q_H 对应独立服务观测期 H | 原批次包装、仓储、发运及退回 | 服务为 H 内原 Q_H；制造为 Q_c |

全部卡为原子交换。真实不存在须有依据，未测量不能作零。声明真实路线需要时逐一增加真实流。采集保留原始分子、真实毛物理流腿和历史，卡片数量是 normalize_once 的唯一归一化清单贡献。物理毛账不按分配缩放。成形养护间内部物料及回收水粉尘按逐交换继承向量对账，仅合并时抵消。

### 过程：接收制备、混合与振压 (`mix_form`)

真实非成品来料及完整半干法成形路线. 每行须共同读取边界、计量、分配及链接采集语境；服务记录保留原 Q_H 与 H。

#### 输入

##### 产品流

###### 硅酸盐水泥粉 (`cement`)

工厂供货的整份灰色水硬性硅酸盐水泥粉；原生 OPC/I 型产品族。核实实际标准、牌号、组成与供应方；排除熟料块，不能再重复加入其中熟料或石膏。随货包材另行保留。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：水泥，硅酸盐水泥 `3c9e98a5-0a1e-4a18-9545-1475a87fcab7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_raw`
- 来源：`masa-concrete-block-production`; `cmha-pav-tec-010`

###### 水洗中砂 (`washed_sand`)

一份采用湿法制砂及粗中砂水洗路线的供货砂粒级，与原生路线相符；将实际中砂部分作为细骨料。原生宽泛名称不允许同时打包计入砾石。记录粒级、矿物组成、收到态含水及湿质量，不假定二氧化硅纯度或干态换算。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 原生locationOfSupply为CN-HN-CSX；须按此限制核对真实供给地点、交付与供应边界。实际供给地不同时须重选相容原生身份/供应方，不把该身份改称全球供给。

- 选定流：砂石（产品砂） `ade95caf-2a0c-4fc3-8aa9-14ac536502da`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_raw`
- 来源：`masa-concrete-block-production`; `cmha-pav-tec-010`

###### 天然圆砾粗骨料 (`coarse_gravel`)

一份天然、或多或少圆形的粗砾石供货；原生描述为粗于砂且通常大于 2 mm。不能代表细砂行、其他固定粒级碎石或土壤修复场地砾石。采用供应数据前核实实际粒级、矿物组成、含水和铺块适配性。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：砂砾 `73f1241c-e77d-4e9e-b290-e755a40acf81`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_raw`
- 来源：`masa-concrete-block-production`; `cmha-pav-tec-010`

###### 聚羧酸系水性减水制剂 (`admixture`)

仅在实际采购一份聚羧酸系水性混凝土减水制剂时使用；原生减水剂族物理相容，但不认证该配方或场址性能。整份供货制剂仅采购一次；活性聚合物、载水及防腐剂为化验子账。其他独立采购化学品须另列。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：减水剂 `d13b6302-2c5a-4d75-a18b-020b61e7ca60`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_raw`
- 来源：`masa-concrete-block-production`; `cmha-pav-tec-010`

###### 红色三氧化二铁混凝土颜料粉 (`pigment`)

仅在实际使用一份红色三氧化二铁颜料粉时使用。原生氧化铁颜料族明确用于混凝土并涵盖多种氧化物色彩；核实实际 Fe2O3 相态、化验与粉体形态，不能套用金属提取用矿石、树脂分散液或假定通用着色配方。外购混合制剂为另一完整配方，须另设适配卡。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：氧化铁颜料 `6a04e79b-6699-4502-8fde-188df47058c3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_raw`
- 来源：`masa-concrete-block-production`; `cmha-pav-tec-010`

###### 拌合水 (`mix_water`)

计量实际加入混合物的经处理工业工艺水。水留在湿在制品内不能取消其入流；整份外加剂或湿砂已含的水仅作组成子账。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`masa-concrete-block-production`; `cmha-pav-tec-010`

###### 搅拌机清洗水 (`clean_water`)

计量混合成形清理实际使用的经处理工艺水，含失败和零产出批次；分别追踪回收、蒸发及外送含水废物。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`masa-concrete-block-production`; `cmha-pav-tec-010`

#### 输出

##### 废物流

###### 新拌混凝土成形废料 (`green_reject`)

一股实际未放行的新拌混凝土成形废料，按湿态实测，另列自由或结合水及组成子账。内部回用物理抵消并仅继承一次历史；外售或处置不移除普通制造负荷。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：新拌混凝土成形废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`masa-concrete-block-production`; `cmha-pav-tec-010`

### 过程：养护、搬运、后整与首次放行 (`cure_release`)

从未放行养护在制品至必要检验和唯一验收. 每行须共同读取边界、计量、分配及链接采集语境；服务记录保留原 Q_H 与 H。

#### 输入

##### 产品流

###### 养护补加水 (`curing_water`)

记录真实养护系统的经处理工艺补水，与拌合留存水、环境湿气、内部凝结水及并未供给的蒸汽分开；追踪温度、相态和全部真实对外返回或排放腿。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`masa-concrete-block-production`; `cmha-pav-tec-010`

#### 输出

##### 产品流

###### 首次放行完整裸铺块 (`accepted_paver`)

原生“砖块”明确为水泥、砂砾及水制成的混凝土路面砖或高强度砖，工厂生产混合供货，唯一参考属性为 Area；未声明固定几何、CAS、地理或单件质量。其 37310 陶瓷或硅质土分类是孤立分类瑕疵，本次不沿用；有限采用依据完整混凝土材质和用途描述。仅限已声明的完整裸品、单层未配筋振压且实际养护，并通过必要后整与检验的铺块。不能替代湿预拌混凝土、熟料、天然石、烧成陶瓷、高树脂人造石、附加面层或安装路面。同批期末成品在 Q_c 内只计一次。  原生高强度路面砖描述要求真实声明的铺筑等级及制造商规格/试验证据与其相容，不提供普适强度阈值或寿命。保留已声明单面净投影约定，不改为安装路面面积。  声明单一投影平面及实测净轮廓，包含联锁形状并扣除真实孔洞/切口。排除安装接缝/间隙、相邻单元及双面或所有表面积累加。L*W仅用于经核实无开口的实心矩形；EPD尺寸、厚度、密度或质量/面积系数不构成实测换算。

- 选定流：砖块 `24c495b7-b9f4-4187-93ea-327a9e6f1037`
- 流属性/单位：Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：1 m2
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：`masa-concrete-block-production`; `marshalls-through-mix-2023`; `cmha-pav-tec-010`

###### 向供方返回的液态凝结水 (`m_condensate`)

仅在真实对外 Product 返回时列示。测量质量、温度及相对于声明基准的焓，明确供方水能所有权及对向流。内部凝结或循环不构成外部交换；不预设蒸汽或水回路。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 对真实外部载体/返回腿m_steam、m_heat_carrier_water、s_heat_carrier_water、m_condensate、m_return_water，A_e表示以该原生行单位独立实测的完整实物毛量V_e，不是分配负担向量、净耗用、库存差或经济份额。制造腿以Q_c、服务腿以观察H内关联原始Q_H，仅对V_e应用normalize_once一次。入流与返回的绝对毛量分别保留，即使两者数值相同；真实温度、压力、相态/品质、焓与交付热MJ独立测量。同一约定水/热供应方仅承担一次供应负荷，此物理载体/返回不是再次整份采购、外送抵扣或假定锅炉/回路。只对OTHER同侧其他物理流中同一真实流项/事件去重；不与库存、对侧流或仅已存在的卡抵消。尚未列出的真实返回在使用前须另建并核实其实际原子卡，不预设返回或工艺必有。

- 选定流：向供方返回的液态凝结水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`marshalls-through-mix-2023`

###### 向供方返回的液态换热水 (`m_return_water`)

仅在真实对外 Product 返回时列示。测量质量、温度及相对于声明基准的焓，明确供方水能所有权及对向流。内部凝结或循环不构成外部交换；不预设蒸汽或水回路。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 对真实外部载体/返回腿m_steam、m_heat_carrier_water、s_heat_carrier_water、m_condensate、m_return_water，A_e表示以该原生行单位独立实测的完整实物毛量V_e，不是分配负担向量、净耗用、库存差或经济份额。制造腿以Q_c、服务腿以观察H内关联原始Q_H，仅对V_e应用normalize_once一次。入流与返回的绝对毛量分别保留，即使两者数值相同；真实温度、压力、相态/品质、焓与交付热MJ独立测量。同一约定水/热供应方仅承担一次供应负荷，此物理载体/返回不是再次整份采购、外送抵扣或假定锅炉/回路。只对OTHER同侧其他物理流中同一真实流项/事件去重；不与库存、对侧流或仅已存在的卡抵消。尚未列出的真实返回在使用前须另建并核实其实际原子卡，不预设返回或工艺必有。

- 选定流：向供方返回的液态换热水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`marshalls-through-mix-2023`

##### 废物流

###### 养护后不合格混凝土铺块 (`broken_paver`)

记录真实破损、不合格养护单元及破坏性样品的裸品净湿质量和去向，不假定破损水硬体可安全恢复，也不因出售自动扣负荷。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：养护后不合格混凝土铺块
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`masa-concrete-block-production`; `cmha-pav-tec-010`

###### 混凝土养护后整污泥 (`curing_slurry`)

一股真实清理或机械修边产生的混凝土湿污泥，包括真实已执行的未授权、失败或拒收作业；分别保留固体、液体和化验，完整湿质量及处理所有权，不从 COD 或质量残差推出化学组成。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 制造商/规范许可与工作后试验仅决定授权、持续合格及验收/拒收/处置资格。所有真实已执行的未授权、未批准、失败或拒收作业及其全部材料/部件/水/能耗、排放、损失、废物和负荷均须独立记录，并归属正确原始Q_c或Q_H/H，即使未获许可或试验失败也不删除。这不授权该作业，也不假定破损水硬性材料恢复原功能，不新增Q。

- 选定流：混凝土养护后整污泥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`masa-concrete-block-production`; `cmha-pav-tec-010`

### 过程：制造公用工程、控制、清理与资产服务 (`manufacturing_controls`)

全部真实制造支持活动，包括零产出时段. 每行须共同读取边界、计量、分配及链接采集语境；服务记录保留原 Q_H 与 H。

#### 输入

##### 产品流

###### 制造电网电力 (`m_electricity`)

仅限中国用户侧 1–35 kV 电网平均交流电。以真实电表记录混合成形、养护通风、搬运、检验、除尘、清理和空转。原生能量属性不表示燃料实测热值；kWh 只按 3.6 换算一次，并核实实际供方和时段电源组合。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`masa-concrete-block-production`; `marshalls-through-mix-2023`

###### 气态天然气 (`m_gas`)

仅限实际经压缩、管道输送至消费端的气态天然气，原生甲烷 CAS 74-82-8，参考属性 Volume。核实组成和状态；不能代替 LNG、瓶装 LPG 或通用燃气能量因子。纳入真实存在的养护辅助加热或产热及真实排放。 候选固定甲烷 CAS 74-82-8，但实际管道供货配方或组成尚未确立，因此不绑定；仍保留单一具体气态天然气交换及 Volume/m3，采用真实状态组成而不假定化学等同。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：气态天然气
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`masa-concrete-block-production`; `marshalls-through-mix-2023`

###### 制造移动设备柴油 (`m_diesel`)

一份真实柴油供货，按原生 Mass 计量。原生未限定牌号、调和或生物含量、密度、低位热值、炼制路线、地理及供方，均须采集；不能推定纯化合物 CAS 或默认热值。装载机、叉车运输及空转燃料只计一次。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`masa-concrete-block-production`; `marshalls-through-mix-2023`

###### 液压油充填与补加 (`m_hydraulic`)

一份完整配方液压油，原生为矿物或合成基础油加添加剂，参考属性 Volume。核实真实配方和温度；逐项记录真实新充填、补加、旧液流出及完整期末在装流体，原生质量系数不是实际密度。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`masa-concrete-block-production`; `marshalls-through-mix-2023`

###### 矿物机械润滑油 (`m_lubricant`)

仅在实际使用一份石油来源润滑油制剂时列示。已读 PAO 合成记录不符，另一记录固定 40.5 MJ/kg 而缺前景确认，两者均不采用。新油、留存在装油和废油分开，化验组成和水不重复作为产品。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：矿物机械润滑油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`masa-concrete-block-production`; `marshalls-through-mix-2023`

###### 矿物油混凝土脱模制剂 (`m_release_oil`)

仅在实际施用一份矿物油混凝土脱模制剂时列示；整份供货一次计入，记录真实飞散、带出和废物；仅真实厂内配制才增列独立采购组分。VOC 总量不是化学物种。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：矿物油混凝土脱模制剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`masa-concrete-block-production`; `marshalls-through-mix-2023`

###### 外购热水供热 (`m_purchased_heat`)

仅在真实外购热传递时列示；按实际质量、温度、焓及供方约定记录交付热量，不能假定某天然气热记录适用。不得再重复采购整份燃料或蒸汽供应；热水载体质量和返回腿保持明确。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：外购热水供热
- 流属性/单位：Energy / MJ
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`masa-concrete-block-production`; `marshalls-through-mix-2023`

###### 外购水蒸汽 (`m_steam`)

仅列真实外部蒸汽。已读 11 MPaG 化学工业蒸汽记录不能证明本养护供货，故不采用。采集真实载体质量、压力、温度、干度、焓、返回及水热所有权，避免再计整份能量供应。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 对真实外部载体/返回腿m_steam、m_heat_carrier_water、s_heat_carrier_water、m_condensate、m_return_water，A_e表示以该原生行单位独立实测的完整实物毛量V_e，不是分配负担向量、净耗用、库存差或经济份额。制造腿以Q_c、服务腿以观察H内关联原始Q_H，仅对V_e应用normalize_once一次。入流与返回的绝对毛量分别保留，即使两者数值相同；真实温度、压力、相态/品质、焓与交付热MJ独立测量。同一约定水/热供应方仅承担一次供应负荷，此物理载体/返回不是再次整份采购、外送抵扣或假定锅炉/回路。只对OTHER同侧其他物理流中同一真实流项/事件去重；不与库存、对侧流或仅已存在的卡抵消。尚未列出的真实返回在使用前须另建并核实其实际原子卡，不预设返回或工艺必有。

- 选定流：外购水蒸汽
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`masa-concrete-block-production`; `marshalls-through-mix-2023`

###### 钢制搅拌机耐磨板 (`m_wear_plate`)

一件真实钢制更换耐磨板，记录图纸、合金、交付加工及实测质量；不能是泛金属集合或其他固定板厚。保留新件入流、旧件拆出及完整期末在装件质量。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：钢制搅拌机耐磨板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`masa-concrete-block-production`; `marshalls-through-mix-2023`

###### 聚酯除尘滤袋 (`m_filter`)

一件真实供货聚酯除尘滤袋，核实材质和结构；安装、更换、捕集粉尘及处置分开，不能用聚合物树脂冒充已制滤袋。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：聚酯除尘滤袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`masa-concrete-block-production`; `marshalls-through-mix-2023`

###### 配置混凝土铺块振压机 (`m_vibropress`)

一件配置明确的实物资产。保留完整实测净质量、真实制造或购入边界、期初在用及期末存量、维修和退役。清单贡献仅为有证据归属的隐含服务，不设固定寿命，也不按每单位产品计整项资产；实际毛购入与移除量不缩放。真实新旧零件和在装流体另列。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：配置混凝土铺块振压机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`masa-concrete-block-production`; `jrc-ilcd-2010`

###### 钢制混凝土铺块模具 (`m_mould`)

一件配置明确的实物资产。保留完整实测净质量、真实制造或购入边界、期初在用及期末存量、维修和退役。清单贡献仅为有证据归属的隐含服务，不设固定寿命，也不按每单位产品计整项资产；实际毛购入与移除量不缩放。真实新旧零件和在装流体另列。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：钢制混凝土铺块模具
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`masa-concrete-block-production`; `jrc-ilcd-2010`

###### 钢制混凝土生产托板 (`m_board`)

一件配置明确的实物资产。保留完整实测净质量、真实制造或购入边界、期初在用及期末存量、维修和退役。清单贡献仅为有证据归属的隐含服务，不设固定寿命，也不按每单位产品计整项资产；实际毛购入与移除量不缩放。真实新旧零件和在装流体另列。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：钢制混凝土生产托板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`masa-concrete-block-production`; `jrc-ilcd-2010`

###### 外购热水载体 (`m_heat_carrier_water`)

仅列实际外部热水载体，保留完整质量、温度、水所有权及配对返回。只与已归属完整供货内的同一水入流项去重，不能因真实新增量留在期末就取消入流。热 MJ 与水 kg 是不同物理或核算量。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 对真实外部载体/返回腿m_steam、m_heat_carrier_water、s_heat_carrier_water、m_condensate、m_return_water，A_e表示以该原生行单位独立实测的完整实物毛量V_e，不是分配负担向量、净耗用、库存差或经济份额。制造腿以Q_c、服务腿以观察H内关联原始Q_H，仅对V_e应用normalize_once一次。入流与返回的绝对毛量分别保留，即使两者数值相同；真实温度、压力、相态/品质、焓与交付热MJ独立测量。同一约定水/热供应方仅承担一次供应负荷，此物理载体/返回不是再次整份采购、外送抵扣或假定锅炉/回路。只对OTHER同侧其他物理流中同一真实流项/事件去重；不与库存、对侧流或仅已存在的卡抵消。尚未列出的真实返回在使用前须另建并核实其实际原子卡，不预设返回或工艺必有。

- 选定流：外购热水载体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`jrc-ilcd-2010`

##### 基本流

###### 大气氧气取入 (`m_oxygen_in`)

原生 O2 CAS 7782-44-7，空气中可再生元素资源。仅用于真实大气取入，不是外购压缩氧；记录毛 O2，不再叠加整份空气质量。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`jrc-ilcd-2010`

###### 大气氮气取入 (`m_nitrogen_in`)

原生 N2 CAS 7727-37-9，空气中可再生元素资源；实际取入、NO 或 NO2 形成及排气 N2 分开，不用总氮指标替代。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`jrc-ilcd-2010`

###### 大气氩气取入 (`m_argon_in`)

仅按实际独立量化的大气 Ar 记录物理平衡，不重复空气总量。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。  该条件身份由普通分子规范名/CAS、真实相态及精确原生类别正面限定，离子、同位素、HNO或N2O4噪声别名不改写物种。核实实际物种、接收介质和gross气态数量，不以汇总NOx、总氮、同位素水或液态/结合水替代；不提供因子或默认空气比例。 原生仅为取自空气的可更新元素资源身份，不是外购压缩气或反用排放。须为真实普通氩CAS 7440-37-1并有实测空气组成。

- 选定流：氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`jrc-ilcd-2010`

###### 大气水蒸气取入 (`m_humidity_in`)

按实测气态条件记录真实湿气取入，不能用水蒸气排放 UUID 或供方工艺水替代。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：大气水蒸气取入
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`jrc-ilcd-2010`

###### 大气二氧化碳取入 (`m_co2_in`)

真实大气 CO2 取入或吸收须有独立碳及物种测量。不能绑定仅化石源输入或延迟排放修正流，不能假定碳化或自动抵扣。通风穿流与真实留存分开，保留全部毛流腿。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：大气二氧化碳取入
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`jrc-ilcd-2010`

###### 进入真实库存的液态雨水 (`m_rain_water`)

仅在真实雨水进入暴露原料、在制品、成品或包材时列示，须独立的真实湿态库存或收集证据，不设默认雨水捕集比例。期末留存仍保留真实入流，不在外购水或大气湿气中重复。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：进入真实库存的液态雨水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`jrc-ilcd-2010`

#### 输出

##### 废物流

###### 混凝土配料捕集粉尘 (`m_dust_cake`)

一股真实废物流，独立测量整份湿质量、组成、来源、去向及处理所有权。旧零件本体、水和留存流体另建子账但不重复计量。不能替代为渔船废油、已处理回收来料、机加工废料或其他固定路线废物 UUID；单纯外送或出售不能扣普通制造或处理负荷。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：混凝土配料捕集粉尘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### 混凝土设备清洗废水 (`m_washwater`)

一股真实废物流，独立测量整份湿质量、组成、来源、去向及处理所有权。旧零件本体、水和留存流体另建子账但不重复计量。不能替代为渔船废油、已处理回收来料、机加工废料或其他固定路线废物 UUID；单纯外送或出售不能扣普通制造或处理负荷。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：混凝土设备清洗废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### 废矿物机械润滑油 (`m_used_oil`)

一股真实废物流，独立测量整份湿质量、组成、来源、去向及处理所有权。旧零件本体、水和留存流体另建子账但不重复计量。不能替代为渔船废油、已处理回收来料、机加工废料或其他固定路线废物 UUID；单纯外送或出售不能扣普通制造或处理负荷。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：废矿物机械润滑油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### 废液压油 (`m_used_hydraulic`)

一股真实废物流，独立测量整份湿质量、组成、来源、去向及处理所有权。旧零件本体、水和留存流体另建子账但不重复计量。不能替代为渔船废油、已处理回收来料、机加工废料或其他固定路线废物 UUID；单纯外送或出售不能扣普通制造或处理负荷。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：废液压油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### 拆出的钢制搅拌机耐磨板 (`m_old_plate`)

一股真实废物流，独立测量整份湿质量、组成、来源、去向及处理所有权。旧零件本体、水和留存流体另建子账但不重复计量。不能替代为渔船废油、已处理回收来料、机加工废料或其他固定路线废物 UUID；单纯外送或出售不能扣普通制造或处理负荷。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：拆出的钢制搅拌机耐磨板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### 废聚酯除尘滤袋 (`m_spent_filter`)

一股真实废物流，独立测量整份湿质量、组成、来源、去向及处理所有权。旧零件本体、水和留存流体另建子账但不重复计量。不能替代为渔船废油、已处理回收来料、机加工废料或其他固定路线废物 UUID；单纯外送或出售不能扣普通制造或处理负荷。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：废聚酯除尘滤袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### 废油滤芯 (`m_oil_filter`)

一股真实废物流，独立测量整份湿质量、组成、来源、去向及处理所有权。旧零件本体、水和留存流体另建子账但不重复计量。不能替代为渔船废油、已处理回收来料、机加工废料或其他固定路线废物 UUID；单纯外送或出售不能扣普通制造或处理负荷。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：废油滤芯
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### 退役完整混凝土铺块振压机 (`m_retired_vibropress`)

一件真实退役的完整资产，逐项追踪湿态或净本体质量、旧零件和内含流体。实物毛移除量不等于剩余隐含负荷；真实作为独立产品或功能继续复用时，须另有适配 Product 交换及一次正当负荷交接，不能自动抵扣。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：退役完整混凝土铺块振压机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`jrc-ilcd-2010`

###### 退役钢制铺块模具 (`m_retired_mould`)

一件真实退役的完整资产，逐项追踪湿态或净本体质量、旧零件和内含流体。实物毛移除量不等于剩余隐含负荷；真实作为独立产品或功能继续复用时，须另有适配 Product 交换及一次正当负荷交接，不能自动抵扣。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：退役钢制铺块模具
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`jrc-ilcd-2010`

###### 退役钢制生产托板 (`m_retired_board`)

一件真实退役的完整资产，逐项追踪湿态或净本体质量、旧零件和内含流体。实物毛移除量不等于剩余隐含负荷；真实作为独立产品或功能继续复用时，须另有适配 Product 交换及一次正当负荷交接，不能自动抵扣。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：退役钢制生产托板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`jrc-ilcd-2010`

##### 基本流

###### 化石源二氧化碳排入空气 (`m_co2`)

原生 CAS 124-38-9，化石源 CO2，空气未指定环境排放，不是长期、室内或高烟囱专用记录。采用实际化石燃烧及物种记录；上游水泥已承担的煅烧排放不能在本厂再次排出。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### 化石源一氧化碳排入空气 (`m_co`)

原生 CAS 630-08-0，化石源 CO，仅限空气未指定环境排放；需真实物种、计量基准与化石归属，不能把总碳当 CO。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### 一氧化氮排入空气 (`m_no`)

原生 CAS 10102-43-9，NO，空气未指定环境排放。不相关同义词字符串不改变主身份 NO，但必须有真实 NO 测量；以 NO2 当量报送的 NOx 不能直接填入。 仍须采集本卡明确的真实物种及相态。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。  该条件身份由普通分子规范名/CAS、真实相态及精确原生类别正面限定，离子、同位素、HNO或N2O4噪声别名不改写物种。核实实际物种、接收介质和gross气态数量，不以汇总NOx、总氮、同位素水或液态/结合水替代；不提供因子或默认空气比例。 原生仅为空气未指定、非长期Elementary排放。须披露真实尚未确定的空气子介质；接收子介质已知后选择相应相容身份，不替代室内、高空、长期、水/土壤或外购气体。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### 二氧化氮排入空气 (`m_no2`)

原生 CAS 10102-44-0，NO2，空气未指定环境排放。同义词含四氧化二氮措辞；仅按主名及 CAS 的 NO2 身份并有真实物种测量采用，不用于 N2O4、N2O 或未分物种 NOx 当量。 仍须采集本卡明确的真实物种及相态。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。  该条件身份由普通分子规范名/CAS、真实相态及精确原生类别正面限定，离子、同位素、HNO或N2O4噪声别名不改写物种。核实实际物种、接收介质和gross气态数量，不以汇总NOx、总氮、同位素水或液态/结合水替代；不提供因子或默认空气比例。 原生仅为空气未指定、非长期Elementary排放。须披露真实尚未确定的空气子介质；接收子介质已知后选择相应相容身份，不替代室内、高空、长期、水/土壤或外购气体。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### 二氧化硫排入空气 (`m_so2`)

原生 CAS 7446-09-5，SO2，空气未指定环境排放。确认真实 SO2，不能用硫氧化物总量、含硫量或水土排放替代，也不设燃料默认系数。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### 水蒸气排入空气 (`m_water_vapour`)

原生 CAS 7732-18-5，水蒸气，空气未指定环境排放。真实汽相与结合水、液态雾滴及内部凝结水独立确定；仅纳入归属范围内真实蒸发或燃烧水。 仍须采集本卡明确的真实物种及相态。 物理毛汽相输出也保留独立测得的大气湿气穿流，并与新蒸发或生成水分开，避免重复空气总量。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。  该条件身份由普通分子规范名/CAS、真实相态及精确原生类别正面限定，离子、同位素、HNO或N2O4噪声别名不改写物种。核实实际物种、接收介质和gross气态数量，不以汇总NOx、总氮、同位素水或液态/结合水替代；不提供因子或默认空气比例。 原生仅为空气未指定、非长期Elementary排放。须披露真实尚未确定的空气子介质；接收子介质已知后选择相应相容身份，不替代室内、高空、长期、水/土壤或外购气体。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### 气态氧气排入空气 (`m_oxygen_out`)

实际排气 O2 质量，不能将已读空气资源 UUID 用作排放；保留过量空气及独立实测气体组成，不能用同时拟合水及碳化来推出氧气。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。  该条件身份由普通分子规范名/CAS、真实相态及精确原生类别正面限定，离子、同位素、HNO或N2O4噪声别名不改写物种。核实实际物种、接收介质和gross气态数量，不以汇总NOx、总氮、同位素水或液态/结合水替代；不提供因子或默认空气比例。 原生仅为空气未指定、非长期Elementary排放。须披露真实尚未确定的空气子介质；接收子介质已知后选择相应相容身份，不替代室内、高空、长期、水/土壤或外购气体。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### 气态氮气排入空气 (`m_nitrogen_out`)

真实排气 N2 质量。单独保留毛 N2，不再加空气总量。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。  该条件身份由普通分子规范名/CAS、真实相态及精确原生类别正面限定，离子、同位素、HNO或N2O4噪声别名不改写物种。核实实际物种、接收介质和gross气态数量，不以汇总NOx、总氮、同位素水或液态/结合水替代；不提供因子或默认空气比例。 原生仅为空气未指定、非长期Elementary排放。须披露真实尚未确定的空气子介质；接收子介质已知后选择相应相容身份，不替代室内、高空、长期、水/土壤或外购气体。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### 气态氩气排入空气 (`m_argon_out`)

实测空气平衡中真实存在的排气氩，不用共同残差拟合缺失气体；其质量不能再计入空气集合流。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。  该条件身份由普通分子规范名/CAS、真实相态及精确原生类别正面限定，离子、同位素、HNO或N2O4噪声别名不改写物种。核实实际物种、接收介质和gross气态数量，不以汇总NOx、总氮、同位素水或液态/结合水替代；不提供因子或默认空气比例。 原生仅为空气未指定、非长期Elementary排放。须披露真实尚未确定的空气子介质；接收子介质已知后选择相应相容身份，不替代室内、高空、长期、水/土壤或外购气体。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### 空气中小于 2.5 um 的矿物颗粒物 (`m_pm_small`)

控制设施后实测的不重叠空气动力粒径段；物理粒径段不能证明某化学物种。滤器捕集粉尘另作废物，不能再叠加 PM10 总量。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：空气中小于 2.5 um 的矿物颗粒物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### 空气中 2.5 至 10 um 的矿物颗粒物 (`m_pm_mid`)

真实不重叠粒径段质量及实测组成、介质；不能由粒径质量推出二氧化硅、NOx、VOC 或其他物种。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：空气中 2.5 至 10 um 的矿物颗粒物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### 空气中大于 10 um 的矿物颗粒物 (`m_pm_large`)

真实不重叠的粗粒空气矿物颗粒质量；查到的 PM10 流不能代表 >10 um。保留真实除尘效率证据而不设默认因子。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：空气中大于 10 um 的矿物颗粒物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`epa-concrete-batching-2012`; `jrc-ilcd-2010`

###### 大气来源二氧化碳穿流排入空气 (`m_ambient_co2_out`)

真实大气来源 CO2 随通风或排气离开，与新生化石燃烧 CO2 及独立证实的留存分开。不重复记入化石 CO2 行，不用共同残差推碳化，也不用延迟排放或抵扣流；保留真实气态条件与接收空气介质。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：大气来源二氧化碳穿流排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`jrc-ilcd-2010`

###### 向河流释放的液态水 (`m_liquid_water_to_river`)

仅在真实直接向已核实河流介质释放液态水时列示，独立测量水质量状态，并分别证实每种真实溶质或物种。不能代替外送废水处理交接或内部返回；同门完整湿废水及其载水不能重复计量。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：向河流释放的液态水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`jrc-ilcd-2010`

### 过程：原批次包装、仓储、发运及退回 (`cohort_services`)

以原首次放行面积 Q_H 对应独立服务观测期 H. 每行须共同读取边界、计量、分配及链接采集语境；服务记录保留原 Q_H 与 H。

#### 输入

##### 产品流

###### 木运输托盘 (`s_wood_pallet`)

本P卡记录这一相同物理制品的有偿采购，含单独或随货付费；首次非采购接收及真实退回分别用I和ER。一件真实已制造、供机械载荷搬运的完整木托盘。原生成品族明确说明完整可移动平台，也含箱式平台/围板，本卡仅选真实托盘，不是散锯材木板/木条或围板。核实木材、结构、紧固件、处理、皮重、真实供方及新旧复用归属，不默认EURO尺寸、单件质量或寿命。六个独立包装实物方向及完整湿态附着/空置/周转存量均保留，上游只归属一次。  本原输入卡只记录另行采购P；供方已含I、外退接收ER、随毛发运S及对外退回EO另有互斥卡，原废物输出为W。这些均为真实未分配gross实物方向，不使复用形成新采购或改称已分配服务负荷。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### 低密度聚乙烯保护罩 (`s_ldpe_hood`)

本P卡记录这一相同物理制品的有偿采购，含单独或随货付费；首次非采购接收及真实退回分别用I和ER。一件实际 PE-LD 薄膜罩，原生为已制薄膜且参考属性 Mass，不是 PE 树脂或 PET。核实薄膜牌号、厚度及真实收缩过程；登记六物理腿及全部附着或空置库存，真实收缩热归已执行服务。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。  本原输入卡只记录另行采购P；供方已含I、外退接收ER、随毛发运S及对外退回EO另有互斥卡，原废物输出为W。这些均为真实未分配gross实物方向，不使复用形成新采购或改称已分配服务负荷。 保留原生薄膜形态：非自粘、非泡沫，未增强、未层压、未衬托或与其他材料类似组合。自粘、泡沫、增强或多层复合罩须用各自相容身份；不推定膜厚、热缩温度或供货整件质量。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### 聚丙烯捆扎带 (`s_pp_strap`)

本P卡记录这一相同物理制品的有偿采购，含单独或随货付费；首次非采购接收及真实退回分别用I和ER。一条实际已制 PP 捆扎带。查到的 PP 树脂、切片、纱线及混合包材不能证明已制带，均不绑定。核实聚合物、尺寸及材料质量，并对账六腿及附着库存。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。  本原输入卡只记录另行采购P；供方已含I、外退接收ER、随毛发运S及对外退回EO另有互斥卡，原废物输出为W。这些均为真实未分配gross实物方向，不使复用形成新采购或改称已分配服务负荷。

- 选定流：聚丙烯捆扎带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### 牛皮纸层间隔片 (`s_kraft_sheet`)

本P卡记录这一相同物理制品的有偿采购，含单独或随货付费；首次非采购接收及真实退回分别用I和ER。一张真实牛皮纸隔片，不是电池隔膜纸或牛皮浆；包含随货入流、唯一上游所有者、全部六腿及附着在制品、成品、空置和复用库存。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。  本原输入卡只记录另行采购P；供方已含I、外退接收ER、随毛发运S及对外退回EO另有互斥卡，原废物输出为W。这些均为真实未分配gross实物方向，不使复用形成新采购或改称已分配服务负荷。

- 选定流：牛皮纸层间隔片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### 原批次服务制造电网电力 (`s_electricity`)

仅限中国用户侧 1–35 kV 电网平均交流电。以真实电表记录混合成形、养护通风、搬运、检验、除尘、清理和空转。原生能量属性不表示燃料实测热值；kWh 只按 3.6 换算一次，并核实实际供方和时段电源组合。 本行仅含 H 内真实原批次服务，以 Q_H 为基准，包括留库成品；与 m_electricity 分开。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### 原批次服务气态天然气 (`s_gas`)

仅限实际经压缩、管道输送至消费端的气态天然气，原生甲烷 CAS 74-82-8，参考属性 Volume。核实组成和状态；不能代替 LNG、瓶装 LPG 或通用燃气能量因子。纳入真实存在的养护辅助加热或产热及真实排放。 本行仅含 H 内真实原批次服务，以 Q_H 为基准，包括留库成品；与 m_gas 分开。 候选固定甲烷 CAS 74-82-8，但实际管道供货配方或组成尚未确立，因此不绑定；仍保留单一具体气态天然气交换及 Volume/m3，采用真实状态组成而不假定化学等同。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：原批次服务气态天然气
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### 原批次服务制造移动设备柴油 (`s_diesel`)

一份真实柴油供货，按原生 Mass 计量。原生未限定牌号、调和或生物含量、密度、低位热值、炼制路线、地理及供方，均须采集；不能推定纯化合物 CAS 或默认热值。装载机、叉车运输及空转燃料只计一次。 本行仅含 H 内真实原批次服务，以 Q_H 为基准，包括留库成品；与 m_diesel 分开。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### 原批次服务用水 (`s_water`)

记录放行后搬运或清理真实使用的经处理工艺水，包括真实已执行的未授权、失败或拒收作业。保留原服务批次、新增入流、完整期末湿库存及真实排放或留存；仅重复流项抵消。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 制造商/规范许可与工作后试验仅决定授权、持续合格及验收/拒收/处置资格。所有真实已执行的未授权、未批准、失败或拒收作业及其全部材料/部件/水/能耗、排放、损失、废物和负荷均须独立记录，并归属正确原始Q_c或Q_H/H，即使未获许可或试验失败也不删除。这不授权该作业，也不假定破损水硬性材料恢复原功能，不新增Q。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`jrc-ilcd-2010`

###### 配置柴油叉车 (`s_forklift`)

一台完整配置叉车，有实测净质量及真实服务记录。完整实物购入、库存、移除、新旧维修和流体，与 H 内分派的隐含服务分开，不设固定寿命，也不按单位产品计整台叉车。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：配置柴油叉车
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`jrc-ilcd-2010`; `marshalls-through-mix-2023`

###### 外购热水载体 (`s_heat_carrier_water`)

仅列实际外部热水载体，保留完整质量、温度、水所有权及配对返回。只与已归属完整供货内的同一水入流项去重，不能因真实新增量留在期末就取消入流。热 MJ 与水 kg 是不同物理或核算量。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 对真实外部载体/返回腿m_steam、m_heat_carrier_water、s_heat_carrier_water、m_condensate、m_return_water，A_e表示以该原生行单位独立实测的完整实物毛量V_e，不是分配负担向量、净耗用、库存差或经济份额。制造腿以Q_c、服务腿以观察H内关联原始Q_H，仅对V_e应用normalize_once一次。入流与返回的绝对毛量分别保留，即使两者数值相同；真实温度、压力、相态/品质、焓与交付热MJ独立测量。同一约定水/热供应方仅承担一次供应负荷，此物理载体/返回不是再次整份采购、外送抵扣或假定锅炉/回路。只对OTHER同侧其他物理流中同一真实流项/事件去重；不与库存、对侧流或仅已存在的卡抵消。尚未列出的真实返回在使用前须另建并核实其实际原子卡，不预设返回或工艺必有。

- 选定流：外购热水载体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`jrc-ilcd-2010`

###### 供方已含木托盘 (`s_wood_pallet_supplier_in`)

本I卡记录这一相同物理制品的首次非采购接收，包括单独赠与、借用、租赁/周转池或未付费供方随附接收，排除P和真实ER。一件真实已制造、供机械载荷搬运的完整木托盘。原生成品族明确说明完整可移动平台，也含箱式平台/围板，本卡仅选真实托盘，不是散锯材木板/木条或围板。核实木材、结构、紧固件、处理、皮重、真实供方及新旧复用归属，不默认EURO尺寸、单件质量或寿命。六个独立包装实物方向及完整湿态附着/空置/周转存量均保留，上游只归属一次。 真实首次非采购外部入流，单独接收完整制品；即使供方数据已含负荷仍保留完整湿质量和一次上游归属，不再作另购P。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### 外退接收木托盘 (`s_wood_pallet_external_return_in`)

一件真实已制造、供机械载荷搬运的完整木托盘。原生成品族明确说明完整可移动平台，也含箱式平台/围板，本卡仅选真实托盘，不是散锯材木板/木条或围板。核实木材、结构、紧固件、处理、皮重、真实供方及新旧复用归属，不默认EURO尺寸、单件质量或寿命。六个独立包装实物方向及完整湿态附着/空置/周转存量均保留，上游只归属一次。 真实外部ER接收，保留状态、水分、新旧及先前归属，内部复用不冒充外部接收。仅在同一实物制品身份仍相容时用此Product；损坏/异材须用其真实独立Waste身份。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### 供方已含PE-LD薄膜罩 (`s_ldpe_hood_supplier_in`)

本I卡记录这一相同物理制品的首次非采购接收，包括单独赠与、借用、租赁/周转池或未付费供方随附接收，排除P和真实ER。一件实际 PE-LD 薄膜罩，原生为已制薄膜且参考属性 Mass，不是 PE 树脂或 PET。核实薄膜牌号、厚度及真实收缩过程；登记六物理腿及全部附着或空置库存，真实收缩热归已执行服务。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 真实首次非采购外部入流，单独接收完整制品；即使供方数据已含负荷仍保留完整湿质量和一次上游归属，不再作另购P。 保留原生薄膜形态：非自粘、非泡沫，未增强、未层压、未衬托或与其他材料类似组合。自粘、泡沫、增强或多层复合罩须用各自相容身份；不推定膜厚、热缩温度或供货整件质量。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### 外退接收PE-LD薄膜罩 (`s_ldpe_hood_external_return_in`)

一件实际 PE-LD 薄膜罩，原生为已制薄膜且参考属性 Mass，不是 PE 树脂或 PET。核实薄膜牌号、厚度及真实收缩过程；登记六物理腿及全部附着或空置库存，真实收缩热归已执行服务。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 真实外部ER接收，保留状态、水分、新旧及先前归属，内部复用不冒充外部接收。仅在同一实物制品身份仍相容时用此Product；损坏/异材须用其真实独立Waste身份。 保留原生薄膜形态：非自粘、非泡沫，未增强、未层压、未衬托或与其他材料类似组合。自粘、泡沫、增强或多层复合罩须用各自相容身份；不推定膜厚、热缩温度或供货整件质量。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### 供方已含PP捆扎带 (`s_pp_strap_supplier_in`)

本I卡记录这一相同物理制品的首次非采购接收，包括单独赠与、借用、租赁/周转池或未付费供方随附接收，排除P和真实ER。一条实际已制 PP 捆扎带。查到的 PP 树脂、切片、纱线及混合包材不能证明已制带，均不绑定。核实聚合物、尺寸及材料质量，并对账六腿及附着库存。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 真实首次非采购外部入流，单独接收完整制品；即使供方数据已含负荷仍保留完整湿质量和一次上游归属，不再作另购P。

- 选定流：聚丙烯捆扎带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### 外退接收PP捆扎带 (`s_pp_strap_external_return_in`)

一条实际已制 PP 捆扎带。查到的 PP 树脂、切片、纱线及混合包材不能证明已制带，均不绑定。核实聚合物、尺寸及材料质量，并对账六腿及附着库存。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 真实外部ER接收，保留状态、水分、新旧及先前归属，内部复用不冒充外部接收。仅在同一实物制品身份仍相容时用此Product；损坏/异材须用其真实独立Waste身份。

- 选定流：聚丙烯捆扎带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### 供方已含牛皮纸隔片 (`s_kraft_sheet_supplier_in`)

本I卡记录这一相同物理制品的首次非采购接收，包括单独赠与、借用、租赁/周转池或未付费供方随附接收，排除P和真实ER。一张真实牛皮纸隔片，不是电池隔膜纸或牛皮浆；包含首次非采购外部入流、唯一上游所有者、全部六腿及附着在制品、成品、空置和复用库存。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 真实首次非采购外部入流，单独接收完整制品；即使供方数据已含负荷仍保留完整湿质量和一次上游归属，不再作另购P。

- 选定流：牛皮纸层间隔片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### 外退接收牛皮纸隔片 (`s_kraft_sheet_external_return_in`)

一张真实牛皮纸隔片，不是电池隔膜纸或牛皮浆；包含随货入流、唯一上游所有者、全部六腿及附着在制品、成品、空置和复用库存。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 真实外部ER接收，保留状态、水分、新旧及先前归属，内部复用不冒充外部接收。仅在同一实物制品身份仍相容时用此Product；损坏/异材须用其真实独立Waste身份。

- 选定流：牛皮纸层间隔片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### 首次放行内部保管接收 (`s_first_release_received`)

声明过程门之间真实记录的首次放行至仓储移交，按单元/批群与制造accepted_paver输出配对。本行为内部保管台账，不是额外环境交换、外部采购、第二Q或制造负荷；合并时配对内部移交只抵消一次。独立保留实测湿态变化和原Q_H/H。原生Area为同身份完整铺块真实单面净投影，湿质量独立称量。 原生“砖块”明确为水泥、砂砾及水制成的混凝土路面砖或高强度砖，工厂生产混合供货，唯一参考属性为 Area；未声明固定几何、CAS、地理或单件质量。其 37310 陶瓷或硅质土分类是孤立分类瑕疵，本次不沿用；有限采用依据完整混凝土材质和用途描述。仅限已声明的完整裸品、单层未配筋振压且实际养护，并通过必要后整与检验的铺块。不能替代湿预拌混凝土、熟料、天然石、烧成陶瓷、高树脂人造石、附加面层或安装路面。同批期末成品在 Q_c 内只计一次。  原生高强度路面砖描述要求真实声明的铺筑等级及制造商规格/试验证据与其相容，不提供普适强度阈值或寿命。保留已声明单面净投影约定，不改为安装路面面积。

- 选定流：砖块 `24c495b7-b9f4-4187-93ea-327a9e6f1037`
- 流属性/单位：Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`masa-concrete-block-production`; `marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### 外部完整铺块退回接收 (`s_intact_paver_return`)

真实外部退回、仍符合相同声明材质/形态/质量状态身份的完整裸铺块，分别量测真实单面投影面积及湿质量，关联原发运/反转凭证和原Q_H/H。退回不产生新制造、Q、采购或credit。破损/不合格入流走独立Waste退回行，不强绑本高强度Product。 原生“砖块”明确为水泥、砂砾及水制成的混凝土路面砖或高强度砖，工厂生产混合供货，唯一参考属性为 Area；未声明固定几何、CAS、地理或单件质量。其 37310 陶瓷或硅质土分类是孤立分类瑕疵，本次不沿用；有限采用依据完整混凝土材质和用途描述。仅限已声明的完整裸品、单层未配筋振压且实际养护，并通过必要后整与检验的铺块。不能替代湿预拌混凝土、熟料、天然石、烧成陶瓷、高树脂人造石、附加面层或安装路面。同批期末成品在 Q_c 内只计一次。  原生高强度路面砖描述要求真实声明的铺筑等级及制造商规格/试验证据与其相容，不提供普适强度阈值或寿命。保留已声明单面净投影约定，不改为安装路面面积。

- 选定流：砖块 `24c495b7-b9f4-4187-93ea-327a9e6f1037`
- 流属性/单位：Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`masa-concrete-block-production`; `marshalls-through-mix-2023`; `jrc-ilcd-2010`

##### 废物流

###### 外部破损铺块退回接收 (`s_damaged_paver_return`)

条件性真实接收先前已放行的破损/不合格混凝土铺块及其碎块，实际检查/处理/处置前作为单一整份湿态Waste流。独立称量并测水分、相态和组成，追溯原放行、原发运/反转和实测退回状态。不宣称其符合完整高强度Product、可修复、kg/m2换算、新Q、自动制造反转或credit。真实后续零件/材料/水增减、许可试验验收处置和维修保管仍须明确。

- 选定流：退回的破损已硬化混凝土铺块
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`masa-concrete-block-production`; `marshalls-through-mix-2023`; `jrc-ilcd-2010`

##### 基本流

###### 大气氧气取入 (`s_oxygen_in`)

原生 O2 CAS 7782-44-7，空气中可再生元素资源。仅用于真实大气取入，不是外购压缩氧；记录毛 O2，不再叠加整份空气质量。 本行为 H 内原批次服务真实取入；与输出分开保留毛物理腿，并用原 Q_H。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`jrc-ilcd-2010`

###### 大气氮气取入 (`s_nitrogen_in`)

原生 N2 CAS 7727-37-9，空气中可再生元素资源；实际取入、NO 或 NO2 形成及排气 N2 分开，不用总氮指标替代。 本行为 H 内原批次服务真实取入；与输出分开保留毛物理腿，并用原 Q_H。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`jrc-ilcd-2010`

###### 大气氩气取入 (`s_argon_in`)

仅按实际独立量化的大气 Ar 记录物理平衡，不重复空气总量。 本行为 H 内原批次服务真实取入；与输出分开保留毛物理腿，并用原 Q_H。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。  该条件身份由普通分子规范名/CAS、真实相态及精确原生类别正面限定，离子、同位素、HNO或N2O4噪声别名不改写物种。核实实际物种、接收介质和gross气态数量，不以汇总NOx、总氮、同位素水或液态/结合水替代；不提供因子或默认空气比例。 原生仅为取自空气的可更新元素资源身份，不是外购压缩气或反用排放。须为真实普通氩CAS 7440-37-1并有实测空气组成。

- 选定流：氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`jrc-ilcd-2010`

###### 大气水蒸气取入 (`s_humidity_in`)

按实测气态条件记录真实湿气取入，不能用水蒸气排放 UUID 或供方工艺水替代。 本行为 H 内原批次服务真实取入；与输出分开保留毛物理腿，并用原 Q_H。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：大气水蒸气取入
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`jrc-ilcd-2010`

###### 大气二氧化碳取入 (`s_co2_in`)

真实大气 CO2 取入或吸收须有独立碳及物种测量。不能绑定仅化石源输入或延迟排放修正流，不能假定碳化或自动抵扣。通风穿流与真实留存分开，保留全部毛流腿。 本行为 H 内原批次服务真实取入；与输出分开保留毛物理腿，并用原 Q_H。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：大气二氧化碳取入
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`jrc-ilcd-2010`

###### 进入真实库存的液态雨水 (`s_rain_water`)

仅在真实雨水进入暴露原料、在制品、成品或包材时列示，须独立的真实湿态库存或收集证据，不设默认雨水捕集比例。期末留存仍保留真实入流，不在外购水或大气湿气中重复。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：进入真实库存的液态雨水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`jrc-ilcd-2010`

#### 输出

##### 产品流

###### 随毛发运木托盘 (`s_wood_pallet_gross_shipped`)

一件真实已制造、供机械载荷搬运的完整木托盘。原生成品族明确说明完整可移动平台，也含箱式平台/围板，本卡仅选真实托盘，不是散锯材木板/木条或围板。核实木材、结构、紧固件、处理、皮重、真实供方及新旧复用归属，不默认EURO尺寸、单件质量或寿命。六个独立包装实物方向及完整湿态附着/空置/周转存量均保留，上游只归属一次。 随gross实物发运外出的真实S；仅为保管出口，不是新包材生产或上游负荷credit，保留完整湿质量和存量历史。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### 对外退回木托盘 (`s_wood_pallet_external_return_out`)

一件真实已制造、供机械载荷搬运的完整木托盘。原生成品族明确说明完整可移动平台，也含箱式平台/围板，本卡仅选真实托盘，不是散锯材木板/木条或围板。核实木材、结构、紧固件、处理、皮重、真实供方及新旧复用归属，不默认EURO尺寸、单件质量或寿命。六个独立包装实物方向及完整湿态附着/空置/周转存量均保留，上游只归属一次。 独立于S真实发给外部方的EO；保留接收方、原退换记录、状态和湿质量，不混合为随货发运或与存量抵消。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### 随毛发运PE-LD薄膜罩 (`s_ldpe_hood_gross_shipped`)

一件实际 PE-LD 薄膜罩，原生为已制薄膜且参考属性 Mass，不是 PE 树脂或 PET。核实薄膜牌号、厚度及真实收缩过程；登记六物理腿及全部附着或空置库存，真实收缩热归已执行服务。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 随gross实物发运外出的真实S；仅为保管出口，不是新包材生产或上游负荷credit，保留完整湿质量和存量历史。 保留原生薄膜形态：非自粘、非泡沫，未增强、未层压、未衬托或与其他材料类似组合。自粘、泡沫、增强或多层复合罩须用各自相容身份；不推定膜厚、热缩温度或供货整件质量。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### 对外退回PE-LD薄膜罩 (`s_ldpe_hood_external_return_out`)

一件实际 PE-LD 薄膜罩，原生为已制薄膜且参考属性 Mass，不是 PE 树脂或 PET。核实薄膜牌号、厚度及真实收缩过程；登记六物理腿及全部附着或空置库存，真实收缩热归已执行服务。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 独立于S真实发给外部方的EO；保留接收方、原退换记录、状态和湿质量，不混合为随货发运或与存量抵消。 保留原生薄膜形态：非自粘、非泡沫，未增强、未层压、未衬托或与其他材料类似组合。自粘、泡沫、增强或多层复合罩须用各自相容身份；不推定膜厚、热缩温度或供货整件质量。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### 随毛发运PP捆扎带 (`s_pp_strap_gross_shipped`)

一条实际已制 PP 捆扎带。查到的 PP 树脂、切片、纱线及混合包材不能证明已制带，均不绑定。核实聚合物、尺寸及材料质量，并对账六腿及附着库存。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 随gross实物发运外出的真实S；仅为保管出口，不是新包材生产或上游负荷credit，保留完整湿质量和存量历史。

- 选定流：聚丙烯捆扎带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### 对外退回PP捆扎带 (`s_pp_strap_external_return_out`)

一条实际已制 PP 捆扎带。查到的 PP 树脂、切片、纱线及混合包材不能证明已制带，均不绑定。核实聚合物、尺寸及材料质量，并对账六腿及附着库存。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 独立于S真实发给外部方的EO；保留接收方、原退换记录、状态和湿质量，不混合为随货发运或与存量抵消。

- 选定流：聚丙烯捆扎带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### 随毛发运牛皮纸隔片 (`s_kraft_sheet_gross_shipped`)

一张真实牛皮纸隔片，不是电池隔膜纸或牛皮浆；包含随货入流、唯一上游所有者、全部六腿及附着在制品、成品、空置和复用库存。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 随gross实物发运外出的真实S；仅为保管出口，不是新包材生产或上游负荷credit，保留完整湿质量和存量历史。

- 选定流：牛皮纸层间隔片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### 对外退回牛皮纸隔片 (`s_kraft_sheet_external_return_out`)

一张真实牛皮纸隔片，不是电池隔膜纸或牛皮浆；包含随货入流、唯一上游所有者、全部六腿及附着在制品、成品、空置和复用库存。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 独立于S真实发给外部方的EO；保留接收方、原退换记录、状态和湿质量，不混合为随货发运或与存量抵消。

- 选定流：牛皮纸层间隔片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`


###### 铺块毛发运保管 (`s_gross_paver_dispatch`)

观测H内真实毛发运的同身份完整裸铺块，量测真实投影面积及独立湿质量，关联原Q_H和原交付记录。仅为保管，不是再次首次放行参考量或制造输出。原制造及已执行服务历史保留，不按净交付归一化。 原生“砖块”明确为水泥、砂砾及水制成的混凝土路面砖或高强度砖，工厂生产混合供货，唯一参考属性为 Area；未声明固定几何、CAS、地理或单件质量。其 37310 陶瓷或硅质土分类是孤立分类瑕疵，本次不沿用；有限采用依据完整混凝土材质和用途描述。仅限已声明的完整裸品、单层未配筋振压且实际养护，并通过必要后整与检验的铺块。不能替代湿预拌混凝土、熟料、天然石、烧成陶瓷、高树脂人造石、附加面层或安装路面。同批期末成品在 Q_c 内只计一次。  原生高强度路面砖描述要求真实声明的铺筑等级及制造商规格/试验证据与其相容，不提供普适强度阈值或寿命。保留已声明单面净投影约定，不改为安装路面面积。

- 选定流：砖块 `24c495b7-b9f4-4187-93ea-327a9e6f1037`
- 流属性/单位：Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`masa-concrete-block-production`; `marshalls-through-mix-2023`; `jrc-ilcd-2010`


##### 废物流

###### 废木运输托盘 (`s_waste_wood`)

H 内真实原批次服务废物，保留完整湿质量、组成、毛去向及处理。原制造历史和任何正当一次交接另存；不自动冲销制造、不抵扣回收产品、不形成新 Q。包材废物计入自身六腿平衡。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 完整湿态制品接收已一次包含其整体木材/紧固件/涂层及所含水。现场另加部件或水仅在与整件接收互斥时作为独立真实入流；保留制品/组分桥与成对内部交接，合并时不得同时相加整件装配皮重及其同一组分。若实际只有一个混合包材废物出口，逐来源材料独立实测W并保留非叠加原始来源子账，核对sum(origin W)等于实测混合总量，使用一个已核实的实际Waste交换及处理所有者。总量或其互斥分项二选一，不同时叠加。材料W卡仅在实物真正分流时才是独立出口；否则只作该来源子账，不虚构分离出口。仅在真实发生该出口时新增并核实单一混收出口卡，不预设混收必有。

- 选定流：废木运输托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### 废 LDPE 保护罩 (`s_waste_ldpe`)

H 内真实原批次服务废物，保留完整湿质量、组成、毛去向及处理。原制造历史和任何正当一次交接另存；不自动冲销制造、不抵扣回收产品、不形成新 Q。包材废物计入自身六腿平衡。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 完整湿态制品接收已一次包含其整体木材/紧固件/涂层及所含水。现场另加部件或水仅在与整件接收互斥时作为独立真实入流；保留制品/组分桥与成对内部交接，合并时不得同时相加整件装配皮重及其同一组分。若实际只有一个混合包材废物出口，逐来源材料独立实测W并保留非叠加原始来源子账，核对sum(origin W)等于实测混合总量，使用一个已核实的实际Waste交换及处理所有者。总量或其互斥分项二选一，不同时叠加。材料W卡仅在实物真正分流时才是独立出口；否则只作该来源子账，不虚构分离出口。仅在真实发生该出口时新增并核实单一混收出口卡，不预设混收必有。

- 选定流：废 LDPE 保护罩
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### 废 PP 捆扎带 (`s_waste_pp`)

H 内真实原批次服务废物，保留完整湿质量、组成、毛去向及处理。原制造历史和任何正当一次交接另存；不自动冲销制造、不抵扣回收产品、不形成新 Q。包材废物计入自身六腿平衡。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 完整湿态制品接收已一次包含其整体木材/紧固件/涂层及所含水。现场另加部件或水仅在与整件接收互斥时作为独立真实入流；保留制品/组分桥与成对内部交接，合并时不得同时相加整件装配皮重及其同一组分。若实际只有一个混合包材废物出口，逐来源材料独立实测W并保留非叠加原始来源子账，核对sum(origin W)等于实测混合总量，使用一个已核实的实际Waste交换及处理所有者。总量或其互斥分项二选一，不同时叠加。材料W卡仅在实物真正分流时才是独立出口；否则只作该来源子账，不虚构分离出口。仅在真实发生该出口时新增并核实单一混收出口卡，不预设混收必有。

- 选定流：废 PP 捆扎带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### 废牛皮纸层间隔片 (`s_waste_kraft`)

H 内真实原批次服务废物，保留完整湿质量、组成、毛去向及处理。原制造历史和任何正当一次交接另存；不自动冲销制造、不抵扣回收产品、不形成新 Q。包材废物计入自身六腿平衡。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。 完整湿态制品接收已一次包含其整体木材/紧固件/涂层及所含水。现场另加部件或水仅在与整件接收互斥时作为独立真实入流；保留制品/组分桥与成对内部交接，合并时不得同时相加整件装配皮重及其同一组分。若实际只有一个混合包材废物出口，逐来源材料独立实测W并保留非叠加原始来源子账，核对sum(origin W)等于实测混合总量，使用一个已核实的实际Waste交换及处理所有者。总量或其互斥分项二选一，不同时叠加。材料W卡仅在实物真正分流时才是独立出口；否则只作该来源子账，不虚构分离出口。仅在真实发生该出口时新增并核实单一混收出口卡，不预设混收必有。

- 选定流：废牛皮纸层间隔片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### 废弃已放行混凝土铺块 (`s_waste_paver`)

H 内真实原批次服务废物，保留完整湿质量、组成、毛去向及处理。原制造历史和任何正当一次交接另存；不自动冲销制造、不抵扣回收产品、不形成新 Q。卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：废弃已放行混凝土铺块
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`

###### 原批次服务废水 (`s_waste_water`)

H 内真实原批次服务废物，保留完整湿质量、组成、毛去向及处理。原制造历史和任何正当一次交接另存；不自动冲销制造、不抵扣回收产品、不形成新 Q。卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：原批次服务废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`marshalls-through-mix-2023`; `jrc-ilcd-2010`

##### 基本流

###### 化石源二氧化碳排入空气 (`s_co2`)

原生 CAS 124-38-9，化石源 CO2，空气未指定环境排放，不是长期、室内或高烟囱专用记录。采用实际化石燃烧及物种记录；上游水泥已承担的煅烧排放不能在本厂再次排出。 仅为 H 内真实原批次服务排放，与制造排放独立；保留原 Q_H。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`jrc-ilcd-2010`

###### 化石源一氧化碳排入空气 (`s_co`)

原生 CAS 630-08-0，化石源 CO，仅限空气未指定环境排放；需真实物种、计量基准与化石归属，不能把总碳当 CO。 仅为 H 内真实原批次服务排放，与制造排放独立；保留原 Q_H。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`jrc-ilcd-2010`

###### 一氧化氮排入空气 (`s_no`)

原生 CAS 10102-43-9，NO，空气未指定环境排放。不相关同义词字符串不改变主身份 NO，但必须有真实 NO 测量；以 NO2 当量报送的 NOx 不能直接填入。 仅为 H 内真实原批次服务排放，与制造排放独立；保留原 Q_H。 仍须采集本卡明确的真实物种及相态。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。  该条件身份由普通分子规范名/CAS、真实相态及精确原生类别正面限定，离子、同位素、HNO或N2O4噪声别名不改写物种。核实实际物种、接收介质和gross气态数量，不以汇总NOx、总氮、同位素水或液态/结合水替代；不提供因子或默认空气比例。 原生仅为空气未指定、非长期Elementary排放。须披露真实尚未确定的空气子介质；接收子介质已知后选择相应相容身份，不替代室内、高空、长期、水/土壤或外购气体。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`jrc-ilcd-2010`

###### 二氧化氮排入空气 (`s_no2`)

原生 CAS 10102-44-0，NO2，空气未指定环境排放。同义词含四氧化二氮措辞；仅按主名及 CAS 的 NO2 身份并有真实物种测量采用，不用于 N2O4、N2O 或未分物种 NOx 当量。 仅为 H 内真实原批次服务排放，与制造排放独立；保留原 Q_H。 仍须采集本卡明确的真实物种及相态。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。  该条件身份由普通分子规范名/CAS、真实相态及精确原生类别正面限定，离子、同位素、HNO或N2O4噪声别名不改写物种。核实实际物种、接收介质和gross气态数量，不以汇总NOx、总氮、同位素水或液态/结合水替代；不提供因子或默认空气比例。 原生仅为空气未指定、非长期Elementary排放。须披露真实尚未确定的空气子介质；接收子介质已知后选择相应相容身份，不替代室内、高空、长期、水/土壤或外购气体。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`jrc-ilcd-2010`

###### 二氧化硫排入空气 (`s_so2`)

原生 CAS 7446-09-5，SO2，空气未指定环境排放。确认真实 SO2，不能用硫氧化物总量、含硫量或水土排放替代，也不设燃料默认系数。 仅为 H 内真实原批次服务排放，与制造排放独立；保留原 Q_H。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`jrc-ilcd-2010`

###### 水蒸气排入空气 (`s_water_vapour`)

原生 CAS 7732-18-5，水蒸气，空气未指定环境排放。真实汽相与结合水、液态雾滴及内部凝结水独立确定；仅纳入归属范围内真实蒸发或燃烧水。 仅为 H 内真实原批次服务排放，与制造排放独立；保留原 Q_H。 仍须采集本卡明确的真实物种及相态。 物理毛汽相输出也保留独立测得的大气湿气穿流，并与新蒸发或生成水分开，避免重复空气总量。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。  该条件身份由普通分子规范名/CAS、真实相态及精确原生类别正面限定，离子、同位素、HNO或N2O4噪声别名不改写物种。核实实际物种、接收介质和gross气态数量，不以汇总NOx、总氮、同位素水或液态/结合水替代；不提供因子或默认空气比例。 原生仅为空气未指定、非长期Elementary排放。须披露真实尚未确定的空气子介质；接收子介质已知后选择相应相容身份，不替代室内、高空、长期、水/土壤或外购气体。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`jrc-ilcd-2010`

###### 气态氧气排入空气 (`s_oxygen_out`)

实际排气 O2 质量，不能将已读空气资源 UUID 用作排放；保留过量空气及独立实测气体组成，不能用同时拟合水及碳化来推出氧气。 仅为 H 内真实原批次服务排放，与制造排放独立；保留原 Q_H。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。  该条件身份由普通分子规范名/CAS、真实相态及精确原生类别正面限定，离子、同位素、HNO或N2O4噪声别名不改写物种。核实实际物种、接收介质和gross气态数量，不以汇总NOx、总氮、同位素水或液态/结合水替代；不提供因子或默认空气比例。 原生仅为空气未指定、非长期Elementary排放。须披露真实尚未确定的空气子介质；接收子介质已知后选择相应相容身份，不替代室内、高空、长期、水/土壤或外购气体。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`jrc-ilcd-2010`

###### 气态氮气排入空气 (`s_nitrogen_out`)

真实排气 N2 质量。单独保留毛 N2，不再加空气总量。 仅为 H 内真实原批次服务排放，与制造排放独立；保留原 Q_H。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。  该条件身份由普通分子规范名/CAS、真实相态及精确原生类别正面限定，离子、同位素、HNO或N2O4噪声别名不改写物种。核实实际物种、接收介质和gross气态数量，不以汇总NOx、总氮、同位素水或液态/结合水替代；不提供因子或默认空气比例。 原生仅为空气未指定、非长期Elementary排放。须披露真实尚未确定的空气子介质；接收子介质已知后选择相应相容身份，不替代室内、高空、长期、水/土壤或外购气体。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`jrc-ilcd-2010`

###### 气态氩气排入空气 (`s_argon_out`)

实测空气平衡中真实存在的排气氩，不用共同残差拟合缺失气体；其质量不能再计入空气集合流。 仅为 H 内真实原批次服务排放，与制造排放独立；保留原 Q_H。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。  该条件身份由普通分子规范名/CAS、真实相态及精确原生类别正面限定，离子、同位素、HNO或N2O4噪声别名不改写物种。核实实际物种、接收介质和gross气态数量，不以汇总NOx、总氮、同位素水或液态/结合水替代；不提供因子或默认空气比例。 原生仅为空气未指定、非长期Elementary排放。须披露真实尚未确定的空气子介质；接收子介质已知后选择相应相容身份，不替代室内、高空、长期、水/土壤或外购气体。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`jrc-ilcd-2010`

###### 大气来源二氧化碳穿流排入空气 (`s_ambient_co2_out`)

真实大气来源 CO2 随通风或排气离开，与新生化石燃烧 CO2 及独立证实的留存分开。不重复记入化石 CO2 行，不用共同残差推碳化，也不用延迟排放或抵扣流；保留真实气态条件与接收空气介质。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：大气来源二氧化碳穿流排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`jrc-ilcd-2010`

###### 向河流释放的液态水 (`s_liquid_water_to_river`)

仅在真实直接向已核实河流介质释放液态水时列示，独立测量水质量状态，并分别证实每种真实溶质或物种。不能代替外送废水处理交接或内部返回；同门完整湿废水及其载水不能重复计量。 卡片数量 a_e 为第 8 节 normalize_once 对本行未归一化记录得到的唯一结果，本卡不再作除法。

- 选定流：向河流释放的液态水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_e
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 m2 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`jrc-ilcd-2010`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | attributional multifunctionality | 先确定真实共功能与共同过程门；首先专属归属并细分，包括有可复核技术证据的虚拟细分。逐一确定并量化真正决定各残余交换的物理因果，不能因质量、面积、时间或能量可用就用于全部交换。只有真正剩余且不可分的过程才使用同一门、实际供货状态及数量下各功能的同期市场价值，并扣正下游运输、调理和包装成本。记录替代判断和敏感性；不任意选物理或经济分配，不设固定比例，不替代或自动抵扣避免产品。 | `jrc-ilcd-2010` |
| allocation_loss | rejects samples and waste treatment | 正常制造失败、试验、不合格及普通废物处理仍属铺块批次负荷，即使外送或出售。真实独立功能或其他批次须有因果、细分或交接决定后，才允许一次负荷向量转移；物理毛流腿始终完整。内部回收混凝土、粉尘或水只携带一次继承向量，不能既是新采购又是避免的原生投入。 | `jrc-ilcd-2010` |
| allocation_assets | capital repair and original-cohort services | 逐项保留新旧零件、在装流体及维修水实物流。资产隐含负荷以有证据的真实服务及正当能力或使用约定归属；专属维修归实际受益作业或批次。留库成品已发生的服务必须保留；不得从制造或已执行服务中扣期末成品，也不得重复扣库存。 | `jrc-ilcd-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

协议 raw_fields 和方法采集未归一化原始活动，不采已除 Q 的数量。汇总单元格指定最终受支持基准；仅引用一次 normalize_once 的结果，不执行第二次除法。计算 Inputs 使用 ASCII 分号分隔；全部人读正文均属于完整规则语境。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | cure_release | accepted_paver | measured | 唯一单元及批次 ID; 图纸修订; 对应形状投影面积; 实际裸品净湿质量; 养护后整与检验记录; 唯一首次放行时间; Q_c; 原 Q_H; 投影平面; 净轮廓孔洞记录; 实际声明等级及制造商试验 | 校准尺寸测量并独立核对图纸几何；每件符合品仅在实际首次放行登记一次。同设计配置完整裸品用校准衡器称重并代表性采样含水与龄期；面积质量换算追溯到该实测总体。  声明单一投影平面及实测净轮廓，包含联锁形状并扣除真实孔洞/切口。排除安装接缝/间隙、相邻单元及双面或所有表面积累加。L*W仅用于经核实无开口的实心矩形；EPD尺寸、厚度、密度或质量/面积系数不构成实测换算。  原生高强度路面砖描述要求真实声明的铺筑等级及制造商规格/试验证据与其相容，不提供普适强度阈值或寿命。保留已声明单面净投影约定，不改为安装路面面积。 | m2; kg | 逐批及每次放行 | 完整报告期及继承未放行批次 | 声明铺块线及实际质量门 | 每 1 m2 参考流 | 图纸; 校准; 唯一验收账; 含水试验; 拒收样品处置 |
| cp_raw | mix_form | raw materials | measured | row_id; 供方及供货形态; 毛收货; P/I 随货包材所有者; 湿质量; 含水与化验; 投料; 内部转移; 期初期末原料在制品; 继承交换向量 | 按整份供货用校准衡器及实际供货、交付和投料记录采集；收到态水与组成独立对账。对留存养护在制品按真实状态取样，保留其累积逐交换向量，不扣新放行成品。 | kg | 逐次收货、批次及盘点 | 期初历史及报告期全部活动，含零产出时段 | 供方门至混合成形及养护在制品 | 每 1 m2 参考流 | 交付记录; 衡器; 化验; 湿态库存对账; 完整原始单位 |
| cp_water | cure_release | each water phase and return | measured | 水 row_id; 供水所有者; 表读或真实速率; 积分体积; 温度; 压力; 对本物质本状态独立实测密度; 湿库存; 载水; 凝结水或换热水返回; 排放; 留存自由或结合水; 物种证据；每个真实载体/返回行及原生单位的毛量V_e；Q_c或原始Q_H/H；实测T/P/相态/焓；唯一供应所有者；OTHER同侧其他流的重复证据链接 | 逐项计量并取样真实水流与相态。用适当实验室方法及控制独立确定总湿质量、自由或吸附水和水化或结构相；碳化证据与气体测量另列。积分体积只读一次，真实速率只积分一次；不把水密度套到其他液体。保留真实入流及完整期末湿质量。 对真实外部载体/返回腿m_steam、m_heat_carrier_water、s_heat_carrier_water、m_condensate、m_return_water，A_e表示以该原生行单位独立实测的完整实物毛量V_e，不是分配负担向量、净耗用、库存差或经济份额。制造腿以Q_c、服务腿以观察H内关联原始Q_H，仅对V_e应用normalize_once一次。入流与返回的绝对毛量分别保留，即使两者数值相同；真实温度、压力、相态/品质、焓与交付热MJ独立测量。同一约定水/热供应方仅承担一次供应负荷，此物理载体/返回不是再次整份采购、外送抵扣或假定锅炉/回路。只对OTHER同侧其他物理流中同一真实流项/事件去重；不与库存、对侧流或仅已存在的卡抵消。尚未列出的真实返回在使用前须另建并核实其实际原子卡，不预设返回或工艺必有。 | kg; m3; MJ | 真实连续记录及每次取样、返回 | 全部跨期养护停留及服务观测期 H | 真实水系统及对外返回门，须批次标签 | 每 1 m2 参考流 | 校准; 独立密度与相态试验; 供方水能约定; 不确定度 |
| cp_utilities | manufacturing_controls | each utility | measured | row_id; 表计或批次; 实际工序; 原始单位或速率; 状态; 燃料组成及 LHV; 密度; 燃气压力温度; 电压及供电地理; 期初期末未分派费用; 零产出启停空转清理负荷; 批次归属 | 读取校准分表、计数及供货记录；先转换原生广延单位再归属清单。需要时独立测量气液状态及 LHV；整份外购热供应与所有真实内部热载体子账分开。产量为零也保留全部真实负荷。 | MJ; kg; m3 | 逐计量时段、燃料收货及作业 | 完整制造观测及继承费用 | 声明场址及真实制造阶段 | 每 1 m2 参考流 | 表计校准; 供货凭证; 独立状态或 LHV 试验; 分配证据 |
| cp_species | manufacturing_controls | individual atmospheric or emitted species | measured | row_id; 真实化学物种或 CAS 及相态; 环境介质; 适用时化石或生物来源; 采样状态; 积分气体体积或速率时间; 独立实测组成; 空气毛物种; 液态水; 不重叠 PM 粒径; C/H/O/Ca/N/S 证据; 控制与空白试验 | 采用物种专用校准监测或实验室方法及有独立约束的真实过程平衡；区分直测和计算。采样覆盖负荷变化及真实控制；指标总量另存，不能由一个残差虚构物种或两个反应进度。 | kg; actual gas-state m3 | 连续或有依据的代表性事件采样 | 制造失败及服务事件分别标识 | 真实取入排放点及接收介质 | 每 1 m2 参考流 | 仪器原记录; 检出限; 独立水或碳化相态; 样品身份; 不确定度 |
| cp_waste | manufacturing_controls | each real waste stream | measured | row_id; 工序或批次; 整份湿质量; 固体水及留存流体子账; 期初期末废物; 样品失败; 内部复用; 对外毛发运或出售; 处理所有者; 正当独立功能交接 | 称量真实分流及留存库存，取样组成并核验去向与处理记录；避免重复拆出零件或流体，不因不合格或废物外售自动移除负荷。记录真实作业后许可、检验、验收与处置。 完整湿态制品接收已一次包含其整体木材/紧固件/涂层及所含水。现场另加部件或水仅在与整件接收互斥时作为独立真实入流；保留制品/组分桥与成对内部交接，合并时不得同时相加整件装配皮重及其同一组分。若实际只有一个混合包材废物出口，逐来源材料独立实测W并保留非叠加原始来源子账，核对sum(origin W)等于实测混合总量，使用一个已核实的实际Waste交换及处理所有者。总量或其互斥分项二选一，不同时叠加。材料W卡仅在实物真正分流时才是独立出口；否则只作该来源子账，不虚构分离出口。仅在真实发生该出口时新增并核实单一混收出口卡，不预设混收必有。 | kg | 逐次处置、返工、试验及盘点 | 完整报告期含全部失败 | 真实产生及处理门 | 每 1 m2 参考流 | 称重单; 实验室试验; 去向处理凭证; 交接理由 |
| cp_assets | manufacturing_controls | each asset part and contained fluid | measured | 资产或零件 row_id; 完整配置实测质量; 期初在用及期末本体或内含流体; 真实新增 X_in; 旧件移除 X_out; 维修水; 实际服务计数; 有依据能力及负荷向量; 未使用或未分派费用; 受益作业或批次 | 使用真实配置图、校准称重或适配可追溯制造商质量记录及维修服务日志。按真实使用和有依据能力量化正当隐含服务，仅结转未使用或未分派服务，不设固定寿命。新增维修料或水即使留在期末在装状态仍保留入流；完整零件与流体不在子账重复。 | kg; m3; service-counter original units | 逐次购入维修退役及服务时段 | 完整资产历史及当期真实服务 | 每件声明资产及受益批次，含成品服务 | 每 1 m2 参考流 | 配置; 校准质量; 持续维护的服务能力证据; 库存及维修记录 |
| cp_packaging | cohort_services | each whole packaging article | measured | 材料包材 row_id; 上游所有者; 期初期末空置; 期初期末附着在制品或成品; 期初期末复用; P; I; ER; S; EO; W; 实际皮重及状态; 内部复用; 原 Q_H 及 H; 独立真实维修新旧零件材料; 吸收留存释放水相; X_in/X_out; 同方向其他流项重叠关联; 完整独立湿态存量; 六个原子方向各行ID；整件组成部件/含水；互斥现场新增；成对制品/组分桥；独立实测来源W与单一混收总量；总量或分项标记；唯一处理所有者 ；包装P/I/ER来源与付费/非采购依据；同件原外发ID；继承服务所有者及向量 | 逐件或逐材计数称重实际包材及附着库存，保持含水状态适配。核实随货入流及唯一上游所有者。独立闭合完整六腿等式；内部复用抵消，新增真实入流在期末附着或空置库存增加时仍保留。保留未按负荷份额缩放的物理毛数量。  独立称量真实维修材料和水增减，X只补其他同方向流项未表示的物料，绝不与期初期末存量抵消。完整湿态P/I制品接收只计一次且上游只归属一次；真实留存流入与完整湿态期末质量同时保留。 完整湿态制品接收已一次包含其整体木材/紧固件/涂层及所含水。现场另加部件或水仅在与整件接收互斥时作为独立真实入流；保留制品/组分桥与成对内部交接，合并时不得同时相加整件装配皮重及其同一组分。若实际只有一个混合包材废物出口，逐来源材料独立实测W并保留非叠加原始来源子账，核对sum(origin W)等于实测混合总量，使用一个已核实的实际Waste交换及处理所有者。总量或其互斥分项二选一，不同时叠加。材料W卡仅在实物真正分流时才是独立出口；否则只作该来源子账，不虚构分离出口。仅在真实发生该出口时新增并核实单一混收出口卡，不预设混收必有。  包装接收按packaging_receipt_basis，单独非采购接收归I，不能虚构ER或X。| kg; actual counts with measured tare | 逐次收货包装发运退回报废及盘点 | 期初历史及完整原批次观测期 H | 包材仓库、在制品或成品及全部外部门 | 每 1 m2 参考流 | 皮重测量; 全部六腿凭证; 供方所有权; 附着库存记录 |
| cp_services | cohort_services | each original-cohort incremental service exchange | measured | row_id; 原单元或批次; 原首次放行面积 Q_H; 观测 H; 期初期末成品及继承制造或已执行服务向量; 实际新增服务原单位; 毛 G; 实物 R; 原交付 D_rev; 新增水或损失; 作业后许可检验验收及处置; 真实新增移出的新旧材料零件; 独立水相; 有标识维修滞留成品或互斥维修在制品; 真实制造商规格许可; 工作后试验; 验收拒收及最终去向; 完整Product与破损Waste退回分开; 原生投影面积及独立湿质量 | 将真实留库、搬运、包装、发运及退回单元追溯至原放行和交付事件。按真实服务类型及原生广延单位计量增量作业；留库成品已执行服务也保留。复验或再交付不产生 Q；以实际退回质量状态对比原交付，不预设相等。  真实跨过程首次放行移交按单元/批群与制造输出配对，合并时抵消；仅为保管，不是额外环境输入或采购。毛发运和同身份完整退回分别量测原生Area与湿质量，破损退回独立称整份湿态Waste质量，不强制kg/m2或等于原交付。真实工作后材料水增减及维修保管只记一次，留库成品已执行服务仍归原Q_H/H。 原包装W卡保留本服务事件协议，并按各行将真实整件湿态废弃毛量关联cp_packaging的W；实物处置、去向和处理独立量测，不取增量服务负荷代替W。 制造商/规范许可与工作后试验仅决定授权、持续合格及验收/拒收/处置资格。所有真实已执行的未授权、未批准、失败或拒收作业及其全部材料/部件/水/能耗、排放、损失、废物和负荷均须独立记录，并归属正确原始Q_c或Q_H/H，即使未获许可或试验失败也不删除。这不授权该作业，也不假定破损水硬性材料恢复原功能，不新增Q。 | MJ; kg; m3; m2 | 每次服务时段及毛流腿 | 观测期 H 与原批次记录绑定 | 真实原批次成品服务门 | 每 1 m2 参考流 | 原放行交付链接; 毛流腿记录; 分表; 更新含水; 许可检验及不确定度 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_area | accepted_paver | Q_c = sum(n_j * a_j); a_j 为独立实测或可追溯图纸对应的单面投影面积; n_j 为唯一首次放行符合品件数。仅已证实矩形使用 L*W。同批新放行的期末成品已在 n_j 内。  声明单一投影平面及实测净轮廓，包含联锁形状并扣除真实孔洞/切口。排除安装接缝/间隙、相邻单元及双面或所有表面积累加。L*W仅用于经核实无开口的实心矩形；EPD尺寸、厚度、密度或质量/面积系数不构成实测换算。 | n_j; a_j; cp_release | Q_c | `masa-concrete-block-production`; `marshalls-through-mix-2023` |
| raw_conversion | all inventory rows | 归属前将每项原始广延数量换成本行单位。真实速率仅积分一次；积分体积不再乘时间。只在需要处用该物质实测密度状态及真实 LHV。电力 MJ = 实测 kWh * 3.6。保留原始记录及独立物理、物种账。 | raw_records; state_measurements; cp_utilities; cp_water | converted_raw | `jrc-ilcd-2010` |
| manufacturing_vector | manufacturing rows | A_m,e = B_open,e + X_owned,e + T_in,e - B_close,e - T_other,e。归一化前执行 boundary_burden_stocks 与 allocation_hierarchy；B_close 排除已放行成品。已扣库存消耗不能再扣；普通废物或外售不是 T_other。 | B_open; X_owned; T_in; B_close; T_other; cp_raw; cp_assets | A_m | `jrc-ilcd-2010` |
| service_vector | service rows | A_s,e 为观测期 H 内实际原批次增量服务，经过专属归属、细分及正当残余分配。留库成品已执行服务保留。Q_H 为原批次首次放行面积，不是毛发运减退回；另存 G/R/D_rev 及继承负荷桥接。 | raw_service; original_cohort; Q_H; H; cp_services | A_s | `jrc-ilcd-2010` |
| normalize_once | all inventory rows | a_e = A_e / Q_b; A_e 为本行单位下已对账归属但未归一化的广延分子; 制造 Q_b = Q_c，服务 Q_b 为对应原 Q_H。仅在 Q_b > 0 时执行这一次除法。参考产品输出严格为 1 m2。Q_b = 0 时保留 A_e 而不出单位结果。 对明确标识的实物保管行，包括每项P/I/ER/S/EO/W包装方向、真实成品门移动及资产实物取得/移出，A_e改指独立实测、未分配且按该行原生单位记录的gross移动量。须标明实物基准，仍只按同一原Q_c/Q_H除一次；不对gross腿做存量校正或经济份额缩放。它不是归属LCI负荷向量、新生产/采购或自动负荷转出/credit。绝对gross账与原制造/服务向量另保留；资产服务行只保留有据服务负荷，不替成整台资产实物装入量。 对真实外部载体/返回腿m_steam、m_heat_carrier_water、s_heat_carrier_water、m_condensate、m_return_water，A_e表示以该原生行单位独立实测的完整实物毛量V_e，不是分配负担向量、净耗用、库存差或经济份额。制造腿以Q_c、服务腿以观察H内关联原始Q_H，仅对V_e应用normalize_once一次。入流与返回的绝对毛量分别保留，即使两者数值相同；真实温度、压力、相态/品质、焓与交付热MJ独立测量。同一约定水/热供应方仅承担一次供应负荷，此物理载体/返回不是再次整份采购、外送抵扣或假定锅炉/回路。只对OTHER同侧其他物理流中同一真实流项/事件去重；不与库存、对侧流或仅已存在的卡抵消。尚未列出的真实返回在使用前须另建并核实其实际原子卡，不预设返回或工艺必有。 | A_e; Q_b; Q_c; Q_H; cp_release | a_e | `jrc-ilcd-2010` |
| physical_gates | all physical records | M_open + sum(X_in) = M_close + sum(X_out) + delta_installed。按 boundary_physical 分别闭合制造、成品和合并门，采用真实湿态及唯一新 Q 质量；仅抵消同一内部转移。无论负荷分配如何，毛流腿完整。相关元素平衡与物种及水化碳化进度独立校核。 | physical_raw; wet_stocks; installed_change; phase_species_tests | physical_balance | `jrc-ilcd-2010` |
| packaging_six_legs | each packaging material | O_empty + O_attached + O_reusable + P + I + ER + X_in = C_empty + C_attached + C_reusable + S + EO + W + X_out。逐包材执行 boundary_packaging；真实入流与完整期末库存同时保留，仅抵消内部复用。  独立称量真实维修材料和水增减，X只补其他同方向流项未表示的物料，绝不与期初期末存量抵消。完整湿态P/I制品接收只计一次且上游只归属一次；真实留存流入与完整湿态期末质量同时保留。  每次真实P/I/ER接收均按packaging_receipt_basis区分。| O_empty; O_attached; O_reusable; P; I; ER; C_empty; C_attached; C_reusable; S; EO; W; cp_packaging; X_in; X_out; actual_repair_material_water; same_direction_overlap_evidence | package_balance | `marshalls-through-mix-2023`; `jrc-ilcd-2010` |
| measured_mass_area | actual mass-area conversion only | m_bare_per_m2 = 同一真实图纸配置含水龄期总体的实测裸品净质量 / 独立确定投影面积。不能用 EPD 示例、原生次级因子、假定密度或单件质量。原生 Area 参考本身无需此换算。 | measured_net_bare_mass; projected_area; cp_release | m_bare_per_m2 | `marshalls-through-mix-2023` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | each bound or unbound row | 在完整卡片上下文保留各原生材质、形态、路线、牌号、地理、介质、type 及属性限制。供方、牌号、量值缺失是采集要求，不允许换成其他产品族；查询成功不证明适用。 | 完整身份及供方适配证据 |
| dq_completeness | entire observed route | 保留失败、零产出、启停、空转、清理、留存养护在制品、完整湿库存及全部真实原子流，含条件新增。区分不存在、未测量、零和未知。 | 覆盖账及完整库存服务历史 |
| dq_sources | method and site evidence | 保留来源原始上下文及相反路线；工业证据不批准 LCA 分配。采用有校准、不确定度、代表性及实测、计算、暂定区分的真实场址时段数据，不移用来源数值配方或抵扣。 | 来源及原始前景记录和不确定度评估 |
| dq_translation | bilingual units and native displays | 保持同一首次放行、面积与服务基准、限定信息、过程行规则来源 ID、公式及实际原生中文名；对齐和工程检查不构成科学或翻译审批。 | 双语全字段复核 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_terminal | reference product | 须确认完整混凝土铺块 Product/Area 身份、可追溯真实几何、养护后整检验验收及全部必需限定信息。未解决或不相容的核心终端身份是真实阻塞，不能由机械检查推导可用或 authored 覆盖。 | `masa-concrete-block-production`; `cmha-pav-tec-010` |
| validate_units | each inventory and calculation | 逐行核对原生广延属性、精确适配单位状态及全部真实换算，normalize_once 只执行一次。核实唯一参考行 accepted_paver、1 m2、全部原始采集链接及 Q=0 行为。单位或 Schema 通过不能解决未知方法关系。 | `jrc-ilcd-2010` |
| validate_history | cohorts physical and burden vectors | 对账期初期末养护在制品及全部继承交换、含期末成品一次的首次放行 Q、真实原批次服务或 Q_H/H 和毛 G/R/D_rev。不得扣成品制造或已执行服务。独立闭合制造、成品及合并湿质量、元素和包材六腿，不拟合多个未知或缩放物理腿。 | `jrc-ilcd-2010` |
| validate_allocation | each attribution and burden transfer | 核实专属归属细分、逐交换决定性物理因果及仅真实剩余的同门同状态同期市场价值。普通损失及废物处理保留归属；任何 T_other 须真实独立功能或批次及正当一次交接。 | `jrc-ilcd-2010` |
| validate_rework | actual post-release work | 须有制造商或规范允许、真实新增投入产出水及损失、作业后检验验收处置及原批次追溯。不假定破损铺块恢复，复验或交付不产生新 Q。 | `cmha-pav-tec-010` |
| validate_gap_reporting | concrete foreground dataset | 明确报告辅助 UUID 未解决、不适配供应数据、缺原始活动、采样或不确定换算等完整性限制。不编默认、不把未知当零、不把 draft 算覆盖，也不把工程证据当科学、翻译、映射或发布审批。 | `jrc-ilcd-2010` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 终端几何含水及观测服务范围相符的适配上游混凝土铺块投入 |
| allowed_use | 声明真实牌号场址时段且明确匹配的完整裸铺块；原批次服务仅限已观测 H |
| excluded_use | 安装路面功能等效、整个 CPC37540 覆盖、其他材质路线、未测寿命、自动碳化或回收抵扣 |
| required_metadata | 全部必需限定信息、供方原生限制、过程来源 ID、物理及负荷边界、原单位和计算 |
| required_quality_disclosure | 未知及未解非核心身份、校准代表性不确定度、真实湿相及历史、独立审查状态 |
| update_trigger | 真实胶结料骨料配方几何路线门或供货变化、新证据或相态试验、供应替换、科学或翻译复核 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| masa-concrete-block-production | handbook | Masa, Concrete Block and Paver Production; https://www.masa-group.com/Dokumente/Prospekte/Masa_concrete-block-paver-production_EN_ma-0000026y.pdf | 完整设备路线语境、配料振压养护、QA、托板循环及可选面层表处反例；产量周期尺寸示例不作默认。 |
| marshalls-through-mix-2023 | dataset | Marshalls, HUB-0305, Concrete Block Paving - Pigmented Semi Dry Mix, 24 February 2023; https://media.marshalls.co.uk/image/upload/v1678718418/EPD-Marshalls-Pigmented-Concrete-Block-Paving.pdf | 历史八场址整体同料半干法制造及市场状态案例，区分养护包装；不移用配方、面积质量、厚度因子、寿命、碳吸收、可忽略废物或质量体积分配。 |
| cmha-pav-tec-010 | extension_guidance | Concrete Masonry and Hardscapes Association, Application Guide for Interlocking Concrete Pavements, PAV-TEC-010; https://www.cmha.org/resource/pav-tec-010/ | 独立材料、压力振动及铺块功能语境，须真实规范和检验证据；应用尺寸及等级不作默认。 |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook General Guide for LCA - Detailed Guidance, first edition March 2010, sections 7.9.2–7.9.3; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因型细分或虚拟细分、逐交换决定性物理因果及残余真实状态过程门市场价值和反例；前景核算规则为明确操作化，并非铺块化学或行业比例声称。 |
| epa-concrete-batching-2012 | official_guidance | US EPA, AP-42 section 11.12 Concrete Batching, June 2006 with January 2012 editorial corrections; https://www.epa.gov/sites/default/files/2020-10/documents/c11s12.pdf | 配料原料搬运、除尘语境及预拌混凝土与混凝土制品区别；不采用排放因子，也不作养护化学或分配依据。 |
