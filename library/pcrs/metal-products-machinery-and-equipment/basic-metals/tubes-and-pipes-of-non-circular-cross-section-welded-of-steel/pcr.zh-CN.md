---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tubes-and-pipes-of-non-circular-cross-section-welded-of-steel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 焊接钢制非圆形截面管

## 1. 范围与适用性

本 PCR 适用于成品截面为非圆形且纵向闭合接缝采用焊接方式制成的未加工钢管。产品以管材形式在制造商厂门交付时，方形、矩形、椭圆形及其他已声明的非圆形闭合截面均属于本 PCR 范围。代表性路线以外购热轧钢卷为起点，必要时进行分条，随后直接冷弯成最终截面或先成形为圆管，经纵缝焊接闭合，再进行定径、定尺切割和检验。

本 PCR 不包括无缝管、圆形截面焊管、开缝管或铆接管、铸造管、管件、由特定产品身份规范的油气管线管和套管，以及切口、钻孔、连接焊接、涂覆、安装、使用和寿命终止等项目特定加工。只有在产后热处理属于声明的销售状态时才将其纳入。前景数据包必须说明与代表性钢卷进料冷弯路线的任何差异。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tubes-and-pipes-of-non-circular-cross-section-welded-of-steel |
| classification_refs | CPC 3.0 `41288`，非圆形截面焊接钢制管 |
| covered_products | 以方形、矩形、椭圆形或其他已声明非圆形闭合截面交付的焊接钢管 |
| excluded_products | 无缝管；圆形截面焊管；开缝管或铆接管；铸造管；管件；油气用特定管线管或套管；项目特定加工构件 |
| representative_product | 由非合金热轧钢卷制成的未加工矩形焊接钢管 |
| production_route | 钢卷接收和分条；直接成形或连续成形；纵缝焊接；定径；定尺切割；检验；条件性产后热处理 |
| market_state | 制造商厂门交付的干燥管材，尚未进行项目特定加工、涂覆、安装、使用或寿命终止处理 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供具有已声明非圆形闭合截面以及已声明力学和尺寸性能的未加工焊接钢管 |
| How much | 1 kg 合格产品 |
| How well | 符合声明的钢级或规范、截面几何形状、尺寸和公差、焊缝方法和验收准则、表面状态及热处理状态 |
| How long or cycle | 制造商厂门处的一个生产批次；不表示使用寿命 |
| reference_flow_link | `5b36ddd4-adb1-41da-9456-33e69e0f141c` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 非圆形截面焊接钢管和钢管 `5b36ddd4-adb1-41da-9456-33e69e0f141c` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 钢级和合金类别；截面形状和尺寸；壁厚；产品规范；直接成形或连续成形路线；焊接技术；焊缝验收依据；热处理状态；涂覆和残油状态；合格产品质量基准；制造地域；数据期间；制造商厂门 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 合格参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅称量处于声明销售状态的合格管材。说明残余轧制油、临时防护物、捆扎附件以及任何已纳入涂层是否计入报告的产品质量。 |
| `process_mass_balance` | 钢卷、内部钢制中间体、合格管材和废钢 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对同一报告期内的干基含钢投入、内部转移、合格产出、实测废钢和已记录库存变化进行核对，不得将内部转移重复计为外部投入或产出。 |
| `electricity_energy_conversion` | 交流电计量记录 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表原始 kWh，并按精确恒等式 1 kWh = 3.6 MJ 转换；披露电压等级、电网或供应商组合、地域，以及是否纳入现场发电。 |
| `gas_volume_conditions` | 天然气记录 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录仪表参考温度、压力、干湿基准和换算方法。不得合并参考条件不兼容的体积数据。 |
| `water_mass_basis` | 工艺用水记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留供应质量，或记录实测体积、密度依据、补充水与循环水的区分以及用于报告跨越边界新增水量（kg）的换算。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_start_at_coil_gate` | 前景起始条件 | 外购钢卷跨越制管场址边界时开始前景采集；钢卷生产及入厂运输应连接到单独识别的上游数据集，不得在本前景系统中重新建立炼钢过程。 | `sti-hss-sustainability-guide`; `worldsteel-lci-methodology-2017` |
| `sb_include_tube_manufacture` | 前景直接控制作业 | 纳入钢卷接收与分条、成形、纵缝焊接、实施时的外焊瘤去除、定径、定尺切割、检验、内部材料转移、直接控制的公用工程、直接排放及现场废物处理，直至合格产品到达制造商厂门。 | `sti-hss-seam-welds`; `sti-hss-sustainability-guide` |
| `sb_route_disclosure` | 成形和精整路线 | 声明管材是直接成形还是先成圆管再整形；仅当产后热处理属于销售状态时纳入，并说明现场处理还是第三方处理。 | `sti-hss-seam-welds`; `sti-hss-heat-treating-2017` |
| `sb_exclude_downstream_fabrication` | 下游作业 | 排除项目特定切割、切口、钻孔、连接焊接、涂覆、安装、使用和寿命终止；研究需要时在下游数据集中建模。 | `sti-hss-sustainability-guide` |
| `sb_no_embedded_recycling_credit` | 制造废钢 | 将工业后钢废料作为物理废物产出报告并披露去向。不得在门到门制管清单中内嵌避免原生钢或寿命终止回收信用；任何回收方法应另行且一致地报告。 | `worldsteel-lci-methodology-2017` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在制管场址接收的外购热轧钢卷 |
| starting_condition_role | 承载上游钢铁生产负荷的外部供应钢材进料 |
| product_classification_scope | 具有已声明非圆形闭合截面的焊接钢管；CPC 3.0 `41288` 为已接受的分类语境 |
| recursive_input_rule | 已符合本 PCR 产品边界的外购投入仍作为明确的产品投入，并连接到单独的上游数据集；不得在当前数据集中递归复制其制造清单 |
| upstream_dataset_requirement | 钢卷、电力、天然气、工艺用水和其他外购产品使用地域与技术适当且单独识别的数据集；披露其为供应商特定数据还是市场平均数据 |
| disclosure | 报告进料钢级与钢卷状态、成形路线、焊接技术、场址与地域、数据期间、热处理状态、产品验收依据、所含精整作业及厂门 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| coil_preparation_and_slitting | 钢卷准备和分条 | required |  | 前景进料准备 | 转移至成形工序的钢分条质量（kg） |
| cold_forming_and_welding | 冷弯成形和纵缝焊接 | required |  | 前景管材成形 | 转移至精整工序的焊后非圆形钢管质量（kg） |
| sizing_finishing_and_inspection | 定径、定尺切割、条件性热处理和检验 | required |  | 前景最终制造 | 1 kg 合格焊接非圆形钢管 |

### 过程：钢卷准备和分条（`coil_preparation_and_slitting`）

#### 输入

##### 产品流

###### 热轧钢卷进料（`hot_rolled_steel_coil`）

外购非合金热轧钢卷为声明的代表性钢材进料。记录其接收干质量以及承载上游炼钢负荷的供应商数据集。

- 选定流：热轧钢卷 `4f1a1835-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：实测已消耗接收质量，并按经核实的库存变化调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格焊接非圆形钢管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coil_receiving`
- 来源：`sti-hss-sustainability-guide`

###### 钢卷准备与分条用交流电（`slitting_ac_electricity`）

记录供给钢卷搬运和分条设备的电力。明确电压、供应商或电网组合、地域及共用电表分配；流 UUID 仍需人工审查。

- 选定流：交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量用电量，或由经校准共用电表形成的有记录分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格焊接非圆形钢管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slitting_electricity`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转移至成形工序的热轧钢分条（`slit_steel_strip_output`）

记录离开分条工序的批次特定内部钢分条。该内部转移保留钢级、宽度、厚度和质量身份，不属于外部共产品。

- 选定流：热轧钢分条，内部中间体
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格焊接非圆形钢管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slit_strip_transfer`
- 来源：`sti-hss-seam-welds`

##### 废物流

###### 工业后钢质切边废料（`postindustrial_steel_scrap_edge_trim`）

记录作为制造废料离开本过程的切边及不合格分条。返回同一作业的内部回用属于内部循环，不属于跨越前景边界的产出。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废料质量，扣除有记录的内部回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格焊接非圆形钢管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edge_trim_scrap`
- 来源：

##### 基本流

### 过程：冷弯成形和纵缝焊接（`cold_forming_and_welding`）

#### 输入

##### 产品流

###### 从准备工序接收的热轧钢分条（`slit_steel_strip_input`）

记录进入成形线的内部钢分条，并采用与上一过程产出相同的批次身份和质量基准。

- 选定流：热轧钢分条，内部中间体
- 流属性/单位：Mass / kg
- 数量规则：与 `slit_steel_strip_output` 核对的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格焊接非圆形钢管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_strip_transfer`
- 来源：`sti-hss-seam-welds`

###### 成形和焊接用交流电（`forming_welding_ac_electricity`）

记录供给辊弯成形、感应或电阻焊、焊瘤去除及直接相关控制设备的电力。流 UUID 仍需人工审查。

- 选定流：交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量用电量，或由经校准共用电表形成的有记录分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格焊接非圆形钢管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_welding_electricity`
- 来源：`sti-hss-seam-welds`

###### 供给焊接冷却回路的工艺用水（`process_water_for_welding_cooling`）

仅记录跨越场址边界进入焊接冷却回路的新增工艺用水。循环水保留在内部；只有存在未供应补充水的证据时才记录为零。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：实测供给冷却回路的补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格焊接非圆形钢管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_welding_cooling_water`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转移至精整工序的焊后非圆形钢管（`welded_non_circular_tube_intermediate_output`）

记录纵缝闭合及在线整形后、最终定径、定尺切割、热处理和验收前的内部焊后管材。

- 选定流：焊后非圆形钢管，内部中间体
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格焊接非圆形钢管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_welded_tube_transfer`
- 来源：`sti-hss-seam-welds`

##### 废物流

###### 工业后钢质焊瘤废料（`postindustrial_steel_scrap_weld_flash`）

外焊瘤及相关钢质切屑离开前景系统时，将其记录为制造废料。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：按去向实测收集的焊瘤废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格焊接非圆形钢管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weld_flash_scrap`
- 来源：`sti-hss-seam-welds`

###### 成形和焊接产生的金属加工废水（`metalworking_wastewater`）

记录成形和焊接设备排出的实测含水废物流，并说明处理状态和去向。不得将生活污水、雨水或碱性清洗废水合并到本行。

- 选定流：钢管成形和焊接产生的金属加工废水
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录循环量后的实测排放质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格焊接非圆形钢管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metalworking_wastewater`
- 来源：

##### 基本流

### 过程：定径、定尺切割、条件性热处理和检验（`sizing_finishing_and_inspection`）

#### 输入

##### 产品流

###### 接收用于定径和精整的焊后管材（`welded_non_circular_tube_intermediate_input`）

记录进入最终制造阶段的内部焊后管材，并采用与上一过程产出相同的批次身份和质量基准。

- 选定流：焊后非圆形钢管，内部中间体
- 流属性/单位：Mass / kg
- 数量规则：与 `welded_non_circular_tube_intermediate_output` 核对的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格焊接非圆形钢管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_tube_transfer`
- 来源：`sti-hss-seam-welds`

###### 定径、切割和检验用交流电（`finishing_ac_electricity`）

记录供给定径、矫直、定尺切割、检验和材料搬运设备的电力。流 UUID 仍需人工审查。

- 选定流：交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量用电量，或由经校准共用电表形成的有记录分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格焊接非圆形钢管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_electricity`
- 来源：

###### 直接燃烧式产后热处理用气态天然气（`natural_gas_for_direct_fired_heat_treatment`）

只有在产后热处理属于声明销售状态且由直接燃烧式天然气系统供热时才记录本投入。电加热或第三方处理不得用本行表示。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在声明参考条件下计量的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格热处理焊接非圆形钢管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_natural_gas`
- 来源：`sti-hss-heat-treating-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格焊接非圆形钢管（`reference_welded_non_circular_steel_tube`）

仅记录满足声明钢级、几何形状、尺寸、焊缝验收依据、表面状态和热处理状态的合格管材。本行实现 PCR 参考流。

- 选定流：非圆形截面焊接钢管和钢管 `5b36ddd4-adb1-41da-9456-33e69e0f141c`
- 流属性/单位：Mass / kg
- 数量规则：实测合格产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格焊接非圆形钢管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_accepted_product_mass`
- 来源：`unsd-cpc-3-0-structure-2025`; `sti-hss-sustainability-guide`

##### 废物流

###### 工业后钢质切头尾和不合格管废料（`postindustrial_steel_scrap_cutoff`）

记录作为制造废料离开前景系统的切头尾和不合格管材；若处理不同，应按去向分别记录。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废料质量，扣除有记录的内部回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格焊接非圆形钢管
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutoff_reject_scrap`
- 来源：

##### 基本流

###### 直接燃烧式天然气热处理产生的化石二氧化碳（`fossil_co2_from_natural_gas`）

只有在天然气热处理行适用时，才记录直接排入空气的化石二氧化碳。上游电力和燃料供应排放属于所连接的上游数据集，不纳入本行。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟气实测，或根据采集的燃料体积、经核实的气体组成或碳含量、氧化依据及声明参考条件计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格热处理焊接非圆形钢管
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_fossil_co2`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 可分别计量的生产线、批次和精整路线 | 在分配共用负荷前，应细分直接成形与连续成形批次、热处理与未热处理产品以及可分别计量的作业。 |  |
| `allocation_internal_transfers` | 钢分条和焊后管材中间体 | 将内部中间体作为前景过程间经质量平衡核对的转移；不得对其赋予上游信用、市场价值或第二次外部负荷。 |  |
| `allocation_shared_utilities` | 无法避免的共用电力、用水和场址服务 | 无法细分或直接计量时，按设备时间及实测功率、取水量或合格产量等有记录因果驱动因素进行分配；只有质量分配能够近似物理驱动因素且对重大共用负荷开展敏感性分析时，方可采用质量分配。 |  |
| `allocation_manufacturing_scrap` | 工业后钢废料 | 分别报告废料实物质量和去向。将任何回收信用、替代因子或寿命终止收益置于本门到门清单之外，并对废料投入和产出一致披露另行选定的回收方法。 | `worldsteel-lci-methodology-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_coil_receiving` | coil_preparation_and_slitting | 热轧钢卷进料 | 接收和库存记录 | 钢卷编号；供应商；钢级；宽度；厚度；毛重；皮重；接收日期；期初和期末库存 | 经校准地磅或钢卷秤及库存核对 | kg | 每卷及每报告期 | 覆盖已声明季节及运行变异性的代表性连续生产期间 | 声明生产线和场址的全部钢卷投入 | 消耗量 = 接收量 + 期初库存 - 期末库存 - 有记录退货量；按合格产品归一化 | 校准记录、供应商证书、称量票据和库存核对 |
| `cp_slitting_electricity` | coil_preparation_and_slitting | 分条用电 | 电表记录 | 仪表编号；起止读数；kWh；电压；供应商或来源；分配驱动因素；时间戳 | 专用分表或经校准共用电表 | kWh 和 MJ | 连续读数，按月汇总 | 与产品产出相同期间 | 声明场址的钢卷搬运和分条设备 | 有记录时扣除空载或无关负荷；将 kWh 转换为 MJ 并按合格产品归一化 | 仪表校准、区间数据导出和分配工作表 |
| `cp_slit_strip_transfer` | coil_preparation_and_slitting | 钢分条转移 | 内部批次转移记录 | 批次编号；钢级；宽度；厚度；质量；时间戳；目标生产线 | 经校准秤或质量平衡转移票据 | kg | 每批 | 与产品产出相同期间 | 从分条工序转移至成形工序 | 汇总经核实转移并与钢卷投入、废料和库存变化核对 | 秤校准和匹配转移票据 |
| `cp_edge_trim_scrap` | coil_preparation_and_slitting | 切边废料 | 废料称量票据 | 容器编号；废料说明；质量；去向；内部回用标志；日期 | 经校准秤和去向记录 | kg | 每容器或每批发运 | 与产品产出相同期间 | 分条作业 | 仅按去向汇总净跨界废料并按合格产品归一化 | 秤校准、称量票据和买方或处理记录 |
| `cp_forming_strip_transfer` | cold_forming_and_welding | 钢分条投入 | 内部批次接收记录 | 批次编号；钢级；宽度；厚度；质量；时间戳；来源过程 | 匹配的内部转移票据 | kg | 每批 | 与产品产出相同期间 | 成形线接收点 | 与 `cp_slit_strip_transfer` 逐项核对或按受控批次汇总核对 | 匹配的来源和接收票据 |
| `cp_forming_welding_electricity` | cold_forming_and_welding | 成形和焊接用电 | 电表记录 | 仪表编号；读数；kWh；电压；焊接技术；运行时间；分配驱动因素；时间戳 | 专用分表或经校准共用电表 | kWh 和 MJ | 连续读数，按月汇总 | 与产品产出相同期间 | 成形、焊接、焊瘤去除及相关控制设备 | 仅分配有记录共用负荷；将 kWh 转换为 MJ 并按合格产品归一化 | 仪表校准、区间数据导出和生产线日志 |
| `cp_welding_cooling_water` | cold_forming_and_welding | 焊接冷却补充水 | 水表记录 | 仪表编号；读数；水源；补充水体积或质量；排污量；循环状态；时间戳 | 专用仪表或经核对水箱记录 | kg；按体积计量时保留原始 m3 | 每次读数，按月汇总 | 与产品产出相同期间 | 焊接冷却回路 | 仅计入跨越边界的新增补充水；记录密度换算并按合格产品归一化 | 仪表校准、水费票据和回路平衡 |
| `cp_welded_tube_transfer` | cold_forming_and_welding | 焊后管材转移 | 内部批次转移记录 | 批次编号；截面；钢级；壁厚；焊接技术；质量；时间戳 | 经校准秤或经核对质量平衡票据 | kg | 每批 | 与产品产出相同期间 | 从焊接工序转移至最终定径和精整工序 | 汇总转移，并与钢分条投入、焊瘤废料、重大废水固形物和库存变化核对 | 秤校准和匹配转移票据 |
| `cp_weld_flash_scrap` | cold_forming_and_welding | 焊瘤废料 | 废料称量票据 | 容器编号；质量；钢级；去向；日期 | 经校准秤和去向记录 | kg | 每容器或每批发运 | 与产品产出相同期间 | 焊瘤去除点 | 按去向汇总净跨界废料并按合格产品归一化 | 秤校准、称量票据和去向记录 |
| `cp_metalworking_wastewater` | cold_forming_and_welding | 金属加工废水 | 排放和处理记录 | 废物流编号；质量或体积；密度依据；来源设备；处理状态；油和悬浮固体表征；去向；日期 | 专用仪表或经校准水箱液位及代表性取样 | kg；按体积计量时保留原始 m3 | 每次排放，按月汇总 | 与产品产出相同期间 | 仅成形和焊接废水 | 扣除有记录循环量；不兼容废物流分开；按合格产品归一化排放质量 | 仪表校准、取样报告、排放日志和处理凭证 |
| `cp_finishing_tube_transfer` | sizing_finishing_and_inspection | 焊后管材投入 | 内部批次接收记录 | 批次编号；截面；钢级；壁厚；热处理要求；质量；时间戳 | 匹配的内部转移票据 | kg | 每批 | 与产品产出相同期间 | 最终制造阶段接收点 | 与 `cp_welded_tube_transfer` 和有记录库存变化核对 | 匹配的来源和接收票据 |
| `cp_finishing_electricity` | sizing_finishing_and_inspection | 定径、切割和检验用电 | 电表记录 | 仪表编号；读数；kWh；电压；设备范围；运行时间；分配驱动因素；时间戳 | 专用分表或经校准共用电表 | kWh 和 MJ | 连续读数，按月汇总 | 与产品产出相同期间 | 定径、矫直、切割、检验和搬运设备 | 仅分配有记录共用负荷；将 kWh 转换为 MJ 并按合格产品归一化 | 仪表校准、区间数据导出和设备日志 |
| `cp_heat_treatment_natural_gas` | sizing_finishing_and_inspection | 直接燃烧式热处理天然气 | 燃料仪表和炉次记录 | 仪表编号；体积；温度；压力；干湿基准；气体组成或热值记录；炉号；产品批次；时间戳 | 与热处理批次关联的经校准燃气表 | m3 | 每炉次及每报告期 | 与热处理产品产出相同期间 | 纳入销售状态的直接燃烧式产后热处理 | 按实测装炉量或其他有记录因果驱动因素分配炉次燃料，并按合格热处理产品归一化 | 仪表校准、燃气票据、气质记录和炉次日志 |
| `cp_accepted_product_mass` | sizing_finishing_and_inspection | 合格参考产品 | 生产和质量放行记录 | 批次编号；产品流编号；钢级；截面；尺寸；焊接方法；热处理状态；涂覆状态；合格质量；不合格质量；放行日期 | 与质量放行关联的经校准成品秤 | kg | 每个合格批次 | 与全部清单记录相同期间 | 声明场址厂门处的全部合格参考产品 | 仅汇总声明销售状态下经质量放行的质量，并将其作为归一化分母 | 秤校准、检验记录和符合性证书 |
| `cp_cutoff_reject_scrap` | sizing_finishing_and_inspection | 切头尾和不合格管废料 | 废料称量票据和不合格记录 | 容器或批次编号；原因；质量；去向；内部回用标志；日期 | 与不合格记录关联的经校准秤 | kg | 每容器、批次或发运 | 与产品产出相同期间 | 最终定径、切割和检验 | 仅按去向汇总净跨界废料并按合格产品归一化 | 秤校准、不合格日志、称量票据和去向记录 |
| `cp_direct_fossil_co2` | sizing_finishing_and_inspection | 直接燃烧式热处理产生的化石二氧化碳 | 烟气记录或燃料碳计算记录 | 关联燃气体积；参考条件；气体组成或碳含量；氧化依据；实测时的烟气浓度和流量；炉次编号 | 经校准烟气测量，或依据 `cp_heat_treatment_natural_gas` 的有记录碳平衡计算 | kg CO2 | 每个监测炉次或计算期间 | 与直接燃烧式热处理产品产出相同期间 | 仅直接炉烟气 | 计算或汇总直接化石 CO2，排除上游燃料和电力排放，并按合格热处理产品归一化 | 分析仪校准或燃料质量证书、公式工作表和炉次关联 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_flow` | 所有外部清单行 | 归一化数量 = 归属于声明产品的跨界数量 / 合格参考产品质量 | 适用采集协议；`cp_accepted_product_mass` | 每 1 kg 合格产品的数量 |  |
| `calc_reconcile_internal_strip` | 钢分条转移 | 期初钢分条库存 + 分条产出 - 成形投入 - 期末钢分条库存 = 有记录转移差异；发布前调查重大差异 | `cp_slit_strip_transfer`; `cp_forming_strip_transfer` | 经核对的内部钢分条转移 |  |
| `calc_reconcile_internal_welded_tube` | 焊后管材转移 | 期初中间体库存 + 焊接产出 - 精整投入 - 期末中间体库存 = 有记录转移差异；发布前调查重大差异 | `cp_welded_tube_transfer`; `cp_finishing_tube_transfer` | 经核对的内部焊后管材转移 |  |
| `calc_steel_mass_balance` | 含钢流 | 消耗钢卷质量 = 合格管材质量 + 净废钢质量 + 有记录含钢损失 + 期末库存增加量 - 期初库存增加量；披露并调查残差 | `cp_coil_receiving`; 转移协议；`cp_edge_trim_scrap`; `cp_weld_flash_scrap`; `cp_cutoff_reject_scrap`; `cp_accepted_product_mass` | 报告期钢质量平衡残差 |  |
| `calc_direct_fossil_co2` | 直接燃烧式热处理 | 按声明条件下采集的燃气体积、经核实的组成或碳含量及声明氧化依据计算化石 CO2，或汇总经校准的烟气质量流量；不得加入上游燃烧排放 | `cp_heat_treatment_natural_gas`; `cp_direct_fossil_co2` | 每 1 kg 合格热处理产品的化石 CO2（kg） |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和进料身份 | 每个报告批次应将钢级、合金类别、截面几何形状、尺寸、壁厚、成形路线、焊接技术、热处理状态、涂覆状态和适用规范关联到参考流及钢卷投入。 | 产品证书、钢卷证书、路线卡和检验放行记录 |
| `dq_temporal_alignment` | 全部前景记录 | 清单分子记录与合格产品分母记录应覆盖同一代表期间；应识别数据缺口、停机、试产和异常批次。 | 期间核对和覆盖率表 |
| `dq_measurement` | 质量、电力、用水、燃气和排放 | 对重大计量保留仪表编号、校准状态、读数频次、缺失数据处理、单位换算及不确定度或准确度信息。 | 校准证书、仪表导出、称量票据和计算工作表 |
| `dq_completeness` | 全部过程行 | 报告每个适用行，对零值或不适用提供证据，核对内部转移，并解释被排除的微小交换，不得将其置于未说明的汇总流中。 | 行完整性矩阵及质量和能量核对 |
| `dq_upstream_representativeness` | 外购钢卷、电力、天然气和用水 | 识别上游数据集提供方、地域、技术、参考年份、供应商特定或市场平均状态，以及其与前景供应的偏差。 | 供应商记录和上游数据集元数据 |
| `dq_waste_destination` | 废钢和废水 | 识别接收设施或买方、处理或回收路线、运输关联以及是否达到废物终止状态；不得仅因废物具有正价值就假定其被回收。 | 转移联单、买方凭证、许可或处理记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 确认参考产品为具有已声明非圆形闭合截面的焊接钢管，并存在其 UUID、Mass 属性、kg 单位、产品状态和必需限定信息。 | `unsd-cpc-3-0-structure-2025` |
| `val_scope_gate` | 系统边界 | 确认数据集以外购钢卷为起点，以合格未加工管材到达制造商厂门为终点；单独识别上游供应以及下游加工、涂覆、安装、使用和寿命终止。 | `sti-hss-sustainability-guide` |
| `val_route` | 过程图 | 确认声明的直接成形或连续成形路线、焊接技术、焊瘤去除方式和条件性热处理状态与清单一致。 | `sti-hss-seam-welds`; `sti-hss-heat-treating-2017` |
| `val_reference_normalization` | 清单数量 | 确认每项外部数量均按同一实测合格产品质量归一化，且内部转移未计入汇总的外部投入和产出。 |  |
| `val_steel_mass_balance` | 含钢流 | 确认报告期内的钢卷投入、内部钢材转移、合格产品、各工业后钢废料流、库存变化以及任何有记录含钢损失相互平衡。 |  |
| `val_energy_water` | 电力、燃气和用水 | 确认已披露仪表、电压和供应组合、燃气参考条件、补充水与循环水、换算、路线适用性以及分配驱动因素。 |  |
| `val_direct_co2` | 化石二氧化碳 | 直接燃烧式热处理适用时，确认直接化石 CO2 与相同燃气炉次关联且排除上游电力和燃料供应排放；否则要求天然气行和 CO2 行均有不适用记录。 |  |
| `val_scrap_recycling` | 制造废钢 | 确认各废料行报告实物质量和去向，且任何回收信用或寿命终止收益均置于本门到门清单之外并另行披露。 | `worldsteel-lci-methodology-2017` |
| `val_data_quality` | 数据集发布 | 确认时间一致性、校准证据、缺失数据处理、上游数据集代表性、行完整性和废水表征足以支持声明的数据集角色。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 进料、成形路线、焊接技术、截面、钢级、热处理和涂覆状态、地域、期间及制造商厂门相匹配的焊接非圆形钢管数据集 |
| excluded_use | 无缝管或圆管；铸造管或开缝管；管件；特定油气管；项目加工；前景数据未表示的涂覆或热处理状态；安装、使用或寿命终止 |
| required_metadata | 参考流 UUID 和限定信息；场址和地域；数据期间；钢卷供应商和上游数据集；成形和焊接路线；热处理和涂覆状态；过程覆盖；分配；废料和废水去向；数据质量评级 |
| required_quality_disclosure | 实测与分配比例；仪表和称量覆盖；内部转移及钢质量平衡残差；缺失数据处理；上游数据集偏差；不确定度；未解决 UUID 和范围证据需求 |
| update_trigger | 进料钢级或供应商组合、成形或焊接技术、截面类别、热处理、涂覆纳入情况、能源或用水系统、废料或废水路线、场址、地域、数据期间或数据质量发生重大变化 |

## 11. 数据源

| Source id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 3.0 产品身份及编码 41288 的正式措辞 |
| `sti-hss-seam-welds` | literature | https://steeltubeinstitute.org/resources/hss-seam-welds/ | 直接成形与连续成形的过程分解、纵缝焊接及焊瘤去除 |
| `sti-hss-sustainability-guide` | extension_guidance | https://steeltubeinstitute.org/resources/practical-guide-to-hss-sustainability-documentation-and-submittals/ | 钢卷投入、管材成形边界以及未加工管材制造与下游加工的区分 |
| `sti-hss-heat-treating-2017` | literature | https://steeltubeinstitute.org/resources/heat-treating-hss/ | 焊接 HSS 成形路线及条件性产后热处理 |
| `worldsteel-lci-methodology-2017` | method_factor | https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf | 钢铁门到门 LCI 框架以及废钢和回收的透明一致处理 |
