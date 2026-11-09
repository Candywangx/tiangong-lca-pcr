---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.factory-assembled-steel-frame-mineral-wool-office-cabin
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
translation_status: aligned
---

# 完整工厂装配钢框架矿物棉办公室舱体

## 1. 范围与适用性

本PCR规定单座新制完整工厂装配单层钢框架办公室舱体的制造，含矿物棉底墙顶保温、声明的板材内衬地材选项、完整门窗及固定电气。受控真实配置必须显示以金属为主的整件预制建筑；结构骨架、货运集装箱、构件包或外购完整舱体再包装均不满足。制造商CLASSIC Line文件支持该构造，并区分卫生走廊材料及拆装替代项。SHEQ报告提供其生产网络的定性加工涂装总装背景。二者为透明技术综合，不是已证明同一个当代SKU工厂或订单。不将来源专属数量性能认证移作通用默认。

所选供货终端为首次工厂质量放行的独立完整已装配办公室舱体，不是现场完成的多舱建筑。本配置排除卫生管道暖通活动家具货运功能、基础现场吊装拼接公用接地工程、使用维护及寿命终结。配置变化须在同一PCR身份下另披露数据集并重新评估适用性，不为不同选项另造平行身份。拆装或不完整建筑可能属于更广CPC类别，但本已装办公室方法不声称覆盖。

所选配置采用真实 P5 刨花板地板、乙烯基卷材地面覆盖层、涂饰刨花板墙顶内衬及底墙顶矿物棉。来源列出的水泥木屑板、OSB、胶合板和 PU/PIR/岩棉夹芯替代方案不混入本清单。这些有证选项界定有建模意义的较窄方法，不是规定牌号配方或声称所有组合均来自同一实测 SKU。完整供货永久建筑内容须包含真实配套接地夹，及其外真实单供安装螺钉，即使以散件交付。净供货质量只排真实运输临时保护和搬运资产，不把必需永久五金作为包装漏掉。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.factory-assembled-steel-frame-mineral-wool-office-cabin |
| classification_refs | CPC 3.0 38702; narrower product and route boundary |
| covered_products | 带矿物棉围护及指定固定电气的新制完整工厂装配单层钢框架办公室舱体 |
| excluded_products | 货运或储存集装箱；仅钢材材料或构件供货；裸建筑骨架；卫生模块；现场拼接多模块建筑；拆装套件；混凝土或木主导建筑；翻新与施工服务 |
| representative_product | 具有受控整件建筑包含清单、几何及验收状态的一座独立完整办公室舱体 |
| production_route | 从收到冷轧板材开始开料成形焊接框架及真实底涂粉末防腐；镀锌板、矿物棉、木材和板材围护装配；门窗电气安装；工厂检查及首次放行 |
| market_state | 首次工厂质量放行的新制完整已装配办公室舱体；计入真实留存水分；排除运输保护；基础、现场接地公用连接及使用在门外 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 完整指定金属办公室建筑的制造及首次质量放行 |
| How much | 同一首次放行完整指定舱体的1 kg；Q为其首次放行队列实测净千克 |
| How well | 满足受控整件包含清单及真实配置专属工厂检查；功能性能声明须独立证据，分类或目录选项不予暗示 |
| How long or cycle | 每座一次制造放行事件；不设建筑使用寿命或使用服务 |
| reference_flow_link | `finished_cabin` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 金属预制建筑 `2e810bc4-023d-4ad0-8466-3a3978f815e1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers |制造商工厂地区期间; 单座完整办公室舱体序号配置; 金属主导建筑身份及非货运状态; 整套供货包含排除清单; 实际层数及楼面面积定义实测; 内外几何及洞口; 框架牌号板材及连接路线; 供应与厂内涂装门及真实制剂; 底墙顶层次及含水规格; 仅以有证配置数据报告热工气密防水防火声明; 门窗及已装电气完整性; 本配置不含卫生暖通活动装饰设备; 外购整件与互斥厂内组分; 首次放行事件及实测净千克Q; 原材在制成品及继承交换向量; 原Qc及放行后服务观察窗H; 全额物流返还包装池及接收门; 真实试验失败批返工空转清理; 来源原生身份适用性及上游缺口; 真实 P5 地板乙烯基涂饰刨花板所选装配; 完整随货永久接地五金及现场投用接口 |

每项限定均须在数据集元数据参考备注或等效完整记录中声明。1 kg是整件建筑的缩放基准，不是独立一千克钢材。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| release_mass | 参考产品 | Mass | kg | Q为本队列每座指定完整舱体首次质量放行一次的实测净千克之和。用经校准秤称量或核对完整真实配置的经校准分项质量；只减实测排除的运输及临时物。目录近似重量不是Q。 |
| single_normalization | 全部清单行 | Declared native property | Declared native unit | raw V保留原单位；真实速率先按时间积分并换算单位，再做物理核对和负荷归属。已积分体积不再乘时间。normalize_once产生唯一每参考流结果。采集保留raw量，不采预先相除结果。 |
| native_chain | 带UUID行 | Exact reference property | Exact reference unit | 所选流保留完整原生限制及精确参考属性版本、单位组版本和参考单位链。Number of items的Item(s)与item仅拼写不同，因子1；不推定件转千克、面积转质量或密度。必要换算须有独立实测同配置净质量或真实几何、物质专属密度及状态。 |
| solid_volume | timber_stud; floor_board | Volume | m3 | 真实锯材及P5刨花板保留原生实体积单位。逐批测供货领用净实体几何及含水；物理闭合另独立称湿质量。密度换算仅可依据真实状态同材料独立实测，不用目录或次级属性系数。 |
| water_energy | 水与热燃料电力 | Declared native property | Declared native unit | 整份供货制剂及制品与非加和含量子账分开；只有有证时才区分留存、游离、液态、蒸气、结构及反应水。电力kWh乘3.6得MJ。真实载热水、凝液或热水返还须记全额质量、相态、温压、焓及供方水能归属；一份供给不得千克和热MJ双购。不假设蒸汽锅炉回路。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 从真实供应门的采购板材成品材料及完整部件开始；记录期初原材在制成品流体包装库存 |
| starting_condition_role | 前景工厂制造；上游开采炼钢轧制镀锌及供应商制品制造分别连接 |
| product_classification_scope | 更广CPC38702中的完整金属预制建筑；仅所选完整已装配单办公室配置 |
| recursive_input_rule | 实际采购同类完整舱体作为独立输入，保留原门及继承负荷；翻新或转售不变成本新制输出，不递归重复制造 |
| upstream_dataset_requirement | 每种真实供货原子材料制品公用及外包步骤连接相容牌号路线形态地区组成单位与服务门；披露未匹配输入并防重复供应工作 |
| disclosure | 声明工厂边界、真实供应与厂内分工、整套配置、实际观测及缺失记录；首次放行Q与发运服务Qc区分；上游运输处理资产覆盖；不作无证全摇篮到门或性能声明 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| complete_terminal | reference product | 仅受控包含清单确认框架围护门窗装饰及电气完整的指定办公室建筑可作终端。材料清单、单梁、货柜、裸框架或单构件收货不能独立证明本终端。制造商示例支持技术综合，不声称同SKU同工厂同订单。 | `containex-classic-2025`; `unsd-cpc3-2025` |
| actual_manufacture | factory operations | 包括真实接收开料冲孔折弯焊接、框架前处理涂装、围护制作装配、电气安装、检查返工抽排及清理。记录真实物化投入和出口，不缩成外购完整舱体包装。供应成品镀锌板、板材、门窗或电气模块一次承接供应制造，不重复炼钢镀锌或制品配方。 | `containex-sheq-production`; `containex-classic-2025` |
| article_bridge | all supplied articles | 选择完整供货制品制剂或互斥采购组分，或采用明确核对且抵消内部交接的桥接。整件湿质量不能再叠加其木钢玻璃保温水树脂。含量、载水及活性组分为非加和子账。真实厂配须逐外购组分、真实能耗损失及配方记录。 | `containex-classic-2025`; `containex-sheq-production` |
| gate_and_exclusions | production and post-release | Q在首次工厂质量放行发生，包括留在期末成品中的本队列。不得从已放行输出扣期末成品或再加一次。真实包装仓储搬运发运重验及增量维修另立服务账，绑定原Qc与观察窗H。未来未执行服务未知。合并抵消内部放行交接；基础、现场吊装拼接接地连接、使用及后续寿命分列。 | `containex-classic-2025`; `containex-sheq-production` |
| nonzero_and_stock | all cohorts and physical gates | 保留失败拒收未授权零产出批、启停空转清理试验及真实返工负荷。期初期末在制品逐真实物质及继承的逐交换负荷向量记录，交接同时携带二者不丢失不重复。原材非在制库存、成品流体废物和复用资产分开。重验退回授权均不创造Q或抹去实际负荷。 | `containex-sheq-production` |
| atomic_extension | actual exchanges | 卡片是有条件单一交换，不是强制配方。数据集闭合前，每种真实未列紧固件密封膜胶清洗剂磨料燃料气体反应物种捕集粉尘废物及去向逐卡新增。身份依供应SDS和工艺证据。实际焊剂保护气涂层化学空气水路线或分子平衡未知须未决；缺席要有证，不能写零或藏other集合。 | `containex-sheq-production` |

### 整套供货及来源适用性

所选配置采用真实 P5 刨花板地板、乙烯基卷材地面覆盖层、涂饰刨花板墙顶内衬及底墙顶矿物棉。来源列出的水泥木屑板、OSB、胶合板和 PU/PIR/岩棉夹芯替代方案不混入本清单。这些有证选项界定有建模意义的较窄方法，不是规定牌号配方或声称所有组合均来自同一实测 SKU。完整供货永久建筑内容须包含真实配套接地夹，及其外真实单供安装螺钉，即使以散件交付。净供货质量只排真实运输临时保护和搬运资产，不把必需永久五金作为包装漏掉。

工厂门是完整已制造单座建筑供货，保留声明的已安装及随货待安装状态。不据此声称基础支撑、现场吊装、去运输盖后孔洞密封、保护接地、公用连接、现场结构排列或投用已完成。CLASSIC 要求现场基础支撑条件及投用前客户接地电气检查，并说明空舱道路运输及另一个 Transpack 方案。真实下游接口和来源限制必须保留，目录载荷、几何、角度、扭矩、电气额定值或寿命不作数据默认。完成所选工厂供货所需自有工序，无论实际地点均须包含，移动发票或把未完模块称完整不能删除它。真实现场装配、未完成或多舱建筑需另有证路线，不属于本次终端。

每项外供板材、保温棉、板制品、门窗、线束、配电总成、灯具、连接器、接地夹、制剂、燃料和包装须有真实完整相容上游生产者或互斥展开清单。按实际制品覆盖金属开采炼钢轧制镀锌、纤维粘结剂与板材生产、电气部件及装配、涂饰、公用维护包装废物。整份供货制品含已识别零件、树脂载水、涂层和安装五金一次。来源照片和产能是定性证据，不是当代供方订单实测。独立证据不要求同一工厂 SKU；实际不相容供方、路线、形态、地区或属性仍未决。在完整真实供方接口和全部实际自有制造覆盖前，不作全摇篮到门声明。

真实工厂清理、连接、预处理、涂装固化及完整化学物种去向，均按真实供方厂内门纳入。历史来源说明底涂加粉末层，不规定纳米化学、脱脂磷化配方、固化反应、燃烧器、气比或排放因子。记录真实制剂含量、外购预混与单供气、捕集粉尘滤芯擦拭物、液体排污及每个真实介质。实际现场燃料须有完整空气燃料水分子物种和能量接口，背景载气 CO2 区别于生成化石或生物源碳。不推完全燃烧、将 PM/NOx/VOC 当分子、全部溶剂挥发、反应物种守恒或残差补水。未知材料化学或关键物种采样适用性使对应具体清单未决；普通实批 QA 尚未实施本身不等于不存在方法。

采用的整件 Product 是主要金属、已制造成品建筑族，工厂生产组合，Mass/kg 及其真实参考属性单位链。它不提供配方、国家、配置、楼面面积或每座千克。有源钢框架完整舱制造及真实包含验收记录支持所选产品；钢材板件货柜、不完整模块和安装服务均不替代。辅助原生名称含宽泛解释替代项：刨花板不是 OSB，锯材不是整木框，完整外窗保留玻璃框五金，粉末涂料为干态供货制剂，低压已装配电板不是空柜。每项真实已绑定材料须满足全部硬字段，限定不能覆盖反证。绑定中国低压电仅限真实中国供电，不证明欧洲制造商案例消费中国电力。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_pack | 每个真实材质池 | O + P + I + ER + J_in + H2O_in = C + S + EO + W + J_out + H2O_out。各项均为同一材质或资产池的真实 kg。O/C 为完整湿态期初期末空、附在制、附成品和周转库存。P 为新增外采，I 为互斥供方随货整包装入向，ER 为收到外部返还，S 为随完整毛发运带出，EO 为独立向外返还，W 为整湿废弃物。J_in/J_out 为独立实测且未含于上述整物方向的非水修理、替换、沉积、残留或其他跨池转移。H2O_in/H2O_out 为独立实测且未内含于整物方向的真实水转移，含无修理的自然吸脱湿。真实新增或移除湿材料须按实测拆为互斥 J 和水，不设默认比例或密度。完整 W 已含基材、留存残余及水一次，除非跨界前真实分离，其嵌套子项不另列 J_out/H2O_out。配对内部池转移合并时抵消，不新增采购、服务或 Q。 |  |

CLASSIC 英文原件为发布者译本，并明示有疑问时查德文版；未决翻译或技术歧义不能靠关键词或便捷原生单位修补。历史 SHEQ 正文说明机器人及等离子加工、框架焊接、底涂粉末层、总装检查装车，不证明通用实心焊丝 MAG 工序、保护气配方、能量来源或涂层化学。具名耗材设备卡仅在真实有证操作下适用。CLASSIC 与 SHEQ 同一发布者，是不同规格与历史生产证据，不是两份独立工厂观察。配置、国家、版本和认证限制全部保留，不采营销环境优势。

## 6. 过程清单结构

各卡为单一物理交换及有条件证据要求，不是默认BOM。闭合时每种真实独立制品制剂工艺投入废物化学物种及去向必须有独立卡。供货制品已内含组分时，采用互斥表示或核对制品桥接并抵消内部交接，不把整件湿质量与内含材料再次相加。单一真实混合废物用一个总量及独立实测非加和originW子账和一个服务方。不得用零other未决UUID或缺卡隐藏真实交换。完整卡片说明及全部供应原生限制属于规则。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| frame | 框架制作及防腐 | required | 真实板材加工连接及声明框架表面路线 | 前景制造或真实队列服务 | 每 1 kg 参考流 |
| envelope | 保温围护制造装配 | required | 真实互斥部件及声明完整层次配置 | 前景制造或真实队列服务 | 每 1 kg 参考流 |
| fitout | 完整门窗及固定电气安装 | required | 受控完整办公室舱体供货清单 | 前景制造或真实队列服务 | 每 1 kg 参考流 |
| release | 整舱检查及首次质量放行 | required | 独立完整已装舱体 | 前景制造或真实队列服务 | 每 1 kg 参考流 |
| support | 真实工厂公用及物理物种账 | required | 每个独立进出仅真实发生时 | 前景制造或真实队列服务 | 每 1 kg 参考流 |
| postrelease | 真实放行后包装及成品服务 | conditional | 仅绑定原Qc截至观察H实际执行服务及全额移动 | 前景制造或真实队列服务 | 每 1 kg 参考流 |
| assets | 真实生产搬运设备台群 | conditional | 仅真实实物台群服务事件，不是必需设备配方 | foreground support | 每 1 kg 参考流 |

### 过程：框架制作及防腐（`frame`）

#### 输入

##### 产品流

###### 舱体框架用冷轧非合金钢板（`steel_sheet`）

用于实际开料、冲孔、折弯及底顶框架焊接的进厂板卷；保留钢厂牌号、厚度、表面及供应状态，镀锌板材属另一供货身份。钢厂轧制和炼钢在上游。分别称量领用与未用退料，不用目录钢重系数。 工厂生产组合的钢板材，以铁及少量碳锰硫磷硅组成，原生允许冷热轧。本卡仅用于供应商牌号厚度表面确认的真实收到冷轧非合金钢板，不是杆材合金钢成品框架或涂层配方。普通供应牌号缺失不授权编值。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：钢板材 `13082a6a-e820-45ec-89f5-3c2c3650495b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_frame`
- 来源：`containex-sheq-production`

###### 实心碳钢焊丝（`weld_wire`）

仅实际焊接采用此实心焊丝时启用。记录型号、组成、焊丝盘领退及焊接规程；来源支持焊接，不规定此耗材或通用MAG路线。若使用其他焊条或焊剂则逐项新增。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：实心碳钢焊丝
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_frame`
- 来源：`containex-sheq-production`

###### 氩气与二氧化碳焊接保护预混气（`shield_premix`）

仅真实采购该预混气且焊接规程采用时启用。整份供货混合物只采购一次；实测组成及气瓶净质量或状态明确的体积与密度。组分仅作非加和子账。纯气体另列互斥供货行，不设混配比例。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：氩气与二氧化碳焊接保护预混气
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_frame`
- 来源：`containex-sheq-production`

###### 框架防腐底涂供货制剂（`primer`）

粉末涂层前实际使用的一种外购底涂制剂。历史报告称纳米技术底涂，但未给配方、树脂或槽液浓度。保留供应商SDS、含载水的整份制剂、补加、槽液库存和真实损失；活性含量及载水只作子账，不另采购。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：框架防腐底涂供货制剂
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_frame`
- 来源：`containex-sheq-production`

###### 框架粉末涂料供货制剂（`powder`）

一种供应商确认的完整粉末涂料。记录树脂、交联剂、颜填料组成，不编配方。称量新增、可复用粉末池、过喷及废物；内部回收过喷不再采购。采集真实前处理、施涂及固化条件与能耗。 工厂完整自由流动干粉涂料，用于带电表面施涂及真实热或UV固化。未固定树脂溶剂分数温度时间效率性能。一种供货制剂只采购一次；普通组成服务缺口须采记录，不能换成湿油漆或已涂构件。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：粉末涂料 `0c581697-0eed-4b86-a070-b94966eb7344`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_frame`
- 来源：`containex-sheq-production`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 分类收集的钢加工边角料废物（`steel_scrap`）

实际离开边界的钢边角料，说明合金、涂层、污染及接收方。对外输出用全额实物流，废物产生和期末库存另记。内部复用抵消，不自动成为可售产品或获得替代钢材抵扣。 仅中国厂内切割成形钢下料Waste，未提供良率废料率。其他地区油污焊接污泥拆建钢或其他真实状态须另配身份；不采用5%假定或自动回收抵扣。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：钢废料 `f80ac6d2-641b-4a7c-a309-1142663d01d8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_physical_frame`
- 来源：`containex-sheq-production`

###### 框架前处理废污泥（`coating_sludge`）

仅本涂装路线真实产生的湿污泥。干物质、水及实际危险组分是这一湿废物的子账，不重复列废物流。组成缺失须分析，不用残差拟合。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：框架前处理废污泥
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_physical_frame`
- 来源：`containex-sheq-production`

###### 不可回收的框架粉末涂料废物（`powder_waste`）

仅实际交付废物管理的粉末；区分可复用喷房库存、滤材截留粉末及对外废物。按污染和接收去向确定身份。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：不可回收的框架粉末涂料废物
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_physical_frame`
- 来源：`containex-sheq-production`

##### 基本流

### 过程：保温围护制造装配（`envelope`）

#### 输入

##### 产品流

###### 成品镀锌钢舱体围护板材（`galv_sheet`）

屋顶、底部或外墙采购的镀锌板，在原始记录中按用途及涂层状态分别识别。外购预涂板已含供应商涂层，不再加锌或供应商油漆。保留厂内真实压型与切割。不同牌号或涂层须拆行。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：成品镀锌钢舱体围护板材
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_envelope`
- 来源：`containex-classic-2025`

###### 成品矿物棉舱体保温毡（`mineral_wool`）

仅真实矿物棉路线，底、顶、墙用量分别记录。保留纤维类别、粘结剂、覆面、含水、尺寸和供货质量。岩棉与玻璃棉不自动互换，不规定密度、热工值或厚度。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：成品矿物棉舱体保温毡
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_envelope`
- 来源：`containex-classic-2025`

###### 成品锯材舱体墙龙骨（`timber_stud`）

用于来源支持的矿物棉墙木框架及真实屋顶横梁。记录树种、处理、等级、含水及实测质量；区分原材、安装木材及边角料。不推定树种、干密度或防腐配方。 工厂锯刨定尺建筑木材；松橡是例子非规定树种。保留原生Volume/m3。测真实实体尺寸体积及含水状态；闭合质量另独立称湿质量，或用同状态同材料独立实测密度。不用次级系数或默认密度换算m3为kg。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：木材，方材 `ca253295-1699-4c83-9933-9467a136a4fc`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_envelope`
- 来源：`containex-classic-2025`

###### 成品P5刨花板舱体地板（`floor_board`）

仅声明采用的真实P5地板选项。相邻列出的水泥木丝板、OSB和胶合板是替代选项，不是同时配方；实际采用其他选项须另设原子卡。外购板材一次承接其树脂与供应制造。 仅真实P5刨花板地板，属于木片刨屑与树脂制成的成品板族，不表示正式中文宽名中的全部替代物。UF仅为常见描述不是强制配方。保留原生Volume/m3；采真实板净实体积及独立湿质量含水，不用默认密度。不重购饰面或供应树脂。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：刨花板、其他人造板（非木质人造板、细工木板、胶合木、重组装饰材、饰面人造板等） `f4a05509-d5ba-4e62-a3fa-9cc2bf91ef5a`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_envelope`
- 来源：`containex-classic-2025`

###### 成品覆面刨花板舱体内衬板（`lining_board`）

真实覆面刨花板墙、顶及隔断内衬。逐规格及供货饰面识别；供应商树脂及涂层已内含，不再采购。金属或石膏板内衬替代项不属于本配置，除非另行声明并列清单。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：成品覆面刨花板舱体内衬板
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_envelope`
- 来源：`containex-classic-2025`

###### 成品乙烯基舱体地面卷材（`vinyl_floor`）

一种实际完整地面供货卷材，含背衬及填料。记录卷材质量、铺设面积及裁切损失；只有实际施作才计热焊接缝。不以原生PVC再叠加完整地材重建同一制品。 工厂成品覆盖制品族中的一种完整乙烯基塑料地面卷材。正式原生名的墙顶瓷砖形替代项不增加采购，也不构成合并物理交换。确认实际乙烯基制剂背衬及安装状态；原生PVC树脂或复合木地板不是本制品。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：卷状或瓷砖形铺地板用塑料，贴墙或顶棚用塑料 `97494e7c-4947-433c-9b86-cf2baa643329`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_envelope`
- 来源：`containex-classic-2025`

###### 供货有机硅建筑密封胶制剂（`silicone_sealant`）

仅供应组成、载体及固化体系确认的厂内实际有机硅密封胶。现场运输孔封堵在边界外。其他实际密封胶或粘合剂须逐项列卡，不假设固化副产物或反应水。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：供货有机硅建筑密封胶制剂
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_envelope`
- 来源：`containex-classic-2025`

###### 成品弹性体舱体防风雨密封条（`weather_gasket`）

仅围护实际安装的一种指定成品密封条。识别聚合物、截面、完整供货组成和质量，不以原胶代替，也不推定隔汽膜。实际存在的独立气密、隔汽、防水膜或固定胶带必须另设卡并计量。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：成品弹性体舱体防风雨密封条
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_envelope`
- 来源：`containex-classic-2025`

###### 成品钢制舱体框架螺栓（`steel_bolt`）

一种用于立柱与底顶框架连接的指定螺栓。采购涂层只承接一次；真实螺母、垫圈、螺钉、铆钉及嵌件均为独立制品，存在时另设卡，不用紧固件集合。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：成品钢制舱体框架螺栓
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_envelope`
- 来源：`containex-classic-2025`

###### 成品钢制舱体内衬螺钉（`steel_screw`）

围护安装用一种真实螺钉产品。记录尺寸、合金、饰面、领用、未用库存和安装质量；其他物理紧固件另列，不藏入本行。 全球工厂生产组合，仅装配辅料钢螺钉，未固定牌号涂层或供应商。不代表螺栓螺母铆钉垫圈或紧固件集合；真实规格及上游服务仍须核对。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_envelope`
- 来源：`containex-classic-2025`

###### 外供地板覆盖层胶黏剂制剂（`floor_cover_adhesive`）

仅所选 P5 和乙烯基地板路线实际采用的完整供货胶；焊接条缝与粘接不视为同一工序，单独固化剂或底涂各设卡。

- 选定流：外供地板覆盖层胶黏剂制剂
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_envelope`
- 来源：`containex-sheq-production`


##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 刨花板裁切边角料废物（`board_offcut`）

仅真实分流的该板材裁切废物，保留覆面、树脂和含水信息。对外输出、厂内留存及产生量不同。真实混合废物可改为一个MixedWaste卡，配独立实测且非加和的来源子账及单一服务方，不强造分流出口。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：刨花板裁切边角料废物
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_physical_envelope`
- 来源：`containex-classic-2025`

###### 矿物棉保温边角料废物（`wool_offcut`）

真实单独输出的矿物棉边角料，保留纤维、粘结剂、覆面和含水。捕集粉尘及附着在制品库存为不同状态，不推定无害或可回收。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：矿物棉保温边角料废物
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_physical_envelope`
- 来源：`containex-classic-2025`

##### 基本流

### 过程：完整门窗及固定电气安装（`fitout`）

#### 输入

##### 产品流

###### 成品保温钢制舱体门总成（`door`）

成套门扇、门框、密封及五金按真实包含清单只采购一次。制造商描述镀锌涂层钢门扇及保温选项；实际组分质量仅作非加和制品子账。独立供货五金须与总成互斥，不能重购。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：成品保温钢制舱体门总成
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_fitout`
- 来源：`containex-classic-2025`

###### 成品双层玻璃塑料框舱体窗总成（`window`）

一种真实完整办公室窗，声明框材聚合物、玻璃、充气、密封、卷帘及五金包含范围。供应商玻璃、框、气体制造在上游，不另采购同一内含组分。目录玻璃尺寸与充气不能作通用实测。 工厂制造外窗族，仅一种完整供给塑料框双玻办公室窗及真实卷帘五金包含。原生备注列可选装饰卷帘泛水及新旧窗安装示例，不规定框材安装凸缘或新增采购。须核真实整件包含，单独玻璃不是本制品。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：外窗 `7a7a325e-e8b3-4497-bf32-fca70491694a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_fitout`
- 来源：`containex-classic-2025`

###### 成品绝缘铜导体舱体线束（`wire_harness`）

仅真实以完整线束采购时采用；保留国家电气配置、导体与绝缘规格、连接器包含范围。厂内从线盘布线时，改列逐种实际电缆及连接器，内部制成线束交接抵消。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：成品绝缘铜导体舱体线束
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_fitout`
- 来源：`containex-classic-2025`

###### 成品舱体配电箱总成（`distribution_board`）

一个真实外购完整配电箱，声明保护器件及安装状态。保留包含清单；只有未内含时才另计厂装保护器件。额定值是配置信息，不是耗电量。 一种工厂已配电气装置的成品配电箱总成，电压不超过1000V。宽原生族也命名控制台柜底座，但本卡只是一套完整舱体配电箱，不代表插座空箱高压箱或独立器件集合。实际额定值及包含器件清单须有记录。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：配以电开关等装置，用于控电或配电、电压不超过1000伏的配电盘、控制台、箱及其他底座 `961bc3fa-a52f-47fe-afc0-0abac92f5fd1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_fitout`
- 来源：`containex-classic-2025`

###### 成品LED舱体灯具（`led_luminaire`）

一种已安装供货灯具。记录真实功率、驱动器、外壳包含范围及安装数量与质量；工厂试验电力另实测，不能仅从额定值推算。 一种工厂制造完整且专用于LED光源的灯具，不能以单LED模块驱动器或荧光灯具代替。用真实整件质量及包含清单，不设功率寿命或光效。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：专为发光二极管（LED）光源设计的灯具和照明配件 `3253c9d6-cf81-41e6-8997-f59f437c3f2d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_fitout`
- 来源：`containex-classic-2025`

###### 成品舱体电源插座（`socket`）

一种未内含于外购线束或板件的指定完整插座。保留国家型式、触点、底盒及面板包含范围；开关和外部CEE连接器真实独立供货时另列卡。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：成品舱体电源插座
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_fitout`
- 来源：`containex-classic-2025`

###### 成品舱内照明开关（`light_switch`）

仅真实单独供货完整开关，触点壳体含一次；已在外购接线模块内含时不再列采购。

- 选定流：成品舱内照明开关
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fitout`
- 来源：`containex-classic-2025`

###### 成品舱体 CEE 电源引入连接器（`cee_inlet`）

真实外部嵌入完整引入连接器，符合所声明国家电气配置；触点壳体和内含紧固件一次，区分厂端供货外的配对电源线。

- 选定流：成品舱体 CEE 电源引入连接器
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fitout`
- 来源：`containex-classic-2025`

###### 随舱供货保护接地夹（`earthing_clamp`）

CLASSIC 明示随舱供夹并由客户在现场安装。真实配套永久接地夹即使散件交付仍纳入声明完整供货质量，保留安装状态；不是运输皮重，也不证明现场已完成接地投用。

- 选定流：随舱供货保护接地夹
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fitout`
- 来源：`containex-classic-2025`

###### 随货钢制接地夹安装螺钉（`earthing_fastener`）

仅完整接地夹制品之外真实单列的安装螺钉；不重复内含紧固件，也不把目录扭矩或规格当作数据集实测值。

- 选定流：随货钢制接地夹安装螺钉
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fitout`
- 来源：`containex-classic-2025`


##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：整舱检查及首次质量放行（`release`）

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完整工厂装配钢框架办公室舱体（`finished_cabin`）

唯一首次质量放行参考输出为整套指定单层办公室舱体：焊接防腐钢框架、保温底墙顶、真实防风雨及气密密封、地板和内衬、完整门窗及固定电气。本声明配置不含卫生管道、暖通及活动家具。称量永久内含物净质量，真实留存水分只计一次；排除运输保护及吊具。须有正面相容的整件建筑原生身份，不能以钢材、构件或货运集装箱代替。 仅工厂生产组合的已制造成品且以金属为主的建筑。该宽原生产品族未规定地区钢牌号几何装饰认证性能。仅用于primary及真实包含质量记录确定的完整指定已装办公室建筑，不能代为构件裸结构或货柜。首次放行是唯一生产参考，其他同UUID移动是全额队列服务交接。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：金属预制建筑 `2e810bc4-023d-4ad0-8466-3a3978f815e1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_release`
- 来源：`containex-classic-2025`; `containex-sheq-production`

##### 废物流

##### 基本流

### 过程：真实工厂公用及物理物种账（`support`）

#### 输入

##### 产品流

###### 外购交流电（`electricity`）

对加工、抽排、涂装、装配、试验、清理、启停及空转，按真实采购电压、地区和合同一次计量。内部变压不再次采购。自发电与对外送电分开，保留原kWh，1 kWh = 3.6 MJ。不推定电网UUID或排放因子。 仅中国小于1kV用户侧电网平均消费组合；其他地区电压、发电机输出、可再生合同或输配服务须另配流。原生备注涵盖到用户供电，核对上游门防重复发输电。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_utilities`
- 来源：`containex-sheq-production`

###### 供给过程用水（`water`）

仅真实外供清洗、前处理或工厂试验水。记录完整供给质量及状态，内循环水不再采购。不从通用工厂路线推定舱体高压清洗、卫生启用试验、蒸汽或锅炉。 经过处理的工业工艺水Product，Mass/kg；未确定固定地方供应路线地区或纯度。18000自然水分类位置作为分类瑕疵披露，Product类型名称及处理备注一致指供给工业水。不能用于自然取水未处理水蒸汽或既有循环库存，不重复采购。真实处理与服务方须相容。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_utilities`
- 来源：`containex-sheq-production`

###### 供给气态天然气（`natural_gas`）

仅真实工厂燃烧器、固化或加热装置使用时启用。保留供应组成、体积温压及干湿基、热值及实测消耗，不设标准温度或排放因子。纯电固化不启用本行。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：供给气态天然气
- 流属性/单位：Volume / m3
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_utilities`
- 来源：`containex-sheq-production`

###### 供给柴油（`diesel`）

仅真实场内自控搬运设备或发电使用。称量领用与油罐库存，或采用记录状态下独立测得的该燃料密度；服务方数据集已含的运输燃料不再采购。 仅质量基准柴油材料身份；牌号配方密度热值炼制地区服务方未特指。不得推定或代用农业能量燃烧服务行。真实场内燃料及上游方另核。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_utilities`
- 来源：`containex-sheq-production`

###### 外供框架清洁制剂（`frame_cleaning_preparation`）

真实使用时的一种外供完整清洁制剂，保留配方状态；生产来源没有通用脱脂或磷化配方。真实单列配料及槽液维护各设卡。

- 选定流：外供框架清洁制剂
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`containex-sheq-production`

###### 外供清洁擦拭基材（`cleaning_wipe`）

一种真实耗用擦拭基材，区别于维护复用抹布台账；清洁制剂和水在整件污染出口中只含一次。

- 选定流：外供清洁擦拭基材
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`containex-sheq-production`

###### 完整外供抽排过滤滤芯（`extraction_filter`）

一种真实完整安装滤芯，按供货状态含外壳滤材；不规定台数、更换周期或默认捕集效率。

- 选定流：完整外供抽排过滤滤芯
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`containex-sheq-production`

###### 外供设备润滑油制剂（`lubricating_oil`）

一种真实指定外供润滑制剂。期初、在用、新增、期末油和实测泄漏移除独立于设备服务负荷，不设换油周期。

- 选定流：外供设备润滑油制剂
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`containex-sheq-production`

###### 用户侧交流电（`electricity_other`）

真实用户侧交流供电，限于另列已绑定中国小于1kV电网平均流以外的条件。记录地区、电压、期间、供电组合和上游门，每仪表只归一个互斥供电卡；具体 UUID 未决，不能拿中国流代欧洲工厂供电。

- 选定流：用户侧交流电
- 流属性/单位：Energy / MJ
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`containex-sheq-production`


##### 废物流

##### 基本流

###### 来自空气的氧分子（`oxygen_in`）

仅独立证实跨越指定燃烧或过程空气门的O2；保留全额入口及反应平衡。不虚购氧气，不设固定空气组成系数。 仅O2分子CAS7782-44-7、Mass/kg的空气可再生元素资源，不是采购气体或排放。保留真实大气至过程入口及独立物种证据，不从宽液态离子别名假设真实状态。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_species`
- 来源：`containex-sheq-production`

###### 来自空气的氮分子（`nitrogen_in`）

仅真实装置实测载气或燃烧空气N2入口。保留全额通量，不与排出净抵消，不等同NOx。 仅二氮N2 CAS7727-37-9、Mass/kg空气可再生元素资源，不是采购氮或排放。不设空气组成或低温状态。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_species`
- 来源：`containex-sheq-production`

###### 来自空气的氩（`argon_in`）

仅真实核算空气流中独立计量的氩；与外购焊接混合气及出口分别保留。 仅元素氩Ar CAS7440-37-1、Mass/kg空气可再生元素资源；真实实测入口，不是采购保护混合气排放或假定空气分数。同位素别名不证明富集放射性来源。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_species`
- 来源：`containex-sheq-production`

###### 来自空气的水蒸气（`water_vapour_in`）

仅真实实测吸湿或过程空气含湿，保留配置、状态及游离留存水核对。环境平衡吸湿不等于采购材料、反应水、维修或新增Q。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：来自空气的水蒸气
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_species`
- 来源：`containex-sheq-production`

###### 进入工艺空气中的分子二氧化碳（`ambient_co2_in`）

仅在明确实物空气门内独立实测载入的背景 CO2，来源区别于燃料碳；不是虚拟购气、负排放或固定空气组分。

- 选定流：进入工艺空气中的分子二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 来源：`containex-sheq-production`


#### 输出

##### 产品流

##### 废物流

###### 舱体工厂前处理清洗废水（`effluent`）

仅物理上确已混合时作为一个真实混合废水出口。保留全湿量、组成、下水道或厂外去向及处理门。COD、电导率及悬浮物为指标或子账，不另作分子质量出口。真实不同去向及污泥分开。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：舱体工厂前处理清洗废水
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_physical`
- 来源：`containex-sheq-production`

###### 舱体工厂混合固体废物（`mixed_waste`）

仅一个真实混装对外固废存在时启用。木材、乙烯基地材、胶筒及其他真实来源配独立实测子账，不与混装总量相加。总量及一个相容管理服务方只计一次；单独输出者仍分列。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：舱体工厂混合固体废物
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_physical`
- 来源：`containex-sheq-production`

###### 整件使用后污染擦拭物（`spent_wipe`）

仅本真实单独转交完整污染物流，基材、留存制剂、粉尘和水一次；若实际共收至一个混合出口，本项为实测非加和来源子账，不另导出或新增处理需求。

- 选定流：整件使用后污染擦拭物
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_physical`
- 来源：`containex-sheq-production`

###### 整件使用后污染抽排滤芯（`spent_filter`）

仅本真实单独转交完整污染物流，基材、留存制剂、粉尘和水一次；若实际共收至一个混合出口，本项为实测非加和来源子账，不另导出或新增处理需求。

- 选定流：整件使用后污染抽排滤芯
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_physical`
- 来源：`containex-sheq-production`

###### 整股收集废设备润滑油（`used_oil`）

仅本真实单独转交完整污染物流，基材、留存制剂、粉尘和水一次；若实际共收至一个混合出口，本项为实测非加和来源子账，不另导出或新增处理需求。

- 选定流：整股收集废设备润滑油
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_physical`
- 来源：`containex-sheq-production`


##### 基本流

###### 排入空气的化石二氧化碳（`fossil_co2`）

仅真实直接化石燃烧或已核实过程释放；排除供应上游排放。用CO2分子实测或燃料碳含量及物种平衡配真实控制性能计算。VOC或总碳指标不是CO2。 仅普通分子化石CO2 CAS124-38-9、Mass/kg向未指定空气排放。宽同义词含离子干冰同位素词，不改变声明的分子化石空气身份。不能代生物源延迟修正长期土水或其他特定空气分区。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_species`
- 来源：`containex-sheq-production`

###### 排入空气的水蒸气（`water_vapour_out`）

H2O蒸气与液体废水、留存游离水及独立证实的反应水分别记录。测湿度、流量及状态，不以水密度换算气体，不用残差同时解两个未知。自然脱湿不创造维修或新产量。 仅普通H2O CAS7732-18-5向未指定空气排放的蒸气，Mass/kg。继承同义词表含同位素结合水液态水词，这些别名不授权把本CAS相态解释为重水氚水结合水或液体废水。真实特定空气分区须另匹配身份。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_species`
- 来源：`containex-sheq-production`

###### 排入空气的氮分子（`nitrogen_out`）

仅实测载气、燃烧空气或保护气排放中的真实N2。分别记录全额分子通量及来源；NOx不是N2。不按默认空气比例编造通风量。 仅二氮N2 CAS7727-37-9、Mass/kg向未指定空气排放，与空气资源入口NOx采购低温氮或其他排放分区不同。同义词液氮不规定真实空气出口状态。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_species`
- 来源：`containex-sheq-production`

###### 排入空气的氧分子（`oxygen_out`）

仅实测排放门真实未反应O2，与水、氧化物中的氧及反应消耗氧分开。记录来源及完整状态和物种证据。 O2分子CAS7782-44-7、Mass/kg向未指定空气排放，与空气资源入口供给液氧氧化物结合氧及其他空气土水分区不同。宽液态离子激发态别名不证明这些供货状态，也不改变真实O2物种。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_species`
- 来源：`containex-sheq-production`

###### 排入空气的氩（`argon_out`）

仅外购预混气或独立实测空气通量中的真实氩，按真实接收介质记录。无组成及状态证据，不将混合气指标变为氩质量。 仅元素氩Ar CAS7440-37-1、Mass/kg向未指定空气排放，不代采购气体其他介质或空气分区。同位素别名不声称富集放射性氩。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_species`
- 来源：`containex-sheq-production`

###### 向空气排放的一氧化碳（`carbon_monoxide`）

仅真实工厂燃烧、焊接、固化或逸散且独立识别的本分子物种，向声明空气介质排放；记录来源、状态、治理和测量，不设因子、不假定完全燃烧，也不将 NOx/VOC/CO/总碳指标直接换成本分子，其他实际分子物种各列卡。

- 选定流：向空气排放的一氧化碳
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 来源：`containex-sheq-production`

###### 向空气排放的一氧化氮（`nitrogen_monoxide`）

仅真实工厂燃烧、焊接、固化或逸散且独立识别的本分子物种，向声明空气介质排放；记录来源、状态、治理和测量，不设因子、不假定完全燃烧，也不将 NOx/VOC/CO/总碳指标直接换成本分子，其他实际分子物种各列卡。

- 选定流：向空气排放的一氧化氮
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 来源：`containex-sheq-production`

###### 向空气排放的二氧化氮（`nitrogen_dioxide`）

仅真实工厂燃烧、焊接、固化或逸散且独立识别的本分子物种，向声明空气介质排放；记录来源、状态、治理和测量，不设因子、不假定完全燃烧，也不将 NOx/VOC/CO/总碳指标直接换成本分子，其他实际分子物种各列卡。

- 选定流：向空气排放的二氧化氮
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 来源：`containex-sheq-production`

###### 向空气排放的甲烷（`methane_air`）

仅真实工厂燃烧、焊接、固化或逸散且独立识别的本分子物种，向声明空气介质排放；记录来源、状态、治理和测量，不设因子、不假定完全燃烧，也不将 NOx/VOC/CO/总碳指标直接换成本分子，其他实际分子物种各列卡。

- 选定流：向空气排放的甲烷
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 来源：`containex-sheq-production`

###### 流出工艺空气中的背景分子二氧化碳（`ambient_co2_out`）

真实随载气排出的背景 CO2，独立于新生成化石 CO2 及任何生物源；保留毛实物流，不再当燃烧生成量或虚构抵扣。

- 选定流：流出工艺空气中的背景分子二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 来源：`containex-sheq-production`

### 过程：真实放行后包装及成品服务（`postrelease`）

#### 输入

##### 产品流

###### 聚乙烯舱体运输保护膜（`pe_film`）

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅真实供给的PE保护膜；保留聚合物、添加剂、新增及附着、空置、可复用库存。其他真实运输罩聚合物须另卡。保护膜排除于舱体净Q。 本卡仅为新增外购P。期初期末O/C为库存而非采购；ER另设真实外来返还卡。 工厂聚乙烯薄膜片材Product，CAS9002-88-4且Mass/kg，不是成品PE袋或PET。备注比较PET竞争聚合物，不表示本组成。核真实PE牌号制剂厚度及全额薄膜移动，不推密度或使用份额。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`containex-sheq-production`

###### 木制舱体运输垫木（`timber_bearer`）

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅真实木制运输垫木；区分树种、处理、含水、可复用所有权及永久安装木材。不设复用次数，不在返还时自动变共产品。 本卡仅为新增外购P。期初期末O/C为库存而非采购；ER另设真实外来返还卡。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：木制舱体运输垫木
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`containex-sheq-production`

###### 可复用钢制舱体运输架（`steel_rack`）

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅真实跨门运输架；跟踪资产身份、期初期末、外来接收返还及全额发运。实物质量不得按负荷或服务分摊缩减，不是永久舱体Q。 本卡仅为新增外购P。期初期末O/C为库存而非采购；ER另设真实外来返还卡。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：可复用钢制舱体运输架
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`containex-sheq-production`

###### 退回的已放行钢框架办公室舱体（`returned_cabin`）

真实退回舱体全额计量，识别原交付放行队列及继承负荷。适当冲回原交付移动；退回或重验均不创造新生产Q。真实增量维修服务分开，自然水分变化不编作维修。 仅工厂生产组合的已制造成品且以金属为主的建筑。该宽原生产品族未规定地区钢牌号几何装饰认证性能。仅用于primary及真实包含质量记录确定的完整指定已装办公室建筑，不能代为构件裸结构或货柜。首次放行是唯一生产参考，其他同UUID移动是全额队列服务交接。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：金属预制建筑 `2e810bc4-023d-4ad0-8466-3a3978f815e1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_postrelease`
- 来源：`containex-sheq-production`

###### 聚乙烯舱体运输保护膜（`pe_film_return_received`）

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅真实外部返还且仍可用的该种包装。按原材料资产身份状态及来源记录全额ER；此返还不重新分配上游采购制造。损坏或改变者使用真实独立状态或废物身份。I与P保持互斥。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：聚乙烯舱体运输保护膜
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`containex-sheq-production`

###### 木制舱体运输垫木（`timber_bearer_return_received`）

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅真实外部返还且仍可用的该种包装。按原材料资产身份状态及来源记录全额ER；此返还不重新分配上游采购制造。损坏或改变者使用真实独立状态或废物身份。I与P保持互斥。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：木制舱体运输垫木
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`containex-sheq-production`

###### 可复用钢制舱体运输架（`steel_rack_return_received`）

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅真实外部返还且仍可用的该种包装。按原材料资产身份状态及来源记录全额ER；此返还不重新分配上游采购制造。损坏或改变者使用真实独立状态或废物身份。I与P保持互斥。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：可复用钢制舱体运输架
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`containex-sheq-production`

###### 聚乙烯舱体运输保护膜（`pe_film_ingress`）

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅为真实供方随货整制品入向 I，与新增 P、外部返还 ER 互斥。即使无单列价格仍保留完整湿量、供方包含或皮重及唯一负荷所有者，不是舱体 Q 的另一组分。

- 选定流：聚乙烯舱体运输保护膜
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`containex-sheq-production`

###### 木质舱体运输垫梁（`timber_bearer_ingress`）

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅为真实供方随货整制品入向 I，与新增 P、外部返还 ER 互斥。即使无单列价格仍保留完整湿量、供方包含或皮重及唯一负荷所有者，不是舱体 Q 的另一组分。

- 选定流：木质舱体运输垫梁
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`containex-sheq-production`

###### 可周转钢制舱体运输架（`steel_rack_ingress`）

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅为真实供方随货整制品入向 I，与新增 P、外部返还 ER 互斥。即使无单列价格仍保留完整湿量、供方包含或皮重及唯一负荷所有者，不是舱体 Q 的另一组分。

- 选定流：可周转钢制舱体运输架
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`containex-sheq-production`

###### 外供运输垫梁维修木条（`pack_repair_slat`）

仅实际单供维修材料，不预定维修配方。完整湿态收货库存与独立负荷一次；真实转入包装池时按独立组成测量拆 J_in 与 H2O_in，内部源目的地配对合并抵消，不再采购。

- 选定流：外供运输垫梁维修木条
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`containex-sheq-production`

###### 外供运输垫梁维修钢钉（`pack_repair_nail`）

仅实际单供维修材料，不预定维修配方。完整湿态收货库存与独立负荷一次；真实转入包装池时按独立组成测量拆 J_in 与 H2O_in，内部源目的地配对合并抵消，不再采购。

- 选定流：外供运输垫梁维修钢钉
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`containex-sheq-production`


##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已放行完整钢框架办公室舱体（`gross_cabin_dispatch`）

已放行舱体按全额真实实物V发运，绑定原首次放行队列Qc。此为成品服务实物交接，不是第二次生产输出、新放行，也不因期末成品库存而扣首次Q。被拒收或未授权发运仍保留真实物流负荷，不自动取得合格状态。 仅工厂生产组合的已制造成品且以金属为主的建筑。该宽原生产品族未规定地区钢牌号几何装饰认证性能。仅用于primary及真实包含质量记录确定的完整指定已装办公室建筑，不能代为构件裸结构或货柜。首次放行是唯一生产参考，其他同UUID移动是全额队列服务交接。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：金属预制建筑 `2e810bc4-023d-4ad0-8466-3a3978f815e1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_postrelease`
- 来源：`containex-sheq-production`

###### 聚乙烯舱体运输保护膜（`pe_film_out`）

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅随真实发运舱体附着外出的该包装全额S，独立于净Q及负荷份额。保留原资产材料身份及接收状态。EO为独立对外返还卡；内部复用抵消。随全额真实发运舱体外出的该种包装全额实物流；逐移动和去向分开。内部复用抵消，不按净Q、分摊或未来使用缩量。核对完整包装池，移动不自动产生共产品抵扣。 工厂聚乙烯薄膜片材Product，CAS9002-88-4且Mass/kg，不是成品PE袋或PET。备注比较PET竞争聚合物，不表示本组成。核真实PE牌号制剂厚度及全额薄膜移动，不推密度或使用份额。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`containex-sheq-production`

###### 木制舱体运输垫木（`timber_bearer_out`）

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅随真实发运舱体附着外出的该包装全额S，独立于净Q及负荷份额。保留原资产材料身份及接收状态。EO为独立对外返还卡；内部复用抵消。随全额真实发运舱体外出的该种包装全额实物流；逐移动和去向分开。内部复用抵消，不按净Q、分摊或未来使用缩量。核对完整包装池，移动不自动产生共产品抵扣。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：木制舱体运输垫木
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`containex-sheq-production`

###### 可复用钢制舱体运输架（`steel_rack_out`）

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅随真实发运舱体附着外出的该包装全额S，独立于净Q及负荷份额。保留原资产材料身份及接收状态。EO为独立对外返还卡；内部复用抵消。随全额真实发运舱体外出的该种包装全额实物流；逐移动和去向分开。内部复用抵消，不按净Q、分摊或未来使用缩量。核对完整包装池，移动不自动产生共产品抵扣。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：可复用钢制舱体运输架
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`containex-sheq-production`

###### 聚乙烯舱体运输保护膜（`pe_film_external_return`）

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅该包装资产向指定所有者接收方的独立真实对外返还EO，按全额物质量计。排除发运卡已计随货S。保留真实状态及原负荷账，不自动共产品抵扣或按分摊缩质量。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：聚乙烯舱体运输保护膜
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`containex-sheq-production`

###### 木制舱体运输垫木（`timber_bearer_external_return`）

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅该包装资产向指定所有者接收方的独立真实对外返还EO，按全额物质量计。排除发运卡已计随货S。保留真实状态及原负荷账，不自动共产品抵扣或按分摊缩质量。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：木制舱体运输垫木
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`containex-sheq-production`

###### 可复用钢制舱体运输架（`steel_rack_external_return`）

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅该包装资产向指定所有者接收方的独立真实对外返还EO，按全额物质量计。排除发运卡已计随货S。保留真实状态及原负荷账，不自动共产品抵扣或按分摊缩质量。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：可复用钢制舱体运输架
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`containex-sheq-production`

##### 废物流

###### 聚乙烯舱体运输保护膜废物（`pe_film_waste`）

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅该包装真实丢弃并交给指定接收方时，以全额实测湿质量计。期末废物库存与附着、空包装库存分开。不同时加和材料组分与真实混装废物出口。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：聚乙烯舱体运输保护膜废物
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`containex-sheq-production`

###### 木制舱体运输垫木废物（`timber_bearer_waste`）

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅该包装真实丢弃并交给指定接收方时，以全额实测湿质量计。期末废物库存与附着、空包装库存分开。不同时加和材料组分与真实混装废物出口。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：木制舱体运输垫木废物
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`containex-sheq-production`

###### 可复用钢制舱体运输架废物（`steel_rack_waste`）

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅该包装真实丢弃并交给指定接收方时，以全额实测湿质量计。期末废物库存与附着、空包装库存分开。不同时加和材料组分与真实混装废物出口。 本卡仅执行normalize_once一次，raw采集不预先相除。

- 选定流：可复用钢制舱体运输架废物
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务用 B_e / 原Qc。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`containex-sheq-production`

###### 废弃运输垫梁维修木条（`pack_removed_slat`）

仅真实分离后作为废物转交的完整拆下件，基材污染水一次；采用互斥 J_out/H2O_out 或完整 W；若仍在整垫梁、运输架或混合整湿 W 内，只是非加和来源，不另出口。

- 选定流：废弃运输垫梁维修木条
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`containex-sheq-production`

###### 废弃运输垫梁维修钢钉（`pack_removed_nail`）

仅真实分离后作为废物转交的完整拆下件，基材污染水一次；采用互斥 J_out/H2O_out 或完整 W；若仍在整垫梁、运输架或混合整湿 W 内，只是非加和来源，不另出口。

- 选定流：废弃运输垫梁维修钢钉
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`containex-sheq-production`


##### 基本流

### 过程：真实生产搬运设备台群 (`assets`)

#### 输入

##### 产品流

###### 完整数控板材切割机（`cnc_cutter_receipt`）

仅真实跨资产门完整设备，真实安装零件液体一次。按配置记录期初、收货、在用、期末台群完整质量件数，独立于兼容供方服务需求及真实使用维护历史；具体条件制品不是必备清单、寿命、更换周期或每舱 kg 一台机器。

- 选定流：完整数控板材切割机
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

###### 完整液压成形压力机（`hydraulic_press_receipt`）

仅真实跨资产门完整设备，真实安装零件液体一次。按配置记录期初、收货、在用、期末台群完整质量件数，独立于兼容供方服务需求及真实使用维护历史；具体条件制品不是必备清单、寿命、更换周期或每舱 kg 一台机器。

- 选定流：完整液压成形压力机
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

###### 完整焊接机器人（`welding_robot_receipt`）

仅真实跨资产门完整设备，真实安装零件液体一次。按配置记录期初、收货、在用、期末台群完整质量件数，独立于兼容供方服务需求及真实使用维护历史；具体条件制品不是必备清单、寿命、更换周期或每舱 kg 一台机器。

- 选定流：完整焊接机器人
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

###### 完整粉末涂层固化炉（`coating_oven_receipt`）

仅真实跨资产门完整设备，真实安装零件液体一次。按配置记录期初、收货、在用、期末台群完整质量件数，独立于兼容供方服务需求及真实使用维护历史；具体条件制品不是必备清单、寿命、更换周期或每舱 kg 一台机器。

- 选定流：完整粉末涂层固化炉
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

###### 完整舱体搬运桥式起重机（`overhead_crane_receipt`）

仅真实跨资产门完整设备，真实安装零件液体一次。按配置记录期初、收货、在用、期末台群完整质量件数，独立于兼容供方服务需求及真实使用维护历史；具体条件制品不是必备清单、寿命、更换周期或每舱 kg 一台机器。

- 选定流：完整舱体搬运桥式起重机
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

###### 完整舱体搬运叉车（`forklift_receipt`）

仅真实跨资产门完整设备，真实安装零件液体一次。按配置记录期初、收货、在用、期末台群完整质量件数，独立于兼容供方服务需求及真实使用维护历史；具体条件制品不是必备清单、寿命、更换周期或每舱 kg 一台机器。

- 选定流：完整舱体搬运叉车
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

###### 完整舱体称重秤（`release_scale_receipt`）

仅真实跨资产门完整设备，真实安装零件液体一次。按配置记录期初、收货、在用、期末台群完整质量件数，独立于兼容供方服务需求及真实使用维护历史；具体条件制品不是必备清单、寿命、更换周期或每舱 kg 一台机器。

- 选定流：完整舱体称重秤
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

###### 完整电气安装测试仪（`electrical_tester_receipt`）

仅真实跨资产门完整设备，真实安装零件液体一次。按配置记录期初、收货、在用、期末台群完整质量件数，独立于兼容供方服务需求及真实使用维护历史；具体条件制品不是必备清单、寿命、更换周期或每舱 kg 一台机器。

- 选定流：完整电气安装测试仪
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完整数控板材切割机（`cnc_cutter_transfer`）

仅本设备按实测配置状态真实完整对外转交或返还，仍可用；不是服务负荷、虚拟转售或避免生产抵扣。配对内部台群转移抵消。

- 选定流：完整数控板材切割机
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

###### 完整液压成形压力机（`hydraulic_press_transfer`）

仅本设备按实测配置状态真实完整对外转交或返还，仍可用；不是服务负荷、虚拟转售或避免生产抵扣。配对内部台群转移抵消。

- 选定流：完整液压成形压力机
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

###### 完整焊接机器人（`welding_robot_transfer`）

仅本设备按实测配置状态真实完整对外转交或返还，仍可用；不是服务负荷、虚拟转售或避免生产抵扣。配对内部台群转移抵消。

- 选定流：完整焊接机器人
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

###### 完整粉末涂层固化炉（`coating_oven_transfer`）

仅本设备按实测配置状态真实完整对外转交或返还，仍可用；不是服务负荷、虚拟转售或避免生产抵扣。配对内部台群转移抵消。

- 选定流：完整粉末涂层固化炉
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

###### 完整舱体搬运桥式起重机（`overhead_crane_transfer`）

仅本设备按实测配置状态真实完整对外转交或返还，仍可用；不是服务负荷、虚拟转售或避免生产抵扣。配对内部台群转移抵消。

- 选定流：完整舱体搬运桥式起重机
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

###### 完整舱体搬运叉车（`forklift_transfer`）

仅本设备按实测配置状态真实完整对外转交或返还，仍可用；不是服务负荷、虚拟转售或避免生产抵扣。配对内部台群转移抵消。

- 选定流：完整舱体搬运叉车
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

###### 完整舱体称重秤（`release_scale_transfer`）

仅本设备按实测配置状态真实完整对外转交或返还，仍可用；不是服务负荷、虚拟转售或避免生产抵扣。配对内部台群转移抵消。

- 选定流：完整舱体称重秤
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

###### 完整电气安装测试仪（`electrical_tester_transfer`）

仅本设备按实测配置状态真实完整对外转交或返还，仍可用；不是服务负荷、虚拟转售或避免生产抵扣。配对内部台群转移抵消。

- 选定流：完整电气安装测试仪
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

##### 废物流

###### 整件废弃完整数控板材切割机（`cnc_cutter_retirement`）

仅真实整件污染退役设备，基材安装残余水一次；若已含于同一实物混合接收事件，只留实测非加和来源，接收方完整真实需求独立于批次负荷归属。

- 选定流：整件废弃完整数控板材切割机
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

###### 整件废弃完整液压成形压力机（`hydraulic_press_retirement`）

仅真实整件污染退役设备，基材安装残余水一次；若已含于同一实物混合接收事件，只留实测非加和来源，接收方完整真实需求独立于批次负荷归属。

- 选定流：整件废弃完整液压成形压力机
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

###### 整件废弃完整焊接机器人（`welding_robot_retirement`）

仅真实整件污染退役设备，基材安装残余水一次；若已含于同一实物混合接收事件，只留实测非加和来源，接收方完整真实需求独立于批次负荷归属。

- 选定流：整件废弃完整焊接机器人
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

###### 整件废弃完整粉末涂层固化炉（`coating_oven_retirement`）

仅真实整件污染退役设备，基材安装残余水一次；若已含于同一实物混合接收事件，只留实测非加和来源，接收方完整真实需求独立于批次负荷归属。

- 选定流：整件废弃完整粉末涂层固化炉
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

###### 整件废弃完整舱体搬运桥式起重机（`overhead_crane_retirement`）

仅真实整件污染退役设备，基材安装残余水一次；若已含于同一实物混合接收事件，只留实测非加和来源，接收方完整真实需求独立于批次负荷归属。

- 选定流：整件废弃完整舱体搬运桥式起重机
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

###### 整件废弃完整舱体搬运叉车（`forklift_retirement`）

仅真实整件污染退役设备，基材安装残余水一次；若已含于同一实物混合接收事件，只留实测非加和来源，接收方完整真实需求独立于批次负荷归属。

- 选定流：整件废弃完整舱体搬运叉车
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

###### 整件废弃完整舱体称重秤（`release_scale_retirement`）

仅真实整件污染退役设备，基材安装残余水一次；若已含于同一实物混合接收事件，只留实测非加和来源，接收方完整真实需求独立于批次负荷归属。

- 选定流：整件废弃完整舱体称重秤
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

###### 整件废弃完整电气安装测试仪（`electrical_tester_retirement`）

仅真实整件污染退役设备，基材安装残余水一次；若已含于同一实物混合接收事件，只留实测非加和来源，接收方完整真实需求独立于批次负荷归属。

- 选定流：整件废弃完整电气安装测试仪
- 流属性/单位：Mass / kg
- 数量规则：B_e / Q；真实放行后服务采用 B_e / 原 Qc。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`containex-sheq-production`

##### 基本流


## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_context | study method | 这些归因规则仅在声明决策情景确需分配时适用：C2，或按ILCD逐情景证明细分虚拟细分及替代系统扩展不可行的A/B/C1情形。不得向后果型研究套用此层级，不从制造报告推断LCA分配。 | `jrc-ilcd-2010` |
| dedicated_first | all exchanges | 专属材料制品领用及操作记录直接归属。先细分可物理分辨的产线工单喷房试验，再对定量关系明确的内含部件辅料逐交换虚拟细分。保留完整接收群体及期初期末负荷向量。 | `jrc-ilcd-2010` |
| determining_causality | remaining shared exchanges | 对每个剩余共用交换，根据实测操作驱动及真实技术独立确定支配性物理因果。只有真正决定该交换时才可用质量面积电弧时间固化占用或件数；一个物理驱动不自动适用于全部资源。包含空转失败返工批及敏感性。 | `jrc-ilcd-2010` |
| residual_market | only residual common process | 仅经专属虚拟因果归属后真实剩余的共同过程负荷，才可按同一过程门真实状态的共功能同期市值分配。所有接收者的分配负荷向量之和必须等于分配前向量，不漏接收者。保留价格基准时间数量接收群体排除不确定及敏感性。不任意选物理经济分配，不定比例，不按负荷份额缩实际材料通量。 | `jrc-ilcd-2010` |
| no_automatic_credit | waste and reusable assets | 边角料废物包装返还保留全额实物流、真实法律产品状态及接收者。不自动给替代钢材回收粉末或复用架抵扣。纳入资产制造时，用单一守恒寿命负荷账及有证总服务分母、不确定与核对；不编未来复用，不每期全额重计资产制造。 | `jrc-ilcd-2010` |

## 8. 前景数据采集、计算与质量规则

协议只采raw原始观测。aggregation_rule只声明分组的目标参考基准，不授权预先将raw采集值相除。保留每个原单位速率状态及继承向量。raw单位速率转换及真实归属后只执行一次normalize_once，卡片数量和报告汇总复用同一结果。Q为完整净制品首次放行千克；真实成品服务及相关全额实物移动绑定原队列Qc与观察窗H。不填未来服务、不假定恢复、不在重验时造产量、不删失败未授权活动。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_frame | frame | 钢焊底涂粉末 | raw制造记录 |板材牌号形态; 领退质量; 焊规耗材; 底涂粉末制剂; 槽液粉末库存; 真实作业固化能耗损失; actual_stage_event; original_Q0_Qc; observed_H; gross_V; independent_burden_A; whole_receiver_Qt; nonadditive_origin; matched_internal_history |校准称重库存及真实CNC焊接涂装日志和供应SDS；区分专属共用作业及全部拒收返工批 保留原始未除实物量、真实完整湿库存及自有继承在制台群历史一次，完整接收 Qt 独立于非重叠原批次 A/Q。 | kg; original utility units | 每次接收领用及作业 | 完整真实队列含失败启停空转清理 | 指定工厂及外包门 | 每 1 kg 参考流 | 校准; 材质SDS与BOM; 签署作业库存平衡 |
| cp_envelope | envelope | 围护材料 | raw制品材料记录 |供货身份; 整件包含; 层次规格; 领退; 含水; 裁切损失; 在制成品物理及继承向量; actual_stage_event; original_Q0_Qc; observed_H; gross_V; independent_burden_A; whole_receiver_Qt; nonadditive_origin; matched_internal_history |称量供货及领用制品组分；核对互斥BOM裁切图真实层次及全部内部交接，不重复内含组成 保留原始未除实物量、真实完整湿库存及自有继承在制台群历史一次，完整接收 Qt 独立于非重叠原批次 A/Q。 | kg; actual geometry units | 每批及交接 | 完整真实队列和期初期末库存 | 指定围护车间 | 每 1 kg 参考流 | 供应声明; 校准质量; 含水方法; 核对桥接 |
| cp_fitout | fitout | 门窗电气制品 | raw部件记录 |序号配置; 供货制品质量数量; 内含玻璃框五金线路; 活动或固定; 未用失败退回; actual_stage_event; original_Q0_Qc; observed_H; gross_V; independent_burden_A; whole_receiver_Qt; nonadditive_origin; matched_internal_history |完整供货包含清单与安装拒收部件核对；真实布线装配日志区分外购线束与厂内布线 保留原始未除实物量、真实完整湿库存及自有继承在制台群历史一次，完整接收 Qt 独立于非重叠原批次 A/Q。 | kg; item; original geometry | 每种配置及安装 | 完整真实队列 | 指定总装车间 | 每 1 kg 参考流 | 供应BOM及配置装配记录; 校准; 独立数量质量基准 |
| cp_release | release | 首次放行Q | raw质量称重事件 |舱体序号配置; 完整包含清单; 校准毛皮净千克; 留存水; 首放时间; 失败; 在制成品库存及继承向量; actual_stage_event; original_Q0_Qc; observed_H; gross_V; independent_burden_A; whole_receiver_Qt; nonadditive_origin; matched_internal_history |对受控配置及真实焊涂围护电气检查记录核实整舱并称永久内含物净质量。现场接地启用属独立门，目录试验额定值不是工厂实测 保留原始未除实物量、真实完整湿库存及自有继承在制台群历史一次，完整接收 Qt 独立于非重叠原批次 A/Q。 | kg | 每次首次放行 | 完整队列及期初期末库存 | 指定工厂质量门 | 每 1 kg 参考流 | 签署首次放行台账; 秤校准; 真实试验条件结果及不合格处置 |
| cp_utilities | support | 电力燃料水 | raw表计库存记录 |表计资产路线; 原kWh/MJ/kg/m3; 真速率区间; 组成; 温压相态; 密度热值证据; 自发电; 库存变化; 实际共用驱动群体; actual_stage_event; original_Q0_Qc; observed_H; gross_V; independent_burden_A; whole_receiver_Qt; nonadditive_origin; matched_internal_history |读真实表计及燃料水库存，只对真实速率积分，另做单位换算，按分配规则归属专属共用负荷；识别全部清理启停空转失败作业 保留原始未除实物量、真实完整湿库存及自有继承在制台群历史一次，完整接收 Qt 独立于非重叠原批次 A/Q。 | original meter units | 表计区间及每次领用 | 完整队列及真实服务H | 指定场地服务表计门 | 每 1 kg 参考流 | 校准; 账单与罐平衡; 驱动研究及排除 |
| cp_physical | support | 逐材料废物库存 | raw全额物理账 |原子材料物种; 全额进出去向; 全湿期初期末原材在制非在制成品流体废物; 非加和来源; 继承交换向量; 内部交接id; actual_stage_event; original_Q0_Qc; observed_H; gross_V; independent_burden_A; whole_receiver_Qt; nonadditive_origin; matched_internal_history |独立称量采样及接收票据；产生量与出口库存分开。独立核对制造成品合并质量及相关元素。X仅去重经证同侧OTHER实际流，不冲库存对侧或卡存在 保留原始未除实物量、真实完整湿库存及自有继承在制台群历史一次，完整接收 Qt 独立于非重叠原批次 A/Q。 | kg; original native units | 每次移动及库存截止 | 从期初到期末及原继承队列 | 工厂成品合并门 | 每 1 kg 参考流 | 称重票; 分析; 接收状态证据; 独立残差解释 |
| cp_species | support | 逐真实气体水物种 | raw分子状态记录 |分子身份CAS; 来源碳源; 接收介质; 进出; 相态温压; 积分体积或速率时间; 含湿; 实测物种及独立元素约束; actual_stage_event; original_Q0_Qc; observed_H; gross_V; independent_burden_A; whole_receiver_Qt; nonadditive_origin; matched_internal_history |测量鉴别真实流及控制；N2/O2/Ar/H2O/CO2及其他真实物种分别记。区分总指标捕集物供货混合物子账反应游离留存结构水及真实气液出口 保留原始未除实物量、真实完整湿库存及自有继承在制台群历史一次，完整接收 Qt 独立于非重叠原批次 A/Q。 | kg; original gas/liquid measurement units | 每次真实作业采样 | 完整真实队列及相关服务H | 仅真实燃烧过程通风门 | 每 1 kg 参考流 | 校准; 实验室物种分析; 独立质量元素闭合及不确定 |
| cp_packaging | postrelease | 每种真实包装 | raw包装池 |材料资产; 期初空置附着在制附着成品复用; P采购; ER外来返还; 期末对应库存; S全额发运; EO对外返还; W废物; 内部复用; 去向; I_supplier_included; J_in; J_out; H2O_in; H2O_out; O; C; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; wet_material_assay; full_W_nested_components | O + P + I + ER + J_in + H2O_in = C + S + EO + W + J_out + H2O_out。各项均为同一材质或资产池的真实 kg。O/C 为完整湿态期初期末空、附在制、附成品和周转库存。P 为新增外采，I 为互斥供方随货整包装入向，ER 为收到外部返还，S 为随完整毛发运带出，EO 为独立向外返还，W 为整湿废弃物。J_in/J_out 为独立实测且未含于上述整物方向的非水修理、替换、沉积、残留或其他跨池转移。H2O_in/H2O_out 为独立实测且未内含于整物方向的真实水转移，含无修理的自然吸脱湿。真实新增或移除湿材料须按实测拆为互斥 J 和水，不设默认比例或密度。完整 W 已含基材、留存残余及水一次，除非跨界前真实分离，其嵌套子项不另列 J_out/H2O_out。配对内部池转移合并时抵消，不新增采购、服务或 Q。 原始观测对账为 L_in_observed - X_in = P + I + ER + J_in + H2O_in，以及 L_out_observed - X_out = S + EO + W + J_out + H2O_out。L 仅为观测侧汇总，不是额外实物流或供方需求。每个 X 按精确事件、组分、单位和方向映射到同侧其他重复观测，且规范侧已计一次。每项真实 J/H2O 仍保留一次；X 不因留库存而冲真实留存增量、C/O、对侧移动或嵌套 W 子项。原观测互斥时 X=0。内部附着复用不跨边界，内部维修或资产池转入须有源目的地配对账，不能再计采购和继承负荷。未知料水仍未决，不配残差。真实客户在本工厂或服务门之后的处置是另行披露的下游事件，不虚构为工厂 W。 | kg; actual native unit | 每次收发返还废弃及截止 | 原放行队列至观察H | 工厂仓储承运交接及真实接收门 | 每 1 kg 参考流 |包装票据; 材料资产身份; 实测池闭合; 独立湿态库存料水读数及同侧精确重复观测证据 |
| cp_postrelease | postrelease | 成品及真实服务 | raw队列服务账 |原放行序号Qc; H; 全额期初期末成品物理质量及继承向量; 全额发运返还; 原交付冲回; 真实仓储搬运试验维修清理负荷; 包装关联; actual_stage_event; original_Q0_Qc; observed_H; gross_V; independent_burden_A; whole_receiver_Qt; nonadditive_origin; matched_internal_history |将真实移动追溯原放行，含失败拒收未授权移动。保留原负荷及全部真实增量服务；重验交付返还或自然水分变化不造新生产。未来未发生服务未知；真实维修材料废物另设卡 保留原始未除实物量、真实完整湿库存及自有继承在制台群历史一次，完整接收 Qt 独立于非重叠原批次 A/Q。 | kg; original service/exchange unit | 每次真实移动服务及截止 | 原首次放行至真实观察H | 成品仓搬运承运门 | 每 1 kg 参考流 | 放行交付返还台账; 实测服务; 继承负荷守恒 |
|cp_assets|assets|每项真实具名设备实物及服务|foreground_record|asset_id; configuration; full_gross_mass_count; opening_inuse_closing_fleet; external_receipts_transfers_retirement; installed_fluids_parts; actual_service_use; maintenance_history; original_Q0_Qc; observed_H; provider_unit_scope; actual_stage_event; original_Q0_Qc; observed_H; gross_V; independent_burden_A; whole_receiver_Qt; nonadditive_origin; matched_internal_history |称记真实完整台群和每次实际移动，维护互斥已观测服务维护历史、整湿退役及兼容上游供方单位，不设寿命或设备质量份额。 保留原始未除实物量、真实完整湿库存及自有继承在制台群历史一次，完整接收 Qt 独立于非重叠原批次 A/Q。 |kg; item; actual provider service unit|每实物事件及真实使用区间|完整已观测批次及原台群历史|全部真实生产搬运门|每 1 kg 参考流|资产账；校准秤；服务日志；维护接收记录|
| cp_physical_frame | frame | 逐材料废物库存 | raw全额物理账 |原子材料物种; 全额进出去向; 全湿期初期末原材在制非在制成品流体废物; 非加和来源; 继承交换向量; 内部交接id; actual_stage_event; original_Q0_Qc; observed_H; gross_V; independent_burden_A; whole_receiver_Qt; nonadditive_origin; matched_internal_history |独立称量采样及接收票据；产生量与出口库存分开。独立核对制造成品合并质量及相关元素。X仅去重经证同侧OTHER实际流，不冲库存对侧或卡存在 保留原始未除实物量、真实完整湿库存及自有继承在制台群历史一次，完整接收 Qt 独立于非重叠原批次 A/Q。 | kg; original native units | 每次移动及库存截止 | 从期初到期末及原继承队列 | 真实框架制造与防腐门及不重叠仪表资产供方 | 每 1 kg 参考流 | 称重票; 分析; 接收状态证据; 独立残差解释 |
| cp_physical_envelope | envelope | 逐材料废物库存 | raw全额物理账 |原子材料物种; 全额进出去向; 全湿期初期末原材在制非在制成品流体废物; 非加和来源; 继承交换向量; 内部交接id; actual_stage_event; original_Q0_Qc; observed_H; gross_V; independent_burden_A; whole_receiver_Qt; nonadditive_origin; matched_internal_history |独立称量采样及接收票据；产生量与出口库存分开。独立核对制造成品合并质量及相关元素。X仅去重经证同侧OTHER实际流，不冲库存对侧或卡存在 保留原始未除实物量、真实完整湿库存及自有继承在制台群历史一次，完整接收 Qt 独立于非重叠原批次 A/Q。 | kg; original native units | 每次移动及库存截止 | 从期初到期末及原继承队列 | 真实保温围护制造与装配门及不重叠仪表资产供方 | 每 1 kg 参考流 | 称重票; 分析; 接收状态证据; 独立残差解释 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_once | all inventory rows | 每个物理交换B_e为记录单位状态换算后的原生单位全额真实V_e；负荷交换B_e为专属或因果归属A_e。制造r_e = B_e / Q仅一次；另列放行后服务则B_e / 原Qc。Q与Qc为同一完整配置千克。相关分母为零则保留B_e不出单位结果。卡片及协议目标基准引用此同一结果，不二次相除。 | B_e; V_e; A_e; Q; Qc; cp_release; cp_physical; cp_postrelease | r_e | `containex-sheq-production`; `jrc-ilcd-2010` |
| raw_conversion | all inventory rows | 保留原表计称重状态字段。真实速率按记录区间只积分一次，已积分体积不再变化。体积质量桥接用独立实测物质专属密度状态，单位换算用精确原生属性单位支撑。物理核对并归属A_e后才normalize_once，不推密度件重或载热焓。 | cp_utilities; cp_species; cp_physical | converted raw quantities | `containex-sheq-production` |
| stock_and_cohort | all inventory rows | 逐材料保留物理期初+外部接收=期末+外部输出+有证转化；内部交接只抵消一次，反应及元素核对独立。在制及成品按真实队列携带逐交换继承向量。首次放行时Q内部转入成品，即使期末留存也已计生产Q。成品按原Qc追溯原交付冲回返还及真实增量服务，不重建制造。 | cp_physical; cp_release; cp_postrelease | reconciled physical and burden ledgers | `containex-sheq-production` |
| pack_pool | all inventory rows | O + P + I + ER + J_in + H2O_in = C + S + EO + W + J_out + H2O_out。各项均为同一材质或资产池的真实 kg。O/C 为完整湿态期初期末空、附在制、附成品和周转库存。P 为新增外采，I 为互斥供方随货整包装入向，ER 为收到外部返还，S 为随完整毛发运带出，EO 为独立向外返还，W 为整湿废弃物。J_in/J_out 为独立实测且未含于上述整物方向的非水修理、替换、沉积、残留或其他跨池转移。H2O_in/H2O_out 为独立实测且未内含于整物方向的真实水转移，含无修理的自然吸脱湿。真实新增或移除湿材料须按实测拆为互斥 J 和水，不设默认比例或密度。完整 W 已含基材、留存残余及水一次，除非跨界前真实分离，其嵌套子项不另列 J_out/H2O_out。配对内部池转移合并时抵消，不新增采购、服务或 Q。 | O; P; I; ER; J_in; H2O_in; C; S; EO; W; J_out; H2O_out; L_in_observed; L_out_observed; X_in; X_out; cp_packaging; cp_postrelease | per-material packaging closure | `containex-sheq-production` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration | all rows | 受控已装配单舱BOM及完整包含几何层次电气记录；识别真实差异及配置专属试验，不借用目录性能。 | 签署BOM图纸供货包含及质量记录 |
| identity | all selected flows | 逐核原生名同义备注CAS路线等级形态介质类型地区全部属性及精确支撑链；供货制品须有正面产品族相容性。辅流身份空白及服务方缺口逐项披露。 | 完整原生直读及适用性决定 |
| coverage | whole cohort | 全部原材在制非在制成品包装流体资产废物、逐交换继承向量、Q=0失败返工空转清理负荷及放行后真实H保留；不声称未来服务完整。 | 独立物理元素向量队列核对 |
| uncertainty | all calculations | 记录分辨率校准、缺失真实量、独立物种水约束、来源时空限制、上游服务缺口及分配敏感性；未知关系不宣称通过。 | 仪器实验室记录; 缺口表及敏感性 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| whole_configuration | reference and supplier coverage | 核对整件建筑核心及BOM称重试验原生限制双语中的同一已装配单舱配置。区分获准配置与真实执行物流作业。失败或未授权单元保留全额实物流负荷，但不计合格输出。 | `containex-classic-2025`; `containex-sheq-production` |
| quantity_and_inheritance | manufacture / FG / consolidated | 在制造成品和合并门，按一致范围及实测水分物种独立闭合总物理质量和相关元素。保留全湿期末库存及原材在制非在制成品逐交换继承向量，用独立测量解释残差。一个残差不能拟合两个未知。内部放行及构件交接只抵消一次。 | `containex-sheq-production` |
| packaging_conservation | each packaging material |每种真实包装逐一核对期初空置加附着在制成品加可复用库存、采购及外来返还，等于期末对应库存、随全额发运实物外出、独立对外返还及废物。真实移动方向去向逐项区分；内部复用抵消。不得用净产品Q、库存差、负荷或经济服务份额替代对外全额物质量。 O + P + I + ER + J_in + H2O_in = C + S + EO + W + J_out + H2O_out。各项均为同一材质或资产池的真实 kg。O/C 为完整湿态期初期末空、附在制、附成品和周转库存。P 为新增外采，I 为互斥供方随货整包装入向，ER 为收到外部返还，S 为随完整毛发运带出，EO 为独立向外返还，W 为整湿废弃物。J_in/J_out 为独立实测且未含于上述整物方向的非水修理、替换、沉积、残留或其他跨池转移。H2O_in/H2O_out 为独立实测且未内含于整物方向的真实水转移，含无修理的自然吸脱湿。真实新增或移除湿材料须按实测拆为互斥 J 和水，不设默认比例或密度。完整 W 已含基材、留存残余及水一次，除非跨界前真实分离，其嵌套子项不另列 J_out/H2O_out。配对内部池转移合并时抵消，不新增采购、服务或 Q。 原始观测对账为 L_in_observed - X_in = P + I + ER + J_in + H2O_in，以及 L_out_observed - X_out = S + EO + W + J_out + H2O_out。L 仅为观测侧汇总，不是额外实物流或供方需求。每个 X 按精确事件、组分、单位和方向映射到同侧其他重复观测，且规范侧已计一次。每项真实 J/H2O 仍保留一次；X 不因留库存而冲真实留存增量、C/O、对侧移动或嵌套 W 子项。原观测互斥时 X=0。内部附着复用不跨边界，内部维修或资产池转入须有源目的地配对账，不能再计采购和继承负荷。未知料水仍未决，不配残差。真实客户在本工厂或服务门之后的处置是另行披露的下游事件，不虚构为工厂 W。 | `containex-sheq-production` |
| species_and_state | air/water/reactions | 每个真实气体分子碳源介质相态及全额进出分别保留。COD/VOC/NOx/PM指标不证明分子质量。反应结构游离液态蒸气水须独立证据；蒸发吸湿及留存水不编成反应或维修。真实气液速率只积分一次，已积分体积保持体积。每个密度均物质状态专属，不默认水密度。 | `containex-sheq-production` |
| source_and_data | all actual quantities and references | 保留完整来源上下文及供应路线状态适用性、精确原生身份属性单位链、真实记录及不确定。不设默认尺寸面积厚度密度件重良率温度时间寿命认证性能工厂能耗安装比例或排放因子。未决核心闭合及缺失真实观测明确保留hold；普通辅流服务方身份缺口逐项披露。 | `containex-classic-2025`; `containex-sheq-production` |
| one_division | all calculations | 每个物理交换用真实原生单位的全额V与队列Q或原Qc作分母；分摊不得缩实物物流。仅归属负荷A做细分分配。raw换算归属后normalize_once只执行一次，卡片与汇总引用同一结果。Q=0保留真实负荷物流但不出单位结果。已首次放行的期末成品属于Q；交付重验退回不创造新Q。 | `containex-sheq-production`; `jrc-ilcd-2010` |


### 原接受批次与完整实物历史

Q0 表示锁定的正值原首次接受批次质量，Q=0 表示零产出观测，两者不是同一账户。原批次服务使用相同原 Q0=Qc 及观测 H，不形成新质量或第二归一化。

在唯一首次合格整件办公室舱体接受事件 e 锁定原批次 c 及原 Q0=Qc=sum(M_e)。M_e 为该事件经校准实测的完整湿态净办公室舱体 kg，实际内含部件只计一次，排除包装和测试资产。制造 Q 即所声明制造批次的原 Qc；不得由当前存活质量、净发运、后续重检或干湿变化重算 Qc。失败或未放行 Q=0 保留全部原始负荷，不给归一化结果。期初原料、在制带入实测实物库存及继承交换向量一次；期初已接受办公室舱体沿用原 Qc 及制造历史，不形成新采购或新接受。

每个原接受事件按原接受基准拆为互斥的净外部持有、厂内已放行成品、隔离、维修返工在制、内部使用、不可逆销毁或损失部分及其他有据终端处置。各当期和终端份额之和等于原 Qc，与当前湿态实物质量独立。毛发运和毛返还仍为完整实物事件；返还先逆转对应外部持有，再发运只移动同一存活份额。按有据原基准拆分部分损失和存活量，不得将损失水或部件补回存活量又外排该损失。当前湿态库存、蒸发、拆旧换新件及全部实物出口另建守恒桥。谱系或批次归属未知时，完整保留原始总量且结果未决；循环、接受后销毁、重验及失败作业不产生新 Q。

### 整件污染出口与非重叠供方需求

记录真实接收方转移 t，完整湿态整件出口 Qt 仅一次：废建筑制品、包装、擦拭件、棉签、布、过滤件或设备基材，加实际留存溶剂、粉尘、制剂残余及水。干基材、内含化学品和水账是经对账的非加和子项；仅在边界前真实物理分离并有各自转移 ID 后才成为独立外部废物出口。单一混合出口内的包装 W 或拆件来源仅可追溯子项，不形成第二出口或处理需求。真实接收方收据和处理总需求仍为 Qt，与环境归属独立。

依已证明因果需求和分配层级，将环境或服务向量 A_tc 归属不重叠原批次。核对 sum_c(A_tc) 加实际其他功能和未分配向量，等于一次真实供方总需求。实物 Qt 保留于唯一事件账，报告引用它，不得每批次再收费整份事件或按分配比例缩小物理出口。重叠报告间实物 V/D 上下文非加和。处理及服务清单采用独立归属的 A_tc/D，分母为制造 Q 或带观测 H 的原 Qc，不得每批次另加整份 Qt/D。真实归属未知仍未决。供方内含历史或处理与完整展开相应直接清单为互斥表示，不是可加采购。



### 真实完整生产者及设备台群

每项外供板材、保温棉、板制品、门窗、线束、配电总成、灯具、连接器、接地夹、制剂、燃料和包装须有真实完整相容上游生产者或互斥展开清单。按实际制品覆盖金属开采炼钢轧制镀锌、纤维粘结剂与板材生产、电气部件及装配、涂饰、公用维护包装废物。整份供货制品含已识别零件、树脂载水、涂层和安装五金一次。来源照片和产能是定性证据，不是当代供方订单实测。独立证据不要求同一工厂 SKU；实际不相容供方、路线、形态、地区或属性仍未决。在完整真实供方接口和全部实际自有制造覆盖前，不作全摇篮到门声明。

实际数控切割机、压力机、焊接设备、固化炉、起重叉车、秤和电气测试仪按期初、收货、在用、外部转交、退役、期末实物台群记录，独立于服务需求。真实安装零件液体、已发生操作维护、新旧拆装材料、泄漏及整件污染处置各一次，关联原批次和兼容供方服务单位。不设寿命、未来更换次数、估算设备质量或每舱 kg 一台设备。真实起重叉车完整上游服务及其展开燃料电力维护清单互斥；真实自有设备不藏进纸面外购服务。

### 包装湿态实物衡算及观测

O + P + I + ER + J_in + H2O_in = C + S + EO + W + J_out + H2O_out。各项均为同一材质或资产池的真实 kg。O/C 为完整湿态期初期末空、附在制、附成品和周转库存。P 为新增外采，I 为互斥供方随货整包装入向，ER 为收到外部返还，S 为随完整毛发运带出，EO 为独立向外返还，W 为整湿废弃物。J_in/J_out 为独立实测且未含于上述整物方向的非水修理、替换、沉积、残留或其他跨池转移。H2O_in/H2O_out 为独立实测且未内含于整物方向的真实水转移，含无修理的自然吸脱湿。真实新增或移除湿材料须按实测拆为互斥 J 和水，不设默认比例或密度。完整 W 已含基材、留存残余及水一次，除非跨界前真实分离，其嵌套子项不另列 J_out/H2O_out。配对内部池转移合并时抵消，不新增采购、服务或 Q。

原始观测对账为 L_in_observed - X_in = P + I + ER + J_in + H2O_in，以及 L_out_observed - X_out = S + EO + W + J_out + H2O_out。L 仅为观测侧汇总，不是额外实物流或供方需求。每个 X 按精确事件、组分、单位和方向映射到同侧其他重复观测，且规范侧已计一次。每项真实 J/H2O 仍保留一次；X 不因留库存而冲真实留存增量、C/O、对侧移动或嵌套 W 子项。原观测互斥时 X=0。内部附着复用不跨边界，内部维修或资产池转入须有源目的地配对账，不能再计采购和继承负荷。未知料水仍未决，不配残差。真实客户在本工厂或服务门之后的处置是另行披露的下游事件，不虚构为工厂 W。


### 完整可消费适用性段落

#### 来源章节 1 / 1

本PCR规定单座新制完整工厂装配单层钢框架办公室舱体的制造，含矿物棉底墙顶保温、声明的板材内衬地材选项、完整门窗及固定电气。受控真实配置必须显示以金属为主的整件预制建筑；结构骨架、货运集装箱、构件包或外购完整舱体再包装均不满足。制造商CLASSIC Line文件支持该构造，并区分卫生走廊材料及拆装替代项。SHEQ报告提供其生产网络的定性加工涂装总装背景。二者为透明技术综合，不是已证明同一个当代SKU工厂或订单。不将来源专属数量性能认证移作通用默认。

#### 来源章节 1 / 2

所选供货终端为首次工厂质量放行的独立完整已装配办公室舱体，不是现场完成的多舱建筑。本配置排除卫生管道暖通活动家具货运功能、基础现场吊装拼接公用接地工程、使用维护及寿命终结。配置变化须在同一PCR身份下另披露数据集并重新评估适用性，不为不同选项另造平行身份。拆装或不完整建筑可能属于更广CPC类别，但本已装办公室方法不声称覆盖。

#### 来源章节 1 / 3

所选配置采用真实 P5 刨花板地板、乙烯基卷材地面覆盖层、涂饰刨花板墙顶内衬及底墙顶矿物棉。来源列出的水泥木屑板、OSB、胶合板和 PU/PIR/岩棉夹芯替代方案不混入本清单。这些有证选项界定有建模意义的较窄方法，不是规定牌号配方或声称所有组合均来自同一实测 SKU。完整供货永久建筑内容须包含真实配套接地夹，及其外真实单供安装螺钉，即使以散件交付。净供货质量只排真实运输临时保护和搬运资产，不把必需永久五金作为包装漏掉。

#### 来源章节 3 / 1

每项限定均须在数据集元数据参考备注或等效完整记录中声明。1 kg是整件建筑的缩放基准，不是独立一千克钢材。

#### 来源章节 6 / 1

各卡为单一物理交换及有条件证据要求，不是默认BOM。闭合时每种真实独立制品制剂工艺投入废物化学物种及去向必须有独立卡。供货制品已内含组分时，采用互斥表示或核对制品桥接并抵消内部交接，不把整件湿质量与内含材料再次相加。单一真实混合废物用一个总量及独立实测非加和originW子账和一个服务方。不得用零other未决UUID或缺卡隐藏真实交换。完整卡片说明及全部供应原生限制属于规则。

#### 来源章节 6 / 2

用于实际开料、冲孔、折弯及底顶框架焊接的进厂板卷；保留钢厂牌号、厚度、表面及供应状态，镀锌板材属另一供货身份。钢厂轧制和炼钢在上游。分别称量领用与未用退料，不用目录钢重系数。 工厂生产组合的钢板材，以铁及少量碳锰硫磷硅组成，原生允许冷热轧。本卡仅用于供应商牌号厚度表面确认的真实收到冷轧非合金钢板，不是杆材合金钢成品框架或涂层配方。普通供应牌号缺失不授权编值。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 3

仅实际焊接采用此实心焊丝时启用。记录型号、组成、焊丝盘领退及焊接规程；来源支持焊接，不规定此耗材或通用MAG路线。若使用其他焊条或焊剂则逐项新增。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 4

仅真实采购该预混气且焊接规程采用时启用。整份供货混合物只采购一次；实测组成及气瓶净质量或状态明确的体积与密度。组分仅作非加和子账。纯气体另列互斥供货行，不设混配比例。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 5

粉末涂层前实际使用的一种外购底涂制剂。历史报告称纳米技术底涂，但未给配方、树脂或槽液浓度。保留供应商SDS、含载水的整份制剂、补加、槽液库存和真实损失；活性含量及载水只作子账，不另采购。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 6

一种供应商确认的完整粉末涂料。记录树脂、交联剂、颜填料组成，不编配方。称量新增、可复用粉末池、过喷及废物；内部回收过喷不再采购。采集真实前处理、施涂及固化条件与能耗。 工厂完整自由流动干粉涂料，用于带电表面施涂及真实热或UV固化。未固定树脂溶剂分数温度时间效率性能。一种供货制剂只采购一次；普通组成服务缺口须采记录，不能换成湿油漆或已涂构件。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 7

实际离开边界的钢边角料，说明合金、涂层、污染及接收方。对外输出用全额实物流，废物产生和期末库存另记。内部复用抵消，不自动成为可售产品或获得替代钢材抵扣。 仅中国厂内切割成形钢下料Waste，未提供良率废料率。其他地区油污焊接污泥拆建钢或其他真实状态须另配身份；不采用5%假定或自动回收抵扣。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 8

仅本涂装路线真实产生的湿污泥。干物质、水及实际危险组分是这一湿废物的子账，不重复列废物流。组成缺失须分析，不用残差拟合。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 9

仅实际交付废物管理的粉末；区分可复用喷房库存、滤材截留粉末及对外废物。按污染和接收去向确定身份。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 10

屋顶、底部或外墙采购的镀锌板，在原始记录中按用途及涂层状态分别识别。外购预涂板已含供应商涂层，不再加锌或供应商油漆。保留厂内真实压型与切割。不同牌号或涂层须拆行。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 11

仅真实矿物棉路线，底、顶、墙用量分别记录。保留纤维类别、粘结剂、覆面、含水、尺寸和供货质量。岩棉与玻璃棉不自动互换，不规定密度、热工值或厚度。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 12

用于来源支持的矿物棉墙木框架及真实屋顶横梁。记录树种、处理、等级、含水及实测质量；区分原材、安装木材及边角料。不推定树种、干密度或防腐配方。 工厂锯刨定尺建筑木材；松橡是例子非规定树种。保留原生Volume/m3。测真实实体尺寸体积及含水状态；闭合质量另独立称湿质量，或用同状态同材料独立实测密度。不用次级系数或默认密度换算m3为kg。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 13

仅声明采用的真实P5地板选项。相邻列出的水泥木丝板、OSB和胶合板是替代选项，不是同时配方；实际采用其他选项须另设原子卡。外购板材一次承接其树脂与供应制造。 仅真实P5刨花板地板，属于木片刨屑与树脂制成的成品板族，不表示正式中文宽名中的全部替代物。UF仅为常见描述不是强制配方。保留原生Volume/m3；采真实板净实体积及独立湿质量含水，不用默认密度。不重购饰面或供应树脂。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 14

真实覆面刨花板墙、顶及隔断内衬。逐规格及供货饰面识别；供应商树脂及涂层已内含，不再采购。金属或石膏板内衬替代项不属于本配置，除非另行声明并列清单。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 15

一种实际完整地面供货卷材，含背衬及填料。记录卷材质量、铺设面积及裁切损失；只有实际施作才计热焊接缝。不以原生PVC再叠加完整地材重建同一制品。 工厂成品覆盖制品族中的一种完整乙烯基塑料地面卷材。正式原生名的墙顶瓷砖形替代项不增加采购，也不构成合并物理交换。确认实际乙烯基制剂背衬及安装状态；原生PVC树脂或复合木地板不是本制品。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 16

仅供应组成、载体及固化体系确认的厂内实际有机硅密封胶。现场运输孔封堵在边界外。其他实际密封胶或粘合剂须逐项列卡，不假设固化副产物或反应水。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 17

仅围护实际安装的一种指定成品密封条。识别聚合物、截面、完整供货组成和质量，不以原胶代替，也不推定隔汽膜。实际存在的独立气密、隔汽、防水膜或固定胶带必须另设卡并计量。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 18

一种用于立柱与底顶框架连接的指定螺栓。采购涂层只承接一次；真实螺母、垫圈、螺钉、铆钉及嵌件均为独立制品，存在时另设卡，不用紧固件集合。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 19

围护安装用一种真实螺钉产品。记录尺寸、合金、饰面、领用、未用库存和安装质量；其他物理紧固件另列，不藏入本行。 全球工厂生产组合，仅装配辅料钢螺钉，未固定牌号涂层或供应商。不代表螺栓螺母铆钉垫圈或紧固件集合；真实规格及上游服务仍须核对。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 20

仅所选 P5 和乙烯基地板路线实际采用的完整供货胶；焊接条缝与粘接不视为同一工序，单独固化剂或底涂各设卡。

#### 来源章节 6 / 21

仅真实分流的该板材裁切废物，保留覆面、树脂和含水信息。对外输出、厂内留存及产生量不同。真实混合废物可改为一个MixedWaste卡，配独立实测且非加和的来源子账及单一服务方，不强造分流出口。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 22

真实单独输出的矿物棉边角料，保留纤维、粘结剂、覆面和含水。捕集粉尘及附着在制品库存为不同状态，不推定无害或可回收。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 23

成套门扇、门框、密封及五金按真实包含清单只采购一次。制造商描述镀锌涂层钢门扇及保温选项；实际组分质量仅作非加和制品子账。独立供货五金须与总成互斥，不能重购。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 24

一种真实完整办公室窗，声明框材聚合物、玻璃、充气、密封、卷帘及五金包含范围。供应商玻璃、框、气体制造在上游，不另采购同一内含组分。目录玻璃尺寸与充气不能作通用实测。 工厂制造外窗族，仅一种完整供给塑料框双玻办公室窗及真实卷帘五金包含。原生备注列可选装饰卷帘泛水及新旧窗安装示例，不规定框材安装凸缘或新增采购。须核真实整件包含，单独玻璃不是本制品。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 25

仅真实以完整线束采购时采用；保留国家电气配置、导体与绝缘规格、连接器包含范围。厂内从线盘布线时，改列逐种实际电缆及连接器，内部制成线束交接抵消。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 26

一个真实外购完整配电箱，声明保护器件及安装状态。保留包含清单；只有未内含时才另计厂装保护器件。额定值是配置信息，不是耗电量。 一种工厂已配电气装置的成品配电箱总成，电压不超过1000V。宽原生族也命名控制台柜底座，但本卡只是一套完整舱体配电箱，不代表插座空箱高压箱或独立器件集合。实际额定值及包含器件清单须有记录。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 27

一种已安装供货灯具。记录真实功率、驱动器、外壳包含范围及安装数量与质量；工厂试验电力另实测，不能仅从额定值推算。 一种工厂制造完整且专用于LED光源的灯具，不能以单LED模块驱动器或荧光灯具代替。用真实整件质量及包含清单，不设功率寿命或光效。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 28

一种未内含于外购线束或板件的指定完整插座。保留国家型式、触点、底盒及面板包含范围；开关和外部CEE连接器真实独立供货时另列卡。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 29

仅真实单独供货完整开关，触点壳体含一次；已在外购接线模块内含时不再列采购。

#### 来源章节 6 / 30

真实外部嵌入完整引入连接器，符合所声明国家电气配置；触点壳体和内含紧固件一次，区分厂端供货外的配对电源线。

#### 来源章节 6 / 31

CLASSIC 明示随舱供夹并由客户在现场安装。真实配套永久接地夹即使散件交付仍纳入声明完整供货质量，保留安装状态；不是运输皮重，也不证明现场已完成接地投用。

#### 来源章节 6 / 32

仅完整接地夹制品之外真实单列的安装螺钉；不重复内含紧固件，也不把目录扭矩或规格当作数据集实测值。

#### 来源章节 6 / 33

唯一首次质量放行参考输出为整套指定单层办公室舱体：焊接防腐钢框架、保温底墙顶、真实防风雨及气密密封、地板和内衬、完整门窗及固定电气。本声明配置不含卫生管道、暖通及活动家具。称量永久内含物净质量，真实留存水分只计一次；排除运输保护及吊具。须有正面相容的整件建筑原生身份，不能以钢材、构件或货运集装箱代替。 仅工厂生产组合的已制造成品且以金属为主的建筑。该宽原生产品族未规定地区钢牌号几何装饰认证性能。仅用于primary及真实包含质量记录确定的完整指定已装办公室建筑，不能代为构件裸结构或货柜。首次放行是唯一生产参考，其他同UUID移动是全额队列服务交接。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 34

对加工、抽排、涂装、装配、试验、清理、启停及空转，按真实采购电压、地区和合同一次计量。内部变压不再次采购。自发电与对外送电分开，保留原kWh，1 kWh = 3.6 MJ。不推定电网UUID或排放因子。 仅中国小于1kV用户侧电网平均消费组合；其他地区电压、发电机输出、可再生合同或输配服务须另配流。原生备注涵盖到用户供电，核对上游门防重复发输电。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 35

仅真实外供清洗、前处理或工厂试验水。记录完整供给质量及状态，内循环水不再采购。不从通用工厂路线推定舱体高压清洗、卫生启用试验、蒸汽或锅炉。 经过处理的工业工艺水Product，Mass/kg；未确定固定地方供应路线地区或纯度。18000自然水分类位置作为分类瑕疵披露，Product类型名称及处理备注一致指供给工业水。不能用于自然取水未处理水蒸汽或既有循环库存，不重复采购。真实处理与服务方须相容。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 36

仅真实工厂燃烧器、固化或加热装置使用时启用。保留供应组成、体积温压及干湿基、热值及实测消耗，不设标准温度或排放因子。纯电固化不启用本行。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 37

仅真实场内自控搬运设备或发电使用。称量领用与油罐库存，或采用记录状态下独立测得的该燃料密度；服务方数据集已含的运输燃料不再采购。 仅质量基准柴油材料身份；牌号配方密度热值炼制地区服务方未特指。不得推定或代用农业能量燃烧服务行。真实场内燃料及上游方另核。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 38

真实使用时的一种外供完整清洁制剂，保留配方状态；生产来源没有通用脱脂或磷化配方。真实单列配料及槽液维护各设卡。

#### 来源章节 6 / 39

一种真实耗用擦拭基材，区别于维护复用抹布台账；清洁制剂和水在整件污染出口中只含一次。

#### 来源章节 6 / 40

一种真实完整安装滤芯，按供货状态含外壳滤材；不规定台数、更换周期或默认捕集效率。

#### 来源章节 6 / 41

一种真实指定外供润滑制剂。期初、在用、新增、期末油和实测泄漏移除独立于设备服务负荷，不设换油周期。

#### 来源章节 6 / 42

真实用户侧交流供电，限于另列已绑定中国小于1kV电网平均流以外的条件。记录地区、电压、期间、供电组合和上游门，每仪表只归一个互斥供电卡；具体 UUID 未决，不能拿中国流代欧洲工厂供电。

#### 来源章节 6 / 43

仅独立证实跨越指定燃烧或过程空气门的O2；保留全额入口及反应平衡。不虚购氧气，不设固定空气组成系数。 仅O2分子CAS7782-44-7、Mass/kg的空气可再生元素资源，不是采购气体或排放。保留真实大气至过程入口及独立物种证据，不从宽液态离子别名假设真实状态。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 44

仅真实装置实测载气或燃烧空气N2入口。保留全额通量，不与排出净抵消，不等同NOx。 仅二氮N2 CAS7727-37-9、Mass/kg空气可再生元素资源，不是采购氮或排放。不设空气组成或低温状态。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 45

仅真实核算空气流中独立计量的氩；与外购焊接混合气及出口分别保留。 仅元素氩Ar CAS7440-37-1、Mass/kg空气可再生元素资源；真实实测入口，不是采购保护混合气排放或假定空气分数。同位素别名不证明富集放射性来源。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 46

仅真实实测吸湿或过程空气含湿，保留配置、状态及游离留存水核对。环境平衡吸湿不等于采购材料、反应水、维修或新增Q。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 47

仅在明确实物空气门内独立实测载入的背景 CO2，来源区别于燃料碳；不是虚拟购气、负排放或固定空气组分。

#### 来源章节 6 / 48

仅物理上确已混合时作为一个真实混合废水出口。保留全湿量、组成、下水道或厂外去向及处理门。COD、电导率及悬浮物为指标或子账，不另作分子质量出口。真实不同去向及污泥分开。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 49

仅一个真实混装对外固废存在时启用。木材、乙烯基地材、胶筒及其他真实来源配独立实测子账，不与混装总量相加。总量及一个相容管理服务方只计一次；单独输出者仍分列。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 50

仅本真实单独转交完整污染物流，基材、留存制剂、粉尘和水一次；若实际共收至一个混合出口，本项为实测非加和来源子账，不另导出或新增处理需求。

#### 来源章节 6 / 51

仅本真实单独转交完整污染物流，基材、留存制剂、粉尘和水一次；若实际共收至一个混合出口，本项为实测非加和来源子账，不另导出或新增处理需求。

#### 来源章节 6 / 52

仅本真实单独转交完整污染物流，基材、留存制剂、粉尘和水一次；若实际共收至一个混合出口，本项为实测非加和来源子账，不另导出或新增处理需求。

#### 来源章节 6 / 53

仅真实直接化石燃烧或已核实过程释放；排除供应上游排放。用CO2分子实测或燃料碳含量及物种平衡配真实控制性能计算。VOC或总碳指标不是CO2。 仅普通分子化石CO2 CAS124-38-9、Mass/kg向未指定空气排放。宽同义词含离子干冰同位素词，不改变声明的分子化石空气身份。不能代生物源延迟修正长期土水或其他特定空气分区。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 54

H2O蒸气与液体废水、留存游离水及独立证实的反应水分别记录。测湿度、流量及状态，不以水密度换算气体，不用残差同时解两个未知。自然脱湿不创造维修或新产量。 仅普通H2O CAS7732-18-5向未指定空气排放的蒸气，Mass/kg。继承同义词表含同位素结合水液态水词，这些别名不授权把本CAS相态解释为重水氚水结合水或液体废水。真实特定空气分区须另匹配身份。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 55

仅实测载气、燃烧空气或保护气排放中的真实N2。分别记录全额分子通量及来源；NOx不是N2。不按默认空气比例编造通风量。 仅二氮N2 CAS7727-37-9、Mass/kg向未指定空气排放，与空气资源入口NOx采购低温氮或其他排放分区不同。同义词液氮不规定真实空气出口状态。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 56

仅实测排放门真实未反应O2，与水、氧化物中的氧及反应消耗氧分开。记录来源及完整状态和物种证据。 O2分子CAS7782-44-7、Mass/kg向未指定空气排放，与空气资源入口供给液氧氧化物结合氧及其他空气土水分区不同。宽液态离子激发态别名不证明这些供货状态，也不改变真实O2物种。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 57

仅外购预混气或独立实测空气通量中的真实氩，按真实接收介质记录。无组成及状态证据，不将混合气指标变为氩质量。 仅元素氩Ar CAS7440-37-1、Mass/kg向未指定空气排放，不代采购气体其他介质或空气分区。同位素别名不声称富集放射性氩。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 58

仅真实工厂燃烧、焊接、固化或逸散且独立识别的本分子物种，向声明空气介质排放；记录来源、状态、治理和测量，不设因子、不假定完全燃烧，也不将 NOx/VOC/CO/总碳指标直接换成本分子，其他实际分子物种各列卡。

#### 来源章节 6 / 59

仅真实工厂燃烧、焊接、固化或逸散且独立识别的本分子物种，向声明空气介质排放；记录来源、状态、治理和测量，不设因子、不假定完全燃烧，也不将 NOx/VOC/CO/总碳指标直接换成本分子，其他实际分子物种各列卡。

#### 来源章节 6 / 60

仅真实工厂燃烧、焊接、固化或逸散且独立识别的本分子物种，向声明空气介质排放；记录来源、状态、治理和测量，不设因子、不假定完全燃烧，也不将 NOx/VOC/CO/总碳指标直接换成本分子，其他实际分子物种各列卡。

#### 来源章节 6 / 61

仅真实工厂燃烧、焊接、固化或逸散且独立识别的本分子物种，向声明空气介质排放；记录来源、状态、治理和测量，不设因子、不假定完全燃烧，也不将 NOx/VOC/CO/总碳指标直接换成本分子，其他实际分子物种各列卡。

#### 来源章节 6 / 62

真实随载气排出的背景 CO2，独立于新生成化石 CO2 及任何生物源；保留毛实物流，不再当燃烧生成量或虚构抵扣。

#### 来源章节 6 / 63

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅真实供给的PE保护膜；保留聚合物、添加剂、新增及附着、空置、可复用库存。其他真实运输罩聚合物须另卡。保护膜排除于舱体净Q。 本卡仅为新增外购P。期初期末O/C为库存而非采购；ER另设真实外来返还卡。 工厂聚乙烯薄膜片材Product，CAS9002-88-4且Mass/kg，不是成品PE袋或PET。备注比较PET竞争聚合物，不表示本组成。核真实PE牌号制剂厚度及全额薄膜移动，不推密度或使用份额。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 64

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅真实木制运输垫木；区分树种、处理、含水、可复用所有权及永久安装木材。不设复用次数，不在返还时自动变共产品。 本卡仅为新增外购P。期初期末O/C为库存而非采购；ER另设真实外来返还卡。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 65

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅真实跨门运输架；跟踪资产身份、期初期末、外来接收返还及全额发运。实物质量不得按负荷或服务分摊缩减，不是永久舱体Q。 本卡仅为新增外购P。期初期末O/C为库存而非采购；ER另设真实外来返还卡。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 66

真实退回舱体全额计量，识别原交付放行队列及继承负荷。适当冲回原交付移动；退回或重验均不创造新生产Q。真实增量维修服务分开，自然水分变化不编作维修。 仅工厂生产组合的已制造成品且以金属为主的建筑。该宽原生产品族未规定地区钢牌号几何装饰认证性能。仅用于primary及真实包含质量记录确定的完整指定已装办公室建筑，不能代为构件裸结构或货柜。首次放行是唯一生产参考，其他同UUID移动是全额队列服务交接。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 67

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅真实外部返还且仍可用的该种包装。按原材料资产身份状态及来源记录全额ER；此返还不重新分配上游采购制造。损坏或改变者使用真实独立状态或废物身份。I与P保持互斥。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 68

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅真实外部返还且仍可用的该种包装。按原材料资产身份状态及来源记录全额ER；此返还不重新分配上游采购制造。损坏或改变者使用真实独立状态或废物身份。I与P保持互斥。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 69

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅真实外部返还且仍可用的该种包装。按原材料资产身份状态及来源记录全额ER；此返还不重新分配上游采购制造。损坏或改变者使用真实独立状态或废物身份。I与P保持互斥。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 70

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅为真实供方随货整制品入向 I，与新增 P、外部返还 ER 互斥。即使无单列价格仍保留完整湿量、供方包含或皮重及唯一负荷所有者，不是舱体 Q 的另一组分。

#### 来源章节 6 / 71

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅为真实供方随货整制品入向 I，与新增 P、外部返还 ER 互斥。即使无单列价格仍保留完整湿量、供方包含或皮重及唯一负荷所有者，不是舱体 Q 的另一组分。

#### 来源章节 6 / 72

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅为真实供方随货整制品入向 I，与新增 P、外部返还 ER 互斥。即使无单列价格仍保留完整湿量、供方包含或皮重及唯一负荷所有者，不是舱体 Q 的另一组分。

#### 来源章节 6 / 73

仅实际单供维修材料，不预定维修配方。完整湿态收货库存与独立负荷一次；真实转入包装池时按独立组成测量拆 J_in 与 H2O_in，内部源目的地配对合并抵消，不再采购。

#### 来源章节 6 / 74

仅实际单供维修材料，不预定维修配方。完整湿态收货库存与独立负荷一次；真实转入包装池时按独立组成测量拆 J_in 与 H2O_in，内部源目的地配对合并抵消，不再采购。

#### 来源章节 6 / 75

已放行舱体按全额真实实物V发运，绑定原首次放行队列Qc。此为成品服务实物交接，不是第二次生产输出、新放行，也不因期末成品库存而扣首次Q。被拒收或未授权发运仍保留真实物流负荷，不自动取得合格状态。 仅工厂生产组合的已制造成品且以金属为主的建筑。该宽原生产品族未规定地区钢牌号几何装饰认证性能。仅用于primary及真实包含质量记录确定的完整指定已装办公室建筑，不能代为构件裸结构或货柜。首次放行是唯一生产参考，其他同UUID移动是全额队列服务交接。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 76

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅随真实发运舱体附着外出的该包装全额S，独立于净Q及负荷份额。保留原资产材料身份及接收状态。EO为独立对外返还卡；内部复用抵消。随全额真实发运舱体外出的该种包装全额实物流；逐移动和去向分开。内部复用抵消，不按净Q、分摊或未来使用缩量。核对完整包装池，移动不自动产生共产品抵扣。 工厂聚乙烯薄膜片材Product，CAS9002-88-4且Mass/kg，不是成品PE袋或PET。备注比较PET竞争聚合物，不表示本组成。核真实PE牌号制剂厚度及全额薄膜移动，不推密度或使用份额。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 77

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅随真实发运舱体附着外出的该包装全额S，独立于净Q及负荷份额。保留原资产材料身份及接收状态。EO为独立对外返还卡；内部复用抵消。随全额真实发运舱体外出的该种包装全额实物流；逐移动和去向分开。内部复用抵消，不按净Q、分摊或未来使用缩量。核对完整包装池，移动不自动产生共产品抵扣。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 78

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅随真实发运舱体附着外出的该包装全额S，独立于净Q及负荷份额。保留原资产材料身份及接收状态。EO为独立对外返还卡；内部复用抵消。随全额真实发运舱体外出的该种包装全额实物流；逐移动和去向分开。内部复用抵消，不按净Q、分摊或未来使用缩量。核对完整包装池，移动不自动产生共产品抵扣。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 79

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅该包装资产向指定所有者接收方的独立真实对外返还EO，按全额物质量计。排除发运卡已计随货S。保留真实状态及原负荷账，不自动共产品抵扣或按分摊缩质量。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 80

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅该包装资产向指定所有者接收方的独立真实对外返还EO，按全额物质量计。排除发运卡已计随货S。保留真实状态及原负荷账，不自动共产品抵扣或按分摊缩质量。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 81

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅该包装资产向指定所有者接收方的独立真实对外返还EO，按全额物质量计。排除发运卡已计随货S。保留真实状态及原负荷账，不自动共产品抵扣或按分摊缩质量。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 82

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅该包装真实丢弃并交给指定接收方时，以全额实测湿质量计。期末废物库存与附着、空包装库存分开。不同时加和材料组分与真实混装废物出口。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 83

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅该包装真实丢弃并交给指定接收方时，以全额实测湿质量计。期末废物库存与附着、空包装库存分开。不同时加和材料组分与真实混装废物出口。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 84

按 pack_pool 保留互斥 J_in/J_out 和 H2O_in/H2O_out 完整湿态池衡算，I 为供方随货入向，O/C 为库存。真实增量与整件 W 一次，X 只消重同侧其他重复观测。 仅该包装真实丢弃并交给指定接收方时，以全额实测湿质量计。期末废物库存与附着、空包装库存分开。不同时加和材料组分与真实混装废物出口。 本卡仅执行normalize_once一次，raw采集不预先相除。

#### 来源章节 6 / 85

仅真实分离后作为废物转交的完整拆下件，基材污染水一次；采用互斥 J_out/H2O_out 或完整 W；若仍在整垫梁、运输架或混合整湿 W 内，只是非加和来源，不另出口。

#### 来源章节 6 / 86

仅真实分离后作为废物转交的完整拆下件，基材污染水一次；采用互斥 J_out/H2O_out 或完整 W；若仍在整垫梁、运输架或混合整湿 W 内，只是非加和来源，不另出口。

#### 来源章节 6 / 87

仅真实跨资产门完整设备，真实安装零件液体一次。按配置记录期初、收货、在用、期末台群完整质量件数，独立于兼容供方服务需求及真实使用维护历史；具体条件制品不是必备清单、寿命、更换周期或每舱 kg 一台机器。

#### 来源章节 6 / 88

仅真实跨资产门完整设备，真实安装零件液体一次。按配置记录期初、收货、在用、期末台群完整质量件数，独立于兼容供方服务需求及真实使用维护历史；具体条件制品不是必备清单、寿命、更换周期或每舱 kg 一台机器。

#### 来源章节 6 / 89

仅真实跨资产门完整设备，真实安装零件液体一次。按配置记录期初、收货、在用、期末台群完整质量件数，独立于兼容供方服务需求及真实使用维护历史；具体条件制品不是必备清单、寿命、更换周期或每舱 kg 一台机器。

#### 来源章节 6 / 90

仅真实跨资产门完整设备，真实安装零件液体一次。按配置记录期初、收货、在用、期末台群完整质量件数，独立于兼容供方服务需求及真实使用维护历史；具体条件制品不是必备清单、寿命、更换周期或每舱 kg 一台机器。

#### 来源章节 6 / 91

仅真实跨资产门完整设备，真实安装零件液体一次。按配置记录期初、收货、在用、期末台群完整质量件数，独立于兼容供方服务需求及真实使用维护历史；具体条件制品不是必备清单、寿命、更换周期或每舱 kg 一台机器。

#### 来源章节 6 / 92

仅真实跨资产门完整设备，真实安装零件液体一次。按配置记录期初、收货、在用、期末台群完整质量件数，独立于兼容供方服务需求及真实使用维护历史；具体条件制品不是必备清单、寿命、更换周期或每舱 kg 一台机器。

#### 来源章节 6 / 93

仅真实跨资产门完整设备，真实安装零件液体一次。按配置记录期初、收货、在用、期末台群完整质量件数，独立于兼容供方服务需求及真实使用维护历史；具体条件制品不是必备清单、寿命、更换周期或每舱 kg 一台机器。

#### 来源章节 6 / 94

仅真实跨资产门完整设备，真实安装零件液体一次。按配置记录期初、收货、在用、期末台群完整质量件数，独立于兼容供方服务需求及真实使用维护历史；具体条件制品不是必备清单、寿命、更换周期或每舱 kg 一台机器。

#### 来源章节 6 / 95

仅本设备按实测配置状态真实完整对外转交或返还，仍可用；不是服务负荷、虚拟转售或避免生产抵扣。配对内部台群转移抵消。

#### 来源章节 6 / 96

仅本设备按实测配置状态真实完整对外转交或返还，仍可用；不是服务负荷、虚拟转售或避免生产抵扣。配对内部台群转移抵消。

#### 来源章节 6 / 97

仅本设备按实测配置状态真实完整对外转交或返还，仍可用；不是服务负荷、虚拟转售或避免生产抵扣。配对内部台群转移抵消。

#### 来源章节 6 / 98

仅本设备按实测配置状态真实完整对外转交或返还，仍可用；不是服务负荷、虚拟转售或避免生产抵扣。配对内部台群转移抵消。

#### 来源章节 6 / 99

仅本设备按实测配置状态真实完整对外转交或返还，仍可用；不是服务负荷、虚拟转售或避免生产抵扣。配对内部台群转移抵消。

#### 来源章节 6 / 100

仅本设备按实测配置状态真实完整对外转交或返还，仍可用；不是服务负荷、虚拟转售或避免生产抵扣。配对内部台群转移抵消。

#### 来源章节 6 / 101

仅本设备按实测配置状态真实完整对外转交或返还，仍可用；不是服务负荷、虚拟转售或避免生产抵扣。配对内部台群转移抵消。

#### 来源章节 6 / 102

仅本设备按实测配置状态真实完整对外转交或返还，仍可用；不是服务负荷、虚拟转售或避免生产抵扣。配对内部台群转移抵消。

#### 来源章节 6 / 103

仅真实整件污染退役设备，基材安装残余水一次；若已含于同一实物混合接收事件，只留实测非加和来源，接收方完整真实需求独立于批次负荷归属。

#### 来源章节 6 / 104

仅真实整件污染退役设备，基材安装残余水一次；若已含于同一实物混合接收事件，只留实测非加和来源，接收方完整真实需求独立于批次负荷归属。

#### 来源章节 6 / 105

仅真实整件污染退役设备，基材安装残余水一次；若已含于同一实物混合接收事件，只留实测非加和来源，接收方完整真实需求独立于批次负荷归属。

#### 来源章节 6 / 106

仅真实整件污染退役设备，基材安装残余水一次；若已含于同一实物混合接收事件，只留实测非加和来源，接收方完整真实需求独立于批次负荷归属。

#### 来源章节 6 / 107

仅真实整件污染退役设备，基材安装残余水一次；若已含于同一实物混合接收事件，只留实测非加和来源，接收方完整真实需求独立于批次负荷归属。

#### 来源章节 6 / 108

仅真实整件污染退役设备，基材安装残余水一次；若已含于同一实物混合接收事件，只留实测非加和来源，接收方完整真实需求独立于批次负荷归属。

#### 来源章节 6 / 109

仅真实整件污染退役设备，基材安装残余水一次；若已含于同一实物混合接收事件，只留实测非加和来源，接收方完整真实需求独立于批次负荷归属。

#### 来源章节 6 / 110

仅真实整件污染退役设备，基材安装残余水一次；若已含于同一实物混合接收事件，只留实测非加和来源，接收方完整真实需求独立于批次负荷归属。

#### 来源章节 8 / 1

协议只采raw原始观测。aggregation_rule只声明分组的目标参考基准，不授权预先将raw采集值相除。保留每个原单位速率状态及继承向量。raw单位速率转换及真实归属后只执行一次normalize_once，卡片数量和报告汇总复用同一结果。Q为完整净制品首次放行千克；真实成品服务及相关全额实物移动绑定原队列Qc与观察窗H。不填未来服务、不假定恢复、不在重验时造产量、不删失败未授权活动。

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 指定配置及首次放行门的相容完整钢框架办公室制造 |
| allowed_use | 前景结果配明确供应制造真实物流废物处理链接使用；放行后服务按原Qc及观察H另标签 |
| excluded_use | 货柜单钢构件裸套件卫生模块多模块现场建筑安装运行使用者服务；无证结构防火热工认证寿命声明 |
| required_metadata | 全部参考限定; 精确原生限制; 单一供货包含及供应厂内桥接; 工艺库存队列全额物流边界 |
| required_quality_disclosure | 真实计量归一化基准; 未决核心闭合辅流服务来源缺口; 研究情景及分配证据; 观察期间及未来未执行服务 |
| update_trigger | 配置围护装饰供货状态焊涂路线首次放行门服务原生身份计量或来源方法改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes (30 June 2025), p195 and p216; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 类别边界：已装未装不完整建筑与结构件区分；不提供制造数量或原生身份批准 |
| containex-classic-2025 | handbook | CONTAINEX, Technical description CLASSIC Line Standard, 30.06.2025, §§1–3 and6–8, pp4–26; https://catalog.containex.com/catalog/CONTAINEX/en/catalogs/Technische-Beschreibung-Sanitaer/pdf/Technische-Beschreibung-Sanitaer.pdf | 完整舱体构造、替代层次制品、电气供应现场接口及已装与拆装状态。近似重量尺寸额定值认证及替代配置不是默认配方数据 |
| containex-sheq-production | handbook | CONTAINEX, SHEQ Report, retained historical publisher edition, §§7.1 and7.5 pp49 and55–57; https://catalog.containex.com/catalog/containex/en/catalogs/CTX-SHEQ-Report/pdf/CTX-SHEQ-Report.pdf | 定性部件加工焊接框架底涂粉末防腐总装检查装运。PCR采集守恒协议为作者方法要求，不是工厂实测；不采用当前工厂SKU认证或数值性能 |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA Detailed guidance, first edition March 2010, §§7.9.2–7.9.3 pp255–272 (PDF275–292); https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 有条件归因分配层级、细分虚拟细分、逐交换支配性物理因果及真实门状态剩余共同过程市值；不证明工业路线或默认系数 |