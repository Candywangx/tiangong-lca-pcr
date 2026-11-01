---
pcr_id: pcr.waterborne-sightseeing-programme-service
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 水上观光行程服务

## 1. 范围与适用性

本 PCR 适用于真实参与者完成所声明水上观光行程的服务。交付功能是通过实际船舶序列、路径、停靠、观景或解说内容及所含设施实现约定游览，而不是仅从一处运到另一处。行程可为环线、起讫不同的游览，或有据选定的灵活多航段行程；同一行程的返程、换船和临时再登船不增加完成数。讲解、餐饮或其他设施仅在真实所含时强制纳入，不因案例而假设每行程都有讲解或食品。

汇总前声明固定路径或灵活选定行程的可重复分组规则、兼容质量等级及完成证据。通票有效期、售票、预约团体、船舶航次、每次登船、各物理航段、景点或动物目击、人公里均不能替代真实参与者行程数。区分约定观景机会与任何实际保证条件，不能默认野生动物出现或全部宣传景点均达成；真实未成功、中断、重试及补偿活动须留在有据因果服务池。若多次尝试共同履行一项义务，只计一次完成且保留全部负荷。

排除普通水上交通即使沿途景观优美或目的地是景点、仅售票或通行权利、仅入场、船舶与船员可用性出租，以及完整一体邮轮或多方式度假套餐。产品判断取决于真实履约功能及所含项，不以cruise营销名称、票价、时长或海陆水体任意阈值决定。CPC64133对应水上观光旅客运输功能，拟议方法关系为精确；证据或UUID缺失影响就绪而不是集合关系，不表示每项应用已有完整数据。

观光行程与普通水上交通共用真实船岸、能源、维护资产及物质去向接口，同时须完成观景停留绕航、讲解音频内容设备及所含服务责任。自营物理航段属于内部运营，不能再当外购运输投入；真实外部已完成船舶讲解食品结果只替换其原生需求及真正已含单元。全部实际推进或船体配置、船岸完整生命周期及废物物种介质要求保持，缺失真实身份、数量、质量、归属或去向须逐行补齐而不能归零。不提供通用载客率、时长、寿命、食品量、排放因子或范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.waterborne-sightseeing-programme-service |
| classification_refs | CPC3.0 64133;exact;actual waterborne sightseeing passenger programme |
| covered_products | 真实固定或灵活选定水上参与者观光行程，须有约定观景质量及真实完成证据 |
| excluded_products | 普通风景交通、仅预约或通行权利或入场、船舶船员可用性出租、完整一体邮轮或度假包 |
| representative_product | 已完成的参与者水上观光行程 |
| production_route | 真实观光行程履约；船上推进旅居及全部活动；讲解与所含设施；船岸全生命周期及去向 |
| market_state | 有真实路径质量所含项及履约证据的已完成参与者观光行程 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已完成的参与者水上观光行程 |
| How much | 1 个真实已完成参与者水上观光行程 |
| How well | 真实固定灵活分组、约定观景或保证质量、路径船舶停靠水体、所含讲解设施及履约证据 |
| How long or cycle | 声明行程开始至履约完成，含全部内部航段及尝试；供应期间与资产寿命另列 |
| reference_flow_link | completed_sightseeing_programme |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已完成的参与者水上观光行程 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | programme_id;actual sightseeing_function_not_ordinary_transport_cruise_or_access;fixed_or_flexible_grouping_rule;compatible_quality;viewing_opportunity_or_actual_guarantee;actual_participant_completion;attempt_retry_obligation;actual_itinerary_waterbody_boats_calls_transfers_reboarding;actual_duration_distance;included_or_sold_narration_audio_content_device_map_food_amenities_admission;guide_crew_role;period;viewing_loiter_detour_approach_empty_failed_compensatory_duties;fuel_grade_blend_carbon;external_AC_DC_native_gates_losses;programme_leg_provider_cells;all_function_shares;ship_shore_support_useful_life;actual_waste_species_media_known_subcompartments |

必需限定信息须在数据包元数据、过程说明、参考流备注或等效字段声明，缺失即参考定义不完整。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | completed_sightseeing_programme | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | N是实际完成同一声明质量分组的参与者行程数，须正值；不是票通票登船物理航段船员容量或目击。 |
| native_energy | vessel_shore_ac;vessel_shore_dc;port_ac;programme_support_ac | Energy | kWh | 外部交流、外部直流及内部转移须区分；kWh与MJ仅依有据原生换算，不推定通用燃料热值。 |
| native_asset | sightseeing_vessel_manufacture | Number of items | Item(s) | 原生交付制造数量乘同资产兼容寿命份额；不得改称完整生命周期服务或用船舶质量代替数量。 |
| native_material_species | marine_distillate;collected_bilgewater;held_blackwater;exhaust_n2o | Mass | kg | 保留实际燃料、混合物、水分、分子及碳氮基准；湿干或质量体积换算须有真实兼容支持。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实行程约定履约、船岸讲解设施记录及有据供应交接点 |
| starting_condition_role | 明确责任接口，不是船舶或上游历史为零的起点 |
| product_classification_scope | CPC64133真实水上观光旅客运输功能，拟议精确；无默认讲解环线时长或动物保证，证据缺失只影响就绪 |
| recursive_input_rule | 仅在真实移交且身份原生量覆盖核实后链接具体已完成外部子服务；自营内部航段不是外购，不增加最终行程产出 |
| upstream_dataset_requirement | 核实每真实燃料、能源、材料、资产及处理服务的原生交接点、阶段、数量、质量与供应覆盖 |
| disclosure | 真实行程功能固定灵活分组质量尝试、路径水体船舶、所含服务、全部活动覆盖生命周期分配及物种介质未解证据 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| programme_start | programme_delivery | 纳入自有据开始至完成的真实约定观景或解说行程、全部船舶航段停靠换乘及所含讲解设施。同船再登船、返程及供应子活动位于声明行程内部，不增加最终产出。普通风景交通、预约或通票权利或仅景点入场不是本履约产品。 | un-cpc3-2025,circleline-programme,citycruises-programme |
| duty_pool | vessel_operation;port_support | 在有据服务池内纳入相关操纵、等待、泊港旅居、空载或调位、充电、维护或试验及失败或中断活动。没有完成旅客不等于负荷为零，须保留期间或旅客组因果归属。 |  |
| provider_cells | all_processes | 采用按供应方、船舶、航次、港口、阶段及期间划分的覆盖台账。使用兼容已完成供应结果加仅未覆盖组织负荷，或自营物理投入并连接未覆盖外部阶段。供应结果已含的燃料供应、使用阶段释放、船舶制造或废物处理须准确替换对应前景单元，不能并计；缺口须强制扩展。 |  |
| capital_complete | vessel_lifecycle;port_support | 本 PCR 明确要求相关船舶及岸上资产制造、原装和更换设备、维护、坞修、充电或系泊或码头或航站资产及退役和寿终处理。寿命分配前核实实际交付点及覆盖。仅制造船舶身份不包含其他阶段，不能虚构全寿命服务或通用寿命。 | ghg-product-2011 |
| chemical_fates | vessel_operation;onboard_residues | 实际燃料、润滑油、制冷剂、冷却、清洗及涂层的供应、库存、使用、回收与去向须分开。逐项评估真实舱底水、黑灰水、洗涤塔水或污泥、压载进排水或沉积物、垃圾、防污剂浸出及船体清洗残余物。须识别实际物种、接收淡水或海水或土壤或空气及子区室；废物移交与直接环境释放是不同交换。 | imo-pollution |
| crew_and_inclusions | programme_delivery;vessel_operation | 工作船员属于运营支持，不是旅客产出。纳入实际相关船员住宿、卫生及运营方提供餐食或支持和所含旅客设施。普通离岗个人维生作为本 PCR 明示选择予以排除，并为比较披露；不因此删除船上运营供给或假设零排放。实际单独运输的离岗旅客须有旅客身份依据。 |  |
| architecture_duties | vessel_operation;vessel_lifecycle;port_support | 凭船舶证据选择实际排水、水翼或气垫结构。水翼须纳入排水、转换及翼航期间、水翼控制或执行器、实际水翼或支柱修理及材料。气垫须纳入升力风机和推进能量、充气或卸气或怠速、岸滩进出及实际围裙磨损、更换和残余物，不能遗漏升力用能或假设仅推进螺旋桨燃料谱。整船原装部件替换对应部件制造单元。实际风机或螺旋桨空气运动属于内部物理运行，不能虚构污染物流。实际拖曳或缆绳渡轮须采集拖船服务或物理活动、缆绳或导向磨损、岸上驱动机构、真实外部能源及各责任方供应边界，不得假设船上推进。自营物理活动或已完成具体拖曳或岸上结果须准确替换已含单元一次。其他结构或化学能源路线须有据具体完成与复核，不能假设通用效率。 | hydrofoil-case,hovercraft-architecture |
| fixed_flexible_quality | programme_delivery | 归一化前定义真实固定路径或灵活选定行程、兼容质量等级、观景机会与任何保证履约的区别、讲解范围及完成证据。灵活通票须有观测行程航段人次记录及声明可重复分组规则，不能每票每日或每次登船当一行程，也不能事后选择最短路径。未知已完成单位阻断完成使用。野生动物出现、天气能见度及全部宣传景点不能默认作为保证产出。 | citycruises-programme,captaincook-programme |
| tour_and_supplier_ownership | all_processes | 兼容已完成外部船舶讲解食品结果仅替换真实原生需求及已含阶段单元，再补未覆盖组织、讲解、岸上或设施责任。自营船舶航段为内部物理运营，不是另一外购运输结果。行程至航段至船舶供应覆盖须闭合，不能完整运输结果加同一燃料资产释放重复计入。真实观景绕航、减速停留拍照野生动物接近、空载调位等待失败及补偿活动按真实责任纳入。 |  |
| included_extras | programme_delivery;programme_support;vessel_operation;port_support | 真实所含解说、讲解音频内容、必要设备网络、印刷地图、茶点或岸上活动均须在行程内完整。额外收费独立餐食酒吧入场等须按真实细分共用活动分配并有自身原生产出行。不能由cruise一词或一份茶点推断完整一体邮轮，整体邮轮或度假功能是不同产品。受雇船员讲解工作为支持，不是参与者产出或虚构外购劳务燃料。 | circleline-programme,citycruises-programme,captaincook-programme |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| programme_delivery | 观光行程履约 | required | 真实已完成固定灵活水上观光行程 | reference_process | completed_sightseeing_programme |
| vessel_operation | 船舶推进、升力、旅居及消耗品 | conditional | 真实自营或未覆盖船上责任 | support_process | completed_sightseeing_programme |
| onboard_residues | 船上残余物及直接去向管理 | conditional | 真实产生、贮存、处理或释放 | support_process | completed_sightseeing_programme |
| port_support | 港口、岸上及组织支持 | required | 全部真实相关且未覆盖港口岸上组织单元 | support_process | completed_sightseeing_programme |
| vessel_lifecycle | 船舶制造及其余生命周期 | required | 实际相关原生船舶或部件供应及未覆盖阶段 | support_process | completed_sightseeing_programme |
| programme_support | 讲解解说及行程支持 | conditional | 真实所含相关且未被船舶港口或供应单元覆盖的行程支持 | support_process | completed_sightseeing_programme |

所有节点共享最终参与者观光行程参考，内部航段或条件节点不能再造额外产出。各卡仅在真实发生且未由供应方覆盖时采用；其他实际流依第8节强制逐行扩展。

### 过程：观光行程履约 (`programme_delivery`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的参与者水上观光行程 (`completed_sightseeing_programme`)

一名真实参与者依有据履约或质量规则，完成所声明固定或灵活水上观光行程。声明观景或解说功能、路径、真实船舶序列及停靠、登船至行程结束边界和所含讲解或音频或设施。行程可为环线、起讫不同的游览或有据选定多航段行程。票、通票、团体、船舶移动、临时再登船、每个物理航段及野生动物或景点目击均不增加已完成行程。

- 选定流: 已完成的参与者水上观光行程
- 流属性/单位: Count / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_programme`
- 来源: `un-cpc3-2025`, `circleline-programme`, `citycruises-programme`

##### 废物流

##### 基本流

### 过程：船舶推进、升力、旅居及消耗品 (`vessel_operation`)

#### 输入

##### 产品流

###### 加注交接点的船用馏分柴油 (`marine_distillate`)

仅用于在船上处理前实际供应给船舶且有据的船用馏分柴油；保留牌号、规格、混配、碳源、供应交接点及库存。通用道路柴油身份不足以证明匹配。其他残渣油、润滑油及化学燃料须独立身份。采用一项完整交付混合燃料加组分或碳源台账，或以组分供应替换相应完整混合燃料及上游覆盖，并闭合质量、原生量及供应方责任；不能两者并计。

- 选定流: 加注交接点的船用馏分柴油
- 流属性/单位: Mass / kg
- 数量规则: 由库存、使用及去向平衡确定的归属实际加注供应 kg/N；cp_operation。供应、消耗、燃烧、泄漏、回收及保留库存须区分，采购量未经核对不得直接视为燃烧活动量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_operation`
- 来源: `imo-fuel-lca-2024`, `iso8217-abstract`

###### 交流电 (`vessel_shore_ac`)

仅用于在兼容且有据的使用点岸电接头实际从外部输入，并用于相关船舶推进、电池充电或旅居负荷的交流电。核实电压、供应方及上游电缆、充电器或储能损失。内部直流母线、电机输出、电池放电及再生能量是内部转移，不是本外部供应。实际仅直流外供须独立核实原生身份，不能改称交流电。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: Energy / kWh
- 数量规则: 同一计量交流交接点的归属外部毛输入 kWh/N；cp_operation。交接点上下游损失分开核对，不重复计入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_operation`
- 来源: `imo-fuel-lca-2024`, `damen-ferry-cases`

###### 自来水 (`vessel_tap_water`)

用于相关船上卫生、清洗及所含旅客或船员服务的实际兼容自来水。环境取水、海水淡化水及包装饮料是不同供应。记录船上水箱期初期末库存、产生、使用及去向；不能将供应量等同废水排放量。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: Volume / m3
- 数量规则: 库存核对后的归属实际供应 m3/N；cp_operation。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_operation`

###### 洗涤剂 (`vessel_detergent`)

仅用于相关船上清洗在使用前实际供应的兼容洗涤剂混合物，须核实组分或配方及供应方覆盖。消毒剂、防污涂料、洗涤塔试剂、溶剂及单项化学物质不能自动视为本洗涤剂，其实际残余物及排放须有独立识别路径。

- 选定流: 洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位: Mass / kg
- 数量规则: 库存闭合后的归属实际原生供应 kg/N；cp_operation。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_operation`

###### 船舶充电入口的直流电 (`vessel_shore_dc`)

仅用于在实测船舶充电入口实际外部交付的直流电，须与充电器上游交流供应交接点区分。核实转换、储能、电缆损失及供应方范围。实际链只表示一次：含上游交流的已完成直流供应替换同一交流供应；若自营上游交流和充电器，则下游直流为内部转移，不能两者均作采购能量。内部直流主母线本身不能证明外部直流供应。

- 选定流: 船舶充电入口的直流电
- 流属性/单位: Energy / kWh
- 数量规则: 已核实外部直流入口的归属实际毛输入 kWh/N；cp_operation，与同链上游交流表示互斥。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_operation`
- 来源: `hydrofoil-case`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 二氧化碳（化石源） (`exhaust_fossil_co2`)

仅用于相关船上燃烧向空气实际排放的本化学物种；在适用时保留化石或生物碳源、发动机、负荷、后处理及实际接收子区室。所绑定身份是未指定空气，仅在有据报告范围允许未指定空气时采用；已知城市、非城市或具体空气子区室须独立核实原生身份或强制替换行。不得假设为零或采用通用船用因子。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实际监测或独立有据且发动机、燃料、负荷兼容模型得到的归属物种 kg/N；cp_air。采用实际燃烧活动及分子基准，不能将 kg C 或 kg N 改名为分子质量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_air`
- 来源: `imo-fuel-lca-2024`

###### 二氧化碳（生物源） (`exhaust_biogenic_co2`)

仅用于相关船上燃烧向空气实际排放的本化学物种；在适用时保留化石或生物碳源、发动机、负荷、后处理及实际接收子区室。所绑定身份是未指定空气，仅在有据报告范围允许未指定空气时采用；已知城市、非城市或具体空气子区室须独立核实原生身份或强制替换行。不得假设为零或采用通用船用因子。

- 选定流: 二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实际监测或独立有据且发动机、燃料、负荷兼容模型得到的归属物种 kg/N；cp_air。采用实际燃烧活动及分子基准，不能将 kg C 或 kg N 改名为分子质量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_air`
- 来源: `imo-fuel-lca-2024`

###### 甲烷 (化石源) (`exhaust_fossil_ch4`)

仅用于相关船上燃烧向空气实际排放的本化学物种；在适用时保留化石或生物碳源、发动机、负荷、后处理及实际接收子区室。所绑定身份是未指定空气，仅在有据报告范围允许未指定空气时采用；已知城市、非城市或具体空气子区室须独立核实原生身份或强制替换行。不得假设为零或采用通用船用因子。

- 选定流: 甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实际监测或独立有据且发动机、燃料、负荷兼容模型得到的归属物种 kg/N；cp_air。采用实际燃烧活动及分子基准，不能将 kg C 或 kg N 改名为分子质量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_air`
- 来源: `imo-fuel-lca-2024`

###### 一氧化二氮 (`exhaust_n2o`)

仅用于相关船上燃烧向空气实际排放的本化学物种；在适用时保留化石或生物碳源、发动机、负荷、后处理及实际接收子区室。所绑定身份是未指定空气，仅在有据报告范围允许未指定空气时采用；已知城市、非城市或具体空气子区室须独立核实原生身份或强制替换行。不得假设为零或采用通用船用因子。

- 选定流: 一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实际监测或独立有据且发动机、燃料、负荷兼容模型得到的归属物种 kg/N；cp_air。采用实际燃烧活动及分子基准，不能将 kg C 或 kg N 改名为分子质量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_air`
- 来源: `imo-fuel-lca-2024`

###### HFC-134a (`refrigerant_hfc134a`)

仅用于相关船上制冷或空调实际释放的 HFC-134a（CAS811-97-2），是排放物质，不是新制冷剂产品或混合冷却剂。所绑定未指定空气身份须有据适用；已知子区室须核实替换身份。平台本记录没有中文 baseName，因此保留正式原名。

- 选定流: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 通过充注、补充、回收、库存、设备平衡或监测确定的归属实际释放 kg/N；cp_air。采购或补充量不自动等于泄漏量，上游新制冷剂及回收废物须另列。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_air`
- 来源: `imo-fuel-lca-2024`

### 过程：船上残余物及直接去向管理 (`onboard_residues`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废润滑油 (`vessel_used_oil`)

仅用于在处理前产生并独立收集、符合原生废物交接点及组分的实际石油或合成废润滑油。舱底含油水、含油吸附物、燃油油泥及混合清洗液须为独立流。实际运输或处理服务及其覆盖负荷须完成一次，不能由废物身份推断。

- 选定流: 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位: Mass / kg
- 数量规则: 产生点归属实际废物 kg（扣容器皮重）/N；cp_residues。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residues`
- 来源: `imo-pollution`

###### 接收移交点的已收集机舱含油舱底水 (`collected_bilgewater`)

仅用于以废物状态移交、实际已收集的机舱含油舱底水混合物，须有实测水、油及固体组分和湿质量基准。不是新燃料、纯废润滑油、货舱清洗水、分离油泥、压载水或直接排海。处理或接收边界及已发生船上分离须明确。

- 选定流: 接收移交点的已收集机舱含油舱底水
- 流属性/单位: Mass / kg
- 数量规则: 归属实际移交湿 kg（扣容器皮重）/N；cp_residues。产生、船上处理、储存、回用、释放及移交须分开闭合，接收方处理部分不能再作为未经处理直接排放计入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residues`
- 来源: `imo-pollution`

###### 接收移交点的已收集船上厕所黑水 (`held_blackwater`)

仅用于接收移交点以废物状态单独贮存的实际厕所污水混合物，须有水和固体基准及组分。灰水、黑灰混合水、洗涤塔水及压载水须独立身份。若实际发生船上处理或直接排放，须采集各自投入、残余物及物种和接收水体；没有本移交不能取消该义务。

- 选定流: 接收移交点的已收集船上厕所黑水
- 流属性/单位: Mass / kg
- 数量规则: 归属实际移交湿 kg/N；cp_residues。核对水箱库存、卫生用水、实际污水产生及全部独立去向，不以供水量假设排放量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residues`
- 来源: `imo-pollution`

###### 塑料包装废物 (`vessel_plastic_packaging`)

仅用于处理前实际独立收集且组分兼容的塑料包装废物，不是全部船舶垃圾、复合包装、食物污染混合物或焚烧服务。说明聚合物、污染及实际接收方；其他未表示混合物须独立列行。

- 选定流: 塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位: Mass / kg
- 数量规则: 归属实际净废物 kg/N；cp_residues。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residues`
- 来源: `imo-pollution`

##### 基本流

### 过程：港口、岸上及组织支持 (`port_support`)

#### 输入

##### 产品流

###### 交流电 (`port_ac`)

用于相关登船坡道、码头、预约或控制、照明及岸上设备在使用点实际输入的兼容交流电，不含已计量 vessel_shore_ac 或供应方已含电力。岸上储能或充电器损失归实际交接点责任方，不能将同一采购既分给港口又分给船舶。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: Energy / kWh
- 数量规则: 归属实际港口毛输入 kWh/N；cp_port。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_port`
- 来源: `damen-ferry-cases`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：船舶制造及其余生命周期 (`vessel_lifecycle`)

#### 输入

##### 产品流

###### 制造交接点的完整排水型客运观光游览船 (`sightseeing_vessel_manufacture`)

仅用于在制造交接点实际交付的完整排水型客运观光船，须核实真实船体、驱动、观景甲板或舷窗、空调、原装设备或电池及配件覆盖。本行为制造船舶，不是观光、船舶出租或全寿命服务。改装历史船或其他真实配置须有自身原生身份及实际修复改装负荷，不能仅因用途改变而改名复用渡轮UUID。原装设备及后续更换须互斥。

- 选定流: 制造交接点的完整排水型客运观光游览船
- 流属性/单位: Count / Item(s)
- 数量规则: 实际原生制造交付 Item(s) 乘同船或队列归属兼容活动量/有据全使用者有效寿命总活动量，再除 N；cp_vessel_life。缺失交付、修复改装、维护、坞修、更换及退役须分别完成一次，船龄本身不代表零负荷。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_vessel_life`
- 来源: `circleline-fleet`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：讲解解说及行程支持 (`programme_support`)

#### 输入

##### 产品流

###### 已完成的外部供应船上现场观光讲解行程服务 (`external_live_narration`)

仅用于实际外部移交、针对一个有据船舶或行程场次已完成的船上现场讲解服务，须有真实语言、内容、时长、质量及供应方覆盖。不是旅客数量、工资、导游小时或全部讲解活动集合。受雇船长或讲解员的自营工作属于内部活动，不是本外购服务。录音、内容许可及设备在需要时须有各自真实身份。

- 选定流: 已完成的外部供应船上现场观光讲解行程服务
- 流属性/单位: Count / Item(s)
- 数量规则: 实际原生供应已完成场次数乘其真实使用者或功能间有据归属份额/N；cp_support。一场船舶服务可服务多人，不能为每人重复采购完整供应场次，或重复供应方已含讲解出行、设备或能源。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support`
- 来源: `circleline-programme`, `citycruises-programme`

###### 各种地图和海图，包括地图册、挂图、地形图和平面球体，非书籍形式的印刷品 (`printed_route_map`)

仅用于观光行程实际供应的已印制纸质路线或讲解地图，须有真实纸张、油墨、表面加工、净质量、印制及交付覆盖。不是通用地图应用、塑料板或全部宣传材料集合。采用已完成地图供应，或以真实纸张、油墨及印制投入替换其准确覆盖，不能并计。保留重用件及参与者带走地图须明确真实库存及下游去向责任。 本身份限于在制造工厂交接的实际兼容非书籍形式地理纸质地图成品，须核实真实纸张油墨表面加工及供应覆盖。普通宣传单或纯文字说明书不是本地理地图。须桥接真实供应或接收交接点与制造工厂交接点，并分别纳入该点之后的交付及每项未含阶段。书籍产品、数字地图、复合材料或其他形式须有自身核实身份或强制扩展，不将全部印刷品类别通用绑定。

- 选定流: 各种地图和海图，包括地图册、挂图、地形图和平面球体，非书籍形式的印刷品 `ffbb7718-2cb6-4962-8dd4-93ef71ac9e0c`
- 流属性/单位: Mass / kg
- 数量规则: 库存或重用核对后的归属实际供应或消耗印刷地图净 kg/N；cp_support。不得假设每票地图数或地图质量，供应方原生属性交接点须匹配真实对象。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support`
- 来源: `captaincook-programme`

###### 交流电 (`programme_support_ac`)

仅用于有独立记录的行程支持使用点实际兼容外部交流输入，包括相关讲解或内容准备、预约管理及自营音频设备支持。排除已计船舶或港口计量及供应方已含电力，船上广播由船舶旅居计量供电时仅在那里计一次。必要用户设备或网络活动须有自身有据范围及责任，不能假设通用手机因子。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: Energy / kWh
- 数量规则: 归属实际支持毛输入 kWh/N；cp_support，与vessel_shore_ac、port_ac及供应已含单元互斥。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废纸（未指定） (`programme_waste_paper`)

仅用于行程地图或印制支持实际产生并在处理前独立收集的纸质废物，须有兼容纸张、表面加工、污染及真实接收方。不是全部观光垃圾、塑料覆膜复合物或纸回收服务。参与者带走地图不能同时作为本场内废物，其实际去向仍须另行负责。

- 选定流: 废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位: Mass / kg
- 数量规则: 归属实际净废物 kg/N；cp_support。核对地图库存、重用、发放及独立收集或其他去向，不能假设全部供纸立即成为场内废物。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| subdivide_then_allocate | all_processes | 在真实计量允许时先拆分专属旅客、独立出售车辆或甲板或货物及其他服务。剩余共用推进、旅居、港口及资本负荷按有据物理关系及兼容全使用者活动量分配；无法建立物理关系时论证替代方案与敏感性。票价或票款不是物理分配依据。 | ghg-product-2011 |
| accompanying_bundle | programme_delivery | 披露车辆、行李、动物、舱室及其他包含项是实际声明观光行程组合的一部分还是独立出售产出。随行物件及其中旅客不得重复计数，含车内旅客的实际人数仅计一次。不规定通用车人、重量、甲板面积或票款等值。独立货运不能作为免费随行项消失。每项独立出售的货物、车辆甲板或其他产品须有自身实际原子产出行、原生数量及第8节全部扩展字段，不得强行并入参与者行程Count参考。 |  |
| segment_person_closure | programme_delivery;vessel_operation | 采用真实行程完成，并保留船上区间人数、距离及资源使用。停靠航段再登船换船不为同一行程重复产生完成。真实共用物理区间须在真实行程旅客组及其他服务间归属；已按人次表达的供应结果不能再除载客率。 |  |
| native_supply_life | vessel_lifecycle;port_support | 每项实际交付资产或队列，使用原生制造数量乘归属同资产兼容活动量/有据全使用者有效寿命总活动量，再除 N。活动量可为有据小时、航次或其他兼容物理使用，它是分配而非新流身份。须支持全使用者分母、二手或改装历史及预测不确定性。当期燃料或使用排放不能再以寿命活动量摊薄。 |  |
| no_mixed_denominator | all_processes | 旅客数量、人距离、车辆数、占用面积时间及货物吨距离是不同量，不能相加。只有量纲、观测及敏感性明确的有据工程或资源模型可关联产出。N=0 时无有限参考强度，须保留并解决因果活动池，不能将分子归零。 |  |
| recovery_and_export | all_processes | 回收材料或能量须按有据废物或产品状态、接收方及分配处理。内部电池放电、再生能量、循环水等转移不是额外采购投入或避免产品抵扣。真实外供须有独立原生交接点、实际数量及披露分配，不能冲减不兼容输入。 |  |
| programme_not_leg | programme_delivery;all_processes | 归属完整行程负荷仅按真实已完成且兼容的参与者行程 N 归一化一次，不能按每次登船航段通票销售景点或目击归一化。不同路径质量须拆分或提供有据透明混合，不设通用完成使用分布。多人共用讲解或船舶场次按真实全使用者资源活动证据分配，不能为每参与者各买一次。 |  |
| performance_retry_pool | programme_delivery;all_processes | 声明完成是约定观景机会还是兑现保证条件。真实中断未成功重试补偿活动须归因相关旅客组而不删除。若多次尝试共同履行一项义务，仅计该完成义务一次；若真实另行交付独立已完成行程，须记录自身兼容功能及归属。免费或补票不决定物理零负荷或新增履约单位。N=0仍无有限参考强度。 |  |
| all_function_lifecycle | all_processes | 真实普通运输观光活动包租食品入场货运及私人其他船舶用途须先细分，其余共用船体推进、观景讲解岸上设备和生命周期份额须有据。观光慢航及观景时间是真实活动，不假设平均运输速度。历史改装船仍须明确制造修复改装维护退役及有据全使用者寿命，不能因船龄或旅游名称归零。 | circleline-fleet |

## 8. 前景数据采集、计算与质量规则

以下完成、归属、闭合和计算规则是本PCR明确设计的方法；来源仅支持第11节所列实际分类或物理背景。没有声称IMO、ISO、制造商或BTS规定这些人次或寿命公式。缺少通用数值范围不免除真实数据采集，未完成项阻断对应已完成数据包使用。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_programme | programme_delivery | 真实已完成固定灵活参与者行程及闭合船舶供应台账 | actual_record | 行程标识；合同功能；固定或灵活；选定路径规则；质量等级；观景机会或保证；真实履约；参与者标识；预约通票标识；真实船舶航段停靠换乘；真实登船再登船；真实时长距离；所含讲解音频设施；完成；尝试重试义务；独立产出；期间；供应单元 | 采集真实合同或行程及参与者履约记录，不只销售或登船。声明可重复固定灵活分组及真实路径履约质量，连接每项船舶航段讲解设施和责任。保留未成功中断重试及独立完成义务，观测通票使用而不假设次数或动物出现。内部航段换乘间参与者行程完成仅计一次。 汇总算法：N=声明旅客组真实已完成且兼容参与者行程义务之和。共同履行一义务的多次尝试计全部活动但一次完成，独立交付行程保留自身兼容归属。须N>0，不能以票通票登船航段目击代替。 | Item(s);kg;tonne-km;km;hour | 真实事件及期间核对 | 相同服务期间及有据生命周期接口 | 真实约定水上观光行程及全部相关物理供应尝试活动 | 每声明的参考流 | 原始记录、原生身份、覆盖及全使用者闭合、不确定性 |
| cp_operation | vessel_operation | 真实能源、水及消耗品供应和全部活动 | actual_record | 船舶；结构；发动机或电机；升力推进水翼控制；运行模式期间；拖曳缆绳岸上驱动责任；燃料牌号；混配；碳源；期初库存；接收；期末库存；燃烧；泄漏；回收；岸电交流或直流交接点；毛输入；转换损失；电池荷电量；水库存；其他供应；供应方单元；全使用者份额；行程航段关联；观景停留拍照野生动物接近；失败重试活动；其他共船功能 | 取得加注、计量、水箱及活动记录和真实测量配置。核对航行、旅居、空载、失败、充电及结构特定升力、模式转换和岸滩进出。逐一识别实际燃料、水、化学品及供应能源交接点，区分供应、燃烧、损失、回收和库存。完整混合燃料加组分台账或替换组分供应须闭合质量与供应方责任，不能并计。核对交流或直流充电边界、储能与充电器损失；内部电池放电或再生不是新增外供。 记录真实观光绕航慢行停留接近及行程航段尝试关联，普通运输平均不是默认观光活动。真实其他推进锅炉岸上或非机动配置须有自身投入活动接口证据，不能强行采用船用馏分油或因无燃料行就假设生命周期为零。 汇总算法：每实际原生期间数量 Q 按兼容活动或全使用者份额 a 归属旅客组，仅计算一次 sum(Q*a)/N。燃料活动为核对后的燃烧质量，不是未经核对采购量；外部能源交接点互斥选择。 | kg;kWh;m3;hour | 真实事件及期间核对 | 相同服务期间及有据生命周期接口 | 自营或未覆盖船上供应及真实全使用者活动 | 每声明的参考流 | 原始记录、原生身份、覆盖及全使用者闭合、不确定性 |
| cp_air | vessel_operation | 实际独立识别空气物种 | actual_record | 船舶；燃料；碳源；发动机；负荷；后处理；活动；燃烧活动；监测或模型；因子基准；来源范围；物种质量；空气子区室；制冷剂充注；补充；回收；库存；供应方单元；不确定性 | 采集实际物种监测，或燃料、发动机、负荷、模式兼容且独立有据的模型，包括真实升力、推进及旅居发电机。区分化学、碳、氮基准及接收区室。燃料生命周期仅温室气体范围不能删除其他实际物种。确定每种制冷剂真实充注回收平衡；按需要独立扩展实际 NO、NO2、SO2、CO、NMVOC组分、粒径、生物源CH4及其他释放，不能用一项 NOx 或 SOx 收集标签作身份。 汇总算法：按匹配活动份额将实际分子或物种质量归属旅客组，仅除 N 一次。模型 q=sum(兼容燃烧活动*有据物种因子)，保留真实因子单位、换算及不确定性；不提供通用因子。 | kg | 真实事件及期间核对 | 相同服务期间及有据生命周期接口 | 自营或未覆盖且位于真实子区室的实际空气释放 | 每声明的参考流 | 原始记录、原生身份、覆盖及全使用者闭合、不确定性 |
| cp_residues | onboard_residues | 实际独立识别废物及水或材料去向 | actual_record | 船舶；流标识；来源；组分；含水率；相态；质量或体积；密度基准；产生；库存；船上处理；回收；移交；接收方；运输处理覆盖；直接物种释放；接收水体子区室；压载；涂层；围裙或水翼残余物；不确定性 | 使用真实水箱、维护、用水、化学品及接收记录。舱底水、黑水、灰水、混合污水、洗涤塔水或污泥、压载进排水或沉积物、食物或其他垃圾、涂层或浸出物及围裙或水翼残余物须按真实组分和交接点分开。闭合投入或产生、库存、处理、回收、移交及释放。直接水或土壤或空气物种按真实接收介质扩展，不能将废物质量当基本物质。真实压载环境进排水须与自来水产品分开，不虚构通用使用。 汇总算法：每项实际独立湿流、干流或原生流 Q 及有据服务份额 a 计算 sum(Q*a)/N；保留含水率和密度换算证据。处理结果仅替换其已含处理或排放单元，不替换废物产生或其他流。 | kg;m3 | 真实事件及期间核对 | 相同服务期间及有据生命周期接口 | 真实船上残余物产生、贮存、处理及外部接收 | 每声明的参考流 | 原始记录、原生身份、覆盖及全使用者闭合、不确定性 |
| cp_port | port_support | 实际码头、岸上及组织供应、资产和去向 | actual_record | 港口；码头；登离船；岸滩进出；充电器或储能；计量；供应方；电压；上下游交接点；供应；废物；释放；资产；寿命；全使用者；归属活动；覆盖单元；远程组织方 | 实测或支持实际相关航站、登离船、控制、预约、系泊、充电及岸滩进出服务，包括未覆盖岸上能量损失。逐项列实际投入、废物、释放和码头、坡道、航站、充电器或储能资产及其维护和寿终处理，不能因港口而非渡轮运营方持有而遗漏。使用完整供应结果或其未覆盖物理单元，须匹配原生交接点。 汇总算法：实际原生期间流按实测或有据全使用者资源或活动份额归属，再除 N；资产制造先按同资产寿命份额再除 N。船舶岸电交流或直流链与港口采购须闭合且不重复分配。 | kg;kWh;m3;Item(s);hour | 真实事件及期间核对 | 相同服务期间及有据生命周期接口 | 真实未覆盖港口、岸上或组织责任 | 每声明的参考流 | 原始记录、原生身份、覆盖及全使用者闭合、不确定性 |
| cp_vessel_life | vessel_lifecycle | 实际原生船舶或部件制造及完整生命周期活动 | actual_record | 船舶或队列；结构；交付点；原生数量；材料；原装部件；电池；水翼或风机或围裙；已含阶段；升级；更换；坞修；有效寿命；全使用者寿命活动量；归属兼容活动量；退役；回收；不确定性；真实游览配置；观景设备；历史转换修复；全部观光运输活动功能 | 读取真实整船制造供应边界及原生单位。将船体、发动机、电机、原装电池、水翼、控制、风机或围裙覆盖与各项真实更换或维修核对。缺失上游制造、交付、维护、坞修及退役或回收须由独立定义物理投入或兼容已完成供应结果补齐。支持实际有效寿命、全功能活动历史及预测；制造结果不是全寿命服务。 核实真实观景甲板舷窗空调讲解设备及原装覆盖，修复改装历史不为免费。其他真实船型配置须独立识别，不得改名复用渡轮服务UUID。保留真实普通运输观光活动包租全使用者资产活动分母。 汇总算法：每供应单位 j，q_j=Qnative_j*(Dcohort_j/Dtotal_allusers_j)/N，分母须有据、正值且兼容；逐一独立表示缺失阶段或部件及供应方已含使用阶段的替换。期间运营数量不能再按寿命重复摊薄。 | Item(s);kg;hour;voyage | 真实事件及期间核对 | 相同服务期间及有据生命周期接口 | 同一实际船舶、部件或队列全使用者寿命及未覆盖阶段 | 每声明的参考流 | 原始记录、原生身份、覆盖及全使用者闭合、不确定性 |
| cp_support | programme_support | 真实讲解音频内容、印刷材料、自营支持能源设备及去向 | actual_record | 行程；真实现场或录音；讲解责任；员工活动；外部完成场次；语言质量时长；供应覆盖；广播设备内容；必要用户设备网络；原生材料地图；库存重用发放；计量责任；资产供应寿命；真实食品设施；其他功能；废物接收去向；不确定性 | 记录真实所含已完成讲解音频设施活动及供应交接点。外部已完成场次结果仅在真实移交时作为原子外购功能，自营员工工作为有真实支持出行培训资源的内部活动，不默认外购工资或食物作燃料。必要时核实内容广播设备网络范围及寿命份额，普通个人维生排除是明示服务边界选择并须可比性敏感性。完成印刷供应或替换纸墨印制覆盖须互斥。区分船舶港口支持计量及供应已含单元，闭合库存重用带走地图及全部废物直接去向。 汇总算法：每真实原生期间供应或已完成供应场次或资源按有据全功能旅客组份额归属，汇总归属量后仅除N一次。讲解场次资产在真实支持使用者间分摊，原生制造数量先按同资产有效寿命活动份额再除N。不假设每参与者一张地图一部手机一场讲解或一餐。 | Item(s);kg;kWh;hour | 真实事件及期间核对 | 相同服务期间及有据生命周期接口 | 真实未覆盖行程讲解材料设备设施支持及去向 | 每声明的参考流 | 原始记录、原生身份、覆盖及全使用者闭合、不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | completed_sightseeing_programme | 汇总前定义兼容行程等级G及固定灵活完成规则，N_G=依该规则完成的真实参与者义务之和。一义务由多次尝试履行时纳入全部因果活动一次且最终完成计一次，独立交付兼容行程仍须区分。自营航段换乘再登船通票有效期目击不产生N。缺行程分组质量真实完成属于不完整，须N_G>0。次级距离时长航段数保留独立实测活动，不能改名行程产出。 | actual programme definition,quality,participants,attempts and leg/provider ledger | N_G Item(s);separate measured distance/time/legs |  |
| native_flow_normalization | all_processes | q_r=sum(实际兼容原生 Q_r*a_r)/N，仅归一化一次；a 是同范围有据全使用者归属。已按已完成人次表达的 Q 仅按真实需求人数缩放，不再除载客率。自营阶段与供应单元须互斥。缺失 a、Q 或身份属于不完整，不能视为零。 | native Q;actual allocation a;N | q_r per declared reference flow |  |
| fuel_blend_ownership | marine_distillate | 每实际燃料：期初库存+接收+转入=期末库存+燃烧+非燃烧使用+泄漏+可回收流出+转出，状态须实测且兼容。内部转移仅计一次。供应数量遵循明确上游需求或库存边界，不能自动采购=燃烧。采用完整混合燃料加组分或碳源台账，或实际组分供应替换对应完整混合燃料质量及上游单元并闭合原生量和供应责任；不能重复已含生物燃料。按真实组分核对供应、燃烧、库存及去向中的化石或生物碳，能源换算须用有据真实密度及热值基准。 | bunker receipts;stocks;composition;burned;fates;provider cells | separate actual supply,burned,fates and carbon |  |
| external_energy_gate | vessel_shore_ac;vessel_shore_dc;port_ac | 每链选择实际外部交流或直流供应交接点，核对毛输入、转换或储能或电缆损失、储能变化、自营负荷与真实外供。上游交流加自营充电器使下游直流成为内部转移；已完成外部直流供应须替换对应上游交流覆盖。不能重复输入、冲减不兼容外供、将电机输出或电池放电或再生作采购供应，或从内部直流母线推断外部直流。 | external meter;AC_DC gates;losses;storage;export;coverage | exclusive native energy demand and uncovered losses |  |
| asset_share | sightseeing_vessel_manufacture;port_support;programme_support | q_j=Qnative_j*(Dcohort_j/Dtotal_allusers_j)/N，须匹配实际交付资产或队列及兼容、正值、有据寿命活动量。纳入其他使用者或功能及全部相关空载或支持活动。制造未含的维护、水翼或控制或风机或围裙或电池更换、坞修、交付及退役须单独完成一次；整船原装部件不能再采购。供应方已含运营单元须替换对应前景单元。 | Qnative_j;Dcohort_j;Dtotal_allusers_j;N;covered stages | native manufacture share plus separate missing stages |  |
| species_and_fate_closure | vessel_operation;onboard_residues | 保留每实际物质、混合物、状态、碳或氮基准、介质及已知子区室。将材料或水产生及库存与使用、船上处理、回收、废物移交及环境释放核对。kg N-N2O 不同于 kg N2O，kg C 不同于 CO2 或 CH4；仅采用有据分子或元素换算。燃料或卫生用水采购不是排放，不能将原废物混合质量当纯基本物质。回收及处理产出须有自身实际新身份及供应边界。 | actual species;chemical basis;water/material stocks;recovery;receiver;provider | separate actual substance/stream/fate quantities |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| dq_programme_completion | completed_sightseeing_programme | 必须声明真实观光履约与普通风景交通邮轮可用性入场仅预约产品区别。归一化前固定真实固定灵活行程路径质量完成分组，观测真实人数与通票使用，不能推断次数载客或保证动物出现。追踪每行程全部真实航段船舶讲解设施及重复尝试活动。所含食品饮料地图讲解须完整，独立售出产出须有自身原子产品产出行原生数量及dq_expand_operation全部字段和有效同父协议。不兼容质量须细分或有据披露混合，未知完成分组阻断完成使用。 | cp_programme;actual programme/contract,usage/participant,quality and attempt ledger |
| dq_provider | all_processes | 每真实必要阶段须有一项责任归属及有据已含或未含状态。已完成供应结果须明确产品、原生数量、边界、质量、分配及上游或直接或资本或废物覆盖；身份确定后才能输入一项具体服务行。否则保留强制物理扩展。通用全部航段或全部港口服务卡及外部数据缺失均不能闭合边界。 | row-linked provider x actual vessel/voyage/port/stage/period matrix |
| dq_expand_operation | vessel_operation | 对每实际未表示燃料、牌号、替换完整混合燃料的组分、热、冷、润滑油、制冷剂补充、水源、食品或餐饮或船员运营供给、化学品或材料及直接物质释放，必须按各身份、状态及交接点新增一项原子行。包括实际 NO、NO2、SO2、CO、NMVOC组分、粒径、生物源CH4及其他相关物种；不能因无卡而用默认因子或归零。每新增行须有唯一 row_id、既有 process_id、方向、flow_type、具体物理或物质身份、已核实UUID或诚实未解状态、原生属性单位、真实数量基准、有效同父过程CP、来源或供应覆盖、真实接收方或介质及已知子区室和不确定性。未知发生须调查，缺席须有证据。 | cp_operation;cp_air;actual meter,chemical and duty records |
| dq_expand_fates | onboard_residues | 真实舱底水、黑水、灰水、混合污水、洗涤塔水或污泥、压载进排水或沉积物、食物或其他垃圾、清洗或涂层或防污物质及浸出、围裙或水翼磨损清洗残余物及每个其他发生流，必须使用 dq_expand_operation 全部字段逐行扩展。不能为方便UUID选择真实海水、淡水、土壤或空气及子区室。处理或运输、投入、污泥及直接物种释放须独立表示且覆盖责任唯一，不能假设每船有压载或洗涤塔，也不能因无已列移交而视为无排放。法定排放限值不是本清单推断的真实浓度或许可。 | cp_residues;reception,tank,treatment and release records |
| dq_architecture | vessel_operation;vessel_lifecycle;port_support | 每真实结构必须评估：排水船体与驱动；水翼转换或翼航用能、水翼控制或执行器、材料和维修；气垫升力风机或推进、围裙充气或怠速、岸滩阶段及实际风机或围裙更换和磨损去向。每实际缺失投入、部件或释放均须使用 dq_expand_operation 字段及对应同父过程CP补行，不能将常规船因子复制到其他结构。真实拖曳或缆绳服务须按相同原子字段补每项拖曳供应或自营物理活动、缆绳导向及磨损更换、岸上机构或原生外部能源及已含未含责任，不能假设船上推进或同时计已完成拖曳及对应自营物理活动。其他化学燃料或船体须有实际完整路线证据及复核后使用；数据不足阻断对应应用，不排除观光产品或改变参考定义。 | configuration,energy mode and component maintenance records |
| dq_expand_capital_port | vessel_lifecycle;port_support | 每缺失船岸资产、部件制造、电池、水翼或控制、风机或围裙、充电器或储能、码头或航站或坡道、交付、维护、坞修及寿终处理，必须使用 dq_expand_operation 字段真实扩展。每行仅一个真实交接点及原生数量，不能聚合为资产服务集合。支持同资产全使用者活动量、原装或更换覆盖及预测；寿命或供应阶段缺失阻断完成，不能删去。实际港口或组织投入、废物及释放同样强制扩展。 | cp_vessel_life;cp_port;delivery,life,maintenance,retirement evidence |
| dq_allocation | all_processes | 核对真实旅客、随行组合、独立售出车辆或货物、其他船港使用者及服务支持。先实测细分，再论证兼容物理或其他关系及全使用者闭合。不能将 Count 与吨公里相加或规定车人等值，票价及容量不是真实资源消耗。保留不确定性及边界可比性，包括普通离岗船员维生排除。 | physical resource/engineering/area-time/duty evidence and sensitivity |
| dq_native_source | all_processes | 核实每项绑定身份原生状态、交接点、类型、属性、单位、正式名称及真实适用性。未指定空气绑定须有据允许，已知子区室须核实替换。质量体积换算须有真实兼容密度或已附原生关系。ISO公开摘要不提供牌号数值；IMO仅燃料温室气体方法不能证明整船、资本、制冷剂或其他排放完整。制造商案例不提供通用效率、容量或寿命；BTS美国普查范围不是全球服务定义。缺UUID或通用范围须披露而非虚构，实际必要数量仍强制采集。 | direct flow/property/unitgroup proof and actual source applicability |
| dq_programme_support | programme_support;programme_delivery;vessel_operation;port_support;vessel_lifecycle | 未表示现场录音讲解内容广播、必要设备网络、印刷纸墨、食品饮料设施、岸上参观、出行培训、真实观光船修复改装设备及全部废物直接释放，必须使用dq_expand_operation每字段逐行扩展。每真实已完成外部服务须一项具体功能原生数量供应交接点及准确覆盖，内部物理航段员工工作不是额外外购功能。已完成供应结果或替换自营物理单元不能并计。真实用户阶段带走地图设备寿命去向不能因位于运营方场外而删除。实际相关声学物理干扰或野生动物干预须保留物理证据原生单位及评估限制，不能虚构污染物质量动物目击产出或无据LCIA因子。未知发生范围数量仍为不完整，不能归零。 | cp_programme;cp_support;cp_operation;cp_port;cp_vessel_life;actual owner and native supply/fate records |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | completed_sightseeing_programme | 须有真实兼容已完成参与者行程、参考1Item(s)、固定灵活分组质量及全部限定和正值N。拒绝票通票团体登船航段航次目击人公里替代，保留失败补偿活动池。 |  |
| validate_coverage | all_processes | 须有唯一阶段责任和完整供应或前景覆盖，包括实际港口、旅居、结构、船岸生命周期及处理。供应已含单元准确替换自营单元，缺实际供应、去向、寿命或身份阻断已完成下游使用。 |  |
| validate_balances | all_processes | 拒绝完整混合燃料与组分重复供应、交流或直流或内部能量重复、库存燃烧质量未核对、kgN或kgC改名、污水身份混合或废物混合质量当基本排放。须有真实接收介质子区室及材料水去向闭合。 |  |
| validate_allocation | all_processes | 拒绝无据比例、容量当载客、船员当旅客、随行物件重复计数及Count加吨公里分母。核实真实全使用者或细分证据及兼容同资产寿命份额，期间数量不得再按寿命重复摊薄。 |  |
| validate_expansion | all_processes | 每实际未表示物理投入、废物、排放、部件、服务或阶段须依第8节扩展，具有唯一原生身份、数量、CP、来源及接收方。未知不等于零。每协议process_id只能一个真实过程，每行引用同父过程协议。 |  |
| validate_evidence_languages | all_processes | 须有中英文及投影实质一致、身份支持与受来源范围约束声明。候选检查通过不能解决未知UUID或数量，也不表示已发布完整清单。不得虚构船用因子、载客率、范围、寿命、排放量或零排放结论。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset，仅在全部强制身份、数量、覆盖及去向要求完成并复核后 |
| allowed_use | 用于真实声明观光行程分组质量、参与者、路径水体船舶、所含项期间及有据完整生命周期 |
| excluded_use | 普通风景交通或通票登船当行程、默认野生动物保证或通用人公里、删所含设施、纯运营温室气体当全生命周期 |
| required_metadata | 全部行程参考限定；实际完成分组质量尝试；内部航段船舶供应讲解设施；原生交接点；生命周期；物种区室与真实分配 |
| required_quality_disclosure | 未解身份数量质量完成分组、尝试通票使用、所含项与供应缺口、模型适用性寿命预测、真实区室及人员维生分配敏感性 |
| update_trigger | 行程功能质量固定灵活分组、所含项、路径船舶能源、讲解设备、供应覆盖生命周期去向及分配变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC3.0 Explanatory Notes,30June2025,PDF pp360–361,64133 and cruise/other-water exclusions. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 水上观光旅客运输功能及与普通其他水运邮轮类别区分，不规定通用讲解环线时长数量或LCA公式。 |
| imo-fuel-lca-2024 | official_guidance | IMO Resolution MEPC.391(81),22March2024,2024 marine-fuel LCA Guidelines,annex p3 sections1–2. https://wwwcdn.imo.org/localresources/en/KnowledgeCentre/IndexofIMOResolutions/MEPCDocuments/MEPC.391(81).pdf | 燃料链及船上推进发电接口，含岸电；仅CO2、CH4、N2O。明确排除制冷剂及其他列出物种，不是整船清单；不采用默认因子。 |
| imo-pollution | official_guidance | IMO Pollution Prevention,public page accessed21October2026,opening paragraphs. https://www.imo.org/en/ourwork/environment/pages/pollution-prevention.aspx | 定性区分油、污水、垃圾、空气、压载、防污及接收路径，不提供因子、真实浓度、普遍发生或法定排放许可。 |
| iso8217-abstract | standard | ISO8217:2024,edition7 May2024,public abstract only. https://www.iso.org/standard/80579.html | 船用燃料规格类别及船上处理前交接点，未读取完整规范正文。不据此给出牌号数值、组分、密度、硫含量或合规结论。 |
| damen-ferry-cases | literature | Damen Road Ferries and Ferry2306 Electric,primary product pages accessed21October2026. https://www.damen.com/vessels/ferries/roro-ferries ; https://www.damen.com/vessels/ferries/city-ferries/ferry-2306-electric | 实际案例接口：客车渡轮、岸上充电储能、柴油备用及内部直流。仅为产品案例，不将营销减排、容量或充电性能作通用参数。 |
| hydrofoil-case | literature | Candela P-12 Shuttle,primary technical product page accessed21October2026. https://candela.com/pro-series/p-12-shuttle/ | 实际电动水翼控制、水翼结构或转换及外部直流充电结构，不将宣传节能、航程、容量或寿命作通用因子。 |
| hovercraft-architecture | literature | Griffon Hoverwork/Griffon Marine,How Hovercraft Work,public primary technical explanation accessed21October2026. https://www.griffonhoverwork.com/products/hovercraft/how-hovercraft-work/ | 真实升力风机、柔性围裙及推进螺旋桨在水面岸面上的功能，不提供客运排放、磨损或燃料因子。 |
| bts-ncfo-2024 | official_guidance | BTS2024 National Census of Ferry Operators printable questionnaire,PDF pp2 and11. https://www.bts.gov/sites/bts.dot.gov/files/2025-02/2024%20NCFO%20Printable%20Questionnaire.pdf | 美国普查背景及区分旅客、车辆容量并排除船员；不将容量或假设车长作为真实载客、参考分母或全球服务定义。 |
| ghg-product-2011 | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard2011,chapters7 and9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 分配层级及披露背景；强制船岸资本及具体Count活动公式是本PCR明确选择，不归称为该GHG标准要求。 |
| circleline-programme | literature | Circle Line Best of NYC,primary operator programme page accessed21October2026. https://www.circleline.com/sightseeing-cruises/best-of-nyc | 案例特定观景路径现场音频讲解及船上支持，经过景点不等于入场；不采用时长景点数容量运营完成因子。网站供给不是实际履约清单。 |
| citycruises-programme | literature | City Cruises London Sightseeing Cruises,primary operator page accessed21October2026. https://www.cityexperiences.com/london/city-cruises/sightseeing-cruises/ | 案例特定起讫返程观光解说通票及可能换船接口和可选餐饮景点，不提供默认次数通票完成载客或通用路径。 |
| captaincook-programme | literature | Captain Cook Sydney Explore Sightseeing,primary operator public programme page accessed21October2026. https://www.captaincook.com.au/explore-sydney-sightseeing/ | 真实供给经典高级随上随下野生动物行程、解说地图、所含与另购设施及条件补游背景，不提供通用目击份量食品票价次数质量因子。 |
| circleline-fleet | literature | Circle Line Our Boats,primary operator fleet page accessed21October2026. https://www.circleline.com/about/our-boats | 案例特定观景甲板舷窗空调、多种观光活动用途及历史改装，不提供通用现役船数船龄推进制造质量容量或寿命。 |
