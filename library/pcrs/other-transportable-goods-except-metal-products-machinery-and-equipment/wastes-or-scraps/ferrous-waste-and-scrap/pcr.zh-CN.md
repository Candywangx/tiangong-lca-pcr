---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.ferrous-waste-and-scrap
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 分流收集的 HC340LA 冷冲压边角料打包钢铁供料

## 1. 范围与适用性

本归因方法覆盖一个分流未镀层HC340LA冷轧钢板来源，从带负荷接收，经形成边角料和完整冲压坯共输出的原冷落料、冲孔、成形，至分流收集、检验、必要机械剪切和液压打包。保留真实仓储、搬运、包装及向明确钢厂接收门的公路供应。不把路线缩成外购成品废钢再包装。首次质量放行分母固定在整理场，后续服务关联原批群而不形成新生产门。

此处HC340LA为具体的常规高强微合金低碳钢，并非混合铁质家族的许可。制造商明确描述有意微合金化并另列镀层变体。化学表上下限不是本批分析，不规定名义厚度、密度、收得率，未经观测不假定清洁。油污、污染物处理路线在选定供货规格之外。钢厂协议和实际检测决定接受。来源构成兼容操作的透明技术综合，不是同厂配方；AHSS指导只提供定性概念。

现有板件生产规则可支持来源冲压操作，但不提供本料包供料参考功能或接收规格处理。金属回收、炼钢、松散氧化皮方法具有不同产品和门。本保留目录只承载下述明确更窄类别，分类映射和科学接受另行决定。

官方 39340 条目只列钢铁废碎料名称，未给牌号或加工配方。本方法限定金属板冲压边角料；排除渣和氧化皮（39310）、非钢铁制造灰渣（39320）、贵金属废料（39331–39333）、重熔锭（39350）、有色金属废料（3936）、拆解船舶（39370）和电池（39380）。分类名称不证明买方接受。

Columbia City 手册区分 #1 Busheling 与液压压缩的 #1 Bundles；Roanoke AP019 也将 Busheling 与 #1 Bundles 分列并规定不同买方限值。两者是同一集团的两个接收场址，不是独立的全行业接受性研究。它们支持按牌级和形态分别检验并记录拒收，不证明已有 HC340LA 买方、自动 ISRI 等级或可转用的数值限值。实际接收协议和化验仍必需。参考产品流 UUID 保持待决：泛合金形成说明及废物流身份均不足以核实本未熔炼料包。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.ferrous-waste-and-scrap |
| classification_refs | CPC 3.0:39340，分流 HC340LA 金属板边角料压包范围以正式分类裁定为准 |
| covered_products | 单一分流未镀层HC340LA冷冲压边角料；必要时机械剪切并液压打包；作为低合金钢供料接受 |
| excluded_products | 混合铁质家族；不锈钢、铸铁；镀层板、电工钢板；油泥或污染废钢；车屑、钻屑及其压块；氧化皮、炉渣；重熔锭；松散废钢交付；购买成品包后重包；处理服务参考 |
| representative_product | 一个明确HC340LA冲压边角料包规格；不规定通用包密度或杂质限值 |
| production_route | 接收带负荷整份钢板→冷落料、冲孔、成形及共输出分离→分流收集、检验→必要机械剪切→液压打包→首次接收规格放行→关联原批群的仓储、搬运、公路供应和钢厂实际接收 |
| market_state | 未熔化金属态HC340LA边角料包；按真实接受表面状态计量首次放行净质量，排除带、扣、容器 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应明确钢厂可接受的分流金属料包及归属供货服务 |
| How much | 每1千克首次放行净供料，关联至接收门服务；不等同每千克净交付 |
| How well | 实际HC340LA来源、包尺寸完整性、表面污染和接收协议测试均合格 |
| How long or cycle | 一个可追溯首次放行批群及披露的供货服务历史；无熔炼收得率或寿命假设 |
| reference_flow_link | `finished_bale` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 分流未镀层 HC340LA 冷冲压边角料包 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 真实HC340LA炉号、卷号证书及独立取样的整份合金分析; 未镀层冷轧供货、宽度至少600毫米及实际厚度; 供方炼钢、轧制、退火及涂油边界与继承负荷; 中国一个分流冷落料、冲孔、成形来源及场址; 真实包块尺寸、完整性及实际必要机械剪切和液压打包; 接收钢厂及双方约定的低合金钢供料规格; 取样水分、残油、锈蚀、异金属及危险污染物结果; 实际合法Product供料状态，与Waste处理服务区分; 首次放行门、事件编号及排除各包装的净Q_c; 实物总量V及完整归属交换向量A; 期初期末在制品、原料和成品数量及阶段、批群历史; 失败、Q为零、启停、空转、清理和返工负荷; 实物毛发运及钢厂实际接收、退回、冲销并关联原Q_c; 各包装组件及首次外部收货、退回账; 各交换真实供方及原生类型、路线、形态、地域、属性、单位限制; 实际电压、电网、期间及供方油剂配方及液压油密度状态; 不确定性及尚未完成后续服务的批群 |

所有限定项须保存在数据集元数据、参考流注释或等效可消费上下文中；缺失任一项则该数据包定义不完整。每张选定卡的完整原生限制同时适用，不能只保留UUID或本节表格。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 整理门首次质量放行：用cp_release称首次实际状态HC340LA净供料并排除各包装。参考为1千克；Q_c只取首次新增放行，不是净销售或钢厂实收质量。 |
| unit_state | all inventory rows | actual row property | actual row unit | 保留原单位状态；先换算后归属，仅c_normalize_once归一。真实率值积分一次，累积读数不额外乘时间。采用独立实测配方特定密度并保留液压Volume/m3。 |
| alloy_components | whole material and relevant elements | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 整份钢、配方及物种衡算独立于负荷分配。真实合金分析与油、游离水、固体分区不在整份产品之上叠加。不假定氧化、化学水或残差拟合成分。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 来源冷冲压之前接收未镀层HC340LA冷轧钢板，宽度至少600毫米；保留完整真实上游钢及供方油、包装历史 |
| starting_condition_role | 实物上游交接及负荷继承，不是废物截断或外购料包包装门 |
| product_classification_scope | 仅CPC39340中分流金属板态HC340LA冷冲压边角料包；排除氧化皮及重熔锭 |
| recursive_input_rule | 不得将成品废钢包作本制造原钢板。真实外部退回保留原批群、物理状态、负荷向量；内部循环抵消而不增产 |
| upstream_dataset_requirement | 一个真实兼容钢板供方覆盖明确铁钢路线、精炼微合金添加、轧制退火及真实钢厂油包装界面。分配后负荷导入一次，不重造已含炼钢，不假定高炉转炉、电炉、原生比例或回收信用。真实上游公路运输腿仅纳入一次 |
| disclosure | 全部限定信息；首次Q_c门与最终钢厂接收服务门区分；分配、库存向量、完整共输出、实物包装衡算、不确定性及未完服务 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | complete scoped route | 纳入原钢板接收及上游钢材形成负荷、原冷冲压形成与完整共输出、分流收集、必要剪切打包、质检及至钢厂接收门的全部归属供货服务。所列来源支持兼容单元；本方法是透明技术综合，不声称同一SKU、工厂或订单证明所有操作。AHSS来源只支持定性记录和润滑概念，其负荷和设定不转用于本常规HSLA牌号。 | `voestalpine-hsla-2024`; `was-quality-control`; `was-lubrication`; `rema-ferrous-2026`; `jrc-ilcd-2010` |
| b_grade | whole product and receiver | 采用一个真实认证的HC340LA炉批流和双方约定接收规格。钢板化学上限、下限不是本批分析，也不是额外采购组分。不自动认证ReMA207、208、234、235：无合金条款及接收方尺寸要求不同。接受前独立观测油、水、锈蚀、异金属、非金属夹杂和危险污染。热切割、废钢脱油、化学清洗、熔化、混牌号或车屑需要另行审查路线。 | `voestalpine-hsla-2024`; `rema-ferrous-2026` |
| b_first_q | finished_bale | 首次接收规格质量放行门固定在整理场。Q_c是批群c中首次新放行的合格净钢铁供料质量，排除所有包装及既有放行。同批已接受期末成品已在Q_c内，不得再加。仓储、发运、钢厂接收、复验不创造产量。只有关联该批及完整向量才能冲销无效首次放行；更正后重复放行只恢复原批群先前冲销的合格质量，不成为本期新增Q。 | `jrc-ilcd-2010` |
| b_wip | all inventory rows | 保留失败和零产出批、启停、空转、清理及实际返工。各期初期末在制品批带有物理量、状态及完整逐交换继承向量，覆盖材料、公用工程、排放、废物和服务；向量随批转移。A_jc为本期分配后原始负荷加转入c的期初在制品向量减留存期末在制品向量，并保全失败负荷。不再扣减期末已接受成品的生产负荷。旧已接受成品返工时原向量成对转入转出一次，只将真实增量返工归回原批群。 | `jrc-ilcd-2010` |
| b_services | cohort services to steelworks gate | 首次放行后的仓储、包装重包、搬运、发运、实际运输、接收检验、外部退回和增量返工保存在互斥H_jc账中并关联原Q_c。H是服务负荷，绝非生产分母。记录毛发运、钢厂接受质量、拒收及原交付退回冲销。客户退回冲销原交付腿并保留历史，不抹去原生产或制造新Q。未供货成品和未完成批群服务仍披露；部分服务历史不能称完整交付门证据。 | `jrc-ilcd-2010` |
| b_physical | manufacturing FG and consolidated gates | 所有衡算采用一致物理界面。制造：期初原料、流体、空包装库存及在制品+外部投入+旧成品转返工=对应期末库存、在制品+V_new+V_old返成品+外部拒料、废物、排放。V_new已含Q_c和真实附着包装，Q_c不另作出口。成品：期初毛成品+V_new+外部已接受退回+V_old返入+服务包装发出+实测吸湿=期末毛成品+毛发运+旧成品转返工+外部损失。合并时抵消内部转移并保留全部外部实物腿。实物总量V与负荷A是不同账。 | `jrc-ilcd-2010` |
| b_packages | each packaging component | 对每种独立材料：期初空件+期初附着在制品+期初附着成品+期初周转库存+外购或首次外收P+外部退回收货ER=期末空件+期末附着在制品+期末附着成品+期末周转库存+随实物毛发运外出S+对外退回EO+废弃W。从首次外收起纳入原钢板供货钢带、实木支座和PE膜。在本组件账中，附着在制品包括仍附着于待发用外收原钢板的包装；组件只计一次，制造质量衡算中原钢库存扣除这些另计包装。如钢板供方已含包装负荷则不二次添加。内部复用抵消，不是采购、Q、共产品或信用。S不得使用净销售量。 | `jrc-ilcd-2010` |
| b_extend | all actual exchanges | 报告前为实际存在的各未列材料、整份外购制剂、燃料、制冷剂、水流、包装、服务、废混合物和已识别排放物种新增具体原子行。未知不等于不存在或零。本选定路线采用电动机械搬运、剪切、液压打包及外包公路货运，不预设场内燃烧。若实际有场内燃料设备，新增该燃料和各实测燃烧物种，保留真实空气、资源界面并复核范围。不预设锅炉、蒸汽、凝结水或换热水退回；若真实存在外部退回，须独立Product返回并记录质量、温度焓及供方水能约定。 | `was-quality-control`; `was-lubrication`; `jrc-ilcd-2010` |
| b_receiver | 接收等级放行 | 采用实际包型、炉批特定的买方协议，按要求采样包芯，保留不合格、拒收及接收记录。散状 busheling 接受不能证明液压料包接受；两处资料均不证明 HC340LA 接收方或通用杂质、密度限值。 | `sdi-scrap-2023`; `sdi-roanoke-2026` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| steel_feed_supply | 来源冲压至金属料包供应 | required | 仅全部范围条件同时满足 | foreground | 新首次净Q_c；服务保持原Q_c |

在此合并过程中分别保存来源冲压、收集剪切打包、首次质量门、成品服务及终端接收账。内部边角料、空气、水、返工转移成对抵消。各卡只引用第8节同次归一的a_jc及互斥s_jc；完整共输出、周转件退回等实物上下文用独立v_jc，不能以负荷份额缩减实物。采集协议的归集标签只标最终每参考流视图，不是采集时除法；collection_method采原分子。所有条件卡仅在其真实存在时采用，未知不是零。

### 过程：来源冲压至钢铁供料（`steel_feed_supply`）

#### 输入

##### 产品流

###### 整份原钢板（`received_sheet`）

一种整批未镀层 HC340LA 冷轧板供料，宽度至少 600 mm。追溯实际炉批、宽厚及供方炼钢、轧制、退火、涂油边界。不得凭商品牌号推定原生合金钢或非合金钢分类；流 UUID 保持待决。整板质量只计一次，附着轧机油和包装单独建台账，避免重复继承负荷。

- 选定流：宽度至少 600 mm 的未镀层 HC340LA 冷轧钢板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_origin`
- 来源：`voestalpine-hsla-2024`; `jrc-ilcd-2010`

###### 计量供电（`electricity`）

计量实际场址供电界面。包括冲床、输送、剪切、液压打包、实际冷却清理、检测、电动搬运及启停空转。能量采用 Net calorific value/MJ 属性依据，kWh 按 3.6 仅换算一次。流 UUID、电压及地域期间供方仍须确认；内部发电及供方已含电网损耗不再重复购买。

- 选定流：低压交流电
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`jrc-ilcd-2010`

###### 液压系统补液（`hydraulic_fluid`）

一种用于传力、润滑、传热的矿物或合成基础油及添加剂整份液压制剂。原生Product用Volume而非Mass；外部补充以m3记录，并分别记录回路库存、泄漏、排出。质量衡算须独立实测该配方实际温度下密度，不套水密度或假定牌号。本身份不证明供方、黏度，也不支持水乙二醇配方。内部循环不是再次供货。

- 选定流：液压流体 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`jrc-ilcd-2010`

###### 整份外购冲压油（`forming_oil`）

以真实额外冲床施加为条件，与钢板供方已含油区分。整份外购油、添加剂制剂计一次，保存SDS、供方成分和施加、回收、附着、废弃数量。不是热轧油、溶剂或液压油，不推定定量施加或活性成分采购。若实际为水乳液或厂内配制，须分别列整份制剂或每种真实外购配料，并记录混合能耗和损失。

- 选定流：直油型矿物油基冲压润滑制剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`was-lubrication`; `jrc-ilcd-2010`

###### 处理后补充和清理用水（`process_water`）

以真实外部经处理工业水为条件，明确质量、处理和供货界面。原生Product/Mass不证明水源或供方。只记录真实冷却或场地清理补水，内部循环抵消。不预设湿法废钢脱油。天然取水须另列资源和处理清单。体积转质量使用独立实测状态水密度。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`jrc-ilcd-2010`

###### 外包公路货运（`road_freight`）

公共档案中的通用 Product 流仅表示 t*km 运输工作量，不证明公路车型或供方。采用一种真实外包公路货运服务，匹配地域、期间、车辆及装载和空驶返程覆盖。归属前工作量 = 实载毛 kg × km / 1000。生产 A 与互斥批群服务 H 分开记录，供方已含车辆燃料和排放不再追加。

- 选定流：货物运输 `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：mass*distance `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`
- 来源：`jrc-ilcd-2010`

###### 外购棉质清理布（`cotton_wipe`）

以真实冲床或打包机维护清理用一种供货棉布为条件，明确成分及供方。实际另加溶剂、清洗剂须独立列材料，不藏入假定抹布定额。

- 选定流：棉质清理布
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`jrc-ilcd-2010`

###### 随钢板外收钢带（`incoming_steel_band`）

从钢板首次外收起计量真实钢带，包含外部退回。它是包装，不是HC340LA供料；保留实际采购或供方已含处理及寿命。

- 选定流：碳钢钢卷包装带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`

###### 外收实木钢卷支座（`incoming_wood_support`）

以首次外收真实实木支座为条件；不采用胶合板、处理木、团聚木废料或燃料身份。独立追踪周转库存和实测水分。

- 选定流：未处理实木钢卷支座
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`

###### 随钢板外收PE膜（`incoming_pe_film`）

以首次外部收货的真实聚乙烯卷材包装膜为条件，保留完整成分、皮重、附着库存及处置。PET、多层复合膜和树脂原料须另设具体身份。流 UUID 保持待决，不得用泛包装类别或树脂加薄膜重复采购。

- 选定流：聚乙烯薄膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`

###### 新增料包固定带（`bale_band`）

以液压压包后真实独立采购固定带为条件。自支撑包不推定有带。即使钢厂以后连带入炉也排除净供料Q，不作为HC340LA供料获得信用。

- 选定流：未镀层碳钢料包固定带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`

###### 碳钢带扣（`bale_seal`）

以真实带扣为条件，与钢带采购和质量分开。不合并带扣和带，不假定个数转质量系数；只有计件时实称真实扣重。

- 选定流：未镀层碳钢打包扣
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`

###### 外收周转钢质收集箱（`reusable_bin_in`）

以一种焊接钢箱真实首次外收或外部退回为条件，计完整质量和实际寿命、维修服务。内部转移复用抵消，不新购或作共产品。

- 选定流：周转焊接钢质废钢收集箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 首次放行HC340LA钢铁供料包（`finished_bale`）

一个来自明确未镀层HC340LA来源的未熔化金属边角料流，仅经必要机械剪切后液压打包。只接受实际约定接收规格的尺寸、完整性、污染状态及合法Product供料功能。不是Waste处理服务、混合铁质家族、车屑压块、纯铁、氧化皮或重熔锭。首次质量放行Q_c排除全部带、扣、箱及既有放行；钢厂接收保留为批群服务和实物腿，不另计输出。泛Waste身份不得改绑为本Product。

- 选定流：分流未镀层 HC340LA 冷冲压边角料包
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：`rema-ferrous-2026`; `jrc-ilcd-2010`

###### 原冲压坯共输出（`stamped_blank`）

记录原制造完整图号、炉批的坯件输出、真实附着油状态和分配。它不是包装或另一废钢参考。其实物毛质量V独立于归给废钢的负荷保留。来源冲压门之后的专属加工排除，剩余分配时把其市场价值还原到共同来源门。

- 选定流：未镀层HC340LA冷冲压结构坯
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的实物上下文v_jc；它不是归属负荷或额外产量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_origin`
- 来源：`voestalpine-hsla-2024`; `jrc-ilcd-2010`

###### 周转箱对外退回（`bin_return`）

以整件向所有者真实外退为条件，记录实际质量、状态和单据；保留原负荷、寿命及真实维修。实物退回不是新废钢产量，也不自动销售或获得信用。内部归还成对抵消。

- 选定流：周转焊接钢质废钢收集箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的实物上下文v_jc；它不是归属负荷或额外产量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`

###### 实木支座对外退回（`wood_return`）

以整件向所有者真实外退为条件，记录实际质量、状态和单据；保留原负荷、寿命及真实维修。实物退回不是新废钢产量，也不自动销售或获得信用。内部归还成对抵消。

- 选定流：未处理实木钢卷支座
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的实物上下文v_jc；它不是归属负荷或额外产量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`

##### 废物流

###### 未接受清洁原边角料送回收（`rejected_scrap`）

一种真实分流、未获接受的清洁 HC340LA 边角废料，送往有记录的回收供方。记录整股质量、状态、实际去向和接收方，流 UUID 保持待决。该 Waste 不得绑定 finished_bale 的 Product；不预设回收率或装配废料比例。油泥、车屑和氧化皮另设具体行。

- 选定流：清洁 HC340LA 冷冲压边角废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outputs`
- 来源：`rema-ferrous-2026`; `jrc-ilcd-2010`

###### 捕集金属切割粉尘（`captured_steel_dust`）

以选定机械操作真实捕集的固体金属混合物为条件，称整份质量、分析并对应一个接收方。来源分区不另出口，不标作纯铁或氧化皮。

- 选定流：捕集HC340LA机械切割粉尘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outputs`
- 来源：`jrc-ilcd-2010`

###### 废冲压成形油（`waste_forming_oil`）

以独立收集真实废整份制剂为条件，记录实际水、固体、油分析和一个处理供方。不把其所含油水再出口，不推断全部施加油均为废油。

- 选定流：废矿物油基冲压成形润滑制剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outputs`
- 来源：`jrc-ilcd-2010`

###### 排出废液压油（`waste_hydraulic_fluid`）

以真实整份回路排液为条件，计量质量、成分和一个供方，区分泄漏、库存、合法复用。不得因有回收记录而标成再生可售润滑油。

- 选定流：废液压油制剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outputs`
- 来源：`jrc-ilcd-2010`

###### 含油废棉质清理布（`oily_cotton_wipe`）

以真实整份废布为条件，包含附着油水固体；计量并保持成分、来源子账非叠加，只连接一个实际处理供方。

- 选定流：冲压油污染棉质清理布
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outputs`
- 来源：`jrc-ilcd-2010`

###### 收集设备或地面清理水（`cleaning_wastewater`）

以整份真实废水交一个外部处理供方为条件，独立测水、油、固体和物种。COD是质量指标而非分子出口。若为直接排放须明确实际水体及各物种，不叠加废水服务与重复基本排放。

- 选定流：收集维护清理废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outputs`
- 来源：`jrc-ilcd-2010`

###### 废钢包装带（`band_waste`）

以真实独立钢带废物为条件，排除带扣；保留钢板外收、料包来源分区而不叠加整份废物和来源。不纳入HC340LA参考Q。

- 选定流：废未镀层碳钢包装带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`

###### 废钢带扣（`seal_waste`）

以真实带扣废物为条件，与带分称，一个兼容接收方；计数转质量须测量。

- 选定流：废未镀层碳钢打包扣
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`

###### 废实木支座（`wood_waste`）

以真实整份未团聚未处理木支座废物为条件，记录水分和一个实际接收方。不采用团聚木废、燃料身份，不假定回收信用。

- 选定流：废未处理实木钢卷支座
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`

###### 废PE包膜（`pe_waste`）

以真实废膜为条件，包括实测污染，一个整份废物供方；聚合物及污染物子账不成为额外重复出口。

- 选定流：废聚乙烯钢卷包膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`

##### 基本流

###### 实际向空气蒸发水（`water_vapour`）

原生Elementary水蒸气，CAS7732-18-5，采用Mass/kg及未特指空气排放区室。仅用于真实净气态水排放；已知城市、非城市或高烟囱、长期或高空界面须采用其匹配且已核实的流，不得以未特指区室替代。宽泛同义词表不许可重水、氚水、冰、结合水或液态水出口。以真实冷却或清理产生的实测H2O蒸气为条件，区分进入环境湿度和捕集液滴。这是游离水相变，不假定化学反应或结构水形成。未解释质量损失或废水COD不能证明蒸气。其他真实排放须用物种证据、真实介质和形态分别列出；不把VOC、NOx总指标当作虚构单一化学物。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：只引用第8节同次归一的a_jc与互斥s_jc；保留未除原记录和实物V，不再除以Q。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`jrc-ilcd-2010`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_context | whole route | 仅用于确需分配的归因研究情境。不把替代、系统扩展、自动终止废物或零负荷惯例混入本清单。废物标签和售价单独不能决定负荷或技术Product状态。 | `jrc-ilcd-2010` |
| a_separate | each exchange | 先独立计量专属收集、剪切、打包、供货操作，进行可行的实际或虚拟细分。保留原冲压坯共输出及全部原钢量。专属共输出精整归其自身。按独立追溯的实际所含材料分派HC340LA钢板及继承供货负荷；不再采购Fe、C、Mn、Si、Nb、Ti作为附加配料。 | `jrc-ilcd-2010` |
| a_physical | remaining multifunctional exchanges | 对剩余共享交换，依据过程证据建立与功能的决定性物理因果关系；不同电力、润滑、运输和排放可需不同准则。质量比不是冲压功或空转负荷的通用捷径。记录方程、观测、不确定性，并使各功能间每个原始分子守恒。 | `jrc-ilcd-2010` |
| a_residual | genuinely residual common process | 只有前述步骤后确实未解决的交换才使用同一共同过程门、实际状态、同期间的共功能市场价值。推导价格前把后续打包、处理、包装、运输成本还原到该门。记录币种、数量及敏感性；缺失、零、负值或不可比价值须方法解决，不编比例。不规定固定分配份额，也不任意选择物理或经济分配。 | `jrc-ilcd-2010` |
| a_no_credit | recycling and external wastes | 废钢供应不等同替代原生钢或可获信用的回收服务。每种外部处理整份废混合物仅连接一个真实供方，来源分区作为非叠加分析账。不得把混合物及所含金属、油、水重复出口，也不得重复供方已含排放。 | `jrc-ilcd-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_origin | steel_feed_supply | origin steel and stamped co-output | material_records | 炉号; 卷号; 供方; 牌号; 宽度; 厚度; 毛皮净质量; 整份成分; 钢厂油; 包装; 供方边界; 冲压坯V; 来源废钢V | 接收可追溯炉批证书，称钢板及完整共输出；独立取样合金、附着油水；分配前保留原始物理量和供方负荷。 | kg; mass fraction; mm | 每次外收和冲压批 | 全期间及跨期批群；包含零产出期 | 真实来源和整理场至明确钢厂 | 每 1 kg 参考流 | 证书; 秤校准; 取样; 供方边界 |
| cp_release | steel_feed_supply | first quality release and receiver receipts | quality_records | 批群; 首次事件编号; 毛质量; 皮重; 净Q_c; 包尺寸; 实际污染测试; 规格; 日期; 收货; 拒收; 原交付; 冲销 | 用经校准秤排除各包装；独立取水油、金属、危险物并执行真实约定检测。首次放行记一次，库存、毛交付接收退回分记，不预先相除。 | kg; mm; mass fraction | 每次放行和接收退回 | 全期间及跨期批群；包含零产出期 | 真实来源和整理场至明确钢厂 | 每 1 kg 参考流 | 签署放行和钢厂接收单; 原实验结果 |
| cp_energy | steel_feed_supply | electrical load | meter_records | 电表; 电压; 供方; 原始千瓦时或兆焦; 时间; 设备阶段; 空转启停清理; 批群分区 | 读取累积表或仅对真实功率率值按实测时间积分；只有界面重叠才抵消内部成对表。按生产、批群服务保留原记录，分配前换单位。 | kWh; MJ | 每运行及零产出期 | 全期间及跨期批群；包含零产出期 | 真实来源和整理场至明确钢厂 | 每 1 kg 参考流 | 电表校准; 覆盖和设备账 |
| cp_materials | steel_feed_supply | each atomic material | material_records | 行号; 批号; 整份供货质量体积; 配方; 密度状态; 外收; 期初期末仓储回路; 回收; 损失; 阶段批群 | 称量计量各具体整份供货；供方、SDS成分作为非叠加子账。需换算时实测配方状态密度；实际厂内配制另记配料能耗。原分子不除。 | kg; m3; kg/m3 | 每外收发出及库存界面 | 全期间及跨期批群；包含零产出期 | 真实来源和整理场至明确钢厂 | 每 1 kg 参考流 | 发票; SDS; 校准; 密度测量 |
| cp_outputs | steel_feed_supply | each separate external waste | waste_records | 整份废物质量; 成分; 来源分区; 接收方; 危险状态; 库存; 实物去向; 供方范围 | 各独立整份混合物称重、代表取样、对应一个接收供方。来源分区合计整份，不另出口。不用总残差同时编油和水。 | kg; mass fraction | 每次排出和失败批 | 全期间及跨期批群；包含零产出期 | 真实来源和整理场至明确钢厂 | 每 1 kg 参考流 | 转移联单; 实验记录; 供方边界 |
| cp_species | steel_feed_supply | actual elementary species | emission_records | 化学名; CAS; 相态; 介质; 地点; 浓度; 气液实测状态; 累积体积或真实率值; 时间; 本底; 不确定性 | 采用真实分物种测量或有实测反应程度的独立化学计量证据。区分蒸气、夹液、本底湿度。累积体积不再乘时间，真实率值积分一次。COD、VOC总量在无真实分子鉴定前仍为指标。 | kg; actual raw concentration/volume/rate units | 每真实排放区间 | 全期间及跨期批群；包含零产出期 | 真实来源和整理场至明确钢厂 | 每 1 kg 参考流 | 取样校准; 检出限; 物种及介质 |
| cp_packaging | steel_feed_supply | each package and reusable item | packaging_records | 组件; 材料; 供货供方; 期初期末空件在制成品周转; 首次外收P; ER; 毛发运S; EO; 废弃W; 真实单件质量 | 从首次外收起分别称带、扣、木支座、膜、箱。追踪附着库存和全部外部毛实物流；内部复用成对抵消。只有计件则称实际配置，不设默认千克每件。保留原质量和供方已含标志，不预归一。 | kg; actual count with weighed mass | 每收发货退回及期末 | 全期间及跨期批群；包含零产出期 | 真实来源和整理场至明确钢厂 | 每 1 kg 参考流 | 盘点; 皮重和校准; 外部退回单 |
| cp_transport | steel_feed_supply | road freight workload | transport_records | 真实运输腿; 供方; 距离; 货物包装毛质量; 车辆; 重空返程; 服务边界; 生产批群号 | 保留各腿距离、承运质量、供方范围和共享功能分配证据。归属前算真实工作量，区分原收货、发运、退回，不只由净Q编吨公里。 | kg; km; t*km; kg*km | 每实物运输腿 | 全期间及跨期批群；包含零产出期 | 真实来源和整理场至明确钢厂 | 每 1 kg 参考流 | 地磅; 承运记录; 路线空驶证据 |
| cp_stock | steel_feed_supply | WIP/FG and inherited vectors | stock_records | 批号; 阶段; 批群; 原料成品状态; 期初期末物理状态; 各历史交换向量; 失败返工; 来源更正链 | 将实物盘点与批历史及各投入、排放、废物、服务继承量核对。旧成品返工成对保留原向量，分开真实新增服务；保留零Q负荷和未服务成品历史。 | kg; each exchange unit | 每库存界面及转移 | 全期间及跨期批群；包含零产出期 | 真实来源和整理场至明确钢厂 | 每 1 kg 参考流 | 签署盘点; 批向量追溯核对 |
| cp_allocation | steel_feed_supply | exclusive and shared raw loads | allocation_records | 交换; 功能; 专属表; 所含材料; 决定性因果; 剩余; 共同门; 实际状态; 价格期间币种; 还原成本; 不确定性 | 任何比例前采集原功能特定记录。记录实际虚拟细分及独立因果证据；仅确实剩余交换才用扣回下游成本的同门同期市场证据。保留全部功能份额和敏感性，不预设比例。 | actual exchange units; actual currency | 每路线期间变化及批群 | 全期间及跨期批群；包含零产出期 | 真实来源和整理场至明确钢厂 | 每 1 kg 参考流 | 计量追踪; 因果证据; 市场成本记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_units | all inventory rows | 归属前以收货和期初期末原料库存核对真实发用、消耗供货量，外收保留独立实物腿。分配前转换原单位；1千瓦时=3.6兆焦，1吨公里=1000千克公里。体积转质量用独立实测的材料特定状态密度；整份制剂仍只采购一次。 | raw records; independent density; cp_materials; cp_energy; cp_transport | converted raw records | `jrc-ilcd-2010` |
| c_q | finished_bale | Q_c=批群c首次新放行合格净料包质量之和，并作有凭据原批群更正；排除各包装及既有放行。期末已接受成品已含其中。 | cp_release; cp_stock | Q_c | `jrc-ilcd-2010` |
| c_attribution | all inventory rows | 对各j在专属和虚拟细分后使原交换量在功能间守恒；确定逐交换物理因果，只有真正剩余共享负荷才用实际共同门市场价值分配。实物V不随负荷份额改变。 | converted raw records; cp_allocation; cp_origin | allocated raw load B_jc | `jrc-ilcd-2010` |
| c_inheritance | all inventory rows | A_jc=B_jc+转入c的历史期初在制品交换向量-放行之外留存期末在制品向量。保留失败空转清理及真实损失负荷。不再减已接受期末成品；旧成品返工继承向量成对转入转出，仅增量入H_jc。 | B_jc; cp_stock; cp_outputs | A_jc | `jrc-ilcd-2010` |
| c_service | all inventory rows | H_jc是归原批群c的互斥真实放行后服务及增量返工向量，含实际毛交付退回腿及终端接收检测。明确保留尚未完成服务范围。H绝非产出分母。 | cp_stock; cp_transport; cp_packaging; cp_release | H_jc | `jrc-ilcd-2010` |
| c_normalize_once | all inventory rows | Q_c>0时只执行一次归一：a_jc=A_jc/Q_c，s_jc=H_jc/Q_c；每参考交换是互斥生产、服务部分的a_jc+s_jc。实物上下文v_jc=V_jc/Q_c是完整共输出、退回、发运数量的独立非负荷视图。卡片及归集标签只引用同次结果。Q_c=0保留真实负荷库存而不出单位结果；H和本期Q均不能替代原Q_c。 | A_jc; H_jc; V_jc; Q_c | a_jc; s_jc; v_jc | `jrc-ilcd-2010` |
| c_physical | all material interfaces | 分别对整份质量、合金金属、油、水、实测相关元素核对b_physical制造、成品及合并外部V式。元素分析是整份合金或混合物的非叠加分析；牌号限值不能闭合衡算，一个残差不能解两个未知。不预设反应、吸氧或结构水。 | cp_origin; cp_materials; cp_stock; cp_outputs; cp_species | physical mass and element reconciliations | `jrc-ilcd-2010` |
| c_packages | each separate package | 对各材料空件、附着在制品、附着成品、周转库存执行b_packages完整期初+P+ER=期末+S+EO+W账。S跟随实物毛发运；内部复用抵消，全部首次外收保留。 | cp_packaging; cp_stock; cp_release | each package reconciliation | `jrc-ilcd-2010` |
| c_residual | physical diagnostics | F报告为固定两侧物理账差额。新增已识别X只对同侧OTHER中已有的同量确切重复作扣回；不得拟合X至F或抹掉未解释不确定性。整份外部废物与来源分区只合计一次，对应一个供方。 | cp_outputs; cp_stock; cp_species | diagnostic residual and evidence gap | `jrc-ilcd-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | each supply and output | 独立匹配真实牌号、形态、路线、原生类型、地域、供方；Waste或家族主名不能确立Product参考。 | 完整原生记录; 炉批证书; 签署接收规格 |
| dq_raw | all records | 保留原计量地磅记录、检出限、取样设计、不确定性；无文献默认工厂配方或编造牌号数量密度。 | 校准; 实验记录; 原始账 |
| dq_stock | all cohorts | 完整保留实物及逐交换继承向量、失败、零Q、库存返工、接收服务；明确未完服务覆盖。 | 批群谱系; c_physical; c_packages |
| dq_sources | method and science | 区分分类、制造商技术范围、行业整理指导、归因分配指导；来源案例不是同厂配方或科学翻译审批。 | 来源上下文及独立适用性评估 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | whole route | 检查完整来源至接收方供料路线及排除项；确认单一认证HC340LA流及真实接收协议，不自动套ReMA等级或替代原生钢。 | `un-cpc-2025`; `voestalpine-hsla-2024`; `rema-ferrous-2026` |
| v_identity | every UUID and provider | 仅用兼容原生流类型、路线、形态、CAS、地域和全部属性单位限制。核心Product身份未解意味着最终原生绑定不可用；辅助缺口仍保留具体命名交换。泛身份不认证供方。 | `jrc-ilcd-2010` |
| v_quantity | all cards and cohorts | 强制单一新增首次Q_c、完整在制品继承、互斥服务H_jc归原Q_c。核实原采集未相除且c_normalize_once只执行一次；零Q不出单位结果。 | `jrc-ilcd-2010` |
| v_conservation | all physical interfaces | 依实测证据独立闭合整份质量、相关元素、油水账，匹配界面并从首次外收保留各包装。保留未解残差，不以单式拟合两未知，不重复混合物来源或把内部转移作输出。 | `jrc-ilcd-2010` |
| v_complete | all actual burdens | 核实专属虚拟细分、逐交换因果及仅剩余同门市场分配，含失败负荷守恒。确认全部观测化学品、能源、包装、废物、物种及外包边界；未知不能按零通过。 | `jrc-ilcd-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 在真实身份、供方、完整性核查后用于已声明整理金属钢供料 |
| allowed_use | 一条明确限定HC340LA料包供应，采用首次放行分母及完整批群服务；另披露钢厂实收质量、收得率 |
| excluded_use | 泛铁废钢、等同净交付千克、替代处理服务、氧化皮、锭、不锈钢、铸铁、自动信用或零上游负荷 |
| required_metadata | 全部必需限定及每卡选定限制；来源供方边界、真实终端接收记录、独立Q_c、V、A、H账 |
| required_quality_disclosure | 数据场址期间代表性、实测污染及不确定性、全部未服务成品和退回、原生身份供方缺口、计算服务完整性 |
| update_trigger | 牌号镀层来源、物理形态或整理路线变化；接收规格法律角色变化；原生身份供方修订；来源技术期间及库存服务界面变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | UN CPC Version 3.0 explanatory notes, 30 June 2025, printed p.203; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 区分39340废钢、39310氧化皮和39350重熔锭 |
| voestalpine-hsla-2024 | handbook | voestalpine Micro-alloyed steels data sheet, 11/2024, pp.1–4; https://www.voestalpine.com/stahl/content/download/4681/file/Data-sheet-micro-alloyed-steels-voestalpine-EN-030225.pdf?inLanguage=eng-GB | HC340LA与未镀层供货身份；熔炼分析及镀层反例；不转用本批成分或碳足迹 |
| was-quality-control | handbook | WorldAutoSteel AHSS Guidelines, Quality Control, publisher HTML accessed 2026-11-20; https://ahssinsights.org/forming/quality-control/quality-control/ | 定性冲压投入、切边废料及记录概念；AHSS负荷和设定不转用于常规HSLA |
| was-lubrication | handbook | WorldAutoSteel AHSS Guidelines, Lubrication, publisher HTML accessed 2026-11-20; https://ahssinsights.org/forming/tooling/lubrication/ | 定性区分钢厂附着油、整份外购冲压润滑剂和施加；不转用AHSS数值 |
| rema-ferrous-2026 | standard | ReMA ISRI Specifications January 2026, FS-2023, printed pp.20–23; https://www.isrispecs.org/wp-content/uploads/2026/01/2026-January-ReMA_ISRI_Specifications.pdf | 真实供需协议、清洁度及板材边角料包与车屑、氧化皮、铸铁的区分；不自动指定贸易等级或密度 |
| jrc-ilcd-2010 | official_guidance | JRC ILCD Handbook General guide for LCA—Detailed guidance, first edition March 2010, §§7.9.2–7.9.3; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因多功能性层级与逐交换分配；前景库存和采集要求为明确的方法实现，不是工业观测 |
| sdi-scrap-2023 | handbook | Steel Dynamics Structural & Rail Division，Iron & Steel Scrap Manual，1400-020-001 Rev.0，2023-12-18，第5–10页；https://www.steeldynamics.com/wp-content/uploads/2024/01/1400-020-001-STEEL-SCRAP-IRON-AND-STEEL-SCRAP-MANUAL-V.0-12-18-2023.pdf | Columbia City 检验及 #1 Busheling/#1 Bundles 形态区分；仅为场址反例，不自动转用数值或证明 HC340LA 接受 |
| sdi-roanoke-2026 | handbook | Steel Dynamics Roanoke Bar Division，Inspection of Scrap AP019 Rev.2，2026-04-29，第1–2、7–8页；https://lpg.steeldynamics.com/pdf/Roanoke/Documentation/Op-Procedure-Receiving-Inspection-Scrap.pdf | 另一接收场址的检验、化学与包芯控制；与 Columbia City 同集团，不证明全行业接受性或实际 HC340LA 接收方 |
