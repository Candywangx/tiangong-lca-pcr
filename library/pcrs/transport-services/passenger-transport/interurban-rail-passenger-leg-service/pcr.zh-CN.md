---
pcr_id: pcr.interurban-rail-passenger-leg-service
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 城际铁路旅客乘运区段服务

## 1. 范围与适用性

本专属PCR覆盖非相邻城市之间向所有用户开放的真实铁路旅客运输，不论运输距离及所用等级。普通特快高速及其他真实符合的铁路服务均保留。须证实真实起讫城市地理及非相邻性、公众开放、服务功能等级质量和运行安排。不从城市64111搬用通用公里阈值或强制预定路班条件；真实供应班期时记录班期。

一个参考为此城际铁路功能中一名旅客真实完成上车至下车的乘运区段。N为相同起讫服务配置等级质量队列期间、功能兼容的真实完成旅客区段正计数。真实距离路线速度剖面时长为必需描述，不是替代分母。票通票预留座位列车运力车辆移动每轨道段旅客公里或整个混合方式旅程不自动等于一个完成区段。换乘另一供应列车服务形成真实独立区段，不在此另加组合旅程产出。

所有真实符合的铁路支承推进技术及能源路线仍在语义范围：轮轨胶轮单轨齿轨直线电机常导或超导悬浮及其他真实铁路机构，电力柴油蒸汽储能氢等真实载能。各实际路线适用下述原生来源工程供应资产去向义务。缺UUID数量技术因子或未列配置阻断完整生产，不排除真实64210产品。城市地铁案例仅作物理接口依据，不证明真实城际路线或相同硬件。

排除单城或相邻城市铁路运输64111及独立观光混合方式最终功能。CPC64210明确排除卧铺车服务63290和餐车服务63310：这是实际独立产出供应接口，不准删除共享车厢牵引温控卫生安全车站维修资本责任。即使打包票价也识别真实销售供应功能，先细分专属单元，再按有据物理驱动原生量分配剩余共享资源。票价名称或单独发票不能单独决定物理覆盖。

保实际伴随车辆行李动物其他携带物的真实质量空间处理限制；不添旅客产出也不假定零载。独立供应货运载车寝卧餐饮等产出保各自原生参考分配覆盖台账。客运真实设施无障碍及已含支持仍恰好覆盖一次。乘务为作业角色，儿童婴儿无假定成人座位当量。

含真实完整上落车城际区段及归属上游供应调理载客空驶调车惰行等待待命测试救援取消失败作业、站段控制车辆导轨土建供电资产、维修改装更换退役。跨境或来源辖区变化保各真实区段供应介质，不按国家库存任意截断。N=0无有限区段强度。扩展生命周期及详细分配归一为PCR明确选择，非来源规定通用因子。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.interurban-rail-passenger-leg-service |
| classification_refs | CPC3.0 64210;exact;非相邻城市间公共铁路，不论距离等级 |
| covered_products | 全部真实非相邻城市间公共铁路旅客乘运区段，普通特快高速及全部符合技术能源等级距离 |
| excluded_products | 单城相邻城64111；独立寝卧63290餐饮63310服务；观光混合最终产品；独货制造资产可用性 |
| representative_product | 已完成的公共城际铁路旅客乘运区段 |
| production_route | 真实公共城际铁路路线队列等级，全部原生支承推进来源独立附属责任完整生命周期 |
| market_state | 真实完成城际旅客上落车区段，具非相邻城市范围服务等级时质覆盖 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已完成的公共城际铁路旅客乘运区段 |
| How much | 1 个已完成旅客铁路乘运区段 |
| How well | 声明实际起讫点、铁路类型、席别、质量、路线距离及完成情况 |
| How long or cycle | 实际登车至下车区段；另行披露完整支持作业期间及资产寿命 |
| reference_flow_link | completed_interurban_rail_leg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已完成的公共城际铁路旅客乘运区段 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | origin_destination_city_noncontiguity; public_availability; actual_operation_arrangement_and_timetable_if_supplied; actual_support_propulsion_mechanism; service_type; origin; destination; actual_segment_distance; completed_person_leg_definition; N; train_service_and_configuration; class_and_quality; timetable_and_period; actual_energy_state_and_supplier; empty_and_cancelled_duty; accompanying_loads_and_coproducts; station_depot_provider_coverage; asset_lifetime_and_duty; geography_and_border_scope; direct_emission_medium |

所有清单均按每参考流计。N 为同一旅客组及期间实际完成的人次区段数，且必须大于零。必需限定信息须在数据集元数据、服务说明或等效字段中提供。统计客公里定义仅用于独立物理距离台账，不会改变本计数分母或强制国境截止。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| journey_count | reference product | Number of items | Item(s) | N 是同一声明旅客组实际完成的正数人次乘运区段；cp_journeys 核对登离车证据、换乘、通票及取消。车票或预留运力不能直接确定 N。 |
| distance_basis | all inventory rows | Native compatible property | Actual native unit | 按区间采集实际路线距离和旅客载荷，分别记录旅客距离与列车距离；不得把计数参考改称客公里，不得除以额定座位，也不得把国家统计的国境截断规则直接用于完整声明的跨境乘运区段。 |
| energy_state | electricity_ac,regeneration_ac,diesel | Native compatible property | Actual native unit | 区分交流/直流、总输入/向边界外再生电力输出、燃料质量/体积。升转千克必须有兼容密度和状态证据；质量转热能必须有燃料热值依据。电量 kWh 仅采用已验证的 3.6 MJ/kWh 单位关系，不得使用燃料热值。 |
| species_basis | co2_fossil,ch4_fossil,n2o | Mass | kg | 排放采用实际受纳介质中的物质质量；区分 kg CO2 与 kg C、kg N2O 与 kg N、化石碳与生物碳、直接释放与上游/供应商负荷。任何换算必须记录方程、输入基准及来源。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际铁路服务名册、供应载能形式、维护运行资产及独立识别的上游供应商交接点 |
| starting_condition_role | 声明物理/服务起始事实，不是历史资本或燃料零负荷 |
| product_classification_scope | CPC3.0 64210;exact;非相邻城市公共铁路不论距离等级 |
| recursive_input_rule | 购入铁路子服务仅在其作业位于直接建模列车边界之外时作为独立责任投入；不得自递归或重复参考产出 |
| upstream_dataset_requirement | 兼容的实际燃料/电力、供应商、制造/更新及处理数据集，具有明确原始数量和无重叠矩阵 |
| disclosure | 旅客组、区段/运行图/距离、边界责任、寿命/资本、共产品、排除及未解决数据；存在必需缺口时不得声明完整服务 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | all inventory rows | 纳入支持声明已完成旅客组的全部实际活动，包括归属的空驶调位、调车、惰行、停站/待机、取消或失败作业及维修。惰行不代表辅助用电或归属支持负荷为零。这些活动不产生新的已完成服务计数。支持节点定量参考采用相同最终已完成区段分母，不增加产品产出。未服务需求和取消票不进入 N，但其实际支持负荷仍采用有据的因果驱动归属。 |  |
| boundary_ownership | all inventory rows | 对每个供应商、电表、车站、车库、车辆及轨道资产声明投入/产出交接点与覆盖矩阵。同一作业只能计入包含其职责的完整供应商结果，或其拆分组成，不能二者并计。通用运输或基础设施数据集名称不能证明边界兼容。 | ghg-product-standard-2011 |
| boundary_power | all inventory rows | 发电厂排放不得再次列为列车尾气。在模型边界内回用的再生电力是内部转移，不是另一个服务或外售产品。经测量的外部输出仅在真实交接点跨界一次，不能既从净购电中扣除又额外取得抵扣。 | ipcc-mobile-combustion-rail |
| boundary_assets | all inventory rows | 要求按资产记录完整物理寿命内的制造、更新、维修和退役覆盖，向所有使用者及报告期间仅归属一次。下列制造需求行是有条件的具体例子，不能替代完整资产台账。既有或租赁资产不等于零负荷，供应商结果已包含的资本负荷不得再加一次。 | ghg-product-standard-2011 |
| boundary_fates | all inventory rows | 独立识别实际材料、制冷剂、废水、维修废物、磨耗颗粒及尾气物种。发生情况、物种、介质或接收交接点未知会阻断完成。不得把捕集粉尘或含油液体与空气颗粒、水蒸气或处理活动混为一项。 |  |

### 真实铁路机构及范围方法

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| native_interurban_extent | all inventory rows | 证实真实起讫非相邻城市及向所有用户开放，不论距离等级。记真实普通特快高速其他服务、运行安排及实际供应班期、路线速度坡度停靠时长编组座级配置队列区段旅客伴随负载完成。功能等级质量实质不同分层。直通列车可载城市城际用户，记其真实不同服务产出共享作业，不把全用户改称城际、不按边界截最终区段或任定公里阈值。 | unsd-cpc3-passenger-rail-2025 |
| native_wheels_tyres_rack | all inventory rows | 真实轮齿胶支承识别完整转向架动力制动轨梁齿及导向接口。采真实轮胎型号气体压力态库存充回放更换周期物理磨耗。胶轮运行导向稳定轮及混凝土导梁不能继承钢轮钢轨磨耗率。齿轮齿轨润滑清洗更新测试保持真实分阶段。不供通用坡度胎寿命摩擦磨耗牵引效率。 | hitachi-urban-monorail-2005;sytral-rack-metro-2026 |
| native_linear_levitation | all inventory rows | 独立识别支承推进制动：轮支承直线电机保留轮接触及初级线圈次级反应板；悬浮保留真实磁体线圈导向功率电子导轨。按互核表计覆盖分采推进悬浮间隙控制静止悬浮辅助调理冷却待命救援总来源供应。不能断言停车惰行零能或无轨接触就全部磨耗维护为零。真实超导等配置须自身低温冷却耗材工程依据，不用Linimo数值。 | jametro-linear-mechanism;aichi-linimo-2019 |
| native_other_energy | all inventory rows | 每真实载能沿物理链。外购ACDC储能充电不互换；内部电池燃料电池发电机及再生回用是内部转移不添进口。电池原装更换充损分别覆盖。燃料电池保真实氢交付态纯度压力压缩液化调理、空气氧供水产吹扫漏回上游；供氢不等于反应排氢，不以化学计量库存代实际量。蒸汽路线保真实燃料等级碳源锅炉给补冷凝库存压温产用热汽排污灰渣真实释放；内部自产汽不再叠自身燃料锅炉负荷，无独立依据不从燃料kg推汽kg。缺工程来源阻完成不排合格铁路产品。 | ipcc-mobile-combustion-rail |
| native_station_provider_life | all inventory rows | 保地下通风排水站温扶梯升降站台控信号供电变换车辆段测试应急真实来源表计资产范围。地面高架地下土建共享用户按真实工程量寿命，无通用基础设施强度。完整牵引车站车辆段建维修处理供应替确切已含油电材资本释放；未含收运调理当期维护退役独补一次。原生制造需求乘兼容同资产队列作业/正全用户总有效作业再除N，为所含交付阶段分配，不是全寿命铁路服务身份。 | ghg-product-standard-2011 |

### 城际低温及附属接口

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| native_superconducting_scope | all inventory rows | 各真实超导其他悬浮识别真实支承推进导向集电及低速应急接触态。感应励磁悬浮导向线圈不虚构第二外供能源；按实测工程覆盖归属真实耦合推进导向供应。磁体持续电流不使冷却控制推进待命零能。记真实低温容器冷机电、氦等冷媒初充补充库存循环再凝回收转移、实测放损去向维护阶段。不把循环氦每次算新供；设备制造已含初充不重加。真实无液氦等配置保独立有据冷却耗材生命周期义务，无通用耗氦或搬速度温度效率。技术演示未来项目页不证已完成公共城际商业服务；真实供应须符合参考。 真实低温容器原始初充若独立建模且未含整机制造或供应覆盖，属于长期初始库存交付阶段：真实原生初充质量乘研究兼容同资产作业/正完整寿命全用户作业，再除N，并闭合初始库存留存及最终回收去向。不得把全部初充作为当期维护消耗。真实运行补充按当期库存使用去向及因果用户份额归属，再除N。留存纯转移循环再凝不是消耗或新采购。供应资产台账中明确区分阶段。 | jr-scmaglev-native |
| native_ancillary_scope | all inventory rows | 对63290寝卧63310餐饮及每真实独立附属产出，记功能供应责任、真实原生数量质量时间，以及按实际定义的人、占用铺位房夜或备餐份数和阶段资源责任矩阵。这些单位不是运输旅客区段，不从票价成人座位当量编造。专属床品洗涤卧具、餐食厨房服务及真实原料能废归真实服务责任；共享车厢牵引温控卫生安全资本须向真实产出全用户细分或有据物理分配。完整购入附属运输结果仅替对应本地已含单元一次，只展开未覆。实际属于客运功能的附带支持仍在该功能内，不因分类交叉引用就自动删餐旅床品整卧车。缺真实分配供应原生数据阻完整运输结果。 | unsd-cpc3-passenger-rail-2025 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rail_operation | 列车运行与旅客服务交付 | required | 全部声明已完成乘运 | foreground | completed_interurban_rail_leg |
| rail_maintenance | 归属车站/车库与维修作业 | required | 实际支持活动，含外包覆盖 | supporting | completed_interurban_rail_leg |
| rail_capital | 完整寿命车辆与基础设施需求 | required | 全部实际归属资产，含期间/使用者归属 | supporting | completed_interurban_rail_leg |

### 过程：列车运行与旅客服务交付 (`rail_operation`)

#### 输入

##### 产品流

###### 实际交流铁路运行用电 (`electricity_ac`)

仅计入实际进入声明列车/车站供电边界的交流电，记录供应商、地点、电压接口、期间及变流损失。必须匹配真实交流输入；直流供应、电池充电结果及其他载能形式须有各自真实身份。通用支持属性名为净热值，但此已核实流表达电能，并不是燃料因子。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: Energy / kWh
- 数量规则: 实际归属原始数量 / N；cp_operation。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_operation`
- 来源: `ipcc-mobile-combustion-rail`

范围证据要求：必须取得实际场址/作业/旅客组记录及适用上游或因子依据；不提供通用数量、上座率、寿命或排放区间。

###### 柴油路线的实际柴油供应 (`diesel`)

仅在声明作业实际消耗柴油时适用，包括归属调车、调位及待机。记录燃料等级/混合组分、库存变化及全部损失；测质量或用证据支持原始体积换算。实际混合燃料采用一条匹配的整股输入并保留实测组成/碳源台账，或以实际组分输入替代其重叠供应并闭合质量及供应商覆盖；不得同时计入整股燃料及其所含组分的供应。其他实际燃料须采用自身匹配身份。不得假定化石比例，也不得仅因属于铁路服务就假定耗用柴油。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位: Mass / kg
- 数量规则: 实际归属原始数量 / N；cp_operation。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_operation`
- 来源: `ipcc-mobile-combustion-rail`

范围证据要求：必须取得实际场址/作业/旅客组记录及适用上游或因子依据；不提供通用数量、上座率、寿命或排放区间。

###### 铁路加注移交端口压缩气态氢 (`hydrogen_supply`)

仅真实压气氢及纯压温原生量上游产路所含送压。液氢未指氢源不互换。供应已含调理替代一次，未含压配存吹放回仍覆盖。供提反应漏去不同，不默认电解零碳。

- 选定流: 铁路加注移交端口压缩气态氢
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生量 / N；cp_operation。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_operation`

###### 蒸汽机车燃料供应端口烟煤 (`coal_supply`)

仅真实记录烟煤等级收货含水碳源原生供量兼容端口。其他固液生物源炉燃料独行，不假蒸汽必煤。供存实际燃洒灰不同，不猜热值炉效汽率。整混替组互斥。

- 选定流: 蒸汽机车燃料供应端口烟煤
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生量 / N；cp_operation。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_operation`
- 来源: `ipcc-mobile-combustion-rail`

###### 供应端口去离子锅炉补给水 (`boiler_makeup_water`)

仅真实供去离子液态补水及质量温度原生体积。不是自来水全部给水或总汽；回凝内部，其他水品另行。供留汽凝排污蒸发真实物种接收独核，无供差即废或通用密汽换算。处理已含供应替自身投入一次。

- 选定流: 供应端口去离子锅炉补给水
- 流属性/单位: Volume / m3
- 数量规则: 真实归属兼容原生量 / N；cp_operation。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_operation`
- 来源: `ipcc-mobile-combustion-rail`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成铁路旅客服务 (`completed_interurban_rail_leg`)

声明公共铁路服务中，一名旅客实际完成从登车至下车的一个乘运区段。乘运/区间标识、实际距离和席别属于限定信息，不是额外产出。本流是运输服务，不是人体、车辆、车票、通用货运活动或客公里。

- 选定流: 已完成的公共城际铁路旅客乘运区段
- 流属性/单位: Count / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_journeys`
- 来源: `eurostat-rail-manual-2025`; `unsd-cpc3-passenger-rail-2025`

范围证据要求：必须取得实际场址/作业/旅客组记录及适用上游或因子依据；不提供通用数量、上座率、寿命或排放区间。

###### 实际向边界外输出的再生交流电 (`regeneration_ac`)

仅在有独立计量、确实向声明前景边界外交付交流电，且采用总输入/独立输出核算时适用。内部牵引回收、直流电、避免的耗电或已抵扣的账单余额均不是此输出。保留实际交接点、损失及兼容能量质量，不假设替代抵扣。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: Energy / kWh
- 数量规则: 实际归属原始数量 / N；cp_operation。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_operation`
- 来源: `ghg-product-standard-2011`

范围证据要求：必须取得实际场址/作业/旅客组记录及适用上游或因子依据；不提供通用数量、上座率、寿命或排放区间。

##### 废物流

##### 基本流

###### 实际直接向空气释放的CO2 (`co2_fossil`)

本绑定身份为未指定子区室的空气排放。仅在实际记录明确保留该未指定子区室且有书面理由时使用。不得将已知城市、非城市、近地面或其他具体受纳信息合并丢失；须另行展开经核实、物种及子区室均兼容的独立行，且不得同时再计本行。

仅在该物质实际直接向空气释放时适用。采用兼容的实测物种数据或有据的燃料/技术特定排放方法；此处不提供数值因子。化石碳卡必须证明化石来源，N2O 按 kg N2O 而非 kg 氮报告。其他来源、物质或介质必须另行展开。购电以及完整上游/供应商排放不能当作列车尾气。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实际归属原始数量 / N；cp_emissions。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `ipcc-mobile-combustion-rail`

范围证据要求：必须取得实际场址/作业/旅客组记录及适用上游或因子依据；不提供通用数量、上座率、寿命或排放区间。

###### 实际直接向空气释放的CH4 (`ch4_fossil`)

本绑定身份为未指定子区室的空气排放。仅在实际记录明确保留该未指定子区室且有书面理由时使用。不得将已知城市、非城市、近地面或其他具体受纳信息合并丢失；须另行展开经核实、物种及子区室均兼容的独立行，且不得同时再计本行。

仅在该物质实际直接向空气释放时适用。采用兼容的实测物种数据或有据的燃料/技术特定排放方法；此处不提供数值因子。化石碳卡必须证明化石来源，N2O 按 kg N2O 而非 kg 氮报告。其他来源、物质或介质必须另行展开。购电以及完整上游/供应商排放不能当作列车尾气。

- 选定流: 甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实际归属原始数量 / N；cp_emissions。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `ipcc-mobile-combustion-rail`

范围证据要求：必须取得实际场址/作业/旅客组记录及适用上游或因子依据；不提供通用数量、上座率、寿命或排放区间。

###### 实际直接向空气释放的N2O (`n2o`)

本绑定身份为未指定子区室的空气排放。仅在实际记录明确保留该未指定子区室且有书面理由时使用。不得将已知城市、非城市、近地面或其他具体受纳信息合并丢失；须另行展开经核实、物种及子区室均兼容的独立行，且不得同时再计本行。

仅在该物质实际直接向空气释放时适用。采用兼容的实测物种数据或有据的燃料/技术特定排放方法；此处不提供数值因子。化石碳卡必须证明化石来源，N2O 按 kg N2O 而非 kg 氮报告。其他来源、物质或介质必须另行展开。购电以及完整上游/供应商排放不能当作列车尾气。

- 选定流: 一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实际归属原始数量 / N；cp_emissions。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `ipcc-mobile-combustion-rail`

范围证据要求：必须取得实际场址/作业/旅客组记录及适用上游或因子依据；不提供通用数量、上座率、寿命或排放区间。

### 过程：车站/车库维修与清洗 (`rail_maintenance`)

#### 输入

##### 产品流

###### 铁路维修清洗的实际自来水 (`tap_water`)

仅计入归属服务范围内清洗或维修实际供应的液态自来水，保留水源质量/状态、期间及供应商覆盖。回用水、直接环境取水、饮用水产品及其他供应属于不同身份。供水量不能直接确定废水量或蒸发量。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: Volume / m3
- 数量规则: 实际归属原始数量 / N；cp_maintenance。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_maintenance`

范围证据要求：必须取得实际场址/作业/旅客组记录及适用上游或因子依据；不提供通用数量、上座率、寿命或排放区间。

###### 供轮胎充气的氮气 (`nitrogen_inflation`)

仅真实独供氮气及纯度态供应端口。记原生供量始末含量充回放调理能，压力不是气质量。空气等其他气独身份，不默认氮。供应不证明基本释放，真实接收介质物种去向另计。 此已核通用氮气身份不证明实际纯度交付调理阶段或空分产路；须真实供应依据，未覆运输压缩调理独补。不是排氮基本流或默认充气因子。

- 选定流: 氮气 `4f19ca0f-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生量 / N；cp_maintenance。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_maintenance`
- 来源: `hitachi-urban-monorail-2005`

###### 低温容器充注移交端口液氦 (`liquid_helium_supply`)

仅真实独供液氦及纯度低温态原生交付质量供应调理覆盖证明。氦气闭环循环容器容量不是液体供应。制造设备供应已含初充不重加，真实补充换充库存再凝回转放漏去向不同。不假日损补比或冷机零电。其他冷媒无液氦系统须真实独立原生记录，不自动氦。 真实低温容器原始初充若独立建模且未含整机制造或供应覆盖，属于长期初始库存交付阶段：真实原生初充质量乘研究兼容同资产作业/正完整寿命全用户作业，再除N，并闭合初始库存留存及最终回收去向。不得把全部初充作为当期维护消耗。真实运行补充按当期库存使用去向及因果用户份额归属，再除N。留存纯转移循环再凝不是消耗或新采购。供应资产台账中明确区分阶段。

- 选定流: 低温容器充注移交端口液氦
- 流属性/单位: Mass / kg
- 数量规则: 真实低温容器原始初充若独立建模且未含整机制造或供应覆盖，属于长期初始库存交付阶段：真实原生初充质量乘研究兼容同资产作业/正完整寿命全用户作业，再除N，并闭合初始库存留存及最终回收去向。不得把全部初充作为当期维护消耗。真实运行补充按当期库存使用去向及因果用户份额归属，再除N。留存纯转移循环再凝不是消耗或新采购。供应资产台账中明确区分阶段。 采集cp_maintenance，并使用cp_assets同资产寿命记录。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_maintenance`
- 来源: `jr-scmaglev-native`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 单独收集的废矿物润滑油 (`spent_mineral_oil`)

仅在处理前的产生/移交点确实形成独立收集的废矿物润滑油流时适用，收集运输与处理按独立实际责任核算，记录所含污染物、水及容器皮重。不得把含油废水、混合吸附物、新润滑油、回收燃料或处理服务改称此流。实质不同的合收混合物必须另有身份。

- 选定流: 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位: Mass / kg
- 数量规则: 实际归属原始数量 / N；cp_maintenance。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_maintenance`

范围证据要求：必须取得实际场址/作业/旅客组记录及适用上游或因子依据；不提供通用数量、上座率、寿命或排放区间。

##### 基本流

### 过程：车辆与基础设施制造需求 (`rail_capital`)

#### 输入

##### 产品流

###### 条件性制造需求：制造交接点的完整钢制车体无动力铁路客车 (`steel_passenger_coach`)

仅在实际资产台账证明该具体物理产品及制造交接点时适用。按声明旅客组占完整服务寿命作业的份额归属新建/替换制造需求，采用部件特定更新周期及兼容原始单位。本行不是整列车、基础设施集合或年度财务折旧。其他车辆/轨道配置及其真实报废流仍须独立记录。这些行仅要求制造/供应需求，不得把完整铁路服务或全生命周期供应商结果绑定到此制造产品。若实际供应商还包含运行燃料、直接排放、维修或退役，须另行识别其准确原始结果并替换重叠本地交换，不得两者相加。缺少的维修和退役应独立采集。

- 选定流: 制造交接点的完整钢制车体无动力铁路客车
- 流属性/单位: Count / Item(s)
- 数量规则: 实际归属原始数量 / N；cp_assets。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`

范围证据要求：必须取得实际场址/作业/旅客组记录及适用上游或因子依据；不提供通用数量、上座率、寿命或排放区间。

###### 条件性制造需求：制造交接点的成品钢轨 (`finished_steel_rail`)

仅在实际资产台账证明该具体物理产品及制造交接点时适用。按声明旅客组占完整服务寿命作业的份额归属新建/替换制造需求，采用部件特定更新周期及兼容原始单位。本行不是整列车、基础设施集合或年度财务折旧。其他车辆/轨道配置及其真实报废流仍须独立记录。这些行仅要求制造/供应需求，不得把完整铁路服务或全生命周期供应商结果绑定到此制造产品。若实际供应商还包含运行燃料、直接排放、维修或退役，须另行识别其准确原始结果并替换重叠本地交换，不得两者相加。缺少的维修和退役应独立采集。

- 选定流: 制造交接点的成品钢轨
- 流属性/单位: Mass / kg
- 数量规则: 实际归属原始数量 / N；cp_assets。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`

范围证据要求：必须取得实际场址/作业/旅客组记录及适用上游或因子依据；不提供通用数量、上座率、寿命或排放区间。

###### 条件性制造需求：制造交接点的预应力混凝土铁路轨枕 (`concrete_sleeper`)

仅在实际资产台账证明该具体物理产品及制造交接点时适用。按声明旅客组占完整服务寿命作业的份额归属新建/替换制造需求，采用部件特定更新周期及兼容原始单位。本行不是整列车、基础设施集合或年度财务折旧。其他车辆/轨道配置及其真实报废流仍须独立记录。这些行仅要求制造/供应需求，不得把完整铁路服务或全生命周期供应商结果绑定到此制造产品。若实际供应商还包含运行燃料、直接排放、维修或退役，须另行识别其准确原始结果并替换重叠本地交换，不得两者相加。缺少的维修和退役应独立采集。

- 选定流: 制造交接点的预应力混凝土铁路轨枕
- 流属性/单位: Mass / kg
- 数量规则: 实际归属原始数量 / N；cp_assets。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`

范围证据要求：必须取得实际场址/作业/旅客组记录及适用上游或因子依据；不提供通用数量、上座率、寿命或排放区间。

###### 制造端口新充气式单轨运行轮胎 (`monorail_running_tyre`)

仅真实指定完整运行胎，不是导向稳定胎或整架。记胶方增强几何配置原生交付计数。整车制造已含初胎不重加，更换按自身安装队列兼容寿命。厂端制造未证明含实际交付调理则独补一次。不是通用公路胎或全寿命结果。

- 选定流: 制造端口新充气式单轨运行轮胎
- 流属性/单位: Count / Item(s)
- 数量规则: 真实归属兼容原生量 / N；cp_assets。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `hitachi-urban-monorail-2005`

###### 制造端口成品直线电机次级反应板 (`linear_reaction_plate`)

仅真实配置反应板成品及原生质量组成安装范围供应阶段。不是纯铝普通走行轨或整直线电机。整导轨车辆已含初装板替代一次；厂端未含运输安装更换退役另补。

- 选定流: 制造端口成品直线电机次级反应板
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生量 / N；cp_assets。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `jametro-linear-mechanism`

###### 制造端口常导电磁悬浮铁路导轨模块 (`maglev_guideway_module`)

仅真实配置交付模块，明长度BOM原生计数制造范围。不是整线、米改Item或超导通用导轨。未证已含磁体线圈控制电土接口车站另补实际阶段；整模块内件互斥。缺运输安装运行更新退役补一次。

- 选定流: 制造端口常导电磁悬浮铁路导轨模块
- 流属性/单位: Count / Item(s)
- 数量规则: 真实归属兼容原生量 / N；cp_assets。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `aichi-linimo-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | all inventory rows | 首先细分或分表计量专属列车、车站、维修和资产活动。无法细分时，对每项剩余共享负荷记录物理原因、所有使用者和兼容驱动；GHG 产品标准第9章支持该层级，并不提供通用铁路因子。 | ghg-product-standard-2011 |
| allocation_passengers | all inventory rows | 按测得的旅客组区间人数/距离及席别资源归属各区间旅客负荷，再汇总该旅客组分子并除以 N。若旅客距离不适合设施服务或间接负荷，则使用实际占用车厢空间/时间或其他有据因果驱动。所有实际旅客组均进入相应分母；额定座位、票收、票价或运营平均上座率不是默认比例。 | ghg-product-standard-2011 |
| allocation_coproducts | all inventory rows | 旅客距离与货物吨距离量纲不同，不能相加。对于客货混跑、随行车辆或独立销售的附属产品，先细分，再用实际工程/活动证据论证剩余牵引、运力和基础设施份额。同一铁路服务的前后区段不得当作共产品，不得重复分配。 | ghg-product-standard-2011 |
| allocation_export_waste | all inventory rows | 实际外部电力输出、回收材料和废物各须有真实物理去向及边界规则。不得自动给出避免电网、汽车、货运或原生材料负荷抵扣。披露所选分配/循环方法并保留必要物理交换；内部电力转移或废物交接不能增加已完成乘运次数。 | ghg-product-standard-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_journeys | rail_operation | completed person-legs | journey_ledger | 旅客组标识；服务类型；起点；终点；列车服务标识；席别；日期；实际登车数；实际下车数；完成情况；换乘；车票/通票核对；实际区间千米；实际区间人数；N; 独立附属功能；附属原生产出数量单位质量时间；供应责任；所覆阶段资源单元；有据共享物理驱动 | 用运行记录核对实际旅客计数和起讫证据；估算计数时验证抽样及扩推。排除乘务人员，核对未完成/取消乘运但不得抹去其活动负荷。 声明旅客组的 N 个已完成人次区段；单独保留各区间载荷/距离台账. | Item(s) | 每次服务；核对报告期 | 同一声明期间和旅客组 | 同一列车服务及实际登离车站 | 每声明的参考流 | 人数核对；路线记录；抽样覆盖；取消及换乘审计 |
| cp_operation | rail_operation | actual traction and auxiliary duty | meter_and_fuel_ledger | 列车标识；作业标识；区间；动力；电流状态；总输入；外部输出；损失；期初燃料；购入燃料；期末燃料；泄漏燃料；燃料等级；密度状态；载客/空驶/调车/待机；分配责任；归属量; 独立附属功能；附属原生产出数量单位质量时间；供应责任；所覆阶段资源单元；有据共享物理驱动 | 采用经校准的边界表计、调度及加油/库存记录。明确电量总量或净量计量方式，按同一实际旅客组暴露归属共享作业；保留失败、空驶和待机作业。 实际归属原始数量 / N 个已完成人次区段；内部再生能量不是另一次外部投入/产出. | native kWh or kg | 每表计区间和作业；期间核对 | 同一旅客组期间并核对截止 | 声明列车、电力交接点及归属车站 | 每声明的参考流 | 校准；账单与表计核对；库存闭合；路线/技术和供应商边界 |
| cp_emissions | rail_operation | direct species and actual medium | measurement_or_qualified_model | 作业标识；物质；来源；受纳介质；实测质量；因子来源版本；因子单位；兼容活动；燃料技术；碳/氮基准；不确定性；归属 | 采用真实兼容监测，或活动/因子、单位、技术和期间均有独立支持的完整方法。不得仅由 CO2 推算非 CO2 气体，不得由车辆标签继承因子。 实际归属物种质量 / N 个已完成人次区段. | kg of each actual substance | 每监测/建模作业及期间 | 同一作业和旅客组期间 | 归属声明铁路服务的实际运行释放源 | 每声明的参考流 | 监测/模型文件；因子适用性；物种及碳/氮基准审计 |
| cp_maintenance_emissions | rail_maintenance | direct species and actual medium | measurement_or_qualified_model | 作业标识；物质；来源；受纳介质；实测质量；因子来源版本；因子单位；兼容活动；燃料技术；碳/氮基准；不确定性；归属 | 采用真实兼容监测，或活动/因子、单位、技术和期间均有独立支持的完整方法。不得仅由 CO2 推算非 CO2 气体，不得由车辆标签继承因子。 实际归属物种质量 / N 个已完成人次区段. | kg of each actual substance | 每监测/建模作业及期间 | 同一作业和旅客组期间 | 归属声明铁路服务的实际维修释放源 | 每声明的参考流 | 监测/模型文件；因子适用性；物种及碳/氮基准审计 |
| cp_maintenance | rail_maintenance | actual maintenance and waste fates | maintenance_and_receiver_ledger | 资产标识；任务；水源；材料 SKU；净数量；原始单位；混合物组分；接收方；处理覆盖；直接释放介质；供应商覆盖；归属量; 独立附属功能；附属原生产出数量单位质量时间；供应责任；所覆阶段资源单元；有据共享物理驱动; 充注阶段；物理资产ID；初充原生质量；初始库存留存；补充；始末库存；回转放；兼容队列作业；正完整寿命全用户作业 | 读取维修/清洗工单、校准表计、领料及接收记录；独立计量每项实际流及所含组分。区分物理废物与处理服务投入，避免重复供应商已覆盖任务。 按兼容维修作业归属旅客组的实际任务数量 / N 个已完成人次区段. 真实低温容器原始初充若独立建模且未含整机制造或供应覆盖，属于长期初始库存交付阶段：真实原生初充质量乘研究兼容同资产作业/正完整寿命全用户作业，再除N，并闭合初始库存留存及最终回收去向。不得把全部初充作为当期维护消耗。真实运行补充按当期库存使用去向及因果用户份额归属，再除N。留存纯转移循环再凝不是消耗或新采购。供应资产台账中明确区分阶段。 | native kg or m3 | 每实际任务和交接 | 关联维修周期和报告期 | 声明车库/车站及接收方 | 每声明的参考流 | 工单；库存和接收核对；废水/蒸发区别 |
| cp_assets | rail_capital | asset manufacture, renewal and retirement demand | complete_lifetime_asset_register | 资产标识；物理配置；制造交接点；供应商覆盖；数量；原始单位；安装日期；更新范围；完整寿命作业；所有使用者作业；旅客组作业；退役去向；寿命依据；不确定性; 独立附属功能；附属原生产出数量单位质量时间；供应责任；所覆阶段资源单元；有据共享物理驱动 | 采用资产工程量、制造/更新记录、实际作业日志及有依据的完整寿命工程预测。区分部件更新与整机需求；核对所有使用者和期间、融资/租赁责任及真实退役路径。未证明服务寿命会阻断完整资本结果。 实际制造/更新数量乘有据的完整寿命作业旅客组份额 / N 个已完成人次区段；退役另有责任. | native Item(s) or kg | 资产安装/更新/退役；作业期间 | 完整物理寿命及期间/旅客组份额 | 服务旅客组的全部列车、车站、车库、轨道和供电资产 | 每声明的参考流 | 资产配置；寿命/作业敏感性；所有使用者闭合；覆盖及退役记录 |

rail_operation 释放采用 cp_emissions，rail_maintenance 释放采用 cp_maintenance_emissions。每个协议均链接到真实父过程；共用物种方法不合并释放源，也不产生重复数量。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mechanism | rail_operation | 真实支承推进来源机构 | engineering_and_source_ledger | 机构ID轮胶齿线圈导轨真实配置来源态总进口推进悬浮静止辅助储内转炉燃水压热凝污灰氢纯压存反应吹放来源接收供应阶段队列份额N | 独立识别支承推进制动：轮支承直线电机保留轮接触及初级线圈次级反应板；悬浮保留真实磁体线圈导向功率电子导轨。按互核表计覆盖分采推进悬浮间隙控制静止悬浮辅助调理冷却待命救援总来源供应。不能断言停车惰行零能或无轨接触就全部磨耗维护为零。真实超导等配置须自身低温冷却耗材工程依据，不用Linimo数值。 每真实载能沿物理链。外购ACDC储能充电不互换；内部电池燃料电池发电机及再生回用是内部转移不添进口。电池原装更换充损分别覆盖。燃料电池保真实氢交付态纯度压力压缩液化调理、空气氧供水产吹扫漏回上游；供氢不等于反应排氢，不以化学计量库存代实际量。蒸汽路线保真实燃料等级碳源锅炉给补冷凝库存压温产用热汽排污灰渣真实释放；内部自产汽不再叠自身燃料锅炉负荷，无独立依据不从燃料kg推汽kg。缺工程来源阻完成不排合格铁路产品。 | 真实原生来源物种资产单位 | 逐真实来源作业队列工程变化 | 真实同作业队列期间 | 真实符合铁路机构及全部直接支持未覆来源 | 每声明的参考流 | 真实图表库存阶段闭合适用性不确定 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_service | all inventory rows | 采用有据活动及所有使用者份额将实际原始数量归属声明旅客组，再将该旅客组分子除以 N；不得再次归一化内部转移。 | cp_journeys;cp_operation;cp_mechanism;cp_maintenance;cp_emissions;cp_maintenance_emissions;cp_assets | 每 1 Item(s) 已完成人次区段的原始数量 |  |
| segment_attribution | rail_operation | 采用实际旅客组区间人数/距离及兼容席别资源驱动；汇总旅客组前保留区间总量和所有使用者。旅客距离、车辆距离及货物吨距离保持不同量纲。 | cp_journeys;cp_operation | 可审计旅客组活动分子 | eurostat-rail-manual-2025 |
| asset_duty_share | rail_capital | 对每项物理资产/部件，按旅客组作业除以兼容完整寿命所有使用者作业归属实际制造/更新需求；按声明生命周期覆盖对退役仅处理一次。财务折旧或通用服务年限不能代替物理作业。 | cp_assets;cp_journeys | 参考归一化前的旅客组原始资产需求 | ghg-product-standard-2011 |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| interurban_native_interfaces | all inventory rows | 证实真实起讫非相邻城市及向所有用户开放，不论距离等级。记真实普通特快高速其他服务、运行安排及实际供应班期、路线速度坡度停靠时长编组座级配置队列区段旅客伴随负载完成。功能等级质量实质不同分层。直通列车可载城市城际用户，记其真实不同服务产出共享作业，不把全用户改称城际、不按边界截最终区段或任定公里阈值。 对63290寝卧63310餐饮及每真实独立附属产出，记功能供应责任、真实原生数量质量时间，以及按实际定义的人、占用铺位房夜或备餐份数和阶段资源责任矩阵。这些单位不是运输旅客区段，不从票价成人座位当量编造。专属床品洗涤卧具、餐食厨房服务及真实原料能废归真实服务责任；共享车厢牵引温控卫生安全资本须向真实产出全用户细分或有据物理分配。完整购入附属运输结果仅替对应本地已含单元一次，只展开未覆。实际属于客运功能的附带支持仍在该功能内，不因分类交叉引用就自动删餐旅床品整卧车。缺真实分配供应原生数据阻完整运输结果。 各真实超导其他悬浮识别真实支承推进导向集电及低速应急接触态。感应励磁悬浮导向线圈不虚构第二外供能源；按实测工程覆盖归属真实耦合推进导向供应。磁体持续电流不使冷却控制推进待命零能。记真实低温容器冷机电、氦等冷媒初充补充库存循环再凝回收转移、实测放损去向维护阶段。不把循环氦每次算新供；设备制造已含初充不重加。真实无液氦等配置保独立有据冷却耗材生命周期义务，无通用耗氦或搬速度温度效率。技术演示未来项目页不证已完成公共城际商业服务；真实供应须符合参考。 真实低温容器原始初充若独立建模且未含整机制造或供应覆盖，属于长期初始库存交付阶段：真实原生初充质量乘研究兼容同资产作业/正完整寿命全用户作业，再除N，并闭合初始库存留存及最终回收去向。不得把全部初充作为当期维护消耗。真实运行补充按当期库存使用去向及因果用户份额归属，再除N。留存纯转移循环再凝不是消耗或新采购。供应资产台账中明确区分阶段。 | cp_journeys;cp_operation;cp_mechanism;cp_maintenance;cp_assets | 仅除N前真实城际队列功能原生附属及低温资源台账 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| actual_energy | rail_operation | 对上述未准确表示的每项实际载能形式、直流接口、电池、替代燃料、外购热或完整供电/牵引供应商，逐项识别并添加经独立核实、带真实原始单位、条件及覆盖的原子交换。不适用须证明未使用，发生情况未知不得按零。 | cp_operation |
| actual_assets | rail_capital | 补齐全部车辆、轨道、车站、车库、信号及供电资产台账。按实际型号/配置/交接点展开制造、更新需求及退役/处理流。示例制造卡不能覆盖其他材料或全部基础设施；资产作业、身份或寿命未知会阻断完成。 | cp_assets |
| actual_maintenance | rail_maintenance | 逐项展开实际润滑剂、化学品、制冷剂、清洁材料、备件、水源及完整外包任务，保留供应商组分和真实发生情况。独立追踪全部废水、所含混合物及废物去向；记录缺失不等于可以省略。 | cp_maintenance |
| actual_emissions | rail_operation,rail_maintenance | 要求全部实际尾气、制冷剂、制动/车轮/钢轨磨耗及其他直接物种带有来源、物理状态、必要粒径及受纳区室。NOx/NMVOC/颗粒物总量不得随意绑定某个单分子 UUID。区分生物碳及其他介质，不得把投入库存差额当作排放。 | cp_emissions;cp_maintenance_emissions |
| actual_providers | rail_operation,rail_maintenance,rail_capital | 对实际外包列车、车站、车库、维修、供电、建设或废物处理结果，保留供应商原始输出、真实数量及阶段覆盖矩阵。识别真实参考流后才展开具体供应商服务，不得强配通用货运或资产 UUID。供应商已纳入的投入/排放/资本不能再直接计入。 | cp_assets |
| identity_and_factors | all inventory rows | 最终前景数据包要求每项适用交换都有经核实的实际流及支持身份，数量关系有来源依据。候选未解析卡及缺少通用范围不代表零投入、已核实因子或可发布。必要数量或身份缺失会阻断最终完成。 | cp_journeys |

这些是强制完成义务，不是未解析交换卡，也不是未知载能形式/资产/物种不存在的声明。每项真实发生情况都须有独立具体的过程/方向/类型、属性/单位、数量、供应商及来源/介质/去向身份。有证据的未发生与未测值不同。

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| actual_classification_extent | completed_interurban_rail_leg | 证实真实起讫非相邻城市及向所有用户开放，不论距离等级。记真实普通特快高速其他服务、运行安排及实际供应班期、路线速度坡度停靠时长编组座级配置队列区段旅客伴随负载完成。功能等级质量实质不同分层。直通列车可载城市城际用户，记其真实不同服务产出共享作业，不把全用户改称城际、不按边界截最终区段或任定公里阈值。 | cp_journeys;cp_operation |
| actual_native_mechanisms | rail_operation;rail_maintenance;rail_capital | 真实轮齿胶支承识别完整转向架动力制动轨梁齿及导向接口。采真实轮胎型号气体压力态库存充回放更换周期物理磨耗。胶轮运行导向稳定轮及混凝土导梁不能继承钢轮钢轨磨耗率。齿轮齿轨润滑清洗更新测试保持真实分阶段。不供通用坡度胎寿命摩擦磨耗牵引效率。 独立识别支承推进制动：轮支承直线电机保留轮接触及初级线圈次级反应板；悬浮保留真实磁体线圈导向功率电子导轨。按互核表计覆盖分采推进悬浮间隙控制静止悬浮辅助调理冷却待命救援总来源供应。不能断言停车惰行零能或无轨接触就全部磨耗维护为零。真实超导等配置须自身低温冷却耗材工程依据，不用Linimo数值。 每真实载能沿物理链。外购ACDC储能充电不互换；内部电池燃料电池发电机及再生回用是内部转移不添进口。电池原装更换充损分别覆盖。燃料电池保真实氢交付态纯度压力压缩液化调理、空气氧供水产吹扫漏回上游；供氢不等于反应排氢，不以化学计量库存代实际量。蒸汽路线保真实燃料等级碳源锅炉给补冷凝库存压温产用热汽排污灰渣真实释放；内部自产汽不再叠自身燃料锅炉负荷，无独立依据不从燃料kg推汽kg。缺工程来源阻完成不排合格铁路产品。 保地下通风排水站温扶梯升降站台控信号供电变换车辆段测试应急真实来源表计资产范围。地面高架地下土建共享用户按真实工程量寿命，无通用基础设施强度。完整牵引车站车辆段建维修处理供应替确切已含油电材资本释放；未含收运调理当期维护退役独补一次。原生制造需求乘兼容同资产队列作业/正全用户总有效作业再除N，为所含交付阶段分配，不是全寿命铁路服务身份。 | cp_mechanism;cp_operation;cp_maintenance;cp_assets |
| atomic_native_completion | all inventory rows | 每真实未列投入资产供应废物释放物种去向须具体单身份态及唯一row_id一真过程方向类型原生属性单位真实量、UUID或登记未解、原始来源同父CP、有据计算覆盖来源接收不确定，联触发requirement_id。未知发生身份量去向阻完整，非零或范围排除。不用及供应已覆省略须肯定证据。 | all declared collection protocols |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| actual_interurban_ancillary_interfaces | rail_operation;rail_maintenance;rail_capital | 对63290寝卧63310餐饮及每真实独立附属产出，记功能供应责任、真实原生数量质量时间，以及按实际定义的人、占用铺位房夜或备餐份数和阶段资源责任矩阵。这些单位不是运输旅客区段，不从票价成人座位当量编造。专属床品洗涤卧具、餐食厨房服务及真实原料能废归真实服务责任；共享车厢牵引温控卫生安全资本须向真实产出全用户细分或有据物理分配。完整购入附属运输结果仅替对应本地已含单元一次，只展开未覆。实际属于客运功能的附带支持仍在该功能内，不因分类交叉引用就自动删餐旅床品整卧车。缺真实分配供应原生数据阻完整运输结果。 | cp_journeys;cp_operation;cp_mechanism;cp_maintenance;cp_assets |
| actual_interurban_cryogenics | liquid_helium_supply | 各真实超导其他悬浮识别真实支承推进导向集电及低速应急接触态。感应励磁悬浮导向线圈不虚构第二外供能源；按实测工程覆盖归属真实耦合推进导向供应。磁体持续电流不使冷却控制推进待命零能。记真实低温容器冷机电、氦等冷媒初充补充库存循环再凝回收转移、实测放损去向维护阶段。不把循环氦每次算新供；设备制造已含初充不重加。真实无液氦等配置保独立有据冷却耗材生命周期义务，无通用耗氦或搬速度温度效率。技术演示未来项目页不证已完成公共城际商业服务；真实供应须符合参考。 真实低温容器原始初充若独立建模且未含整机制造或供应覆盖，属于长期初始库存交付阶段：真实原生初充质量乘研究兼容同资产作业/正完整寿命全用户作业，再除N，并闭合初始库存留存及最终回收去向。不得把全部初充作为当期维护消耗。真实运行补充按当期库存使用去向及因果用户份额归属，再除N。留存纯转移循环再凝不是消耗或新采购。供应资产台账中明确区分阶段。 | cp_operation;cp_mechanism;cp_maintenance;cp_assets |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | all inventory rows | 核实唯一的真实产品输出参考行、1 Item(s)、N > 0，以及双语相同的旅客组/期间和必需限定信息。核对人员、车票、通票和区间计数；不得无依据把座位、列车发车或换乘次数改为产出。 |  |
| validate_closure | all inventory rows | 核对实际作业及能量/燃料/水/材料库存、区间人数、所有使用者分配份额及完整寿命资产作业。取消/空驶运行可能有负荷但无已完成产出。缺失数据、未测输出或不明去向不能变成合成残差或零。 |  |
| validate_scope | all inventory rows | 检查供应商/前景/上游仅覆盖一次、内部转移与实际输出、再生电力总/净核算互斥、燃烧来源/物种/介质、kg N2O 与 kg N、实际废水/废物交接点。完整服务结果形成前必须展开实际未解决项目。 |  |
| validate_comparability | all inventory rows | 仅比较铁路服务、起讫点、距离、席别、期间、地理、能源/资产边界及质量均兼容的结果。披露分配和寿命/作业不确定性及实际数据代表性；不授权任何通用强度、上座率、乘运距离或资产寿命。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | 仅在全部真实原生身份数量物理分支供应覆盖去向功能复核完成后作secondary_dataset或background_dataset |
| allowed_use | 真实64210公共城际完成旅客区段，非相邻城不论距离等级，全部真实原生机构及完整适用依据 |
| excluded_use | 城市64111寝卧餐饮最终功能等改名；通用票距等级因子；真实机构附属供应生命周期未解缺口 |
| required_metadata | origin_destination_city_noncontiguity; public_availability; actual_operation_arrangement_and_timetable_if_supplied; actual_support_propulsion_mechanism; service_type; origin; destination; actual_segment_distance; completed_person_leg_definition; N; train_service_and_configuration; class_and_quality; timetable_and_period; actual_energy_state_and_supplier; empty_and_cancelled_duty; accompanying_loads_and_coproducts; station_depot_provider_coverage; asset_lifetime_and_duty; geography_and_border_scope; direct_emission_medium |
| required_quality_disclosure | 实际身份与必需缺口；N 和距离质量；分配/所有使用者范围；供应商及资本寿命；再生电力核算；因子适用性；实测与预测资产作业 |
| update_trigger | 路线、运行图、动力、席别/载荷分布、供应商覆盖、资产/寿命、来源/介质/去向、分配或参考服务定义变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-passenger-rail-2025 | official_guidance | United Nations Statistics Division, CPC Ver.3.0 Explanatory Notes,30 June2025, printed/PDF pp358–362; subclasses64111 and64210. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 真实64210非相邻城市公共不论距离等级及伴随物功能；明确64111城市寝卧63290餐饮63310接口。不规定Count单位归一附属分配或详细物理算法。 |
| eurostat-rail-manual-2025 | official_guidance | Eurostat, Reference Manual on Rail Transport Statistics, version12.0, April2025, pp30–31. https://ec.europa.eu/eurostat/documents/29567/3217334/Reference%2BManual%2Bon%2BRail%2B%2Btransport%2Bstatistics%2C%2BVer%2B12.pdf | 区分旅客计数、旅客距离与列车距离；国家统计地域截断不是本 PCR 边界，实际服务区段定义及归属由此处声明。 |
| ipcc-mobile-combustion-rail | official_guidance | IPCC,2006 Guidelines for National Greenhouse Gas Inventories,Vol2,Ch3,§3.4 pp3.39–3.46. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf | 铁路牵引/燃料及直接气体的活动/技术区别；发电负荷与列车燃烧分开。不采用默认数值因子或历史老化率。 |
| ghg-product-standard-2011 | standard | WRI/WBCSD,Product Life Cycle Accounting and Reporting Standard,2011,chapters7 and9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 边界透明与细分/物理分配层级。资本纳入是本 PCR 的明确扩展选择，不是该温室气体标准强加的要求；不采用通用铁路分配比例。 |
| hitachi-urban-monorail-2005 | handbook | Hitachi Review54(4),2005,China’s First Urban Monorail System in Chongqing,pp193–197,especially bogies/electricalequipment p196. https://www.hitachi.com/ICSFiles/afieldfile/2005/12/26/r2005_04_107.pdf | 仅历史单轨运行导向辅助胎氮梁电接口；不搬胎数压力运力效率磨寿通因子。 |
| jametro-linear-mechanism | handbook | Japan Subway Association,How does a linear motor car work?,actual primary technical page read2026-10-21. https://www.jametro.or.jp/tips/linear/how-linear-motor-works/ | 仅轮支直线线圈反应板推进制动区别，不作通用悬浮假设能因子。 |
| aichi-linimo-2019 | official_guidance | Aichi Prefecture,TobuKyuryoLine(Linimo),actual page dated21May2019 read2026-10-21. https://www.pref.aichi.jp/soshiki/kotsu/0000006670.html | 仅真实常导悬浮直线推进静止悬浮及基础设施接口；不取速隙容频维修零数值因子。已读完整原始网页内容，原生HTML未获。 |
| sytral-rack-metro-2026 | official_guidance | SYTRAL Mobilités,Le métro C:unique au monde!,28July2026,actual operator article. https://magazine.sytral.fr/le-metro-c-unique-au-monde/ | 仅真实齿轨地铁清洗更新测试作业；不取唯一性坡度停运时数值因子。前身缆车历史不改实际齿驱功能。 |
| jr-scmaglev-native | handbook | JR Central,SCMAGLEV principles/FAQ/Yamanashi development,actual primary pages read2026-10-22. https://scmaglev.jr-central-global.com/about/ ; https://scmaglev.jr-central-global.com/faq/ ; https://scmaglev.jr-central-global.com/maglevline/about/ | 条件超导推进导向低温循环低速接触接口；技术测试项目背景，不证当前已完商业服务。不取广告速高温功率耗氦百分比数因子，不推全部设计零能零氦。 |
