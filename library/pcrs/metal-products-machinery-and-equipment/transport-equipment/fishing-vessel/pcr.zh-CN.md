---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.fishing-vessel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 配置柴油拖虾渔船制造

## 1. 范围与适用性

覆盖柴油机械轴推进、固定甲板拖网设备、遮蔽渔获处理区、水平平板冻结机及冷藏储存的新完整焊接钢质单体拖虾船制造。本较窄CPC49315边界处理造船供货完整性调试及物理核验净船质量；排除独立加工运输船其他渔业推进船体路线不完整船体修理改装及散装船件。现有线束船帆螺旋桨记录不覆盖完整船舶集成。Damen库存标准第1页提供型号专属舾装及散装渔具排除示例；不能证明通用钢牌号制造配方制冷剂实际工厂测量。捕捞航次渔获产量商业船上加工冻结使用燃油运输服务维护寿命报废在范围外。纳入固定加工设备制造，不建模水产品生产。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.fishing-vessel |
| classification_refs | CPC 3.0 49315; 较窄候选范围；不声明已接受映射 |
| covered_products | 配置新完整钢质柴油机械推进带固定冻结储存设备拖虾船 |
| excluded_products | 其他渔船加工船；其他船体推进路线；散件渔具；不完整船体；修理改装；水产品生产使用服务 |
| representative_product | 一种验收声明钢质柴油拖虾船，含固定螺距桨绞车吊杆舾装固定平板冻结机冷藏鱼舱；库存2607仅为结构示例 |
| production_route | 收货自制外购控制；实际钢船体建造；实际表面预处理涂装；机械甲板冷藏舱室舾装；下水实际试验；实测净质量核对验收 |
| market_state | 声明船厂交付边界验收完整配置新船；散装作业渔具及消耗性柜内容物排除净参考 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造一种完整声明柴油拖虾船配置 |
| How much | 1 kg验收净完整设备；一台验收完整设备具有物理核验M kg |
| How well | 满足实际批准图样清单船厂验收计划，包括船体接头水密轴舵甲板设备电安全冷藏功能质量配置。保留实际准则结果适用批准；不假设通用公差法规符合 |
| How long or cycle | 一次船舶制造交付；不采用吨渔获海日寿命单位 |
| reference_flow_link | `finished_vessel` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 捕鱼船，加工船及其他加工或保存水产品用船 `30092dc1-499d-4dac-80e0-30a02bf8fc04` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 船号船体号；图样清单修订；实际钢牌号焊接涂层工艺；船体推进捕捞冻结冷藏舱室导航安全配置；供货完整性已含液；实际试验范围结果；场址期间；检验方法日期原始测量静水力水密度柜状态；签认轻船交付修正台账；实测正值M kg；排除余留工作液；边界上游接收覆盖 |

在数据集元数据或等效过程流注释声明各限定。宽泛公开成品船身份通过这些限定约束为一种配置拖网船；不授权建模全部CPC49315船舶。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `survey_provenance` | finished_vessel | 质量 | kg | cp_mass验收记录必须源于本船体号当前实际轻船重量检验。要求原始吃水干舷观测检验水密度核验竣工静水力几何纵倾修正柜测深组成密度见证完整性实测增减。以签认可追溯kg修正及不确定性将检验轻船状态核对为本验收净配置，按实际安装组件质量平衡复核。不能以额定排水量载重量GT/NT目录估计满燃油重量替代净M。不假设整船台秤。历史NMA第3及5–7页支持检验方法背景；采用实际适船批准方法记录。 |
| `net_configuration` | finished_vessel | 质量 | kg | 纳入永久安装船体舾装及封闭机械系统实际余留工作充注，含供货制冷剂充注。排除燃油淡水储柜内容物压载污水舱底水渔获货物冰包装人员散装渔具工具物资临时施工试验设备载荷。记录各柜系统清单及净验收状态物理修正。随交付燃油余留为独立附带产出，排除本净船参考；数据集纳入时展开其收货产出卡片。不以工作柜容量替代实测修正。 |
| `engine_count` | marine_engine | 件数 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 保留实际供货安装发动机件数及不变公开件数属性。独立测量实际配置批次供货发动机kg及供货预充范围核对整船M；本物理kg/件关系不替代交换属性。所选class43110身份排除道路航空推进发动机。 |
| `electrical_energy` | electricity_hull; electricity_finishing; electricity_outfitting; electricity_acceptance | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留实际表计kWh；1 kWh =3.6 MJ。安装功率不是工厂消耗。 |
| `hydraulic_volume` | hydraulic_oil | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 保留净外供配方体积；1 L =0.001 m3。物理余留质量核对使用记录温度实测密度，不改变公开体积或假设额定填充。 |
| `species_and_formulations` | hull_assembly; hull_plate; frame_section; welding_wire; welding_co2; offcut; weld_slag; blast_shot; epoxy_coating; cleaning_water; spent_shot; captured_dust; paint_waste; wash_waste; air_dust; reduction_gear; propeller_shaft; propeller; rudder; anchor; trawl_winch; steel_bolt; hydraulic_hose; genset; bilge_pump; electrical_cable; starter_battery; radar; plate_freezer; hold_refrigerator; hold_insulation; engine_oil; coolant; test_diesel; used_oil; air_co2; air_co; air_no; air_no2; finished_vessel | 质量 | kg | kg交换使用完整指定配方组件质量。采购混合液总成已含组分不能重复收货。各实测排放为一种化学物种来源介质；分开NO/NO2化石生物碳。表计体积换质量须实际密度条件。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明船厂收货边界采购指定钢材船体及完整船舶机械舾装 |
| starting_condition_role | 前景收货边界；上游制造来料运输单独链接 |
| product_classification_scope | 声明钢质柴油机械推进拖虾船CPC49315子集 |
| recursive_input_rule | 采购船体发动机冷藏设备替代已含内部件供货消耗材料供货工序；内部船体分段转移不是收货 |
| upstream_dataset_requirement | 匹配实际造船钢焊材涂层牌号状态船机用途船设备完整性制冷配方预充来源电力废物接收方 |
| disclosure | 配置船舶制造前景；披露外购本地外包建造下水服务运输接收链接缺漏。不声明完整摇篮到工厂门 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | hull; finishing | 本地船体路线按实际计划追踪排样切割成形接头预处理经评定焊接板分段合拢检查返工。可选实际喷丸清洗涂装单独计量。采购船体范围替代这些坯料阶段。按实测因果活动展开实际下水起重机拖轮船台船坞压缩空气加热外包表面工序独立服务交换；不能每船推定整台设备消耗。 |  |
| `boundary_outfit` | outfitting; acceptance | 追踪推进对中舵转向捕捞吊杆绞车燃油舱底冷却管路配电通信舱室卫生安全设备及固定加工平板冻结机冷藏鱼舱集成。追溯实际完工清单并在声明完整前增加全部缺失组件配方。采购已充注冷藏设备替代已含压缩机换热器电内部件油制冷剂；独供充注或实际泄漏须供货安全数据表或监测依据的一种物种配方卡片，不能杜撰制冷剂。 | damen-shrimp-trawler-stock |
| `boundary_trials` | acceptance | 纳入合同要求实际船厂控制下水船坞海上调试及其消耗燃油实测排放返工调试废物。分开后续捕捞渔获冻结展示航次交付运输。试载排除M；仅调试实际使用食品须独立收货产出，不是上市渔获生产共产品。不采用目录试验消耗时数。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `hull` | 钢船体制造合拢 | conditional | 仅实际本地板型材切割成形接头预处理焊接合拢；采购船体替代 | foreground | 每 1 kg参考流 |
| `finishing` | 船体表面预处理涂装 | conditional | 实际本地喷丸清洗涂装规格；采购已涂船体排除供货工序 | foreground | 每 1 kg参考流 |
| `outfitting` | 推进捕捞及船舶系统舾装 | required | 集成声明完整船舶，包括固定冻结储存设备及实际供货已含 | foreground | 每 1 kg参考流 |
| `acceptance` | 下水调试船舶验收 | required | 实际执行下水船坞海上检查；检验净质量配置核对验收 | foreground | 每 1 kg参考流 |

### 过程：钢船体制造合拢 (`hull`)

#### 输入

##### 产品流

###### 一种完整未涂装焊接钢质拖虾船船体及上层建筑 (`hull_assembly`)

仅实际外供声明竣工配置船体。称量或采用核验实测供货船体质量，保留已含附件接头表面状态。本收货替代已含坯料供货船体制造；本地余留建造涂装单独测量。部分供货分段须自身范围卡片。

- 选定流： 一种完整未涂装焊接钢质拖虾船船体及上层建筑
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 经证实热轧造船钢板 (`hull_plate`)

用于本地船体甲板舱壁建造的一种实际经证实造船牌号厚度交付状态。称量净领用退回。采购船体替代已含坯料及供货制造。不从建造证书推定通用牌号板厚。

- 选定流： 经证实热轧造船钢板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 经证实船体肋骨热轧钢角材 (`frame_section`)

肋骨加强筋的一种实际角材牌号尺寸，按净领用测量。其他型材截面须独立卡片。追溯实际成形切割连接图样；不设整船质量通用占比。

- 选定流： 经证实船体肋骨热轧钢角材
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 经评定气体保护钢药芯焊丝 (`welding_wire`)

仅当实际经评定焊接工艺使用本单一指定焊材。称量领用退回及未用焊盘质量；区分熔敷焊丝熔渣飞溅排放。其他工艺须独立焊材卡片。

- 选定流： 经评定气体保护钢药芯焊丝
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 纯工业二氧化碳保护气 (`welding_co2`)

以实际焊接工艺规定纯CO2为条件；混合气为独立产品。称量气瓶前后或按实测气体条件计量。化石空气排放不是采购保护气。

- 选定流： 纯工业二氧化碳保护气
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压电网电力 (`electricity_hull`)

计量实际应归属阶段电力，含返工待机。公开身份限定电网平均用户端低于1kV交流；不同电压发电须另一卡片。设备额定值不能测量消耗。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 废物流

###### 洁净未处理造船钢边角料 (`offcut`)

一种声明合金实际分类未处理生产后钢外运，以污染依据称量。内部回用不是外运；不自动抵扣避免钢生产。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

###### 收集钢药芯焊接熔渣 (`weld_slag`)

仅用于所选焊接工艺实际独立收集熔渣外运。按干湿基准称量，保留药芯金属组成接收方。捕集粉尘空气物种为独立交换。

- 选定流： 收集钢药芯焊接熔渣
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

### 过程：船体表面预处理涂装 (`finishing`)

#### 输入

##### 产品流

###### 用户端低压电网电力 (`electricity_finishing`)

计量实际应归属阶段电力，含返工待机。公开身份限定电网平均用户端低于1kV交流；不同电压发电须另一卡片。设备额定值不能测量消耗。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

###### 指定铸钢喷丸磨料 (`blast_shot`)

仅用于船体钢实际本地钢丸预处理。以单一合金粒度硬度证书称量新补加回收。采购已预处理涂装船体排除供货预处理；其他磨料须卡片。

- 选定流： 指定铸钢喷丸磨料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 一种混合双组分船用环氧涂料配方 (`epoxy_coating`)

仅当实际批准新造船涂层规格使用本单一混合配方。称量完整混合产品领用退回余留固化涂层及固体溶剂平衡；上游组分不重复。其他底漆防污精整须独立配方。

- 选定流： 一种混合双组分船用环氧涂料配方
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 外供饮用水等级清洗水 (`cleaning_water`)

仅实际饮用水等级外供自来水清洗补加，称量或按实际密度温度计量。循环水不是新收货；同一水不能又当直接资源取用。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

#### 输出

##### 废物流

###### 收集废钢喷丸磨料 (`spent_shot`)

仅本单一废物实际独立收集外运；按声明干湿基准称量，确定金属涂料水污染及处理接收方。内部回收单列；不推定直接排放。

- 选定流： 收集废钢喷丸磨料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

###### 捕集干燥造船钢喷丸粉尘 (`captured_dust`)

仅本单一废物实际独立收集外运；按声明干湿基准称量，确定金属涂料水污染及处理接收方。内部回收单列；不推定直接排放。

- 选定流： 捕集干燥造船钢喷丸粉尘
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

###### 收集未固化船用环氧涂料废物 (`paint_waste`)

仅本单一废物实际独立收集外运；按声明干湿基准称量，确定金属涂料水污染及处理接收方。内部回收单列；不推定直接排放。

- 选定流： 收集未固化船用环氧涂料废物
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

###### 收集废船体清洗水基溶液 (`wash_waste`)

仅本单一废物实际独立收集外运；按声明干湿基准称量，确定金属涂料水污染及处理接收方。内部回收单列；不推定直接排放。

- 选定流： 收集废船体清洗水基溶液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

##### 基本流

###### 粒径未特指空气颗粒 (`air_dust`)

仅实际实测治理后颗粒排放，粒径未特指及即时空气子介质未特指。匹配浓度排气体积条件；捕集物为废物。已分粒径其他子介质须相符身份。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_emission`
- 来源：

### 过程：推进捕捞及船舶系统舾装 (`outfitting`)

#### 输入

##### 产品流

###### 用户端低压电网电力 (`electricity_outfitting`)

计量实际应归属阶段电力，含返工待机。公开身份限定电网平均用户端低于1kV交流；不同电压发电须另一卡片。设备额定值不能测量消耗。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源： damen-shrimp-trawler-stock

###### 一台装配船用压燃推进发动机 (`marine_engine`)

一台实际验收用于机械轴推进的装配船用活塞柴油机；class43110排除道路航空发动机，仅用于经核验船用用途。计数供货安装发动机并保留公开件数；独立称量实际供货发动机及预充液范围以核对整船物理质量。分开减速箱发电机组及已含辅助件；不采用目录kg/件。

- 选定流： 柴油发动机 `d3ac8612-80b9-4283-9439-62aa4986fce2`
- 流属性/单位： 件数 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_count。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_count`
- 来源： damen-shrimp-trawler-stock

###### 一种成品船用减速齿轮箱 (`reduction_gear`)

一种实际声明供货设计尺寸材料完整性，在收货安装时测量净值。采购完整总成排除独立计入已含内部件液。保留图样供货边界实际自制外购路线；如有本地制造则展开。不设通用组件质量件数。

- 选定流： 一种成品船用减速齿轮箱
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源： damen-shrimp-trawler-stock

###### 一种成品钢制船用螺旋桨轴 (`propeller_shaft`)

一种实际声明供货设计尺寸材料完整性，在收货安装时测量净值。采购完整总成排除独立计入已含内部件液。保留图样供货边界实际自制外购路线；如有本地制造则展开。不设通用组件质量件数。

- 选定流： 一种成品钢制船用螺旋桨轴
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源： damen-shrimp-trawler-stock

###### 一种成品固定螺距船用螺旋桨 (`propeller`)

一种实际声明供货设计尺寸材料完整性，在收货安装时测量净值。采购完整总成排除独立计入已含内部件液。保留图样供货边界实际自制外购路线；如有本地制造则展开。不设通用组件质量件数。

- 选定流： 船只螺旋桨及其桨叶 `8f01d846-f812-4209-a4c1-9f2daa531e79`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源： damen-shrimp-trawler-stock

###### 一种成品平衡钢制船舵 (`rudder`)

一种实际声明供货设计尺寸材料完整性，在收货安装时测量净值。采购完整总成排除独立计入已含内部件液。保留图样供货边界实际自制外购路线；如有本地制造则展开。不设通用组件质量件数。

- 选定流： 一种成品平衡钢制船舵
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源： damen-shrimp-trawler-stock

###### 一种成品钢制船锚 (`anchor`)

一种实际声明供货设计尺寸材料完整性，在收货安装时测量净值。采购完整总成排除独立计入已含内部件液。保留图样供货边界实际自制外购路线；如有本地制造则展开。不设通用组件质量件数。

- 选定流： 一种成品钢制船锚
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源： damen-shrimp-trawler-stock

###### 一种成品多卷筒拖网绞车 (`trawl_winch`)

一种实际声明供货设计尺寸材料完整性，在收货安装时测量净值。采购完整总成排除独立计入已含内部件液。保留图样供货边界实际自制外购路线；如有本地制造则展开。不设通用组件质量件数。

- 选定流： 复（式）滑车及起重机，箕斗提升机除外，卷扬机及绞盘，千斤顶 `7984041f-134f-4b73-89b9-30d9be48684f`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源： damen-shrimp-trawler-stock

###### 一种成品六角头钢制设备螺栓 (`steel_bolt`)

一种实际声明供货设计尺寸材料完整性，在收货安装时测量净值。采购完整总成排除独立计入已含内部件液。保留图样供货边界实际自制外购路线；如有本地制造则展开。不设通用组件质量件数。

- 选定流： 钢紧固件 `cad280ce-7850-46a1-9060-4f8b68bf5532`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源： damen-shrimp-trawler-stock

###### 一种成品钢增强硫化橡胶液压软管 (`hydraulic_hose`)

一种实际声明供货设计尺寸材料完整性，在收货安装时测量净值。采购完整总成排除独立计入已含内部件液。保留图样供货边界实际自制外购路线；如有本地制造则展开。不设通用组件质量件数。

- 选定流： 液压软管 `e2fc1719-69dc-4281-8eae-383af8d9a405`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源： damen-shrimp-trawler-stock

###### 一种完整柴油发电机组 (`genset`)

一种实际声明供货设计尺寸材料完整性，在收货安装时测量净值。采购完整总成排除独立计入已含内部件液。保留图样供货边界实际自制外购路线；如有本地制造则展开。不设通用组件质量件数。

- 选定流： 一种完整柴油发电机组
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源： damen-shrimp-trawler-stock

###### 一种成品船用离心舱底水泵 (`bilge_pump`)

一种实际声明供货设计尺寸材料完整性，在收货安装时测量净值。采购完整总成排除独立计入已含内部件液。保留图样供货边界实际自制外购路线；如有本地制造则展开。不设通用组件质量件数。

- 选定流： 一种成品船用离心舱底水泵
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源： damen-shrimp-trawler-stock

###### 一种PVC绝缘铜低压船用电缆 (`electrical_cable`)

一种实际声明供货设计尺寸材料完整性，在收货安装时测量净值。采购完整总成排除独立计入已含内部件液。保留图样供货边界实际自制外购路线；如有本地制造则展开。不设通用组件质量件数。

- 选定流： 一种PVC绝缘铜低压船用电缆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源： damen-shrimp-trawler-stock

###### 一种成品铅酸发动机启动蓄电池 (`starter_battery`)

一种实际声明供货设计尺寸材料完整性，在收货安装时测量净值。采购完整总成排除独立计入已含内部件液。保留图样供货边界实际自制外购路线；如有本地制造则展开。不设通用组件质量件数。

- 选定流： 一种成品铅酸发动机启动蓄电池
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源： damen-shrimp-trawler-stock

###### 一种成品船用雷达设备 (`radar`)

一种实际声明供货设计尺寸材料完整性，在收货安装时测量净值。采购完整总成排除独立计入已含内部件液。保留图样供货边界实际自制外购路线；如有本地制造则展开。不设通用组件质量件数。

- 选定流： 雷达设备，无线电导航设备及无线电遥控设备 `1423adf5-00aa-48ab-a228-5935b58a21ed`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源： damen-shrimp-trawler-stock

###### 一种完整船用水平平板冻结机 (`plate_freezer`)

一种实际声明供货设计尺寸材料完整性，在收货安装时测量净值。采购完整总成排除独立计入已含内部件液。保留图样供货边界实际自制外购路线；如有本地制造则展开。不设通用组件质量件数。

- 选定流： 一种完整船用水平平板冻结机
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源： damen-shrimp-trawler-stock

###### 一种完整鱼舱制冷机组 (`hold_refrigerator`)

一种实际声明供货设计尺寸材料完整性，在收货安装时测量净值。采购完整总成排除独立计入已含内部件液。保留图样供货边界实际自制外购路线；如有本地制造则展开。不设通用组件质量件数。

- 选定流： 一种完整鱼舱制冷机组
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源： damen-shrimp-trawler-stock

###### 一种硬质聚氨酯鱼舱保温板 (`hold_insulation`)

一种实际声明供货设计尺寸材料完整性，在收货安装时测量净值。采购完整总成排除独立计入已含内部件液。保留图样供货边界实际自制外购路线；如有本地制造则展开。不设通用组件质量件数。

- 选定流： 一种硬质聚氨酯鱼舱保温板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源： damen-shrimp-trawler-stock

###### 一种配方矿物液压油 (`hydraulic_oil`)

仅实际独供与公开组成相符石油含量至少70%的矿物液压配方，声明甲板转向回路净表计m3。其他回路配方须独立卡片。核对供货预充及实际余留密度温度质量，不改变体积属性。

- 选定流： 液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_volume。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_volume`
- 来源： damen-shrimp-trawler-stock

###### 一种配方矿物船用发动机润滑油 (`engine_oil`)

发动机调试及余留工作充注实际独供单一牌号配方。称量净供货回收并排除发动机预充重复。不从润滑油箱容量推定填充。

- 选定流： 一种配方矿物船用发动机润滑油
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源： damen-shrimp-trawler-stock

###### 50质量%乙二醇水基含缓蚀剂发动机冷却液 (`coolant`)

仅以实际供货证实50质量%配方冷却液为条件。称量完整混合液；记录添加剂密度并排除发动机预充范围。其他浓度化学品须各自卡片；本外供混合液不能另计水乙二醇收货。

- 选定流： 50质量%乙二醇水基含缓蚀剂发动机冷却液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源： damen-shrimp-trawler-stock

### 过程：下水调试船舶验收 (`acceptance`)

#### 输入

##### 产品流

###### 用户端低压电网电力 (`electricity_acceptance`)

计量实际应归属阶段电力，含返工待机。公开身份限定电网平均用户端低于1kV交流；不同电压发电须另一卡片。设备额定值不能测量消耗。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

###### 验收试验消耗的一种化石石油柴油牌号 (`test_diesel`)

仅实际船坞海上验收试验实测消耗的一种经证实纯化石柴油配方。核对加注退回余留及发动机发电机组消耗；不采用油箱容量目录航行消耗额定功率估算。交付燃油柜余留不纳入净M，须作为附带供货单独披露。

- 选定流： 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fuel。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fuel`
- 来源：

#### 输出

##### 产品流

###### 验收完整柴油拖虾船 (`finished_vessel`)

一种声明新钢质船体柴油机械推进完整拖虾船，含安装船体推进甲板捕捞设备舱室电导航安全设备及固定加工冻结储存设备。按检验配置产出验收净完整M中的1kg；排除散装渔具渔获货物人员消耗性柜内容物临时设备。

- 选定流： 捕鱼船，加工船及其他加工或保存水产品用船 `30092dc1-499d-4dac-80e0-30a02bf8fc04`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_mass`
- 来源： damen-shrimp-trawler-stock

##### 废物流

###### 收集废石油润滑油 (`used_oil`)

仅实际独立外运受污染使用后石油基调试油。以水组成依据称量送接收方实际质量；排出未用新液不能自动当废油。内部回收油不是外运废物。

- 选定流： 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

##### 基本流

###### 实际验收试验化石二氧化碳 (`air_co2`)

仅应归属验收试验期间本单一物种实测实际治理后排至即时空气、子介质未特指。匹配实测浓度排气体积条件；CO2/CO核验化石源并分开NO/NO2。NOx当量、N2O长期空气土壤限值不能提供本交换。

- 选定流： 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_emission`
- 来源：

###### 实际验收试验化石一氧化碳 (`air_co`)

仅应归属验收试验期间本单一物种实测实际治理后排至即时空气、子介质未特指。匹配实测浓度排气体积条件；CO2/CO核验化石源并分开NO/NO2。NOx当量、N2O长期空气土壤限值不能提供本交换。

- 选定流： 一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_emission`
- 来源：

###### 实际验收试验一氧化氮 (`air_no`)

仅应归属验收试验期间本单一物种实测实际治理后排至即时空气、子介质未特指。匹配实测浓度排气体积条件；CO2/CO核验化石源并分开NO/NO2。NOx当量、N2O长期空气土壤限值不能提供本交换。

- 选定流： 一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_emission`
- 来源：

###### 实际验收试验二氧化氮 (`air_no2`)

仅应归属验收试验期间本单一物种实测实际治理后排至即时空气、子介质未特指。匹配实测浓度排气体积条件；CO2/CO核验化石源并分开NO/NO2。NOx当量、N2O长期空气土壤限值不能提供本交换。

- 选定流： 二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_emission`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared_operations | 优先以直接记录分开船体号配置。共享制造起重机船坞涂装舾装试验负担使用实际因果表计负载活动时间服务工单，保留待机返工不合格负担不确定性敏感性。不同船不能按件均分。不设通用质量时间因子；以实际前景依据支持驱动。 |  |
| `allocation_completeness` | bought_assemblies | 采购客户提供船体发动机绞车制冷设备保留实际上游负担；不假设零负担。供货已含内部件预充排除独立收货。回用工装船坞拖轮服务须因果利用更换记录，不每船消耗整件。 |  |
| `allocation_balance` | mass_and_exports | 同一船体期间核对净坯料件安装余留质量在制品退回回收涂层溶剂熔渣及各废物排放。件数发动机体积液压液须独立物理质量核对。试验消耗燃油分开排除交付柜内容物。真实联合产出制造须明确分配依据；不自动抵扣避免材料处理。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | reference_product | 受控检验来源验收质量 | 型号；配置；序列号；验收净质量 M；船体号；检验方法原始报告；净配置修正；余留工作充注；签认验收 | 使用受控的验收质量记录核对同一配置的验收设备。 | kg | 每艘验收完整船舶 | 同一声明造船试验期间；披露缺口 | 声明船厂及受控船坞海上试验 | 每台验收净质量 | 当前实际轻船重量检验；原始测量修正；签认质量平衡；survey_provenance；net_configuration |
| cp_configuration | hull; finishing; outfitting; acceptance | configuration | 竣工清单供货验收台账 | 船体型号图样清单；实际钢焊涂层；主机船用用途；轴桨舵；绞车吊杆；冻结储存；舱室安全电导航；供货内部件充注；准则结果；边界期间 | 将每个实际安装清单项工序对应单一原子卡片或有依据排除。记录完整配置供货已含下水试验路线验收状态；展开全部缺失卡片含导管安装件轴承密封管柜吊杆舱口窗卫生家具安全通信。核验实际制冷剂充注填液范围，不选择额定化学品。 | kg | 每次建造修订验收 | 同一声明造船试验期间；披露缺口 | 声明船厂及受控船坞海上试验 | 一种完整可追溯验收配置 | 批准图样清单；供货证书；检查结果；质量修正 |
| cp_stock | hull; finishing; outfitting | single stock/formulation | 净领用配方称量 | 单一牌号设计配方；状态；净kg；领用退回回收；实际组成密度温度；供货已含；船体工单 | 按实际完整产品基准称量各实际板角材焊材保护气钢丸涂料外供水及独供机械液。体积计量时记录实际密度条件；扣退回并排除供货已含液混合物组分。不采用目录柜容量通用混合因子。 | kg | 每次领用退回船体批次 | 同一声明造船试验期间；披露缺口 | 声明船厂及受控船坞海上试验 | 应归属净质量 / 同一配置的验收设备数 | 秤证书安全数据表；领用退回；配方供货范围 |
| cp_parts | hull; outfitting | single installed component | 净组件质量供货完整性 | 单一组件设计；收货安装kg；实际件数；供货已含内部件充注；实测批次质量；船体号 | 称量各实际指定供货组件或用核验当前批次实测质量件数记录。测量完整供货制冷机组质量及已含充注范围；额定冷量空机质量不能确定安装质量。区分采购总成本地制造及安装临时物件。 | kg | 每批供货安装 | 同一声明造船试验期间；披露缺口 | 声明船厂及受控船坞海上试验 | 应归属安装组件质量 / 同一配置的验收设备数 | 秤；实际批次测量；清单供货完整性 |
| cp_count | outfitting | marine_engine | 船机件数独立kg | 实际安装发动机件数；船用用途型号；实测供货发动机kg；校准；已含辅助件预充液；船体号 | 计数单一船用设计实际安装发动机。独立称量实际供货发动机并标明已含安装件辅助件预充液；按安装发动机整船质量台账核验实测kg/件。保留件数交换属性；不设默认发动机质量重复供货发动机液。 | Item(s) | 每次实际发动机供货安装 | 同一声明造船试验期间；披露缺口 | 声明船厂及受控船坞海上试验 | 应归属安装发动机件数 / 同一配置的验收设备数 | 船用用途证书；件数台账；校准发动机kg批次；已含液依据 |
| cp_volume | outfitting | hydraulic_oil | 表计配方液体体积 | 单一矿物配方石油分；L/m3；加注退回回收；预充；余留充注；实测密度温度 | 计量实际净外供矿物液压配方体积；按1 L =0.001 m3换算。以记录温度实测密度核对实际余留充注的M内物理kg，不改变公开体积重复预充液。 | m3 | 每次计量填充退回 | 同一声明造船试验期间；披露缺口 | 声明船厂及受控船坞海上试验 | 应归属供货体积 / 同一配置的验收设备数 | 表计；安全数据表组成；密度温度；充注平衡 |
| cp_energy | hull; finishing; outfitting; acceptance | electricity | 阶段表计电能 | 阶段工单场址；kWh/MJ；表计时段校准；负载待机返工；服务船体 | 计量实际阶段电力。按1 kWh =3.6 MJ换算；支持共享因果驱动，分开辅助发电机试验采购电网电力。安装发动机设备额定值不是电力消耗。 | MJ | 每个计量时段工单 | 同一声明造船试验期间；披露缺口 | 声明船厂及受控船坞海上试验 | 应归属电力 / 同一配置的验收设备数 | 表计校准；账单；因果工单台账 |
| cp_fuel | acceptance | test_diesel | 消耗试验燃油平衡 | 单一牌号化石碳证书；加注退回库存；主机发电机组试验；实测消耗kg；M外交付余留kg；密度温度；实际时段 | 称量或按实际密度温度计量燃油，在实际船坞海上试验时段核对加注供货燃油消耗回收余留。将实际消耗归属验收；后续航次分开。保留余留柜清单用于净质量排除附带供货披露；不采用额定满柜手册小时消耗。 | kg | 每次实际船坞海上试验 | 同一声明造船试验期间；披露缺口 | 声明船厂及受控船坞海上试验 | 应归属消耗试验燃油kg / 同一配置的验收设备数 | 表秤；燃油来源；实际试验柜平衡 |
| cp_waste | hull; finishing; acceptance | single exported waste | 分类废物外运 | 单一废物合金配方；干湿；组成；外运kg；回收；接收方 | 分别称量各实际分类边角料熔渣废钢丸捕集粉尘未固化涂料收集清洗液废油。记录水金属涂料油污染接收边界。回收不是外运；收集液不是直接水域排放。 | kg | 每次外运工单 | 同一声明造船试验期间；披露缺口 | 声明船厂及受控船坞海上试验 | 应归属外运废物质量 / 同一配置的验收设备数 | 秤；组成；接收处理凭证 |
| cp_emission | finishing; acceptance | single air species | 逐物种实际监测 | 物种来源；即时介质子介质；粒径；浓度排气体积时间；匹配条件；治理背景；应归属时段 | 按相同参考条件实测治理后浓度排气体积，在应归属时段积分修正背景及不确定性。核验化石碳分开NO/NO2物种；NO2当量NOx不能识别两者。所选空气子介质粉尘粒径未特指；实测具体介质粒径须相符独立身份。不设必需排放限值推导数量。 | kg | 代表性实际排放时段 | 同一声明造船试验期间；披露缺口 | 声明船厂及受控船坞海上试验 | 应归属实测物种kg / 同一配置的验收设备数 | 监测流量校准；物种碳介质依据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_mass` | finished_vessel | 要求相同完工船体配置正值物理核验M及当前原始检验重量记录。没有survey_provenance及net_configuration，单独采集验收记录不足；披露缺失检验修正，解决前不能呈现物理完整数据集。核对件数供货发动机kg、安装采购已充注制冷kg及表计液余留质量，避免供货预充重复。 | cp_mass; cp_parts; cp_count; cp_volume; nma-lightship-2020 |
| `quality_coverage` | inventory_and_links | 实际竣工清单供货范围坯料路线记录经评定焊接涂层计划验收试验确定覆盖。完整性声明前展开缺失组件服务资源化学品制冷剂排放卡片及上游运输接收链接。不设通用产率牌号零件质量填充制冷剂试验时数排放寿命分配因子。本方法不提供当前船舶实测值。 | cp_configuration; cp_stock; cp_parts; cp_fuel; cp_waste; cp_emission |
| `quality_source_limits` | architecture_and_method | Damen未注明日期库存标准第1页是一种型号示例，配类似船照片，仅建造证书并排除散装渔具。不能确定材料牌号工厂清单M。NMA修订07.01.2020第3页明确含渔船，第5–7页描述检验完整性柜及吃水静水力背景。仅作历史方法示例，不当现行法律；不采用阈值额定质量目录性能因子。 | damen-shrimp-trawler-stock; nma-lightship-2020 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | 要求完整声明船配置正值检验净M kg、cp_mass及独立检验配置依据；按M归一各分子且保留公开属性。1kg制造船舶不代表等捕捞能力寿命。 |  |
| `validation_completeness` | inventory | 按竣工记录核验船体牌号型材焊接涂层、机轴桨舵、甲板设备制冷冻结机安装充注、舱室卫生管柜电导航安全及实际下水试验。追踪燃油柜内容物排除供货预充实际缺失卡片；无相符链接不能声明完整摇篮到工厂门。 |  |
| `validation_identity` | all inventory rows | 核验公开物质类型属性单位组实际设计路线状态完整性地区；使用官方双语名。船机不是道路class43123发动机；件数保留Item(s)。纯保护气不是基本排放收集废物不是资源水NO不是NO2/N2O即时空气不是土壤长期。未解决身份保留明确缺口。 |  |
| `validation_claims` | dataset_claims | 制造方法机械检查不能确定科学批准现行法律船级符合捕捞服务效率或实测工厂完整性。物理检验配置缺口阻止声明完整数据集。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置拖虾船制造前景；章节标题不声明发表 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按检验净M放大的相同配置完整船制造，单独披露相符上游运输接收链接 |
| excluded_use | 捕捞渔获加工冻结服务航次运输使用维护寿命报废其他船路线方法学批准 |
| required_metadata | 全部参考限定；实际竣工船体舾装已充注设备配置边界；检验原始方法观测修正密度柜清单签名净M；发动机件数独立供货kg；燃油消耗余留分开；场址期间工单；实际下水试验分配链接 |
| required_quality_disclosure | 身份清单路线检验质量测量链接缺口；来源日期限制返工回收外运不确定性分配敏感性 |
| update_trigger | 船体材料接头精整路线推进甲板冷藏配置供货充注完整性质量检验交付状态船厂试验计划期间分配变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| damen-shrimp-trawler-stock | handbook | Damen, Shrimp Trawler2607 Stock / Standard, undated public product sheet with appended presentation; physical p.1 (unnumbered). https://medialibrary.damen.com/m/1ca5a40fe0d02808/original/shrimp-trawler-2607-damen-trading-07813.pdf | 型号专属机械推进甲板平板冻结机冷藏导航舱室舾装及散装渔具交付排除。类似船照片且仅建造证书。不采用数值清单材料牌号配方制冷剂实际M法规批准运营性能。 |
| nma-lightship-2020 | standard | Norwegian Maritime Authority, KS-0179-1E OTI, Procedures for determination of light ship displacement and centre of gravity of Norwegian ships, Rev.07.01.2020, printed/physical pp.3,5–7. https://www.sdir.no/siteassets/skjema/ks-0179-1-procedure-for-inclining-test-and-determination-of-lightship-displace-eng.pdf | 历史船舶检验方法示例，第3页明确含渔船；第5–7页完整性柜吃水静水力背景。支持要求实际受控检验原件净配置核对；不是当前法律义务船舶测量数值限值M换算因子。 |
