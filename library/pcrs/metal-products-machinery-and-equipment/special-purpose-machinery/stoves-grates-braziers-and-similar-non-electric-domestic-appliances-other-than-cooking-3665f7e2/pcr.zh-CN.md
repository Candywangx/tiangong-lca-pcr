---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.stoves-grates-braziers-and-similar-non-electric-domestic-appliances-other-than-cooking-3665f7e2
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铁或钢制非电家用取暖炉、炉篦、火盆及类似器具（烹饪器具及餐盘保温器除外）

## 1. 范围与适用性

本规则适用于铁或钢制、以局部取暖或等效非烹饪炉火用途为主的完整非电家用器具在工厂门口的生产。符合该产品边界且声明具体配置的固体、气体或液体燃料产品均可适用。前景边界从金属原料与外购部件入厂开始，涵盖可归属的制造、表面处理、装配与包装，止于验收合格产品出厂；供应商生产通过外购投入数据集连接。使用阶段燃料燃烧、安装、分销、维护和报废不属于本生产数据集。应声明燃料、结构与实际工序；特定燃料的法规限值不得当作制造清单范围。[un-cpc-3-2025; iso-14044-2006]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.stoves-grates-braziers-and-similar-non-electric-domestic-appliances-other-than-cooking-3665f7e2 |
| classification_refs | CPC 3.0：44822，仅用于分类识别 |
| covered_products | 完整的铁或钢制非电家用取暖炉、炉篦和火盆；须声明燃料路线 |
| excluded_products | 烹饪器具和餐盘保温器；集中供暖散热器；电暖器；单独出售的零件；户外烹饪设备 |
| representative_product | 一台验收合格、完整的钢制或铸铁制非电家用取暖炉 |
| production_route | 外购钢材和／或铸铁炉膛部件；可归属的制造、表面处理、装配与包装 |
| market_state | 工厂门口待售的完整设备，不含使用燃料；净质量不含运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一台符合所声明配置的完整非电家用局部取暖器具。 |
| How much | 一台验收成品设备，以实测净质量 M kg 表示。 |
| How well | 声明型号、燃料、铁或钢制主体结构、额定热功率标称值和验收准则。 |
| How long or cycle | 工厂门口一台待售的验收成品；本生产参考量不预设使用寿命。 |
| reference_flow_link | `finished_stove` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 铁或钢制火炉、炉篦、烤炉及类似非电动家用器具（烹饪用器具及加温器除外） `e4f06ae9-21fe-4b4e-a2ba-46b1d8824f14` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 家用非电取暖用途；型号与燃料；主体材料；验收完整配置；额定热功率标称值；净质量 M 不含运输包装和燃料 |

数据包须声明全部必需限定信息。同一配置的一台验收成品等于 M kg。每台清单不得代入虚构质量；后续数据生产者应称量 M。按质量输出时，可用实测 M 除以每台交换量，并披露换算。[iso-14044-2006]

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购金属原料和部件进入工厂；供应商生产以关联上游数据集表示。 |
| starting_condition_role | 前景制造投入边界。 |
| product_classification_scope | 完整的铁或钢制非电家用取暖器具；边界独立于分类代码。 |
| recursive_input_rule | 同类别完整器具若作为外购投入，须作为独立上游产品，披露其质量且避免重复计数，不得默认为原材料。 |
| upstream_dataset_requirement | 为每项外购材料和部件连接具体上游生产数据集；声明摇篮到工厂门口研究包含的入厂运输。 |
| disclosure | 声明型号、燃料路线、外购与厂内工序、供应商数据覆盖、排除阶段及任何遗漏交换。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 所有过程 | 纳入至验收出厂为止的全部可归属工厂投入与产出，并连接外购投入的上游过程；记录排除项和截断决定。 | `iso-14044-2006`; `jauhiainen-2024` |
| `boundary_use_exclusion` | 使用阶段 | 不将住户使用燃料或使用排放加入本制造清单；单独的使用模型应有独立情景。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `stove_factory` | 金属制造、表面处理、装配与包装 | `required` | 所有验收完整设备；各条件性交换仅在实际发生时纳入。 | 前景工厂生产 | 每台验收成品设备 |

### 过程：金属制造、表面处理、装配与包装（`stove_factory`）

#### 输入

##### 产品流

###### 炉体制造用钢板（`steel_sheet`）

工厂将未涂层低碳钢板切割或成形为炉体时纳入；记录跨越工厂边界的外购钢板质量。

- 选定流：未涂层低碳钢板
- 流属性/单位：质量 / kg
- 数量规则：每台验收成品设备分摊的外购钢板质量；采用 cp_materials 采集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：

###### 外购铸铁炉膛（`cast_firebox`）

仅在外购并安装独立的铸铁炉膛时纳入。厂内铸造应作为关联的上游前景过程，并记录其自身交换。

- 选定流：铸铁炉膛铸件
- 流属性/单位：质量 / kg
- 数量规则：每台验收成品设备分摊的外购铸件质量；采用 cp_materials 采集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：

###### 外购工厂电力（`factory_electricity`）

记录可归属于成形、连接、装配、涂装和包装工序的电网计量电力；排除已计入外购零部件数据集的供应商电力。

- 选定流：电网交流电
- 流属性/单位：电能 / kWh
- 数量规则：每台验收成品设备分摊的电表读数，单位 kWh；采用 cp_electricity 采集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：

###### 消耗的粉末涂料（`powder_coating`）

仅在前景工厂内施加粉末涂料时纳入；外购预涂装部件使用其供应商数据集。

- 选定流：涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位：质量 / kg
- 数量规则：每台验收成品设备分摊的粉末涂料投料质量；采用 cp_coating 采集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating`
- 来源：

###### 瓦楞运输纸箱（`carton_box`）

成品出厂时随附瓦楞纸箱则纳入一只；其质量不计入 M。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：每台验收成品设备随附的纸箱质量；采用 cp_packaging 采集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格的非电家用取暖器具（`finished_stove`）

一台验收合格、可销售的铁或钢制非电家用取暖器具离开工厂。运输包装和使用燃料不计入设备净质量 M。

- 选定流：铁或钢制火炉、炉篦、烤炉及类似非电动家用器具（烹饪用器具及加温器除外） `e4f06ae9-21fe-4b4e-a2ba-46b1d8824f14`
- 流属性/单位：质量 / kg
- 数量规则：M 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：

##### 废物流

###### 工厂钢材边角料与废品（`steel_scrap`）

纳入作为工业后废钢离厂的钢材边角料和不合格钢制件；不得与钢板采购量抵销。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：质量 / kg
- 数量规则：每台验收成品设备分摊的外运废钢质量；采用 cp_scrap 采集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 共用工厂工序 | 尽可能按型号分开计量生产线和材料，再分配共用交换。 | `iso-14044-2006` |
| `allocation_physical` | 剩余共用工厂交换 | 无法细分时，采用能反映交换的已记录物理驱动因素（如设备工时或实测质量）分配，并将分配总量与工厂总量核对。 | `iso-14044-2006` |
| `allocation_scrap` | 废钢 | 将废钢作为独立废物产出记录；披露回收边界，不得从工厂投入中扣除推测的替代生产抵扣量。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `stove_factory` | 完整设备验收净质量 | 经校准的秤记录 | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每种型号或代表性验收设备 | 当前生产批次 | 申报工厂 | 每台验收净质量 | 秤校准和验收记录 |
| `cp_materials` | `stove_factory` | 外购钢板或铸铁炉膛 | 供应商发票和物料清单 | 材料规格；交付质量；领用质量；型号；验收设备数量 | 核对同一型号的供应商记录、领料单和物料清单；分别记录钢板和铸铁炉膛。 | kg | 每个生产批次 | 当前生产批次 | 申报工厂 | 可归属材料质量 / 验收设备数量 | 发票；领料记录；物料清单 |
| `cp_electricity` | `stove_factory` | 外购电网电力 | 电表和生产记录 | 电表 kWh；生产线；期间；型号；验收设备数量 | 读取经校准的电表，仅将可归属的工厂用电分配至验收设备。 | kWh | 每个生产批次 | 当前生产批次 | 申报工厂 | 可归属 kWh / 验收设备数量 | 电表校准和生产记录 |
| `cp_coating` | `stove_factory` | 粉末涂料投料 | 领料和退料记录 | 涂料批次；领用 kg；退回 kg；型号；验收设备数量 | 称量或核对该型号粉末涂料净消耗。 | kg | 每个涂装批次 | 当前生产批次 | 申报工厂 | 涂料净投料 kg / 验收设备数量 | 领料和退料记录 |
| `cp_packaging` | `stove_factory` | 瓦楞纸箱 | 包装物料清单 | 纸箱质量；数量；型号；验收设备数量 | 称量随附纸箱，或采用可追溯的供应商规定质量。 | kg | 每次包装规格变更 | 当前规格 | 申报工厂 | 随附纸箱质量 / 验收设备数量 | 包装规格和供应商记录 |
| `cp_scrap` | `stove_factory` | 工业后废钢 | 地磅和外运记录 | 废钢 kg；牌号；型号或生产线；期间；验收设备数量 | 称量分类外运的废钢并分配至生产批次。 | kg | 每个生产批次 | 当前生产批次 | 申报工厂 | 可归属外运废钢 kg / 验收设备数量 | 地磅单和废钢交接单 |

### 计算规则

本每台设备参考量不另行规定计算公式。各协议规定了汇总方式；实测净质量 M 为关联的参考数量。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | 所有行 | 核对称量、物料清单和计量记录中的型号、燃料、主体材料及验收配置。 | 验收记录；物料清单 |
| `dq_period` | 所有行 | 使用已声明的当前生产批次，披露缺失数据、估算数据和供应商代理数据。 | 注明日期的记录及缺口清单 |
| `dq_completeness` | 工厂投入和产出 | 发布具体数据集前，对其他实际使用的每种工厂材料、能源、废物或直接排放分别增加原子交换行；记录截断决定。 | 材料和能量核对表；场址清单 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_product_identity` | finished_stove | 要求产品为完整的铁或钢制非电家用非烹饪取暖器具，并记录型号和燃料。 | `un-cpc-3-2025` |
| `validate_reference_mass` | finished_stove | 要求对同一配置的一台验收完整设备实测正值 M，且不含燃料和运输包装。 | `iso-14044-2006` |
| `validate_factory_balance` | stove_factory | 将外购材料、能源、成品设备和单独外运废钢与批次记录核对；解释未匹配数量。 | `iso-14044-2006`; `jauhiainen-2024` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种已声明型号及燃料路线的工厂前景生产数据包。 |
| downstream_use | 经审查后作为 `secondary_dataset` 或 `background_dataset`；用于 process 和 lifecyclemodel 投影。 |
| allowed_use | 连接供应商数据集并披露分配的制造阶段 LCA。 |
| excluded_use | 未建立独立模型时直接比较不同取暖功能、使用阶段排放或合规认证。 |
| required_metadata | 产品型号；燃料；主体材料；额定热功率标称值；工厂；年份；M；包装状态；外购部件；场址工序。 |
| required_quality_disclosure | 数据期间；原始数据占比；计量器具；供应商覆盖；分配驱动因素；未解决流及遗漏交换。 |
| update_trigger | 材料、燃料、供应商、工厂、涂装路线或测量方式变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | CPC Version 3.0 Structure，2025 年 6 月 30 日；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 产品身份及相邻类别排除，行 2365。 |
| `iso-14044-2006` | `standard` | Environmental management — Life cycle assessment — Requirements and guidelines，IS/ISO 14044:2006；https://fenix.ciencias.ulisboa.pt/downloadFile/2251937252647064/is.iso.14044.2006.pdf | 单元过程边界、前景数据采集、分配和数据质量，第 4.2.3.3、4.3.2、4.3.4 节。 |
| `jauhiainen-2024` | `literature` | Selvitys puulämmitteisen tulisijan EPD-ympäristöselosteen laadinnasta，2024；https://www.theseus.fi/bitstream/10024/867657/2/Jauhiainen_Katri.pdf | 芬兰一例木燃料桑拿炉支持工厂材料、能源、废物和部件称量记录类型，不提供跨产品数量或经验范围。 |
