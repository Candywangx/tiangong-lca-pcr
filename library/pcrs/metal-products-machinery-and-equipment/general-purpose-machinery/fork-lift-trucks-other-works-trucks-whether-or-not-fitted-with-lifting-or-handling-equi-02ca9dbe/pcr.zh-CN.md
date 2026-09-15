---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.fork-lift-trucks-other-works-trucks-whether-or-not-fitted-with-lifting-or-handling-equi-02ca9dbe
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 叉车、其他作业车辆及铁路站台用牵引车

## 1. 范围与适用性

本 PCR 适用于新制造完整叉车、无论是否装有起升或搬运设备的其他作业车辆及铁路站台用牵引车的从摇篮到工厂大门生产，涵盖电动或内燃动力、人工驾驶或自动驾驶的工业车辆。不包括以起重机为主要功能的装有起重机作业车辆、单独销售的零部件、再制造车辆、配送、使用、维护及寿命终结；下游研究应另行加入这些阶段。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.fork-lift-trucks-other-works-trucks-whether-or-not-fitted-with-lifting-or-handling-equi-02ca9dbe |
| classification_refs | CPC 3.0:43530 |
| covered_products | 叉车；无论是否装有起升或搬运设备的其他作业车辆；铁路站台用牵引车 |
| excluded_products | 按起重机功能分类的装有起重机作业车辆；升降机和输送机；单独销售的零部件；再制造车辆 |
| representative_product | 一台按声明交付配置完成制造并通过出厂检验的新工业车辆 |
| production_route | 采购材料及部件接收；金属制造；表面处理；动力系统及总装；出厂检验 |
| market_state | 制造场址大门处的新完整车辆；交付附件、牵引电池、工作液及初装燃料的纳入情况均须声明 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一台能够实现所声明起升、搬运、牵引、顶推、堆垛或站台牵引功能的新工业车辆 |
| How much | 一台完整车辆 |
| How well | 符合所声明的型号规范、额定载荷或牵引能力、适用时的起升高度、动力系统、轮胎结构、附件及验收结果 |
| How long or cycle | 工厂大门产品；设计寿命及保证工况须供下游使用披露，但不作为本从摇篮到大门 PCR 的归一化基础 |
| reference_flow_link | 同一完整车辆作为参考产品输出报告的净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 一台完整交付车辆实测净质量（kg） |
| 参考产品流 | 叉车，其他装有或未装有起重或装卸设备的工程卡车，火车站月台用牵引车 `16db3897-10b6-48ba-a91a-d4b4bc52f185` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号和配置；工业车辆功能；额定载荷或牵引能力；适用时的起升高度；驾驶或自动化方式；动力系统及能源载体；牵引电池化学体系、容量、质量和纳入情况；轮胎结构；附件；配重纳入；液压油纳入；初装燃料纳入；工厂大门地理位置；生产期；净质量测量方法；验收状态 |

缺失必需限定信息的前景数据包不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mu_reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 最终检验后称量完整交付配置；排除可重复使用的厂内工装和另行报告的运输包装，并披露电池、附件、工作液、配重及初装燃料的纳入情况。 |
| `mu_count_to_mass` | 按件采购记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用批次实测净质量或供应商文件将件数换算为质量，并保留件数、质量系数、批次和不确定性。 |
| `mu_electricity` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表 kWh，并按 1 kWh = 3.6 MJ 换算；不得把上游发电排放列为工厂直接排放。 |
| `mu_gas_volume` | 气体投入 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录仪表基准温度和压力，并换算到统一且已披露的基准状态。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购材料、部件、能源载体和工艺辅料进入制造场址 |
| starting_condition_role | 前景制造始于场址接收；上游生产通过供应商特定或代表性上游数据集连接 |
| product_classification_scope | 上述语义边界内的新完整产品，不因动力系统、驾驶方式或可选搬运设备而改变 |
| recursive_input_rule | 为改装而采购的同类别完整车辆仅作为一个产品投入并连接上游 PCR 合规数据集，不递归重建其制造清单 |
| upstream_dataset_requirement | 每项采购材料、部件、燃料、电力和处理服务均须连接地理及技术上具有代表性的上游数据集；缺少供应商数据时披露替代数据 |
| disclosure | 披露场址、生产期、型号系列、纳入过程、排除的可归属过程及理由、外包作业、分配、数据缺口和相对交付配置的全部偏离 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_gate` | 从摇篮到工厂大门的前景边界 | 纳入接收、受控金属制造、表面准备与涂装、动力系统及总装、工作液加注、出厂检验、返工、场内处理和直接控制的公用工程，直至成品放行。 | `ghg-protocol-product-standard-2011` |
| `sb_upstream` | 采购投入 | 连接上游生产和入厂供应数据集；除非报告组织控制该过程，不将其移入前景。 | `ghg-protocol-product-standard-2011` |
| `sb_exclusions` | 可归属过程 | 披露并说明每项排除；仅在记录数据缺口、无法估算及不显著性评估后方可省略。 | `ghg-protocol-product-standard-2011` |
| `sb_route` | 变型特定过程 | 仅纳入适用于声明配置的过程和原子流；不得在未披露有代表性的产量加权模型时混合电动和内燃路线。 | `toyota-industries-materials-handling-equipment` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `metal_fabrication` | 金属制造 | required |  | 受控切割、成形、机械加工和焊接 | 每台转入表面处理的完整车辆 |
| `surface_finishing` | 表面准备与处理 | required |  | 清洗、前处理、涂装和固化 | 每台转入总装的完整车辆 |
| `final_assembly` | 动力系统及总装 | required |  | 部件安装、工作液加注和配置 | 每台进入出厂检验的完整车辆 |
| `factory_testing` | 出厂检验与放行 | required |  | 验收检验、返工归属和产品放行 | 每台验收合格车辆 |

### 过程：金属制造（`metal_fabrication`）

#### 输入

##### 产品流

###### 结构钢板（`mf_steel_sheet`）

本卡记录跨越相应前景过程边界的一个原子交换；其数量按所列采集协议取得。

- 选定流：非合金钢板，卷 `ce3ac926-5d6f-4558-9edc-67179d93dde4`
- 流属性/单位：Mass / kg
- 数量规则：净领用质量加可归属切割和成形损失。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格车辆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mf_inputs`
- 来源：

###### 铸铁部件（`mf_cast_iron`）

本卡记录跨越相应前景过程边界的一个原子交换；其数量按所列采集协议取得。

- 选定流：铸铁 `abfe4e3d-cbaf-5c44-a687-a49d83a0430c`
- 流属性/单位：Mass / kg
- 数量规则：装入车辆的铸铁质量加可归属不合格质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格车辆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mf_inputs`
- 来源：

###### 药芯焊丝（`mf_welding_wire`）

本卡记录跨越相应前景过程边界的一个原子交换；其数量按所列采集协议取得。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：仅在使用药芯焊接时，领用量减经核实的未用退回量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收合格车辆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mf_inputs`
- 来源：

###### 制造用电（`mf_electricity`）

本卡记录跨越相应前景过程边界的一个原子交换；其数量按所列采集协议取得。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 `mu_electricity` 将分表 kWh 换算为 MJ。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收合格车辆
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_mf_inputs`
- 来源：

###### 切割用氧气（`mf_oxygen`）

本卡记录跨越相应前景过程边界的一个原子交换；其数量按所列采集协议取得。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：仅在使用氧燃料切割时记录仪表或钢瓶盘存量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收合格车辆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mf_inputs`
- 来源：

##### 废物流

前景数据包须把实际外运废钢、废加工液、废磨料或处理残渣分别记录为独立废物交换。

##### 基本流

受控制造设备的实测排放须按物种分别记录。

#### 输出

##### 产品流

内部制造组件属于内部转移，不重复作为外部交换。

##### 废物流

##### 基本流

### 过程：表面准备与处理（`surface_finishing`）

#### 输入

##### 产品流

###### 工艺用水（`sf_process_water`）

本卡记录跨越相应前景过程边界的一个原子交换；其数量按所列采集协议取得。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：清洗、漂洗和槽液补加的计量用水质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收合格车辆
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sf_inputs`
- 来源：

###### 氢氧化钠（`sf_sodium_hydroxide`）

本卡记录跨越相应前景过程边界的一个原子交换；其数量按所列采集协议取得。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：仅在声明槽液配方使用时记录投加的有效氢氧化钠质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收合格车辆
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sf_inputs`
- 来源：

###### 工业防护涂料（`sf_coating`）

本卡记录跨越相应前景过程边界的一个原子交换；其数量按所列采集协议取得。

- 选定流：工业维护涂料 `46c99c8a-0ae9-4be8-972f-a2b9ab3baaf5`
- 流属性/单位：Mass / kg
- 数量规则：涂料领用量减经核实可复用退回量；声明配方、固体分和施工路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收合格车辆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sf_inputs`
- 来源：

###### 表面处理用电（`sf_electricity`）

本卡记录跨越相应前景过程边界的一个原子交换；其数量按所列采集协议取得。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表电量由 kWh 换算为 MJ。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收合格车辆
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sf_inputs`
- 来源：

###### 固化用天然气（`sf_natural_gas`）

本卡记录跨越相应前景过程边界的一个原子交换；其数量按所列采集协议取得。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：仅在天然气固化或槽液加热时记录标准化计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收合格车辆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sf_inputs`
- 来源：

##### 废物流

每种废槽液、废水、涂装污泥和废过滤材料须按物态和处理路线分别记录。

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 表面处理燃烧产生的化石源二氧化碳（`sf_co2_fossil`）

本卡记录跨越相应前景过程边界的一个原子交换；其数量按所列采集协议取得。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：场内天然气燃烧的烟道实测质量或化石碳平衡计算值；排除上游电力排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收合格车辆
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sf_emissions`
- 来源：

### 过程：动力系统及总装（`final_assembly`）

#### 输入

##### 产品流

###### 总装用电（`fa_electricity`）

本卡记录跨越相应前景过程边界的一个原子交换；其数量按所列采集协议取得。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：总装分表电量由 kWh 换算为 MJ。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收合格车辆
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_fa_inputs`
- 来源：

###### 液压油加注（`fa_hydraulic_fluid`）

本卡记录跨越相应前景过程边界的一个原子交换；其数量按所列采集协议取得。

- 选定流：液压油 `eafff56c-3487-4345-9f24-00429f61c556`
- 流属性/单位：Mass / kg
- 数量规则：交付车辆内保留的新液压油净质量加可归属加注损失。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格车辆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fa_inputs`
- 来源：

###### 铅酸牵引电池（`fa_lead_acid_battery`）

本卡记录跨越相应前景过程边界的一个原子交换；其数量按所列采集协议取得。

- 选定流：铅酸牵引电池
- 流属性/单位：Mass / kg
- 数量规则：仅对交付配置装有铅酸牵引电池的车辆记录电池包质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格车辆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fa_inputs`
- 来源：

###### 锂离子牵引电池（`fa_lithium_ion_battery`）

本卡记录跨越相应前景过程边界的一个原子交换；其数量按所列采集协议取得。

- 选定流：锂离子牵引电池
- 流属性/单位：Mass / kg
- 数量规则：仅对交付配置装有锂离子牵引电池的车辆记录电池包质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格车辆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fa_inputs`
- 来源：

###### 实心工业车辆轮胎（`fa_solid_tyre`）

本卡记录跨越相应前景过程边界的一个原子交换；其数量按所列采集协议取得。

- 选定流：实心橡胶工业车辆轮胎
- 流属性/单位：Mass / kg
- 数量规则：仅对装有实心或弹性橡胶轮胎的配置记录已安装轮胎质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格车辆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fa_inputs`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：出厂检验与放行（`factory_testing`）

#### 输入

##### 产品流

###### 检验用电（`ft_electricity`）

本卡记录跨越相应前景过程边界的一个原子交换；其数量按所列采集协议取得。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：仅对电动检验配置记录充电及试验台电量，并由 kWh 换算为 MJ。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格车辆
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_ft_inputs`
- 来源：

###### 检验用柴油（`ft_diesel`）

本卡记录跨越相应前景过程边界的一个原子交换；其数量按所列采集协议取得。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：仅对柴油配置记录出厂验收检验实际消耗的柴油净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格车辆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ft_inputs`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格的完整工业车辆（`ft_reference_product`）

本卡记录跨越相应前景过程边界的一个原子交换；其数量按所列采集协议取得。

- 选定流：叉车，其他装有或未装有起重或装卸设备的工程卡车，火车站月台用牵引车 `16db3897-10b6-48ba-a91a-d4b4bc52f185`
- 流属性/单位：Mass / kg
- 数量规则：验收合格交付配置的实测净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：一台验收合格的完整车辆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output`
- 来源：

##### 废物流

##### 基本流

###### 柴油检验产生的化石源二氧化碳（`ft_co2_fossil`）

本卡记录跨越相应前景过程边界的一个原子交换；其数量按所列采集协议取得。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：柴油出厂检验的实测尾气质量或化石碳平衡计算值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格车辆
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_ft_emissions`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `al_subdivide` | 共线、公用工程和返工 | 通过分表、批次追踪、过程细分或配置特定生产记录避免分配。 | `ghg-protocol-product-standard-2011` |
| `al_physical` | 无法避免的共同负荷 | 按机器时间、计量能源、涂装面积、焊缝长度或检验台数等因果物理关系分配；质量仅在代表因果关系时使用。 | `ghg-protocol-product-standard-2011` |
| `al_fallback` | 无可辩护物理关系 | 仅在记录物理分配不可行后使用经济或其他合理关系，并进行敏感性检验。 | `ghg-protocol-product-standard-2011` |
| `al_waste` | 废料和废物 | 不向无经济价值的输出分配制造负荷；披露出售可回收材料的处理和抵扣方法。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mf_inputs` | `metal_fabrication` | 材料与能源投入 | ERP 领退料、发票、衡器、气体和电表 | 物料及批次；领退量；净质量；kWh；气体体积及仪表条件；合格台数 | 将批次和分表记录与放行组件核对 | kg; kWh; m3 | 每批及每月 | 有代表性的连续 12 个月 | 所有受控制造线 | 净耗用量除以配置等效合格车辆 | 校准记录；ERP 核对；废料平衡 |
| `cp_sf_inputs` | `surface_finishing` | 水、化学品、涂料和能源 | 仪表、槽液补加、涂料领退和发票 | 水量和密度；浓度；溶液质量；涂料领退；kWh；气量；合格台数 | 将仪表及配方记录与处理完成车体核对 | kg; kWh; m3 | 每批及每月 | 有代表性的连续 12 个月 | 所有前处理和涂装线 | 可归属投入总量除以合格车辆 | 仪表校准；配方和库存核对 |
| `cp_sf_emissions` | `surface_finishing` | 直接燃烧排放 | 烟道测量或燃料碳平衡 | 燃料体积；碳含量；氧化率；实测 CO2；合格台数 | 使用经核实的烟道数据或碳平衡 | kg | 每次试验或每月 | 与投入同期 | 所有场内表面处理燃烧 | 化石源 CO2 总量除以合格车辆 | 分析仪校准或签署计算表 |
| `cp_fa_inputs` | `final_assembly` | 总装投入 | BOM、供应商声明、领退料、加注和电表 | 部件；件数；净质量；化学体系；容量；工作液；kWh；合格台数 | 核对按序列号记录的实装 BOM 和仪表 | kg; kWh | 每台及每月 | 有代表性的连续 12 个月 | 所有总装线 | 配置特定投入总量除以合格车辆 | 实装 BOM；供应商规范；加注和电表校准 |
| `cp_ft_inputs` | `factory_testing` | 检验能源 | 检验日志、充电器、燃料领退和仪表 | 序列号；循环；kWh；燃料质量；返工；结果 | 每次检验和复检关联到车辆序列号 | kg; kWh | 每次检验 | 与生产同期 | 所有检验站 | 每台合格车辆纳入全部可归属检验和复检 | 签署验收记录；仪表校准；燃料核对 |
| `cp_ft_emissions` | `factory_testing` | 柴油检验直接排放 | 尾气测量或燃料碳平衡 | 燃料质量；碳含量；氧化率；实测 CO2；序列号 | 使用经核实的尾气数据或碳平衡 | kg | 代表性检验或每月 | 与检验同期 | 所有燃烧检验 | 可归属化石源 CO2 除以合格车辆 | 分析仪校准或签署计算表 |
| `cp_product_output` | `factory_testing` | 参考产品 | 最终衡器和放行记录 | 序列号；型号；配置；净质量；电池、工作液、附件和燃料纳入；验收状态 | 按 `mu_reference_mass` 在最终验收后称量 | kg | 每台 | 与投入同期 | 所有放行点 | 缺少单台记录时才报告型号均值并保留分布 | 衡器校准；签署放行和配置记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_electricity_mj` | 所有电力行 | MJ = 实测 kWh × 3.6 | 实测 kWh | MJ 电力 |  |
| `calc_water_mass` | `sf_process_water` | 用水质量 = 计量体积 × 记录条件下实测或有文件依据的密度 | 体积；密度；温度 | kg 工艺用水 |  |
| `calc_active_naoh` | `sf_sodium_hydroxide` | 有效 NaOH 质量 = 溶液质量 × 实测浓度 | 溶液质量；浓度 | kg NaOH |  |
| `calc_direct_co2` | `sf_co2_fossil`; `ft_co2_fossil` | 优先采用实测 CO2；否则应用有文件依据的燃料碳含量和氧化平衡，不加入上游排放 | 燃料量；碳含量；氧化率 | kg 化石源 CO2 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 保留序列号/型号及全部必需限定信息。 | 放行记录和实装配置 |
| `dq_completeness` | 全部前景过程 | 核对完整实装 BOM、能源、燃料、化学品、废物联单、直接排放、不合格品和返工；未在模式中列出的实际交换仍必须报告。 | 核对工作表和完整性声明 |
| `dq_temporal` | 前景数据 | 使用有代表性的连续 12 个月；较短生产期须说明代表性和季节性。 | 带日期记录和产量 |
| `dq_upstream` | 采购投入 | 记录供应商、地理、技术、重要时的再生含量、数据集年代及替代数据。 | 供应商证据和数据映射 |
| `dq_route` | 产品变型 | 保持电动、柴油、LPG、氢能、自动、人工及附件配置可分；说明汇总权重。 | 配置特定生产记录 |
| `dq_uncertainty` | 计算和分配值 | 保留仪表精度、换算系数、缺失数据估计、分配驱动和敏感性结果。 | 计算表和校准记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `vr_reference` | 参考流 | 确认一台合格车辆、实测净质量、天工产品 UUID 和全部必需限定信息均对应同一交付配置。 | `un-cpc-3-0-structure-2025` |
| `vr_boundary` | 系统边界 | 确认全部受控必需过程均已纳入，排除的可归属过程均已披露并说明。 | `ghg-protocol-product-standard-2011` |
| `vr_inventory` | 前景清单 | 确认每行均为一个原子交换，且 BOM、能源、燃料、水、化学品、废物、排放、不合格品和返工核对完整。 |  |
| `vr_route` | 配置适用性 | 除非披露产量权重及全部路线特定纳入项，不得混合不相容的动力或检验路线。 | `toyota-industries-materials-handling-equipment` |
| `vr_allocation` | 共同负荷 | 确认已尝试细分、驱动因素具有因果性，且后备分配有理由和敏感性检验。 | `ghg-protocol-product-standard-2011` |
| `vr_uuid` | 天工引用 | 确认每个 UUID 对应所述公开身份、流类型、属性和单位组；未解决行保持显式。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 所声明完整工业车辆配置的从摇篮到工厂大门产品足迹和生命周期模型 |
| allowed_use | 保留型号、动力、能力、电池、轮胎、附件、地理、时期、边界、分配及数据质量限定信息的产品系统模型 |
| excluded_use | 未增加使用、维护和寿命终结模型的全生命周期或使用阶段比较；额定功能不同的产品比较；无代表性产量权重的“平均车辆” |
| required_metadata | PCR id；版本；场址和地理；时期；型号/配置；额定功能；净质量；动力；电池；轮胎；附件；过程覆盖；分配；上游数据集；未解决事项 |
| required_quality_disclosure | 一手数据占比；时间、地理和技术代表性；仪表和衡器证据；BOM 和质量核对；数据缺口；替代数据；分配和不确定性 |
| update_trigger | 型号或额定功能、动力或电池、交付配置、BOM、涂装路线、工厂过程、能源供应、分配、地理发生实质变化，或数据超出声明代表期 |

## 11. 数据源

| 来源 id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC 第 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 43530 身份和层级 |
| `toyota-industries-materials-handling-equipment` | official_guidance | Toyota Industries, “Materials Handling Equipment,” https://www.toyota-industries.com/products/industrial_vehicles/ | 内燃与电动叉车变型、宽幅额定起重量范围以及牵引车的官方产品证据 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf | 可归属过程边界披露及分配层级 |
