---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.casing-and-tubing-of-a-kind-used-in-the-drilling-for-oil-or-gas-welded-of-steel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 用于钻探石油或天然气的钢制焊接套管和油管

## 1. 范围与适用性

本 PCR 适用于石油或天然气钻井与生产用钢制焊接套管和油管的工厂门口生产。覆盖以热轧钢卷为原料的电阻焊或高频焊钢管，包括由申报制造商实施或委托实施的成形、纵向焊缝焊接、定径、必要热处理、管端加工、检验、标识、指定防护涂层和发运准备。

参考产品可以是套管或油管，可以为平端状态，也可以按声明的接头和接箍状态交付。前景数据包应识别管材种类、钢级、尺寸、交货状态、接头、接箍、涂层、检验制度、制造场址和适用规范版本。API 5CT 界定产品和交货条件背景，但不能替代清单所需的场址记录。

排除的参考产品包括无缝套管、无缝油管、钻杆、管线管、通用结构或机械用焊接钢管、短节、单独销售的接箍料以及非钢制管材。采购钢卷上游的炼钢环节由供应商特定数据集或地域与技术均具有代表性的上游数据集表示。工厂门口之后的运输、井场搬运、安装、使用、修井和生命末期不在本 PCR 范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.casing-and-tubing-of-a-kind-used-in-the-drilling-for-oil-or-gas-welded-of-steel |
| classification_refs | CPC 3.0：41286，精确分类背景 |
| covered_products | 石油或天然气井用钢制焊接套管和焊接油管；声明后可包括平端、螺纹或螺纹接箍交货状态 |
| excluded_products | 无缝套管或油管；钻杆；管线管；通用焊接钢管；作为独立参考产品销售的短节和接箍料；非钢制管材 |
| representative_product | 满足已声明钢级、尺寸、接头、检验和交货要求的电阻焊钢制套管或油管 |
| production_route | 热轧钢卷或板卷纵剪和边部准备；辊弯成形；电阻或高频纵缝焊接；焊瘤去除；焊缝热处理；定径和切断；条件性全管体热处理；矫直、管端加工、检验、标识、涂层和发运准备 |
| market_state | 制造工厂门口的合格成品钢管；若随管交付，净产品质量包括所装接箍，但不包括可拆卸运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供已声明井筒结构或流体通道功能的钢制焊接套管或油管 |
| How much | 工厂门口合格产品净质量 1,000 kg |
| How well | 满足已声明钢级、尺寸、交货状态、接头/管端状态、接箍状态、涂层、检验和水压试验要求 |
| How long or cycle | 工厂门口交付的一个生产批次；不表示井下服役寿命 |
| reference_flow_link | `ref_welded_casing_tubing` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 用于钻探石油或天然气的钢制焊接套管和油管 `978eed2c-cf59-47ff-a661-c7b865b56140` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 套管或油管；钢级和材料规范；外径；壁厚；订购长度范围；ERW/HFW 焊接技术；热处理交货状态；平端或接头类型；接箍是否计入产品质量；涂层和标识状态；水压和无损检验制度；制造场址和国家；生产参考期；适用标准及版本；发运包装范围 |

构建前景数据包时，每项必需限定信息应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失必需限定信息的数据包，其参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品及所有质量归一化交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 归一化至 1,000 kg 合格钢管净质量。仅当接箍属于声明交付产品时才计入；托盘、垫木、捆带和可拆卸护丝器不计入参考质量，而作为独立投入申报。 |
| `weighing_basis` | 钢卷、产品、废钢、化学品和废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先采用经校准秤量记录。使用发票质量或理论线质量时，应披露方法、尺寸输入、密度约定及其与发运净质量的核对。 |
| `electricity_energy` | 外购交流电 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 在可行情况下保留分过程电表记录。按 1 kWh = 3.6 MJ 将 kWh 转为 MJ，并保留原始电表单位和换算记录。 |
| `gas_volume_conditions` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明温度、压力以及计量值为标准体积还是实际体积。不得将天然气与其他燃料合并。 |
| `water_mass_conversion` | 工艺水和试验水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录跨越前景边界的补充水。使用体积表时，应保留体积以及换算所用密度/参考条件；循环水不得重复计数。 |

## 5. 系统边界

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system | 从热轧钢卷或板卷进厂起，纳入 ERW/HFW 成形和焊接、必要热处理、精整、检验、试验、标识、声明涂层和发运准备，直至工厂门口。 | cbsa-octg3-2021, jfe-speciality-pipe-tube |
| `boundary_upstream_inputs` | purchased_materials_and_energy | 每项采购材料、电力、燃料、水、处理服务和包装投入均应连接与其地域、技术和产品状态匹配的上游数据集。采购钢卷上游的炼钢不得在钢管厂前景过程内重复建立，除非物理上一体化且能够单独计量。 | eu-2022-2110-fmp-bat |
| `boundary_conditional_operations` | heat_treatment_connections_coating_packaging | 仅当声明钢级、接头、订单或发运状态需要具体操作或材料时，纳入全管体热处理、加厚、车丝、接箍、防护清漆和运输防护交换。 | api-5ct-11, cbsa-octg3-2021, jfe-speciality-pipe-tube |
| `boundary_internal_transfers` | intermediate_pipe_states | 同一前景系统内部完全转移的绿管等中间状态不建立产品交换。若中间产品从另一设施采购或出售至另一设施，则按实际产品转移建立独立数据集并披露拆分。 | cbsa-octg3-2021 |
| `boundary_downstream_exclusion` | downstream_life_cycle | 排除制造工厂门口之后的外运、建井、井下使用、维护、修井和生命末期。 | un-cpc-3-0-2025 |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 钢制焊管制造场址接收的热轧钢卷或板卷，并声明钢级、宽度、厚度、供应商、生产路线和上游数据集 |
| starting_condition_role | 进入前景 ERW/HFW 钢管制造系统的外购主要钢质原料 |
| product_classification_scope | 石油或天然气井用钢制焊接套管和油管；不包括无缝 OCTG、管线管、钻杆或通用焊接钢管 |
| recursive_input_rule | 外购同类别成品套管或油管作为独立上游产品数据集记录并披露其质量，不得改标为热轧钢卷。同场址内未离开前景边界的返工属于内部转移，不计作新投入。 |
| upstream_dataset_requirement | 优先采用供应商特定钢卷数据；否则采用与钢级系列、炼钢路线、轧制技术、地域和参考年匹配的数据集。其他外购投入均须匹配产品状态和供应地域。 |
| disclosure | 披露钢卷来源和钢级；ERW/HFW 技术；场址一体化范围；热处理路线；接头和接箍状态；涂层；试验；包装；废钢去向；水循环；废水处理；能源供应；分配；以及任何被排除操作 |

## 6. 过程清单结构

仅列出跨越已声明前景系统边界的交换。同一申报系统内部在以下过程阶段之间转移的中间钢管，不重复作为投入或产出。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `erw_forming_welding` | 钢卷准备、辊弯成形、ERW/HFW 焊接、焊瘤去除、焊缝热处理、定径和切断 | required | 覆盖产品始终纳入 | 前景钢管成形 | 每 1,000 kg 工厂门口合格产品 |
| `grade_heat_treatment` | 全管体钢级热处理和淬火 | conditional | 声明钢级或交货状态要求正火、淬火回火或其他可单独计量的全管体处理时纳入 | 前景冶金调质 | 每 1,000 kg 接受该处理的合格产品 |
| `finishing_testing` | 矫直、平头、条件性车丝/上接箍、检验、水压试验、标识和条件性涂层 | required | 精整和试验操作始终纳入；条件性材料行仅在实际使用时适用 | 前景精整与质量保证 | 每 1,000 kg 工厂门口合格产品 |
| `shipment_preparation` | 捆扎和可拆卸运输防护 | conditional | 仅当所列具体材料随工厂门口产品交付时纳入 | 前景发运准备 | 每 1,000 kg 工厂门口合格产品；包装不计入参考质量 |

### 过程：钢卷准备、辊弯成形和 ERW/HFW 焊接（`erw_forming_welding`）

#### 输入

##### 产品流

###### 主要热轧钢卷原料（`erw_hot_rolled_coil`）

记录用于覆盖产品的扁平轧制热轧钢卷或板卷，并保留钢级、宽度、厚度、供应商和上游钢铁数据集。

- 选定流：热轧钢卷 `4f1a1835-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：钢卷或板卷实测耗用质量，并调整库存变化和退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 工厂门口合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_erw_production_records`
- 来源：cbsa-octg3-2021, jfe-speciality-pipe-tube

###### 成形和焊接用电（`erw_electricity`）

记录钢卷搬运、边部准备、辊弯成形、焊接、焊瘤去除、焊缝退火、定径、切断及其抽排的计量或分配交流电。

- 选定流：交流电 `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分过程电表记录；无分表时采用有文件依据的场址总表分配值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_erw_production_records`
- 来源：jfe-speciality-pipe-tube, eu-2022-2110-fmp-bat

###### 成形和冷却补充水（`erw_process_water`）

记录跨越边界、用于焊缝冷却及其他直接制管用途的工艺补充水；系统内部循环水不计。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：供应至工艺水回路的实测补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_erw_production_records`
- 来源：jfe-speciality-pipe-tube, eu-2022-2110-fmp-bat

###### 边部准备和切断用切削液（`erw_cutting_fluid`）

记录边铣和切断操作补充的新切削液，并声明配方、供应浓度及回路是否循环。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：跨越前景边界的新切削液补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_erw_production_records`
- 来源：jfe-speciality-pipe-tube

##### 废物流

本过程没有从前景系统外部进入的废物流。

##### 基本流

本过程不规定基本流输入。

#### 输出

##### 产品流

中间绿管保留在前景系统内，不作为外部产品交换表示。

##### 废物流

###### 切边、焊瘤和切头废钢（`erw_steel_scrap`）

记录由纵剪、边部准备、焊瘤切除、定径和切断产生并离开前景系统的分选含铁废钢。

- 选定流：废钢 `b973529f-a945-4cb9-9600-ecbcc745a4c6`
- 流属性/单位：Mass / kg
- 数量规则：外运废钢实测质量；扣除未离开边界、在同场址重熔或返工的材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_erw_production_records`
- 来源：jfe-speciality-pipe-tube

##### 基本流

此处不预设直接基本流输出。若焊接烟尘或其他直接释放跨越边界，应按各自具体化学或物理流单独申报。

### 过程：全管体钢级热处理和淬火（`grade_heat_treatment`）

#### 输入

##### 产品流

###### 炉用天然气（`ht_natural_gas`）

仅适用于单独识别的燃气钢级热处理路线；不得与其他燃料合并。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：适用热处理炉实测天然气耗用体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 接受全管体热处理的合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：cbsa-octg3-2021, eu-2022-2110-fmp-bat

###### 热处理用电（`ht_electricity`）

记录条件性热处理过程中炉体传动、适用的感应设备、淬火循环、泵送、冷却和抽排用电。

- 选定流：交流电 `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分过程电表记录；无分表时采用有文件依据的场址总表分配值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 接受全管体热处理的合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：cbsa-octg3-2021, eu-2022-2110-fmp-bat

###### 淬火补充水（`ht_quench_water`）

仅记录作为淬火和冷却回路补充水而跨越边界的水；离开系统的排污水另行保留。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：淬火回路实测补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 接受水淬的合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：eu-2022-2110-fmp-bat

若使用水以外的外购淬火介质，应将实际使用的每一种化学特定介质作为独立前景投入，并记录其供应状态、浓度和质量；不得将其改标为工艺用水。

##### 废物流

本过程没有从前景系统外部进入的废物流。

##### 基本流

本过程不规定基本流输入。

#### 输出

##### 产品流

热处理后的钢管保留在前景系统内，不作为外部产品交换表示。

##### 废物流

###### 氧化铁皮（`ht_mill_scale`）

记录全管体热处理后从钢管表面去除并离开前景系统的固态氧化铁皮。

- 选定流：氧化铁皮 `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- 流属性/单位：Mass / kg
- 数量规则：外运氧化铁皮实测干质量或接收状态质量，并声明含水基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 接受全管体热处理的合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：eu-2022-2110-fmp-bat

##### 基本流

###### 炉用燃料产生的化石二氧化碳（`ht_carbon_dioxide_fossil`）

记录热处理过程燃料燃烧产生的直接化石二氧化碳。本行不含上游发电排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟气实测质量，或按 `calc_direct_combustion_emissions` 基于化石燃料碳平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 接受燃料加热全管体热处理的合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_heat_emission_records`
- 来源：eu-2022-2110-fmp-bat

###### 热处理炉氮氧化物（`ht_nitrogen_oxides`）

按场址采用的计量约定，记录热处理炉烟囱直接排放的氮氧化物；声明结果是否按 NO2 当量表示。

- 选定流：氮氧化物 `191b44d4-90c9-465a-8802-93a651b4fd52`
- 流属性/单位：Mass / kg
- 数量规则：烟囱实测质量，或由监测浓度和干标烟气流量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 接受燃料加热全管体热处理的合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_heat_emission_records`
- 来源：eu-2022-2110-fmp-bat

###### 热处理炉一氧化碳（`ht_carbon_monoxide`）

将热处理炉烟囱直接排放的一氧化碳作为独立基本交换记录。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟囱实测质量，或由监测浓度和干标烟气流量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 接受燃料加热全管体热处理的合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_heat_emission_records`
- 来源：eu-2022-2110-fmp-bat

### 过程：精整、检验和试验（`finishing_testing`）

#### 输入

##### 产品流

###### 精整和试验用电（`fin_electricity`）

记录矫直、平头、车丝、无损检验、水压试验、搬运、标识、涂层设备和局部抽排用电。

- 选定流：交流电 `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分过程电表记录；无分表时采用有文件依据的场址总表分配值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：jfe-speciality-pipe-tube, cbsa-octg3-2021

###### 水压试验和精整用水（`fin_process_water`）

记录水压试验及直接精整操作的工艺补充水；试验回路内部循环水不计。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：跨越过程边界的实测补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：jfe-speciality-pipe-tube

###### 平头和车丝用切削液（`fin_cutting_fluid`）

记录平头、倒角或车丝操作补充的新切削液；仅纳入前景边界内实施的操作。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：跨越前景边界的新切削液补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：cbsa-octg3-2021

###### 钢制套管或油管接箍（`fin_steel_coupling`）

仅当单独制造的钢制接箍装到参考产品上并随其销售时纳入；作为独立参考产品销售的接箍料不纳入本行。

- 选定流：钢制套管或油管接箍
- 流属性/单位：Mass / kg
- 数量规则：装到发运产品上的外购接箍实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 工厂门口合格产品，并声明接箍是否计入参考质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：api-5ct-11, cbsa-octg3-2021

###### 出厂涂覆防护清漆（`fin_protective_varnish`）

仅当发运前实际涂覆液态防护清漆时纳入。声明实际树脂、载体、固含量和固化体系；不同涂层材料须建立各自化学特定前景交换。

- 选定流：钢管出厂涂覆防护清漆
- 流属性/单位：Mass / kg
- 数量规则：生产线领用涂料减去有记录的可回收退料，再按合格涂层产品归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 接受本涂层的合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：jfe-speciality-pipe-tube

###### 工业标识油墨（`fin_marking_ink`）

仅纳入实际用于永久产品标识的油墨；声明其配方和供应状态，不得将油墨与防护清漆合并。

- 选定流：钢铁产品工业标识油墨
- 流属性/单位：Mass / kg
- 数量规则：标识设备实测领用油墨减去可回收退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 已标识合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：jfe-speciality-pipe-tube

##### 废物流

本过程没有从前景系统外部进入的废物流。

##### 基本流

本过程不规定基本流输入。

#### 输出

##### 产品流

###### 合格焊接套管或油管（`ref_welded_casing_tubing`）

这是完成所有已声明精整、检验、试验、标识、涂层和接箍操作后，在制造工厂门口的参考产品。

- 选定流：用于钻探石油或天然气的钢制焊接套管和油管 `978eed2c-cf59-47ff-a661-c7b865b56140`
- 流属性/单位：Mass / kg
- 数量规则：合格产品净质量 1,000 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：un-cpc-3-0-2025, api-5ct-11

##### 废物流

###### 不合格钢管和精整废钢（`fin_steel_scrap`）

记录作为含铁废钢离开前景系统的不合格钢管、平头切料和车丝钢屑。

- 选定流：废钢 `b973529f-a945-4cb9-9600-ecbcc745a4c6`
- 流属性/单位：Mass / kg
- 数量规则：精整和不合格品产生的外运含铁废钢实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：jfe-speciality-pipe-tube

###### 废切削液（`fin_spent_cutting_fluid`）

记录从平头或车丝回路移出并送往前景系统外回收或处理的废切削液；不得与水性试验水合并。

- 选定流：废切削液 `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- 流属性/单位：Mass / kg
- 数量规则：外运回收或处理的实测质量，并声明含水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：eu-2022-2110-fmp-bat

###### 废水压试验水（`fin_spent_hydrotest_water`）

记录最终使用后排放或送往外部处理的水压试验水；试验回路内部循环的水不得计数。

- 选定流：钢管试验产生的废水压试验水
- 流属性/单位：Mass / kg
- 数量规则：离开前景系统的实测排放质量，并声明含油和固体状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：eu-2022-2110-fmp-bat

##### 基本流

涂层或标识产生的直接挥发性有机物释放不得用一个通用集合行表示。若有实测数据，应将每个可得的具体化学基本流或直接核实的场址报告流作为独立交换申报。

### 过程：发运准备（`shipment_preparation`）

#### 输入

##### 产品流

###### 钢制包装捆带（`ship_steel_strapping`）

仅纳入在工厂门口之后仍捆扎产品束的钢带。

- 选定流：钢打包带 `56fe4f71-b594-4b55-8553-c87f2516737d`
- 流属性/单位：Mass / kg
- 数量规则：随发运产品束交付的钢带实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 工厂门口合格产品；不计入参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shipment_records`
- 来源：cbsa-octg3-2021

###### 聚丙烯护丝器（`ship_polypropylene_thread_protector`）

仅纳入装到螺纹管端或接箍上用于运输的聚丙烯护丝器；其他聚合物制护丝器应作为独立材料特定交换记录。

- 选定流：聚丙烯套管或油管护丝器
- 流属性/单位：Mass / kg
- 数量规则：随产品交付的聚丙烯护丝器实测质量或由件数计算的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 带螺纹合格产品；不计入参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_shipment_records`
- 来源：api-5ct-11, cbsa-octg3-2021

###### 窑干软木运输垫木（`ship_softwood_dunnage`）

仅纳入随产品越过工厂门口的窑干软木垫块、垫条或隔档；可重复使用的内部支撑物排除。

- 选定流：窑干软木运输垫木
- 流属性/单位：Mass / kg
- 数量规则：随产品交付的垫木实测干质量或由件数计算的干质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 工厂门口合格产品；不计入参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_shipment_records`
- 来源：cbsa-octg3-2021

##### 废物流

本过程没有从前景系统外部进入的废物流。

##### 基本流

本过程不规定基本流输入。

#### 输出

##### 产品流

不建立额外产品流：可拆卸运输防护随参考产品交付，但不计入其净质量。

##### 废物流

包装边角料离开前景系统时，应按具体材料分别作为废物交换记录；不允许使用通用包装废物行。

##### 基本流

本过程不规定直接基本流输出。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared_processes | 优先通过过程计量及成形/焊接、钢级热处理、精整/试验和发运准备的过程拆分避免分配。 | eu-2022-2110-fmp-bat |
| `allocation_shared_energy` | shared_energy_and_utilities | 对无法拆分的共用表计，按设备时间、炉批质量、试验时间或受处理产品质量等有文件依据的因果驱动量分配。仅在不存在更有因果性的驱动量时采用质量分配，并披露受影响交换和分配比例。 | eu-2022-2110-fmp-bat |
| `allocation_steel_scrap` | ferrous_scrap_outputs | 按实测质量将废钢作为废物输出申报。不得在前景清单内扣减替代原生钢的避免负荷；任何回收模型、替代收益或生命末期分配均为外部情景，应单独披露。 | eu-2022-2110-fmp-bat |
| `allocation_offspec_rework` | internal_rework | 未离开前景系统、返回某一操作的材料属于内部转移。仅计入净采购投入、净合格产品以及跨越边界的废物或产品。 | cbsa-octg3-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_erw_production_records` | `erw_forming_welding` | 钢卷、电力、水、切削液和废钢 | 秤量、表计、库存、采购和废物外运记录 | 批次；钢卷质量和钢级；期初/期末库存；电力；补充水；切削液添加量；废钢质量；合格产出质量 | 经校准秤和分表；否则采用与场址总表和库存记录核对的有文件依据分配 | kg; MJ | 每生产批次并按月核对 | 至少连续 12 个有代表性的月份；较短完整生产活动须说明理由 | 已声明成形/焊接边界内所有设备和辅助负荷 | 汇总净跨界数量并按 `calc_reference_normalization` 归一化 | 校准、发票、表计导出、库存核对和废钢外运票据 |
| `cp_heat_treatment_records` | `grade_heat_treatment` | 天然气、电力、淬火水、淬火剂和氧化铁皮 | 表计、炉批、化学品添加和废物记录 | 热处理批次；钢级；路线；处理质量；燃料体积和条件；电力；水；淬火剂添加量；氧化铁皮质量和含水量 | 专用表计和批次日志；无专用表时方可采用有文件依据的分配 | kg; m3; MJ | 每炉批并按月核对 | 与产品数据相同参考期 | 每台已纳入炉和淬火回路 | 仅汇总受处理批次并按受处理合格产出归一化 | 表计校准、炉批日志、物料领用和废物票据 |
| `cp_heat_emission_records` | `grade_heat_treatment` | 直接化石 CO2、氮氧化物和一氧化碳 | 烟气检测、连续监测、燃料分析和气体流量记录 | 排放源；运行小时；浓度；基准氧；干/湿基；温度；压力；烟气流量；燃料碳；受处理质量 | 优先直接监测质量；否则由监测浓度和标态流量或有文件依据的燃料碳平衡计算 | kg; mg/Nm3; Nm3; kg C | 每次监测并对期间积分 | 与热处理活动相同参考期 | 所有已纳入燃气热处理烟囱 | 对已纳入运行积分质量并按受处理合格产出归一化 | 分析仪校准、采样报告、实验室证书和计算表 |
| `cp_finishing_records` | `finishing_testing` | 电力、试验水、切削液、接箍、清漆、油墨、产品和废物 | 表计、秤量、采购、领用、检验和废物记录 | 批次；产品种类；钢级；尺寸；接头；接箍质量；涂层；试验状态；投入领用；水补充/排放；废钢和废液质量；合格净质量 | 经校准秤/表和生产质量记录 | kg; MJ | 每批次并按月核对 | 与成形/焊接数据相同参考期 | 范围内全部精整和试验操作，包括归属于该产品的外包操作 | 按声明产品系列汇总并按工厂门口合格净质量归一化 | 校准、检验和水压试验记录、材质证书、采购/领用记录和废物票据 |
| `cp_shipment_records` | `shipment_preparation` | 钢带、聚丙烯护丝器和软木垫木 | 领用、物料清单、件数和发运记录 | 发运单；产品净质量；材料类型；件数；单件质量；领用质量；退料质量 | 代表性单件称重，并将领用量与发运记录核对 | kg; item | 每次发运并按月核对 | 与产品数据相同参考期 | 仅包含越过工厂门口的包装 | 计算净交付质量并按产品净质量归一化 | 称重记录、材料规范、物料清单和发运记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有非参考清单行 | 归一化数量 = 1,000 × 期间跨界数量 / 期间合格参考产品净质量 | 期间流数量；期间合格产品净质量 | 每 1,000 kg 参考产品的流数量 | eu-2022-2110-fmp-bat |
| `calc_electricity_conversion` | 电力记录 | 电力 MJ = 电表 kWh × 3.6；保留原始 kWh 和电表期间 | 电表 kWh | MJ 电力 |  |
| `calc_direct_combustion_emissions` | 热处理化石 CO2、氮氧化物和一氧化碳 | 优先采用直接积分监测质量。否则浓度法质量 = 干标浓度 × 干标烟气体积并换算单位；化石 CO2 也可采用校正非 CO2 碳后的有文件依据燃料碳平衡。 | 浓度；烟气流量；时间；参考条件；适用的燃料碳；受处理产出质量 | 每 1,000 kg 受处理合格产品的污染物 kg | eu-2022-2110-fmp-bat |
| `calc_shipment_component_mass` | 护丝器和软木垫木 | 交付质量 = 件数 × 经核实平均单件质量；组件设计或材料变化时重新称量 | 件数；抽样单件质量；退料件数 | 每 1,000 kg 参考产品的交付材料 kg | api-5ct-11 |
| `calc_mass_reconciliation` | 主要钢质投入和含铁产出 | 核对期初库存 + 采购钢卷 + 其他已纳入钢质组件与期末库存 + 合格产品钢质量 + 外运废钢 + 有记录库存变化。说明未解决差额，不得强制闭合。 | 钢卷和接箍投入；库存变化；合格产品；废钢；内部转移 | 有文件依据的钢质量平衡差额 | cbsa-octg3-2021, jfe-speciality-pipe-tube |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 每个已纳入产品系列均保留产品种类、钢级、尺寸、焊接技术、热处理、接头、接箍、涂层、标识、试验状态、适用规范版本和净质量约定。 | 产品规范、材质证书、订单和检验记录；api-5ct-11 |
| `dq_technology_scope` | 过程边界 | 识别操作是在场址内、外包还是不存在，以及数据是否代表 ERW 或 HFW 设备、焊缝退火、全管体热处理、车丝、接箍、涂层和捆扎。 | 过程流程图、设备清单、供应商记录及与 cbsa-octg3-2021/jfe-speciality-pipe-tube 的比较 |
| `dq_temporal_representativeness` | 所有前景记录 | 连续生产优先采用至少连续 12 个月的共同代表期；较短完整生产活动须说明理由，并披露停机、试制和异常批次。 | 带日期的表计、生产、采购、库存和废物记录 |
| `dq_completeness` | 所有边界交换 | 将主要材料、能源、水、燃料、化学品、包装、废物和直接监测排放与过程流程及环境物流清单核对；不得把交换隐藏在复数公用工程或废物集合行中。 | 按 eu-2022-2110-fmp-bat 编制的核对表及工艺化学品/废水/废气清单 |
| `dq_meter_and_scale_quality` | 实测数量 | 每个物料表计或秤记录仪表编号、校准状态、分辨率、覆盖范围、缺失数据处理和分配方法。 | 校准证书、表计导出、秤票和缺口日志 |
| `dq_upstream_matching` | 上游数据集 | 钢卷匹配钢级系列、炼钢/轧制路线、地域和年份；电力、天然气、水、化学品、处理和包装匹配供应地域和产品状态。 | 供应商一手数据或有文件依据的数据集选择矩阵 |
| `dq_uuid_traceability` | TianGong 身份 | 仅使用直接核实的公开 state-100 UUID。UUID 空缺行保持明确，直至核实精确身份；不得替代为代理流。 | 已最终化混合搜索收据和 manifest 未解决登记 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference_product | 确认参考产品恰为 1,000 kg 净合格产品、使用 CPC 41286 TianGong 参考 UUID，并具备全部必需限定信息。核实接箍计入及包装不计入参考质量。 | un-cpc-3-0-2025, api-5ct-11 |
| `validate_welded_route` | product_and_process_identity | 拒绝无缝套管/油管、管线管、钻杆、通用焊接钢管，以及未从扁平轧制钢材成形并纵向焊接的路线。 | un-cpc-3-0-2025, cbsa-octg3-2021, jfe-speciality-pipe-tube |
| `validate_process_completeness` | foreground_inventory | 将已声明过程流程与钢卷准备、成形/焊接、条件性热处理、精整/试验、条件性涂层/接箍和发运准备核对；解释每个缺失的条件性阶段。 | cbsa-octg3-2021, jfe-speciality-pipe-tube |
| `validate_atomic_exchanges` | inventory_rows | 确认每个清单行仅为一个物理、化学、废物或能源交换，电力、天然气、水、切削液、涂料、各包装组件、各废物和各直接排放均保持分开。 | eu-2022-2110-fmp-bat |
| `validate_mass_balance` | steel_mass_reconciliation | 审查钢质量平衡差额及其库存变化依据。不得通过改变固定参考流或静默净除废钢收益强制平衡。 | cbsa-octg3-2021, jfe-speciality-pipe-tube |
| `validate_water_and_energy` | meters_and_recirculation | 确认电力换算一致、声明天然气参考条件、不混淆补充水和循环水，并且不重复计算排水。 | eu-2022-2110-fmp-bat |
| `validate_uuid_and_language` | bilingual_identity | 确认每个带 UUID 的中文流名称使用 TianGong 精确中文 baseName，且每个 UUID 空缺行均出现在 manifest 审查元数据中。 |  |
| `validate_range_evidence` | quantitative_ranges | 外部推断范围必须至少有两个独立原始来源，工厂门口边界、功能单位和产品状态兼容，且综合说明地域与技术差异；否则拒绝。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 钢制焊接油气井套管或油管生产的工厂门口二手数据集 |
| downstream_use | `secondary_dataset`；仅当产品、路线、地域、钢级/交货状态和时间段均匹配时，方可作为 `background_dataset` |
| allowed_use | 前景数据包构建；产品和过程 LCI；参考产品和边界匹配时用于摇篮到大门或更广生命周期模型 |
| excluded_use | 无缝 OCTG、管线管、钻杆、通用焊接钢管、无资质全球平均、已安装井下服务，或不同钢级、接头、热处理、涂层和包装状态之间的自动替代 |
| required_metadata | 全部参考流限定信息；场址和国家；参考年；钢卷钢路线和供应地域；ERW/HFW 技术；已纳入操作；钢级热处理；接头/接箍；涂层；检验制度；包装；水循环；排放方法；分配；上游数据集；UUID 状态 |
| required_quality_disclosure | 一手数据比例和期间；计量与校准；分配比例；钢质量平衡差额；缺失记录；外包操作；代表性限制；未解决 UUID；未解决范围证据；排除项和偏差 |
| update_trigger | 主要钢铁路线或供应地域、ERW/HFW 生产线技术、炉用燃料或热处理路线、产品钢级组合、接头/涂层/包装状态、水或排放控制、分配、参考年、适用规范版本发生变化，或变化超过研究显著性阈值 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | 联合国统计司，《CPC 3.0 版结构》，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-04）。 | CPC 41286 精确分类身份及与相邻产品类别的区分 |
| `api-5ct-11` | `standard` | 美国石油学会，API Specification 5CT, Casing and Tubing，第 11 版，正式发布公告。https://www.api.org/products-and-services/standards/important-standards-announcements/spec5ct-tradepress（核实于 2026-09-04）。 | 产品限定元数据、管端状态、自动检验和护丝器背景 |
| `cbsa-octg3-2021` | `official_guidance` | 加拿大边境服务局，Oil country tubular goods 3, 2021 investigations - Statement of Reasons - Initiation of an investigation，Production process。https://www.cbsa-asfc.gc.ca/sima-lmsi/i-e/octg32021/octg32021-in-eng.html（核实于 2026-09-04）。 | 已核实原文中的 ERW OCTG 路线：热轧钢卷纵剪、辊弯成形、电阻焊、切断、条件性热处理、精整、车丝、上接箍、试验、涂层、标识和捆扎 |
| `jfe-speciality-pipe-tube` | `handbook` | JFE Steel Corporation，Speciality Pipe and Tube，ERW Pipe Process Equipment and Manufacturing Flowchart。https://www.jfe-steel.co.jp/en/products/pipes/catalog/e1e-011.pdf（检索并目视核实于 2026-09-04）。 | ERW 过程分解、焊缝焊接、焊瘤去除、焊后退火、冷却、定径、切断、水压和超声检验、车丝、检验、标识、出厂标准清漆涂层与发运 |
| `eu-2022-2110-fmp-bat` | `official_guidance` | 欧盟委员会，《欧盟委员会实施决定 (EU) 2022/2110：黑色金属加工行业 BAT 结论》。https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2110（核实于 2026-09-04）。 | 工艺化学品、废水、废气、水、能源、材料效率、排放监测和数据质量规则；不作为 ERW OCTG 数值范围依据 |
